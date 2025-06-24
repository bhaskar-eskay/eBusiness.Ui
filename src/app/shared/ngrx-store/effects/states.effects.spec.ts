import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StatesEffects } from './states.effects';

describe('StatesEffects', () => {
  let actions$: Observable<any>;
  let effects: StatesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StatesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(StatesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
