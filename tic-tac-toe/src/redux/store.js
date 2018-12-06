import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { fetchMiddleware } from 'redux-recompose';

import loginReducer from './Login/reducer';
import gameReducer from './Game/reducer';

const store = history => {
  const router = connectRouter(history);
  const reducers = {
    game: gameReducer,
    login: loginReducer,
    form: formReducer,
    router
  };
  const reducer = combineReducers(reducers);
  return createStore(reducer, applyMiddleware(thunk, fetchMiddleware, routerMiddleware(history)));
};

export default store;
