
import * as React from 'react';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { View, TextInput, Button, StyleSheet, Text, AsyncStorage ,Image,ScrollView} from 'react-native'
import FScreen from './PatProfil/FilesScreen';
import MrdvScreen from './PatProfil/MrdvScreen';
import MprofilScreen from './PatProfil/MprofilScreen';
import MprochesScreen from './PatProfil/MprocheScreen';
import Feather from 'react-native-vector-icons/Feather';
import EntypoI from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as NavigationService from '../Navigation/NavigationService';
const Drawer = createDrawerNavigator();

class HomeScreen extends React.Component {
  
  render() {
    return (
      <View style={{  alignItems: 'center' }}>
        
        <View style={{ backgroundColor: 'white', width: "90%", height: '40%', marginBottom: 5 }}>
          <Text style={{ color: 'blue', alignSelf: 'flex-end' }}>Edit</Text>
          <Text>Profil image</Text>
          <Image style={{ height: 100, width: 150, borderRadius: 50, alignSelf: 'center' }} source={require('../assets/Title.jpg')} />
        </View>
        <View style={{ backgroundColor: 'grey', width: "90%", height: '40%', marginBottom: 5 }}>
          <Text style={{ color: 'blue', alignSelf: 'flex-end' }}>Edit</Text>
          <Text style={{ color: 'white' }}>Tarifs et remboursements</Text>
          <Text style={{ color: 'white', fontSize: 18 }}>Dr Othman  MIKOU</Text>
          <Text style={{ color: 'white' }}>Chirurgien-dentiste</Text>
        </View>
        <View style={{ backgroundColor: 'white', width: "90%", height: '40%', marginBottom: 5 }}>
          <Text>Expertises,actes et symptomes</Text>
          <Text style={{ color: 'blue', alignSelf: 'flex-end' }}>Edit</Text>
        </View>
        
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Galerie!</Text>
      </View>
    );
  }
}

class CScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Calendrier!</Text>
      </View>
    );
  }
}

const Tab = createMaterialTopTabNavigator();

export default class GProfMed extends React.Component {
  render() {
    return (

      <Tab.Navigator tabBarOptions={{
        labelStyle: { fontSize: 10 },
        tabStyle: { width: 90 },
        style: { backgroundColor: 'powderblue' },
      }} >
        <Tab.Screen name="L'essentiel" component={AppDraw} />
        <Tab.Screen name="Carte" component={SettingsScreen} />
        <Tab.Screen name="Présentation" component={FScreen} />
        <Tab.Screen name="Horaires" component={CScreen} />

      </Tab.Navigator>

    );
  }
}
function CustomDrawerContent(props) {

  return (
      <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} labelStyle={{ color: 'black' }} />
          <DrawerItem
              icon={({ focused, color, size }) => <Feather color={color} size={20} name={'log-out'} />}
              labelStyle={{ color: 'black' }}
              label="Se déconnecter" onPress={async () => {
                  try {
                      await AsyncStorage.removeItem("user")
                      await AsyncStorage.removeItem("userInfo")
                      console.log("LOgout Pres")
                  } catch (error) { console.log(error, "---------ON LOGOUT------------") }



                  NavigationService.navigate('Mediclic')
              }} />
               <DrawerItem
              icon={({ focused, color, size }) => <Feather color={color} size={20} name={'user'} />}
              labelStyle={{ color: 'black' }}
              label="Mon profil patient" onPress={async () => {
                  



                  NavigationService.navigate('Mon Profil:')
              }} />

      </DrawerContentScrollView>
  );
}
const AppDraw = () =>

<Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />} >
<Drawer.Screen name="Profil" component={HomeScreen} options={{ drawerIcon: ({ focused, color, size }) => (<Feather color={color} size={20} name={'user'} />) }} />



</Drawer.Navigator>