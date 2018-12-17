import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Checkbox from '../Checkbox';
import styles from './styles';

function List({ items }) {
  return (
    <FlatList
      style={styles.container}
      data={items}
      renderItem={({ item }) => <Checkbox item={item} />}
      keyExtractor={item => item.id}
    />
  );
}

const mapStateToProps = store => ({
  items: store.items
});

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired
};

export default connect(mapStateToProps)(List);
