import MainPageCards from '../../components/Cards/MainPageCards';
import CategoryCard from '../../components/Cards/CategoryItemsCard';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import SplashScreen from '../../components/Splash/SplashScreen';
import axios from 'axios';
import LottieView from 'lottie-react-native';
import useStates from '../../hooks/useState/useStates';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';
import storyWords from '../../assets/JSON/words.json';
import TranslateModal from '../../components/Modals/TranslateModal';
export {
  MainPageCards,
  CategoryCard,
  Loading,
  Error,
  SplashScreen,
  axios,
  LottieView,
  useStates,
  Modal,
  AsyncStorage,
  storyWords,
  TranslateModal,
};
