import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {styles} from '../utils/styles';

const trendingCard = (props) => {
  return (
    <View style={styles.cardMargin}>
      <TouchableOpacity>
        <Image style={styles.recipeImage} source={props.data.image} />
        <Text style={styles.title}>{props.data.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default trendingCard;
