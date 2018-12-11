import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux';

import { actionCreators } from '../../redux/Todo/actions';

class Input extends Component {
  state ={
    value: null
  };

  submit = () => {
    const { value } = this.state;
    this.props.dispatch(actionCreators.addItem(value));
    this.setState({ value: null });
  };

  change = value => {
    this.setState({ value });
  }

  render() {
    return <TextInput
      placeholder="Enter an item!"
      placeholderTextColor="grey"
      value={this.state.value}
      onSubmitEditing={this.submit}
      onChangeText={this.change}
    />
  }
}

export default connect()(Input);
