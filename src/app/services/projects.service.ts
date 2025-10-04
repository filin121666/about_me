import { Injectable } from '@angular/core';
import { Project, ProjectsData, ProjectCategory } from '../shared/models/project.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 'about_me',
      title: 'Сайт портфолио',
      shortDescription: 'Веб-сайт портфолио на Angular с адаптивным дизайном',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'CSS 3', 'HTML5', 'Github Pages'],
      githubUrl: 'https://github.com/filin121666/about_me',
      liveUrl: 'https://filin121666.github.io/about_me/',
      category: 'web-development',
    },
    {
      id: 'fruits_crud',
      title: 'Fruits CRUD',
      shortDescription:
        'Telegram бот на aiogram 3 с backend-ом на FastAPI реализующее CRUD (create, read, update, delete) операции над фруктами (были взято для примера).',
      technologies: [
        'Python 3',
        'Aiogram 3',
        'Aiohttp',
        'FastAPI',
        'SQLAlchemy',
        'PostgreSQL',
        'Docker',
        'Docker Compose',
      ],
      githubUrl: 'https://github.com/filin121666/fruits_crud',
      category: 'backend-development',
    },
    {
      id: 'c_linux_sbrk_allocator',
      title: 'Linux sbrk аллокатор',
      shortDescription: 'Аллокатор памяти C использующий системный вызов sbrk Linux.',
      technologies: ['C', 'Linux'],
      githubUrl: 'https://github.com/filin121666/c_linux_sbrk_malloc',
      category: 'system-development',
    },
    {
      id: 'ds18b20_termometr',
      title: 'DS18B20 Термометр',
      shortDescription: 'Простой термометр на Arduino Nano и DS18B20, полученные данные выводятся на LCD1602 (I2C).',
      technologies: ['C++', 'Arduino', 'DS18B20', 'LCD1602', 'I2C'],
      githubUrl: 'https://github.com/filin121666/ds18b20-termometr',
      category: 'iot',
    },
    {
      id: 'future_code',
      title: 'Future code',
      shortDescription:
        'Код решений задач, которые я решал во время обучения в проекте "Код будущего", от "Университет 2035".',
      technologies: ['Python 3'],
      githubUrl: 'https://github.com/filin121666/future_code',
      category: 'other',
    },
    {
      id: 'aigame',
      title: 'Aigame',
      shortDescription: 'Код проекта который я с командой разрабатывал во время участия в хакатоне по разработке решений, которые будут использовать технологии ИИ для улучшения процесса обучения, хакатон проводился IT-колледжем Maxitet совместно с "Maximum Education". К сожалению разработка проекта не была завершена, но судьи высоко оценили этот проект и мы получили призовое место.',
      technologies: ['Python 3', 'Django', 'Sqlite'],
      githubUrl: 'https://github.com/Mistik21/Aigame',
      category: 'web-development',
    },
    {
      id: 'answers_to_tasks',
      title: 'Answers to tasks',
      shortDescription: 'Код решений задач по программированию.',
      technologies: ['Python 3', 'C++', 'C', 'Golang'],
      githubUrl: 'https://github.com/filin121666/answers_to_tasks',
      category: 'other',
    },
  ];

  private categories: ProjectCategory[] = [
    'web-development',
    'backend-development',
    'mobile-development',
    'desktop-application',
    'iot',
    'system-development',
    'data-science',
    'automation',
    'other',
  ];

  getProjects(): Observable<ProjectsData> {
    return of({
      projects: this.projects,
      categories: this.categories,
    });
  }

  getProjectsByCategory(category: ProjectCategory): Observable<Project[]> {
    const filtered = this.projects.filter((project) => project.category === category);
    return of(filtered);
  }

  getProjectById(id: string): Observable<Project | undefined> {
    const project = this.projects.find((p) => p.id === id);
    return of(project);
  }
}
