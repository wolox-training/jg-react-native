import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import authService from '@services/AuthService';

import Login from './layout';

class LoginContainer extends Component {
  onSubmit = async values => {
    const { username, password } = values;
    try {
      const logged = await authService.auth(username, password);
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
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
