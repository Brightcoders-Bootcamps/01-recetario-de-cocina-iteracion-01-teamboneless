import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  FlatList,
} from 'react-native';
import IconsEvilIcon from 'react-native-vector-icons/EvilIcons';
import Ingredients from './Ingredients.component';
import {Colors} from '../utils/Colors';

const modal = (props) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={props.visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ImageBackground
              source={props.image}
              style={{
                flex: 0.7,
              }}
              imageStyle={{opacity: 0.6}}>
              <View
                style={{
                  flex: 0.1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 25,
                  marginTop: 15,
                }}>
                <View style={{flex: 1, marginVertical: 10}}>
                  <IconsEvilIcon
                    onPress={props.close}
                    name="close"
                    size={40}
                    color="white"
                    fontWeight={2}
                  />
                </View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <IconsEvilIcon
                    name="share-apple"
                    size={40}
                    color="white"
                    style={{marginRight: 15}}
                  />
                  <IconsEvilIcon name="heart" size={40} color="white" />
                </View>
              </View>
              <View style={{top: '65%', left: '5%'}}>
                <Text style={styles.sectionName}>{props.section}</Text>
                <Text style={styles.recipeName}>{props.name}</Text>
              </View>
            </ImageBackground>
            <View style={styles.containerIngredients}>
              <Text style={styles.servingsRecipe}>
                Ingredients for {props.servings}
              </Text>
              <Ingredients />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

/**
 * <FlatList
                data={props.recipes.ingredients}
                keyExtractor={(item) => item.name}
                renderItem={({item}) => <Ingredients data={item} />}
              />
 */
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    flex: 1,
    backgroundColor: Colors.backgroundScreen,
    shadowColor: '#000',
  },
  recipeName: {
    color: Colors.white,
    fontSize: 30,
    opacity: 1,
    fontWeight: '100',
  },
  sectionName: {
    color: Colors.white,
    fontSize: 15,
  },
  servingsRecipe: {
    color: Colors.white,
  },
  containerIngredients: {
    flex: 0.5,
    margin: 15,
  },
  Ingredients: {
    color: Colors.white,
    fontSize: 15,
    paddingBottom: 15,
    borderBottomWidth: 1.5,
    borderBottomColor: '#323232',
  },
});

export default modal;
