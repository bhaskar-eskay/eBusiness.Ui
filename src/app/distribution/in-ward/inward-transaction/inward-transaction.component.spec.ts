import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardTransactionComponent } from './inward-transaction.component';

describe('InwardTransactionComponent', () => {
  let component: InwardTransactionComponent;
  let fixture: ComponentFixture<InwardTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
