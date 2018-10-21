import { Component, OnInit, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { Issue } from '../shared/issue.model';
import { IssueService } from '../services/issue.service';
import { DEFAULT_PER_PAGE_ITEM_COUNT } from '../shared/constants';

@Component({
  selector: 'app-issue-list-tab',
  templateUrl: './issue-list-tab.component.html',
  styleUrls: ['./issue-list-tab.component.scss']
})
export class IssueListTabComponent implements OnInit {

  @Input() owner : string;
  @Input() repo : string;
  
  issues : Issue[];
  issuesLoading : boolean;
  issueCount : number;
  pageIndex : number = 0;
  perPageCount : number = DEFAULT_PER_PAGE_ITEM_COUNT;

  constructor(private issueService : IssueService) {
    this.setInitialDummyIssues(10);
    this.issuesLoading = true;
   }

  ngOnInit() {
    this.issueService.getIssuesAndItemCount(this.owner, this.repo)
      .subscribe(data => {
        this.issues = data.issues;
        this.issueCount = data.itemCount;
        this.issuesLoading = false;
    });
  }

  onPageChange(event : PageEvent) {
    this.issuesLoading = true;

    const { pageIndex, pageSize } = event;

    this.perPageCount = pageSize;
    this.pageIndex = pageIndex;
    
    this.issueService.getIssues(this.owner, this.repo, pageIndex + 1, pageSize)
      .subscribe(issues => {
        this.issues = issues;
        this.issuesLoading = false;
      });
  }

  private setInitialDummyIssues(issueNumber: number) {
    const result = new Array<Issue>(issueNumber || 0);
    this.issues = result.fill({
      title: "",
      number: 0,
      comments: 0,
      created_at: "",
      user: {
        login: "",
        avatar_url: ""
      },
      labels: [{
        id: 0,
        name: "",
        color: ""
      }]
    });
  }
}
