import React, { Component } from 'react';
import { connect } from 'react-redux';
import { routes } from '@constants/const';
import { endSession } from '@config/session';
import { cleanGame } from '@redux/Game/actions';

import Topbar from './layout';

class TopbarContainer extends Component {
  logoutClick = () => {
    this.props.dispatch(cleanGame());
    endSession(this.props.dispatch);
  };

  render() {
    return <Topbar urls={routes} logoutClick={this.logoutClick} />;
  }
}

export default connect()(TopbarContainer);
