export interface Skill {
  id: string;
  name: string;
  description?: string;
  imgSrc?: string;
  url: string;
}

export interface SkillsSection {
  id: string;
  name: string;
  skills: Skill[];
}
