import { StyleSheet } from 'react-native';

import { blue, white } from '../../constants/colors';
import { HEIGHT_HEADER_FOOTER } from '../../constants/dimensions';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: blue,
    flexDirection: 'column',
    height: HEIGHT_HEADER_FOOTER,
    justifyContent: 'center'
  },
  titleText: {
    color: white,
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default styles;
