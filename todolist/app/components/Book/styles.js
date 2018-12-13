import { StyleSheet } from 'react-native';

import { FONT_SIZE_BOOK, FONT_SIZE_AUTHOR, ITEM_HEIGHT_IMG_BOOK, ITEM_HEIGHT_BOOK,
  PADDING_ITEMS, RADIUS_IMG_BOOK } from '../../constants/styleConst';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: ITEM_HEIGHT_BOOK,
    justifyContent: 'flex-start',
    padding: PADDING_ITEMS
  },
  img: {
    borderRadius: RADIUS_IMG_BOOK,
    height: ITEM_HEIGHT_IMG_BOOK,
    width: ITEM_HEIGHT_IMG_BOOK
  },
  item: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: PADDING_ITEMS
  },
  title: {
    fontSize: FONT_SIZE_BOOK,
    fontWeight: 'bold'
  },
  author: {
    fontSize: FONT_SIZE_AUTHOR
  },
  rightContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default styles;
