import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {styles} from '../utils/styles';

const recentCard = (props) => {
  return (
    <View style={{marginHorizontal: 10}}>
      <TouchableOpacity>
        <Image
          style={styles.recipeImageRecent}
          source={props.data.image}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        />
        <Text style={styles.title}>{props.data.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default recentCard;
