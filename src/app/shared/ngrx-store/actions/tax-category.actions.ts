import { createAction, props } from '@ngrx/store';

export const loadTaxCategorys = createAction(
  '[TaxCategory] Load TaxCategorys'
);

export const loadTaxCategorysSuccess = createAction(
  '[TaxCategory] Load TaxCategorys Success',
  props<{ data: any }>()
);

export const loadTaxCategorysFailure = createAction(
  '[TaxCategory] Load TaxCategorys Failure',
  props<{ error: any }>()
);
  export const loadTaxCategory = createAction(
    '[TaxCategory] Load TaxCategorys Failure',
    props<{ error: any }>()
);
