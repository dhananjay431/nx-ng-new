import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-activity',
  styles: `
    .tab-page {
      border: 1px solid #e9ecef;
      border-radius: 0.75rem;
      padding: 1.25rem;
      background: #fff;
      box-shadow: 0 0.25rem 1rem rgb(0 0 0 / 5%);
    }
    h3 {
      margin-top: 0;
      margin-bottom: 0.5rem;
    }
    p {
      margin: 0;
      color: #6c757d;
    }
  `,
  template: `
    <article class="tab-page">
      <h3>Activity</h3>
      <p>Monitor recent customer interactions, updates, and service history.</p>
    </article>
  `,
})
export class ActivityComponent {}
