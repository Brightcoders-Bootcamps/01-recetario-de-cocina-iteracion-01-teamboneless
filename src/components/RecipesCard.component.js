import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {styles} from '../utils/styles';

const recipiesCard = (props) => {
  return (
    <View style={styles.cardMargin}>
      <TouchableOpacity style={{width: 135}}>
        <Image style={styles.recipeImage} source={props.data.image} />
        <Text style={styles.title}>{props.data.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default recipiesCard;
