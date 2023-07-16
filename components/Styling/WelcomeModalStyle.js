import {StyleSheet, Dimensions} from 'react-native';
const devicesSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255,255, 0.9)',
    alignItems: 'center',
    //justifyContent: 'center',
    marginRight: 30,
    marginLeft: 30,
    height: 400,
    borderRadius: 30,
  },
  buttoncontainer: {
    width: '100%',
    height: 70,
    //backgroundColor: 'red',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  button: {
    width: 80,
    height: 40,
    backgroundColor: '#8F43EE',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginRight: 10,
  },
  buttontitle: {
    fontWeight: 'bold',
    color: 'white',
  },
  textcontainer: {
    //backgroundColor: 'red',
    width: '100%',
    height: '84%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  message: {
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: devicesSize.width / 15,
    textAlign: 'center',
    color: 'black',
  },
  messagev2: {
    marginTop: 20,
    fontSize: devicesSize.width / 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});
