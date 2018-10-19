import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatImportsModule } from './imports/mat-imports.module';

import { AppComponent } from './app.component';
import { IssueListEntryComponent } from './issue-list-entry/issue-list-entry.component';
import { IssueListComponent } from './issue-list/issue-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueListEntryComponent,
    IssueListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
