import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-nav-link',
    templateUrl: 'nav-link.component.html',
    styleUrl: 'nav-link.component.scss',
})
export class NavLinkComponent {
    @Input({ required: true }) public path!: string;
    @Output() public navigated: EventEmitter<void> = new EventEmitter<void>();

    constructor(private readonly router: Router) {}

    public async onClick(): Promise<void> {
        await this.router.navigateByUrl(this.path);
        this.navigated.emit();
    }
}


