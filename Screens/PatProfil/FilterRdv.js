import React, { Component } from 'react';
import { StyleSheet, Text, View ,TextInput} from 'react-native';
import { WebView } from 'react-native-webview';
import DatePicker from 'react-native-datepicker';

// ...
export default class FilterRdv extends Component {
    constructor(props){
        super(props)
        this.state={
            Text:""
        }
    }
render() {
    return (
        <View style={{height:'70%',width:'70%',backgroundColor:'white'}}>
            <TextInput style={styles.text_input} onChangeText={(text)=>{this.setState({Text:text})} } placeholder='Médecin,Centre...' />
            <TextInput style={styles.text_input} onChangeText={(text)=>{this.setState({Text:text})} } placeholder='Médecin,Centre...' />
            <TextInput style={styles.text_input} onChangeText={(text)=>{this.setState({Text:text})} } placeholder='Médecin,Centre...' />
            <TextInput style={styles.text_input} onChangeText={(text)=>{this.setState({Text:text})} } placeholder='Médecin,Centre...' />
            <DatePicker
                            style={{ width: "90%", alignSelf: 'center' }}
                            //date={niassance} //initial date from state
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
                            onDateChange={(niassance) => { }}
                        />
                    
        </View>
    );
}
}
const styles= StyleSheet.create({
text_input:{
    width:"90%",
    height:30,
    borderWidth:1,
    borderColor:'grey',
    borderRadius:5,
    margin:10,
    padding:5
}
})