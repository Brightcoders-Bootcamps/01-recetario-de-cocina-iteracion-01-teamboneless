import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ingredients = (props) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.ingredientText}>Spicy Peperoni</Text>
      <Text style={styles.ingredientText}>100 gr.</Text>
    </View>
  );
};

export default ingredients;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottomWidth: 0.3,
    borderStyle: 'solid',
    borderColor: '#B2B2B2',
  },
  ingredientText: {
    color: 'white',
    fontSize: 20,
  },
});
