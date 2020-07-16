import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Button, TextInput, Picker, KeyboardAvoidingView } from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
import SearchVille from './SearchVille';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { MaterialIcons } from '@expo/vector-icons'
export default class ShortCut extends React.Component {
    state = {

        selectedValue: this.props.data.type_calendrier,
        selectedValue2: this.props.data.type_rdv,
        selectedValue3: this.props.data.speciality_param,
        selectedValue4: this.props.data.service_param,
        selectedValue5: "0"
    };
    functionOne(itemValue, key) {
        this.props.dataFilter(itemValue, key)
        this.setState({ selectedValue: itemValue })

    }

    functionTwo(itemValue, key) {
        this.setState({ selectedValue2: itemValue })
        //console.log('voila',this.state.selectedValue2)
        if (itemValue == 'D') {
            this.props.modalClose()
            NavigationService.navigate('Choisisser votre position')
        }
        else {
            this.functionOne(itemValue, key);
        }
    }
    /*functionTwo(itemValue,key) {
        this.setState({ selectedValue2: itemValue })
        console.log('voila',itemValue)
        this.props.modalClose()
        NavigationService.navigate('Choisisser votre position')
    }*/
    functionThree() {
        this.props.modalClose()
        NavigationService.navigate('changer de ville', {
            dataFilter1: (loc, lat, lng) => this.props.dataFilter1(loc, lat, lng)
        })

    }
    functionfour() {
        this.props.modalClose()
        NavigationService.navigate('changer de médecin',{spe:this.state.selectedValue3,serv:this.state.selectedValue4,tag:this.props.data.tag_id,
            ctr:this.props.data.centre_searche_id,
            dataFilter2: (name,id) => this.props.dataFilter2(name,id)
        })

    }
    functionfive() {
        this.props.modalClose()
        NavigationService.navigate('changer de centre',{spe:this.state.selectedValue3,serv:this.state.selectedValue4,tag:this.props.data.tag_id,
            mdc:this.props.data.medecin_searche_id,
            dataFilter3: (name,id) => this.props.dataFilter3(name,id)
        })

    }
    _Request = () => {
        //this.setState({ isLoading: true })
        fetch('http://51.91.249.185:8069/web/login?db=new_installation')
        return fetch('http://51.91.249.185:8069/api/search' +
            '?filtres= 1' +
            '&dispo_date=' + this.state.selectedValue5 +
            '&medecin_name=' + this.props.data.medecin_name +
            '&centre_name=' + this.props.data.centre_name +
            '&type_calendrier=' + this.state.selectedValue +
            '&type_rdv=' + this.state.selectedValue2 +
            '&speciality=' + this.state.selectedValue3 +
            '&service=' + this.state.selectedValue4 +
            '&medecin_searche_id=' + this.props.data.medecin_searche_id +
            '&centre_searche_id=' + this.props.data.centre_searche_id +
            '&location=' + this.props.data.location +
            '&lng=' + this.props.data.lng +
            '&lat=' + this.props.data.lat +
            '&tag=' + this.props.data.tag_id +
            '&cmp_from_medecin_calendar=' + this.props.data.cmp_from_medecin_calendar +
            '&cmp_from_centre_calendar=' + this.props.data.cmp_from_centre_calendar +
            '&cmp_from_smart_service=' + this.props.data.cmp_from_smart_service +
            '&is_pagination=0' +
            '&position_changed=0'

        )

            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)
            })
            .done();
    }
    render() {
        console.log("gggg")
        console.log(this.props.data.cmp_from_medecin_calendar)
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

            <KeyboardAvoidingView style={[styles.ctr]}>
                <KeyboardAvoidingView style={{ flexDirection: 'row', margin: 15 }}>
                    
                    <Text style={{ fontSize: 18, color: 'white', marginLeft: 10 }}> Nouvelle recherche</Text>
                </KeyboardAvoidingView>
                <View style={styles.Picker_View} >
                <Picker
                    mode='dropdown'
                    selectedValue={this.state.selectedValue}
                    style={styles.Picker}
                    onValueChange={(itemValue, itemIndex) => { this.functionOne(itemValue, "type_calendrier"); }}
                >
                    <Picker.Item label="Consultation ou Service" value='all' />
                    <Picker.Item label="Consultation" value='professionel' />
                    <Picker.Item label="Service" value='service' />
                </Picker>
                
                </View>
                <View style={styles.Picker_View} >
                <Picker
                    mode='dropdown'
                    selectedValue={this.state.selectedValue2}
                    style={styles.Picker}
                    onValueChange={(itemValue, itemIndex) => { this.functionTwo(itemValue, "type_rdv"); }}
                >
                    <Picker.Item label="Au cabinet/centre" value='C' />
                    <Picker.Item label="A domicile" value='D' />
                    <Picker.Item label="Video conférence" value='V' />
                </Picker>
                </View>
                <View style={styles.Picker_View} >
                <Picker
                    //mode='dropdown'
                    selectedValue={this.state.selectedValue3}
                    style={styles.Picker}
                    onValueChange={(itemValue, itemIndex) => { this.functionOne(itemValue, "speciality"); }}
                >
                    {da.map((item, index) =>
                        <Picker.Item label={item.name} value={item.id} key={index} />
                    )}
                </Picker>
                </View>
                <View style={styles.Picker_View} >
                <Picker
                    mode='dropdown'
                    selectedValue={this.state.selectedValue4}
                    style={styles.Picker}
                    onValueChange={(itemValue, itemIndex) => { this.functionOne(itemValue, "service"); }}
                >
                    {dat.map((item, index) =>
                        <Picker.Item label={item.name} value={item.id} key={index} />
                    )}
                </Picker>
                </View>
                <View style={styles.Picker_View} >
                <Picker
                    mode='dropdown'
                    selectedValue={this.state.selectedValue5}
                    style={styles.Picker}
                    onValueChange={(itemValue, itemIndex) => { this.functionOne(itemValue, "dispo_date"); }}
                >

                    <Picker.Item label="Disponibilité" value="0" />
                    <Picker.Item label="Disponibilité la plus proche" value="1" />

                </Picker>
                </View>
                <TouchableOpacity style={styles.Search} onPress={() => this.functionfour()}>
                    <Fontisto color='#1E79C5' size={20} name={'doctor'} />
                    {this.props.data.medecin_name
                    ? <Text style={{ paddingLeft: 10, color: '#1E79C5', fontSize: 16 }}>
                        {this.props.data.medecin_name}
                        </Text>
                    :<Text style={{ paddingLeft: 10, color: '#1E79C5', fontSize: 16 }}>Médecin</Text>
                    }
                </TouchableOpacity>
                <TouchableOpacity style={styles.Search} onPress={() => this.functionfive()}>
                    <FontAwesome5 color='#1E79C5' size={20} name={'hospital'} />
                    {this.props.data.centre_name
                    ?<Text style={{ paddingLeft: 10, color: '#1E79C5', fontSize: 16 }}> {this.props.data.centre_name}</Text>
                    :<Text style={{ paddingLeft: 10, color: '#1E79C5', fontSize: 16 }}>Centre</Text>
                    }
                    </TouchableOpacity>
                <TouchableOpacity style={styles.Search} onPress={() => this.functionThree()}>
                    <FontAwesome5 color='#1E79C5' size={20} name={'city'} />
                    {this.props.data.location
                    ?<Text style={{ paddingLeft: 10, color: '#1E79C5', fontSize: 16 }}> {this.props.data.location} </Text>
                    :<Text style={{ paddingLeft: 10, color: '#1E79C5', fontSize: 16 }}> Location </Text>
                    }
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.close} onPress={() =>  this.props.modalClose()}>
                    <Text style={{color:'white',textAlign:'center'}}> ANNULER </Text>
                    </TouchableOpacity>
                    


            </KeyboardAvoidingView>

        )
    }
}
const styles = StyleSheet.create({
    ctr: {
        flex: 1,
        backgroundColor: '#1E79C5',
        marginBottom:120,
        marginHorizontal:20,
        marginTop:40,
    },
    Picker_View: { 
        backgroundColor:'white',
        width:300,
        height:35,
        justifyContent:'center',
        borderRadius:5,
        alignSelf:'center',
        margin:5,
        //flexDirection:'row'
    },
    Picker: { 
        color: '#1E79C5',
    },
    Search: {
        backgroundColor: 'white', height: 35, width: 300, alignSelf: 'center', borderRadius: 5,
        flexDirection: 'row', padding: 5, margin:5

    },
    close: {
        borderWidth:1,
        borderColor:'white',
        width:100,
        alignSelf:'flex-end',
        marginRight:12,
        marginTop:5
    }
}
)

