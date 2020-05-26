
import * as React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


class HomeScreen extends React.Component {
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
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
class FScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Formations!</Text>
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
        <Tab.Screen name="L'essentiel" component={HomeScreen} />
        <Tab.Screen name="Carte" component={SettingsScreen} />
        <Tab.Screen name="Présentation" component={FScreen} />
        <Tab.Screen name="Horaires" component={CScreen} />

      </Tab.Navigator>

    );
  }
}