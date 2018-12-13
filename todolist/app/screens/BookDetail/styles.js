import { StyleSheet } from 'react-native';

import { PADDING_ITEMS, HEIGHT_IMG_BOOK } from '../../constants/styleConst';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  img: {
    alignSelf: 'center',
    height: HEIGHT_IMG_BOOK,
    width: HEIGHT_IMG_BOOK
  },
  containerInfo: {
    padding: PADDING_ITEMS
  }
});

export default styles;
