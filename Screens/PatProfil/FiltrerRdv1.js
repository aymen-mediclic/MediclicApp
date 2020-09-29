import React, { Component } from 'react';
import { StyleSheet, Text, View,ScrollView ,TextInput, TouchableHighlight, TouchableOpacity, Picker } from 'react-native';
import { WebView } from 'react-native-webview';
import DatePicker from 'react-native-datepicker';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ant from 'react-native-vector-icons/AntDesign';
// ...
export default class FilterRdv1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Text: "",
            value: '0'
        }
    }
    render() {
        const { profess, piecej, specilict,dateAjt,dateRdv } = this.props.filterFields
        return (
            <ScrollView contentContainerStyle={styles.ctr}>
                <View style={styles.filtrer} >
                    <View style={{ flex: 3 }}>
                        <Text style={{ fontSize: 22, color: 'white' }}> Filtrer</Text>
                    </View>
                    <TouchableOpacity style={{ flex: 1, alignItems: "flex-end", height: 30, justifyContent: 'center' }} onPress={() => this.props.closeModal()}>
                        <Fontisto color='white' size={16} name={'close-a'} style={{ justifyContent: 'center' }} />
                    </TouchableOpacity>

                </View>
                <View style={styles.date_p}>
                    <DatePicker
                        //style={{width: '100%' }}
                        //date={niassance} //initial date from state
                        mode="date" //The enum of date, datetime and time
                        locale='fr'
                        placeholder={dateRdv==0?'Date au':dateRdv}
                        placeholderTextColor="orange"
                        format="DD-MM-YYYY"
                        minDate="01-01-1940"
                        // maxDate="01-01-2019"
                        confirmBtnText="Confirmer"
                        cancelBtnText="Annuler"
                        showIcon={false}
                        customStyles={{
                             dateInput: {
                                 height: 30,
                                 borderColor: 'white',
                                 
                             },
                             placeholderText: {
                                fontSize: 14,
                                alignSelf: "flex-start",
                                marginLeft: 5,
                                color: '#95a5a6'
                            },
                            dateText: {
                                fontSize: 14,
                                alignSelf: "flex-start",
                                marginLeft: 5,
                                color: '#95a5a6'
                            }
                        }}
                        onDateChange={(dateRdv) => { this.props.filterTextHandler(dateRdv, "dateRdv") }}
                    />
                     <TouchableOpacity style={{width:20,marginLeft:50}} onPress ={this.props.resetFilter}>
                     <Ant color='#95a5a6' size={16} name={'reload1'} style={{}} />
                     </TouchableOpacity>
                </View>
                <View style={styles.date_p}>
                    <DatePicker
                        //style={{width: '100%' }}
                        //date={niassance} //initial date from state
                        mode="date" //The enum of date, datetime and time
                        locale='fr'
                        placeholder={dateRdv==0?'Date du':dateRdv}
                        placeholderTextColor="orange"
                        format="DD-MM-YYYY"
                        minDate="01-01-1940"
                        // maxDate="01-01-2019"
                        confirmBtnText="Confirmer"
                        cancelBtnText="Annuler"
                        showIcon={false}
                        customStyles={{
                             dateInput: {
                                 height: 30,
                                 borderColor: 'white',
                                 
                             },
                             placeholderText: {
                                fontSize: 14,
                                alignSelf: "flex-start",
                                marginLeft: 5,
                                color: '#95a5a6'
                            },
                            dateText: {
                                fontSize: 14,
                                alignSelf: "flex-start",
                                marginLeft: 5,
                                color: '#95a5a6'
                            }
                        }}
                        onDateChange={(dateRdv) => { this.props.filterTextHandler(dateRdv, "dateRdv") }}
                    />
                     <TouchableOpacity style={{width:20,marginLeft:50}} onPress ={this.props.resetFilter}>
                     <Ant color='#95a5a6' size={16} name={'reload1'} style={{}} />
                     </TouchableOpacity>
                </View>
                <View style={styles.date_p}>
                    <DatePicker
                        //style={{width: '100%' }}
                        //date={niassance} //initial date from state
                        mode="date" //The enum of date, datetime and time
                        locale='fr'
                         placeholder={dateAjt==0?"Date d'ajout":dateAjt}
                        format="DD-MM-YYYY"
                        minDate="01-01-1940"
                        // maxDate="01-01-2019"
                        confirmBtnText="Confirmer"
                        cancelBtnText="Annuler"
                        showIcon={false}
                        customStyles={{
                             dateInput: {
                                 height: 30,
                                 borderColor: 'white',
                                 
                             },
                             placeholderText: {
                                fontSize: 14,
                                alignSelf: "flex-start",
                                marginLeft: 5,
                                color: '#95a5a6'
                            },
                            dateText: {
                                fontSize: 14,
                                alignSelf: "flex-start",
                                marginLeft: 5,
                                color: '#95a5a6'
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
                        onDateChange={(dateAjt) => { this.props.filterTextHandler(dateAjt, "dateAjt") }}
                    />
                     <TouchableOpacity style={{width:20,marginLeft:50}} onPress ={this.props.resetFilter}>
                     <Ant color='#95a5a6' size={16} name={'reload1'} style={{}} />
                     </TouchableOpacity>
                </View>
                <TextInput placeholderTextColor='#95a5a6' style={styles.text_input} value={profess} onChangeText={(text) => this.props.filterTextHandler(text, "profess")} placeholder='Rendez-vous avec' />
               
                <TextInput  placeholderTextColor='#95a5a6' style={styles.text_input} value={specilict} onChangeText={(text) => this.props.filterTextHandler(text, "specilict")} placeholder='Spécialité' />
                
                <View style={styles.Picker_View}>
                    <Picker
                        mode='dropdown'
                        selectedValue={this.state.value}
                        onValueChange={(itemValue, itemIndex) => { }}
                        style={{color:'#95a5a6'}}
                    >
                        <Picker.Item label="Sélectionner une catégorie " value="0" />
                        <Picker.Item label="Compte rendu" value="1" />
                        <Picker.Item label="Ordonannce d'analyse(s)" value="2" />
                        <Picker.Item label="Résultat d'analyse(s)" value="3" />
                        <Picker.Item label="Ordonannce d'examen(s)" value="4" />
                        <Picker.Item label="Résultat d'examen(s)" value="5" />
                        <Picker.Item label="Consigne" value="6" />
                        <Picker.Item label="Autre" value="7" />
                    </Picker>
                </View>
                <TextInput placeholderTextColor='#95a5a6' style={styles.text_input} value={piecej} onChangeText={(text) => this.props.filterTextHandler(text, "piecej")} placeholder='Piéce jointe' />
                <TouchableOpacity style={styles.btn} onPress={() => this.props.closeModal()} /*onPress ={this.props.resetFilter}*/><Text style={{ color: "white", fontSize: 16, fontWeight: 'bold', alignSelf: 'center', textAlign: 'center' }}>Rechercher</Text></TouchableOpacity>



            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    ctr: {
        //flex: 1,
        width: "70%",
        backgroundColor: 'white',
        padding: 10,
        //alignSelf:'center'
        backgroundColor: '#1E79C5',
    },
    text_input: {
        marginVertical: 20,
        height: 35,
        width: "100%",
        borderRadius: 5,
        padding: 5,
        backgroundColor: 'white',
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        elevation: 5,
    },
    filtrer: {
        flexDirection: 'row',
        marginBottom: 20
    },
    btn: {
        justifyContent: 'center',
        backgroundColor: '#16a085',
        borderRadius: 5,
        height: 30,
        marginVertical: 10,
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        elevation: 5,
    },
    Picker_View: {
        justifyContent: 'center',
        marginVertical: 20,
        backgroundColor: 'white',
        height: 35,
        borderRadius: 5,
        //padding: 5,
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        elevation: 5,
    },
    date_p: {
        marginVertical: 20
        , flexDirection: 'row'
        , backgroundColor: 'white',
        borderRadius:5,
        padding:3,
        height:35,
        alignItems:'center',
         width: '100%',
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        elevation: 5,
    },
})

