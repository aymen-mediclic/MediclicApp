import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

export default function lien({route}){
  const {id,lien}=route.params;{
    return (
      <View style={styles.container}>
       
       
    <Text style={styles.text}> lien</Text>
      
      </View>
      
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  text : {
    /*alignItems: 'center',
    justifyContent: 'center',*/
    backgroundColor: '#ecf0f1',
    fontSize:40
  }
 
});
