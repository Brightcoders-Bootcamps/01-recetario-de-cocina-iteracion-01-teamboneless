import React from 'react';
import {SafeAreaView, View, Text, Modal, FlatList} from 'react-native';
import {styles} from '../utils/styles';
import ModalRecipe from './ModalRecipe.component';
import RecipesCard from './RecipesCard.component';

const trending = (props) => {
  return (
    <SafeAreaView style={styles.containerRecipe}>
      <Text style={styles.divider}>{props.title}</Text>
      <FlatList
        horizontal={true}
        data={props.recipes}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => (
          <RecipesCard data={item} testStyle={stylesTest} />
        )}
      />
    </SafeAreaView>
  );
};

export default trending;

const stylesTest = {
  testing: {
    height: 20,
    width: 20,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'red',
  },
};
