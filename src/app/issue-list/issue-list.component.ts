import { Component, OnInit, Input } from '@angular/core';

import { Issue } from '../shared/issue.model'
import { IssueService } from '../services/issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {

  @Input() owner: string;
  @Input() repo: string;

  issues: Issue[];
  issuesLoading: boolean = true;

  constructor(private issueService: IssueService) {
    this.setInitialDummyIssues(10);
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
