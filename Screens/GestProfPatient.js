import React, { useEffect, useState } from 'react'
import {
    createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { View, TextInput, Button, StyleSheet, Text, AsyncStorage } from 'react-native'
import FScreen from './PatProfil/FilesScreen';
import MrdvScreen from './PatProfil/MrdvScreen';
import MprofilScreen from './PatProfil/MprofilScreen';
import MprochesScreen from './PatProfil/MprocheScreen';
import Feather from 'react-native-vector-icons/Feather';
import EntypoI from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as NavigationService from '../Navigation/NavigationService';


const Drawer = createDrawerNavigator();
function CustomDrawerContent(props) {

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} labelStyle={{ color: 'black' }} />
            <DrawerItem
                icon={({ focused, color, size }) => <Feather color={color} size={20} name={'lock'} />}
                labelStyle={{ color: 'black' }}
                label="Modifier mon mot de passe" onPress={async () => alert('ok') }/>
            <DrawerItem
                icon={({ focused, color, size }) => <Feather color={color} size={20} name={'log-out'} />}
                labelStyle={{ color: 'black' }}
                label="Se déconnecter" onPress={async () => {
                    try {
                        await AsyncStorage.removeItem("user")
                        await AsyncStorage.removeItem("userInfo")
                        await AsyncStorage.removeItem("uid")
                        console.log("LOgout Pres")
                    } catch (error) { console.log(error, "---------ON LOGOUT------------") }



                    NavigationService.navigate('Mediclic')
                }} />
                

        </DrawerContentScrollView>
    );
}

export default function GProfPatient() {
    return (

        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />} >
            <Drawer.Screen name="Mon profil" component={MprofilScreen} options={{ drawerLabel: 'Mon Profil', drawerIcon: ({ focused, color, size }) => (<Feather color={color} size={20} name={'user'} />) }} />
            <Drawer.Screen name="Mes RDV" component={MrdvScreen} options={{ drawerIcon: ({ focused, color, size }) => (<Feather color={color} size={20} name={'calendar'} />) }} />
            <Drawer.Screen name="Mes documents" component={FScreen} options={{ drawerIcon: ({ focused, color, size }) => (<EntypoI color={color} size={20} name={'text-document'} />) }} />
            <Drawer.Screen name="Mes proches" component={MprochesScreen} options={{ drawerIcon: ({ focused, color, size }) => (<Ionicons color={color} size={22} name={'ios-people'} />) }} />

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