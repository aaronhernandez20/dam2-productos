import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  dark = false;

  constructor() {
    const saved = localStorage.getItem('dark');
    this.dark = saved !== null
      ? saved === 'true'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.apply();
  }

  toggle(): void {
    this.dark = !this.dark;
    localStorage.setItem('dark', String(this.dark));
    this.apply();
  }

  private apply(): void {
    document.documentElement.classList.toggle('ion-palette-dark', this.dark);
  }
}