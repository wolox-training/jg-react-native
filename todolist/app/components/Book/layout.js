import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Switch, Image } from 'react-native';

import styles from './styles';

function BookLayout({ img, author, title, handleDetail }) {
  return (
    <TouchableOpacity style={styles.container} onPress={handleDetail} >
      {img && <Image style={styles.img} source={{uri: img}} />}
      {!img && <Image style={styles.img} source={require('../../assets/grey_book.png')} />}
      <View style={styles.item}>
        <Text style={styles.title}>{ title }</Text>
        <Text style={styles.author}>{ author }</Text>
      </View>
    </TouchableOpacity>
  );
}

BookLayout.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default BookLayout;
