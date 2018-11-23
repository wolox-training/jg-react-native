import React, { Component } from 'react';

import Login from './layout';

class LoginContainer extends Component {
  onSubmit = e => {
    console.log(e);
  };

  render() {
    return <Login onSubmit={this.onSubmit} />;
  }
}

export default LoginContainer;
