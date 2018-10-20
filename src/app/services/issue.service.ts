import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { REMOTE_API_ROOT } from '../shared/api-root';
import { Issue } from '../shared/issue.model';
import { REACT_TEST_ISSUES } from '../test-data/react-issue-data'

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private httpClient : HttpClient) { }

  getIssues(owner : string, repo : string, page : number = 1) : Observable<Issue[]> {

    const fullRequestUrl = `${REMOTE_API_ROOT}/repos/${owner}/${repo}/issues?page=${page}`;
    return this.httpClient.get<Issue[]>(fullRequestUrl);
    // return of(REACT_TEST_ISSUES);
  }
}
