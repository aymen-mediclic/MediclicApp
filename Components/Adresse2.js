import React from 'react';
import { View, Text, StyleSheet, TextInput, AsyncStorage, KeyboardAvoidingView,TouchableOpacity } from 'react-native'
import { Button,Input } from 'react-native-elements';
import * as NavigationService from '../Navigation/NavigationService';
import Fontisto from 'react-native-vector-icons/Fontisto';
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
              
         
                  <View style={{flexDirection:'row',alignItems:'center',width:'100%',backgroundColor:'orange'}}>
                <Text style={{flex:1,width:300,justifyContent:'center',textAlign:"center",fontSize:17,color:'white',height:35,backgroundColor:'#1E79C5',padding:5}}>Complément d'adresse</Text>
                <Fontisto color='white' size={16} name={'close-a'} style={{padding:5 ,height:"100%",backgroundColor:'orange',backgroundColor:'#1E79C5' }} />
                
                </View>
                <Text style={styles.error}>{"Veuillez donner plus de précisions sur l'adresse du rendez-vous.\nExemple : 123 Bvd Zerktouni, 4e étage, appartement 5, Casablanca."}</Text>
              <TextInput
                    style={styles.input_view}
                    autoCapitalize='none'
                    placeholder="N° Villa, N° Immeuble, N° Etage, N° Appartement.."
                    onChangeText={(adress) => this.setState({adress}) }
                  />
                  <Button buttonStyle={{width:150,height:30,margin:20,alignSelf:'center'}} color='#FFC617' title='Valider'onPress={()=> this.props.adress2(this.state.adress)}   />
              </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    adr_view: {
        alignSelf:'center',
        margin:5,
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
      error:{
        width:320,
        backgroundColor:'#d9edf7',
        color:'#31708f',
        margin:'3%',
        borderRadius:3,
        padding:15,
        //justifyContent:'center'
      },
})