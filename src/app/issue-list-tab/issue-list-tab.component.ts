import { Component, OnInit, Input } from '@angular/core';

import { Issue } from '../shared/issue.model';
import { IssueService } from '../services/issue.service';

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

  constructor(private issueService : IssueService) {
    this.setInitialDummyIssues(10);
    this.issuesLoading = true;
   }

  ngOnInit() {
    this.issueService.getIssues(this.owner, this.repo)
      .subscribe(data => {
        this.issues = data;
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
