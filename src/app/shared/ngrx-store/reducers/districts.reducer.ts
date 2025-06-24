import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as districts from '../actions/districts.actions';


export const districtsFeatureKey = 'districts';

export interface State extends EntityState<District> {

}

export const adapter: EntityAdapter<District> = createEntityAdapter<District>({

})

export const initialState: State =  adapter.getInitialState({

})



export const reducer = createReducer(
  initialState,
  on(districts.loadDistrictssSuccess,(state,action) => 
  adapter.setAll(action.data,state)
)
);

