import React from 'react';
import Search from './Components/Search'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator,createAppContainer } from 'react-navigation'
import  Connection from './Screens/ConnectionScreen';
import  AccueilScreen from './Screens/AccueilScreen';

export default class App extends React.Component {
  render(){
    return (
      <AppNavigator/>
        );
  }
  
}

const AppDrawerNavigator = createDrawerNavigator({
  //Se_Connecter: Connection,
  Accueil:{ 
    screen : AccueilScreen,
  },
});
const AppNavigator= createAppContainer(AppDrawerNavigator);


