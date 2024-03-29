///Profil proche patient
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
    const [Id, setId] = useState('')
    //const {id_p}=props
    useEffect(() => {
        _retrieveData();
        
    }, []);

    const _retrieveData = async () => {
        
        //console.log(id_p,'voila') 
        try {
          
          let id = await AsyncStorage.getItem("id");
         
    
          if (id !== null) {
            // We have data!!
            console.log(id,"1!!");
            setId(id)
          }
        } catch (error) {
            console.log(error);
        }
        fetch(url1)
        return fetch(url2 + '/api/profil_proche?uid=26&get_profil&proche=7')
            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                // console.log(res.nom)

                //AsyncStorage.setItem("userInfo", JSON.stringify(res))

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
      }
    const update = () => {

        var formdata = new FormData()
        
        formdata.append('uid','7' ),
        formdata.append('uid_p', '7'),
        formdata.append('adresse', adresse)
        formdata.append(    'Num_CIN', cin)
            formdata.append( '  nom', nom)
                formdata.append(    'prenom',preNom)
                    formdata.append(  'date_nais', niassance)
                        formdata.append(  'civilite', civility)
                            formdata.append(  'Num_mut', mutuelle)
                                formdata.append(  'Nom_mut',nmutuelle)
                                    formdata.append( 'ville', ville)
                                        formdata.append( 'tel',tel)
       
        console.log(formdata, "-------------------")

        fetch(url1)
        fetch(url2 + '/api/update_proche', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            body: formdata
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
                <View style={{ flex: 1,height:'100%', alignItems: 'center', justifyContent: 'center',alignSelf:'center' }}>
                    <ActivityIndicator size="large" color="#1E79C5" />

                </View>
            );
        }
    }
    const checkError = () => {
        if (nom == '') {
            setError(false), setColor('red')
        
        }
         if (preNom == '') {
            setError1(false), setColor1('red')
        }if(tel == ''){
            setError2(false), setColor2('red')
        } 
        else {
            update()

        }


    }
    let t=/^((06)|(07))[0-9]{8}$/;
   let Capitalize=(str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1);
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

                    <Text style={styles.head}>Modifier mon profil</Text>

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
                            placeholder="Nom (de naissance)"
                            value={nom} //osama somy
                            onChangeText={(nom) =>  {
                                if (nom.trim() != 0) {
                                    setNom(nom),setError(true), setColor('#2ecc71')
                                } else {
                                    setNom(nom) ,setError(false), setColor('red')
                                    
                                }
                            }} />



                        {Error == false ? (
                            <Text style={styles.errorMessage} >
                                Veuillez renseigner votre Nom (de naissance).
                            </Text>
                        ) : null}

                        <Text style={styles.text}>Prénom :</Text>
                        <TextInput
                            style={{ ...styles.text_input, borderColor: color1 }}
                            placeholder="Prénom"
                            value={preNom} //osama somy
                            onChangeText={(preNom) =>{
                                if (preNom.trim() != 0) {
                                    setPreNom(preNom),setError1(true), setColor1('#2ecc71')
                                } else {
                                    setPreNom(preNom) ,setError1(false), setColor1('red')
                                    
                                }

                            }}
                        />

                        {Error1 == false ? (
                            <Text style={styles.errorMessage} >
                                Veuillez renseigner votre Prénom .
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
                            onDateChange={(niassance) => { setNiassance(niassance);console.log('datata',niassance) }}
                        />
                        <Text style={styles.text}>N° Téléphone :</Text>
                        <TextInput
                            style={{ ...styles.text_input, borderColor: color2}}
                            placeholder="N° de téléphone"
                             value={tel} //osama somy
                            onChangeText={(tel) =>setTel(tel)}
                        />
                        {Error2 == false ? (
                            <Text style={styles.errorMessage} >
                                Veuillez renseigner un numéro de téléphone valide. Ce numéro doit contenir 10 chiffres et commencer par 06 ou 07.
                            </Text>
                        ) : null}
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
                        <Text style={styles.text}>N° CIN :</Text>
                        <TextInput
                            style={{ ...styles.text_input, borderColor: color2,marginBottom:10 }}
                            placeholder="N° CIN"
                            value={cin} //osama somy
                            onChangeText={(cin) => setCin(cin)}
                        />
                        
                        
                        
                    </ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: "flex-end", justifyContent: "space-between", backgroundColor: '#ecf0f1' }}>
                        <TouchableOpacity
                            style={{ ...styles.openButton, backgroundColor: "orange", width: 150, height: 30, margin: 5, justifyContent: 'center' }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Annuler</Text>
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
                    
                        <TouchableOpacity style={{flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', margin: 5, marginRight: 15, marginTop: 15 }}
                            onPress={() => {
                                setModalVisible(true);
                            }}>
                                <Text style={{ color: 'orange', fontSize: 17, fontWeight: 'bold', marginRight: 5 }}>Modifier mon profil </Text>
                                <View style={{backgroundColor:'orange',padding:5,width:30,height:30,borderRadius:30/2,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{ color: 'white', fontSize: 25 }}>+</Text>
                            </View>
                        </TouchableOpacity>
                


                    <View style={styles.ctr} >

                        <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 10, }}>
                            <Text style={{ fontWeight: 'bold' }}>Votre profil est complet à : </Text>
                            <Text> {Data.pourcentage}%</Text>
                        </View>
                        {Data.pourcentage != '100' ?  
                        

                        <Tooltip  width={200} backgroundColor={'white'} popover={<View style={{backgroundColor:'orange',padding:10,borderRadius:5,marginTop:'20%' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Champs à renseigner :</Text>
                            {Data.champs.length > 0 ?
                                Data.champs.map((lng, ney) => {
                                    return <Text>- {lng}</Text>
                                })
                                :
                                <> </>
                            }

                        </View>}>
                        <Progress.Bar progress={(Data.pourcentage) * 0.01} width={225} style={{ marginLeft: 15, margin: 15 }} />
                        </Tooltip>
                       :
                        <Progress.Bar progress={(Data.pourcentage) * 0.01} width={225} style={{ marginLeft: 15, margin: 15 }} />
                        }
                    </View>
                            <View style={styles.ctr} >
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.textA, flex: 3 }}>Nom (de naissance)</Text>
                                    <Text style={{ ...styles.textA,  width:10}}>:</Text>
                                    <Text style={{ ...styles.textB, flex: 4 }}>{Data.nom.toUpperCase()}</Text>
                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.textA, flex: 3 }}>Prénom</Text>
                                    <Text style={{ ...styles.textA,  width:10}}>:</Text>
                                    <Text style={{ ...styles.textB, flex: 4 }}>{Capitalize(Data.prenom)}</Text>
                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.textA, flex: 3 }}>Date de naissance</Text>
                                    <Text style={{ ...styles.textA,  width:10 }}>:</Text>
                                    <Text style={{ ...styles.textB, flex: 4 }}>{Data.date_naissance?Data.date_naissance:"Non renseigné"}</Text>
                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.textA, flex: 3 }}>Civilité</Text>
                                    <Text style={{ ...styles.textA,  width:10}}>:</Text>
                                    <Text style={{ ...styles.textB, flex: 4 }}>{Data.civilite?Data.civilite:"Non renseigné"}</Text>
                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.textA, flex: 3 }}>N° Téléphone</Text>
                                    <Text style={{ ...styles.textA,  width:10 }}>:</Text>
                                    <Text style={{ ...styles.textB, flex: 4 }}>{Data.tel?Data.tel:"Non renseigné"}</Text>

                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.textA, flex: 3 }}>E-mail</Text>
                                    <Text style={{ ...styles.textA, width:10 }}>:</Text>
                                    <Text style={{ ...styles.textB, flex: 4 }}>{Data.email?Data.email:"Non renseigné"}</Text>

                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.textA, flex: 3 }}>Adresse</Text>
                                    <Text style={{ ...styles.textA,  width:10}}>:</Text>
                                    <Text style={{ ...styles.textB, flex: 4 }}>{Data.adress?Data.adress:"Non renseigné"}</Text>

                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.textA, flex: 3 }}>Ville</Text>
                                    <Text style={{ ...styles.textA,  width:10 }}>:</Text>
                                    <Text style={{ ...styles.textB, flex: 4 }}>{Data.ville?Data.ville:"Non renseigné"}</Text>

                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.textA, flex: 3 }}>Mutuelle</Text>
                                    <Text style={{ ...styles.textA,  width:10}}>:</Text>
                                    <Text style={{ ...styles.textB, flex: 4}}>{Data.nom_mutuelle?Data.nom_mutuelle:"Non renseigné"}</Text>

                                </View>

                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.textA, flex: 3 }}>N° Mutuelle</Text>
                                    <Text style={{ ...styles.textA,  width:10}}>:</Text>
                                    <Text style={{ ...styles.textB, flex: 4 }}>{Data.mutuelle?Data.mutuelle:"Non renseigné"}</Text>

                                </View>
                                <View style={styles.main_container}>
                                    <Text style={{ ...styles.textA, flex: 3 }}>N° CIN</Text>
                                    <Text style={{ ...styles.textA,  width:10 }}>:</Text>
                                    <Text style={{ ...styles.textB, flex: 4 }}>{Data.cin?Data.cin:"Non renseigné"}</Text>
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
        //marginBottom: 30,
        margin: 1,
        justifyContent: "center",
        padding: 10,
        
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
        //marginBottom:'2%',
        //marginTop:'5%',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#2c3e50',
        justifyContent: "center",
    },
    textA: {
        //margin: 5,

fontWeight: 'bold',
fontSize: 16,
color: '#2c3e50',
justifyContent: "center",
},
    text1: {
                        fontSize: 16,
                        justifyContent: "center",
    },
    textB: {
        fontSize: 16,
        justifyContent: "center",
},
    btn: {
                        borderRadius: 30 / 2,
        backgroundColor: 'orange',
        color: 'white',
        width: 30,
        height: 30,
        //alignSelf: 'flex-end',
        //marginRight: 10,
        //marginBottom: 10,flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center', margin: 5, marginRight: 15, marginTop: 15 
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
        //marginBottom: 15,
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
    },
    errorMessage: {
        flex: 1,
        marginLeft: "6%",
        marginRight: "1%",
        color: '#e74c3c',
        fontWeight: 'bold',
        fontSize: 13,
        marginBottom: '2%',
        marginTop: '1%',
    },

})