import React, {useState, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from '../utils/styles';
// import ModalRecipe from '../components/ModalRecipe.component';
import InputSearch from '../components/InputSearch.component';
import ListRecipe from '../components/ListRecipe.component';
import {recipes} from '../data/recipes';

function HomeScreen() {
  const trendingValues = recipes.filter((value) => value.trending === true);
  const recentValues = recipes.filter((value) => value.recent === true);

  const trending = React.createContext(trendingValues);
  const recent = React.createContext(recentValues);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    if (selectedRecipe) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  }, [selectedRecipe]);

  // // show = () => setModalVisible(true);
  // // hide = () => setModalVisible(false);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <InputSearch />
      </View>
      <ListRecipe
        title="TRENDING"
        recipes={trendingValues}
        type="trending"
        selected={setSelectedRecipe}
      />
      <ListRecipe
        title="RECENT"
        recipes={recentValues}
        type="recent"
        selected={setSelectedRecipe}
      />
      {/* <ModalRecipe
        visible={modalVisible}
        close={closeModal}
        recipes={trendingValues}
      /> */}
    </SafeAreaView>
  );
}

export default HomeScreen;
