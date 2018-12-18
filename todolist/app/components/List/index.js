import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

function List({ items, ComponentChild, navigate }) {
  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
      data={items}
      renderItem={({ item }) => <ComponentChild item={item} navigate={navigate} />}
      keyExtractor={item => item.id}
    />
  );
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  ComponentChild: PropTypes.func
};

export default List;
