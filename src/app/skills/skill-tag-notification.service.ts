import { Injectable } from '@angular/core';
import { CloudData } from 'angular-tag-cloud-module';
import { SkillData } from './skill-data.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillTagNotificationService {
  constructor() {}

  private skillData: Observable<SkillData[]> = of([
    { text: 'ASP.NET Core', weight: 5, description: '' },
    { text: 'Angular', weight: 4, description: '' },
    { text: 'Vue.js', weight: 3, description: '' },
    { text: 'SCSS', weight: 3, description: '' },
    { text: 'CSS', weight: 3, description: '' },
    { text: 'ASP.NET Web Api', weight: 4, description: '' },
    { text: 'ASP.NET MVC', weight: 4, description: '' },
    { text: 'jQuery', weight: 4, description: '' },
    { text: 'Javascript', weight: 5, description: '' },
    { text: 'C#', weight: 4, description: '' },
    { text: 'HTML', weight: 4, description: '' },
    { text: 'CI/CD', weight: 4, description: '' },
    { text: 'Jenkins', weight: 4, description: '' },
    { text: 'TeamCity', weight: 4, description: '' },
    { text: 'SCRUM', weight: 4, description: '' },
    { text: 'Git', weight: 4, description: '' },
    { text: 'Jira', weight: 4, description: '' },
    { text: 'SQL', weight: 4, description: '' },
    { text: 'MS SQL Server', weight: 4, description: '' },
    { text: 'TypeScript', weight: 4, description: '' }
  ]);

  getSkillTags(): Observable<CloudData[]> {
    return this.skillData.pipe(
      map(x =>
        x.map(item => {
          return {
            text: item.text,
            weight: item.weight
          };
        })
      )
    );
  }
}
