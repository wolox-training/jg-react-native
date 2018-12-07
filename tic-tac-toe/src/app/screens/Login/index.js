import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loginActions from '@redux/Login/actions';

import Login from './layout';

class LoginContainer extends Component {
  onSubmit = values => {
    const { username, password } = values;
    this.props.dispatch(loginActions.login(username, password));
  };

  render() {
    const { loginError, loginLoading } = this.props;
    return <Login onSubmit={this.onSubmit} loginError={loginError} loginLoading={loginLoading} />;
  }
}

const mapStateToProps = store => ({
  loginError: store.login.loginError,
  loginLoading: store.login.loginLoading
});

LoginContainer.propTypes = {
  loginError: PropTypes.string,
  loginLoading: PropTypes.bool
};

export default connect(mapStateToProps)(LoginContainer);
