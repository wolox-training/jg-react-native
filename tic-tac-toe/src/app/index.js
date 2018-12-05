import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import Game from '@screens/Game';
import Login from '@screens/Login';
import Profile from '@screens/Profile';
import Topbar from '@components/Topbar';
import { sessionValidation } from '@config/session';
import { LOGGEDIN } from '@constants/const';

class App extends Component {
  componentDidMount() {
    const { dispatch, path } = this.props;
    sessionValidation(dispatch, path);
  }

  render() {
    const { loggedState } = this.props;
    return (
      <React.Fragment>
        {loggedState === LOGGEDIN && <Topbar />}
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
  loggedState: store.login.loggedState,
  path: store.router.location.pathname
});

App.propTypes = {
  loggedState: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(App);
