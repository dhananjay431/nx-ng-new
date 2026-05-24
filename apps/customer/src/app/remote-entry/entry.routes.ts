import { Route } from '@angular/router';
import { RemoteEntry } from './entry';
import { AccountsComponent } from './accounts';
import { ActivityComponent } from './activity';
import { ContactsComponent } from './contacts';
import { ProfilesComponent } from './profiles';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntry,
    children: [
      { path: '', redirectTo: 'profiles', pathMatch: 'full' },
      { path: 'profiles', component: ProfilesComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'activity', component: ActivityComponent },
    ],
  },
];
