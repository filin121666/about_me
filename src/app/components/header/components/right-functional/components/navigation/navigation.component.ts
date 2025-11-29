import { Component } from '@angular/core';

import { NavLinkComponent } from './nav-link/nav-link.component';

@Component({
    standalone: true,
    imports: [NavLinkComponent],
    selector: 'app-header-navigation',
    templateUrl: 'navigation.component.html',
    styleUrl: 'navigation.component.scss',
})

export class NavigationComponent {
    public isOpen: boolean = false;

    public toggleMenu(): void {
        this.isOpen = !this.isOpen;
    }

    public closeMenu(): void {
        this.isOpen = false;
    }

}