import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { MaterialModule } from '@workshop/material';
import { FormsModule } from '@angular/forms';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectsListComponent, ProjectDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ProjectsRoutingModule
  ],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
