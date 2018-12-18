import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { reducer } from './Todo/reducer';
import Reactotron from '../config/ReactotronConfig';

const middleware = [ thunk ];

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger());
}

export default () => {
  const store = Reactotron.createStore(
    reducer,
    applyMiddleware(...middleware),
  );
  return store;
}
