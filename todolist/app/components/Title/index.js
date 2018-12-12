import React from 'react'
import { View, Text } from 'react-native';

import styles from './styles';

function TitleComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{'Todo List'}</Text>
    </View>
  );
};

export default TitleComponent;
