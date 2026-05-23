import { Component, inject, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarService } from '@ng20/utils';
import { TopMenubarComponent } from '../top-menubar/top-menubar';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  standalone: true,
  imports: [RouterModule, TopMenubarComponent, SidebarComponent],
  selector: 'lib-main-layout',
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayoutComponent {
  readonly sidebarService = inject(SidebarService);
  readonly isSidebarOpen = computed(() => this.sidebarService.isOpen());
}
