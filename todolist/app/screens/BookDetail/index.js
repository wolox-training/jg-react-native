import React, { Component } from 'react';

import Detail from './layout';

class BooKDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.item.title
    }
  };
  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <Detail item={item} />
    );
  }
}

export default BooKDetail;
