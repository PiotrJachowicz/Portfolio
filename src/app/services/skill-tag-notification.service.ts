import { Injectable } from '@angular/core';
import { CloudData } from 'angular-tag-cloud-module';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillTagNotificationService {
  constructor() {}

  getSkillTags(): Observable<CloudData[]> {
    return of([
      { text: 'weight-5-rotate(+10)', weight: 5 },
      { text: 'weight-7-rotate(-20)', weight: 7 },
      { text: 'weight-9-rotate(+35)', weight: 9 }
    ]);
  }
}
