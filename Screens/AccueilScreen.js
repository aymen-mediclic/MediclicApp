import React from 'react';
import {View,StyleSheet,ActivityIndicator, ImageBackground} from 'react-native'
import * as Font from 'expo-font';
import Search from '../Components/Search'
class AccueilScreen extends React.Component {
    render(){
    return (
      <View style={styles.container}>
          <ImageBackground source={require('../assets/bgd1.jpg')} style={styles.image}>
          <Search />
          </ImageBackground>
      </View>
    );
  }

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    image: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: "center",
      alignItems: "center",
    },
  
});
export default AccueilScreen
