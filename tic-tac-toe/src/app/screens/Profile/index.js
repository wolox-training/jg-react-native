import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';
import { JWTUSER } from '@constants/const';
import { parseJwt } from '@config/session';

import Profile from './layout';

class ProfileContainer extends Component {
  getUser = () => {
    const token = sessionStorage.getItem(JWTUSER);
    const parseToken = parseJwt(token);
    return parseToken.user;
  };

  goBackClick = () => this.props.dispatch(goBack());

  render() {
    return <Profile user={this.getUser()} goBackClick={this.goBackClick} />;
  }
}

export default connect()(ProfileContainer);
