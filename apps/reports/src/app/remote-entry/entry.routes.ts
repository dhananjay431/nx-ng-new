import { Route } from '@angular/router';
import { RemoteEntry } from './entry';
import { CustomersComponent } from './customers';
import { PerformanceComponent } from './performance';
import { RevenueComponent } from './revenue';
import { SalesComponent } from './sales';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntry,
    children: [
      { path: '', redirectTo: 'sales', pathMatch: 'full' },
      { path: 'sales', component: SalesComponent },
      { path: 'revenue', component: RevenueComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'performance', component: PerformanceComponent },
    ],
  },
];
