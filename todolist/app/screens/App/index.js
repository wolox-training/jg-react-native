import React from 'react';
import { View, SafeAreaView } from 'react-native';

import styles from './styles';
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import List from '../../components/List';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Title />
      <Input />
      <List />
      <Footer />
    </SafeAreaView>
  );
};

export default App;
