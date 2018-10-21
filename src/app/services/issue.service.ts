import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { getItemCount } from '../shared/pagination.helper';
import { REMOTE_API_ROOT } from '../shared/constants';
import { DEFAULT_PER_PAGE_ITEM_COUNT } from '../shared/constants';
import { Issue } from '../shared/issue.model';
import { REACT_TEST_ISSUES } from '../test-data/react-issue-data'

interface IssueResponseData {
  issues: Issue[];
  itemCount?: number;
}


@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private httpClient : HttpClient) { }

  private getRawHttpResponse(owner : string, repo : string, page : number, perPageItem : number) {
    const fullRequestUrl = `${REMOTE_API_ROOT}/repos/${owner}/${repo}/issues?per_page=${perPageItem}&page=${page}`;
    return this.httpClient.get(fullRequestUrl, { observe: "response" });
  }

  getIssues(owner : string, repo : string, page : number = 1, perPageItem : number = DEFAULT_PER_PAGE_ITEM_COUNT) 
    : Observable<Issue[]> {
    return this.getRawHttpResponse(owner, repo, page, perPageItem).pipe(
      map(response => response.body as Issue[])
    );
    // return of(REACT_TEST_ISSUES);
  }

  getIssuesAndItemCount(owner : string, repo : string, page : number = 1, perPageItem : number = DEFAULT_PER_PAGE_ITEM_COUNT) 
    : Observable<IssueResponseData> {
    return this.getRawHttpResponse(owner, repo, page, perPageItem).pipe(
      map(response => ({
        issues: response.body as Issue[], 
        itemCount: getItemCount(response.headers.get("link"))
      }))
    );
  }
}
