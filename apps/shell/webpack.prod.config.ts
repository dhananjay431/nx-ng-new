import { withModuleFederation } from '@nx/module-federation/angular';
import config from './module-federation.config';

/**
 * DTS Plugin is disabled in Nx Workspaces as Nx already provides Typing support for Module Federation
 * The DTS Plugin can be enabled by setting dts: true
 * Learn more about the DTS Plugin here: https://module-federation.io/configure/dts.html
 */
export default withModuleFederation(
  {
    ...config,
    remotes: [
      /* ['customer', 'http://localhost:4201'],
      ['billing', 'http://localhost:4202'],
      ['reports', 'http://localhost:4203'], */
      [
        'customer',
        'https://code.dhananjaypro.in/dhananjay431/nx-ng-new/main/dist/apps/customer',
      ],
      [
        'billing',
        'https://code.dhananjaypro.in/dhananjay431/nx-ng-new/main/dist/apps/billing',
      ],
      [
        'reports',
        'https://code.dhananjaypro.in/dhananjay431/nx-ng-new/main/dist/apps/reports',
      ],
    ],
  },
  { dts: false },
);
