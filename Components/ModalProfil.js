import React, { useEffect, useState } from 'react'
import { View, TextInput, Button, StyleSheet, Text, Alert, TouchableOpacity, ScrollView, AsyncStorage, checkedIcon, Modal, ActivityIndicator } from 'react-native'
import DatePicker from 'react-native-datepicker';
import { RadioButton } from 'react-native-paper';
import moment from 'moment';
import 'moment/locale/fr'
import * as NavigationService from '../../Navigation/NavigationService';
import { url1, url2 } from '../../Navigation/GlobalUrl';
moment.locale('fr')
export default class ModalP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom : '',
            preNom: '',
            civility : '',
            niassance: '',
            cin :'',
            mutuelle: '',
            adresse: '',
            ville : '',
            Error: true, Error1: true, Error2: true,
            Error3: true, Error4: true, Error5: true,
            color: '#dfe4ea', color1: '#dfe4ea', color2: '#dfe4ea',
            color3: '#dfe4ea', color4: '#dfe4ea', color5: '#dfe4ea',
        };
    }
    render(){
        return(
            <View style={styles.modalView}>

            <Text style={styles.head}>Modifier le profil</Text>

            <ScrollView>
                <RadioButton.Group
                    onValueChange={civility => setCivility(civility)}
                    value={civility}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.text}>Civilité:</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 30, marginLeft: 10 }}>
                            <RadioButton value="Femme" />
                            <Text style={{ fontSize: 16 }} >Madame</Text>

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 30, marginLeft: 10 }}>
                            <RadioButton value="Monsieur" />
                            <Text style={{ fontSize: 16 }} >Monsieur</Text>

                        </View>
                    </View>
                </RadioButton.Group>

                <Text style={styles.text}>Nom :</Text>
                <TextInput
                    style={{...styles.text_input,borderColor:color}}
                    placeholder="nom"
                    //value={nom}
                    onChangeText={(nom) => setNom(nom) }/>
                    
                    
                
                 {Error == false ? (
                    <Text style={{color:'red',marginLeft:20}} >
                         Veuillez renseigner votre nom.
                    </Text>
                     ) : null}

                <Text style={styles.text}>Prénom :</Text>
                <TextInput
                    style={{...styles.text_input,borderColor:color1}}
                    placeholder="Prénom"
                    //value={preNom}
                    onChangeText={(preNom) => { if (preNom.trim() != 0) {
                        setPreNom(preNom),setError1(true),setColor1('#2ecc71') }
                    
                        else {
                            setPreNom(preNom),setError1(false),setColor1('red')
                        } }}
                />

                {Error1 == false ? (
                    <Text style={{color:'red',marginLeft:20}} >
                         Veuillez renseigner votre Prénom .
                    </Text>
                     ) : null}

                <Text style={styles.text}>Date de naissance :</Text>
                <DatePicker
                    style={{width:"90%",alignSelf:'center'}}
                    date={niassance} //initial date from state
                    mode="date" //The enum of date, datetime and time
                    locale='es'
                    //placeholder="Sélectionner une date"
                    format="DD-MM-YYYY"
                    minDate="01-01-1940"
                    maxDate="01-01-2019"
                    confirmBtnText="Confirmer"
                    cancelBtnText="Annuler"
                    showIcon={false}
                    customStyles={{
                        dateInput: {
                            //borderWidth: 0,


                            alignSelf: 'center',
                            height: 30,
                            width: "90%",
                            borderColor: '#dfe4ea',
                            borderWidth: 1,
                            borderRadius: 5,
                            paddingLeft: 10,
                            backgroundColor: 'white',
                            marginBottom: 15,
                            shadowColor: "grey",
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                            shadowOffset: {
                                height: 1,
                                width: 0,
                            },
                            elevation: 5,
                        }
                        ,
                        dateText: {
                            fontSize: 14,
                            alignSelf: 'flex-start',
                        }
                    }}
                    /*customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}*/
                    onDateChange={(niassance) => { setNiassance(niassance) }}
                />


                <Text style={styles.text}>N° CIN :</Text>
                <TextInput
                    style={{...styles.text_input,borderColor:color2}}
                    placeholder="N° CIN"
                    //value={Data.cin}
                    onChangeText={(cin) => { if (cin.trim() != 0) {
                        setCin(cin),setError2(true),setColor2('#2ecc71') }
                    
                        else {
                            setCin(cin),setError2(false),setColor2('red')
                        }}}
                />
                {Error2 == false ? (
                    <Text style={{color:'red',marginLeft:20}} >
                         Veuillez renseigner votre N° de CIN .
                    </Text>
                     ) : null}

                <Text style={styles.text}>N° Mutuelle :</Text>
                <TextInput
                    style={{...styles.text_input,borderColor:color3}}
                    placeholder="N° Mutuelle"
                    //value={Data.mutuelle}
                    onChangeText={(mutuelle) => {if (mutuelle.trim() != 0) {
                        setMutuelle(mutuelle),setError3(true),setColor3('#2ecc71') }
                    
                        else {
                            setMutuelle(mutuelle),setError3(false),setColor3('red')
                        }}}
                />
                {Error3 == false ? (
                    <Text style={{color:'red',marginLeft:20}} >
                         Veuillez renseigner votre N° de mutuelle .
                    </Text>
                     ) : null}
                <Text style={styles.text}>Adresse :</Text>
                <TextInput
                    style={{...styles.text_input,borderColor:color4}}
                    placeholder="Adresse"
                    //value={Data.adress}
                    onChangeText={(adresse) => {if (adresse.trim() != 0) {
                        setAdresse(adresse),setError4(true),setColor4('#2ecc71') }
                    
                        else {
                            setAdresse(adresse),setError4(false),setColor4('red')
                        }}}
                />
                {Error4 == false ? (
                    <Text style={{color:'red',marginLeft:20}}>
                         Veuillez renseigner votre adresse.
                    </Text>
                     ) : null}

                <Text style={styles.text}>Ville :</Text>
                <TextInput
                    style={{...styles.text_input,borderColor:color5}}
                    placeholder="Ville "
                    //value={Data.ville}
                    onChangeText={(ville) => {if (ville.trim() != 0) {
                        setVille(ville),setError5(true),setColor5('#2ecc71') }
                    
                        else {
                            setVille(ville),setError5(false),setColor5('red')
                        }}}
                />
                {Error5 == false ? (
                    <Text style={{color:'red',marginLeft:20}} >
                         Veuillez renseigner votre ville.
                    </Text>
                     ) : null}
            </ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: "flex-end", justifyContent: "space-between", backgroundColor: '#ecf0f1' }}>
                <TouchableOpacity
                    style={{ ...styles.openButton, backgroundColor: "#1E79C5", width: 150, height: 30, margin: 5, justifyContent: 'center' }}
                    onPress={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <Text style={styles.textStyle}>Fermer</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ ...styles.openButton, backgroundColor: "#1E79C5", width: 150, height: 30, margin: 5, justifyContent: 'center' }}
                    onPress={() => checkError()}
                >
                    <Text style={styles.textStyle}>Modifier</Text>
                </TouchableOpacity>
            </View>
        </View>
            
        )
    }
}
const styles = StyleSheet.create({
    main_container: {
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 10,
        justifyContent: "space-between",
        paddingRight: 10,
    },
    ctr: {

        paddingLeft: 5,
        height: '89%',
        width: '90%',
        alignSelf: 'center',
        //justifyContent: 'center',
        backgroundColor: 'white',
        marginTop: 5,
        marginBottom: 5,
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
    text: {
        margin: 5,
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#2c3e50'
    },
    text1: {
        fontSize: 16
    },
    btn: {
        borderRadius: 30 / 2,
        backgroundColor: 'orange',
        color: 'white',
        width: 30,
        height: 30,
        //alignSelf: 'flex-end',
        //marginRight: 10,
        //marginBottom: 10,
        //marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        elevation: 5,
    },
    text_input: {
        alignSelf: 'center',
        height: 30,
        width: "90%",
        //borderColor: '#dfe4ea',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        backgroundColor: 'white',
        marginBottom: 15,
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        elevation: 5,
    },
    // centeredView: {
    //flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    //marginTop: 10
    // },
    modalView: {
        flex: 1,
        //margin: 10,
        backgroundColor: "white",
        //borderRadius: 20,
        //padding:10,
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
        borderRadius: 5,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: 'center',
    },
    head: {
        fontSize: 18, fontWeight: 'bold', alignSelf: 'center',
        paddingTop: 5,
        textAlign: 'center', margin: 10, backgroundColor: '#ecf0f1',
        width: '100%', height: 40, marginTop: 0
    }

})
