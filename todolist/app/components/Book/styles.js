import { StyleSheet } from 'react-native';

import { PADDING_ITEMS } from '../../constants/dimensions';

const FONT_SIZE_BOOK = 16;
const FONT_SIZE_AUTHOR = 12;
const ITEM_HEIGHT_IMG_BOOK = 56;
const ITEM_HEIGHT_BOOK = 60;
const RADIUS_IMG_BOOK = 28;

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
