import { Component, OnInit, Input } from '@angular/core';

import { Issue } from '../shared/issue.model'

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {

  @Input() owner: string;
  @Input() repo: string;
  @Input() issues: Issue[];
  @Input() loading: boolean;

  constructor() {
  }

  ngOnInit() {
    
  }
}
