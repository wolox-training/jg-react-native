import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { errorMessage } from '@constants/const';

import ModalError from './layout';

class ModalErrorContainer extends Component {
  state = {
    show: true
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    const { loginError } = this.props;
    const message = errorMessage[loginError];
    return <ModalError show={this.state.show} message={message} handleClose={this.handleClose} />;
  }
}

ModalErrorContainer.propTypes = {
  loginError: PropTypes.string.isRequired
};

export default ModalErrorContainer;
