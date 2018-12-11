import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux';

import { actionCreators } from '../../redux/Todo/actions';

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'white',
    flexDirection: 'column',
    height: 50
  },
  footerButton: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
    justifyContent: 'center'
  },
  textFooterButton: {
    color: '#CB4335',
    fontSize: 14,
    fontWeight: "bold"
  }
});

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
