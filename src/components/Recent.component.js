import React from 'react';
import {SafeAreaView, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../utils/styles';

const Recent = () => {
  return (
    <SafeAreaView style={{marginTop: 30}}>
      <Text style={styles.divider}>RECENT</Text>
      <TouchableOpacity>
        <Image
          style={styles.recipeImageRecent}
          source={require('../assets/lasana.jpg')}
        onpress={() => {
                setModalVisible(!modalVisible);
              }}/>
      </TouchableOpacity>
      <Text style={styles.title}>Lasagna</Text>
    </SafeAreaView>
  );
};

export default Recent;