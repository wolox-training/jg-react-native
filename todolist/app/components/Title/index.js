import React from 'react'
import { View, Text } from 'react-native';

import styles from './styles';

function TitleComponent({ value }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{value}</Text>
    </View>
  );
};

export default TitleComponent;
