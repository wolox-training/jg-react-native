import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import gameReducer from './game/reducer';
import loginReducer from './login/reducer';

const reducers = {
  gameReducer,
  loginReducer,
  form: formReducer
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default store;
