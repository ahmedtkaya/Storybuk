import {StyleSheet, Dimensions} from 'react-native';
const devicesSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: '#E3DFFD',
    flex: 1,
  },
  flatlistcontainer: {
    marginTop: 10,
    backgroundColor: '#ECF2FF',
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    flex: 0.95,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    height: 1000,
    elevation: 20,
  },
});
