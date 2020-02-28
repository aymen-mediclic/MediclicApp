import React from 'react';
import {View,Text,Button,StyleSheet,TextInput,AsyncStorage} from 'react-native'
import Odoo from 'react-native-odoo'
//import { createDrawerNavigator } from 'react-navigation-drawer'
//import Header from '../Components/Header'
import * as NavigationService from '../Navigation/NavigationService';
var  apiToken="";
class ConnectionScreen extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      login: '',
      password: '',

    }
  }
  componentDidMount(){
    this._loadInitialState().done();
  }
  _loadInitialState = async() => {
    var value= await AsyncStorage.getItem('user');
    if (value !== null) {
      this.props.navigation.navigate('Apropos'); 
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.med_ctr}>
            <Text style={styles.text}> Espace Professionnels </Text>
            <TextInput style={styles.text_input}  placeholder='Nom de compte' 
              onChangeText={(login) => this.setState({login})}
              value= {this.state.username}
            />
            <TextInput style={styles.text_input}  placeholder='Mot de passe'
              onChangeText={(password)=> this.setState({password})}
              value={this.state.password}
            />
            <Button style={styles} color='#2ecc71' title='Se connecter' onPress={this.Autho} />
            <Text>Mot de passe oublié? </Text>
            <Button color='' title='Inscrivez-vous' onPress={()=>{}} />
        </View>
        
        <View  style={styles.pat_ctr}>
          <Text style={styles.text}> Espace Patients </Text>
          <Button color='#2ecc71' title='Accédez à votre espace' onPress={this.getmed} />
          <Text>Mot de passe oublié? </Text>
          <Button color='' title='Inscrivez-vous' onPress={()=>{}} />
        
        </View> 
      </View>
      
    );
  }
  
  Autho = () => {
       // data={'login': this.state.login, 'password':this.state.password,'db':'Mediclic'}
       console.log(this.state) 
       fetch('http://51.254.39.98:8069/web/login?db=Mediclic')
        fetch('http://51.254.39.98:8069/api/auth/token?login='+this.state.login+'&password='+this.state.password+'&db=Mediclic') 
      
      .then((response) => response.json())
      .then((res) => {
      console.log("repooooonse")
      console.log(res)
      console.log("*********success***********")
      console.log(res.succes)
      console.log("***************************")
    if ("user_context" in res) {
      apiToken=res['access_token'];
      //AsyncStorage.setItem('user',res.user);
      //NavigationService.navigate('A propos');
      ('ok') 
    }
    else {
      alert("Erreur d'authentification");
      console.log(res);
    }
  })
  .done();
  }
  getmed =()=>{
        fetch('http://51.254.39.98:8069/web/login?db=Mediclic')
        fetch('http://51.254.39.98:8069/test')
      
      .then((response) => response.json())
      .then((res) => {
      console.log("repooooonse")
      console.log(res)
      console.log("*********success***********")
      console.log(res.succes)
      console.log("***************************")
    if ("data" in res) {
      NavigationService.navigate('A propos'); 
    }
    else {
      alert("Erreur communication avec api");
      console.log(res);
    }
  })
  .done();
  }
}




const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#bdc3c7',
    alignItems: 'center',
    //justifyContent: 'space-around'
    
  },
  med_ctr:{
    backgroundColor:'white',
    height:'40%',
    width:'90%',
    alignItems:'center',
    marginTop:20,
    marginBottom:20

  },
  pat_ctr:{
    backgroundColor:'white',
    height:'30%',
    width:'90%',
    alignItems:'center',
    marginTop:20,
    marginBottom:20

  },
  text_input:{
    marginLeft: 5,
    marginRight:5,
    height: 30,
    width:"90%",
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 10,
    backgroundColor:'white',
    marginBottom:10,
},
  text : {
    fontSize: 22,
    color :'black',
    marginBottom:10,
  },
});
export default ConnectionScreen
/* {
   method: 'GET',
   headers: {
     Accept: 'application/json',
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({
     login:  this.state.login,//this.state.login,
     password: this.state.password,
     db:'Mediclic',
   })
})*/