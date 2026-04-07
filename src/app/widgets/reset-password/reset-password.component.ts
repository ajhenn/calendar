import { Component, computed, inject, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { supabase } from '../../supabase.client';
import { SignInService } from '../../services/sign-in.service';
import { LoaderService } from '../../services/loader.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-reset-password',
  imports: [FormField, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css',
})
export class ResetPasswordComponent {
  private router = inject(Router);
  private loaderService = inject(LoaderService);
  private signInService = inject(SignInService);

  recoveredToken = signal(false);
  errorMessage = signal<string | null>(null);
  invalidToken = computed(() => !this.recoveredToken() && this.errorMessage());
  headerMsg = computed(() => {
    return this.recoveredToken() ? 'Reset Password' : 'Wish we had better news'
  });
  subheaderMsg = computed(() => {
    return this.recoveredToken() ? 'Choose and confirm a new password' : 'You\'ll have to try another reset'
  });

  resetPasswordModel = signal({
    password: '',
    confirmPassword: ''
  });

  resetPasswordForm = form(this.resetPasswordModel, (schemaPath) => {
    required(schemaPath.password, {message: 'Password is required.'});
    required(schemaPath.confirmPassword, {message: 'Please confirm your password.'});
  });

  async ngOnInit() {
    this.loaderService.show();
    await supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth state changed:', event, session);
      if (event === 'PASSWORD_RECOVERY') {
        console.log('Password recovery event detected');
        this.recoveredToken.set(true);
        this.loaderService.hide();
      }
    });

    supabase.auth.getSession().then(({ data, error }) => {
      if (error || !data.session) {
        console.error('Error getting session:', error);
        this.errorMessage.set('The reset link is invalid or has expired. Please request a new password reset.');
        this.loaderService.hide();
        return;
      } else if (data.session && data.session.user && data.session.user.role === 'authenticated') {
        console.log('getSession Session data:', data.session);
        this.loaderService.hide();
        this.router.navigate(['/home']);
      }
    }).catch(error => {
      console.error('Error checking session:', error);
      this.errorMessage.set('The reset link is invalid or has expired. Please request a new password reset.');
      this.loaderService.hide();
    }); 
  }

  async updatePassword(event: Event): Promise<void> {
    event.preventDefault();
    const password = this.resetPasswordModel().password;
    const confirmPassword = this.resetPasswordModel().confirmPassword;
    if (password !== confirmPassword) {
      this.errorMessage.set('Passwords do not match.');
      return;
    }
    this.errorMessage.set(null);
    try {
      const response = await this.signInService.resetPassword(password);
      if (response.error) {
        console.error('Error updating password:', response.error);
        this.errorMessage.set('Failed to reset password. Please try again.');
      } else {
        console.log('Password updated successfully');
        this.router.navigate(['/sign-in']);
      }
    } catch (error: any) {
      console.error('Error updating password:', error);
      this.errorMessage.set('Failed to reset password. Please try again.');
    }
  }

  goBack() {
    this.router.navigate(['/sign-in']);
  }

}
