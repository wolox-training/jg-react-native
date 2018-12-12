import { createReducer, completeState, completeReducer } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  login: null
};

const reducerDescription = {
  primaryActions: [actions.LOGIN]
};

export default createReducer(Immutable(completeState(initialState)), completeReducer(reducerDescription));
