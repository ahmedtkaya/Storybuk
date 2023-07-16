import React from 'react';
import LottieView from 'lottie-react-native';

function Loading() {
  return <LottieView source={require('../../assets/loading1.json')} autoPlay />;
}

export default Loading;
