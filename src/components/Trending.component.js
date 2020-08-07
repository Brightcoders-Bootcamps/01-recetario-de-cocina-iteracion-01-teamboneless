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
import TrendingCard from './TrendingCard.component';

const trending = () => {
  const isEmptyTrending = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderStyle: 'solid', borderColor: 'red'}}>
        <Text style={styles.title}>There isn't trending recipes</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.containerRecipe}>
      <Text style={styles.divider}>TRENDING</Text>
      <FlatList
        horizontal={true}
        data={recipesTrending}
        keyExtractor={(item) => item.name}
        ListEmptyComponent={isEmptyTrending()}
        renderItem={({item}) => <TrendingCard data={item} />}
      />
    </SafeAreaView>
  );
};

export default trending;
