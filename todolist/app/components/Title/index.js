import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#87CEEB',
    flexDirection: 'column',
    height: 50,
    justifyContent: 'center'
  },
  titleText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold"
  }
});

function TitleComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{'Todo List'}</Text>
    </View>
  );
};

export default TitleComponent;
