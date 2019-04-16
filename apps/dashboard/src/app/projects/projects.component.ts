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
    this.resetProject();
  }

  cancel(): void {
    this.resetProject();
  }

  createProject(project: Project): void {
    this.projectsService.create(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }

  deleteProject(project: Project): void {
    this.projectsService.delete(project.id)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }

  getProjects(): void {
    this.projects$ = this.projectsService.all();
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: '',
      percentComplete: 0,
      approved: false
    }
    this.selectProject(emptyProject);
  }

  saveProject(project): void {
    if (project.id) {
      this.updateProject(project);
    } else {
      this.createProject(project);
    }
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  updateProject(project: Project): void {
    this.projectsService.update(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }



}
