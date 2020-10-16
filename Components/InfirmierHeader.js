// Header du component qui sort lors du choix d'un assistant parmi la liste
import React, { useEffect, useState } from 'react'
import { View, Text,  StyleSheet,Image} from 'react-native'


export default class InfirmierHeader extends React.Component {
    render() {
    return (
        <View style={{flexDirection:'row',flex:1}}>
            
            
            <Text style={{color:'white',fontSize:17,alignSelf:'center'}}>{this.props.assi}</Text>
        <Text style={{color:'white',fontSize:17,alignSelf:'center',marginLeft:5}}>à domicile</Text>
            </View>
            
       
    
    );
  }
}
  const styles = StyleSheet.create({
    img: {
        flex: 1,
        width:100,
        height:50
      },
  })