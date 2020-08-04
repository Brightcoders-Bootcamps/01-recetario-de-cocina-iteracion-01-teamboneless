import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen.component';
import Recipe from '../components/Recipe.component';
import CardRecipe from '../components/CardRecipe.component';

const Stack = createStackNavigator();

const route = () => {
    return (
        <Stack.Navigator headerMode="false">
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen
          name="Recipe"
          component={Recipe}
          options={{title: 'Recipes'}}></Stack.Screen>
        <Stack.Screen name="CardRecipe" component={CardRecipe}></Stack.Screen>
      </Stack.Navigator>
    );
}

export default route;