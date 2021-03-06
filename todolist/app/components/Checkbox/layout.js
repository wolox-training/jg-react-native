import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Switch, Image } from 'react-native';

import styles from './styles';

import iconRemove from '../../assets/x_button.png';

function Checkbox({ completed, name, toggleComplete, handleRemove }) {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>{name}</Text>
      <View style={styles.rightContainer}>
        <Switch value={completed} onValueChange={toggleComplete} />
        <TouchableOpacity style={styles.removeButton} onPress={handleRemove}>
          <Image
            source={iconRemove}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

Checkbox.propTypes = {
  completed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
};

export default Checkbox;
