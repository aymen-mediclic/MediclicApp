import React, { useEffect, useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, ScrollView, checkedIcon, Modal } from 'react-native'
import FprocheScreen from './Pdocument';
import Prdv from './Prdv';
import Pprofil from './Pprofil';
import Feather from 'react-native-vector-icons/Feather';
import EntypoI from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'



  
  



const Drawer = createDrawerNavigator();

export default function GProcheProfil() {
    return (

        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Mon profil" component={Pprofil} options={{ drawerLabel: 'Mon profil', drawerIcon: ({ focused, color, size }) => (<Feather color={color} size={20} name={'user'} />) }} />
            <Drawer.Screen name="Mes RDV" component={Prdv} options={{ drawerIcon: ({ focused, color, size }) => (<Feather color={color} size={20} name={'calendar'} />) }} />
            <Drawer.Screen name="Mes documents" component={FprocheScreen} options={{ drawerIcon: ({ focused, color, size }) => (<EntypoI color={color} size={20} name={'text-document'} />) }} />
            

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