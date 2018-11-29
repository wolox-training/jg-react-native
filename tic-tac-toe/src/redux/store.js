import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import loginReducer from './Login/reducer';
import gameReducer from './Game/reducer';

export const history = createBrowserHistory();

const reducers = {
  game: gameReducer,
  login: loginReducer,
  form: formReducer,
  router: connectRouter(history)
};

const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunk, routerMiddleware(history)));

export default store;
