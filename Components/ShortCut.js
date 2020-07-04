import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Button, TextInput,Picker } from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';



export default class ShortCut extends React.Component {
    state = {

        selectedValue: this.props.data.type_calendrier,
        selectedValue2: this.props.data.type_rdv,
        selectedValue3: this.props.data.speciality_param,
        selectedValue4: this.props.data.service_param
    };
    functionOne(itemValue){
        this.setState({selectedValue:itemValue})
        
        }
        
        functionTwo(){
            NavigationService.navigate('Choisisser votre position')   
        }
    render() {
        console.log("gggg")
        console.log(this.props.data.speciality[0])
        let da = [];
        var count = Object.keys(this.props.data.speciality).length;
        for (var i = 0; i < count; i++) {
          //console.log(res.proches[i][0].nom) // I need to add 
          da.push(this.props.data.speciality[i]); // Create your array of data
        }
        let dat = [];
        var count = Object.keys(this.props.data.services).length;
        for (var i = 0; i < count; i++) {
          //console.log(res.proches[i][0].nom) // I need to add 
          dat.push(this.props.data.services[i]); // Create your array of data
        }
       
        return (

            <View style={styles.ctr}>
                
                    <Picker
                        mode='dropdown'
                        selectedValue={this.state.selectedValue}
                        style={{ height: 40,backgroundColor:'white',margin:10, borderRadius:5}}
                        onValueChange={(itemValue, itemIndex) =>  { this.functionOne(itemValue); this.functionTwo(); }}
                    >
                        <Picker.Item label="Consultation ou Service" value='all' />
                        <Picker.Item label="Consultation" value='professionel' />
                        <Picker.Item label="Service" value='service' />
                    </Picker>
                    <Picker
                        mode='dropdown'
                        selectedValue={this.state.selectedValue2}
                        style={{ height: 40,backgroundColor:'white',margin:10, borderRadius:5}}
                        onValueChange={(itemValue, itemIndex) =>  { this.functionOne(itemValue); this.functionTwo(); }}
                    >
                        <Picker.Item label="Au cabinet/centre" value='C' />
                        <Picker.Item label="A domicile" value='D' />
                        <Picker.Item label="Video conférence" value='V' />
                    </Picker>
                    <Picker
                        //mode='dropdown'
                        selectedValue={this.state.selectedValue3}
                        style={{ height: 40,backgroundColor:'white',margin:10, borderRadius:5}}
                        onValueChange={(itemValue, itemIndex) =>  { this.functionOne(itemValue); this.functionTwo(); }}
                    >
                       {da.map((item, index) =>
                  <Picker.Item label={item.name} value={item.id} key={index} />
                )}
                    </Picker>
                    <Picker
                        //mode='dropdown'
                        selectedValue={this.state.selectedValue4}
                        style={{ height: 40,backgroundColor:'white',margin:10, borderRadius:5}}
                        onValueChange={(itemValue, itemIndex) =>  { this.functionOne(itemValue); this.functionTwo(); }}
                    >
                       {dat.map((item, index) =>
                  <Picker.Item label={item.name} value={item.id} key={index} />
                )}
                    </Picker>
                
                
                
            </View>

        )
    }
}
const styles = StyleSheet.create({
    ctr: {
        flex: 1,
        //marginTop:20,
        backgroundColor: '#1E79C5',
        marginBottom: 110,
    },
    txt: {
        backgroundColor: '#fff',
        height: 40,
        color: 'grey',
        margin: 10,
        borderRadius: 5,
        paddingLeft: 30

    },
    txt1: {
        backgroundColor: '#fff',
        height: 40,
        color: 'red',
        margin: 10,
        borderRadius: 5,
        paddingLeft: 30

    }
}
)