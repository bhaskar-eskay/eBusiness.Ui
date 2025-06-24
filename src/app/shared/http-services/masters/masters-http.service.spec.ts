import { TestBed } from '@angular/core/testing';

import { MastersHttpService } from './masters-http.service';

describe('MastersHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MastersHttpService = TestBed.get(MastersHttpService);
    expect(service).toBeTruthy();
  });
});
