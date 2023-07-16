import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';

import {axios, storyWords, TranslateModal} from '../src/Libraries/Library';

import styles from '../components/Styling/DetailPageStyle';
import {
  DetailModal,
  checkDetailFirstTime,
} from '../components/Modals/DetailModal';

const Detail = ({route}) => {
  const [data, setData] = useState([]);
  const [storyTR, setStoryTR] = useState();
  const [storyEN, setStoryEN] = useState();
  const [selectedLanguage, setSelectedLanguage] = useState('EN'); //seçilen standart dil EN
  const [modalVisible, setModalVisible] = useState(false); //test için true yap
  const [tramodalVisible, setTraModalVisible] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null);
  const [translatedWord, setTranslatedWord] = useState('');
  const story = selectedLanguage === 'EN' ? storyEN : storyTR;
  const {slug} = route.params;

  const GET_URL = 'http://192.168.1.85:3000/story'; //android simulatorde id yazıyoruz, ios için localhost yeterliydi

  const fetchData = async () => {
    const {data: getData} = await axios.get(`${GET_URL}/${slug}`);
    //console.log(getData);
    setData(getData);
    setStoryEN(getData.storyEN);
    setStoryTR(getData.storyTR);
  };

  useEffect(() => {
    const detailFirstTime = async () => {
      const result = await checkDetailFirstTime();
      setModalVisible(result);
    };
    detailFirstTime();
    fetchData();
  }, []);

  const closeModal = () => {
    setModalVisible(false);
    setTraModalVisible(false);
  };

  const getTurkishWord = (englishWord, story, storyEN, storyTR) => {
    const words = storyEN.split(' ');
    const index = words.findIndex(w => w === englishWord);
    if (index >= 0) {
      // İlgili kelimenin Türkçe karşılığını storyWords JSON dosyasından alıyoruz.
      const turkishWord = storyWords[englishWord];
      return turkishWord;
    } else {
      return null;
    }
  };

  // BUNU KULLANIYORUZ
  const handleWordClick = word => {
    setSelectedWord(word);
    const story = selectedLanguage === 'EN' ? storyEN : storyTR;
    const words = story.split(' ');
    const index = words.findIndex(w => w === word);
    if (index >= 0) {
      const translatedWord = getTurkishWord(word, story, storyEN, storyTR);
      setTranslatedWord(translatedWord);
      setTraModalVisible(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <DetailModal visible={modalVisible} onClose={closeModal} />

      <TranslateModal
        visiblemodal={tramodalVisible}
        onClose={closeModal}
        selectword={selectedWord}
        translateword={translatedWord}
      />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setSelectedLanguage('TR')}>
          <Text style={styles.buttontext}>TR</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 150, height: 60, borderRadius: 30}}
            source={{uri: data.image}}
          />
          <Text style={styles.title}>{data.name}</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setSelectedLanguage('EN')}>
          <Text style={styles.buttontext}>EN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.storycontainer}>
        {storyTR && storyEN && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.story}>
              {story.split(' ').map((word, index) => (
                <Text
                  key={index}
                  onPress={() => handleWordClick(word)}
                  style={styles.storyWord}>
                  {word}{' '}
                </Text>
              ))}
            </Text>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Detail;
