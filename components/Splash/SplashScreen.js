import React from 'react';
import {View, Image} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from '../Styling/SplashScreenStyle';

const SplashScreen = () => {
  return (
    <View style={styles.splashcontainer}>
      <Image
        style={{width: 350, height: 125}}
        source={require('../../assets/image/logo_transparent.png')}
      />
      <LottieView
        style={styles.logo}
        source={require('../../assets/books.json')}
        autoPlay
      />
    </View>
  );
};

export default SplashScreen;
