import React, {useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity, Animated, Image} from 'react-native';
import {Modal, AsyncStorage} from '../../src/Libraries/Library';
import styles from '../Styling/FingerAnimationStyle';

const FingerModal = ({visible, onClose}) => {
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
        <View style={styles.buttoncontainer}>
          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttontitle}>Kapat</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imagecontainer}>
          <Animated.Image
            style={{width: size, height: size, resizeMode: 'contain'}}
            source={require('../../assets/image/fingerright.png')}
          />
        </View>
        <View style={styles.infocontainer}>
          <Text style={styles.info}>
            Hemen bir hikaye seç ve kendini geliştirmeye başla
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const checkFirstTime = async () => {
  try {
    const FirstTime = await AsyncStorage.getItem('FirstTime');
    if (FirstTime === null) {
      AsyncStorage.setItem('FirstTime', 'no');
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export {FingerModal, checkFirstTime};
