import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { REMOTE_API_ROOT } from '../shared/api-root';
import { Issue } from '../shared/issue.model';
import { REACT_TEST_ISSUES } from '../test-data/react-issue-data'

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor() { }

  getIssues(path : string) : Observable<Issue[]> {
    return of(REACT_TEST_ISSUES);
  }
}
