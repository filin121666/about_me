import { effect, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ColorThemeService {
  private darkThemeSignal = signal<boolean>(false);

  constructor() {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkThemeSignal.set(darkModeMediaQuery.matches);

    darkModeMediaQuery.addEventListener('change', (event: MediaQueryListEvent) => {
      this.darkThemeSignal.set(event.matches);
    });

    effect(() => {
      this.applyTheme(this.darkThemeSignal());
    });
  }

  get isDarkMode(): boolean {
    return this.darkThemeSignal();
  }

  toggleTheme(): void {
    this.darkThemeSignal.update((current) => !current);
  }

  private applyTheme(isDark: boolean): void {
    const body = document.body;
    if (isDark) {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  }
}
