import React from 'react';
import { View, Text,ScrollView, StyleSheet,ActivityIndicator ,TextInput,Linking ,AsyncStorage, TouchableOpacity, KeyboardAvoidingView, Modal,Alert } from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Mat from 'react-native-vector-icons/MaterialIcons';
import { Button, ActionSheet } from "native-base";
import { RadioButton } from 'react-native-paper';
import { url1, url2 } from '../Navigation/GlobalUrl';
var BUTTONS = ["Patient", "Professionnel", "Centre", "Annuler"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// {this.Autho}
//<Mat color='#721c24' size={12} name="cancel" style={{marginRight:3}}/>
class ConnectionScreen1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      password: '',
      isLoading: false,
      icon: "eye-slash",
      pass: true,
      modalOpen: false,
      Error:true,
      Errormsg:''
    }
  }
  _changeIcon() {
    this.setState(prevState => ({
      icon: prevState.icon === 'eye' ? 'eye-slash' : 'eye',
      pass: !prevState.pass
    }));
  }
  function = () => {
    if (this.state.login==''){
        this.setState({Error:false,Errormsg:'Veuillez renseigner une adresse\ne-mail valide.\nExemple : info@gmail.com'})
    }else if (this.state.password=='')
    {
      this.setState({Error:false,Errormsg:'Veuillez renseigner votre mot de passe.'})
    }
    else
    {
      this.setState({Error:true,isLoading:true})
      this.Autho();
    }
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
      >
        <KeyboardAvoidingView style={styles.med_ctr} behavior="padding">
          <Text style={{ margin: 15, fontSize: 15, fontWeight: 'bold', color: 'black' }}>J'ai déja un compte Mediclic</Text>
          {this.state.Error == false ? (
                    <Text style={styles.error}>{this.state.Errormsg}</Text>
                ) : null}
          <Input inputStyle={styles.txt_input_u} placeholder='Adresse e-mail' placeholderTextColor="#95a5a6"
            onChangeText={(login) => this.setState({ login })}
            value={this.state.username}
            autoCapitalize='none'
            keyboardType='email-address'
            leftIcon={<Fontisto
              name='email'
              size={16}
              color='#95a5a6'
            />}
          />
          <Input inputStyle={styles.txt_input_p} placeholder='Mot de passe' placeholderTextColor="#95a5a6"
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            autoCapitalize='none'
            secureTextEntry={this.state.pass}
            leftIcon={{ type: 'font-awesome', name: 'lock', color: '#95a5a6', size: 17 }}
            rightIcon={
              <FontAwesome color='#95a5a6' size={16} name={this.state.icon} onPress={() => this._changeIcon()} />}
          />
          <TouchableOpacity style={styles.btn} onPress={this.function} >
            { this.state.isLoading==false?(
            <Text style={{ color: 'black', alignSelf: 'center', fontSize: 15, fontWeight: 'bold', marginTop: 5 }}>CONNEXION</Text>
            ):
            <ActivityIndicator color="black"  style={{alignSelf:'center'}} />
            }
            </TouchableOpacity>
          <TouchableOpacity style={{ borderBottomWidth: 1, borderBottomColor: 'black',marginBottom:'15%' }} onPress={() =>NavigationService.navigate("Mot de passe oublié ?")} >
            <Text style={{ color: 'black', fontWeight: 'bold', margin: 5, fontSize: 12 }}>MOT DE PASSE OUBLIÉ ? </Text>
          </TouchableOpacity>


        </KeyboardAvoidingView>
        <View style={styles.med_ctr1} >
          <Text style={{marginTop:10 ,marginBottom: 25, fontSize: 16, fontWeight: 'bold', color: 'black' }}>Nouveau sur Mediclic ?</Text>
          {/* <TouchableOpacity style={styles.btn1} onPress={() => ActionSheet.show(
            {
              options: BUTTONS,
              cancelButtonIndex: CANCEL_INDEX,
              destructiveButtonIndex: DESTRUCTIVE_INDEX,
              title: "Je veux créer un compte",
            },
            buttonIndex => {
              if (buttonIndex == 0) {
                this.setState({ clicked: NavigationService.navigate("Formulaire d'inscription") });
              } else if(buttonIndex == 1){
                this.setState({ clicked: NavigationService.navigate('Inscription Professionel') });
              }
            }
          )}>*/}
          <TouchableOpacity style={styles.btn1} onPress={() => NavigationService.navigate("Formulaire d'inscription")}>
            <Text style={{ color: 'black',fontSize: 15, fontWeight: 'bold',alignSelf:'center'}}> Je veux créer un compte</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2} onPress={() => this.setState({ modalOpen: true })}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>Je suis un professionnel</Text>
          </TouchableOpacity>
          
        </View>

      </ScrollView>



    );
  }

  /*Autho = () => {
    console.log(this.state)
    //fetch(url1)
    //fetch(url2 + '/api/auth/token?login=' + this.state.login + '&password=' + this.state.password + '&db=test_3')
    fetch(url2 + '/api/auth/token?login=contact@mediclic.info&password=a&db=test_3') take this instead
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
            this.props.navigation.replace('Mon Profil:', { id: res.uid });
          }
          else {
            alert("ss")
            this.props.navigation.replace('WebViewScreen', { id: res.uid });
          }

        }
        else {
          this.setState({Error:false,Errormsg:'Adresse e-mail ou mot de passe incorrecte.Veuillez réessayer',isLoading:false})
        }
      })
      .done();
  }*/
  Autho = () => {
    console.log(this.state)
    try {
      // in my laptop its login but then its show other errors  basically the problem is with the first url
      // fetch(url1)
      fetch(url2+'/api/auth/token?login=' + this.state.login + '&password=' + this.state.password + '&db=test_3')
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
              //this.props.navigation.replace('Mon Profil:', { id: res.uid });
              this.props.cochange('b')
            }
            else {
              alert("ss")
              this.props.navigation.replace('WebViewScreen', { id: res.uid });
            }
  
          }
          else {
            this.setState({Error:false,Errormsg:'Adresse e-mail ou mot de passe incorrecte.Veuillez réessayer',isLoading:false})
          }
        }).catch((error)=>{
          console.log(error)
        })
    } catch (error) {
      console.log(error)
    }
  }


  kaka = () => {

    fetch(url1)
    return fetch(url2 + '/api/get_speciality')
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
    //flex: 1,
    //backgroundColor: '#1E79C5',
    alignItems: 'center',
    //justifyContent: 'center'
  },
  med_ctr: {
    padding: 5,
    //height: '55%',
    width: '80%',
    alignItems: 'center',
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
  med_ctr1: {
    //flex:1,
    padding: 5,
    //height: '40%',
    width: '80%',
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 30,
    marginBottom:'10%',
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
  pat_ctr: {
    backgroundColor: 'white',
    height: '30%',
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20

  },
  txt_input_u: {
    marginBottom: 0,
    fontSize: 14,
    color: 'black',
    paddingLeft: 15,
  },
  txt_input_p: {
    marginBottom: 0,
    fontSize: 14,
    color: 'black',
    paddingLeft: 15,
    borderBottomColor: 'orange'
  },
  text: {
    fontSize: 22,
    color: 'black',
    marginBottom: 10,
  },
  btn: {
    marginTop: 40,
    borderColor: '#FFC617',
    backgroundColor: '#FFC617',
    borderWidth: 1,
    width: '90%',
    height: 35,
    marginBottom:'7%',
    borderRadius: 4,
    padding:2
  },
  btn1: {
    
    width: '90%',
    height: 35,
    backgroundColor:'#FFC617',
    borderRadius:3,
    justifyContent:'center',
  },
  btn2: {
    marginTop:10,
    marginBottom:'10%',
    width: '90%',
    height:35,
    backgroundColor:'#1E79C5',
    borderRadius:3,
    paddingTop:'3%'
    //justifyContent:'center',
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
  modal: {
    marginTop:3,
    alignSelf: 'center',
    backgroundColor: 'white',
    width: '75%',
    height: '40%',
    borderRadius: 5,
    //borderWidth:1
  },
  filtrer: {
    backgroundColor: '#1E79C5',
    flexDirection: 'row', margin: 15, alignItems: 'center',
    shadowColor: "grey",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    elevation: 5,
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
});
export default ConnectionScreen
