import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private readonly storageKey = 'sidebar-open';
  private readonly sidebarOpen = signal<boolean>(
    localStorage.getItem(this.storageKey) !== 'false',
  );

  readonly isOpen = computed(() => this.sidebarOpen());

  toggle(): void {
    const value = !this.sidebarOpen();
    this.sidebarOpen.set(value);
    localStorage.setItem(this.storageKey, String(value));
  }

  close(): void {
    this.sidebarOpen.set(false);
    localStorage.setItem(this.storageKey, 'false');
  }

  open(): void {
    this.sidebarOpen.set(true);
    localStorage.setItem(this.storageKey, 'true');
  }
}
