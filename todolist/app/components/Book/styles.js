import { StyleSheet } from 'react-native';

import { PADDING_ITEMS } from '../../constants/dimensions';

const ITEM_HEIGHT_IMG_BOOK = 56;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'flex-start',
    padding: PADDING_ITEMS
  },
  img: {
    borderRadius: 28,
    height: ITEM_HEIGHT_IMG_BOOK,
    width: ITEM_HEIGHT_IMG_BOOK
  },
  item: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: PADDING_ITEMS
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  author: {
    fontSize: 12
  },
  rightContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default styles;
