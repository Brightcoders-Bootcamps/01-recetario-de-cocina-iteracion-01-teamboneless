import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Modal,
  FlatList,
} from 'react-native';
import {styles} from '../utils/styles';
import ModalRecipe from './ModalRecipe.component';
import {recipesTrending} from '../data/recipesTrending';
import RecipesCard from './RecipesCard.component';

const trending = () => {
  return (
    <SafeAreaView style={styles.containerRecipe}>
      <Text style={styles.divider}>TRENDING</Text>
      <FlatList
        horizontal={true}
        data={recipesTrending}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => <RecipesCard data={item} />}
      />
    </SafeAreaView>
  );
};

export default trending;
