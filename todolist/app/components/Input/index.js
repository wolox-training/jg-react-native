import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';

import { actionCreators } from '../../redux/Todo/actions';

class Input extends Component {
  state ={
    value: null
  };

  generateId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  submit = () => {
    const { value } = this.state;
    const item = {
      id: this.generateId(),
      name: value,
      completed: false
    };
    this.props.dispatch(actionCreators.addItem(item));
    this.setState({ value: null });
  };

  change = value => {
    this.setState({ value });
  };

  render() {
    return <TextInput
      placeholder="Enter an item!"
      placeholderTextColor="grey"
      value={this.state.value}
      onSubmitEditing={this.submit}
      onChangeText={this.change}
      blurOnSubmit={false}
    />;
  }
}

export default connect()(Input);
