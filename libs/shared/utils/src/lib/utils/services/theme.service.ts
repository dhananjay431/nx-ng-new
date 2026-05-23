import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'theme';
  private readonly themeSignal = signal<'light' | 'dark'>(
    (localStorage.getItem(this.storageKey) as 'light' | 'dark') || 'light',
  );

  readonly currentTheme = computed(() => this.themeSignal());

  constructor() {
    this.applyTheme(this.themeSignal());
  }

  toggleTheme(): void {
    const next = this.themeSignal() === 'light' ? 'dark' : 'light';
    this.themeSignal.set(next);
    localStorage.setItem(this.storageKey, next);
    this.applyTheme(next);
  }

  setTheme(theme: 'light' | 'dark'): void {
    this.themeSignal.set(theme);
    localStorage.setItem(this.storageKey, theme);
    this.applyTheme(theme);
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }
}
