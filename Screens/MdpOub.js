import React from 'react';
import { View, Text, StyleSheet, TextInput, AsyncStorage, TouchableOpacity,KeyboardAvoidingView } from 'react-native'
import {  Item, Input, Label } from 'native-base';
import * as NavigationService from '../Navigation/NavigationService';
export default class MdpOub extends React.Component {
    constructor(props) {
      super(props)
    }
    
    render() {
      return (
        <View  style={styles.ctr}>
          <Item floatingLabel>
              <Label>Username</Label>
              <Input style={styles.textinput} />
            </Item>
        </View>
        

      )
    }
}
const styles = StyleSheet.create({
 
  ctr: {
    flex:1,
    justifyContent:'center',
    backgroundColor:'white'
  },
  textinput: {
    
    
    
    
  }
})