import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, CheckBox } from 'react-native';

import styles from './styles';

function CheckboxLayout({ completed, name, toggleComplete, handleRemove }) {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>{name}</Text>
      <View style={styles.rightContainer}>
        <CheckBox value={completed} onValueChange={toggleComplete} />
        <TouchableOpacity style={styles.removeButton} onPress={handleRemove}>
          <Text style={styles.textRemoveButton}>{'X'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

CheckboxLayout.propTypes = {
  completed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
};

export default CheckboxLayout;
