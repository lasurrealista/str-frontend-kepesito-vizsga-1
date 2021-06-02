import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contributor } from 'src/app/model/contributor';
import { ContributorService } from 'src/app/service/contributor.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  contributors$: Observable<Contributor[]> = this.contributorService.getAllContributors();

  @Input() avatar_url: string = '';
  @Input() login: string = '';
  @Input() contributions: number = 0;

  constructor(
    private contributorService: ContributorService
  ) { }

    ngOnInit(): void {
      this.contributorService.getAllContributors()
  }
}
