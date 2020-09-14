import React from 'react';
import { View, Text, Image, StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native'
import { url1, url2 } from '../Navigation/GlobalUrl';
import { Button, Input } from 'react-native-elements';
import EntypoI from 'react-native-vector-icons/AntDesign'
import * as NavigationService from '../Navigation/NavigationService';

export default class Conf extends React.Component {
    componentDidMount(){
        // Start counting when the page is loaded
        this.timeoutHandle = setTimeout(()=>{
            NavigationService.navigate('Mediclic')
        }, 25000);
   }
   componentWillUnmount(){
    clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
}

    render(){
      return (
        <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 16 }}>Félicitations, votre rendez-vous est confirmé !</Text>
        <Image style={styles.img} source={require('../assets/C.png')} />
        <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignItems:'center', height:35,width:200,borderRadius:5,backgroundColor:'#1E79C5'}} onPress={() => NavigationService.navigate('Mediclic')} >
          <Text style={{color:'white',alignSelf:'center',fontSize:16,margin:7}}>Retour à l'accueil</Text>
        </TouchableOpacity>
          
      </View>
      );
    }
  
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //justifyContent: 'center',
      //alignItems: 'center',
  
    },
    text: {
      /*alignItems: 'center',
      justifyContent: 'center',*/
      backgroundColor: '#ecf0f1',
    },
  
  });