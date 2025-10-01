import { Component, Input } from '@angular/core';

@Component({
    standalone: true,
    imports: [],
    selector: 'section-title',
    templateUrl: 'section-title.component.html',
    styleUrl: 'section-title.component.scss'
})

export class SectionTitleComponent {
    @Input() id?: string;
}