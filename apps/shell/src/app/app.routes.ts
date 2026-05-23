import { Route } from '@angular/router';
import { MainLayoutComponent } from '@ng20/layout';
import { LoginComponent } from '@ng20/auth';
import { AuthGuard } from '@ng20/auth';

export const appRoutes: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard').then((m) => m.DashboardComponent),
      },
      {
        path: 'customer',
        loadChildren: () =>
          import('customer/Routes').then((m) => m.remoteRoutes),
      },
      {
        path: 'billing',
        loadChildren: () =>
          import('billing/Routes').then((m) => m.remoteRoutes),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('reports/Routes').then((m) => m.remoteRoutes),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
