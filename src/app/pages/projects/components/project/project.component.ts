import { Component, Input } from '@angular/core';

import { Project } from '../../../../shared/models/project.interface';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project!: Project;

  getCategoryLabel(category: string): string {
    const categoryLabels: { [key: string]: string } = {
      'web-development': 'Веб-разработка',
      'backend-development': 'Бэкенд разработка',
      'mobile-development': 'Мобильная разработка',
      'desktop-application': 'Десктопные приложения',
      'iot': 'IoT',
      'system-development': 'Системная разработка',
      'data-science': 'Анализ данных',
      'automation': 'Автоматизация',
      'other': 'Другое'
    };
    return categoryLabels[category] || category;
  }
}

