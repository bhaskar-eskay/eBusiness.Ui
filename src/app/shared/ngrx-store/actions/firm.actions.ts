import { createAction, props } from '@ngrx/store';
import { Firm } from '../../models/inward-models';

export const loadFirms = createAction(
  '[Firm] Load Firms'
);

export const loadFirmsSuccess = createAction(
  '[Firm] Load Firms Success',
  props<{ data: Firm }>()
);

export const loadFirmsFailure = createAction(
  '[Firm] Load Firms Failure',
  props<{ error: any }>()
);
