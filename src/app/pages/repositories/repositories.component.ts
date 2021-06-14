import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Repositories } from 'src/app/model/repositories';
import { RepositoriesService } from 'src/app/service/repositories.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  login = this.route.snapshot.paramMap.get('login')!;
  repositories$: Observable<Repositories[]> = this.repositoriesService.getUserRepositories(this.login);

  constructor(
    private repositoriesService: RepositoriesService,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    const login = this.route.snapshot.paramMap.get('login')!;
    this.repositoriesService.getUserRepositories(login).subscribe(
     () => {}
    );
    (error: any) => {
      this.toastrService.error('Cannot load this page', 'Error');
  }
  }

}
