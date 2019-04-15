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

  all(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.getUrl());
  }
}
