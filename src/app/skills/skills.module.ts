import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagCloudModule } from 'angular-tag-cloud-module';

import { SkillDescriptionComponent } from './skill-description/skill-description.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { SkillTagNotificationService } from './skill-tag-notification.service';
import { SkillsTagMapComponent } from './skills-tag-map/skills-tag-map.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [CommonModule, TagCloudModule, SharedModule],
  declarations: [
    SkillDescriptionComponent,
    SkillsSectionComponent,
    SkillsTagMapComponent
  ],
  providers: [SkillTagNotificationService],
  exports: [SkillsSectionComponent]
})
export class SkillsModule {}
