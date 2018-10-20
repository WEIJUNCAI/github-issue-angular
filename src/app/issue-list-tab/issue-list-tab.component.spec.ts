import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueListTabComponent } from './issue-list-tab.component';

describe('IssueListTabComponent', () => {
  let component: IssueListTabComponent;
  let fixture: ComponentFixture<IssueListTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueListTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueListTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
