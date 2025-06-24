import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FirmPreferencesEffects } from './firm-preferences.effects';

describe('FirmPreferencesEffects', () => {
  let actions$: Observable<any>;
  let effects: FirmPreferencesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FirmPreferencesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(FirmPreferencesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
