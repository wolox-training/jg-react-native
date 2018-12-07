import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import Game from '@screens/Game';
import Login from '@screens/Login';
import Profile from '@screens/Profile';
import Topbar from '@components/Topbar';
import { sessionValidation } from '@config/session';

class App extends Component {
  state = {};

  static getDerivedStateFromProps(props) {
    const { path, dispatch } = props;
    sessionValidation(dispatch, path);
    return null;
  }

  render() {
    const token = sessionStorage.getItem('jwtUser');
    return (
      <React.Fragment>
        {token && <Topbar />}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/game" component={Game} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
  login: store.login.login,
  path: store.router.location.pathname
});

export default connect(mapStateToProps)(App);
