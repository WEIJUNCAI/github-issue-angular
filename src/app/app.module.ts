import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatImportsModule } from './imports/mat-imports.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IssueListEntryComponent } from './issue-list-entry/issue-list-entry.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueListTabComponent } from './issue-list-tab/issue-list-tab.component';


@NgModule({
  declarations: [
    AppComponent,
    IssueListEntryComponent,
    IssueListComponent,
    IssueListTabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatImportsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
