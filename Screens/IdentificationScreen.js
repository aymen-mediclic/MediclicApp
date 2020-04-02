import React from 'react';
import {View,Text,Button,StyleSheet,TextInput,AsyncStorage} from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';

class Identification extends React.Component {
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
      this.props.navigation.navigate('Mediclic'); 
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.med_ctr}>
            <Text style={styles.text}> Veuillez renseigner vos informations: </Text>
            <TextInput style={styles.text_input}  placeholder='Nom de compte' 
              onChangeText={(login) => this.setState({login})}
              value= {this.state.username}
            />
            <TextInput style={styles.text_input}  placeholder='Mot de passe'
              onChangeText={(password)=> this.setState({password})}
              value={this.state.password}
            />
            <Button  color='#FFC617' title='Se connecter' onPress={this.Autho} />
            <Text>Mot de passe oublié? </Text>
            <Button color='' title='Inscrivez-vous' onPress={()=>{}} />
        </View>
      </View>
      
    );
  }
  
  Autho = () => {
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
      AsyncStorage.setItem('user',res.user);
      alert('connection réussie')
     
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
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    //justifyContent: 'space-around'
    
  },
  med_ctr:{
    flex:1,
    backgroundColor:'white',
    height:'50%',
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
    fontSize: 18,
    fontWeight:'bold',
    color :'black',
    marginBottom:10,
  },
});
export default Identification