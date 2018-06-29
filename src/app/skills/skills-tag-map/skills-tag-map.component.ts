import { Component, OnInit, ViewChild } from '@angular/core';
import {
  CloudData,
  CloudOptions,
  ZoomOnHoverOptions,
  TagCloudComponent
} from 'angular-tag-cloud-module';
import { SkillTagNotificationService } from '../skill-tag-notification.service';

@Component({
  selector: 'pjp-skills-tag-map',
  templateUrl: './skills-tag-map.component.html',
  styleUrls: ['./skills-tag-map.component.scss']
})
export class SkillsTagMapComponent implements OnInit {
  @ViewChild(TagCloudComponent) tagCloudComponent: TagCloudComponent;

  options: CloudOptions = {
    overflow: true,
    width: 1,
    height: 1
  };

  tags: CloudData[];

  zoomOnHoverOptions: ZoomOnHoverOptions = {
    scale: 1.3,
    transitionTime: 1.2,
    delay: 0.8
  };

  constructor(
    private skillTagNotificationService: SkillTagNotificationService
  ) {}

  ngOnInit() {
    this.skillTagNotificationService
      .getSkillTags()
      .subscribe(x => (this.tags = x));
  }
}
