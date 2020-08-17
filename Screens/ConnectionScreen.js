import React from 'react';
import { View, Text, StyleSheet, TextInput, AsyncStorage, TouchableOpacity,KeyboardAvoidingView } from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button, ActionSheet } from "native-base";
import { url1, url2 } from '../Navigation/GlobalUrl';
var BUTTONS = ["Patient", "Professionnel", "Centre", "Annuler"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// {this.Autho}
class ConnectionScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      password: '',
      icon: "eye-slash",
      pass: true,
    }
  }
  _changeIcon() {
    this.setState(prevState => ({
        icon: prevState.icon === 'eye' ? 'eye-slash' : 'eye',
        pass: !prevState.pass
    }));
}
  
  render() {
    return (
      <View
      style={styles.container}
      >
        <KeyboardAvoidingView style={styles.med_ctr} behavior="padding">
         <Text style={{margin:15,fontSize:15,fontWeight:'bold',color:'black'}}>J'ai déja un compte Mediclic</Text>
          <Input inputStyle={styles.txt_input_u} placeholder='Adresse email' placeholderTextColor="#95a5a6"
            onChangeText={(login) => this.setState({ login })}
            value={this.state.username}
            autoCapitalize = 'none'
            keyboardType='email-address'
            leftIcon={<Icon
              name='user'
              size={16}
              color='#95a5a6'
            />}
          />
          <Input inputStyle={styles.txt_input_p} placeholder='Mot de passe' placeholderTextColor="#95a5a6"
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            autoCapitalize = 'none'
            secureTextEntry={this.state.pass}
            leftIcon={{ type: 'font-awesome', name: 'lock', color: '#95a5a6' ,size:17}}
            rightIcon={ 
            <FontAwesome color='#95a5a6' size={16}  name={this.state.icon} onPress={() => this._changeIcon()} />}
          />
          <TouchableOpacity style={styles.btn} onPress= {this.Autho} >
            <Text style={{ color: 'black', alignSelf: 'center', fontSize: 15,fontWeight:'bold' ,marginTop: 5 }}>CONNEXION</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderBottomWidth:1,borderBottomColor:'black' }}>
          <Text style={{ color: 'black', fontWeight: 'bold',margin:5,fontSize:12 }}>MOT DE PASSE OUBLIÉ ? </Text>
          </TouchableOpacity>
          
          
        </KeyboardAvoidingView>
              <View style={styles.med_ctr1} >
              <Text style={{margin:15,fontSize:15,fontWeight:'bold',color:'black'}}>Nouveau sur Mediclic ?</Text>
              <TouchableOpacity style={styles.btn1} onPress={() => ActionSheet.show(
            {
              options: BUTTONS,
              cancelButtonIndex: CANCEL_INDEX,
              destructiveButtonIndex: DESTRUCTIVE_INDEX,
              title: "Je veux créer un compte",
            },
            buttonIndex => {
              if (buttonIndex == 0) {
                this.setState({ clicked: NavigationService.navigate('Inscription') });
              } else if(buttonIndex == 1){
                this.setState({ clicked: NavigationService.navigate('Inscription Professionel') });
              }
            }
          )}>
            <Text style={{ color: '#FFC617', textAlign: 'center', fontSize: 15,fontWeight:'bold' }}> Je veux créer un compte</Text>
          </TouchableOpacity>
              </View>
          
              </View>
     


    );
  }

  Autho = () => {
    console.log(this.state)
    fetch(url1)
    fetch(url2+'/api/auth/token?login=' + this.state.login + '&password=' + this.state.password + '&db=test')

      .then((response) => response.json())
      .then(async (res) => {
        console.log("repooooonse")
        console.log(res)
        console.log("*********success***********")
        console.log(res.uid)
        console.log("*********laloli**********")
        //changes here
        if (res.user_context) {
          if (res.etat[0] == 'patient') {
          console.log("user login now -------------------")
          await AsyncStorage.setItem('user', JSON.stringify(res));
          await AsyncStorage.setItem('uid', JSON.stringify(res.uid));
          this.props.navigation.replace('Mon Profil:',{id: res.uid});
          }
          else{
            alert("ss")
            this.props.navigation.replace('WebViewScreen',{id: res.uid});
          }
          
        }
        else {
          alert("Erreur d'authentification");
          console.log(res);
        }
      })
      .done();
  }

  
 /* Autho = () => {
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
  }*/
  kaka = () => {
    
    fetch(url1)
    return fetch(url2+'/api/get_speciality')
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
    //backgroundColor: '#1E79C5',
    alignItems: 'center',
    //justifyContent: 'center'

  },
  med_ctr: {
    padding:5,
    height: '60%',
    width: '80%',
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor:'white',
    marginTop:25,
    borderRadius:4,
    shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        elevation: 5,
  },
  med_ctr1: {
    padding:5,
    height: '20%',
    width: '80%',
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor:'white',
    marginTop:30,
    borderRadius:4,
    shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        elevation: 5,
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
    fontSize: 14,
    color: 'black',
    paddingLeft: 15,
  },
  txt_input_p: {
    marginBottom: 10,
    fontSize: 14,
    color: 'black',
    paddingLeft: 15,
    borderBottomColor:'orange'
  },
  text: {
    fontSize: 22,
    color: 'black',
    marginBottom: 10,
  },
  btn: {
    marginTop: 40,
    borderColor: '#FFC617',
    backgroundColor:'#FFC617',
    borderWidth: 1,
    width: '90%',
    height:35,
    marginBottom: 30,
    borderRadius:4,
  },
  btn1: {
    width: '90%',
    height:35,
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
