////////////lM39oul/////////////////////////
import React from 'react'
import { View, TextInput, StyleSheet, Text, TouchableOpacity, ScrollView, checkedIcon, Picker, KeyboardAvoidingView, Alert, CheckBox, Image } from 'react-native'
import { Formik } from 'formik';
import { RadioButton } from 'react-native-paper';
//import CheckBox from 'react-native-check-box'
import { Button } from 'react-native-elements';
import { Item, Input, Icon, Label } from 'native-base';
import { url1, url2 } from '../Navigation/GlobalUrl';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal'
import Ant from 'react-native-vector-icons/AntDesign';
import * as NavigationService from '../Navigation/NavigationService';
import * as Linking from "expo-linking";
import DOMParser from 'react-native-html-parser';

var DomParser = require('react-native-html-parser').DOMParser
export default class InscriptionProf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'homme',
            chkbox: false,
            Nom: '',
            Prénom: '',
            tel: '',
            mail: '',
            Mdp: '',
            Mdp_c: '',
            selectedValue: '',
            data: [],
            d1: [],
            ErrorStatus: true, ErrorStatus1: true, ErrorStatus2: true,
            ErrorStatus3: true, ErrorStatus4: true, ErrorStatus5: true,
            color: 'grey', color1: 'grey', color2: 'grey',
            color3: 'grey', color4: 'grey', color5: 'grey',
            ercolor: '#e74c3c',
            icon: "eye-slash", icon2: "eye-slash",
            password: true, password2: true,
            modalOpen: false
        };
    }
    componentDidMount=()=>{
        //Linking.makeUrl()
         fetch('http://51.91.249.185:8002/web/signup')
    .then((resp) => { return resp.text() })
    .then((text) => {
      console.log("nnnnnnnnnnnnn",text)
      let e=typeof(text)
      //let doc = new DomParser().parseFromString(text,'text/html')
       console.log("><<>>>>>!!!!!!!!<<<")
       console.log(typeof text)
       //console.log(doc.getElementsByAttribute('class', 'form-group field-name'))
      console.log("><<>>>>><<<")
      
      /* let l=parse(text);
      console.log("nnnnnnnnnnnnn",l)
      console.log("><<>>>>><<<")*/
      //console.log(doc.getElementById('form_su').getElementsByTagName('INPUT')[0].value)
    })
    .catch((error) => {
      console.error(error);
    });
    }
    function = () => {
       if (this.state.Nom == '') {

            this.setState({ ErrorStatus: false, color: '#e74c3c', ercolor: '#e74c3c' })
        }  if (this.state.Prénom == '') {

            
            this.setState({ ErrorStatus1: false, color1: '#e74c3c', ercolor: '#e74c3c' })
           
        }  if (this.state.tel == '' || this.state.ErrorStatus2 == false) {
            this.setState({ ErrorStatus2: false, color2: '#e74c3c', ercolor: '#e74c3c' })
            
        }
         if (this.state.mail == '' || this.state.ErrorStatus3 == false) {
            this.setState({ ErrorStatus3: false, color3: '#e74c3c', ercolor: '#e74c3c' })
            
        }  if (this.state.chkbox == '') {
            this.setState({ ErrorStatus5: false, color5: '#e74c3c', ercolor: '#e74c3c' })
        }
        /* else if(this.state.Mdp_c == ''|| this.state.Mdp_c!=this.state.Mdp ){
             this.setState({ErrorStatus5:false, color5:'#e74c3c',ercolor:'#e74c3c'})
         }*/
        else {
            this.pot()

        }


    }

    pot = () => {
        var formdata = new FormData()
        formdata.append('nom',"testooo");
        formdata.append('prenom',"testooo"),
        formdata.append('tel',"0762758620"),
        formdata.append('login',"belefdil.abdelhakim@gmail.com"),
        formdata.append('optionsCheckboxes','on'),
        formdata.append('name','TESTOOO Testooo'),
        formdata.append('redirect',''),
        formdata.append('token',''),
        formdata.append('appMed',true)
        formdata.append('csrf_token','1cae8c6a7ed6155bca035d2111110ade1e48bfc3o1602156765')
        console.log('pressed!!!!!!!!!!!',formdata)
        fetch(url1)
        fetch(url2 +'/web/signup', {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'multipart/form-data'
            },
            body: formdata
        })

            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)
                console.log("*********success***********")
                this.setState({
                    d1: res
                })
            }).catch(function(error) {

                console.log('There has been a problem with your fetch operation: ' + error.message);
                
                throw error;
                
                });
            
    }
   /* pot = () => {
        fetch(url1)
        fetch(url2 +'/web/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/javascript, **; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: JSON.stringify({
                /*'tel': this.state.tel,
                'nom': this.state.Nom,
                'prenom': this.state.Prénom,
                'login': this.state.mail,
                //'password': this.state.Mdp,
                //'civilite': this.state.value,
                //'confirm_password': this.state.Mdp_c,
                'nom':"testooo",
                'prenom':"testooo",
                'tel':"0762758620",
                'login': "belefdil.abdelhakim@gmail.com",
                'optionsCheckboxes':'on',
                'name':'TESTOOO Testooo',
                'redirect':'',
                'token':'',
               // 'appMed':true
            })
        })

            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)
                console.log("*********success***********")
                this.setState({
                    d1: res
                })
               /* if (this.state.d1.error) {
                    Alert.alert(
                        "Désolé!",
                        this.state.d1.error,
                        [

                            { text: "OK", onPress: () => console.log("OK Pressed") }
                        ],
                        { cancelable: false }
                    );
                }
                else if (this.state.d1.msg) {
                    Alert.alert(
                        "Félicitations !",
                        'Votre compte a été créé avec succès',
                        [

                            { text: "OK", onPress: () => console.log("OK Pressed") }
                        ],
                        { cancelable: false }
                    );
                }*

            })
            .done();
    }*/
    _changeIcon() {
        this.setState(prevState => ({
            icon: prevState.icon === 'eye' ? 'eye-slash' : 'eye',
            password: !prevState.password
        }));
    }
    _changeIcon2() {
        this.setState(prevState => ({
            icon2: prevState.icon2 === 'eye' ? 'eye-slash' : 'eye',
            password2: !prevState.password2
        }));
    }
    render() {
        const { label, icon, onChange } = this.props;
        let da = [];
        var count = Object.keys(this.state.data).length;
        for (var i = 0; i < count; i++) {
            //console.log(res.proches[i][0].nom) // I need to add 
            da.push(this.state.data[i]); // Create your array of data
        }
        let pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*\s).{8,}$/;
        let t = /^((06)|(07))[0-9]{8}$/;
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (

            <ScrollView style={styles.main_container}>

                {/*   <RadioButton.Group
                    onValueChange={value => this.setState({ value })}
                    value={this.state.value}
                >
                    <Text style={{ fontSize: 15, marginTop: 10, marginLeft: 10, fontWeight: 'bold' }}>Civilité:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ margin: 10 }}>
                            <Text>Monsieur</Text>
                            <RadioButton value="homme" />
                        </View>
                        <View style={{ margin: 10 }}>
                            <Text>Madame</Text>
                            <RadioButton value="femme" />
                        </View>
                    </View>
             </RadioButton.Group>*/}
                <Modal isVisible={this.state.modalOpen} animationType='slide' transparent={true}  >

                    <View style={styles.modal}>
                        <View style={{ flex: 1, backgroundColor: '#47caa2', alignItems: 'center', justifyContent: 'center' }}  >


                            <Ant color='white' size={50} name={'checkcircleo'} />


                        </View>
                        <View style={{ flex: 2, alignItems: 'center' }} >
                            <Text style={{ fontSize: 25, fontWeight: 'bold', margin: 15, color: '#747d8c' }}>Félicitations !</Text>
                            <Text style={{ marginTop: 30, fontSize: 16 }}>{"Un e-mail a été envoyé à votre adresse\ne-mail"}<Text style={{ textDecorationLine: 'underline', color: '#3498db' }}>{this.state.mail}</Text>.</Text>
                            <Text style={{ fontSize: 16,marginHorizontal:20}}>{"Suivez les instructions pour confirmer votre inscription."}</Text>
                            <TouchableOpacity style={{ flexDirection: 'row',justifyContent: 'center', alignItems: 'center', height: 35, width: 200, borderRadius: 5, backgroundColor: '#1E79C5',marginBottom:'5%',marginTop:'20%' }} onPress={() => NavigationService.navigate('Mediclic')} >
                                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 16, margin: 7 }}>Retour à l'accueil</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </Modal>

                <Text style={{ ...styles.text, marginTop: 15 }}>Nom (de naissance)</Text>
                <TextInput style={[styles.text_input, { borderColor: this.state.color }]}
                    placeholder='Nom (de naissance)'
                    autoCapitalize='none'
                    onChangeText={(Nom) => {
                        if (Nom.trim() != 0) {
                            this.setState({ Nom, ErrorStatus: true, color: '#2ecc71' });
                        } else {
                            this.setState({ Nom, ErrorStatus: false, color: '#e74c3c' });
                        }
                    }}
                />
                {this.state.ErrorStatus == false ? (
                    <Text style={[styles.errorMessage, { color: this.state.ercolor }]}>
                        Veuillez renseigner votre Nom (de naissance).
                    </Text>
                ) : null}

                <Text style={styles.text}>Prénom</Text>
                <TextInput style={[styles.text_input, { borderColor: this.state.color1 }]}
                    placeholder='Prénom'
                    autoCapitalize='none'
                    onChangeText={(Prénom) => {
                        if (Prénom.trim() != 0) {
                            this.setState({ Prénom, ErrorStatus1: true, color1: '#2ecc71' });
                        } else {
                            this.setState({ Prénom, ErrorStatus1: false, color1: '#e74c3c' });
                        }
                    }}

                />
                {this.state.ErrorStatus1 == false ? (
                    <Text style={[styles.errorMessage, { color: this.state.ercolor }]}>
                        Veuillez renseigner votre Prénom.
                    </Text>
                ) : null}
                {/*<Text style={styles.text}>Je suis Majeur</Text>
                <CheckBox
                style={{ flex: 1, padding: 10 }}
                onClick={() => {
                  this.setState({
                    isChecked: !this.state.isChecked
                  })
                }}
                isChecked={this.state.isChecked}
                rightText={"Oui"}
            />*/}
                <Text style={styles.text}>N°Téléphone</Text>
                <TextInput style={[styles.text_input, { borderColor: this.state.color2 }]}
                    placeholder='N°Téléphone'
                    autoCapitalize='none'
                    keyboardType='numeric'
                    onChangeText={(tel) => this.setState({ tel })}
                    onChangeText={(tel) => {
                        if (tel.trim() != 0 && tel.match(t)) {
                            this.setState({ tel, ErrorStatus2: true, color2: '#2ecc71' });
                            console.log(this.state.tel.length)
                        } else {
                            this.setState({ tel, ErrorStatus2: false, color2: '#e74c3c' });
                        }
                    }}
                />
                {this.state.ErrorStatus2 == false ? (
                    <View style={{flexDirection:'column'}}>
                    <Text style={[styles.errorMessage, { color: this.state.ercolor,marginBottom:0  }]}>
                        Veuillez renseigner un numéro de téléphone valide. 
                    </Text>
                    <Text style={[styles.errorMessage, { color: this.state.ercolor,marginTop:0 }]}>Ce numéro doit contenir 10 chiffres et commencer par 06 ou 07.</Text>
                    </View>
               ) : null}
                <Text style={styles.text}>Adresse e-mail</Text>
                <TextInput style={[styles.text_input, { borderColor: this.state.color3 }]}
                    placeholder='Adresse e-mail'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    onChangeText={(mail) => this.setState({ mail })}
                    onChangeText={(mail) => {
                        if (mail.trim() != 0 && mail.match(re)) {
                            this.setState({ mail, ErrorStatus3: true, color3: '#2ecc71' });
                        } else {
                            this.setState({ mail, ErrorStatus3: false, color3: '#e74c3c' });
                        }
                    }}
                />

                {this.state.ErrorStatus3 == false ? (
                    <View style={{flexDirection:'column'}}>
                    <Text style={[styles.errorMessage, { color: this.state.ercolor,marginBottom:0 }]}>
                        Veuillez renseigner une adresse e-mail valide.  
                    </Text>
                    <Text style={[styles.errorMessage, { color: this.state.ercolor,marginTop:0 }]}>Exemple : info@gmail.com</Text> 
                    </View>
                ) : null}
                {/*
                <Text style={styles.text}>Mot de passe</Text>
                <View style={[styles.text_input_mail, { borderColor: this.state.color4 }]} >
                    <TextInput style={{ flex: 1, width: '75%' }} secureTextEntry={this.state.password}
                        placeholder='Mot de passe'
                        autoCapitalize='none'
                        onChangeText={(Mdp) => {
                            if (Mdp.trim() != 0 && Mdp.match(pass)) {
                                this.setState({ Mdp, ErrorStatus4: true, color4: '#2ecc71' });
                            } else {
                                this.setState({ Mdp, ErrorStatus4: false, color4: '#e74c3c' });
                            }
                        }}
                    />
                    <FontAwesome color={'black'} size={18} style={{ margin: 5, width: '10%', alignSelf: 'center' }} name={this.state.icon} onPress={() => this._changeIcon()} />
                </View>

                {this.state.ErrorStatus4 == false ? (
                    <Text style={[styles.errorMessage, { color: this.state.ercolor }]}>
                        Veuillez renseigner un mot de passe. Pour plus de sécurité ce mot de passe doit contenir au moins 8 caractères dont au moins 1 chiffre, 1 lettre majuscule, 1 lettre minuscule et 1 caracère spécial.
                    </Text>
                ) : null}*/}
                {/* <Text style={styles.text}>Confirmer mot de passe</Text>
                <View style={[styles.text_input_mail, { borderColor: this.state.color5 }]} >
                    <TextInput style={{ flex: 1, width: '75%' }}  secureTextEntry={this.state.password2} 
                    placeholder='Mot de passe'
                    autoCapitalize = 'none'
                    onChangeText={(Mdp_c) => {
                        
                            this.setState({ Mdp_c, ErrorStatus5: true, color5: '#2ecc71' })}}
                    />
                    <FontAwesome color={'black'} size={18} style={{ margin: 5,width:'10%' }} name={this.state.icon2} onPress={() => this._changeIcon2()} />
                </View>
                {this.state.ErrorStatus5 == false ? (
                    <Text style={[styles.errorMessage,{ color: this.state.ercolor }]}>
                        Veuillez saisir des mots de passe identiques.
                    </Text>
                ) : null}
                <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    onClick={() => {
                        this.setState({
                            isChecked: !this.state.isChecked
                        })
                    }}
                    isChecked={this.state.isChecked}
                    rightText={"J'accepte les conditions d'utilisation de la plateforme"}
                />*/}
                <View style={{ flexDirection: 'row', marginVertical:5, marginLeft: 10, }}>
                    <CheckBox
                        value={this.state.chkbox}
                        onValueChange={chkbox => this.setState({ chkbox })}
                        style={{ alignSelf: "center", marginTop: '3%', marginLeft: '2%', }}
                    />
                    <Text style={{ flex: 1, marginTop: '3%' }}>
                        <Text style={{ flex: 1, marginRight: '3%' }}>J'accepte les </Text>
                        <Text onPress={()=> Linking.openURL('https://mediclic.ma/cgu')} style={{ flex: 1, textDecorationLine: 'underline', marginLeft: '10%', color: '#3498db' }}>conditions d'utilisation de la plateforme</Text>
                    </Text>
                </View>
                {this.state.ErrorStatus5 == false && this.state.chkbox!=true  ? (
                    <Text style={[styles.errorMessage, { color: this.state.ercolor }]}>
                        Veuillez lire et accepter les conditions générales d'utilisation de la plateforme.
                    </Text>
                ) : null}
                <TouchableOpacity style={styles.btn} /*onPress={this.function}*/ onPress={this.pot} >
                    <Text style={{ textAlign:'center',fontWeight:'bold' ,fontSize: 17, color: 'white' }}>S' inscrire</Text>
                </TouchableOpacity>
                
            </ScrollView>





        );
    }

}

const styles = StyleSheet.create({
    main_container: {
        //flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: 'white',
        marginHorizontal:'5%',
        marginVertical:'5%',
        borderRadius:5,
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        elevation: 3,
    },
    text: {
        marginTop: '5%',
        marginLeft: '5%',
        marginBottom: '2%',
        fontWeight: 'bold',
        fontSize: 15
    },
    text_input: {
        marginLeft: '5%',
        //marginRight: 5,
        height: 40,
        width: '90%',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        //margin: 12,
        backgroundColor: "white",
        //alignItems: 'center',
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        },
        elevation: 3
    },
    text_input_mail: {
        flexDirection: 'row',
        marginLeft: '5%',
        //marginRight: 5,
        height: 40,
        width: '90%',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        //margin: 12,
        backgroundColor: "white",
        //alignItems: 'center',
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        },
        elevation: 3
    },
    Picker_view: {
        backgroundColor: 'white',
        //alignSelf:'center',
        width: 325,
        height: 30,
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1,
        //marginL:10,
        borderColor: 'grey',
        height: 30,
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        elevation: 3,
        marginLeft: 10,
        marginVertical: 10
    },
    btn: {
        
        width: '60%',
        height: 35,
        backgroundColor: '#1E79C5',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 33,
        marginBottom:30,
        borderRadius: 5,
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        elevation: 3,
    },
    errorMessage: {
        flex: 1,
        marginLeft: "6%",
        marginRight: "1%",
        //color: '#e74c3c',
        fontWeight: 'bold',
        fontSize: 13,
        marginBottom: '2%',
        marginTop: '1%',
    },
    modal: {
        marginTop: 3,
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '97%',
        height: '80%',
        borderRadius: 8,
        //borderWidth:1
    },
});

