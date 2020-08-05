import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  Modal,
} from 'react-native';
import {styles} from '../utils/styles';
import Recent from './Recent.component';
import ModalRecipe from './ModalRecipe.component';

const Recipe = ({show}) => {
  return (
    <SafeAreaView style={styles.containerRecipe}>
      <Text style={styles.divider}>TRENDING</Text>
      <ScrollView horizontal={true}>
        <SafeAreaView style={styles.cardMargin}>
          <TouchableOpacity onPress={show}>
            <Image
              style={styles.recipeImage}
              source={require('../assets/lasana.jpg')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Lasagna</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.cardMargin}>
          <TouchableOpacity>
            <Image
              style={styles.recipeImage}
              source={require('../assets/pizza.jpg')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Lasagna</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.cardMargin}>
          <TouchableOpacity>
            <Image
              style={styles.recipeImage}
              source={require('../assets/lasana.jpg')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Lasagna</Text>
        </SafeAreaView>
        <SafeAreaView>
          <TouchableOpacity>
            <Image
              style={styles.recipeImage}
              source={require('../assets/lasana.jpg')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Lasagna</Text>
        </SafeAreaView>
        <SafeAreaView>
          <TouchableOpacity>
            <Image
              style={styles.recipeImage}
              source={require('../assets/lasana.jpg')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Lasagna</Text>
        </SafeAreaView>
      </ScrollView>
      <Recent />
    </SafeAreaView>
  );
};

export default Recipe;
