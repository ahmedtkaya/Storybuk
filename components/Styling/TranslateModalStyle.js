import {StyleSheet, Dimensions} from 'react-native';
const devicesSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width: 300,
    height: 230,
    backgroundColor: '#FFF6F4',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 30,
    elevation: 30,
  },
  logo: {
    width: 150,
    height: 65,
  },
  titlecontainer: {
    width: '100%',
    height: 35,
    //backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  wordscontainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    //backgroundColor: 'rgba(128,128,128,0.5)',
    borderTopWidth: 1,
    marginTop: 5,
  },
  words: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    color: 'black',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#8F43EE',
    width: '70%',
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    elevation: 8,
  },
  buttontext: {
    fontWeight: 'bold',
    color: 'white',
  },
});
