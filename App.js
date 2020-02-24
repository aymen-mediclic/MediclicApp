import React from 'react';
//import Header from './Components/Header'
import { createDrawerNavigator } from 'react-navigation-drawer'
import {createAppContainer } from 'react-navigation'
import {createStackNavigator } from 'react-navigation-stack'
import  ConnectionScreen from './Screens/ConnectionScreen';
import  AccueilScreen from './Screens/AccueilScreen';
import  AboutScreen from './Screens/AboutScreen';
export default class App extends React.Component {
  render(){
    return (
      <AppNavigator/>
        );
  }

}
const AppDrawerNavigator = createDrawerNavigator({
  Accueil:{
    screen: AccueilScreen
  },
  SeConnecter: {
    screen:ConnectionScreen} ,
  Apropos : {
    screen: AboutScreen
  }, 
});
const screens = {
  Accueil:{ 
    screen : AppDrawerNavigator
  },
  SeConnecter: {
    screen:AppDrawerNavigator
  } ,
  Apropos : {
    screen: AppDrawerNavigator
  },  
}
const AppStackNavigator = createStackNavigator(screens,{
  defaultNavigationOptions:{
    title: 'Mediclic',
    headerTintColor :'#fff',
    headerStyle :{
      backgroundColor:'#3498db',
      height: 100,
    },
    headerTitleStyle :{
      flex:1,
      justifyContent:'center',
      fontSize: 30,
      
    }
    
  }
});
const AppNavigator= createAppContainer(AppStackNavigator);


