import React, { useEffect, useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, ScrollView, checkedIcon, Modal } from 'react-native'
import FScreen from './PatProfil/FilesScreen';
import MrdvScreen from './PatProfil/MrdvScreen';
import MprofilScreen from './PatProfil/MprofilScreen';
import MprochesScreen from './PatProfil/MprocheScreen';






const Drawer = createDrawerNavigator();

export default function GProfPatient() {
    return (

        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Mon profil" component={MprofilScreen} />
            <Drawer.Screen name="Mes RDV" component={MrdvScreen} />
            <Drawer.Screen name="Mes documents" component={FScreen} />
            <Drawer.Screen name="Mes proches" component={MprochesScreen} />

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