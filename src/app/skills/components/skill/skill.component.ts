import { Component, Input } from '@angular/core';

@Component({
    standalone: true,
    imports: [],
    selector: 'skill',
    templateUrl: 'skill.component.html',
    styleUrl: 'skill.component.scss'
})

export class SkillComponent {
    @Input()
    imgSrc?: string = '';
    @Input({ required: true })
    url: string = '';
    @Input({ required: true })
    name: string = '';
    @Input()
    darkModeBackground?: boolean = false;
}