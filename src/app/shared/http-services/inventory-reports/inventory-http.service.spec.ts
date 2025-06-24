import { TestBed } from '@angular/core/testing';

import { InventoryHttpService } from './inventory-http.service';

describe('InventoryHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InventoryHttpService = TestBed.get(InventoryHttpService);
    expect(service).toBeTruthy();
  });
});
