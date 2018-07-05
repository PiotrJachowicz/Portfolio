import { SkillData } from './../skill-data.model';
import { SkillsService } from '../skills.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pjp-skill-description',
  templateUrl: './skill-description.component.html',
  styleUrls: ['./skill-description.component.scss']
})
export class SkillDescriptionComponent implements OnInit {
  private selectedSkill: SkillData;

  constructor(private skillsService: SkillsService) {}

  ngOnInit() {
    this.skillsService
      .getCurrentSkillData()
      .subscribe(x => (this.selectedSkill = x));
  }
}
