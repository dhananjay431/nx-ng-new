import { Component, inject, computed } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SidebarService } from '@ng20/utils';
import { AuthService } from '@ng20/auth';
import { MenuItem } from '@ng20/models';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'lib-sidebar',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class SidebarComponent {
  readonly sidebarService = inject(SidebarService);
  readonly authService = inject(AuthService);
  readonly router = inject(Router);

  readonly isOpen = computed(() => this.sidebarService.isOpen());

  readonly menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'bi bi-speedometer2',
      route: '/dashboard',
      moduleKey: 'dashboard',
    },
    {
      label: 'Customer',
      icon: 'bi bi-people',
      route: '/customer',
      moduleKey: 'customer',
    },
    {
      label: 'Billing',
      icon: 'bi bi-receipt',
      route: '/billing',
      moduleKey: 'billing',
    },
    {
      label: 'Reports',
      icon: 'bi bi-bar-chart',
      route: '/reports',
      moduleKey: 'reports',
    },
    {
      label: 'Settings',
      icon: 'bi bi-gear',
      route: '/settings',
      moduleKey: 'settings',
    },
  ];

  get filteredMenuItems(): MenuItem[] {
    return this.menuItems.filter((item) =>
      this.authService.hasPermission(item.moduleKey),
    );
  }

  isActive(route: string): boolean {
    return this.router.url.startsWith(route);
  }

  closeSidebar(): void {
    this.sidebarService.close();
  }

  logout(): void {
    this.authService.logout();
  }
}
