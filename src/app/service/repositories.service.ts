import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contributor } from '../model/contributor';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  apiUrlRepositories = "https://api.github.com/users";

  constructor(
    private httpClient: HttpClient,
  ) { }

  getUserRepositories(login: string): Observable<Contributor> {
    return this.httpClient.get<Contributor>(`${this.apiUrlRepositories}/${login}/repositories`);
  }
}
