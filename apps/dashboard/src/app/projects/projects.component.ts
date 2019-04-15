import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-data';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  selectedProject: Project ;
  projects$: Observable<Project[]>;

  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projects$ = this.projectsService.all();
  }

  selectProject(project) {
    console.log(project);
    this.selectedProject = project;
  }

  cancel(): void {
    this.selectProject(null);
  }

}
