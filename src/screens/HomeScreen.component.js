import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from '../utils/styles';
import ModalRecipe from '../components/ModalRecipe.component';
import InputSearch from '../components/InputSearch.component';
import ListRecipe from '../components/ListRecipe.component';
import {recipes} from '../data/recipes';

function HomeScreen() {
  const trendingValues = recipes.filter((value) => value.trending === true);
  const recentValues = recipes.filter((value) => value.recent === true);

  const [modalVisible, setModalVisible] = useState(false);
  // show = () => setModalVisible(true);
  // hide = () => setModalVisible(false);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <InputSearch />
      </View>
      <ListRecipe title="TRENDING" recipes={trendingValues} type="trending" />
      <ListRecipe title="RECENT" recipes={recentValues} type="recent" />
      <ModalRecipe visible={modalVisible} />
    </SafeAreaView>
  );
}

export default HomeScreen;
