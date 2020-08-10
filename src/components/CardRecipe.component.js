import React from 'react-native';
import {SafeAreaView, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardRecipe = () => {
  function IconBack() {
    return (
      <Icon
        onPress={() => navigation.goBack()}
        name="angle-left"
        size={30}
        color="white"
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={{flex: 1, width: '100%', borderWidth: 2}}>
        <IconBack style={{flex: 1, alignSelf: 'flex-end'}} />
        <Image
          style={styles.recipeImage}
          source={require('../assets/lasana.jpg')}
        />
        <Text style={styles.title}>Lasagna</Text>
        <Text style={styles.subtitle}>:]</Text>
        <SafeAreaView style={{flex: 1, borderWidth: 2}}></SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default CardRecipe;
