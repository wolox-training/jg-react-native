import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Image } from 'react-native';

import styles from './styles';
import Info from '../../components/Info';

function Detail({ item }) {
  return (
    <ScrollView style={styles.container}>
      {item.image_url && <Image   style={styles.img} source={{uri: item.image_url}} />}
      <View style={styles.containerInfo}>
        <Info title={'Author'} value={item.author} />
        <Info title={'Genre'} value={item.genre} />
        <Info title={'Year'} value={item.year} />
        <Info title={'Publisher'} value={item.publisher} />
      </View>
    </ScrollView>
  );
};

Detail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    image_url: PropTypes.string
  }).isRequired
};

export default Detail;
