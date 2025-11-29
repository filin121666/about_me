import { Component, OnInit, inject } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsService } from '../../services/projects.service';
import { Project, ProjectCategory } from '../../shared/models/project.interface';
import { PageTitleService } from '../../services/page-title.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    FormsModule,
    PageTitleComponent,
    ProjectComponent
],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  categories: ProjectCategory[] = [];
  selectedCategory: ProjectCategory | 'all' = 'all';
  searchQuery: string = '';
  
  private projectsService = inject(ProjectsService);
  private pageTitleService = inject(PageTitleService);

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('projects');
    this.loadProjects();
  }

  private loadProjects(): void {
    this.projectsService.getProjects().subscribe(data => {
      this.projects = data.projects;
      this.categories = data.categories;
      this.applyFilters();
    });
  }

  onCategoryChange(category: ProjectCategory | 'all'): void {
    this.selectedCategory = category;
    this.applyFilters();
  }

  onSearchChange(query: string): void {
    this.searchQuery = query.toLowerCase();
    this.applyFilters();
  }

  private applyFilters(): void {
    let filtered = [...this.projects];

    // Filter by category
    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === this.selectedCategory);
    }

    // Filter by search query
    if (this.searchQuery.trim()) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(this.searchQuery) ||
        project.shortDescription.toLowerCase().includes(this.searchQuery) ||
        project.technologies.some(tech => tech.toLowerCase().includes(this.searchQuery))
      );
    }

    this.filteredProjects = filtered;
  }

  getCategoryLabel(category: ProjectCategory | 'all'): string {
    if (category === 'all') {
      return 'Все проекты';
    }
    
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




