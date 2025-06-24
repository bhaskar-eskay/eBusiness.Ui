import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {  createReducer, on } from '@ngrx/store';
import { Firm } from '../../models/inward-models';
import * as firmActions from '../actions/firm.actions';

export const firmFeatureKey = 'firm';


export interface State extends EntityState<Firm> {

}


export const adapter: EntityAdapter<Firm> = createEntityAdapter<Firm>({

})

export const initialState: State =  adapter.getInitialState({

})


export const reducer = createReducer(
  initialState,
  on(firmActions.loadFirmsSuccess,(state,action) => 
  adapter.setOne(action.data,state)
  )



);

