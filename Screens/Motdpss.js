import React from 'react';
import { View, Text,ScrollView, StyleSheet, TextInput, AsyncStorage, TouchableOpacity, KeyboardAvoidingView, Modal,Alert, TabBarIOSItem } from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { url1, url2 } from '../Navigation/GlobalUrl';
import { BarPasswordStrengthDisplay } from 'react-native-password-strength-meter';
export default class Motdpss extends React.Component {
    state = {
        mail: '',
        Error:true,
        Errormsg:''
      }
      function = () => {
        if (this.state.mail.trim() !=0 ) {
            this.setState({Error:false,Errormsg:"Impossible d'envoyer le courriel : l'utilisateur " +this.state.mail+ " n'a pas d'adresse e-mail."})
        }else if (this.state.mail.trim()==0)
        {
          this.setState({Error:false,Errormsg:"Veuillez réinitialiser votre mot de passe : nom d'utilisateur ou adresse e-mail incorrecte."})
        }
        else
        {
          this.setState({Error:true,isLoading:true})
          //this.Autho();
        }
      }
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.med_ctr}>
            {this.state.Error == false ? (
                    <Text style={styles.error}>{this.state.Errormsg}</Text>
                ) : null}
            <Text style={styles.text}>Adresse e-mail</Text>
                <TextInput style={[styles.text_input]}
                    placeholder='Adresse e-mail'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    onChangeText={(mail) => this.setState({ mail })}
                />
                <TouchableOpacity style={styles.btn} onPress={this.function} >
                    <Text style={{ textAlign: 'center', fontSize: 17, color: 'white'}}>Confirmer</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
    /* state = {
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
        );}*/
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#1E79C5',
      alignItems: 'center',
      marginTop:40
    },
    med_ctr: {
        padding: 5,
        //height: '55%',
        width: '95%',
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
        marginLeft: '5%',
        marginBottom: '2%',
        fontWeight: 'bold',
        fontSize: 15
    },
      text_input: {
        alignSelf:'center',
        marginVertical:5,
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
        //marginTop: '5%',
        //marginBottom: '3%',
        margin:10,
        borderRadius:5
    },
    error:{
      width:'90%',
      backgroundColor:'#f8d7da',
      color:'#721c24',
      margin:'3%',
      borderRadius:3,
      padding:15,
      justifyContent:'center'
    }
})
