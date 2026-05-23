import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class DashboardComponent {
  stats = [
    {
      label: 'Total Customers',
      value: '2,845',
      icon: 'bi bi-people',
      color: 'primary',
    },
    {
      label: 'Active Invoices',
      value: '1,420',
      icon: 'bi bi-receipt',
      color: 'success',
    },
    {
      label: 'Revenue (MTD)',
      value: '$84,320',
      icon: 'bi bi-cash-stack',
      color: 'warning',
    },
    {
      label: 'Reports Generated',
      value: '326',
      icon: 'bi bi-bar-chart',
      color: 'info',
    },
  ];

  recentActivity = [
    {
      action: 'New customer registered',
      user: 'Acme Corp',
      time: '2 min ago',
      type: 'customer',
    },
    {
      action: 'Invoice #INV-2024-0502 paid',
      user: 'Globex Inc',
      time: '15 min ago',
      type: 'billing',
    },
    {
      action: 'Monthly sales report generated',
      user: 'System',
      time: '1 hour ago',
      type: 'reports',
    },
    {
      action: 'Customer profile updated',
      user: 'Initech Ltd',
      time: '3 hours ago',
      type: 'customer',
    },
    {
      action: 'Batch invoice run completed',
      user: 'System',
      time: '5 hours ago',
      type: 'billing',
    },
  ];
}
