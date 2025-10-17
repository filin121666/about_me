import { Component, inject } from '@angular/core';
import { ColorThemeService } from '../../../../../../services/color-theme.service';

@Component({
    standalone: true,
    imports: [],
    selector: 'app-switcher-theme',
    templateUrl: 'switcher-theme.component.html',
    styleUrl: 'switcher-theme.component.scss'
})

export class SwitcherThemeComponent {
    colorThemeService = inject(ColorThemeService);

    onSwitcherThemeClick() {
        this.colorThemeService.toggleTheme();
    }
}