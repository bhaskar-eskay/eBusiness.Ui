import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOthersComponent } from './account-others.component';

describe('AccountOthersComponent', () => {
  let component: AccountOthersComponent;
  let fixture: ComponentFixture<AccountOthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountOthersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
