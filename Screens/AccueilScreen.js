import React from 'react';
import { View, StyleSheet, ActivityIndicator, ImageBackground, Text, ScrollView } from 'react-native'
import * as Font from 'expo-font';
import Search from '../Components/Search'
import { Footer, FooterTab, Content, Container } from 'native-base';

class AccueilScreen extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} >
        
        <ImageBackground source={require('../assets/bgd1.jpg')} style={styles.image}>
          <Search />
          
        <Footer >
          <FooterTab style={{backgroundColor:'white'}}>
            <Text>Rejoignez-nous</Text>
            <Text>Rejoignez-nous</Text>
            <Text>Rejoignez-nous</Text>
          </FooterTab>
        </Footer>
        
        </ImageBackground>
        
        

      </ScrollView>
      
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex:1,
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
