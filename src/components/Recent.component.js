import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';
import {styles} from '../utils/styles';
import {recipesRecent} from '../data/recipesRecent';
import RecentCard from './RecentCard.component';

const Recent = () => {
  const isEmptyRecent = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderStyle: 'solid', borderColor: 'red'}}>
        <Text style={styles.title}>There isn't recent recipes</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.containerRecipe,styles.containerRecent]}>
      <Text style={styles.divider}>RECENT</Text>
      <FlatList
        horizontal={true}
        keyExtractor={(item) => item.name}
        data={recipesRecent}
        ListEmptyComponent={isEmptyRecent()}
        renderItem={({item}) => <RecentCard data={item} />}
      />
    </SafeAreaView>
  );
};

export default Recent;
