import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectData } from './project-data.model';
import { ProjectsModule } from './projects.module';

@Injectable({
  providedIn: ProjectsModule
})
export class ProjectsService {
  private currentProject: Subject<ProjectData> = new Subject<ProjectData>();

  private projectData: ProjectData[] = [
    {
      title: 'ASP.NET Core',
      description: 'lorem ipsum',
      thumbnailUrl: 'whatever',
      skills: []
    }
  ];

  getProjects(): Observable<ProjectData[]> {
    return of(this.projectData);
  }

  setCurrentProject(projectName: string) {
    this.currentProject.next(
      this.projectData.find(x => x.title === projectName)
    );
  }

  getCurrentProject(): Observable<ProjectData> {
    return this.currentProject.asObservable();
  }

  constructor() {}
}
