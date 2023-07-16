import {StyleSheet, Dimensions} from 'react-native';
const devicesSize = Dimensions.get('window');
export default StyleSheet.create({
  button: {
    backgroundColor: '#c9dff1', //53d2dc
    width: devicesSize.width / 1.7,
    height: devicesSize.height / 7,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    shadowColor: 'grey',
    shadowOffset: {height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
  },
});
