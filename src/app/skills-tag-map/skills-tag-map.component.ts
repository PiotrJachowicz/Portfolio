import { Component, OnInit } from '@angular/core';
import {
  CloudData,
  CloudOptions,
  ZoomOnHoverOptions
} from 'angular-tag-cloud-module';

@Component({
  selector: 'pjp-skills-tag-map',
  templateUrl: './skills-tag-map.component.html',
  styleUrls: ['./skills-tag-map.component.scss']
})
export class SkillsTagMapComponent implements OnInit {
  options: CloudOptions = {
    overflow: false
  };

  zoomOnHoverOptions: ZoomOnHoverOptions = {
    scale: 1.3,
    transitionTime: 1.2,
    delay: 0.8
  };

  tags: CloudData[] = [
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
    }
  ];

  constructor() {}

  ngOnInit() {}
}
