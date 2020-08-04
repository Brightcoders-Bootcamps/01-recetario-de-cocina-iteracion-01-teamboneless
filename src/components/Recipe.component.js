import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, Image, Text} from 'react-native';
import {styles} from '../utils/styles';

const Recipe = () => {
    return (
      <SafeAreaView style={styles.containerRecipe}>
        <Text style={{color: 'black'}}>Trending</Text>
        <ScrollView horizontal={true}>
          <SafeAreaView>
            <TouchableOpacity>
              <Image
                style={styles.recipeImage}
                source={require('../assets/lasana.jpg')}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Lasagna</Text>
            <Text style={styles.subtitle}>I am a description</Text>
          </SafeAreaView>
          <SafeAreaView>
            <TouchableOpacity>
              <Image
                style={styles.recipeImage}
                source={require('../assets/pizza.jpg')}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Lasagna</Text>
            <Text style={styles.subtitle}>I am a description</Text>
          </SafeAreaView>
          <SafeAreaView>
            <TouchableOpacity>
              <Image
                style={styles.recipeImage}
                source={require('../assets/lasana.jpg')}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Lasagna</Text>
            <Text style={styles.subtitle}>I am a description</Text>
          </SafeAreaView>
          <SafeAreaView>
            <TouchableOpacity>
              <Image
                style={styles.recipeImage}
                source={require('../assets/lasana.jpg')}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Lasagna</Text>
            <Text style={styles.subtitle}>I am a description</Text>
          </SafeAreaView>
          <SafeAreaView>
            <TouchableOpacity>
              <Image
                style={styles.recipeImage}
                source={require('../assets/lasana.jpg')}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Lasagna</Text>
            <Text style={styles.subtitle}>I am a description</Text>
          </SafeAreaView>
        </ScrollView>
      </SafeAreaView>
    );
  };


  export default Recipe;