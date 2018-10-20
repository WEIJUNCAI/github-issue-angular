import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  showProgressBar : boolean = false;

  onIssueLoadingStart() {
    this.showProgressBar = true;
  }

  onIssueLoadingComplete() {
    this.showProgressBar = false;
  }
}
