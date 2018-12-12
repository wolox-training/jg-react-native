import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox';
import styles from './styles';

class List extends Component {
  getRows = () => {
    return this.props.items.map((item, index) => (
      <View
        key={item.id} >
        <Checkbox item={item} />
      </View>
    ));
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.getRows()}
      </ScrollView>
    );
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired
};

export default List;
