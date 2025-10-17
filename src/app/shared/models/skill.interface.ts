export interface Skill {
  id: string;
  name: string;
  description?: string;
  imgSrc?: string;
  darkModeImgSrc?: string;
  url: string;
  darkModeBackground?: boolean;
}

export interface SkillsSection {
  id: string;
  name: string;
  skills: Skill[];
}
