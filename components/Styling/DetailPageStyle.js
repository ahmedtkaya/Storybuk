import {StyleSheet, Dimensions} from 'react-native';
const devicesSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: '#E3DFFD',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
    //backgroundColor: 'red',
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: '#8F43EE',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 10,
  },
  buttontext: {
    fontWeight: 'bold',
    color: 'white',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  storycontainer: {
    width: '92%',
    height: '80%',
    backgroundColor: 'white',
    marginTop: 10,
    marginLeft: 15,
    borderRadius: 20,
    shadowColor: '#171717',
    shadowOffset: {width: -3, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    alignItems: 'center',
    elevation: 25,
  },
  story: {
    textAlign: 'left',
    fontSize: 20,
    marginLeft: 7,
    marginRight: 7,
    marginTop: 5,
    color: 'black',
    lineHeight: 25,
  },
});
