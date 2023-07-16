import {StyleSheet, Dimensions} from 'react-native';
const devicesSize = Dimensions.get('window');
export default StyleSheet.create({
  splashcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#E3DFFD',
  },
  logo: {
    width: 400,
    height: 300,
  },
});
