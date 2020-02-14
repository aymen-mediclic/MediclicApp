import React from 'react';
import {View,Text,Button,StyleSheet,TextInput} from 'react-native'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Header from '../Components/Header'
class Connection extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Header/>
        <Text style={styles.text}> Se Connecter! </Text>
        <TextInput style={styles.text_input}  placeholder='Nom de compte' />
        <TextInput style={styles.text_input}  placeholder='Mot de passe' />
        <Button style={styles.button} title='Connection' onPress={() => {}} />
      </View>
      
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    
  },
  text_input:{
    marginLeft: 5,
    marginRight:5,
    height: 30,
    width:300,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 10,
    
},
  text : {
    fontSize: 28,
    textAlign:'center'
  }
 
});
export default Connection 