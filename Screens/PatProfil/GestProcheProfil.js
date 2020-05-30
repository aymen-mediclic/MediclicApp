import React, { useEffect, useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, ScrollView, checkedIcon, Modal } from 'react-native'



class PlanScreen extends React.Component {
    render(){
      return (
        <View style={styles.container}>
           
          
        </View>
      );
    }
  
  }
  class PlanScreen2 extends React.Component {
    render(){
      return (
        <View style={styles.container}>
           
          
        </View>
      );
    }
  
  }
  class PlanScreen3 extends React.Component {
    render(){
      return (
        <View style={styles.container}>
           
          
        </View>
      );
    }
  
  }



const Drawer = createDrawerNavigator();

export default function GProcheProfil() {
    return (

        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Mon profil" component={PlanScreen} />
            <Drawer.Screen name="Mes RDV" component={PlanScreen2} />
            <Drawer.Screen name="Mes documents" component={PlanScreen3} />
            

        </Drawer.Navigator>

    );
}
const styles = StyleSheet.create({
    main_container: {
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 10,
        justifyContent: "space-between",
        paddingRight: 10
    },
    text: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#2c3e50'
    },
    text1: {
        fontSize: 16
    },
    btn: {
        borderRadius: 8,
        backgroundColor: 'orange',
        color: 'white',
        width: 200,
        height: 30,
        alignSelf: 'flex-end',
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
});