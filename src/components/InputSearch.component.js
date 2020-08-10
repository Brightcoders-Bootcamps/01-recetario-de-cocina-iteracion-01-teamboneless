import React, {useState} from 'react';
import {SafeAreaView, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function IconSearch() {
  return <Icon name="search" size={15} color="white" />;
}

function IconMic() {
  return <Icon name="microphone" size={15} color="white" />;
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
const styles = StyleSheet.create({
  whiteText: {
    justifyContent: 'flex-start',
    color: 'white',
    fontSize: 15,
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

export default InputSearch;
