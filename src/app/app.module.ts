import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingSectionComponent } from './landing-section/landing-section.component';
import { SkillsModule, SkillsSectionComponent } from './skills/index';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';

import { SharedModule, SectionComponent } from './shared/index';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    ContactSectionComponent,
    NavbarItemComponent,
    SectionComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, SkillsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
