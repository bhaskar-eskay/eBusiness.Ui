import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as states from '../actions/states.actions';

export const statesFeatureKey = 'states';

export interface State extends EntityState<States> {

}

export const adapter: EntityAdapter<States> = createEntityAdapter<States>({

})

export const initialState: State =  adapter.getInitialState({

})


export const reducer = createReducer(
  initialState,
  on(states.loadStatessSuccess,(state,action) => 
  adapter.setAll(action.data,state)
)
);
