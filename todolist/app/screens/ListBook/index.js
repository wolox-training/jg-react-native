import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import Title from '../../components/Title';
import List from '../../components/List';
import Book from '../../components/Book';

import books from '../../constants/listBoook';

function BookList() {
  return (
    <View style={styles.container}>
      <Title value={'Book List'}/>
      <List ComponentChild={Book} items={books}/>
    </View>
  );
};

export default BookList;
