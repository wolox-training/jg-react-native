import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import { actionCreators } from '../../redux/Todo/actions';
import { generateId } from '../../utils/numberUtils';
import { grey } from '../../constants/colors';

class Input extends Component {
  state = {
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

  changeInputValue = value => {
    this.setState({ value });
  };

  render() {
    return <TextInput
      placeholder="Enter an item!"
      placeholderTextColor={grey}
      value={this.state.value}
      onSubmitEditing={this.submit}
      onChangeText={this.changeInputValue}
      blurOnSubmit={false}
      style={styles.input}
    />;
  }
}

export default connect()(Input);
