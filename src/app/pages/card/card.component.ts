import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { fromEvent, Observable } from 'rxjs';
import { Contributor } from 'src/app/model/contributor';
import { ContributorService } from 'src/app/service/contributor.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  page: number = 1;
  contributors$: Observable<Contributor[]> = this.contributorService.$list;

  @Input() avatar_url: string = '';
  @Input() login: string = '';
  @Input() contributions: number = 0;

  eventSubscription = fromEvent(window, "scroll").subscribe(
    e => {
    const isBottom = document.body.offsetHeight - window.scrollY - 500 < 500;
    if (isBottom) {
      this.page++;
      this.contributorService.loadPage(this.page);
    };
      (error: any) => {
        this.toastrService.error('Cannot load this page', 'Error');
    }
  });

  constructor(
    private contributorService: ContributorService,
    private toastrService: ToastrService
  ) { }

    ngOnInit(): void {
      this.contributorService.getAllContributors(this.page).subscribe(
        () => {}
      );
  }
}
