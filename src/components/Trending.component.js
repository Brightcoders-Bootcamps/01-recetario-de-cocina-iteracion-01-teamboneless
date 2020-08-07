import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  Modal,
  FlatList,
} from 'react-native';
import {styles} from '../utils/styles';
import ModalRecipe from './ModalRecipe.component';
import {recipesTrending} from '../data/recipesTrending';
import TrendingCard from './TrendingCard.component';

const trending = () => {
  return (
    <SafeAreaView style={styles.containerRecipe}>
      <Text style={styles.divider}>TRENDING</Text>
      <FlatList
        horizontal={true}
        data={recipesTrending}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => <TrendingCard data={item} />}
      />
    </SafeAreaView>
  );
};

export default trending;
