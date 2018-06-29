import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagCloudModule } from 'angular-tag-cloud-module';

import { SkillDescriptionComponent } from './skill-description/skill-description.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { SkillTagNotificationService } from './skill-tag-notification.service';
import { SkillsTagMapComponent } from './skills-tag-map/skills-tag-map.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SkillDescriptionComponent,
    SkillsSectionComponent,
    SkillsTagMapComponent,
    TagCloudModule
  ],
  providers: [SkillTagNotificationService],
  exports: [SkillsSectionComponent]
})
export class SkillsModule {}
