import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, Button, StyleSheet, FlatList, Image, TouchableHighlight, TouchableOpacity, Modal, Alert, ActivityIndicator } from 'react-native'
import { ActionSheet } from "native-base";
import Dialog from "react-native-dialog";
import { url1, url2 } from '../../Navigation/GlobalUrl';

//import * as NavigationService from '../Navigation/NavigationService';
var BUTTONS = [ { text: "Documents", icon: "document",iconColor:"#16a085" },{ text: "Annuler", icon: "trash",iconColor:"#e74c3c" },{ text: "Fermer", icon: "close",iconColor:"black" }];
var DESTRUCTIVE_INDEX = 2;
var CANCEL_INDEX = 1;
export default function MrdvScreen({ navigation }) {
    const [Data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [Dial, setDial] = useState('');
    const [loading, setLoading] = useState('');
    const[profess,setProfess]=useState('');
    const[date_rdv,setDaterdv]=useState('');
    const[statut,setStatut]=useState('');
    const[service,setService]=useState('');
    const[adress_rdv,setAdress]=useState('');
    const[create_rdv,setCreaterdv]=useState('');
    const[salle,setSalle]=useState('');
    useEffect(() => {
        fetch(url1)
        return fetch(url2+'/api/profil?uid=126&get_rdv')
            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)
                setData(res)
                setLoading(false)
            })
            .done();
    }, []);
    function rot(){
        fetch(url1)
     return fetch(url2+'/api/delete_rdv', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: JSON.stringify({
        uid:"26",
        'mode':'supprimer_rdv',
        'rdv': '337',

        
      })
    })

      .then((response) => response.json())
      .then((res) => {
        
        console.log("*********success***********")
        setData(res);
        
      })
      .done();
    }

    function Item({ item }) {
        return (
            <View style={styles.item}>
                
                <View style={{ flexDirection: "row", justifyContent: 'space-between'}}>
                    <Text style={{...styles.title,flex:3}}>RDV avec</Text>
                    <Text style={{...styles.title,flex:1}}>:</Text>
                    <Text style={{...styles.title1,flex:3}}>{item.profess}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text style={{...styles.title,flex:3}}>Date du RDV</Text>
                    <Text style={{...styles.title,flex:1}}>:</Text>
                    <Text style={{...styles.title1,flex:3}}>{item.date_rdv}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text style={{...styles.title,flex:3}}>Statut</Text>
                    <Text style={{...styles.title,flex:1}}>:</Text>
                    <Text style={{...styles.title1,flex:3}}>{item.statut}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between',marginBottom:7 }}>
                    <Text style={{...styles.title,flex:3}}>Adressé par</Text>
                    <Text style={{...styles.title,flex:1}}>:</Text>
                    <Text style={{...styles.title1,flex:3}}>{item.name}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableHighlight
                        style={{ backgroundColor: '#3498db', width: 90, borderRadius: 5,justifyContent:'center' }}
                        onPress={() => {
                            setModalVisible(true);
                            setProfess(item.profess);
                            setDaterdv(item.date_rdv);
                            setStatut(item.statut);
                            setService(item.service);
                            setAdress(item.adress_rdv);
                            setCreaterdv(item.create_rdv);
                            setSalle(item.salle);
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
                            if (buttonIndex === 1) {
                                
                                Alert.alert(  
                                    'Annuler',  
                                    'Etes-vous sûr(e) de vouloir annuler ce RDV ?',  
                                    [  
                                        {  
                                            text: 'Annuler',  
                                            onPress: () => console.log('Cancel Pressed'),  
                                            style: 'cancel',  
                                        },  
                                        {text: 'Oui', onPress:()=> rot()}]  
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
    let displayLoading=() => {
        if (loading) {
          //Loading View while data is loading
          return (
            <View style={{ flex: 1, alignItems:'center', justifyContent:'center' }}>
              <ActivityIndicator size="large" color="#1E79C5" />
              
            </View>
          );
        }
      }
    return (
        
        
        <View style={{ flex: 1, justifyContent:'center' }} >
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
                            <Text style={styles.title1}>{profess}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text style={styles.title}>Date du RDV: </Text>
                            <Text style={styles.title1}>{date_rdv}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text style={styles.title}>Statut: </Text>
                            <Text style={styles.title1}>{statut}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text style={styles.title}>Service: </Text>
                            <Text style={styles.title1}>{service}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text style={styles.title}>Adresse du RDV: </Text>
                            <Text style={styles.title1}>{adress_rdv}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text style={styles.title}>Date de création: </Text>
                            <Text style={styles.title1}>{create_rdv}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text style={styles.title}>Salle: </Text>
                            <Text style={styles.title1}>{salle}</Text>
                        </View>
                        
                    </View>
                </Modal>
            {
                (Data.rdvs)
                    ?
                    <FlatList
                        data={Data.rdvs}
                        renderItem={({ item }) => <Item item={item[0]} />}
                        keyExtractor={item => item[0].id.toString()}
                        extraData={Data}
                    />
                    :
                    displayLoading()
                    
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
        padding: 15,
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