import { TestBed } from '@angular/core/testing';

import { InWardHttpService } from './in-ward-http.service';

describe('InWardHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InWardHttpService = TestBed.get(InWardHttpService);
    expect(service).toBeTruthy();
  });
});
