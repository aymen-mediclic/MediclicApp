
import * as React from 'react';
import { DrawerActions } from 'react-navigation';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
    }
  
/*
    let _navigator;
function setTopLevelNavigator(navigatorRef) {
        _navigator = navigatorRef;
    }
    
function openDrawer() {
      _navigator.dispatch(DrawerActions.openDrawer())
  }
    export default {
      setTopLevelNavigator,
      openDrawer,
  }*/

/*import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer'
import {createAppContainer } from 'react-navigation'
import {createStackNavigator } from 'react-navigation-stack'
import  ConnectionScreen from '../Screens/ConnectionScreen'
import  AccueilScreen from '../Screens/AccueilScreen'
import  AboutScreen from '../Screens/AboutScreen'
import  ListMed from '../Screens/ListMed'
import {TouchableOpacity,Text} from 'react-native';
import {MaterialIcons } from '@expo/vector-icons'
import StackNavigator from './StackNavigaton';

const AppDrawerNavigator = createDrawerNavigator({
  Accueil:{screen: AccueilScreen,},
  //SeConnecter: {screen:ConnectionScreen} ,
  Apropos : {screen: AboutScreen},
    /*initialRouteName:'AccueilScreen',
    drawerwidth:300,
}
);
const AppContainer = createAppContainer(AppDrawerNavigator)
export default class DrawerNavigator extends React.Component{
    render(){
        return(
            <AppContainer/>
        )
    }
}*/