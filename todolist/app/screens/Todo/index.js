import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles';
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import List from '../../components/List';
import Checkbox from '../../components/Checkbox';

function TodoList({ items }) {
  return (
    <View style={styles.container}>
      <Title value={'Todo List'}/>
      <Input />
      <List ComponentChild={Checkbox} items={items}/>
      <Footer />
    </View>
  );
};

const mapStateToProps = store => ({
  items: store.items
});

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired
};

export default connect(mapStateToProps)(TodoList);
