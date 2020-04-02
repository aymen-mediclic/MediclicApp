import React from 'react'
import {View,Text,Button,StyleSheet,TouchableOpacity,Image} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native';
import RechercheScreen from './RechercheScreen'

const tab = createMaterialTopTabNavigator();




class PlanScreen extends React.Component {
    render(){
      return (
        <View style={styles.container}>
            
            <TouchableOpacity >
                    <Image style={styles.img} source={require('../assets/map.jpg')} />
                </TouchableOpacity> 
          
        </View>
      );
    }
  
  }

  class ListMed extends React.Component {
  render(){
    return (
      
      <tab.Navigator>
          <tab.Screen name="Recherche" component={RechercheScreen} />
          <tab.Screen name="Plan" component={PlanScreen}/> 
      </tab.Navigator>
      
    );
  }
  

}
    
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  
});
export default ListMed