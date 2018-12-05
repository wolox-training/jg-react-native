import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import loginReducer from './Login/reducer';
import gameReducer from './Game/reducer';

const reducers = {
  gameReducer,
  loginReducer,
  form: formReducer
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default store;
