import { Component, OnInit, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs/operators'

import { Issue } from '../shared/issue.model';
import { IssueService } from '../services/issue.service';
import { DEFAULT_PER_PAGE_ITEM_COUNT } from '../shared/constants';

@Component({
  selector: 'app-issue-list-tab',
  templateUrl: './issue-list-tab.component.html',
  styleUrls: ['./issue-list-tab.component.scss']
})
export class IssueListTabComponent implements OnInit {

  owner : string;
  repo : string;

  issues : Issue[];
  issuesLoading : boolean;
  issueCount : number;
  pageIndex : number = 0;
  perPageCount : number = DEFAULT_PER_PAGE_ITEM_COUNT;

  private isInitializing : boolean = true;
  private prevRouteParams = {owner: null, repo: null}

  constructor(
    private issueService : IssueService,
    private activatedRoute : ActivatedRoute,
    private router : Router) {
    this.setInitialDummyIssues(10);
    this.issuesLoading = true;
  }

  ngOnInit() {
    
    const urlParamMap = this.activatedRoute.paramMap.pipe( 
      combineLatest(
        this.activatedRoute.queryParamMap,
        (routeMap, queryMap) => ({routeMap, queryMap})
      )
    );

    // this.issueService.getIssuesAndItemCount(this.prevRouteParams.owner, this.prevRouteParams.repo)
    //   .subscribe(data => {
    //     this.issues = data.issues;
    //     this.issueCount = data.itemCount;
    //     this.issuesLoading = false;
    // });

    urlParamMap.subscribe(urlParams => {
      const owner =  urlParams.routeMap.get("owner");
      const repo = urlParams.routeMap.get("repo");
      const pageNumber = parseInt(urlParams.queryMap.get("page"));
      const pageSize = parseInt(urlParams.queryMap.get("per_page"));

      this.issueService.getIssuesAndItemCount(owner, repo, pageNumber, pageSize)
        .subscribe(data => {
          this.owner = owner;
          this.repo = repo;
          this.issues = data.issues;
          this.issueCount = data.itemCount;
          this.issuesLoading = false;
        });
    });
    
  }

  onPageChange(event : PageEvent) {
    this.issuesLoading = true;

    const { pageIndex, pageSize } = event;

    this.perPageCount = pageSize;
    this.pageIndex = pageIndex;
    
    // this.issueService.getIssues(this.owner, this.repo, pageIndex + 1, pageSize)
    //   .subscribe(issues => {
    //     this.issues = issues;
    //     this.issuesLoading = false;
    //   });
    this.router.navigate([this.owner, this.repo, "issues"], {queryParams: {page: pageIndex + 1, per_page: pageSize}});
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
