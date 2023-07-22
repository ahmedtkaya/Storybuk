import React, {useState, useEffect} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import styles from '../components/Styling/CategoryItemsStyle';
import {CategoryCard, Loading, Error, axios} from '../src/Libraries/Library';

import {
  FingerModal,
  checkFirstTime,
} from '../components/Modals/FingerAnimation';
import {useCategoryState} from '../hooks/useState/useStates';

const CategoryItems = ({route, navigation}) => {
  const {
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
    modalVisible,
    setModalVisible,
  } = useCategoryState();
  const {slug} = route.params;

  const GET_URL = 'http://192.168.1.85:3000';

  const fetchData = async () => {
    try {
      const {data: getData} = await axios.get(`${GET_URL}/${slug}`);
      //console.log(getData);
      setData(getData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const FirstTime = async () => {
      const result = await checkFirstTime();
      setModalVisible(result);
    };
    FirstTime();
  }, []);

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleDetailSelect = slug => {
    navigation.navigate('Detail', {slug});
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const renderCategories = ({item}) => {
    return (
      <CategoryCard
        category={item}
        onSelect={() => handleDetailSelect(item.slug)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flatlistcontainer}>
        <FingerModal visible={modalVisible} onClose={closeModal} />

        <FlatList data={data.stories} renderItem={renderCategories} />
      </View>
    </SafeAreaView>
  );
};

export default CategoryItems;
