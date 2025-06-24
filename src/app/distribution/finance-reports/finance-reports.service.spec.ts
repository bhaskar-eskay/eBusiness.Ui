import { TestBed } from '@angular/core/testing';

import { FinanceReportsService } from './finance-reports.service';

describe('FinanceReportsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinanceReportsService = TestBed.get(FinanceReportsService);
    expect(service).toBeTruthy();
  });
});
