import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TagCloudModule } from 'angular-tag-cloud-module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingSectionComponent } from './landing-section/landing-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { SectionComponent } from './section/section.component';
import { SkillDescriptionComponent } from './skill-description/skill-description.component';
import { SkillsTagMapComponent } from './skills-tag-map/skills-tag-map.component';

import { SkillTagNotificationService } from './services/skill-tag-notification.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    ContactSectionComponent,
    NavbarItemComponent,
    SectionComponent,
    SkillDescriptionComponent,
    SkillsTagMapComponent
  ],
  imports: [BrowserModule, TagCloudModule],
  providers: [SkillTagNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
