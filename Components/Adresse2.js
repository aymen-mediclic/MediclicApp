import React from 'react';
import { View, Text, StyleSheet, TextInput, AsyncStorage, KeyboardAvoidingView,TouchableOpacity } from 'react-native'
import { Button,Input } from 'react-native-elements';
import * as NavigationService from '../Navigation/NavigationService';
export default class Adresse2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          Adress2:''
        }
      }

    render() {
        
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.adr_view}>
                <Text style={{margin:15,fontWeight:'bold'}}>Adresse 2</Text>
              <TextInput
                    style={styles.input_view}
                    autoCapitalize='none'
                    placeholder="Appartement, suite, l'unité, batiment, étage, etc"
                    onChangeText={(Adress2) => this.setState({Adress2}) }
                  />
                  <Button buttonStyle={{width:250,height:30,margin:20}} color='#FFC617' title='Valider' onPress={()=>NavigationService.navigate('Validez votre rendez-vous',
                                                {
                                                    adresse2:this.state.Adress2,
                                                    name: this.props.route.params.name,
                                                    adresse:this.props.route.params.adresse,
                                                    type_rdv:this.props.route.params.type_rdv,
                                                    namo: this.props.route.params.namo,
                                                    text: this.props.route.params.text,
                                                    text1: this.props.route.params.text1,
                                                    doctor: this.props.route.params.doctor,
                                                    duration: this.props.route.params.duration,
                                                    partner_id: this.props.route.params.partner_id,
                                                    context: this.props.route.params.context,
                                                    praticien: this.props.route.params.praticien,
                                                    service_id: this.props.route.params.service_id,
                                                    service_name: this.props.route.params.service_name,
                                                    service_salle: this.props.route.params.service_salle,
                                                    adresse_rdv: this.props.route.params.adresse_rdv
                                                })}  />
              </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    adr_view: {
        alignSelf:'center',
        marginTop:40,
      },
      input_view: {
        borderBottomWidth:1,
        borderColor:'grey',
        borderRadius:5,
        padding:3,
        width:'100%'
      },
})