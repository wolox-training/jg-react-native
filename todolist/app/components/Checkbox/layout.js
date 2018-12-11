import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity, CheckBox } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rightContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  item: {
    color: 'black',
    height: 44,
    padding: 10
  },
  removeButton: {
    padding: 10
  },
  textRemoveButton: {
    color: '#CB4335',
  }
});

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
