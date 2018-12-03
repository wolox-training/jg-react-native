import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';
import loginActions from '@redux/Login/actions';
import { LOGGEDIN } from '@constants/const';

import Login from './layout';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    const { loggedState } = this.props;
    if (loggedState === LOGGEDIN) {
      this.props.dispatch(push('/game'));
    }
  }

  onSubmit = values => {
    const { username, password } = values;
    this.props.dispatch(loginActions.login(username, password));
  };

  render() {
    return <Login onSubmit={this.onSubmit} messageError={this.props.errorAuthMessage} />;
  }
}

const mapStateToProps = store => ({
  errorAuthMessage: store.login.errorAuthMessage,
  loggedState: store.login.loggedState
});

LoginContainer.propTypes = {
  errorAuthMessage: PropTypes.string,
  loggedState: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(LoginContainer);
