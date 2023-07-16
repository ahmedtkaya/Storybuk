import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Modal} from '../../src/Libraries/Library';
import styles from '../Styling/TranslateModalStyle';

const TranslateModal = ({selectword, translateword, visiblemodal, onClose}) => {
  return (
    <Modal
      visible={visiblemodal}
      onPress={onClose}
      style={{alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            //backgroundColor: 'yellow',
          }}>
          <Image
            style={styles.logo}
            source={require('../../assets/image/logo_transparent.png')}
          />
        </View>

        <View style={styles.titlecontainer}>
          <Text style={styles.title}>English</Text>
          <Text style={styles.title}>-</Text>
          <Text style={styles.title}>Türkçe</Text>
        </View>

        <View style={styles.wordscontainer}>
          <View
            style={{
              alignItems: 'center',
              //backgroundColor: 'yellow',
              width: '50%',
            }}>
            <Text style={styles.words}>{selectword}</Text>
          </View>

          <Text style={styles.words}>-</Text>

          <View
            style={{
              alignItems: 'center',
              //backgroundColor: 'blue',
              width: '50%',
            }}>
            <Text style={styles.words}>{translateword}</Text>
          </View>
        </View>

        <TouchableOpacity onPress={onClose} style={styles.button}>
          <Text style={styles.buttontext}>Kapat</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default TranslateModal;
