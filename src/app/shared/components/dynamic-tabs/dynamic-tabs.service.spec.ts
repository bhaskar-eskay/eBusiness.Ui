import { TestBed } from '@angular/core/testing';

import { DynamicTabsService } from './dynamic-tabs.service';

describe('DynamicTabsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicTabsService = TestBed.get(DynamicTabsService);
    expect(service).toBeTruthy();
  });
});
