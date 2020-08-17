import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {styles} from '../utils/styles';
import RecipesCard from './RecipesCard.component';

const ListRecipe = (props) => {
  const resizeContainer =
    props.type == 'recent'
      ? {
          width: 'auto',
          height: 'auto',
          marginRight: 10,
        }
      : {};
  const resizeImage =
    props.type == 'recent'
      ? {
          width: 175,
          height: 205,
        }
      : {};
  const resizeText =
    props.type == 'recent'
      ? {
          fontSize: 25,
        }
      : {};

  const isEmpy = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'white'}}>There isn't {props.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.containerRecipe}>
      <Text style={styles.divider}>{props.title}</Text>
      <FlatList
        horizontal={true}
        data={props.recipes}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => (
          <RecipesCard
            selected={props.selected}
            data={item}
            containerStyle={resizeContainer}
            textStyle={resizeText}
            imageStyle={resizeImage}
          />
        )}
        ListEmptyComponent={isEmpy}
      />
    </SafeAreaView>
  );
};

export default ListRecipe;

const stylesTest = {
  testing: {
    height: 500,
    width: 500,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'red',
  },
  testImage: {
    width: 120,
    height: 125,
  },
};
