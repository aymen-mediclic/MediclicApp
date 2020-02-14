import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Search from '../Components/Search'
import Header from '../Components/Header'
class AccueilScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
          <Header/>
          <Search/>
        
      </View>
    );
  }

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  
});
export default AccueilScreen