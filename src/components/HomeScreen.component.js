import React from 'react';
import {SafeAreaView} from 'react-native';
import InputSearch from './InputSearch.component';
import Recipe from './Recipe.component';
import {styles} from '../utils/styles';

function HomeScreen() {
    return (
      <SafeAreaView style={styles.container}>
        <InputSearch />
            <Recipe />
      </SafeAreaView>
    );
  }

  export default HomeScreen;