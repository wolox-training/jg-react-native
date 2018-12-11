import { createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { reducer } from './Todo/reducer';

const middleware = [ thunk ];

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger());
}

export default () => {
  const store = createStore(
    reducer,
    applyMiddleware(...middleware),
  );
  return store;
}
