import React from 'react';
import Header from './Components/Header'
import { createDrawerNavigator } from 'react-navigation-drawer'
import {createAppContainer } from 'react-navigation'
import {createStackNavigator } from 'react-navigation-stack'
import  ConnectionScreen from './Screens/ConnectionScreen'
import  AccueilScreen from './Screens/AccueilScreen'
import  AboutScreen from './Screens/AboutScreen'
import  ListMed from './Screens/ListMed'
export default class App extends React.Component {
  render(){
    return (
      <AppNavigator />
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
  list :{
    screen: ListMed
  },
}
const AppStackNavigator = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerTitle:()=><Header/>,
    headerTintColor :'#fff',
    headerStyle :{
    backgroundColor:'#1E79C5',
    height: 90,
    },
    headerTitleStyle :{
      flex:1,
      textAlign: 'center',
      fontSize: 30,
      fontFamily: 'serif',
      fontWeight:'bold'
      
    }
    
  }
});
const AppNavigator= createAppContainer(AppStackNavigator);



