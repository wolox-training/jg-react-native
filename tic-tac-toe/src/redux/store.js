import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
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
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk, fetchMiddleware, routerMiddleware(history)))
  );
};

export default store;
