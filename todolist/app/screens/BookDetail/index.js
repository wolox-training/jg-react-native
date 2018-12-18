import React, { Component } from 'react';

import Detail from './layout';

class BooKDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const item = navigation.getParam('item');
    return {
      title: item.title
    }
  };
  render() {
    const item = this.props.navigation.getParam('item');
    return (
      <Detail item={item} />
    );
  }
}

export default BooKDetail;
