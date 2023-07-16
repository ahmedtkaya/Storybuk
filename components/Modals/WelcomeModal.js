import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import styles from '../Styling/WelcomeModalStyle';
import {Modal, AsyncStorage} from '../../src/Libraries/Library';

const WelcomeModal = ({visible, onClose}) => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const messageOpacity = useRef(new Animated.Value(0)).current;
  const messageV2Opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible && !animationStarted) {
      setAnimationStarted(true);
      animateTitle();
    }
  }, [visible]);

  const animateTitle = () => {
    Animated.timing(titleOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      animateMessage();
    });
  };

  const animateMessage = () => {
    Animated.timing(messageOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      animateMessageV2();
    });
  };

  const animateMessageV2 = () => {
    Animated.timing(messageV2Opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttontitle}>Kapat</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textcontainer}>
          <Animated.Text style={[styles.title, {opacity: titleOpacity}]}>
            Hoşgeldiniz
          </Animated.Text>

          <Animated.Text style={[styles.message, {opacity: messageOpacity}]}>
            Okuyarak İngilizce yeteneklerini geliştirmeye hazır mısın?
          </Animated.Text>
          <Animated.Text style={[styles.message, {opacity: messageV2Opacity}]}>
            Hemen dereceni seç ve hikayelerin tadını çıkar.
          </Animated.Text>
        </View>
      </View>
    </Modal>
  );
};

const checkIfFirstTime = async () => {
  try {
    const isFirstTime = await AsyncStorage.getItem('isFirstTime');
    if (isFirstTime === null) {
      AsyncStorage.setItem('isFirstTime', 'no');
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export {WelcomeModal, checkIfFirstTime};
