import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TaxCategoryEffects } from './tax-category.effects';

describe('TaxCategoryEffects', () => {
  let actions$: Observable<any>;
  let effects: TaxCategoryEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TaxCategoryEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TaxCategoryEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
