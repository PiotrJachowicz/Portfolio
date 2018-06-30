import { SkillData } from './../skill-data.model';
import { SkillTagNotificationService } from './../skill-tag-notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pjp-skill-description',
  templateUrl: './skill-description.component.html',
  styleUrls: ['./skill-description.component.scss']
})
export class SkillDescriptionComponent implements OnInit {
  private selectedSkill: SkillData;

  constructor(private skillTagNotificationService: SkillTagNotificationService) { }

  ngOnInit() {
    this.skillTagNotificationService.getCurrentSkillData().subscribe(x => this.selectedSkill = x);
  }

}
