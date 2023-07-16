import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import styles from '../Styling/MainPageCardStyle';

const MainPageCards = ({categories, onSelect}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onSelect}>
      <Text style={styles.title}>{categories.name}</Text>
    </TouchableOpacity>
  );
};

export default MainPageCards;
