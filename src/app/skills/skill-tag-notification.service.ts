import { Injectable } from '@angular/core';
import { CloudData } from 'angular-tag-cloud-module';

import { SkillData } from './skill-data.model';
import { convertColor } from '../shared/index';

import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillTagNotificationService {
  constructor() {}

  private mainColor = '#0dc079';
  private secondaryColor = '#88ccf1';

  private currentSkill: Subject<SkillData> = new Subject<SkillData>();

  private skillData: SkillData[] = [
    { text: 'ASP.NET Core', weight: 5, description: 'lorem ipsum' },
    { text: 'Angular', weight: 5, description: 'lorem ipsum' },
    { text: 'Vue.js', weight: 3, description: 'lorem ipsum' },
    { text: 'SCSS', weight: 2, description: 'lorem ipsum' },
    { text: 'CSS', weight: 1, description: 'lorem ipsum' },
    { text: 'ASP.NET Web Api', weight: 4, description: 'lorem ipsum' },
    { text: 'ASP.NET MVC', weight: 4, description: 'lorem ipsum' },
    { text: 'jQuery', weight: 2, description: 'lorem ipsum' },
    { text: 'Javascript', weight: 3, description: 'lorem ipsum' },
    { text: 'C#', weight: 5, description: 'lorem ipsum' },
    { text: 'HTML', weight: 2, description: 'lorem ipsum' },
    { text: 'CI/CD', weight: 1, description: 'lorem ipsum' },
    { text: 'Jenkins', weight: 2, description: 'lorem ipsum' },
    { text: 'TeamCity', weight: 2, description: 'lorem ipsum' },
    { text: 'SCRUM', weight: 3, description: 'lorem ipsum' },
    { text: 'Git', weight: 1, description: 'lorem ipsum' },
    { text: 'Jira', weight: 1, description: 'lorem ipsum' },
    { text: 'SQL', weight: 3, description: 'lorem ipsum' },
    { text: 'MS SQL Server', weight: 2, description: 'lorem ipsum' },
    { text: 'TypeScript', weight: 4, description: 'lorem ipsum' }
  ];

  getSkillTags(): Observable<CloudData[]> {
    return of(this.skillData).pipe(
      map(x =>
        x.map(item => {
          return {
            text: item.text,
            weight: item.weight,
            color: this.getColor(item.weight)
          };
        })
      )
    );
  }

  setCurrentSkillData(skillName: string) {
    this.currentSkill.next(this.skillData.find(x => x.text === skillName));
  }

  getCurrentSkillData(): Observable<SkillData> {
    return this.currentSkill.asObservable();
  }

  private getColor(itemWeight: number): string {
    let color: string;
    if (itemWeight % 2 === 1) {
      color = this.mainColor;
    } else {
      color = this.secondaryColor;
    }

    return convertColor(color, (itemWeight / 2) * -10);
  }
}
