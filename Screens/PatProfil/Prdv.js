import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, Button, StyleSheet, FlatList, Image, TouchableHighlight, TouchableOpacity, Modal,Alert } from 'react-native'
import { ActionSheet } from "native-base";
import { url2, url1 } from '../../Navigation/GlobalUrl';
//import * as NavigationService from '../Navigation/NavigationService';
var BUTTONS = [ { text: "Supprimer", icon: "trash",iconColor:"#e74c3c" }, { text: "Annuler" }];
var DESTRUCTIVE_INDEX = 2;
var CANCEL_INDEX = 3;
export default function Prdv({ navigation }) {
    const [Data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        fetch(url2)
        return fetch(url1+'/api/profil_proche?uid=26&get_rdv&proche=5')
            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)
                setData(res)
            })
            .done();
    }, []);
    function Prot(){
        fetch('http://51.91.249.185:8069/web/login?db=new_installation')
        return fetch('http://51.91.249.185:8069/api/delete_rdv', {
         method: 'POST',
         headers: {
           'Accept': 'application/json, text/javascript, */*; q=0.01',
           'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
         },
         body: JSON.stringify({
           uid:"85",
           proche:'118',
           'mode':'supprimer_rdv_proche',
           'rdv': '261',
   
           
         })
       })
   
         .then((response) => response.json())
         .then((res) => {
           console.log("repooooonse")
           console.log(res)
           console.log("*********success***********")
           setData(res)
           
         })
         .done();
    }
    function Item({ item }) {
        return (
            <View style={styles.item}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <TouchableHighlight
                            style={{ backgroundColor: "#2196F3" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >

                            <Text style={styles.textStyle}>Fermer details</Text>
                        </TouchableHighlight>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text style={styles.title}>Rdv avec: </Text>
                            <Text style={styles.title1}>{item.profess}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text style={styles.title}>Date du RDV: </Text>
                            <Text style={styles.title1}>{item.date_rdv}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text style={styles.title}>Statut: </Text>
                            <Text style={styles.title1}>{item.statut}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text style={styles.title}>Service: </Text>
                            <Text style={styles.title1}>{item.service}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text style={styles.title}>Adresse du RDV: </Text>
                            <Text style={styles.title1}>{item.adress_rdv}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text style={styles.title}>Date de création: </Text>
                            <Text style={styles.title1}>{item.create_rdv}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text style={styles.title}>Salle: </Text>
                            <Text style={styles.title1}>{item.salle}</Text>
                        </View>
                        <View style={{ flexDirection: "column", marginVertical: 200 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-evenly", margin: 10 }}>

                                <TouchableHighlight
                                    style={{ backgroundColor: '#e67e22', width: 90, borderRadius: 5 }}

                                >
                                    <Text style={styles.textStyle}>Ajouter pdf</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                                <TouchableHighlight
                                    style={{ backgroundColor: 'red', width: 90, borderRadius: 5 }}

                                >
                                    <Text style={styles.textStyle}> Supprimer</Text>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    style={{ backgroundColor: '#e67e22', width: 100, borderRadius: 5 }}

                                >
                                    <Text style={styles.textStyle}>téléconsultation</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </Modal>

                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text style={styles.title}>Rdv avec: </Text>
                    <Text style={styles.title1}>{item.profess}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text style={styles.title}>Date du RDV: </Text>
                    <Text style={styles.title1}>{item.date_rdv}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text style={styles.title}>Statut: </Text>
                    <Text style={styles.title1}>{item.statut}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableHighlight
                        style={{ backgroundColor: '#3498db', width: 90, borderRadius: 5 }}
                        onPress={() => {
                            setModalVisible(true);
                        }}
                    >
                        <Text style={styles.textStyle}>Détails</Text>
                    </TouchableHighlight>
                    <TouchableOpacity style={{ backgroundColor: '#3498db', width: 90, borderRadius: 5 }} onPress={() => ActionSheet.show(
                        {
                            options: BUTTONS,
                            cancelButtonIndex: CANCEL_INDEX,
                            destructiveButtonIndex: DESTRUCTIVE_INDEX,
                            //title: "Testing ActionSheet"
                        },
                        buttonIndex => {
                            if (buttonIndex === 0) {
                                
                                Alert.alert(  
                                    'Supprimer',  
                                    'Vous êtes sur que vous voulez supprimer ce rdv?',  
                                    [  
                                        {  
                                            text: 'Annuler',  
                                            onPress: () => console.log('Cancel Pressed'),  
                                            style: 'cancel',  
                                        },  
                                        {text: 'Oui', onPress:()=> Prot()},  
                                    ]  
                                );  
                                    
                                   
                            }
                        }
                    )}>
                        <Text style={styles.textStyle}> Actions</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    console.log(Data, "<><><><><><><><")
    return (

        <View>
            {
                (Data.rdvs)
                    ?
                    <FlatList
                        data={Data.rdvs}
                        renderItem={({ item }) => <Item item={item[0]} />}
                        keyExtractor={item => item[0].id.toString()}
                    />
                    :
                    <Text style={{ alignItems: 'center', justifyContent: 'center' }}>Veuillez patienter Svp</Text>
            }

        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    title1: {
        fontSize: 15,

    },
    textStyle: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 14,
    },
    centeredView: {
        flex: 1,
        //justifyContent: "center",
        //alignItems: "center",
        //marginBottom: 60,
        //marginTop:30,
        backgroundColor: 'white'
    },
});