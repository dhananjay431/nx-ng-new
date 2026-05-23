import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService, SidebarService } from '@ng20/utils';
import { AuthService } from '@ng20/auth';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'lib-top-menubar',
  templateUrl: './top-menubar.html',
  styleUrl: './top-menubar.scss',
})
export class TopMenubarComponent {
  readonly themeService = inject(ThemeService);
  readonly sidebarService = inject(SidebarService);
  readonly authService = inject(AuthService);

  get themeIcon(): string {
    return this.themeService.currentTheme() === 'light'
      ? 'bi bi-moon-stars'
      : 'bi bi-sun';
  }

  get themeLabel(): string {
    return this.themeService.currentTheme() === 'light'
      ? 'Dark Mode'
      : 'Light Mode';
  }

  get username(): string {
    return this.authService.currentUser()?.firstName || 'User';
  }

  toggleSidebar(): void {
    this.sidebarService.toggle();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  logout(): void {
    this.authService.logout();
  }
}
