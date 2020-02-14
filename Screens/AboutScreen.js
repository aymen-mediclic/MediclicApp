import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native'
import { createDrawerNavigator } from 'react-navigation-drawer'
//import Header from '../Components/Header'
class About extends React.Component {
  render(){
    return (
      <View style={styles.container}>
       
       <Text style={styles.text}> à Propos </Text>
      </View>
      
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  text : {
    /*alignItems: 'center',
    justifyContent: 'center',*/
    backgroundColor: '#ecf0f1',
  }
 
});
export default About 