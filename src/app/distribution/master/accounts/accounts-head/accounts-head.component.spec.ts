import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsHeadComponent } from './accounts-head.component';

describe('AccountsHeadComponent', () => {
  let component: AccountsHeadComponent;
  let fixture: ComponentFixture<AccountsHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
