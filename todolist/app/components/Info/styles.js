import { StyleSheet } from 'react-native';

import { ITEM_HEIGHT } from '../../constants/dimensions';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: ITEM_HEIGHT
  },
  title: {
    flex: 0.4,
    fontWeight: 'bold'
  },
  value: {
    textAlign: 'left'
  }
});

export default styles;
