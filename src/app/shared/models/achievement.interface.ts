// Базовый интерфейс для достижения
export interface Achievement {
  title: string;
  url: string;
}

// Интерфейс для группового достижения (содержит массив достижений)
export interface GroupAchievement {
  id: string;
  name: string;
  achievements: Achievement[];
}

// Интерфейс для одиночного достижения
export interface SingleAchievement {
  id: string;
  name: string;
  body: string;
  url: string;
}

// Объединенный тип для всех достижений
export type AchievementItem = GroupAchievement | SingleAchievement;

// Тип для проверки, является ли достижение групповым
export function isGroupAchievement(achievement: AchievementItem): achievement is GroupAchievement {
  return 'achievements' in achievement;
}

// Тип для проверки, является ли достижение одиночным
export function isSingleAchievement(achievement: AchievementItem): achievement is SingleAchievement {
  return 'body' in achievement;
}

// Тип для всех достижений (массив)
export type AchievementsData = AchievementItem[];
