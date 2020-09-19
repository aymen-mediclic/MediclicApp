import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, Button, StyleSheet, FlatList, Image,Picker, TouchableHighlight, TouchableOpacity, Alert, ActivityIndicator, StatusBar, ViewPropTypes } from 'react-native'
import { ActionSheet } from "native-base";
import Dialog from "react-native-dialog";
import { url1, url2 } from '../../Navigation/GlobalUrl';
import Fontisto from 'react-native-vector-icons/Fontisto';
import M from 'react-native-vector-icons/MaterialCommunityIcons';
import F from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import { TextInput } from 'react-native-paper';
import { ImagePicker } from 'expo';
import * as DocumentPicker from 'expo-document-picker';
import FilterRdv from './FilterRdv';
//import * as NavigationService from '../Navigation/NavigationService';
var BUTTONS = [ { text: "Documents", icon: "document",iconColor:"#16a085" },{ text: "Annuler", icon: "trash",iconColor:"#e74c3c" },{ text: "Fermer", icon: "close",iconColor:"black" }];
var DESTRUCTIVE_INDEX = 2;
var CANCEL_INDEX = 1;
export default function MrdvScreen({ navigation }) {
    const [Data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalVisible4, setModalVisible4] = useState(false);
    const [Dial, setDial] = useState('');
    const [loading, setLoading] = useState(true);
    const[profess,setProfess]=useState('');
    const[responsable,setResponsable]=useState('');
    const[specialite,setSpecialite]=useState('');
    const[duree,setDuree]=useState('');
    const[source,setSource]=useState('');
    const[date_rdv,setDaterdv]=useState('');
    const[adresser_par,setAdressP]=useState('');
    const[tel,setTel]=useState('');
    const[context,setContext]=useState('');
    const[statut,setStatut]=useState('');
    const[service,setService]=useState('');
    const[adress_rdv,setAdress]=useState('');
    const[create_rdv,setCreaterdv]=useState('');
    const[salle,setSalle]=useState('');
    const[typeR,setTypeR]=useState('');
    const[selectedValue,setSelectedValue]=useState('0');

    const[image,setImage]=useState(null);
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
        uid:"126",
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
   let _pickDocument = async () => {
	    let result = await DocumentPicker.getDocumentAsync({});
		  alert(result.uri);
      console.log(result);
	}

   let _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    alert(result.uri);
    console.log(result)

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

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
             <Modal isVisible={modalVisible1} animationType='slide' >
             <TouchableOpacity style={{ alignSelf:'flex-end', height:35, width:35,borderRadius:35/2,backgroundColor:'#1E79C5',marginRight:'12%',padding:10}} onPress={() => setModalVisible1(false)}>
                  <Fontisto color='white' size={15} name={'close-a'} style={{ alignSelf: 'center',alignItems:'center',justifyContent:'center'}} />
                </TouchableOpacity>
           <View style={styles.modal} >
           <Text style={{height:40,marginBottom:'2%',fontWeight:'bold',padding:5,justifyContent:'center',textAlign:'center',color:'white',backgroundColor:'#1E79C5',fontSize:19}}>Actions</Text>
                  <TouchableOpacity style={{ flexDirection:'row',alignItems:'center',marginHorizontal:'3%',marginVertical:'2%'}} onPress={() => {setModalVisible1(false);setModalVisible3(true);}}>
                  <M color='#1abc9c' size={22} name={'file-document'} />
                    <Text style={{ fontSize: 18,marginLeft:10 }}>Ajouter un document</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flexDirection:'row',alignItems:'center',marginHorizontal:'3%',marginVertical:'2%'}} onPress={() => {setModalVisible1(false);setModalVisible2(true)} }>
                  <M color='red' size={22} name={'cancel'}/>
                    <Text style={{ fontSize: 18,marginLeft:10 }}>Annuler mon rendez-vous</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flexDirection:'row',alignItems:'center',marginHorizontal:'4%',marginVertical:'2%'}} onPress={() =>  setModalVisible1(false) }>
                  <F color='#2980b9' size={22} name={'video'}/>
                    <Text style={{ fontSize: 18,marginLeft:10 }}>Visio</Text>
                  </TouchableOpacity>
              </View>
          </Modal>

          <Modal isVisible={modalVisible2} animationType='slide' transparent={true} >
             <TouchableOpacity style={{ alignSelf:'flex-end', height:35, width:35,borderRadius:35/2,backgroundColor:'#1E79C5',marginRight:'12%',padding:10}} onPress={() => setModalVisible2(false)}>
                  <Fontisto color='white' size={15} name={'close-a'} style={{ alignSelf: 'center',alignItems:'center',justifyContent:'center'}} />
                </TouchableOpacity>
           <View style={styles.modal} >
           <Text style={{height:40,marginBottom:'2%',fontWeight:'bold',padding:5,justifyContent:'center',textAlign:'center',color:'white',backgroundColor:'#1E79C5',fontSize:19}}>Annuler mon RDV</Text>
           <Text style={{ fontSize: 18,marginLeft:10,marginTop:'15%' }}>Etes-vous sûr(e) de vouloir annuler ce rendez-vous ?</Text>
                  <TouchableOpacity style={{alignSelf:'flex-end',borderRadius:3,marginHorizontal:'3%',marginTop:'27%',marginBottom:2,width:80,height:20,backgroundColor:'#1E79C5'}} onPress={() =>  {setModalVisible2(false); rot()} }>
                    <Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:16}}>Ok</Text>
                  </TouchableOpacity>
              </View>
          </Modal>
          <Modal isVisible={modalVisible3} animationType='slide' transparent={true} >
           <View style={styles.modal1} >
           <Text style={{height:40,marginBottom:'2%',fontWeight:'bold',padding:5,justifyContent:'center',textAlign:'center',color:'white',backgroundColor:'#1E79C5',fontSize:19}}>Ajouter un document</Text>
           <Text style={{ fontSize: 18,marginLeft:10,marginTop:'15%',fontWeight:'bold' }}>Document(*)</Text>
           <TouchableOpacity
          onPress={()=>_pickDocument()}
          style={{alignSelf:'center',margin:5,width:150,height:30,borderRadius:5,backgroundColor:'#1E79C5',justifyContent:'center'}}>
            <Text style={{color:'white',alignSelf:'center'}}>Choisir un document</Text>
            </TouchableOpacity>
           
           <Text style={{ fontSize: 18,marginLeft:10,marginTop:10,fontWeight:'bold' }}>Catégorie(*)</Text>
           <View style={styles.Picker}>
           <Picker
                    mode='dropdown'
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => { this.functionOne(itemValue, "speciality"); }}
                >
                    <Picker.Item label="Séléctionner une catégorie" value="0" />
                    <Picker.Item label="Ordonnance de médicament(s)" value="1" />
                    <Picker.Item label="Compte rendu" value="2" />
                    <Picker.Item label="Ordonnance d'analyse(s)" value="3" />
                    <Picker.Item label="Résultat d'analyse(s)" value="4" />
                    <Picker.Item label="Ordonnance d'examen(s)" value="5" />
                    <Picker.Item label="Résultat d'examen(s)" value="6" />
                    <Picker.Item label="Consigne" value="5" />
                    <Picker.Item label="Autre" value="5" />
                </Picker>
                </View>
                  <View style={{flexDirection:'row',alignSelf:'flex-end',marginVertical:'3%'}}>
                  
                  <TouchableOpacity style={{borderRadius:3,marginHorizontal:5,marginTop:20,marginBottom:5,width:80,height:30,backgroundColor:'#FFC617',justifyContent:'center'}} onPress={() =>  {setModalVisible3(false);} }>
                    <Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:15}}>Annuler</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{borderRadius:3,justifyContent:'center',marginHorizontal:5,marginTop:20,marginBottom:5,width:80,height:30,backgroundColor:'#1E79C5'}} onPress={() =>  {setModalVisible3(false);} }>
                    <Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:15}}>Ajouter</Text>
                  </TouchableOpacity>
                  </View>
              </View>
          </Modal>

            <Modal
                    
                    isVisible={modalVisible}
                >
                    <View style={{ flexDirection: "row", justifyContent: 'space-between'}}>
                                        <Text style={{flex:1,height:40,padding:10,fontSize:17,fontWeight:'bold',textAlign:'center',color:'white',backgroundColor:'#1E79C5'}}>RDV avec {profess}</Text>
                      </View>
                    <ScrollView contentContainerStyle={styles.centeredView}>
                    
                        <Text style={styles.title2}>Informations sur le Rendez-Vous</Text>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:3}}>
                                        <Text style={[styles.title,{flex:3}]}>Professionnel</Text>
                                        <Text style={[styles.title,{flex:1}]}>:</Text>
                                        <Text style={[styles.title1,{flex:3}]}>{profess}</Text>
                        </View>
                        {context!='medecin'&&
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:3}}>
                                        <Text style={[styles.title,{flex:3}]}>Medecin responsable</Text>
                                        <Text style={[styles.title,{flex:1}]}>:</Text>
                                        <Text style={[styles.title1,{flex:3}]}>{responsable}</Text>
                        </View>
                        }
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:3}}>
                                        <Text style={[styles.title,{flex:3}]}>Spécialité</Text>
                                        <Text style={[styles.title,{flex:1}]}>:</Text>
                                        <Text style={[styles.title1,{flex:3}]}>{specialite}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:3}}>
                                        <Text style={[styles.title,{flex:3}]}>N° Télephone</Text>
                                        <Text style={[styles.title,{flex:1}]}>:</Text>
                                        <Text style={[styles.title1,{flex:3}]}>{tel}</Text>
                        </View>
                        {context!='medecin'&&
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:3}}>
                                        <Text style={[styles.title,{flex:3}]}>Service</Text>
                                        <Text style={[styles.title,{flex:1}]}>:</Text>
                                        <Text style={[styles.title1,{flex:3}]}>{service}</Text>
                        </View>
                        }
                        {context!='medecin'&&
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:3}}>
                                        <Text style={[styles.title,{flex:3}]}>Salle</Text>
                                        <Text style={[styles.title,{flex:1}]}>:</Text>
                                        <Text style={[styles.title1,{flex:3}]}>{salle}</Text>
                        </View>
                        }
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:3}}>
                                        <Text style={[styles.title,{flex:3}]}>Date de création</Text>
                                        <Text style={[styles.title,{flex:1}]}>:</Text>
                                        <Text style={[styles.title1,{flex:3}]}>{create_rdv}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:3}}>
                                        <Text style={[styles.title,{flex:3}]}>Date du RDV</Text>
                                        <Text style={[styles.title,{flex:1}]}>:</Text>
                                        <Text style={[styles.title1,{flex:3}]}>{date_rdv}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:3}}>
                                        <Text style={[styles.title,{flex:3}]}>Durée(en h)</Text>
                                        <Text style={[styles.title,{flex:1}]}>:</Text>
                                        <Text style={[styles.title1,{flex:3}]}>{duree}</Text>
                        </View> 
                        <Text style={styles.title2}>Détails du Rendez-Vous</Text>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:3}}>
                                        <Text style={[styles.title,{flex:3}]}>Statut</Text>
                                        <Text style={[styles.title,{flex:1}]}>:</Text>
                                        <Text style={[styles.title1,{flex:3}]}>{statut}</Text>
                        </View> 
                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                        <Text style={[styles.title,{flex:3}]}>Statut</Text>
                                        <Text style={[styles.title,{flex:1}]}>:</Text>
                                        {statut==='annule'&&
                                        <Text style={[styles.title1,{flex:3}]}>Annulé</Text>}
                                        {statut==='passé'&&
                                        <Text style={[styles.title1,{flex:3}]}>Passé</Text>
                                        }
                                    </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                        <Text style={[styles.title,{flex:3}]}>Type de RDV</Text>
                                        <Text style={[styles.title,{flex:1}]}>:</Text>
                                        {typeR==='C'&&
                                        <Text style={[styles.title1,{flex:3}]}>Cabinet</Text>}
                                        {typeR==='D'&&
                                        <Text style={[styles.title1,{flex:3}]}>Domicile</Text>}
                                        {typeR==='V'&&
                                        <Text style={[styles.title1,{flex:3}]}>Téléconsultation</Text>
                                        }
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:3}}>
                                        <Text style={[styles.title,{flex:3}]}>Source</Text>
                                        <Text style={[styles.title,{flex:1}]}>:</Text>
                                        <Text style={[styles.title1,{flex:3}]}>{source}</Text>
                        </View> 
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:3}}>
                                        <Text style={[styles.title,{flex:3}]}>Adresser par</Text>
                                        <Text style={[styles.title,{flex:1}]}>:</Text>
                                        <Text style={[styles.title1,{flex:3}]}>{adresser_par}</Text>
                        </View> 
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:3}}>
                                        <Text style={[styles.title,{flex:3}]}>Adresse du RDV</Text>
                                        <Text style={[styles.title,{flex:1}]}>:</Text>
                                        <Text style={[styles.title1,{flex:3}]}>{adress_rdv}</Text>
                        </View> 
                        
                    </ScrollView>
                    <View style={{ backgroundColor: "white",marginBottom:"5%",height:40,borderTopColor:'#bdc3c7',borderTopWidth:1 }}>
                    <TouchableOpacity
                            style={{ backgroundColor: "#1E79C5", alignSelf:'flex-end',backgroundColor: "orange", width: 100, height: 30, margin: 5, justifyContent: 'center',borderRadius:5}}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >

                            <Text style={styles.textStyle}>Fermer</Text>
                        </TouchableOpacity>
                        </View>
                        
                </Modal>
                <Modal
                    isVisible={modalVisible4}
                    animationIn  = "slideInLeft"
          animationOut = "slideOutLeft"
          style        = {{margin: 0}}
                >
                    <FilterRdv/>
                </Modal>
                <TouchableOpacity style={{backgroundColor:'orange'}}  onPress={() => {
                                setModalVisible4(true);
                            }}>
                    <Text>Filter</Text>
                </TouchableOpacity>
            {
                (Data.rdvs)
                    ?
                    <FlatList
                        data={Data.rdvs}
                        renderItem={({ item }) => 
                        {
                            item = item[0]
                            return(
                                <View style={styles.item}>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between'}}>
                                        <Text style={{flex:1,height:40,padding:10,marginBottom:'2%',fontWeight:'bold',textAlign:'center',color:'white',backgroundColor:'#1E79C5'}}>RDV avec  {item.profess}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:'1%'}}>
                                        <Text style={[styles.title,{flex:3}]}>Spécialité</Text>
                                        <Text style={[styles.title,{flex:1}]}>:</Text>
                                        <Text style={[styles.title1,{flex:3}]}>{item.speciality}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                        <Text style={[styles.title,{flex:3}]}>Date du RDV</Text>
                                        <Text style={[styles.title,{flex:1}]}>:</Text>
                                        <Text style={[styles.title1,{flex:3}]}>{item.date_rdv}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                        <Text style={[styles.title,{flex:3}]}>Statut</Text>
                                        <Text style={[styles.title,{flex:1}]}>:</Text>
                                        {item.statut==='annule'&&
                                        <Text style={[styles.title1,{flex:3}]}>Annulé</Text>}
                                        {item.statut==='passé'&&
                                        <Text style={[styles.title1,{flex:3}]}>Passé</Text>
                                        }
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:'2%' }}>
                                        <Text style={[styles.title,{flex:3}]}>Adressé par</Text>
                                        <Text style={[styles.title,{flex:1}]}>:</Text>
                                        <Text style={[styles.title1,{flex:3}]}>{item.adresser_par}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <TouchableOpacity
                                            style={{ backgroundColor: '#FFC617', width: 90, borderRadius: 5,padding:5,marginHorizontal:15 }}
                                            onPress={() => {
                                                setModalVisible(true);
                                                setProfess(item.profess);
                                                setResponsable(item.responsable);
                                                setSpecialite(item.speciality);
                                                setTel(item.tel);
                                                setDaterdv(item.date_rdv);
                                                setStatut(item.statut);
                                                setService(item.service);
                                                setAdress(item.adress_rdv);
                                                setCreaterdv(item.create_rdv);
                                                setSalle(item.salle);
                                                setDuree(item.duree);
                                                setSource(item.source);
                                                setAdressP(item.adresser_par);
                                                setTypeR(item.type_rdv);
                                                setContext(item.context);
                                            }}
                                        >
                                            <Text style={styles.textStyle}>Détails</Text>
                                        </TouchableOpacity>
                                    
                                        <TouchableOpacity 
                                            style={{ backgroundColor: '#FFC617', width: 90,padding:5, borderRadius: 5,marginHorizontal:15 }} 
                                            onPress={() =>  setModalVisible1(true)
                                            /*ActionSheet.show(
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
                        )}}
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
        height: '40%',
        borderRadius: 5,
        //borderWidth:1
      },
      modal1: {
        marginTop:3,
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '95%',
        height: '60%',
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
    title2: {
        fontSize: 17,
        fontWeight: 'bold',
        alignSelf:"center",
        color:'#1E79C5',
        marginVertical:10
    },
    textStyle: {
        color: 'black',
        alignSelf: 'center',
        fontSize: 14,
        fontWeight:"bold"
    },
    centeredView: {
        //flex: 1,
        //justifyContent: "center",
        //alignItems: "center",
        //marginBottom: 60,
        //marginTop:30,
        backgroundColor: 'white',
    },
    Picker: {
        borderColor:'#3498db', borderWidth:1,
        height:40,justifyContent:'center',
        marginHorizontal:10,marginVertical:10,
        borderRadius:5,
        
    },
});