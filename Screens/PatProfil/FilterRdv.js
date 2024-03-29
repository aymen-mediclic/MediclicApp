// modal des filtre des RDV
import React, { Component } from 'react';
import {  ScrollView,StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity, Picker, FlatList } from 'react-native';
import { WebView } from 'react-native-webview';
import DatePicker from 'react-native-datepicker';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ant from 'react-native-vector-icons/AntDesign';
//import { ScrollView } from 'react-native-gesture-handler';
// ...
export default class FilterRdv extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Text: "",
            value: '0'
        }
    }
    render() {
        const {filterFields, specilictHint, addressHint, professHint} = this.props
        const { profess, address, specilict,dateRdv_du, dateRdv_au ,status } = filterFields
        // console.log("=================================")
        // console.log(specilictHint)
        // console.log("=================================")
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
                        placeholder={dateRdv_du==0?'Date du':dateRdv_du}
                        // format="DD-MM-YYYY"
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
                        onDateChange={(dateRdv) => { this.props.filterTextHandler(dateRdv, "dateRdv_du") }}
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
                        placeholder={dateRdv_au==0?'Date au':dateRdv_au}
                        // format="DD-MM-YYYY"
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
                        onDateChange={(dateRdv) => { this.props.filterTextHandler(dateRdv, "dateRdv_au") }}
                    />
                    <TouchableOpacity style={{width:20,marginLeft:50}} onPress ={this.props.resetFilter}>
                        <Ant color='#95a5a6' size={16} name={'reload1'} style={{}} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput placeholderTextColor='#95a5a6' style={styles.text_input} value={profess} onChangeText={(text) => this.props.filterTextHandler(text, "profess")} placeholder='Rendez-vous avec' />
                    <FlatList
                        data = {professHint}
                        keyExtractor = {i=>i[0].id}
                        renderItem   = {({item})=>{
                            const i = item[0];
                            if(i.profess){
                                return (<TouchableOpacity style={styles.itemContainer} onPress ={()=>this.props.filterTextHandler(i.profess, "profess")}>
                                    <Text style ={styles.item}>{i.profess}</Text>
                                </TouchableOpacity>)
                            }
                        }}
                    />
                </View>
                <View>
                    <TextInput placeholderTextColor='#95a5a6' style={styles.text_input} value={specilict} onChangeText={(text) => this.props.filterTextHandler(text, "specilict")} placeholder='Spécialité' />
                    <FlatList
                        data = {specilictHint}
                        keyExtractor = {i=>i[0].id}
                        renderItem   = {({item})=>{
                            const i = item[0];
                            if(i.speciality){
                                return (<TouchableOpacity style={styles.itemContainer} onPress ={()=>this.props.filterTextHandler(i.speciality, "specilict")}>
                                    <Text style ={styles.item}>{i.speciality}</Text>
                                </TouchableOpacity>)
                            }
                        }}
                    />
                </View>
                <View style={styles.Picker_View}>
                    <Picker
                        mode='dropdown'
                        selectedValue={status}
                        onValueChange={(itemValue, itemIndex) => { this.props.filterTextHandler(itemValue, "status") }}
                        style={{color:'#95a5a6'}}
                    >
                        <Picker.Item label="Sélectionner un statut " value="0" />
                        <Picker.Item label="A venir" value="4" />
                        <Picker.Item label="Terminé" value="passé" />
                        <Picker.Item label="En salle d'Attente" value="6" />
                        <Picker.Item label="En cours" value="7" />
                        <Picker.Item label="Absent excusé" value="8" />
                        <Picker.Item label="Absent  non excusé" value="9" />
                        <Picker.Item label="Annulé" value="annule" />
                    </Picker>
                </View>
                <View>
                    <TextInput placeholderTextColor='#95a5a6' style={styles.text_input} value={address} onChangeText={(text) => this.props.filterTextHandler(text, "address")} placeholder='Addressé par' />
                    <FlatList
                        data = {addressHint}
                        keyExtractor = {i=>i[0].id}
                        renderItem   = {({item})=>{
                            const i = item[0];
                            if(i.adresser_par){
                                return (<TouchableOpacity style={styles.itemContainer} onPress ={()=>this.props.filterTextHandler(i.adresser_par, "address")}>
                                    <Text style ={styles.item}>{i.adresser_par}</Text>
                                </TouchableOpacity>)
                            }
                        }}
                    />
                </View>
                
                {/* <TextInput style={styles.text_input} onChangeText={(text)=> this.props.filterHandler(text, "") } placeholder='Médecin,Centre...' /> */}
               
               

                <TouchableOpacity style={styles.btn} onPress={() => {
                    this.props.closeModal();
                    this.props.filterHandlerAction()
                }} /*onPress ={this.props.resetFilter}*/><Text style={{ color: "white", fontSize: 16, fontWeight: 'bold', alignSelf: 'center', textAlign: 'center' }}>Rechercher</Text></TouchableOpacity>



            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    ctr: {
        //flex: 1,
        marginTop:"5%",
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
        height: 35,
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
    itemContainer:{
        //position:'absolute',
        //marginTop:0,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        backgroundColor:"white"
    },
    item: {
        color: 'black',
        paddingBottom: 3
    }
})


/*import React, { Component } from 'react';
import {  ScrollView,StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity, Picker, FlatList } from 'react-native';
import { WebView } from 'react-native-webview';
import DatePicker from 'react-native-datepicker';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ant from 'react-native-vector-icons/AntDesign';
//import { ScrollView } from 'react-native-gesture-handler';
// ...
export default class FilterRdv extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Text: "",
            value: '0'
        }
    }
    render() {
        const {filterFields, specilictHint, addressHint, professHint} = this.props
        const { profess, address, specilict,dateRdv, status } = filterFields
        console.log("=================================")
        console.log(specilictHint)
        console.log("=================================")
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
                        placeholder={dateRdv==0?'Date du':dateRdv}
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
                        }}*
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
                        placeholder={dateRdv==0?'Date au':dateRdv}
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
                        }}*
                        onDateChange={(dateRdv) => { this.props.filterTextHandler(dateRdv, "dateRdv") }}
                    />
                    <TouchableOpacity style={{width:20,marginLeft:50}} onPress ={this.props.resetFilter}>
                        <Ant color='#95a5a6' size={16} name={'reload1'} style={{}} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput placeholderTextColor='#95a5a6' style={styles.text_input} value={profess} onChangeText={(text) => this.props.filterTextHandler(text, "profess")} placeholder='Rendez-vous avec' />
                    <FlatList
                        data = {professHint}
                        keyExtractor = {i=>i[0].id}
                        renderItem   = {({item})=>{
                            const i = item[0];
                            if(i.profess){
                                return (<TouchableOpacity style={styles.itemContainer} onPress ={()=>this.props.filterTextHandler(i.profess, "profess")}>
                                    <Text style ={styles.item}>{i.profess}</Text>
                                </TouchableOpacity>)
                            }
                        }}
                    />
                </View>
                <View>
                    <TextInput placeholderTextColor='#95a5a6' style={styles.text_input} value={specilict} onChangeText={(text) => this.props.filterTextHandler(text, "specilict")} placeholder='Spécialité' />
                    <FlatList
                        data = {specilictHint}
                        keyExtractor = {i=>i[0].id}
                        renderItem   = {({item})=>{
                            const i = item[0];
                            if(i.speciality){
                                return (<TouchableOpacity style={styles.itemContainer} onPress ={()=>this.props.filterTextHandler(i.speciality, "specilict")}>
                                    <Text style ={styles.item}>{i.speciality}</Text>
                                </TouchableOpacity>)
                            }
                        }}
                    />
                </View>
                <View style={styles.Picker_View}>
                    <Picker
                        mode='dropdown'
                        selectedValue={status}
                        onValueChange={(itemValue, itemIndex) => { this.props.filterTextHandler(itemValue, "status") }}
                        style={{color:'#95a5a6'}}
                    >
                        <Picker.Item label="Sélectionner un statut " value="0" />
                        <Picker.Item label="A venir" value="4" />
                        <Picker.Item label="Terminé" value="passé" />
                        <Picker.Item label="En salle d'Attente" value="6" />
                        <Picker.Item label="En cours" value="7" />
                        <Picker.Item label="Absent excusé" value="8" />
                        <Picker.Item label="Absent  non excusé" value="9" />
                        <Picker.Item label="Annulé" value="annule" />
                    </Picker>
                </View>
                <View>
                    <TextInput placeholderTextColor='#95a5a6' style={styles.text_input} value={address} onChangeText={(text) => this.props.filterTextHandler(text, "address")} placeholder='Addressé par' />
                    <FlatList
                        data = {addressHint}
                        keyExtractor = {i=>i[0].id}
                        renderItem   = {({item})=>{
                            const i = item[0];
                            if(i.adresser_par){
                                return (<TouchableOpacity style={styles.itemContainer} onPress ={()=>this.props.filterTextHandler(i.adresser_par, "address")}>
                                    <Text style ={styles.item}>{i.adresser_par}</Text>
                                </TouchableOpacity>)
                            }
                        }}
                    />
                </View>
                
                {/* <TextInput style={styles.text_input} onChangeText={(text)=> this.props.filterHandler(text, "") } placeholder='Médecin,Centre...' /> *}
               
               

                <TouchableOpacity style={styles.btn} onPress={() => {
                    this.props.closeModal();
                    this.props.filterHandlerAction()
                }} /*onPress ={this.props.resetFilter}*><Text style={{ color: "white", fontSize: 16, fontWeight: 'bold', alignSelf: 'center', textAlign: 'center' }}>Rechercher</Text></TouchableOpacity>



            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    ctr: {
        //flex: 1,
        marginTop:"5%",
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
        height: 35,
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
    itemContainer:{
        //position:'absolute',
        //marginTop:0,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        backgroundColor:"white"
    },
    item: {
        color: 'black',
        paddingBottom: 3
    }
})*/
