import React, { useEffect, useState } from 'react'
import { View, TextInput, Button, StyleSheet, Text, Alert, TouchableOpacity, ScrollView, AsyncStorage, checkedIcon, Modal, ActivityIndicator } from 'react-native'
import DatePicker from 'react-native-datepicker';
import { RadioButton } from 'react-native-paper';
import moment from 'moment';
import 'moment/locale/fr'
import * as NavigationService from '../../Navigation/NavigationService';
import { url1, url2 } from '../../Navigation/GlobalUrl';
import * as Progress from 'react-native-progress';
import { Tooltip } from 'react-native-elements';
moment.locale('fr')
export default function Mprofil(navigation, route, props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [Data, setData] = useState([]);
    //const { id} = route.params;
    //console.log(id)
    // MODIFIED

    const [civility, setCivility] = useState("")
    const [niassance, setNiassance] = useState("")
    const [nom, setNom] = useState(Data.nom)                 //osama somy
    const [cin, setCin] = useState(Data.cin) //osama somy
    const [preNom, setPreNom] = useState(Data.prenom) //osama somy
    const [mutuelle, setMutuelle] = useState(Data.mutuelle) //osama somy
    const [nmutuelle, setNmutuelle] = useState(Data.nom_mutuelle)
    const [adresse, setAdresse] = useState(Data.adress) //osama somy
    const [ville, setVille] = useState(Data.ville) //osama somy
    const [tel, setTel] = useState(Data.tel) //osama somy
    const [Error, setError] = useState(true)
    const [color, setColor] = useState('#dfe4ea')
    const [Error1, setError1] = useState(true)
    const [color1, setColor1] = useState('#dfe4ea')
    const [Error2, setError2] = useState(true)
    const [color2, setColor2] = useState('#dfe4ea')
    const [Error3, setError3] = useState(true)
    const [color3, setColor3] = useState('#dfe4ea')
    const [Error4, setError4] = useState(true)
    const [color4, setColor4] = useState('#dfe4ea')
    const [Error5, setError5] = useState(true)
    const [color5, setColor5] = useState('#dfe4ea')

    useEffect(() => {

        fetch(url1)
        return fetch(url2 + '/api/profil?uid=26&get_profil')
            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                // console.log(res.nom)

                AsyncStorage.setItem("userInfo", JSON.stringify(res))

                setData(res)              //
                console.log(res, "--------------------")
                
                setNom(res.nom) // 
                setCin(res.cin) // 
                setPreNom(res.prenom) //
                setMutuelle(res.mutuelle) // 
                setNmutuelle(res.nom_mutuelle) 
                setAdresse(res.adress) // 
                setVille(res.ville) // 
                setNiassance(res.date_naissance)
                setTel(res.tel) // 
                setCivility(res.civilite) // 
                setLoading(false) // 
                
            })
            .done();
    }, []);

    const update = () => {

        
        let bodyData = JSON.stringify({
            uid: "26",
            adresse: adresse,
            Num_CIN: cin,
            nom: nom,
            prenom: preNom,
            date_naissance: niassance,
            civilite: civility,
            Num_mut: mutuelle,
            Nom_mutuelle:nmutuelle,
            ville: ville,
            tel: tel
        })
        // console.log(bodyData, "-------------------")

        fetch(url1)
        fetch(url2 + '/api/update_profil', {
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
                console.log("==========AMA=========")
                console.log(res)
                let _data = {...Data}
                
                _data.adresse   = adresse,
                _data.Num_CIN   = cin,
                _data.nom       = nom,
                _data.prenom    = preNom,
                _data.date_naissance = niassance,
                _data.civilite  = civility,
                _data.Num_mut   = mutuelle,
                _data.mut   = nmutuelle,
                _data.ville     = ville,
                _data.tel       = tel
                
                setData(_data)

                console.log("*********success***********")
                setModalVisible(false)
            })
            .done();
    }
    let displayLoading = () => {
        if (loading) {
            //Loading View while data is loading
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color="#1E79C5" />

                </View>
            );
        }
    }
    const checkError = () => {
        if (nom == '') {
            setError(false), setColor('red')
        }

        else if (preNom == '') {
            setError1(false), setColor1('red'), setError(true), setColor('#2ecc71')
        }else if(tel == ''){
            setError2(false), setColor2('red'),setError1(true),setColor1('#2ecc71')
        }
        else {
            update()

        }


    }
    return (
        <ScrollView contentContainerStyle={{ backgroundColor: 'white' }} >
            {displayLoading()}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}>
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
                                    <RadioButton value="Madame" />
                                    <Text style={{ fontSize: 16 }} >Madame</Text>

                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 30, marginLeft: 10 }}>
                                    <RadioButton value="Monsieur" />
                                    <Text style={{ fontSize: 16 }} >Monsieur</Text>

                                </View>
                            </View>
                        </RadioButton.Group>

                        <Text style={styles.text}>Nom (de naissance) :</Text>
                        <TextInput
                            style={{ ...styles.text_input, borderColor: color }}
                            placeholder="nom"
                            value={nom} //osama somy
                            onChangeText={(nom) => setNom(nom)} />



                        {Error == false ? (
                            <Text style={{ color: 'red', marginLeft: 20 }} >
                                Veuillez renseigner votre nom.
                            </Text>
                        ) : null}

                        <Text style={styles.text}>Prénom :</Text>
                        <TextInput
                            style={{ ...styles.text_input, borderColor: color1 }}
                            placeholder="Prénom"
                            value={preNom} //osama somy
                            onChangeText={(preNom) =>
                                setPreNom(preNom)

                            }
                        />

                        {Error1 == false ? (
                            <Text style={{ color: 'red', marginLeft: 20 }} >
                                Veuillez renseigner votre Prénom .
                            </Text>
                        ) : null}
                        <Text style={styles.text}>N° Téléphone portable :</Text>
                        <TextInput
                            style={{ ...styles.text_input, borderColor: color2}}
                            placeholder="N° de téléphone"
                             value={tel} //osama somy
                            onChangeText={(tel) =>setTel(tel)}
                        />
                        {Error2 == false ? (
                            <Text style={{ color: 'red', marginLeft: 20 }} >
                                Veuillez renseigner votre téléphone .
                            </Text>
                        ) : null}

                        <Text style={styles.text}>Date de naissance :</Text>
                        <DatePicker
                            style={{ width: "90%", alignSelf: 'center' }}
                            date={niassance} //initial date from state
                            mode="date" //The enum of date, datetime and time
                            locale='fr'
                            placeholder="Sélectionner une date"
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
                            style={{ ...styles.text_input, borderColor: color2 }}
                            placeholder="N° CIN"
                            value={cin} //osama somy
                            onChangeText={(cin) => setCin(cin)}
                        />
                        
                        <Text style={styles.text}>Mutuelle :</Text>
                        <TextInput
                            style={{ ...styles.text_input, borderColor: color3 }}
                            placeholder="Mutuelle"
                            value={nmutuelle}
                            onChangeText={(nmutuelle) => 
                                    setNmutuelle(nmutuelle)}
                        />
                       <Text style={styles.text}>N° Mutuelle :</Text>
                        <TextInput
                            style={{ ...styles.text_input, borderColor: color3 }}
                            placeholder="N° Mutuelle"
                            value={mutuelle}
                            onChangeText={(mutuelle) => 
                                    setMutuelle(mutuelle)}
                        />
                        
                        <Text style={styles.text}>Adresse :</Text>
                        <TextInput
                            style={{ ...styles.text_input, borderColor: color4 }}
                            placeholder="Adresse"
                            value={adresse} //osama somy
                            onChangeText={(adresse) => 
                                    setAdresse(adresse)}
                        />

                        <Text style={styles.text}>Ville :</Text>
                        <TextInput
                            style={{ ...styles.text_input, borderColor: color5 }}
                            placeholder="Ville "
                            value={ville} //osama somy
                            onChangeText={(ville) =>
                                    setVille(ville)}
                        />
                        

                        
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

            </Modal>
            {Data.length != 0 && (
                <View>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center', margin: 5, marginRight: 15, marginTop: 15 }}>
                        <Text style={{ color: 'orange', fontSize: 17, fontWeight: 'bold', marginRight: 5 }}>Modifier mon profil </Text>
                        <TouchableOpacity style={styles.btn}
                            onPress={() => {
                                setModalVisible(true);
                            }}>

                            <Text style={{ color: 'white', fontSize: 25, alignSelf: 'center' }}>+</Text>
                        </TouchableOpacity>
                    </View>



                    <View style={styles.ctr} >

                        <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 10, }}>
                            <Text style={{ fontWeight: 'bold' }}>Pourcentage de remplissage : </Text>
                            <Text> {Data.pourcentage}%</Text>
                        </View>
                        <Tooltip height={70} width={200} backgroundColor={'orange'} popover={<View>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>les champs à remplir :</Text>
                            {Data.champs.length > 0 ?
                            Data.champs.map((lng, ney) => {
                               return <Text>- {lng}</Text> 
                            }) 
                            :
                            <Text> Aucun </Text>
                        }
                       
                        </View>}>
                        <Progress.Bar progress={(Data.pourcentage)*0.01} width={225} style={{marginLeft:15,margin:15}} />
                    </Tooltip>
                        </View>
                            <View style={styles.ctr} >
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.text, flex: 3 }}>Nom (de naissance)</Text>
                                    <Text style={{ ...styles.text, flex: 1 }}>:</Text>
                                    <Text style={{ ...styles.text1, flex: 3 }}>{Data.nom}</Text>
                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.text, flex: 3 }}>Prénom</Text>
                                    <Text style={{ ...styles.text, flex: 1 }}>:</Text>
                                    <Text style={{ ...styles.text1, flex: 3 }}>{Data.prenom}</Text>
                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.text, flex: 3 }}>Civilité</Text>
                                    <Text style={{ ...styles.text, flex: 1 }}>:</Text>
                                    <Text style={{ ...styles.text1, flex: 3 }}>{Data.civilite}</Text>
                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.text, flex: 3 }}>Date de naissance</Text>
                                    <Text style={{ ...styles.text, flex: 1 }}>:</Text>
                                    <Text style={{ ...styles.text1, flex: 3 }}>{Data.date_naissance}</Text>
                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.text, flex: 3 }}>N° CIN</Text>
                                    <Text style={{ ...styles.text, flex: 1 }}>:</Text>
                                    <Text style={{ ...styles.text1, flex: 3 }}>{Data.cin}</Text>
                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.text, flex: 3 }}>Mutuelle</Text>
                                    <Text style={{ ...styles.text, flex: 1 }}>:</Text>
                                    <Text style={{ ...styles.text1, flex: 3 }}> {Data.nmutuelle}</Text>

                                </View>

                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.text, flex: 3 }}>N° Mutuelle</Text>
                                    <Text style={{ ...styles.text, flex: 1 }}>:</Text>
                                    <Text style={{ ...styles.text1, flex: 3 }}> {Data.mutuelle}</Text>

                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.text, flex: 3 }}>Adresse</Text>
                                    <Text style={{ ...styles.text, flex: 1 }}>:</Text>
                                    <Text style={{ ...styles.text1, flex: 3 }}> {Data.adress}</Text>

                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.text, flex: 3 }}>Ville</Text>
                                    <Text style={{ ...styles.text, flex: 1 }}>:</Text>
                                    <Text style={{ ...styles.text1, flex: 3 }}> {Data.ville}</Text>

                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.text, flex: 3 }}>N° Téléphone</Text>
                                    <Text style={{ ...styles.text, flex: 1 }}>:</Text>
                                    <Text style={{ ...styles.text1, flex: 3 }}> {Data.tel}</Text>

                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.text, flex: 3 }}>E-mail</Text>
                                    <Text style={{ ...styles.text, flex: 1 }}>:</Text>
                                    <Text style={{ ...styles.text1, flex: 3 }}> {Data.email}</Text>

                                </View>

                            </View>
                </View>
            )}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
                        main_container: {
                        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 10,
        justifyContent: "center",
        paddingRight: 10,
    },
    ctr: {

                        paddingLeft: 5,
        //height: '89%',
        width: '93%',
        alignSelf: 'center',
        //justifyContent: 'center',
        backgroundColor: 'white',
        marginTop: 5,
        marginBottom: 30,
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
        //marginTop: 50,
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
        paddingTop: 5,color:'white',
        textAlign: 'center', margin: 10, backgroundColor: '#1E79C5',
        width: '100%', height: 40, marginTop: 0
    }

})
/*import React, { useEffect, useState } from 'react'
import { View, TextInput, Button, StyleSheet, Text, Alert, TouchableOpacity, ScrollView, AsyncStorage, checkedIcon, Modal, ActivityIndicator } from 'react-native'
import DatePicker from 'react-native-datepicker';
import { RadioButton } from 'react-native-paper';
import moment from 'moment';
import 'moment/locale/fr'
import * as NavigationService from '../../Navigation/NavigationService';
import { url1, url2 } from '../../Navigation/GlobalUrl';
import * as Progress from 'react-native-progress';
import { Tooltip } from 'react-native-elements';
moment.locale('fr')
export default function Mprofil(navigation, route, props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [Data, setData] = useState([]);
    //const { id} = route.params;
    //console.log(id)
    // MODIFIED

    const [civility, setCivility] = useState("")
    const [niassance, setNiassance] = useState("")
    const [nom, setNom] = useState(Data.nom)                 //osama somy
    const [cin, setCin] = useState(Data.cin) //osama somy
    const [preNom, setPreNom] = useState(Data.prenom) //osama somy
    const [mutuelle, setMutuelle] = useState(Data.mutuelle) //osama somy
    const [nmutuelle, setNmutuelle] = useState(Data.nmutuelle)
    const [adresse, setAdresse] = useState(Data.adress) //osama somy
    const [ville, setVille] = useState(Data.ville) //osama somy
    const [tel, setTel] = useState(Data.tel) //osama somy
    const [Error, setError] = useState(true)
    const [color, setColor] = useState('#dfe4ea')
    const [Error1, setError1] = useState(true)
    const [color1, setColor1] = useState('#dfe4ea')
    const [Error2, setError2] = useState(true)
    const [color2, setColor2] = useState('#dfe4ea')
    const [Error3, setError3] = useState(true)
    const [color3, setColor3] = useState('#dfe4ea')
    const [Error4, setError4] = useState(true)
    const [color4, setColor4] = useState('#dfe4ea')
    const [Error5, setError5] = useState(true)
    const [color5, setColor5] = useState('#dfe4ea')

    useEffect(() => {

        fetch(url1)
        return fetch(url2 + '/api/profil?uid=26&get_profil')
            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)

                AsyncStorage.setItem("userInfo", JSON.stringify(res))
                setData(res)              // OSAMA SOMY
                setNom(res.nom) // OSAMA SOMY
                setCin(res.cin) // OSAMA SOMY
                setPreNom(res.prenom) // OSAMA SOMY
                setMutuelle(res.mutuelle) // OSAMA SOMY
                setNmutuelle(res.nmutuelle) 
                setAdresse(res.adress) // OSAMA SOMY
                setVille(res.ville) // OSAMA SOMY
                setTel(res.tel) // OSAMA SOMY
                setLoading(false) // OSAMA SOMY
            })
            .done();
    }, []);

    const update = () => {

        let bodyData = JSON.stringify({
            uid: "26",
            adresse: adresse,
            Num_CIN: cin,
            nom: nom,
            prenom: preNom,
            date_nais: niassance,
            civilite: civility,
            Num_mut: nmutuelle,
            Nom_mutuelle:mutuelle
            ville: ville,
            tel: tel,
            
        })
        console.log(bodyData, "-------------------")

        fetch(url1)
        fetch(url2 + '/api/update_profil', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/javascript, **; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: bodyData
        })

            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)


                console.log("*********success***********")
                console.log("repooooonse")
                console.log("==========OSAMA=========")
                console.log(res)
                let _data = {...Data}
                
                _data.adresse   = adresse,
                _data.Num_CIN   = cin,
                _data.nom       = nom,
                _data.prenom    = preNom,
                _data.date_nais = niassance,
                _data.civilite  = civility,
                _data.Num_mut   = nmutuelle,
                _data.mut   = mutuelle,
                _data.ville     = ville,
                _data.tel       = tel
                
                setData(_data)

                console.log("*********success***********")
                
                Alert.alert(  
                    'Votre modification a été enregistrée avec succès.',  
                    '',  
                    [  
                         
                        {text: 'Ok', onPress:()=> setModalVisible(false)}]  
                );  
               
            })
            .done();
    }
    let displayLoading = () => {
        if (loading) {
            //Loading View while data is loading
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color="#1E79C5" />

                </View>
            );
        }
    }
    const checkError = () => {
        if (nom == '') {
            setError(false), setColor('red')
        }

        else if (preNom == '') {
            setError1(false), setColor1('red'), setError(true), setColor('#2ecc71')
        }else if(tel == '' || Error2==false){
            setError2(false), setColor2('red'),setError1(true),setColor1('#2ecc71')
        }
        else {
            update()

        }


    }
    let t=/^((06)|(07))[0-9]{8}$/;
    return (
        <ScrollView contentContainerStyle={{ backgroundColor: 'white' }} >
            {displayLoading()}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}>
                <View style={styles.modalView}>

                    <Text style={styles.head}>Modifier le profil</Text>

                    <ScrollView>
                        <RadioButton.Group
                            onValueChange={civility => setCivility(civility)}
                            value={civility}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.text}>Civilité :</Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 30, marginLeft: 10 }}>
                                    <RadioButton value="femme" />
                                    <Text style={{ fontSize: 16 }} >Madame</Text>

                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 30, marginLeft: 10 }}>
                                    <RadioButton value="homme" />
                                    <Text style={{ fontSize: 16 }} >Monsieur</Text>

                                </View>
                            </View>
                        </RadioButton.Group>

                        <Text style={styles.text}>Nom (naissance) :</Text>
                        <TextInput
                            style={{ ...styles.text_input, borderColor: color }}
                            placeholder="nom"
                            value={nom}
                            onChangeText={(nom) => setNom(nom)} />



                        {Error == false ? (
                            <Text style={{ color: 'red', marginLeft: 20 }} >
                                Veuillez renseigner votre nom.
                            </Text>
                        ) : null}

                        <Text style={styles.text}>Prénom :</Text>
                        <TextInput
                            style={{ ...styles.text_input, borderColor: color1 }}
                            placeholder="Prénom"
                            value= {preNom}
                            onChangeText={(preNom) =>
                                setPreNom(preNom)

                            }
                        />

                        {Error1 == false ? (
                            <Text style={{ color: 'red', marginLeft: 20 }} >
                                Veuillez renseigner votre Prénom .
                            </Text>
                        ) : null}
                        <Text style={styles.text}>N° téléphone :</Text>
                        <TextInput
                            style={{ ...styles.text_input, borderColor: color2}}
                            placeholder="N° de téléphone"
                            keyboardType='numeric'
                            value={tel}
                            onChangeText={(tel) =>  {
                                if (tel.trim() != 0 &&  tel.match(t)) {
                                setTel(tel), setError2(true) ,setColor2('#2ecc71')
                                   
                                } else {
                                    setTel(tel), setError2(false) ,setColor2('#7f8c8d')
                                   
                                }}}
                        />
                        {Error2 == false ? (
                            <Text style={{ color: 'red', marginLeft: 20 }} >
                                Veuillez renseigner un numéro de téléphone portable valide. Ce numéro doit contenir 10 chiffres et commencer par 06 ou 07.
                            </Text>
                        ) : null}

                        <Text style={styles.text}>Date de naissance :</Text>
                        <DatePicker
                            style={{ width: "90%", alignSelf: 'center' }}
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
                            }}
                            onDateChange={(niassance) => { setNiassance(niassance) }}
                        />


                        <Text style={styles.text}>N° CIN :</Text>
                        <TextInput
                            style={{ ...styles.text_input, borderColor: color3 }}
                            placeholder="N° CIN"
                            value={cin}
                            onChangeText={(cin) => setCin(cin)}
                        />
                        <Text style={styles.text}>Mutuelle :</Text>
                        <TextInput
                            style={{ ...styles.text_input, borderColor: color3 }}
                            placeholder="N° Mutuelle"
                            value={mutuelle}
                            onChangeText={(mutuelle) => 
                                    setMutuelle(mutuelle)}
                        />

                        <Text style={styles.text}>N° Mutuelle :</Text>
                        <TextInput
                            style={{ ...styles.text_input, borderColor: color3 }}
                            placeholder="N° Mutuelle"
                            value={nmutuelle}
                            onChangeText={(nmutuelle) => 
                                    setNmutuelle(nmutuelle)}
                        />
                        
                        <Text style={styles.text}>Adresse :</Text>
                        <TextInput
                            style={{ ...styles.text_input, borderColor: color4 }}
                            placeholder="Adresse"
                            value={adresse}
                            onChangeText={(adresse) => 
                                    setAdresse(adresse)}
                        />

                        <Text style={styles.text}>Ville :</Text>
                        <TextInput
                            style={{ ...styles.text_input, borderColor: color5 }}
                            placeholder="Ville "
                            value={ville}
                            onChangeText={(ville) =>
                                    setVille(ville)}
                        />
                        

                        
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

            </Modal>
            {Data.length != 0 && (
                <View>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center', margin: 5, marginRight: 15, marginTop: 15 }}>
                        <Text style={{ color: 'orange', fontSize: 17, fontWeight: 'bold', marginRight: 5 }}>Modifier mon profil </Text>
                        <TouchableOpacity style={styles.btn}
                            onPress={() => {
                                setModalVisible(true);
                            }}>

                            <Text style={{ color: 'white', fontSize: 25, alignSelf: 'center' }}>+</Text>
                        </TouchableOpacity>
                    </View>



                    <View style={styles.ctr} >

                        <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 10, }}>
                            <Text style={{ fontWeight: 'bold' }}>Votre profil est complet à : </Text>
                            <Text> {Data.pourcentage}%</Text>
                        </View>
                        <Tooltip height={70} width={200} backgroundColor={'orange'} popover={<View>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}> Champs à renseigner :</Text>
                            {Data.champs.length > 0 ?
                            Data.champs.map((lng, ney) => {
                               return <Text>- {lng}</Text> 
                            }) 
                            :
                            <Text>- Aucun </Text>
                        }
                       
                        </View>}>
                        <Progress.Bar progress={(Data.pourcentage)*0.01} width={225} style={{marginLeft:15,margin:15}} />
                    </Tooltip>
                        </View>
                            <View style={styles.ctr} >
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.text, flex: 3 }}>Nom (de naissance)</Text>
                                    <Text style={{ ...styles.text, flex: 1 }}>:</Text>
                                    <Text style={{ ...styles.text1, flex: 3 }}>{Data.nom}</Text>
                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.text, flex: 3 }}>Prénom</Text>
                                    <Text style={{ ...styles.text, flex: 1 }}>:</Text>
                                    <Text style={{ ...styles.text1, flex: 3 }}>{Data.prenom}</Text>
                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.text, flex: 3 }}>Civilité</Text>
                                    <Text style={{ ...styles.text, flex: 1 }}>:</Text>
                                    <Text style={{ ...styles.text1, flex: 3 }}>{Data.civilite}</Text>
                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.text, flex: 3 }}>Date de naissance</Text>
                                    <Text style={{ ...styles.text, flex: 1 }}>:</Text>
                                    <Text style={{ ...styles.text1, flex: 3 }}>{Data.date_naissance}</Text>
                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.text, flex: 3 }}>N° CIN</Text>
                                    <Text style={{ ...styles.text, flex: 1 }}>:</Text>
                                    <Text style={{ ...styles.text1, flex: 3 }}>{Data.cin}</Text>
                                </View>

                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.text, flex: 3 }}>N° Mutuelle</Text>
                                    <Text style={{ ...styles.text, flex: 1 }}>:</Text>
                                    <Text style={{ ...styles.text1, flex: 3 }}> {Data.mutuelle}</Text>

                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.text, flex: 3 }}>Adresse</Text>
                                    <Text style={{ ...styles.text, flex: 1 }}>:</Text>
                                    <Text style={{ ...styles.text1, flex: 3 }}> {Data.adress}</Text>

                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.text, flex: 3 }}>Ville</Text>
                                    <Text style={{ ...styles.text, flex: 1 }}>:</Text>
                                    <Text style={{ ...styles.text1, flex: 3 }}> {Data.ville}</Text>

                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.text, flex: 3 }}>N° Téléphone portable</Text>
                                    <Text style={{ ...styles.text, flex: 1 }}>:</Text>
                                    <Text style={{ ...styles.text1, flex: 3 }}> {Data.tel}</Text>

                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.text, flex: 3 }}>E-mail</Text>
                                    <Text style={{ ...styles.text, flex: 1 }}>:</Text>
                                    <Text style={{ ...styles.text1, flex: 3 }}> {Data.email}</Text>

                                </View>

                            </View>
                </View>
            )}
        </ScrollView>
    );
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
        //height: '89%',
        width: '93%',
        alignSelf: 'center',
        //justifyContent: 'center',
        backgroundColor: 'white',
        marginTop: 5,
        marginBottom: 30,
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
        //marginTop: 50,
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
        paddingTop: 5,color:'white',
        textAlign: 'center', margin: 10, backgroundColor: '#1E79C5',
        width: '100%', height: 40, marginTop: 0
    }

})*/


