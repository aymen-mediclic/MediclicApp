import React, { useEffect, useState } from 'react'
import { View, TextInput, Button, StyleSheet, Text, Alert, TouchableOpacity, ScrollView, AsyncStorage, checkedIcon, Modal, FlatList } from 'react-native'
import DatePicker from 'react-native-datepicker';
import { RadioButton } from 'react-native-paper';
import moment from 'moment';
import 'moment/locale/fr'
import * as NavigationService from '../../Navigation/NavigationService';
moment.locale('fr')
export default function App({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [Data, setData] = useState([]);
    

    // MODIFIED

    const [nom, setNom] = useState("")
    const [preNom, setPreNom] = useState("")
    const [civility, setCivility] = useState("")
    const [niassance, setNiassance] = useState("")
    const [cin, setCin] = useState("")
    const [mutuelle, setMutuelle] = useState("")
    const [adresse, setAdresse] = useState("")
    const [ville, setVille] = useState("")

    useEffect(() => {

        fetch('http://51.91.249.185:8069/web/login?db=new_installation')
        return fetch('http://51.91.249.185:8069/api/profil?uid=85&get_profil')
            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)
                
                AsyncStorage.setItem("userInfo",JSON.stringify(res))
                setData(res)
            })
            .done();
    }, []);

    const update = () => {



        let bodyData = JSON.stringify({
            uid: "85",
            adresse: adresse,
            Num_CIN: cin,
            nom: nom,
            prenom: preNom,
            date_nais: niassance,
            civilite: civility,
            Num_mut: mutuelle,
            ville: ville
        })


        console.log(bodyData, "-------------------")

        fetch('http://51.91.249.185:8069/web/login?db=new_installation')
        fetch('http://51.91.249.185:8069/api/update_profil', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: bodyData
        })

            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)
                
               
                console.log("*********success***********")

                setData({

                    adress: adresse,
                    cin: cin,
                    nom: nom,
                    prenom: preNom,
                    date_naissance: niassance,
                    civilite: civility,
                    mutuelle: mutuelle,
                    Num_mut: "20555",
                    ville: ville


                });
                setModalVisible(false)
            })
            .done();
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }} >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}>
                <View style={styles.modalView}>


                    <TouchableOpacity
                        style={{ borderRadius:5,height:20, backgroundColor: "#2196F3" }}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <Text style={styles.textStyle}>Fermer</Text>
                    </TouchableOpacity>
                    <ScrollView>
                        <RadioButton.Group
                            onValueChange={civility => setCivility( civility)}
                            value={civility}
                        >
                            <Text style={styles.text}>Civilité:</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ marginRight: 30,marginLeft:10,marginTop:5 }}>
                                    <Text>Madame</Text>
                                    <RadioButton value="Femme" />
                                </View>
                                <View style={{ marginRight: 30,marginLeft:10,marginTop:5 }}>
                                    
                                    <Text >Monsieur</Text>
                                    <RadioButton value="Monsieur" />
                                </View>
                            </View>
                        </RadioButton.Group>

                        <Text style={styles.text}>Nom:</Text>
                        <TextInput
                            style={styles.text_input}
                            placeholder="nom"
                            onChangeText={(nom) => { setNom(nom) }}
                        />

                        <Text style={styles.text}>Prénom:</Text>
                        <TextInput
                            style={styles.text_input}
                            placeholder="Prénom"
                            onChangeText={(preNom) => { setPreNom(preNom) }}
                        />

                       

                        <Text style={styles.text}>Date de naissance:</Text>
                        <DatePicker
                            style={{ width: 200 }}
                            date={niassance} //initial date from state
                            mode="date" //The enum of date, datetime and time
                            //locale="fr"
                            placeholder="selectionner une date"
                            format="DD-MM-YYYY"
                            minDate="01-01-1940"
                            maxDate="01-01-2019"
                            confirmBtnText="Confirmer"
                            cancelBtnText="Annuler"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                            }}
                            onDateChange={(niassance) => { setNiassance(niassance) }}
                        />


                        <Text style={styles.text}>N° CIN :</Text>
                        <TextInput
                            style={styles.text_input}
                            placeholder="N° CIN"
                            onChangeText={(cin) => setCin(cin)}
                        />

                        <Text style={styles.text}>N° Mutuelle :</Text>
                        <TextInput
                            style={styles.text_input}
                            placeholder="N° Mutuelle"
                            onChangeText={(mutuelle) => setMutuelle(mutuelle)}
                        />

                        <Text style={styles.text}>Adresse :</Text>
                        <TextInput
                            style={styles.text_input}
                            placeholder="Adresse"
                            onChangeText={(adresse) => setAdresse(adresse)}
                        />

                        <Text style={styles.text}>Ville :</Text>
                        <TextInput
                            style={styles.text_input}
                            placeholder="Ville "
                            onChangeText={(ville) => setVille(ville)}
                        />

                        <TouchableOpacity
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => update()}
                        >
                            <Text style={styles.textStyle}>Modifier</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

            </Modal>
            <TouchableOpacity style={styles.btn}
                onPress={async() => {
                    try{
                        await AsyncStorage.removeItem("user")
                        await AsyncStorage.removeItem("userInfo")
                        console.log("LOgout Pres")
                    }catch(error){console.log(error, "---------ON LOGOUT------------")}
                    

                    
                        NavigationService.navigate('Mediclic')
                      
                }}>
                <Text style={{ color: 'white', fontSize: 15 }}>log out</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}
                onPress={() => {
                    setModalVisible(true);
                }}>
                <Text style={{ color: 'white', fontSize: 15 }}>Modifier mon profil </Text>
            </TouchableOpacity>
            <View >


                <View style={styles.main_container}>
                    <Text style={styles.text}>Nom:</Text>
                    <Text style={styles.text1}>{Data.nom}</Text>

                </View>
                <View style={styles.main_container}>
                    <Text style={styles.text}>Prénom:</Text>
                    <Text style={styles.text1}>{Data.prenom}</Text>
                </View>
                <View style={styles.main_container}>
                    <Text style={styles.text}>Civilité:</Text>
                    <Text style={styles.texte1}> {Data.civilite}</Text>

                </View>
                <View style={styles.main_container}>
                    <Text style={styles.text}>Date de naissance:</Text>
                    <Text style={styles.text1}> {Data.date_naissance}</Text>

                </View>
                <View style={styles.main_container}>
                    <Text style={styles.text}>N° CIN:</Text>
                    <Text style={styles.text1}> {Data.cin}</Text>

                </View>
                <View style={styles.main_container}>
                    <Text style={styles.text}>N° Mutuelle:</Text>
                    <Text style={styles.text1}> {Data.mutuelle}</Text>

                </View>
                <View style={styles.main_container}>
                    <Text style={styles.text}>Adresse:</Text>
                    <Text style={styles.text1}> {Data.adress}</Text>

                </View>
                <View style={styles.main_container}>
                    <Text style={styles.text}>Ville:</Text>
                    <Text style={styles.text1}> {Data.ville}</Text>

                </View>


            </View>

        </View>
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
    text_input: {
        alignSelf: 'center',
        height: 30,
        width: "90%",
        borderColor: '#dfe4ea',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        backgroundColor: 'white',
        marginBottom: 15,
    },
    // centeredView: {
    //flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    //marginTop: 10
    // },
    modalView: {
        //margin: 5,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        //alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    // modalText: {
    //     marginBottom: 15,
    //     textAlign: "center"
    // }
})
