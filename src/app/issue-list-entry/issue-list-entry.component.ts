import { Component, OnInit, Input } from '@angular/core';

import { User, Label } from '../shared/issue.model';
import { getTimeDiffFromNow } from '../utils/time.util';

@Component({
  selector: 'app-issue-list-entry',
  templateUrl: './issue-list-entry.component.html',
  styleUrls: ['./issue-list-entry.component.scss']
})
export class IssueListEntryComponent implements OnInit {

  @Input() loading : boolean;
  @Input() issueUrl : string;
  @Input() issueTitle : string;
  @Input() issueNumber : number;
  @Input() createdAt : string;
  @Input() closedAt : string;
  @Input() user : User;
  @Input() commentsNum : number;
  @Input() labels : Label[];

  icon : string;
  timeDiffStr : string;
  actionVerb : string;

  constructor() {
   }

  ngOnInit() {
    if(this.closedAt){
      this.icon = "check_circle_outline";
      this.timeDiffStr = getTimeDiffFromNow(this.closedAt);
      this.actionVerb = "was closed";
    } else {
      this.icon = "error_outline";
      this.timeDiffStr = getTimeDiffFromNow(this.createdAt);
      this.actionVerb = "opened";
    }
  }

}
