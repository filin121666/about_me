import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageTitleService } from '../services/page-title.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent implements OnInit {
  private pageTitleService = inject(PageTitleService);

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('not-found');
  }
}
