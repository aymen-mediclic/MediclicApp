import React from 'react';
import {View,Text,Button,StyleSheet,TextInput,AsyncStorage} from 'react-native'
import Odoo from 'react-native-odoo'
//import { createDrawerNavigator } from 'react-navigation-drawer'
//import Header from '../Components/Header'
class ConnectionScreen extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      username: '',
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
              onChangeText={(username) => this.setState({username})}
              value= {this.state.username}
            />
            <TextInput style={styles.text_input}  placeholder='Mot de passe'
              onChangeText={(password)=> this.setState({password})}
              value={this.state.password}
            />
            <Button style={styles} color='#2ecc71' title='Se connecter' onPress={this.login} />
            <Text>Mot de passe oublié? </Text>
            <Button color='' title='Inscrivez-vous' onPress={()=>{}} />
        </View>
        
        <View  style={styles.pat_ctr}>
          <Text style={styles.text}> Espace Patients </Text>
          <Button color='#2ecc71' title='Accédez à votre espace' onPress={this.login} />
          <Text>Mot de passe oublié? </Text>
          <Button color='' title='Inscrivez-vous' onPress={()=>{}} />
        
        </View> 
      </View>
      
    );
  }
  
  login = () => {
        fetch('http://51.254.39.98:8069/api/auth/token', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstParam: this.state.username,
          secondParam: this.state.password,
          //thirdParam:'Mediclic',
        })
  })
  .then((response) => response.json())
  .then((res) => {
    if (res.succes === true) {
      AsyncStorage.setItem('user',res.user);
      this.props.navigation.navigate('Apropos'); 
    }
    else {
      alert(res.message);
    }
  })
  .done();
}
 /* login2 = () => {
    var request = new XMLHttpRequest();
    var request2= new XMLHttpRequest();
    request2.onreadystatechange= (e) =>{
      if (request2.readyState !== 4) {
        return;
      }
      if (request2.status === 200) {
        //console.log('success', request.responseText);
        alert('ok 2')
        
      } else {
        console.warn('errosdfer3333333333');
      }

    }
request.onreadystatechange = (e) => {
  if (request.readyState !== 4) {
    return;
  }
  
  if (request.status === 200) {
    //console.log('success', request.responseText);
    alert('ok')
    request.open('GET','http://51.254.39.98:8069/api/auth/token',true)
    request.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    var para='login='+this.state.username+'&password='+this.state.password+'&db=Mediclic';
    request.send(para)
  } else {
    console.warn('errosdfer');
  }
};
request.open('GET', 'http://51.254.39.98:8069/web/login?db=Mediclic',true);
request.send();

}*/

  /* 
}*/
}
/*login3 = ()=> {
  alert("envoirequete");
  $.ajax({
url: 'http://51.254.39.98:8069/web/login?db=Mediclic',
type: "GET",
success:function(data){
  alert("okkkkkkkkkkk");
  alert(data);
},
error:function(data){
  alert("erreuur");
  alert(data)
}


  });*/
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