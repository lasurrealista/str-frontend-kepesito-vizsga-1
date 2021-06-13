import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contributor } from '../model/contributor';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContributorService {

  apiUrlContributors = "https://api.github.com/repos/angular/angular/contributors?per_page=24";
  public $list: BehaviorSubject<Contributor[]> = new BehaviorSubject<Contributor[]>([]);

  constructor(
    private http: HttpClient,
  ) { }

  getAllContributors(page: number): Observable<Contributor[]> {
    return this.http.get<Contributor[]>(`${this.apiUrlContributors}&page=${page}`).pipe(
      tap( (data: Contributor[]) => this.$list.next(data) )
    );
  }

  loadPage(page: number): void {
    this.http.get<Contributor[]>(
      `${this.apiUrlContributors}&page=${page}`).subscribe(
      (data: Contributor[]) => {
        this.$list.next( [...this.$list.value, ...data] );
      }
      )
    }
}
