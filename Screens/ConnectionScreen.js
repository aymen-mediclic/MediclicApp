import React from 'react';
import {View,Text,Button,StyleSheet,TextInput,AsyncStorage} from 'react-native'
import { createDrawerNavigator } from 'react-navigation-drawer'
//import Header from '../Components/Header'
class Connection extends React.Component {
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
        <Text style={styles.text}> Se Connecter! </Text>
        <TextInput style={styles.text_input}  placeholder='Nom de compte' 
          onChangeText={(username) => this.setState({username})}
          value= {this.state.username}
        />
        <TextInput style={styles.text_input}  placeholder='Mot de passe'
          onChangeText={(password)=> this.setState({password})}
          value={this.state.password}
        />
        <Button style={styles.button} title='Connection' onPress={this.login} />
      </View>
      
    );
  }
  login = () => {
        fetch('', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstParam: this.state.username,
          secondParam: this.state.password
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
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  text_input:{
    marginLeft: 5,
    marginRight:5,
    height: 30,
    width:300,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 10,
    
},
  text : {
    fontSize: 28,
    textAlign:'center'
  }
 
});
export default Connection 