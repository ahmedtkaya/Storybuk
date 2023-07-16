import React, {useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity, Animated, Image} from 'react-native';
import {Modal, AsyncStorage} from '../../src/Libraries/Library';
import styles from '../Styling/DetailModalStyle';

const DetailModal = ({visible, onClose}) => {
  const size = useRef(new Animated.Value(100)).current;

  const sizeAnimation = () => {
    Animated.sequence([
      Animated.timing(size, {
        toValue: 150,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(size, {
        toValue: 130,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start(() => sizeAnimation());
  };

  useEffect(() => {
    sizeAnimation();
  }, []);

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.imagecontainer}>
          <Animated.Image
            style={{
              width: size,
              height: size,
              resizeMode: 'contain',
              transform: [{rotate: '-45deg'}],
            }}
            source={require('../../assets/image/fingerup.png')}
          />
          <Animated.Image
            style={{
              width: size,
              height: size,
              resizeMode: 'contain',
              transform: [{rotate: '45deg'}],
            }}
            source={require('../../assets/image/fingerup.png')}
          />
        </View>
        <View style={styles.infocontainer}>
          <Text style={styles.info}>
            Yukarıda gösterilen butonlar ile diller arasında geçiş yapabilirsin
          </Text>

          <Text style={styles.info}>
            Anlamını bilmediğin kelimeye tıkla ve hemen anlamını öğren
          </Text>
        </View>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttontitle}>Kapat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const checkDetailFirstTime = async () => {
  try {
    const detailFirstTime = await AsyncStorage.getItem('detailFirstTime');
    if (detailFirstTime === null) {
      AsyncStorage.setItem('detailFirstTime', 'no');
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export {DetailModal, checkDetailFirstTime};
