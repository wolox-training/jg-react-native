import React, { Component } from 'react';
import { connect } from 'react-redux';
import loginActions from '@redux/Login/actions';

import Login from './layout';

class LoginContainer extends Component {
  onSubmit = async values => {
    const { username, password } = values;
    this.props.dispatch(loginActions.login(username, password));
  };

  render() {
    return <Login onSubmit={this.onSubmit} />;
  }
}

export default connect()(LoginContainer);
