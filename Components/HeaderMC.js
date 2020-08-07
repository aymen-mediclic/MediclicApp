import React, { useEffect, useState } from 'react'
import { View, Text,  StyleSheet,Image} from 'react-native'


export default class HeaderMc extends React.Component {
    render() {
    return (
        <View style={{flexDirection:'row'}}>
            
            <Image style={{height:65,width:65,borderRadius:65/2 }} source={require('../assets/1.jpg')} />
            <View style={{ marginLeft:20,margin:8}}>
            <Text style={{color:'white',fontSize:17,alignSelf:'center'}}>{this.props.name}</Text>
        <Text style={{color:'#FFC617',fontSize:15,alignSelf:'center'}}>{this.props.specialite}</Text>
            </View>
            
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