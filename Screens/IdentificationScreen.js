//onPress={this.Autho}
import React from 'react';
import { View, Text, StyleSheet, TextInput, AsyncStorage, KeyboardAvoidingView,TouchableOpacity } from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
import MyComponent from '../Components/RadioButton';
import { Button,Input } from 'react-native-elements';
import { url1, url2 } from '../Navigation/GlobalUrl';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import InscriptionProf from './InscriptionScreen';
import InscriptionRdv from './InscriptionRdv';


class Identification extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      password: '',
      val: 'a',
      icon: "eye-slash",
      pass: true,
      Adress2:''
    }
  }
  componentDidMount() {
    this.props.AbleNext(true)
  }
  _changeIcon() {
    this.setState(prevState => ({
        icon: prevState.icon === 'eye' ? 'eye-slash' : 'eye',
        pass: !prevState.pass
    }));
}
  render() {
    console.log(this.props.userInfo, "!!!!!voila!!!!!!!!!!!!!!!!!!!!!")
    return (
      <KeyboardAvoidingView behavior='padding'>
        <View >
        {( !this.props.userInfo && this.state.val=='a')?
                  <>
              <View style={styles.med_ctr}>
              
              <TextInput style={styles.text_input} placeholder='Email'
                keyboardType='email-address'
                autoCapitalize = 'none'
                onChangeText={(login) => this.setState({ login })}
                value={this.state.username}
              />
              <View style={styles.text_input}>
              <TextInput  placeholder='Mot de passe'
                style={{ flex: 1, width: '75%' }}
                secureTextEntry={this.state.pass}
                autoCapitalize = 'none'
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
              />
              <FontAwesome color={'grey'} size={18} style={{ margin: 5,width:'10%' }} name={this.state.icon} onPress={() => this._changeIcon()} />
              </View>
              
              <Button buttonStyle={{width:250,height:30,margin:20}} color='#FFC617' title="S'Identifier" onPress={this.Autho} />
              <View style={{ margin:20 }}>
                <TouchableOpacity style={styles.btn} onPress={()=> {this.setState({val:'b'});console.log('b',this.state.val);this.props.AbleNext()}}>
                  <Text style={{fontWeight:'bold',alignSelf:'center',color:'#1E79C5'}}>Mot de passe oublié ?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}  onPress={()=> this.setState({val:'b'})} >
                  <Text style={{fontWeight:'bold',alignSelf:'center',color:'#1E79C5'}}>Créer un compte</Text>
                </TouchableOpacity>
              
              </View>
              
            </View>
            </>
                  :
                  <></> 
        }
         {/*!this.props.userInfo && this.state.val=='b'?
        <>*/}
            
            {/*</>
                  :
                  <></> 
      }*/}
        {(this.props.userInfo)?
        <>
            <MyComponent AbleNext={this.props.AbleNext} getUser={this.props.getUser} />
            </>
                  :
                  <></> 
        }
        
        </View>
      </KeyboardAvoidingView>
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
        
        if (res.user_context) {
        if (res.etat[0] == 'patient') {
          console.log("user login now -------------------")
          await AsyncStorage.setItem('user', JSON.stringify(res));
          let uid=res.uid;
          console.log("uid here!!!")
          console.log(uid)
          console.log(res.etat[1])
          this.setState({val:'b'})
          this.props.AbleNext()
          fetch(url1)
  return fetch(url2+'/api/profil?uid='+uid+'&get_profil')
            .then((response) => response.json())
            .then(async(res) => {
                console.log("repooooonse")
                console.log(res)
                
                await AsyncStorage.setItem("userInfo",JSON.stringify(res))
                this.props.getUser()
            })
            .done();
          }
          else{
            alert("ss")
            //this.props.navigation.replace('WebViewScreen');
          }
        }
        else {
          alert("Erreur d'authentification");
          console.log(res);
        }
        /*if ("user_context" in res) {
          AsyncStorage.setItem('user', res.user);
          alert('connection réussie')
          this.setState({val:'b'})
          this.props.AbleNext()
        }
        else {
          alert("Erreur d'authentification");
          console.log(res);
        }*/
      })
      .done();
  }
  kaka = () => {
    
    this.setState({val:'b'})
    console.log('456454564564564564',this.state.Adress2);
    this.props.getAdress2(this.state.Adress2);
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
    flexDirection:'row'
  },
  text: {
    fontSize: 12,
    //fontWeight:'bold',
    color: '#57606f',
    marginBottom: 20,
    alignSelf: 'center'
  },
  btn: {
    margin:5,
    width:250,
    height:30,
    borderWidth:1,
    borderColor:'#1E79C5',
    borderRadius:5,
    justifyContent:'center'
  },
  adr_view: {
    alignSelf:'center',
    marginTop:40,
  },
  input_view: {
    borderBottomWidth:1,
    borderColor:'grey',
    borderRadius:5,
    padding:3,
    width:'100%'
  },
});
export default Identification