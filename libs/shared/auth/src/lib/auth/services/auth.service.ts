import { Injectable, signal, computed } from '@angular/core';
import { User, LoginRequest, LoginResponse } from '@ng20/models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly tokenKey = 'auth-token';
  private readonly userKey = 'auth-user';
  private readonly currentUserSignal = signal<User | null>(this.loadUser());
  private readonly tokenSignal = signal<string | null>(
    localStorage.getItem(this.tokenKey),
  );

  readonly currentUser = computed(() => this.currentUserSignal());
  readonly isAuthenticated = computed(() => !!this.tokenSignal());
  readonly token = computed(() => this.tokenSignal());

  // Simulated login — replace with real API call
  login(request: LoginRequest): Promise<LoginResponse> {
    // Mock implementation for development
    const mockResponse: LoginResponse = {
      token: 'mock-jwt-token-' + Date.now(),
      refreshToken: 'mock-refresh-token',
      user: {
        id: 'user-1',
        email: request.email,
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
        roles: ['admin'],
        permissions: ['dashboard', 'customer', 'billing', 'reports'],
      },
      expiresAt: Date.now() + 86400000,
    };

    this.setSession(mockResponse);
    return Promise.resolve(mockResponse);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this.tokenSignal.set(null);
    this.currentUserSignal.set(null);
  }

  hasPermission(moduleKey: string): boolean {
    const user = this.currentUserSignal();
    if (!user) return false;
    return user.permissions.includes(moduleKey);
  }

  private setSession(response: LoginResponse): void {
    localStorage.setItem(this.tokenKey, response.token);
    localStorage.setItem(this.userKey, JSON.stringify(response.user));
    this.tokenSignal.set(response.token);
    this.currentUserSignal.set(response.user);
  }

  private loadUser(): User | null {
    const raw = localStorage.getItem(this.userKey);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as User;
    } catch {
      return null;
    }
  }
}
