import { Component, OnInit } from '@angular/core';

import { Issue } from '../shared/issue.model'
import { IssueService } from '../services/issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  issues : Issue[];

  constructor(private issueService : IssueService) { }

  ngOnInit() {
    this.issueService.getIssues("").subscribe(data => this.issues = data);
  }

}
