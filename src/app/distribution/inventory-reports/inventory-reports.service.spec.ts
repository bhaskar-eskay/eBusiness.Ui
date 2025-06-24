import { TestBed } from '@angular/core/testing';

import { InventoryReportsService } from './inventory-reports.service';

describe('InventoryReportsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InventoryReportsService = TestBed.get(InventoryReportsService);
    expect(service).toBeTruthy();
  });
});
