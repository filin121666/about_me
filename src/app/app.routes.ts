import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Главная - About Me' }
    },
    {
        path: 'skills',
        component: SkillsComponent,
        data: { title: 'Навыки - About Me' }
    },
    {
        path: 'achievements',
        component: AchievementsComponent,
        data: { title: 'Достижения - About Me' }
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        data: { title: 'Проекты - About Me' }
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: NotFoundComponent,
        data: { title: 'Страница не найдена - About Me' }
    },
];
