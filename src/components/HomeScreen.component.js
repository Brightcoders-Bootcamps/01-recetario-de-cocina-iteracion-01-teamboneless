import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import InputSearch from './InputSearch.component';
import Recipe from './Recipe.component';
import {styles} from '../utils/styles';
import ModalRecipe from './ModalRecipe.component';

function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  show = () => setModalVisible(true);
  hide = () => setModalVisible(false);

  return (
    <SafeAreaView style={styles.container}>
      <InputSearch />
      <Recipe show={show} />
      <ModalRecipe visible={modalVisible} hide={hide} show={show} />
    </SafeAreaView>
  );
}

export default HomeScreen;
