import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private title = inject(Title);
  private router = inject(Router);

  private defaultTitle = 'About Me';

  constructor() {
    this.initializeTitleUpdates();
  }

  private initializeTitleUpdates(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.getPageTitleFromRoute())
      )
      .subscribe(title => this.setTitle(title));
  }

  private getPageTitleFromRoute(): string {
    const route = this.router.routerState.root;
    let title = this.defaultTitle;

    // Получаем title из данных маршрута
    let child = route;
    while (child.firstChild) {
      child = child.firstChild;
      if (child.snapshot.data && child.snapshot.data['title']) {
        title = child.snapshot.data['title'];
      }
    }

    return title;
  }

  setTitle(title: string): void {
    this.title.setTitle(title);
  }

  getTitle(): string {
    return this.title.getTitle();
  }

  setDefaultTitle(title: string): void {
    this.defaultTitle = title;
  }
}
