import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Switch, Image } from 'react-native';

import styles from './styles';

const iconNotImg = require('../../assets/grey_book.png');

function BookLayout({ img, author, title, handleDetail }) {
  return (
    <TouchableOpacity style={styles.container} onPress={handleDetail} >
      {<Image style={styles.img} source={img ? {uri: img}: iconNotImg} />}
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
