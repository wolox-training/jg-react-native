import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import loginReducer from './Login/reducer';
import gameReducer from './Game/reducer';

const reducers = {
  gameReducer,
  loginReducer,
  form: formReducer
};

const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
