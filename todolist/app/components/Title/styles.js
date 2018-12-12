import { StyleSheet } from 'react-native';

import { BLUE, HEIGHT_HEADER_FOOTER, WHITE, FONT_SIZE_TITLE } from '../../constants/styleConst';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: BLUE,
    flexDirection: 'column',
    height: HEIGHT_HEADER_FOOTER,
    justifyContent: 'center'
  },
  titleText: {
    color: WHITE,
    fontSize: FONT_SIZE_TITLE,
    fontWeight: 'bold'
  }
});

export default styles;
