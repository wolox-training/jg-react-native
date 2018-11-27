import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clickLogin } from '@redux/login/actions';

import Login from './layout';

class LoginContainer extends Component {
  onSubmit = values => {
    const { username, password } = values;
    this.props.dispatch(clickLogin(username, password));
  };

  render() {
    return <Login onSubmit={this.onSubmit} />;
  }
}

const mapStateToProps = store => ({
  loggedIn: store.loggedIn
});

LoginContainer.propTypes = {
  loggedIn: PropTypes.bool
};

export default connect(mapStateToProps)(LoginContainer);
