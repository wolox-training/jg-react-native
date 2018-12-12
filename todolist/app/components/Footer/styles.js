import { StyleSheet } from 'react-native';

import { WHITE, HEIGHT_HEADER_FOOTER, FONT_SIZE_FOTTER, RED, BLACK } from '../../constants/styleConst';

const styles = StyleSheet.create({
  footer: {
    backgroundColor: WHITE,
    flexDirection: 'column',
    height: HEIGHT_HEADER_FOOTER,
    shadowOffset:{ width: 0,  height: -3 },
    shadowColor: BLACK,
    shadowOpacity: 0.2,
  },
  footerButton: {
    alignItems: 'center',
    backgroundColor: WHITE,
    height: HEIGHT_HEADER_FOOTER,
    justifyContent: 'center'
  },
  textFooterButton: {
    color: RED,
    fontSize: FONT_SIZE_FOTTER,
    fontWeight: 'bold'
  }
});

export default styles;
