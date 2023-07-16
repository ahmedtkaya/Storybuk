import React, {useEffect, useState} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import styles from '../components/Styling/MainPageStyle';

import {
  MainPageCards,
  Loading,
  Error,
  SplashScreen,
  axios,
} from '../src/Libraries/Library';

import {
  WelcomeModal,
  checkIfFirstTime,
} from '../components/Modals/WelcomeModal';

const MainPage = ({navigation}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); //test için true yap

  const GET_URL = 'http://192.168.1.85:3000';

  const fetchData = async () => {
    try {
      const {data: getData} = await axios.get(GET_URL);
      //console.log(getData);
      setData(getData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  /*
  const fetchData = async () => {
    try {
      const {data: getData} = await axios.get(GET_URL);
      console.log(getData.data);
      setData(getData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };*/

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    const isFirstTime = async () => {
      const result = await checkIfFirstTime();
      setModalVisible(result);
    };
    isFirstTime();
    fetchData();
  }, []);

  const closeModal = () => {
    setModalVisible(false);
  };

  const Splashscreen = () => {
    return <SplashScreen />;
  };

  const handleCategorySelect = slug => {
    navigation.navigate('CategoryItems', {slug});
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const renderItem = ({item}) => {
    return (
      <MainPageCards
        categories={item}
        onSelect={() => handleCategorySelect(item.slug)}
      />
    );
  };

  return (
    <>
      {isLoading ? (
        <Splashscreen />
      ) : (
        <SafeAreaView style={styles.container}>
          <WelcomeModal visible={modalVisible} onClose={closeModal} />
          <View style={styles.flatlistcontainer}>
            <FlatList
              data={data}
              renderItem={renderItem}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default MainPage;
