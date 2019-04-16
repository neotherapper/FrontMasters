import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@workshop/core-data';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {
  currentProject: Project;
  originalTitle;
  @Input() set project(value: Project) {
    if (value) {
      this.originalTitle = value.title;
    }
    this.currentProject = Object.assign({}, value);
  }
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  constructor() { }

  saveProject(project: Project): void {
    this.saved.emit(project);
  }

  cancel(): void {
    this.cancelled.emit();
  }

}
