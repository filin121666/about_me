import { Injectable } from '@angular/core';
import { AchievementItem, AchievementsData } from '../shared/models/achievement.interface';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AchievementsService {
  private achievements: AchievementItem[] = [
    {
      id: 'stepic',
      name: 'Stepik',
      achievements: [],
    },
  ];

  constructor(private http: HttpClient) {}

  /**
   * Возвращает достижения. Сначала подгружает сертификаты Stepik и маппит их в текущий формат,
   * затем догружает дополнительный список с GitHub и добавляет его в конец.
   */
  getAchievements() {
    const stepikUrl = 'https://raw.githubusercontent.com/filin121666/certificates/refs/heads/main/stepic_achievements.json';
    const githubUrl = 'https://raw.githubusercontent.com/filin121666/certificates/refs/heads/main/achievements.json';

    return this.http.get<any>(stepikUrl).pipe(
      map((response) => {
        const certificates = Array.isArray(response?.certificates) ? response.certificates : [];
        return certificates.map((c: any) => {
          const rawTitle = String(c?.course_title ?? '').trim();
          const alreadyQuoted = rawTitle.startsWith('"') || rawTitle.startsWith('«');
          const titleWithQuotes = alreadyQuoted ? rawTitle : `«${rawTitle}»`;
          return {
            title: `Курс ${titleWithQuotes}. Подтверждено сертификатом.`,
            url: c.url ?? '',
          };
        });
      }),
      map((stepikAchievements) => {
        const updated = this.achievements.map((item) => {
          if (item.id === 'stepic' && 'achievements' in item) {
            return {
              ...item,
              achievements: stepikAchievements,
            } as AchievementItem;
          }
          return item;
        });
        return updated;
      }),
      mergeMap((withStepik) =>
        this.http.get<AchievementItem[]>(githubUrl).pipe(
          map((external) => [...withStepik, ...external]),
        )
      ),
    );
  }
}
