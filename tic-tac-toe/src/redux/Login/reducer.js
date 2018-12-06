import { createReducer } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
  loginLoading: false,
  loginSuccess: false,
  errorAuthMessage: null
};

const reducerDescription = {
  [actions.LOGIN]: state => ({
    ...state,
    loginLoading: true,
    loginSuccess: false,
    errorAuthMessage: null
  }),
  [actions.LOGIN_SUCCESS]: state => ({
    ...state,
    loginLoading: false,
    loginSuccess: true,
    errorAuthMessage: null
  }),
  [actions.LOGIN_FAILURE]: (state, action) => ({
    ...state,
    loginLoading: false,
    loginSuccess: false,
    errorAuthMessage: action.payload
  })
};

export default createReducer(initialState, reducerDescription);
