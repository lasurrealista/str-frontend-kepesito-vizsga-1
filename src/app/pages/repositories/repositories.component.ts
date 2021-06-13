import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Repositories } from 'src/app/model/repositories';
import { RepositoriesService } from 'src/app/service/repositories.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  page: number = 1;
  login = this.route.snapshot.paramMap.get('login')!;
  repositories$: Observable<Repositories[]> = this.repositoriesService.getUserRepositories(this.login, this.page);

  @Input() name: string = '';
  @Input() fork: boolean = false;
  @Input() stargazers_count: number = 0;
  @Input() updated_at: string = '';

  constructor(
    private repositoriesService: RepositoriesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const login = this.route.snapshot.paramMap.get('login')!;
    this.repositoriesService.getUserRepositories(login, this.page).subscribe()
  }

}
