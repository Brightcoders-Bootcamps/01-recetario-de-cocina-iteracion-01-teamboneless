import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Modal,
  ImageBackground,
} from 'react-native';
import {styles} from '../utils/styles';
import IconsEvilIcon from 'react-native-vector-icons/EvilIcons';
// import Ingredients from './Ingredients.component';
import {Colors} from '../utils/Colors';

const recipesCard = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    data: {image, name, section},
    containerStyle,
    imageStyle,
    textStyle,
  } = props;

  return (
    <View style={[containerStyle]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={stylesModal.centeredView}>
          <View style={stylesModal.modalView}>
            <ImageBackground
              source={image}
              style={{
                flex: 0.6,
                width: '100%',
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: 'black',
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
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
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
            </ImageBackground>
            <View style={{top: '65%', left: '5%'}}>
              <Text style={stylesModal.sectionName}>{section}</Text>
              <Text style={stylesModal.recipeName}>{name}</Text>
            </View>
            {/* <Text style={stylesModal.modalText}>{name}</Text> */}
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[{width: 135}, containerStyle]}
        onPress={() => {
          setModalVisible(true);
          // props.selected(props.data);
          // console.log(props.data);
        }}>
        <Image style={[styles.recipeImage, imageStyle]} source={image} />
        <Text style={[styles.title, textStyle]}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default recipesCard;

const stylesModal = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    flex: 1,
    width: '100%',
    backgroundColor: 'gray',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
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
});
