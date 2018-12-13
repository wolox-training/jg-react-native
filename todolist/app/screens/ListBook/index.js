import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import List from '../../components/List';
import Book from '../../components/Book';

import books from '../../constants/listBoook';

function App({ navigation }) {
  return (
    <View style={styles.container}>
      <List ComponentChild={Book} items={books} navigate={navigation.navigate} />
    </View>
  );
};

export default App;
