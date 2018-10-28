import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { IssueListTabComponent } from './issue-list-tab/issue-list-tab.component';


const appRoutes: Routes = [
  { path: ":owner/:repo/issues", component: IssueListTabComponent },
  { path: "", redirectTo:"/angular/angular/issues", pathMatch: "full" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    // By re-exporting the RouterModule here the components declared in AppModule 
    // will have access to router directives such as RouterLink and RouterOutlet
    RouterModule
  ]
})
export class AppRoutingModule { }