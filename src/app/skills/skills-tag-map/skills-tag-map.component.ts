import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
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

  onSkillSelected(clickedSkill: CloudData) {
    this.skillTagNotificationService.setCurrentSkillData(clickedSkill.text);
  }

  constructor(
    private skillTagNotificationService: SkillTagNotificationService
  ) {}

  ngOnInit() {
    this.skillTagNotificationService
      .getSkillTags()
      .subscribe(x => (this.tags = x));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.tagCloudComponent.reDraw();
  }
}
