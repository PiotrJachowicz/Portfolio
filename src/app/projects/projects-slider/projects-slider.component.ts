import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { ProjectData } from '../project-data.model';

@Component({
  selector: 'pjp-projects-slider',
  templateUrl: './projects-slider.component.html',
  styleUrls: ['./projects-slider.component.scss']
})
export class ProjectsSliderComponent implements OnInit {
  data: ProjectData[];
  sliderWidth: string;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsService.getProjects().subscribe(x => (this.data = x));
  }
}
