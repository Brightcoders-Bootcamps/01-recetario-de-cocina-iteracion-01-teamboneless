import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../utils/styles';
import ModalRecipe from './ModalRecipe.component';
import InputSearch from './InputSearch.component';
import Trending from './Trending.component';
import Recent from './Recent.component';

function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  show = () => setModalVisible(true);
  hide = () => setModalVisible(false);

  return (
    <SafeAreaView style={styles.container}>
      <InputSearch />
      <Trending show={show} />
      <Recent />
      <ModalRecipe visible={modalVisible} hide={hide} show={show} />
    </SafeAreaView>
  );
}

export default HomeScreen;
