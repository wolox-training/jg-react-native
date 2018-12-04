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
    return <Login onSubmit={this.onSubmit} messageError={this.props.errorAuthMessage} />;
  }
}

const mapStateToProps = store => ({
  errorAuthMessage: store.login.errorAuthMessage
});

LoginContainer.propTypes = {
  errorAuthMessage: PropTypes.string
};

export default connect(mapStateToProps)(LoginContainer);
