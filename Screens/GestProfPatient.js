import React, { useEffect, useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, ScrollView, checkedIcon } from 'react-native'
function HomeScreen({ navigation }) {
    useEffect(() => {
        fetch('http://51.91.249.185:8069/web/login?db=new_installation')
        return fetch('http://51.91.249.185:8069/api/profil?uid=244&get_profil')
            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)
            })
            .done();
    }, []);
    return (
        <View style={{flex:1,backgroundColor:'white'}} >
            <TouchableOpacity style={styles.btn}>
                <Text style={{color:'white',fontSize:15}}> Modifier mon profil</Text>
            </TouchableOpacity>
            <View style={styles.main_container}>
                <Text style={styles.text}>Nom:</Text>
                <Text style={styles.text1}>TEST</Text>
            </View>
            <View style={styles.main_container}>
                <Text style={styles.text}>Prénom:</Text>
                <Text style={styles.text1}>Test</Text>
            </View>
            <View style={styles.main_container}>
                <Text style={styles.text}>Civilité:</Text>
                <Text style={styles.text1}>femme</Text>
            </View>
            <View style={styles.main_container}>
                <Text style={styles.text}>Date de naissance:</Text>
                <Text style={styles.text1}>01-01-1980</Text>
            </View>
            <View style={styles.main_container}>
                <Text style={styles.text}>N° CIN :</Text>
                <Text style={styles.text1}>BE 12345</Text>
            </View>
            <View style={styles.main_container}>
                <Text style={styles.text}>N° Mutuelle :</Text>
                <Text style={styles.text1}>12345</Text>
            </View>
            <View style={styles.main_container}>
                <Text style={styles.text}>Adresse :</Text>
                <Text style={styles.text1}>xxxx</Text>
            </View>
            <View style={styles.main_container}>
                <Text style={styles.text}>Ville :</Text>
                <Text style={styles.text1}>xxxx</Text>
            </View>
            
        </View>
    );
}

function PScreen({ navigation }) {
    useEffect(() => {
        fetch('http://51.91.249.185:8069/web/login?db=new_installation')
        return fetch('http://51.91.249.185:8069/api/profil?uid=85&get_rdv1')
            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)
            })
            .done();
    }, []);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <Text>proche_asmaaa	proche asmaaaa</Text>
            </View>
        </View>
    );
}
function PrScreen({ navigation }) {
    useEffect(() => {
        fetch('http://51.91.249.185:8069/web/login?db=new_installation')
        return fetch('http://51.91.249.185:8069/api/profil?uid=85&get_proche')
            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)
            })
            .done();
    }, []);
    return (
        <ScrollView >
            <View style={{backgroundColor:'white',height:'15%',margin:10,padding:5}}>
                <Text style={{fontSize:16,color:'#2c3e50'}}>proche_asmaaa	proche asmaaaa</Text>
                <Text> Date de naissance</Text>
                <TouchableOpacity style={{backgroundColor:'#3498db',width:80,borderRadius:10,alignItems:'center',marginTop:5}}>
                    <Text style={{color:'white'}}> voir plus</Text>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'white',height:'15%',margin:10,padding:5}}>
                <Text style={{fontSize:16,color:'#2c3e50'}}>asmaa2	asmaa2</Text>
                <Text> Date de naissance</Text>
                <TouchableOpacity style={{backgroundColor:'#3498db',width:80,borderRadius:10,alignItems:'center',marginTop:5}}>
                    <Text style={{color:'white'}}> voir plus</Text>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'white',height:'15%',margin:10,padding:5}}>
                <Text style={{fontSize:16,color:'#2c3e50'}}>nom1	nom2</Text>
                <Text> Date de naissance</Text>
                <TouchableOpacity style={{backgroundColor:'#3498db',width:80,borderRadius:10,alignItems:'center',marginTop:5}}>
                    <Text style={{color:'white'}}> voir plus</Text>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'white',height:'15%',margin:10,padding:5}}>
                <Text style={{fontSize:16,color:'#2c3e50'}}>asmaa	asmaa</Text>
                <Text> Date de naissance</Text>
                <TouchableOpacity style={{backgroundColor:'#3498db',width:80,borderRadius:10,alignItems:'center',marginTop:5}}>
                    <Text style={{color:'white'}}> voir plus</Text>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'white',height:'15%',margin:10,padding:5}}>
                <Text style={{fontSize:16,color:'#2c3e50'}}>asmaa	asmaa</Text>
                <Text> Date de naissance</Text>
                <TouchableOpacity style={{backgroundColor:'#3498db',width:80,borderRadius:10,alignItems:'center',marginTop:5}}>
                    <Text style={{color:'white'}}> voir plus</Text>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'white',height:'15%',margin:10,padding:5}}>
                <Text style={{fontSize:16,color:'#2c3e50'}}>asmaa	asmaa</Text>
                <Text> Date de naissance</Text>
                <TouchableOpacity style={{backgroundColor:'#3498db',width:80,borderRadius:10,alignItems:'center',marginTop:5}}>
                    <Text style={{color:'white'}}> voir plus</Text>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'white',height:'15%',margin:10,padding:5}}>
                <Text style={{fontSize:16,color:'#2c3e50'}}>asmaa	asmaa</Text>
                <Text> Date de naissance</Text>
                <TouchableOpacity style={{backgroundColor:'#3498db',width:80,borderRadius:10,alignItems:'center',marginTop:5}}>
                    <Text style={{color:'white'}}> voir plus</Text>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'white',height:'15%',margin:10,padding:5}}>
                <Text style={{fontSize:16,color:'#2c3e50'}}>proche_asmaaa	proche asmaaaa</Text>
                <Text> Date de naissance</Text>
                <TouchableOpacity style={{backgroundColor:'#3498db',width:80,borderRadius:10,alignItems:'center',marginTop:5}}>
                    <Text style={{color:'white'}}> voir plus</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
function AScreen({ navigation }) {
    useEffect(() => {
        fetch('http://51.91.249.185:8069/web/login?db=new_installation')
        return fetch('http://51.91.249.185:8069/api/profil?uid=85&get_rdv2')
            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)
            })
            .done();
    }, []);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}
function DScreen({ navigation }) {
    useEffect(() => {
        fetch('http://51.91.249.185:8069/web/login?db=new_installation')
        return fetch('http://51.91.249.185:8069/api/profil?uid=85&get_rdv2')
            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)
            })
            .done();
    }, []);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}
const Drawer = createDrawerNavigator();

export default function GProfPatient() {
    return (

        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Mon profil" component={HomeScreen} />
            <Drawer.Screen name="Mes prochains RDV" component={PScreen} />
            <Drawer.Screen name="Mes anciens RDV" component={AScreen} />
            <Drawer.Screen name="Mes documents" component={DScreen} />
            <Drawer.Screen name="Mes proches" component={PrScreen} />

        </Drawer.Navigator>

    );
}
const styles = StyleSheet.create({
    main_container: {
        flexDirection:'row',
        marginBottom:30,
        marginTop:10,
        justifyContent:"space-between",
        paddingRight:10
    },
    text: {
        marginLeft: 10,
        fontWeight:'bold',
        fontSize:16,
        color:'#2c3e50'
    },
    text1: {
        fontSize:16
    },
    btn: {
        borderRadius:8,
        backgroundColor:'orange',
        color:'white',
        width:200,
        height:30,
        alignSelf:'flex-end',
        marginRight:10,
        marginBottom:10,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center'
    }
});