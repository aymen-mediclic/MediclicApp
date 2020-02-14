import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native'
import { createDrawerNavigator } from 'react-navigation-drawer'
class Accueil extends React.Component {
  render(){
    return (
      <View style={styles.container}>
       <Text> Home </Text>
        
      
    </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
 
});
export default Accueil 