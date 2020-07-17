import React from 'react';
import { View, Text, StyleSheet, TextInput, AsyncStorage, TouchableOpacity,KeyboardAvoidingView } from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
export default class MdpOub extends React.Component {
    constructor(props) {
      super(props)
    }
    
    render() {
      return (
        <View  style={styles.ctr}>
          <Text style={{fontWeight:'bold',marginLeft:20}}>Votre courriel</Text>
          <TextInput
      style={styles.textinput}
      onChangeText={text => onChangeText(text)}
      placeholder='Adresse e-mail de votre compte Mediclic'
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btn_txt}>Confirmer</Text>
      </TouchableOpacity>
        </View>
        

      )
    }
}
const styles = StyleSheet.create({
 
  ctr: {
    flex:1,
    justifyContent:'center'
  },
  textinput: {
    borderWidth:1,
    borderColor:'#95a5a6',
    borderRadius:3,
    width:'90%',
    height:35,
    alignSelf:'center',
    padding:10,
    opacity:10,
    margin:10,
    color:"#95a5a6"
  },
  btn: {
    backgroundColor:'#2ecc71',
    width:"90%",
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:3,
    height:30
  },
  btn_txt: {
    color:'white',
    textAlign:'center',
    fontWeight:"bold",
  },
})