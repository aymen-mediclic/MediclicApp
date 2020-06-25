import React from 'react';
import { View, Text, StyleSheet, TextInput, AsyncStorage, TouchableOpacity } from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button, ActionSheet } from "native-base";
var BUTTONS = ["Patient", "Professionnel", "Centre", "Annuler"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
// {this.Autho}
class ConnectionScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      password: '',

    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.med_ctr}>
         

          <Input inputStyle={styles.txt_input_u} placeholder='Nom de compte' placeholderTextColor="white"
            onChangeText={(login) => this.setState({ login })}
            value={this.state.username}
            leftIcon={<Icon
              name='user'
              size={18}
              color='white'
            />}
          />
          <Input inputStyle={styles.txt_input_p} placeholder='Mot de passe' placeholderTextColor="white"
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            leftIcon={{ type: 'font-awesome', name: 'lock', color: 'white' }}
            rightIcon={{ type: 'feather', name: 'eye-off', color: 'white' }}
          />
          <TouchableOpacity style={styles.btn} onPress= {this.Autho} >
            <Text style={{ color: '#FFC617', textAlign: 'center', fontSize: 18, marginTop: 5 }}> SE CONNECTER</Text>
          </TouchableOpacity>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>MOT DE PASSE OUBLIE? </Text>
          <TouchableOpacity style={styles.btn} onPress={() => ActionSheet.show(
            {
              options: BUTTONS,
              cancelButtonIndex: CANCEL_INDEX,
              destructiveButtonIndex: DESTRUCTIVE_INDEX,
              //title: "Testing ActionSheet"
            },
            buttonIndex => {
              if (BUTTONS[buttonIndex] != 'Annuler') {
                this.setState({ clicked: NavigationService.navigate('Inscription') });
              }
            }
          )}>
            <Text style={{ color: '#FFC617', textAlign: 'center', fontSize: 18, marginTop: 5 }}> Vous n'avez pas de compte?</Text>
          </TouchableOpacity>
        </View>



      </View>


    );
  }

  
  Autho = () => {
    console.log(this.state)
    fetch('http://51.91.249.185:8069/web/login?db=new_installation')
    fetch('http://51.91.249.185:8069/api/auth/token?login=' + this.state.login + '&password=' + this.state.password + '&db=new_installation')

      .then((response) => response.json())
      .then(async (res) => {
        console.log("repooooonse")
        console.log(res)
        console.log("*********success***********")
        //changes here
        if (res.user_context) {
          if (res.etat[1] == null) {
          console.log("user login now -------------------")
          await AsyncStorage.setItem('user', JSON.stringify(res));
          let uid=res.uid;
          console.log("uid here!!!")
          console.log(uid)
          console.log(res.etat[1])
          this.props.navigation.replace('Mon Profil:');
          }
          else{
            console.log("user login now -------------------")
          await AsyncStorage.setItem('user', JSON.stringify(res));
          let uid=res.uid;
          console.log("uid here!!!")
          console.log(uid)
          console.log(res.etat[1])
          this.props.navigation.replace('Mon Profil');
          }
          
        }
        else {
          alert("Erreur d'authentification");
          console.log(res);
        }
      })
      .done();
  }
  kaka = () => {
    
    fetch('http://51.91.249.185:8069/web/login?db=new_installation')
    return fetch('http://51.91.249.185:8069/api/profil_medecin?uid=11&get_general' )

      .then((response) => response.json())
      .then((res) => {
        console.log("repooooonse")
        console.log(res)
        console.log("*********success***********")
        
      })
      .done();
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E79C5',
    alignItems: 'center',
    //justifyContent: 'space-around'

  },
  med_ctr: {
    flex: 1,
    height: '40%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'

  },
  pat_ctr: {
    backgroundColor: 'white',
    height: '30%',
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20

  },
  txt_input_u: {
    marginBottom: 10,
    fontSize: 16,
    fontStyle: 'italic',
    paddingLeft: 15,
  },
  txt_input_p: {
    marginBottom: 10,
    fontSize: 16,
    fontStyle: 'italic',
    paddingLeft: 15
  },
  text: {
    fontSize: 22,
    color: 'black',
    marginBottom: 10,
  },
  btn: {
    marginTop: 40,
    borderColor: '#FFC617',
    borderWidth: 1,
    width: '90%',
    height: '8%',
    color: 'white',
    marginBottom: 30
  },
  pat: {
    backgroundColor: '#FFC617',
    width: 150,
    height: 30,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingLeft: 5,
  },
  med: {
    backgroundColor: 'white',
    width: 150,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingLeft: 5
  },
});
export default ConnectionScreen
