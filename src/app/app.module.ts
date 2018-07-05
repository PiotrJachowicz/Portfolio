import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingSectionComponent } from './landing-section/landing-section.component';
import { SkillsModule } from './skills/index';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';

import { SharedModule } from './shared/index';
import { ProjectsModule } from './projects/projects.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingSectionComponent,
    ContactSectionComponent,
    NavbarItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SkillsModule,
    SharedModule,
    ProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
