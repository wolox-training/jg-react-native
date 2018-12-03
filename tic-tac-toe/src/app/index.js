import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import Game from '@screens/Game';
import Login from '@screens/Login';
import { sessionValidation } from '@config/session';

class App extends Component {
  constructor(props) {
    super(props);
    sessionValidation(props.dispatch);
  }

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
  history: PropTypes.shape({})
};

export default connect()(App);
