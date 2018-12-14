import { StyleSheet } from 'react-native';

import { black } from '../../constants/colors';
import { ITEM_HEIGHT, PADDING_ITEMS } from '../../constants/dimensions';

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
    color: black,
    height: ITEM_HEIGHT,
    padding: PADDING_ITEMS
  },
  removeButton: {
    padding: PADDING_ITEMS
  }
});

export default styles;
