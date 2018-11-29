import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { OUT } from '@constants/const';
import actionsLogin from '@redux/Login/actions';

import ModalError from './layout';

class ModalErrorContainer extends Component {
  handleClose = () => {
    this.props.dispatch(actionsLogin.change(OUT));
  };

  render() {
    return <ModalError message={this.props.message} handleClose={this.handleClose} />;
  }
}

ModalErrorContainer.propTypes = {
  message: PropTypes.string.isRequired
};

export default connect()(ModalErrorContainer);
