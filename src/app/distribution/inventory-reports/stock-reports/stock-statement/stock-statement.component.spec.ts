import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockStatementComponent } from './stock-statement.component';

describe('StockStatementComponent', () => {
  let component: StockStatementComponent;
  let fixture: ComponentFixture<StockStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
