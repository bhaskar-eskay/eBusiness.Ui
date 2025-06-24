import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FirmEffects } from './firm.effects';

describe('FirmEffects', () => {
  let actions$: Observable<any>;
  let effects: FirmEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FirmEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(FirmEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
