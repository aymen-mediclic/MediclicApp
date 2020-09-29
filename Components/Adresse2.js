import React from 'react';
import { View, Text, StyleSheet, TextInput, AsyncStorage, KeyboardAvoidingView,TouchableOpacity } from 'react-native'
import { Button,Input } from 'react-native-elements';
import * as NavigationService from '../Navigation/NavigationService';
export default class Adresse2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          adress:''
        }
      }

    render() {
        
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.adr_view}>
                <Text style={{alignSelf:'center',width:320,justifyContent:'center',textAlign:"center",fontSize:17,color:'white',height:35,backgroundColor:'#1E79C5'}}> Adresse 2</Text>
              <TextInput
                    style={styles.input_view}
                    autoCapitalize='none'
                    placeholder="Appartement, suite, l'unité, batiment, étage, etc"
                    onChangeText={(adress) => this.setState({adress}) }
                  />
                  <Button buttonStyle={{width:250,height:30,margin:20,alignSelf:'center'}} color='#FFC617' title='Valider'onPress={()=> this.props.adress2(this.state.adress)}   />
              </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    adr_view: {
        alignSelf:'center',
        //marginTop:40,
        backgroundColor:'white'
      },
      input_view: {
        margin:10,
        borderBottomWidth:1,
        borderColor:'grey',
        borderRadius:5,
        padding:3,
        width:'100%'
      },
})