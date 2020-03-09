import React,  { Component }   from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import AccueilScreen from './Screens/AccueilScreen';
import ListMed from './Screens/ListMed';
import AboutScreen from './Screens/AboutScreen';
import ConnectionScreen from './Screens/ConnectionScreen';
import MedProfilScreen from './Screens/MedProfilScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './Navigation/NavigationService';
import {MaterialIcons } from '@expo/vector-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {TouchableOpacity,Text} from 'react-native';
import { DrawerActions } from '@react-navigation/native';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
import * as NavigationService from './Navigation/NavigationService';


export default class App extends React.Component  {
  constructor(props){
    super(props);
  }
  render(){
        return (
          <NavigationContainer  ref={navigationRef}>  
            <Stack.Navigator >
            <Stack.Screen name="Mediclic" component={AppDraw} 
                options={{
                headerTintColor :'#fff',
                headerStyle :{
                backgroundColor:'#1E79C5',
                height: 80,
                },
                headerRight:()=>
                <TouchableOpacity style={{marginRight:5}} onPress={()=> NavigationService.navigate('Se connecter')} >
                  <MaterialIcons name='accessibility' size= {28} color={'white'}/>
                  {/*<FontAwesomeIcon icon='user' />*/}
                </TouchableOpacity>,
                headerLeft:()=>
                <TouchableOpacity  style={{marginLeft:5}} onPress={ ()=> alert('ok')} >
                    <MaterialIcons name='menu' size= {28} color={'white'}  />
                </TouchableOpacity>,
              }
            } />
              <Stack.Screen name="Recherche" component={ListMed} options={{
                headerTintColor :'#fff',
                headerStyle :{
                backgroundColor:'#1E79C5',
                height: 80,
                },
              }} />
              <Stack.Screen name="Se connecter" component={ConnectionScreen} options={{
                headerTintColor :'#fff',
                headerStyle :{
                backgroundColor:'#1E79C5',
                height: 80,
                },
              }} />
              <Stack.Screen name="MedProfil" component={MedProfilScreen} options={{
                headerTintColor :'#fff',
                headerStyle :{
                backgroundColor:'#1E79C5',
                height: 80,
                },
              }} />
            </Stack.Navigator>
          </NavigationContainer>
            
          
        );
  } 
}


const AppDraw=()=>

<Drawer.Navigator>
<Drawer.Screen name="Accueil" component={AccueilScreen} />
<Drawer.Screen name="A propos" component={AboutScreen} />
{/*<Drawer.Screen name="Liste" component={ListMed} />*/}
</Drawer.Navigator>

    
 

  