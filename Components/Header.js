import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native'
import {MaterialIcons } from '@expo/vector-icons'
//class Header extends React.Component {
    //render(){
export default function Header(){    
    return (
        <View style={styles.header}>
          <MaterialIcons name='menu' size= {28} style={styles.icn} />
          <View> 
            <Text style={styles.text}>MEDICLIC</Text>   
          </View>
        </View>
    )
  }


const styles = StyleSheet.create({
  header: {
      //flex:1,
      /*width:'100%',
      height:'100%',*/
      flexDirection:'row',  
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'red',
      /*paddingLeft:60*/
        
    },
  text:{
    fontWeight: '600',
    color:'#ecf0f1',
    fontSize: 28,
  },
  icn:{
    
  }
});
