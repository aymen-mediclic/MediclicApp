import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native'
import { createDrawerNavigator } from 'react-navigation-drawer'
class Connection extends React.Component {
  render(){
    return (
      <View style={styles.container}>
       <Text> Connection </Text>
        
      
    </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  }
 
});
export default Connection 