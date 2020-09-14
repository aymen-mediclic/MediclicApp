import React from 'react';
import { View, Text,ScrollView, StyleSheet, TextInput, AsyncStorage, TouchableOpacity, KeyboardAvoidingView, Modal,Alert } from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { url1, url2 } from '../Navigation/GlobalUrl';
import { BarPasswordStrengthDisplay } from 'react-native-password-strength-meter';
export default class Motdpss extends React.Component {
    /*state = {
        mail: '',
      }
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.med_ctr}>
            <Text style={styles.text}>Adresse e-mail</Text>
                <TextInput style={[styles.text_input]}
                    placeholder='Adresse e-mail'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    onChangeText={(mail) => this.setState({ mail })}
                />
                <TouchableOpacity style={styles.btn}  >
                    <Text style={{ textAlign: 'center', fontSize: 17, color: 'white'}}>S' inscrire</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }*/
     state = {
        password: '',
      }
    
      onChange = password => this.setState({ password })
    
      render() {
        const { password } = this.state;
        return (
          <View style={styles.container}>
            <TextInput style={{backgroundColor:'white',width:'80%',height:30}} onChangeText={this.onChange} />
            <BarPasswordStrengthDisplay
              password={password}
              width={200}
              minLength={1}
            />
          </View>
        );}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#1E79C5',
      alignItems: 'center',
    justifyContent: 'center'
    },
    med_ctr: {
        padding: 5,
        //height: '55%',
        width: '80%',
        //alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: 'white',
        marginTop: 25,
        borderRadius: 4,
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0,
        },
        elevation: 5,
      },
      text: {
        marginTop: '5%',
        marginLeft: '3%',
        marginBottom: '2%',
        fontWeight: 'bold',
        fontSize: 15
    },
      text_input: {
        marginBottom: '5%',
        height: 40,
        width: '90%',
        borderWidth: 1,
        borderColor:'#45aaf2',
        borderRadius: 5,
        paddingLeft: 10,
        backgroundColor: "white",
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0,
        },
        elevation: 5,
    },
    btn: {
        //flex: 1,
        width: '60%',
        height: 35,
        backgroundColor: '#1E79C5',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%',
        marginBottom: '3%',
        borderRadius:5
    },
})
