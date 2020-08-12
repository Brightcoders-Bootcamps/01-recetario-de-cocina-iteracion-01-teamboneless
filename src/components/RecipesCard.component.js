import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {styles} from '../utils/styles';

const recipiesCard = (props) => {
  const {
    data: {image, name},
    testStyle: {stylesTest},
  } = props;

  return (
    <View style={{stylesTest}}>
      <TouchableOpacity style={{width: 135}}>
        <Image style={styles.recipeImage} source={image} />
        <Text style={styles.title}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default recipiesCard;
