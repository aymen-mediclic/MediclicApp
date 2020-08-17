import React, { useEffect, useState } from 'react'
import { View, Text,  StyleSheet,Image,AsyncStorage} from 'react-native'


export default class HeaderPat extends React.Component {
  componentDidMount= async()=>{
    let uid = await AsyncStorage.getItem("user");
                console.log("22")
                console.log(uid)
        fetch(url1)
        return fetch(url2+'/api/profil?uid='+uid+'&get_profil')
            .then((response) => response.json())
            .then(async(res) => {
                console.log("repooooonse")
                console.log(res)
                
                await AsyncStorage.setItem("userInfo",JSON.stringify(res))
                setData(res)
                setLoading(false)
            })
            .done();
}
  
  render() {
    return (
    
            
            
            <View style={{ marginLeft:20,margin:8}}>
            <Text style={{color:'white',fontSize:17,alignSelf:'center'}}>{userInfo.nom}</Text>
            
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