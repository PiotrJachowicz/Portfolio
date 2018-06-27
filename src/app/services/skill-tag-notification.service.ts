import { Injectable } from '@angular/core';
import { CloudData } from 'angular-tag-cloud-module';

@Injectable({
  providedIn: 'root'
})
export class SkillTagNotificationService {
  constructor() {}

  getSkillTags(): CloudData[] {
    return [
      {
        text: 'Weight-8-link-color',
        weight: 8,
        link: 'https://google.com',
        color: '#ffaaee'
      },
      {
        text: 'Weight-10-link',
        weight: 10,
        link: 'https://google.com',
        color: '#000000'
      },
      {
        text: 'Weight-10-link',
        weight: 10,
        link: 'https://google.com',
        color: '#000000'
      },
      {
        text: 'Weight-10-link',
        weight: 10,
        link: 'https://google.com',
        color: '#000000'
      },
      {
        text: 'Weight-10-link',
        weight: 10,
        link: 'https://google.com',
        color: '#000000'
      }
    ];
  }
}
