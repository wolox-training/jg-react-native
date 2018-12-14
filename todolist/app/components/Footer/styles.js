import { StyleSheet } from 'react-native';

import { black, red, white } from '../../constants/colors';
import { HEIGHT_HEADER_FOOTER } from '../../constants/dimensions';

const styles = StyleSheet.create({
  footer: {
    backgroundColor: white,
    flexDirection: 'column',
    height: HEIGHT_HEADER_FOOTER,
    shadowOffset:{ width: 0,  height: -3 },
    shadowColor: black,
    shadowOpacity: 0.2,
  },
  footerButton: {
    alignItems: 'center',
    backgroundColor: white,
    height: HEIGHT_HEADER_FOOTER,
    justifyContent: 'center'
  },
  textFooterButton: {
    color: red,
    fontSize: 14,
    fontWeight: 'bold'
  }
});

export default styles;
