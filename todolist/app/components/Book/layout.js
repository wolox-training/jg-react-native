import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Switch, Image } from 'react-native';

import styles from './styles';

import iconNotImg from '../../assets/grey_book.png';

function Book({ img, author, title }) {
  return (
    <TouchableOpacity style={styles.container}>
      {<Image style={styles.img} source={img ? {uri: img}: iconNotImg} />}
      <View style={styles.item}>
        <Text style={styles.title}>{ title }</Text>
        <Text style={styles.author}>{ author }</Text>
      </View>
    </TouchableOpacity>
  );
}

Book.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Book;
