import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  private title = inject(Title);

  private titles: { [key: string]: string } = {
    'home': 'Главная',
    'skills': 'Навыки', 
    'achievements': 'Достижения',
    'not-found': '404 - Страница не найдена'
  };

  setPageTitle(pageKey: string): void {
    const title = this.titles[pageKey] || 'About Me';
    this.title.setTitle(title);
  }

  setCustomTitle(title: string): void {
    this.title.setTitle(title);
  }

  addPageTitle(pageKey: string, title: string): void {
    this.titles[pageKey] = title;
  }

  getCurrentTitle(): string {
    return this.title.getTitle();
  }
}
