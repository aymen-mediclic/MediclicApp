import React,  { Component }   from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import AccueilScreen from './Screens/AccueilScreen';
import ListMed from './Screens/ListMed';
import AboutScreen from './Screens/AboutScreen';
import ConnectionScreen from './Screens/ConnectionScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './Navigation/NavigationService';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends React.Component  {
  constructor(props){
    super(props);
  }
  render(){
        return (
          <NavigationContainer  ref={navigationRef}>  
            <Stack.Navigator >
            <Stack.Screen name="Mediclic" component={AppStack} 
    options={{
      headerTintColor :'#fff',
      headerStyle :{
              backgroundColor:'#1E79C5',
              height: 80,
            },
          }
      } />
  <Stack.Screen name="Recherche" component={ListMed} />
  <Stack.Screen name="Se connecter" component={ConnectionScreen} />
</Stack.Navigator>
          </NavigationContainer>
            
          
        );
  } 
}


const AppStack=()=>

<Drawer.Navigator>
<Drawer.Screen name="Accueil" component={AccueilScreen} />
<Drawer.Screen name="A propos" component={AboutScreen} />
<Drawer.Screen name="Liste" component={ListMed} />
</Drawer.Navigator>

    
 

  