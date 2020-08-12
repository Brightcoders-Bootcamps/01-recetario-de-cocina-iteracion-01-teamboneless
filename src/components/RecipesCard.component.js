import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {styles} from '../utils/styles';

const recipesCard = (props) => {
  const {
    data: {image, name},
    containerStyle,
    imageStyle,
    textStyle,
  } = props;

  return (
    <View style={[containerStyle]}>
      <TouchableOpacity
        style={[{width: 135}, containerStyle]}
        onPress={() => {
          console.log(props.data, 'bobi');
        }}>
        <Image style={[styles.recipeImage, imageStyle]} source={image} />
        <Text style={[styles.title, textStyle]}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default recipesCard;
