import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  model = 'projects';
  constructor(private httpClient: HttpClient) {
  }

  getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  getUrlForId(id: string) {
    return `${this.getUrl()}/${id}`;
  }

  all(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.getUrl());
  }

  create(project: Project): Observable<Project[]> {
    return this.httpClient.post<Project[]>(this.getUrl(), project);
  }

  delete(projectId: string): Observable<Project[]> {
    return this.httpClient.delete<Project[]>(this.getUrlForId(projectId));
  }

  update(project: Project): Observable<Project[]> {
    return this.httpClient.patch<Project[]>(this.getUrlForId(project.id), project);
  }
}
