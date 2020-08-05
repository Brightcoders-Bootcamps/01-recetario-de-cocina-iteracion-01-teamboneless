import {StyleSheet} from 'react-native'; 
import {Colors} from './themes';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    backgroundColor: Colors.backgroundScreen,
    flex: 1,
    color: Colors.white,
  },

  containerHome: {
    borderWidth: 2,
    backgroundColor: Colors.backgroundScreen,
    flex: 1,
  },
  containerRecipe: {
    height: 'auto',
    padding: 10,
    backgroundColor: Colors.backgroundScreen,
  },
  containerCardRecipe: {},
    
  title: {
    fontSize: 20,
    color: Colors.white,
  },

  recipeImageRecent: {
    width: 130,
    height: 150,
    borderRadius: 5,
  },
  divider: {
    alignSelf: 'flex-start',
    fontSize: 30,
    color: Colors.title,
    marginBottom: 15,
  },
    
  whiteText: {
    justifyContent: 'flex-start',
    color: Colors.white,
    fontSize: 15,
  },
  buttonRecipe: {
    backgroundColor: 'black',
    justifyContent: 'center',
    height: 25,
  },
    
  recipeImage: {
    resizeMode: 'cover',
    height: 110,
    width: 120,
    borderRadius: 5,

  },
  areaInput: {
    width: '90%',
    backgroundColor: Colors.backgroundSearch,
    marginVertical: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardMargin: {
    marginHorizontal: 5,
  }
});
