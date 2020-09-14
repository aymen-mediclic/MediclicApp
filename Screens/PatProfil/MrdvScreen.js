import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, Button, StyleSheet, FlatList, Image, TouchableHighlight, TouchableOpacity, Alert, ActivityIndicator, StatusBar } from 'react-native'
import { ActionSheet } from "native-base";
import Dialog from "react-native-dialog";
import { url1, url2 } from '../../Navigation/GlobalUrl';
import Fontisto from 'react-native-vector-icons/Fontisto';
import M from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
//import * as NavigationService from '../Navigation/NavigationService';
var BUTTONS = [ { text: "Documents", icon: "document",iconColor:"#16a085" },{ text: "Annuler", icon: "trash",iconColor:"#e74c3c" },{ text: "Fermer", icon: "close",iconColor:"black" }];
var DESTRUCTIVE_INDEX = 2;
var CANCEL_INDEX = 1;
export default function MrdvScreen({ navigation }) {
    const [Data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
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
                    <Text style={{flex:1,height:40,padding:10,marginBottom:'2%',fontWeight:'bold',textAlign:'center',color:'white',backgroundColor:'#1E79C5'}}>RDV avec  {item.profess}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:'1%'}}>
                    <Text style={{...styles.title,flex:3}}>Spécialité</Text>
                    <Text style={{...styles.title,flex:1}}>:</Text>
                    <Text style={{...styles.title1,flex:3}}>{item.speciality}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text style={{...styles.title,flex:3}}>Date du RDV</Text>
                    <Text style={{...styles.title,flex:1}}>:</Text>
                    <Text style={{...styles.title1,flex:3}}>{item.date_rdv}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text style={{...styles.title,flex:3}}>Statut</Text>
                    <Text style={{...styles.title,flex:1}}>:</Text>
                    {item.statut==='annule'&&
                    <Text style={{...styles.title1,flex:3}}>Annulé</Text>}
                    {item.statut==='passé'&&
                    <Text style={{...styles.title1,flex:3}}>Passé</Text>
                    }
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:'2%' }}>
                    <Text style={{...styles.title,flex:3}}>Adressé par</Text>
                    <Text style={{...styles.title,flex:1}}>:</Text>
                    <Text style={{...styles.title1,flex:3}}>{item.adresser_par}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableHighlight
                        style={{ backgroundColor: '#FFC617', width: 90, borderRadius: 5,padding:5,marginHorizontal:15 }}
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
                   
                    <TouchableOpacity style={{ backgroundColor: '#FFC617', width: 90,padding:5, borderRadius: 5,marginHorizontal:15 }} onPress={() =>  setModalVisible1(true)/*ActionSheet.show(
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

                    )*/}>
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
             <Modal visible={modalVisible1} animationType='slide' transparent={true} >
             <TouchableOpacity style={{ alignSelf:'flex-end', height:35, width:35,borderRadius:35/2,backgroundColor:'#1E79C5',marginRight:'12%',padding:10}} onPress={() => setModalVisible1(false)}>
                  <Fontisto color='white' size={15} name={'close-a'} style={{ alignSelf: 'center',alignItems:'center',justifyContent:'center'}} />
                </TouchableOpacity>
           <View style={styles.modal} >
           <Text style={{height:40,marginBottom:'2%',fontWeight:'bold',padding:5,justifyContent:'center',textAlign:'center',color:'white',backgroundColor:'#1E79C5',fontSize:19}}>Actions</Text>
                  <TouchableOpacity style={{ flexDirection:'row',alignItems:'center',marginHorizontal:'3%',marginVertical:'2%'}} onPress={() => {this.setState({ modalOpen: false });NavigationService.navigate("Formulaire d'inscription")} }>
                  <M color='#1abc9c' size={22} name={'file-document'} />
                    <Text style={{ fontSize: 18,marginLeft:10 }}>Documents</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flexDirection:'row',alignItems:'center',marginHorizontal:'3%',marginVertical:'2%'}} onPress={() => {this.setState({ modalOpen: false });NavigationService.navigate("Inscription Professionel")} }>
                  <M color='red' size={22} name={'cancel'}/>
                    <Text style={{ fontSize: 18,marginLeft:10 }}>Annuler</Text>
                  </TouchableOpacity>
              </View>
          </Modal>
            <Modal
                    
                    isVisible={modalVisible}
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
    modal: {
        marginTop:3,
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '80%',
        height: '50%',
        borderRadius: 5,
        //borderWidth:1
      },
    item: {
        backgroundColor: 'white',
        paddingBottom: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 4,
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
                        height: 1,
            width: 0,
        },
        elevation: 5,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginHorizontal:15
    },
    title1: {
        fontSize: 15,
        marginHorizontal:15
    },
    textStyle: {
        color: 'black',
        alignSelf: 'center',
        fontSize: 14,
        fontWeight:"bold"
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