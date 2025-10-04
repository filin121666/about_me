export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: ProjectCategory;
}

export type ProjectCategory = 
  | 'web-development'
  | 'backend-development'
  | 'mobile-development'
  | 'desktop-application'
  | 'iot'
  | 'system-development'
  | 'data-science'
  | 'automation'
  | 'other';

export interface ProjectsData {
  projects: Project[];
  categories: ProjectCategory[];
}

