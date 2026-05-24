import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-customer-entry',
  styles: `
    .remote-page {
      padding: 1.5rem;
    }
    .tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
      border-bottom: 1px solid #dee2e6;
    }
    .tab-link {
      color: #495057;
      padding: 0.75rem 1rem;
      text-decoration: none;
      border: 1px solid transparent;
      border-radius: 0.5rem 0.5rem 0 0;
      margin-bottom: -1px;
    }
    .tab-link.active {
      color: #0d6efd;
      background: #fff;
      border-color: #dee2e6 #dee2e6 #fff;
      font-weight: 600;
    }
  `,
  template: `
    <section class="remote-page">
      <h2>Customer</h2>
      <nav class="tabs" aria-label="Customer tabs">
        @for (tab of tabs; track tab.path) {
          <a
            class="tab-link"
            [routerLink]="tab.path"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
          >
            {{ tab.label }}
          </a>
        }
      </nav>

      <router-outlet></router-outlet>
    </section>
  `,
})
export class RemoteEntry {
  protected readonly tabs = [
    { path: 'profiles', label: 'Profiles' },
    { path: 'accounts', label: 'Accounts' },
    { path: 'contacts', label: 'Contacts' },
    { path: 'activity', label: 'Activity' },
  ];
}
