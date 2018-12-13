import { StyleSheet } from 'react-native';

import { BLACK, ITEM_HEIGHT, PADDING_ITEMS } from '../../constants/styleConst';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rightContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  item: {
    color: BLACK,
    height: ITEM_HEIGHT,
    padding: PADDING_ITEMS
  },
  removeButton: {
    padding: PADDING_ITEMS
  }
});

export default styles;
