import {StyleSheet} from 'react-native'; 
import {Colors} from './Colors';

export const styles = StyleSheet.create({
  //This styles are for he homeScreen
  container: {
    borderWidth: 2,
    backgroundColor: Colors.backgroundScreen,
    flex: 1,
    color: Colors.white,
  },

  //This styles are for the Trending container
  containerRecipe: {
    // height: 'auto',
    marginHorizontal: 5,
    marginTop: 20,
    backgroundColor: Colors.backgroundScreen,
  },
  containerRecent: {
    marginTop: 30,
  },
  //Text's styles for the recipes  
  title: {
    fontSize: 20,
    color: Colors.white,
  },

  recipeImageRecent: {
    width: 130,
    height: 150,
    borderRadius: 5,
  },
  // Title's styles (Trending and Recent)
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
    // resizeMode: 'cover',
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
    flex: 1,
    flexWrap: 'wrap',
    marginHorizontal: 10,
    marginBottom: 5,
    // paddingHorizontal: 10,
  }
});
