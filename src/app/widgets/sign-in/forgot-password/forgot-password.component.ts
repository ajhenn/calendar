import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SignInService } from '../../../services/sign-in.service';
import { debounce, form, FormField, required, email } from '@angular/forms/signals';

@Component({
  selector: 'app-forgot-password',
  imports: [FormField, MatDialogModule, MatFormFieldModule,
    MatIconModule, MatInputModule, MatButtonModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordComponent {

  private dialogRef = inject<MatDialogRef<ForgotPasswordComponent>>(MatDialogRef);
  private signInService = inject(SignInService);
  public dialogData = inject<{email: string, successMsg: string}>(MAT_DIALOG_DATA);
  private readonly errorMsgString = 'An unexpected error occurred. Please try again later.';

  forgotPasswordModel = signal({
    email: this.dialogData?.email ?? ''
  });

  forgotPwForm = form(this.forgotPasswordModel, (schemaPath) => {
    debounce(schemaPath.email, 500);
    required(schemaPath.email, {message: 'Email is required.'});
    email(schemaPath.email, {message: 'Enter a valid email address.'});
  });

  forgotError = signal<string | null>(null);

  async forgotPassword(event: Event) {
    event.preventDefault();
    try {
      const response = await this.signInService.forgotPassword(this.forgotPasswordModel().email);

      if (response.error) {
        this.forgotError.set(this.errorMsgString);
      } else {
        this.dialogRef.close({ email: this.forgotPasswordModel().email ?? '', successMsg: 'Success! A password reset email has been sent.' });
      }
    } catch (error: any) {
      const errorMessage = error?.message || 'An unexpected error occurred';
      this.forgotError.set(this.errorMsgString);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
