import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DistrictsEffects } from './districts.effects';

describe('DistrictsEffects', () => {
  let actions$: Observable<any>;
  let effects: DistrictsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DistrictsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(DistrictsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
