import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, AsyncStorage ,TouchableOpacity } from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5';
class ConnectionScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      password: '',

    }
  }
  componentDidMount() {
    this._loadInitialState().done();
  }
  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user');
    if (value !== null) {
      this.props.navigation.navigate('Mediclic');
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.med_ctr}>
          <View style={{flexDirection:'row',marginBottom:20}}>
          <TouchableOpacity style={styles.pat}><Text style={{color:'white',fontSize:16}}>Espace patient</Text></TouchableOpacity>
          <TouchableOpacity style={styles.med}><Text  style={{fontSize:16}}>Espace médecin</Text></TouchableOpacity>
          </View>
          
          <Input inputStyle={styles.txt_input_u} placeholder='Nom de compte'  placeholderTextColor="white" 
            onChangeText={(login) => this.setState({ login })}
            value={this.state.username}
            leftIcon={<Icon
              name='user'
              size={24}
              color='white'
            />}
          />
          <Input inputStyle={styles.txt_input_p} placeholder='Mot de passe'  placeholderTextColor="white" 
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            leftIcon={{ type: 'font-awesome', name: 'lock',color:'white'}}
            rightIcon={{ type: 'feather', name: 'eye-off',color:'white'}}
          />
          <TouchableOpacity style={styles.btn} onPress={this.Autho}>
            <Text style={{color:'#FFC617',textAlign:'center',fontSize:18,marginTop:5}}> SE CONNECTER</Text>
            </TouchableOpacity>
          <Text style={{color:'white',fontWeight:'bold'}}>MOT DE PASSE OUBLIE? </Text>
          <TouchableOpacity style={styles.btn} onPress={()=>NavigationService.navigate('Inscription')}>
            <Text style={{color:'#FFC617',textAlign:'center',fontSize:18,marginTop:5}}> S'INSCRIRE</Text>
            </TouchableOpacity>
        </View>

        {/*<View  style={styles.pat_ctr}>
          <Text style={styles.text}> Espace Patients </Text>
          <Button color='#2ecc71' title='Accédez à votre espace' onPress={this.getmed} />
          <Text>Mot de passe oublié? </Text>
          <Button color='' title='Inscrivez-vous' onPress={()=>{}} />
          <Input placeholder='BASIC INPUT' leftIcon={
    <Icon
      name='user'
      size={24}
      />
  } />
        </View> */}
      </View>

    );
  }

  Autho = () => {
    console.log(this.state)
    fetch('http://51.254.39.98:8069/web/login?db=Mediclic')
    fetch('http://51.254.39.98:8069/api/auth/token?login=' + this.state.login + '&password=' + this.state.password + '&db=Mediclic')

      .then((response) => response.json())
      .then((res) => {
        console.log("repooooonse")
        console.log(res)
        console.log("*********success***********")
        console.log(res.succes)
        console.log("***************************")
        if ("user_context" in res) {
          AsyncStorage.setItem('user', res.user);
          NavigationService.navigate('Mediclic');

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
    backgroundColor: '#1E79C5',
    alignItems: 'center',
    //justifyContent: 'space-around'

  },
  med_ctr: {
    flex:1,
    height: '40%',
    width: '90%',
    alignItems: 'center',
    justifyContent:'center'

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
    fontSize:16,
    fontStyle:'italic',
    paddingLeft:15,
  },
  txt_input_p: {
    marginBottom: 10,
    fontSize:16,
    fontStyle:'italic',
    paddingLeft:15
  },
  text: {
    fontSize: 22,
    color: 'black',
    marginBottom: 10,
  },
  btn: {
    marginTop:40,
    borderColor:'#FFC617',
    borderWidth:1,
    width:'90%',
    height:'8%',
    color:'white',
    marginBottom:30
  },
  pat:{
    backgroundColor:'#FFC617',
    width:150,
    height:30,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    paddingLeft:5,
  },
  med:{
    backgroundColor:'white',
    width:150,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    paddingLeft:5
  },
});
export default ConnectionScreen
