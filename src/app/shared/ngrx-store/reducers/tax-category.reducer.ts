import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { TaxCategory } from '../../models/master-models';

import * as taxCategory from '../actions/tax-category.actions';

export const taxCategoryFeatureKey = 'taxCategory';

export interface State extends EntityState<TaxCategory> {
  selectedUserId:  string;
}
export const adoptor: EntityAdapter<TaxCategory> = createEntityAdapter<TaxCategory>({
  selectId: selectUserId
})
export const initialState: State =  adoptor.getInitialState({
  selectedUserId:  null
})

export const reducer = createReducer(
  initialState,
  on(taxCategory.loadTaxCategorysSuccess,(state,action) => 
  adoptor.setAll(action.data,state)

)
);

export function selectUserId(a: TaxCategory): string {
  //In this case this would be optional since primary key is id
  return a.name as string;
}

