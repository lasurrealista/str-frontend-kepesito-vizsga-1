import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contributor } from '../model/contributor';

@Injectable({
  providedIn: 'root'
})
export class ContributorService {

  apiUrlContributors = "https://api.github.com/repos/angular/angular/contributors?per_page=24";

  constructor(
    private httpClient: HttpClient,
  ) { }

  getAllContributors(page: number): Observable<Contributor[]> {
    return this.httpClient.get<Contributor[]>(`${this.apiUrlContributors}&page=${page}`)
  }


}
