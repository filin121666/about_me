import { Component } from '@angular/core';
import { NavigationComponent } from "./components/navigation/navigation.component";
import { SwitcherThemeComponent } from "./components/switcher-theme/switcher-theme.component";

@Component({
    standalone: true,
    imports: [NavigationComponent, SwitcherThemeComponent],
    selector: 'right-functional',
    templateUrl: 'right-functional.component.html',
    styleUrl: 'right-functional.component.scss',
})

export class RightFunctionalComponent {
}