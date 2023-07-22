import {useState} from 'react';

export const useDetailState = () => {
  const [data, setData] = useState([]);
  const [storyTR, setStoryTR] = useState();
  const [storyEN, setStoryEN] = useState();
  const [selectedLanguage, setSelectedLanguage] = useState('EN'); //seçilen standart dil EN
  const [modalVisible, setModalVisible] = useState(false); //test için true yap
  const [tramodalVisible, setTraModalVisible] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null);
  const [translatedWord, setTranslatedWord] = useState('');

  return {
    data,
    setData,
    storyTR,
    setStoryTR,
    storyEN,
    setStoryEN,
    selectedLanguage,
    setSelectedLanguage,
    modalVisible,
    setModalVisible,
    tramodalVisible,
    setTraModalVisible,
    selectedWord,
    setSelectedWord,
    translatedWord,
    setTranslatedWord,
  };
};

export const useMainState = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); //test için true yap

  return {
    data,
    setData,
    error,
    setError,
    isLoading,
    setIsLoading,
    loading,
    setLoading,
    modalVisible,
    setModalVisible,
  };
};

export const useCategoryState = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false); //test için true yap

  return {
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
    modalVisible,
    setModalVisible,
  };
};
