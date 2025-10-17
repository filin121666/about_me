import { Component, inject } from '@angular/core';
import { PageTitleComponent } from "../../components/page-title/page-title.component";
import { AchievementsService } from '../../services/achievements.service';
import { AchievementItem, AchievementsData, isGroupAchievement, isSingleAchievement } from '../../shared/models/achievement.interface';
import { SectionTitleComponent } from "../../components/section-title/section-title.component";
import { PageTitleService } from '../../services/page-title.service';

@Component({
    standalone: true,
    imports: [PageTitleComponent, SectionTitleComponent],
    selector: 'app-achievements',
    templateUrl: 'achievements.component.html',
    styleUrl: 'achievements.component.scss',
})

export class AchievementsComponent {
  // achievements: AchievementsData;
  achievements: AchievementsData = [];
  private pageTitleService = inject(PageTitleService);

  constructor(private achievementsService: AchievementsService) {
    // this.achievements = this.achievementsService.getAchievements();
  }

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('achievements');
    // this.achievements = this.achievementsService.getAchievements();
    this.achievementsService.getAchievements().subscribe((data) => {
      this.achievements = data;
    });
  }

  // Метод для проверки типа достижения (для использования в шаблоне)
  isGroup(achievement: AchievementItem): boolean {
    return isGroupAchievement(achievement);
  }

  isSingle(achievement: AchievementItem): boolean {
    return isSingleAchievement(achievement);
  }

  // Геттеры для безопасного доступа к свойствам
  getGroupAchievements(achievement: AchievementItem) {
    return isGroupAchievement(achievement) ? achievement.achievements : [];
  }

  getSingleBody(achievement: AchievementItem) {
    return isSingleAchievement(achievement) ? achievement.body : '';
  }

  getSingleUrl(achievement: AchievementItem) {
    return isSingleAchievement(achievement) ? achievement.url : '';
  }
}