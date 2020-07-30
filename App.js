import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, Button, StyleSheet, Text, TextInput} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

function ButtonSearch(props) {
  return <Icon name="search" backgroundColor="white" size={10} />;
}

function ButtonMic(props) {
  return <Icon name="microphone" backgroundColor="white" size={10} />;
}
const InputSearch = () => {
  const [value, onChangeText] = useState('What do you want to eat?');
  return (
    <SafeAreaView style={styles.areaInput}>
      <ButtonSearch />

      <TextInput
        style={styles.whiteText}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <ButtonMic />
      <Text
        style={{
          color: 'white',
        }}>
        {value}
      </Text>
    </SafeAreaView>
  );
};

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <InputSearch />
      <Recipe />
      <Button
        title="Go to the card"
        onPress={() => navigation.navigate('Card')}
      />
      <Button
        title="Go to the recipe"
        onPress={() => navigation.navigate('Recipe')}
      />
      <Text style={styles.subtitle}>Home Screen</Text>
    </SafeAreaView>
  );
}

function Recipe({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>First recipe</Text>
      <Text style={styles.subtitle}>I am a description</Text>
    </SafeAreaView>
  );
}

function Card({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.divider}>Trending</Text>
      <Text style={styles.title}>First card</Text>
      <Text style={styles.subtitle}>I am a description</Text>
    </SafeAreaView>
  );
}
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen
          name="Recipe"
          component={Recipe}
          options={{title: 'Recipes'}}></Stack.Screen>
        <Stack.Screen name="Card" component={Card}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  subtitle: {
    fontSize: 12,
    color: 'white',
  },
  divider: {
    width: 200,
    alignSelf: 'flex-start',
    color: 'aquamarine',
  },
  whiteText: {
    color: 'white',
    fontSize: 20,
  },
  areaInput: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
