//onPress={this.Autho}
import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, AsyncStorage, KeyboardAvoidingView } from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
import MyComponent from '../Components/RadioButton';
const axios = require('axios').default;
class Identification extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      password: '',
      isUser: false
    }
  }
  componentDidMount() {
    this._loadInitialState().done();
  }
  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user');
    if (value !== null) {
      this.setState({
        isUser: JSON.parse(value)
      })
    }
  }

  got=()=>{
    fetch('http://51.91.249.185:8069/web/login?db=new_installation')
     fetch('http://51.91.249.185:8069/api/update_profil', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: JSON.stringify({
        uid:"85",
        adresse: "aymentka ",
        Num_CIN: "bg2222",
        nom:"aymane",
        prenom:"aymane",
        date_nais:"06/07/1993",
        civilite:"homme",
        Num_mut:"20555",
        ville:"casa"
      })
    })

      .then((response) => response.json())
      .then((res) => {
        console.log("repooooonse")
        console.log(res)
        console.log("*********success***********")
        
        
      })
      .done();
  }
  pot=()=>{
    fetch('http://51.91.249.185:8069/web/login?db=new_installation')
     fetch('http://51.91.249.185:8069/api/ajout_proche', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: JSON.stringify({
        uid:"85",
        nom:"aymane",
        prenom:"aymane",
        
        email: "aymentka@gmail.com ",
        tel:"0607199344",
      })
    })

      .then((response) => response.json())
      .then((res) => {
        console.log("repooooonse")
        console.log(res)
        console.log("*********success***********")
        
        
      })
      .done();
  }
  
  sot=()=>{
    fetch('http://51.91.249.185:8069/web/login?db=new_installation')
     fetch('http://51.91.249.185:8069/api/update_proche', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: JSON.stringify({
        uid:"85",
        uid_p:"118",
        adresse: "aymentka ",
        Num_CIN: "bg2222",
        nom:"aymane",
        prenom:"aymane",
        date_nais:"06/07/1993",
        civilite:"homme",
        Num_mut:"20555",
        ville:"casa",
        
      })
    })

      .then((response) => response.json())
      .then((res) => {
        console.log("repooooonse")
        console.log(res)
        console.log("*********success***********")
        
        
      })
      .done();
  }
  rot=()=>{
    fetch('http://51.91.249.185:8069/web/login?db=new_installation')
     fetch('http://51.91.249.185:8069/api/delete_rdv', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: JSON.stringify({
        uid:"85",
        'mode':'supprimer_rdv',
        'rdv': '339',

        
      })
    })

      .then((response) => response.json())
      .then((res) => {
        console.log("repooooonse")
        console.log(res)
        console.log("*********success***********")
        
        
      })
      .done();
  }
  prot=()=>{
    fetch('http://51.91.249.185:8069/web/login?db=new_installation')
     fetch('http://51.91.249.185:8069/api/delete_rdv', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: JSON.stringify({
        uid:"85",
        proche:'118',
        'mode':'supprimer_rdv_proche',
        'rdv': '262',

        
      })
    })

      .then((response) => response.json())
      .then((res) => {
        console.log("repooooonse")
        console.log(res)
        console.log("*********success***********")
        
        
      })
      .done();
  }
  render() {
   
    return (
      <View>
        <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center', color: '#2f3542' }}>Confirmation de votre rendez-vous</Text>
        <View >
          
            <View style={styles.med_ctr}>
              <Text style={styles.text}>J'ai deja un compte Mediclic</Text>
              <TextInput style={styles.text_input} placeholder='Nom de compte'
                onChangeText={(login) => this.setState({ login })}
                value={this.state.username}
              />
              <TextInput style={styles.text_input} placeholder='Mot de passe'
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
              />
              <Button color='#FFC617' title='Se connecter' onPress={this.Autho} />
              <Text style={{ margin: 10 }}>Mot de passe oublié? </Text>
              <Button color='' title='Inscrivez-vous' onPress={this.got} />
            </View>
            
          
          
            <MyComponent />
        </View>
      </View>
    );
  }

  Autho = () => {
    console.log(this.state)
    fetch('http://51.91.249.185:8069/web/login?db=new_installation')
    fetch('http://51.91.249.185:8069/api/auth/token?login=' + this.state.login + '&password=' + this.state.password + '&db=new_installation')

      .then((response) => response.json())
      .then((res) => {
        console.log("repooooonse")
        console.log(res)
        console.log("*********success***********")

        if ("user_context" in res) {
          AsyncStorage.setItem('user', res.user);
          alert('connection réussie')
          this.setState({val:'b'})
        }
        else {
          alert("Erreur d'authentification");
          console.log(res);
        }
      })
      .done();
  }

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    //justifyContent: 'space-around'

  },
  med_ctr: {
    flex: 1,
    backgroundColor: 'white',
    //height:'50%',
    //width:'100%',
    alignItems: 'center',
    marginTop: 20,
    //marginBottom:20
    paddingBottom: 80,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5

  },
  pat_ctr: {
    backgroundColor: 'white',
    height: '30%',
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20

  },
  text_input: {
    alignSelf: 'center',
    height: 30,
    width: "90%",
    borderColor: '#dfe4ea',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: 'white',
    marginBottom: 15,
  },
  text: {
    fontSize: 15,
    //fontWeight:'bold',
    color: '#57606f',
    marginBottom: 20,
    alignSelf: 'center'
  },
});
export default Identification