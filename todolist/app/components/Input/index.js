import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';

import { actionCreators } from '../../redux/Todo/actions';
import { generateId } from '../../utils/numberUtils';

class Input extends Component {
  state ={
    value: null
  };

  submit = () => {
    const { value } = this.state;
    const item = {
      id: generateId(),
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
