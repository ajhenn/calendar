import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { debounce, email, form, FormField, pattern, required } from '@angular/forms/signals';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as CalendarActions from '../../store/calendar.actions';
import { SignInService } from '../../services/sign-in.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sign-in',
  imports: [FormField, MatCardModule, MatFormFieldModule,
    MatInputModule, MatButtonModule, MatCheckboxModule,
    MatIconModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent {

  private dialog = inject(MatDialog);
  private destroyRef = inject(DestroyRef);
  private router = inject(Router);
  private store = inject(Store);
  private signInService = inject(SignInService);

  isCreateAccount = signal(false);
  isTransitioning = signal(false);
  signInError = signal<string | null>(null);
  signInTimeout = signal<string | null>(
     this.router.currentNavigation()?.extras.state?.['isTimedOut'] ?? false
  );
  createAccountError = signal<string | null>(null);
  createAccountSuccess = signal<string | null>(null);
  maskCreatePassword = signal(true);

  signInModel = signal({
    email: '',
    password: '',
    rememberMe: false
  });
  signInForm = form(this.signInModel, (schemaPath) => {
    debounce(schemaPath.email, 500);
    required(schemaPath.email, {message: 'Email is required.'});
    email(schemaPath.email, {message: 'Enter a valid email address.'});
    required(schemaPath.password, {message: 'Password is required.'});
  });

  createAccountModel = signal({
    name: '',
    email: '',
    password: '',
    hasInviteCode: true,
    inviteCode: ''
  });
  createAccountForm = form(this.createAccountModel, (schemaPath) => {
    required(schemaPath.name, {message: 'Name is required.'});
    debounce(schemaPath.email, 500);
    required(schemaPath.email, {message: 'Email is required.'});
    email(schemaPath.email, {message: 'Enter a valid email address.'});
    debounce(schemaPath.password, 500);
    required(schemaPath.password, {message: 'Password is required.'});
    pattern(schemaPath.password, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/, {message: 'Password must be at least 10 characters long and include uppercase, lowercase, and a number.'});
    required(schemaPath.inviteCode, {message: 'Invite code is required.'});
    debounce(schemaPath.inviteCode, 500);
  });

  resetSuccessMessage = signal<string | null>(null);

  toggleCreateAccount() {
    this.isTransitioning.set(true);
    this.signInError.set(null);
    this.signInTimeout.set(null);
    // this.createAccountForm().reset();
  }

  onCardAnimationEnd() {
    if (this.isTransitioning()) {
      this.isCreateAccount.update(value => !value);
      this.isTransitioning.set(false);
    }
  }

  goToCalendar() {
    this.store.dispatch(CalendarActions.routerGoToCalendar());
  }

  toggleCreatePasswordMask() {
    this.maskCreatePassword.update(v => !v);
  }

  async handleSignIn(event: Event) {
    event.preventDefault();
    this.signInError.set(null);
    this.signInTimeout.set(null);
    try {
      const response = await this.signInService.signIn(this.signInModel().email, this.signInModel().password);
      
      if (response.error) {
        this.signInError.set(this.setErrorMsg(response.error));
      } else {
        this.goToCalendar();
      }
    } catch (error: any) {
      const errorMessage = error?.message || 'An unexpected error occurred';
      this.signInError.set(this.setErrorMsg(errorMessage));
    }
  }

  setErrorMsg(errorMsg: string | null) {
    const errorMap: Record<string, string> = {
      'Invalid login credentials': 'Incorrect email or password. Please try again.',
      'Account Creation Fail': 'We\'re having trouble creating your account. Please try again.',
      'Email not confirmed': 'Check for the email we sent and confirm your account before signing in.',
      'default': 'Oh shit, something broke! Contact Andy for help. <br><br> Error: ' + errorMsg
    };
    return (errorMsg && errorMap[errorMsg]) || errorMap['default'];
  }

  async handleCreateAccount(event: Event) {
    event.preventDefault();
    this.createAccountError.set(null);
    this.signInTimeout.set(null);

    try {
      const response = await this.signInService.signUp(
        this.createAccountModel().email,
        this.createAccountModel().password,
        this.createAccountModel().name,
        this.createAccountModel().inviteCode
      );
      
      if (response.error) {
        this.createAccountError.set(response.error);
      } else {
        this.createAccountSuccess.set('Nice work! Check your email to confirm your account and sign in.');
      }
    } catch (error: any) {
      const errorMessage = error?.message || 'An unexpected error occurred';
      this.createAccountError.set(this.setErrorMsg(errorMessage));
    }
  }

  openForgotPwModal() {
    this.dialog.open(ForgotPasswordComponent, {
      data: {
        email: this.signInModel().email ?? ''
      }
    }).afterClosed()
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(({ email, successMsg } = {}) => {
        if (successMsg) {
          this.resetSuccessMessage.set(successMsg);
        }
      });
  }

}
