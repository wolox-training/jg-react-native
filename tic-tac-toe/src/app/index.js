import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import Game from '@screens/Game';
import Login from '@screens/Login';
import { sessionValidation } from '@config/session';

class App extends Component {
  state = {};

  static getDerivedStateFromProps(props) {
    const { path, dispatch } = props;
    sessionValidation(dispatch, path);
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/game" component={Game} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
  loginSuccess: store.login.loginSuccess,
  path: store.router.location.pathname
});

export default connect(mapStateToProps)(App);
