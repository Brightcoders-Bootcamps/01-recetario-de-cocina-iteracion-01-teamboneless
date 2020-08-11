import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from '../utils/styles';
import ModalRecipe from './ModalRecipe.component';
import InputSearch from './InputSearch.component';
import ListRecipe from './ListRecipe.component';

function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  show = () => setModalVisible(true);
  hide = () => setModalVisible(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <InputSearch />
      </View>
      <ListRecipe show={show} />
      <ModalRecipe visible={modalVisible} hide={hide} show={show} />
    </SafeAreaView>
  );
}

export default HomeScreen;
