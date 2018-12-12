import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loginActions from '@redux/Login/actions';
import Loader from '@components/Loader';

import Login from './layout';

class LoginContainer extends Component {
  state = {
    show: true
  };

  onSubmit = values => {
    this.setState({ show: true });
    const { username, password } = values;
    this.props.dispatch(loginActions.login(username, password));
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  render() {
    const propsLogin = {
      loginError: this.props.loginError,
      loading: this.props.loginLoading,
      onSubmit: this.onSubmit,
      handleCloseModal: this.closeModal,
      showModal: this.state.show
    };
    const loginChild = <Login {...propsLogin} />;
    const LoginLoaderContainer = Loader(loginChild);
    return <LoginLoaderContainer />;
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
