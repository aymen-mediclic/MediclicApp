import React from 'react';
import Search from './Components/Search'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator,createAppContainer } from 'react-navigation'
import  Connection from './Screens/ConnectionScreen';
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
    screen : AccueilScreen
  },
  SeConnecter: {
    screen:Connection} ,
  Apropos : {
    screen: AboutScreen
  },  
});
const AppNavigator= createAppContainer(AppDrawerNavigator);


