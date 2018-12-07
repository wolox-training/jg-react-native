import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import Game from '@screens/Game';
import Login from '@screens/Login';

class App extends Component {
  render() {
    const { history } = this.props;
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/game" component={Game} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

App.propTypes = {
  history: PropTypes.object
};

export default App;
