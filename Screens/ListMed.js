import React from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native';


const tab = createMaterialTopTabNavigator();


class RechercheScreen extends React.Component {
    render(){
      return (
        <View style={styles.container}>
            
            <Text>Rien</Text>
          
        </View>
      );
    }
  
  }
  class PlanScreen extends React.Component {
    render(){
      return (
        <View style={styles.container}>
            
            <Button title='Se connecter' onPress={()=>this.navigation.navigate('AccueilScreen') }/>
          
        </View>
      );
    }
  
  }

  class ListMed extends React.Component {
  render(){
    return (
      <NavigationContainer>
      <tab.Navigator>
          <tab.Screen name="Recherche" component={RechercheScreen} />
          <tab.Screen name="Plan" component={PlanScreen}/> 
      </tab.Navigator>
      </NavigationContainer>
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