import { Route } from '@angular/router';
import { RemoteEntry } from './entry';
import { InvoicesComponent } from './invoices';
import { PaymentsComponent } from './payments';
import { SubscriptionsComponent } from './subscriptions';
import { TransactionsComponent } from './transactions';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntry,
    children: [
      { path: '', redirectTo: 'invoices', pathMatch: 'full' },
      { path: 'invoices', component: InvoicesComponent },
      { path: 'payments', component: PaymentsComponent },
      { path: 'subscriptions', component: SubscriptionsComponent },
      { path: 'transactions', component: TransactionsComponent },
    ],
  },
];
