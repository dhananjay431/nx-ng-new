import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { LoginRequest } from '@ng20/models';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'lib-login',
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  email = '';
  password = '';
  rememberMe = false;
  error = '';
  loading = false;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  async onSubmit(): Promise<void> {
    if (!this.email || !this.password) {
      this.error = 'Email and password are required.';
      return;
    }

    this.loading = true;
    this.error = '';

    try {
      const request: LoginRequest = {
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe,
      };
      await this.authService.login(request);
      this.router.navigate(['/dashboard']);
    } catch {
      this.error = 'Login failed. Please try again.';
    } finally {
      this.loading = false;
    }
  }
}
