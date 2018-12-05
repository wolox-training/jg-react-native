import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import Game from '@screens/Game';
import Login from '@screens/Login';
import Profile from '@screens/Profile';
import Topbar from '@components/Topbar';
import { sessionValidation } from '@config/session';
import { LOGGEDIN } from '@constants/const';

class App extends Component {
  constructor(props) {
    super(props);
    sessionValidation(props.dispatch, props.path);
  }

  render() {
    const { history, loggedState } = this.props;
    return (
      <ConnectedRouter history={history}>
        <React.Fragment>
          {loggedState === LOGGEDIN && <Topbar />}
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/game" component={Game} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </React.Fragment>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = store => ({
  loggedState: store.login.loggedState,
  path: store.router.location.pathname
});

App.propTypes = {
  history: PropTypes.shape({}),
  loggedState: PropTypes.string,
  path: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(App);
