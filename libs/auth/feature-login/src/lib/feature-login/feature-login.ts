import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@errormanagement/data-access-auth';

@Component({
  selector: 'lib-feature-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feature-login.html',
  styleUrl: './feature-login.css',
  standalone: true,
})
export class FeatureLogin {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  isSubmitting = this.authService.isSubmitting;
  errorMessage = this.authService.errorMessage;

  loginForm = this.fb.nonNullable.group({
    username: ['', [Validators.required, Validators.pattern(/^[\S]{4,30}$/)]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[\S]{8,30}$/,
        ),
      ],
    ],
  });

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.getRawValue()).subscribe({
        next: () => this.router.navigate(['applications/hub']),
      });
    }
  }
}
