import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ProjectsService } from './projects.service';
import { ProjectsSliderComponent } from './projects-slider/projects-slider.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { ProjectDescriptionComponent } from './project-description/project-description.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProjectsSectionComponent, ProjectsSliderComponent, ProjectItemComponent, ProjectDescriptionComponent],
  providers: [ProjectsService]
})
export class ProjectsModule {}
