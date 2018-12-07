import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ModalError from './layout';

class ModalErrorContainer extends Component {
  state = {
    show: true
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    const { message } = this.props;
    return <ModalError show={this.state.show} message={message} handleClose={this.handleClose} />;
  }
}

ModalErrorContainer.propTypes = {
  message: PropTypes.string.isRequired
};

export default ModalErrorContainer;
