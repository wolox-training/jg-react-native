import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux';

import styles from './styles';
import { actionCreators } from '../../redux/Todo/actions';

class FooterComponent extends Component {
  removeItems = () => {
    this.props.dispatch(actionCreators.removeCompletedItems());
  };

  render() {
    return (
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={this.removeItems}>
          <Text style={styles.textFooterButton}>{'Remove completed items'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(FooterComponent);
