import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Repositories } from '../model/repositories';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  apiUrlRepositories = "https://api.github.com/users";

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }

  getUserRepositories(login: string, page: number): Observable<Repositories[]> {
    return this.http.get<Repositories[]>(`${this.apiUrlRepositories}/${login}/repos?page=${page}`);
  }
}
