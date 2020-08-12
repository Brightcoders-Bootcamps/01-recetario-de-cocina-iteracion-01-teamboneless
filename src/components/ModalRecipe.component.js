import React from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  ScrollView,
} from 'react-native';
import IconsEvilIcon from 'react-native-vector-icons/EvilIcons';
import {Colors} from '../utils/Colors';
import {recipes} from '../data/recipes';

const modal = (props) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={props.visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ImageBackground
              source={require('./../assets/pizza.jpg')}
              style={{flex: 0.7}}
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
                    onPress={!props.visible}
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
                <Text style={styles.sectionName}>TRENDING</Text>
                <Text style={styles.recipeName}>Pizza</Text>
              </View>
            </ImageBackground>
            <View style={{margin: 15}}>
              <View style={{borderWidth: 2}}>
                <Text style={styles.servingsRecipe}>
                  Ingredients for XX servings
                </Text>
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', margin: 15}}>
              <View style={{flex: 8}}>
                <Text style={styles.Ingredients}>
                  {recipes[0].ingredients[0].name}
                </Text>
              </View>
              <View style={{flex: 4}}>
                <Text style={styles.Ingredients}>
                  {recipes[0].ingredients[0].quantity}
                </Text>
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', margin: 15}}>
              <View style={{flex: 8}}>
                <Text style={styles.Ingredients}>puff pastry</Text>
              </View>
              <View style={{flex: 4}}>
                <Text style={styles.Ingredients}>1 sheet</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

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
  Ingredients: {
    color: Colors.white,
    fontSize: 15,
    paddingBottom: 15,
    borderBottomWidth: 1.5,
    borderBottomColor: '#323232',
  },
});

export default modal;
