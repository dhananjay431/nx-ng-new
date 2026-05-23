import { Route } from '@angular/router';
import { MainLayoutComponent } from '@ng20/layout';
import { LoginComponent } from '@ng20/auth';
import { AuthGuard } from '@ng20/auth';
import { loadRemoteModule } from '@nx/angular/mf';

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
          loadRemoteModule('customer', './Routes').then((m) => m.remoteRoutes),
      },
      {
        path: 'billing',
        loadChildren: () =>
          loadRemoteModule('billing', './Routes').then((m) => m.remoteRoutes),
      },
      {
        path: 'reports',
        loadChildren: () =>
          loadRemoteModule('reports', './Routes').then((m) => m.remoteRoutes),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
