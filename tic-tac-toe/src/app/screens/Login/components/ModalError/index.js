import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { errorMessage } from '@constants/const';

import ModalError from './layout';

class ModalErrorContainer extends Component {
  render() {
    const { loginError, handleClose } = this.props;
    const message = errorMessage[loginError];
    return <ModalError message={message} handleClose={handleClose} />;
  }
}

ModalErrorContainer.propTypes = {
  loginError: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default ModalErrorContainer;
