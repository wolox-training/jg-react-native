import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import Game from '@screens/Game';
import Login from '@screens/Login';
import { ERROR, LOADING, LOGGEDIN, NOAUTH, OUT} from '@constants/const';
import actions from '@redux/Login/actions';

import './scss/index.scss';

import store, { history } from './redux/store';

store.subscribe(() => {
  console.log(store.getState());
  if (store.getState().login.loggedEstate === NOAUTH) {
    window.alert('User or password incorrect');
    store.dispatch(actions.change(OUT));
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/game" component={Game} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
