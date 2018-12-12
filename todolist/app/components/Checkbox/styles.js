import { StyleSheet } from 'react-native';

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
    color: 'black',
    height: 44,
    padding: 10
  },
  removeButton: {
    padding: 10
  },
  textRemoveButton: {
    color: '#CB4335',
  }
});

export default styles;
