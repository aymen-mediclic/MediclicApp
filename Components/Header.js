import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native'
import { createDrawerNavigator } from 'react-navigation-drawer'
class Header extends React.Component {
  render(){
    return (
        <View style={styles.header_container}>
             <Text style={styles.text}>MediClic</Text>  
        </View>
    );
  }

}
const styles = StyleSheet.create({
  header_container: {
        alignItems:'center',
        backgroundColor:'#3498db',
        marginTop:30,
    },
  text:{
    color:'#ecf0f1',
    fontSize: 32,
  }
});
export default Header 