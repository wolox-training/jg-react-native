import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

function Info({ title, value }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ title }</Text>
      <Text style={styles.value}>{ value }</Text>
    </View>
  );
}

Info.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default Info;
