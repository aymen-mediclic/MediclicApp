import React from 'react'
import { View, TextInput, StyleSheet, Text, TouchableOpacity, ScrollView, checkedIcon, Picker, KeyboardAvoidingView,Alert } from 'react-native'
import { Formik } from 'formik';
import { RadioButton } from 'react-native-paper';
//import { CheckBox } from 'native-base';
import CheckBox from 'react-native-check-box'
import { Button } from 'react-native-elements';
import { Item, Input, Icon, Label } from 'native-base';
import { url1, url2 } from '../Navigation/GlobalUrl';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
            d1:[],
            ErrorStatus: true, ErrorStatus1: true, ErrorStatus2: true,
            ErrorStatus3: true, ErrorStatus4: true, ErrorStatus5: true,
            color: 'grey', color1: 'grey', color2: 'grey',
            color3: 'grey', color4: 'grey', color5: 'grey',
            ercolor:'#7f8c8d',
            icon: "eye-slash",icon2: "eye-slash",
            password: true,password2: true
        };
    }
    componentDidMount() {
        fetch(url1)
        return fetch(url2 + '/api/get_speciality')
            .then((response) => response.json())
            .then((res) => {
                this.setState({
                    data: res
                })
                console.log("repooooonse")
                console.log(this.state.data[0].id)
                console.log("*********success***********")


            })
            .done();
    }
    sot = () => {
        fetch(url1)
        fetch(url2 + '/create_profes', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: JSON.stringify({
                'tel': this.state.tel,
                'nom': this.state.Nom,
                'prenom': this.state.Prénom,
                'login': this.state.mail,
                'password': this.state.Mdp,
                'civilite': this.state.value,
                'confirm_password': this.state.Mdp_c,
                'spe': this.state.selectedValue,
                'formule_abonnement': this.state.chkbox

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
                if(this.state.d1.error){
                    Alert.alert(
                        "Désolé!",
                        this.state.d1.error,
                        [
                          
                          { text: "OK", onPress: () => console.log("OK Pressed") }
                        ],
                        { cancelable: false }
                      );}
                    else if(this.state.d1.msg){
                        Alert.alert(
                            "Félicitation!",
                            'Votre compte a été créer avec succès',
                            [
                              
                              { text: "OK", onPress: () => console.log("OK Pressed") }
                            ],
                            { cancelable: false }
                          );
                    }
            })
            .done();
    }
    function=()=> {
        if(this.state.Nom == ''){
            this.setState({ErrorStatus:false, color:'red',ercolor:'red'})
        }else if(this.state.Prénom == ''){
            this.setState({ErrorStatus1:false, color1:'red',ercolor:'red'})
        }else if(this.state.tel == ''|| this.state.ErrorStatus2==false ){
            this.setState({ErrorStatus2:false, color2:'red',ercolor:'red'})
        }
        else if(this.state.mail == ''|| this.state.ErrorStatus3==false ){
            this.setState({ErrorStatus3:false, color3:'red',ercolor:'red'})
        }
        else if(this.state.Mdp == ''|| this.state.ErrorStatus4==false ){
            this.setState({ErrorStatus4:false, color4:'red',ercolor:'red'})
        }
        else if(this.state.Mdp_c == ''|| this.state.Mdp_c!=this.state.Mdp ){
            this.setState({ErrorStatus5:false, color5:'red',ercolor:'red'})
        }
        else{
            this.sot()
            
        }
        

    }

    pot = () => {
        fetch(url1)
        fetch(url2 + '/create_patient', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: JSON.stringify({
                'tel': '0622222253',
                'nom': 'aymaner',
                'prenom': 'aymane',
                'login': 'aymane612182@odoo.com',
                'password': 'aymane',
                'civilite': 'homme',
                'confirm_password': 'aymane',

            })
        })

            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)
                console.log("*********success***********")


            })
            .done();
    }
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
        let pass =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*\s).{8,}$/;
        let t=/^((06)|(07))[0-9]{8}$/;
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (
            <ScrollView contentContainerStyle={styles.main_container}>

                <RadioButton.Group
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
                </RadioButton.Group>


                <Text style={styles.text}>Nom (de naissance)</Text>
                <TextInput style={[styles.text_input, { borderColor: this.state.color }]}
                    placeholder='Nom'
                    autoCapitalize = 'none'
                    onChangeText={(Nom) => {
                        if (Nom.trim() != 0) {
                            this.setState({ Nom, ErrorStatus: true, color: '#2ecc71' });
                        } else {
                            this.setState({ Nom, ErrorStatus: false, color: '#7f8c8d' });
                        }
                    }}
                />
                {this.state.ErrorStatus == false ? (
                    <Text style={[styles.errorMessage,{ color: this.state.ercolor }]}>
                        Veuillez renseigner votre nom.
                    </Text>
                ) : null}

                <Text style={styles.text}>Prénom</Text>
                <TextInput style={[styles.text_input, { borderColor: this.state.color1 }]}
                    placeholder='Prénom'
                    autoCapitalize = 'none'
                    onChangeText={(Prénom) => {
                        if (Prénom.trim() != 0) {
                            this.setState({ Prénom, ErrorStatus1: true, color1: '#2ecc71' });
                        } else {
                            this.setState({ Prénom, ErrorStatus1: false, color1: '#7f8c8d' });
                        }
                    }}

                />
                {this.state.ErrorStatus1 == false ? (
                    <Text style={[styles.errorMessage,{ color: this.state.ercolor }]}>
                        Veuillez renseigner votre Prénom.
                    </Text>
                ) : null}
                <Text style={styles.text}>Spécialité</Text>
                <View style={styles.Picker_view} >
                    <Picker
                        //mode='dropdown'
                        selectedValue={this.state.selectedValue}
                        onValueChange={(itemValue, itemIndex) => this.setState({ selectedValue: itemValue })}
                    >
                        {da.map((item, index) =>
                            <Picker.Item label={item.name} value={item.id} key={index} />
                        )}
                    </Picker>
                </View>
                <Text style={styles.text}>N°Téléphone</Text>
                <TextInput style={[styles.text_input, { borderColor: this.state.color2 }]}
                    placeholder='N°Téléphone'
                    autoCapitalize = 'none'
                    keyboardType='numeric'
                    onChangeText={(tel) => this.setState({ tel })}
                    onChangeText={(tel) => {
                        if (tel.trim() != 0 &&  tel.match(t)) {
                            this.setState({ tel, ErrorStatus2: true, color2: '#2ecc71' });
                            console.log(this.state.tel.length)
                        } else {
                            this.setState({ tel, ErrorStatus2: false, color2: '#7f8c8d' });
                        }
                    }}
                />
                {this.state.ErrorStatus2 == false ? (
                    <Text style={[styles.errorMessage,{ color: this.state.ercolor }]}>
                        Veuillez renseigner un numéro de téléphone portable valide. Ce numéro doit contenir 10 chiffres et commencer par 06 ou 07.
                    </Text>
                ) : null}
                <Text style={styles.text}>Email</Text>
                <TextInput style={[styles.text_input, { borderColor: this.state.color3 }]}
                    placeholder='Email'
                    autoCapitalize = 'none'
                    keyboardType='email-address'
                    onChangeText={(mail) => this.setState({ mail })}
                    onChangeText={(mail) => {
                        if (mail.trim() != 0 && mail.match(re)) {
                            this.setState({ mail, ErrorStatus3: true, color3: '#2ecc71' });
                        } else {
                            this.setState({ mail, ErrorStatus3: false, color3: '#7f8c8d' });
                        }
                    }}
                />

                {this.state.ErrorStatus3 == false ? (
                    <Text style={[styles.errorMessage,{ color: this.state.ercolor }]}>
                        Veuillez renseigner un email valide. Exemple : info@gmail.com.
                    </Text>
                ) : null}
                <Text style={styles.text}>Mot de passe</Text>
                <View style={[styles.text_input_mail, { borderColor: this.state.color4 }]} >
                    <TextInput style={{ flex: 1, width: '75%' }}  secureTextEntry={this.state.password} 
                    placeholder='Mot de passe'
                    autoCapitalize = 'none'
                    onChangeText={(Mdp) => {
                        if (Mdp.trim() != 0 && Mdp.match(pass)) {
                            this.setState({ Mdp, ErrorStatus4: true, color4: '#2ecc71' });
                        } else {
                            this.setState({ Mdp, ErrorStatus4: false, color4: '#7f8c8d' });
                        }
                    }}
                    />
                    <FontAwesome color={'black'} size={18} style={{ margin: 5,width:'10%' }} name={this.state.icon} onPress={() => this._changeIcon()} />
                </View>
                {this.state.ErrorStatus4 == false ? (
                    <Text style={[styles.errorMessage,{ color: this.state.ercolor }]}>
                        Veuillez renseigner un mot de passe valide. Ce mot doit contenir au moins un chiffre et une lettre majuscule et minuscule, et au moins 8 caractères ou plus.
                    </Text>
                ) : null}
                <Text style={styles.text}>Confirmer mot de passe</Text>
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
                />

                <Button onPress={this.function} title="Validation" buttonStyle={styles.btn} titleStyle={{ textAlign: 'center' }} />

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
    },
    text: {
        marginTop: 5,
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 15
    },
    text_input: {
        marginLeft: 10,
        //marginRight: 5,
        height: 30,
        width: '90%',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        margin: 12,
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
        marginLeft: 10,
        //marginRight: 5,
        height: 30,
        width: '90%',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        margin: 12,
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
        height: 40,
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 20,
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
        marginLeft: 15,
        //color: '#7f8c8d',
        fontWeight: 'bold'
    }
});

