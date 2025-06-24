import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CitiesEffects } from './cities.effects';

describe('CitiesEffects', () => {
  let actions$: Observable<any>;
  let effects: CitiesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CitiesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CitiesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
