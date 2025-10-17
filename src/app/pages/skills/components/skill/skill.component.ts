import { Component, inject, Input } from '@angular/core';
import { ColorThemeService } from '../../../../services/color-theme.service';

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
    @Input()
    darkModeImgSrc?: string = '';
    @Input({ required: true })
    url: string = '';
    @Input({ required: true })
    name: string = '';
    @Input()
    darkModeBackground?: boolean = false;

    colorThemeService = inject(ColorThemeService);
}