import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import styles from '../Styling/CategoryItemsStyle';

const CategoryCard = ({category, onSelect}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onSelect}>
      <View style={styles.imagecontainer}>
        <Image style={styles.image} source={{uri: category.image}} />
      </View>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>{category.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
