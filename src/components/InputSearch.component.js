import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';
import {Colors} from '../utils/Colors';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const InputSearch = () => {
  const [value, onChangeText] = useState('What do you want to eat?');
  return (
    <View style={styles.containerSearch}>
      <EvilIcons name="search" size={25} color="white" />
      <TextInput
        style={styles.inputSearch}
        placeholderTextColor={Colors.white}
        placeholder="What do you want to eat?"
      />
      <FontAwesome name="microphone" size={20} color="white" fontWeight={'bold'} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerSearch: {
    marginVertical: 20,
    minHeight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: Colors.backgroundSearch,
    marginHorizontal: 25,
  },
  inputSearch: {
    width: 280,
    marginHorizontal: 5,
    color: Colors.white,
  },
});

export default InputSearch;
