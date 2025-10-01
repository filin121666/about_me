import { Component } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
    standalone: true,
    imports: [ProfileComponent, NavigationComponent],
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrl: 'header.component.scss',
})

export class HeaderComponent {
}

// #2334E8 - #5AE8BB
// #AE3C42 - #FB985D
// #1588E0 - #61B070
// #FC1B30 - #BC1F81
// #50D4C9 - #4243BD
// #D72C15 - #F94086
// #7DE9BE - #741BCE
// #CCFDAA - #E41123
// #34B096 - #9CCD58