import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@workshop/core-data';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent {
  @Input() projects: Project[];
  @Input() readonly: false;
  @Output() selected = new EventEmitter<Project>();
  @Output() deleted = new EventEmitter<Project>();

  selectProject(project) {
    this.selected.emit(project);
  }

  deleteProject(project: Project): void {
    this.deleted.emit(project);
  }
}
