import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/components/HomeScreen.component';
import Recipe from './src/components/Recipe.component';
import CardRecipe from './src/components/CardRecipe.component';
import Route from './src/routes/route';
import {styles} from './src/utils/styles';

const App = () => {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
};


export default App;
