import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  Button,
  StyleSheet,
  Text,
  TextInput,
  Image,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

function IconSearch() {
  return <Icon name="search" size={15} color="white" />;
}

function IconMic() {
  return <Icon name="microphone" size={15} color="white" />;
}

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
      <IconSearch />
      <TextInput
        style={styles.whiteText}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <IconMic />
    </SafeAreaView>
  );
};

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.containerHome}>
      <InputSearch style={{borderWidth: 2}} />
      <Recipe style={{borderWidth: 10, borderColor: 'blue'}} />
      <Icon.Button
        style={styles.buttonRecipe}
        name="heart"
        size={20}
        color="whitesmoke"
        onPress={() => navigation.navigate('CardRecipe')}>
        See recipe
      </Icon.Button>
    </SafeAreaView>
  );
}

function Divider() {
  return <Text style={styles.divider}>TRENDING </Text>;
}

const Recipe = ({navigation}) => {
  return (
    <SafeAreaView style={styles.containerRecipe}>
      <Divider />
      <Image
        style={styles.recipeImage}
        source={require('./src/assets/lasana.jpg')}
      />
      <Text style={styles.title}>First recipe</Text>
      <Text style={styles.subtitle}>I am a description</Text>
    </SafeAreaView>
  );
};

const CardRecipe = ({navigation}) => {
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
        <Text style={styles.divider}>Trending</Text>
        <Text style={styles.title}>First card</Text>
        <Text style={styles.subtitle}>I am a description</Text>
        <SafeAreaView style={{flex: 1, borderWidth: 2}}></SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
};
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator headerMode="false">
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen
          name="Recipe"
          component={Recipe}
          options={{title: 'Recipes'}}></Stack.Screen>
        <Stack.Screen name="CardRecipe" component={CardRecipe}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    backgroundColor: '#282828',
    flex: 1,
    color: 'white',
  },

  containerHome: {
    borderWidth: 2,
    backgroundColor: '#282828',
    flex: 1,
  },

  containerRecipe: {
    height: 'auto',
    borderWidth: 2,
    backgroundColor: '#282828',
    borderColor: 'red',
  },

  containerCardRecipe: {},

  title: {
    fontSize: 20,
    color: 'white',
  },

  subtitle: {
    fontSize: 12,
    color: 'white',
  },

  divider: {
    alignSelf: 'flex-start',
    color: 'coral',
    fontSize: 30,
    color: '#df1b75',
  },

  whiteText: {
    justifyContent: 'flex-start',
    color: 'white',
    fontSize: 15,
  },

  buttonRecipe: {
    backgroundColor: 'black',
    justifyContent: 'center',
    height: 25,
  },

  recipeImage: {
    resizeMode: 'cover',
    height: 125,
    width: 125,
    borderRadius: 10,
  },

  areaInput: {
    width: '90%',
    backgroundColor: '#343435',
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default App;
