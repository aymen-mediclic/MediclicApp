import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Button, TextInput, Picker, KeyboardAvoidingView } from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
import SearchVille from './SearchVille';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class ShortCut extends React.Component {
    state = {

        selectedValue:  this.props.data.type_calendrier,
        selectedValue2: this.props.data.type_rdv,
        selectedValue3: this.props.data.speciality_param,
        selectedValue4: this.props.data.service_param,
        selectedValue5: "0"
    };
    functionOne(itemValue,key) {
        this.props.dataFilter(itemValue,key)
        this.setState({ selectedValue: itemValue })

    }

    functionTwo() {
        this.props.modalClose()
        NavigationService.navigate('Choisisser votre position')
    }
    functionThree() {
        this.props.modalClose()
        NavigationService.navigate('changer de ville')
         
    }
   _Request = () => {
        //this.setState({ isLoading: true })
        fetch('http://51.91.249.185:8069/web/login?db=new_installation')
        return fetch('http://51.91.249.185:8069/api/search'+
                '?filtres= 1'+
                '&dispo_date='+this.state.selectedValue5+
                '&medecin_name='+this.props.data.medecin_name+
                '&centre_name='+this.props.data.centre_name+ 
                '&type_calendrier='+ this.state.selectedValue+ 
                '&type_rdv='+this.state.selectedValue2+
                '&speciality='+this.state.selectedValue3+
                '&service=' +this.state.selectedValue4+
                 '&medecin_searche_id='+this.props.data.medecin_searche_id+ 
                 '&centre_searche_id=' +this.props.data.centre_searche_id+ 
                 '&location='+this.props.data.location+ 
                 '&lng='+this.props.data.lng+ 
                 '&lat='+ this.props.data.lat+
                 '&tag=' +this.props.data.tag_id+ 
                 '&cmp_from_medecin_calendar=' +this.props.data.cmp_from_medecin_calendar+
                 '&cmp_from_centre_calendar=' + this.props.data.cmp_from_centre_calendar+
                 '&cmp_from_smart_service=' +this.props.data.cmp_from_smart_service+
                 '&is_pagination=0'+
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

            <KeyboardAvoidingView style={styles.ctr}>

                <Picker
                    mode='dropdown'
                    selectedValue={this.state.selectedValue}
                    style={styles.Picker}
                    onValueChange={(itemValue, itemIndex) => { this.functionOne(itemValue,"type_calendrier"); }}
                >
                    <Picker.Item label="Consultation ou Service" value='all' />
                    <Picker.Item label="Consultation" value='professionel' />
                    <Picker.Item label="Service" value='service' />
                </Picker>
                <Picker
                    mode='dropdown'
                    selectedValue={this.state.selectedValue2}
                    style={styles.Picker}
                    onValueChange={(itemValue, itemIndex) => { this.functionOne(itemValue,"type_rdv");this.functionTwo(); }}
                >
                    <Picker.Item label="Au cabinet/centre" value='C' />
                    <Picker.Item label="A domicile" value='D' />
                    <Picker.Item label="Video conférence" value='V' />
                </Picker>
                <Picker
                    //mode='dropdown'
                    selectedValue={this.state.selectedValue3}
                    style={styles.Picker}
                    onValueChange={(itemValue, itemIndex) => { this.functionOne(itemValue,"speciality"); }}
                >
                    {da.map((item, index) =>
                        <Picker.Item label={item.name} value={item.id} key={index} />
                    )}
                </Picker>
                <Picker
                    mode='dropdown'
                    selectedValue={this.state.selectedValue4}
                    style={styles.Picker}
                    onValueChange={(itemValue, itemIndex) => { this.functionOne(itemValue,"service"); }}
                >
                    {dat.map((item, index) =>
                        <Picker.Item label={item.name} value={item.id} key={index} />
                    )}
                </Picker>

                <Picker
                    mode='dropdown'
                    selectedValue={this.state.selectedValue5}
                    style={styles.Picker}
                    onValueChange={(itemValue, itemIndex) => { this.functionOne(itemValue,"dispo_date");}}
                >

                    <Picker.Item label="Disponibilité" value="0" />
                    <Picker.Item label="Disponibilité la plus proche" value="1" />

                </Picker>
                <TouchableOpacity  style={styles.Search} onPress={() => NavigationService.navigate('médecin ou centre')}>
                <Fontisto color='#7f8c8d' size={20} name={'doctor'} />
                    <Text style={{paddingLeft:10,color:'#7f8c8d',fontSize:16}}> Médecin</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.Search} onPress={() => NavigationService.navigate('médecin ou centre')}>
                <FontAwesome5 color='#7f8c8d' size={20} name={'hospital'} />
                    <Text style={{paddingLeft:10,color:'#7f8c8d',fontSize:16}}> Clinique</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.Search} onPress={() => this.functionThree()}>
                <FontAwesome5 color='#7f8c8d' size={20} name={'city'} />
                    <Text style={{paddingLeft:10,color:'#7f8c8d',fontSize:16}}> {this.props.data.location} </Text>
                </TouchableOpacity>
                        
                

            </KeyboardAvoidingView>

        )
    }
}
const styles = StyleSheet.create({
    ctr: {
        flex: 1,
        //marginTop:20,
        backgroundColor: '#1E79C5',
        margin: 15,
    },
    Picker: {
        height: 40, width: 300, //alignSelf: 'flex-end', 
        margin: 10, borderRadius: 3,color:'white',

    },
    Search: {
        backgroundColor:'white', height: 30, width: 300,alignSelf:'center',borderRadius:5,
        flexDirection:'row',padding:5,margin:10

    }
}
)

/*
import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Button, TextInput, Picker, KeyboardAvoidingView } from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
import SearchVille from './SearchVille';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class ShortCut extends React.Component {
    state = {

        selectedValue: this.props.data.type_calendrier,
        selectedValue2: this.props.data.type_rdv,
        selectedValue3: this.props.data.speciality_param,
        selectedValue4: this.props.data.service_param,
        selectedValue5: "0"
    };
    functionOne(itemValue) {
        this.setState({ selectedValue: itemValue })

    }

    functionTwo() {
        NavigationService.navigate('Choisisser votre position')
    }
   _Request = () => {
        //this.setState({ isLoading: true })
        fetch('http://51.91.249.185:8069/web/login?db=new_installation')
        return fetch('http://51.91.249.185:8069/api/search'+
                '?filtres= 1'+
                '&dispo_date='+this.state.selectedValue5+
                '&medecin_name='+this.props.data.medecin_name+
                '&centre_name='+this.props.data.centre_name+ 
                '&type_calendrier='+ this.props.data.type_calendrier+ 
                '&type_rdv='+this.props.data.type_rdv+
                '&speciality='+this.props.data.speciality_param+
                '&service=' +this.props.data.service_param+
                 '&medecin_searche_id='+this.props.data.medecin_searche_id+ 
                 '&centre_searche_id=' +this.props.data.centre_searche_id+ 
                 '&location='+this.props.data.location+ 
                 '&lng='+this.props.data.lng+ 
                 '&lat='+ this.props.data.lat+
                 '&tag=' +this.props.data.tag_id+ 
                 '&cmp_from_medecin_calendar=' +this.props.data.cmp_from_medecin_calendar+
                 '&cmp_from_centre_calendar=' + this.props.data.cmp_from_centre_calendar+
                 '&cmp_from_smart_service=' +this.props.data.cmp_from_smart_service+
                 '&is_pagination=0'+
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

            <KeyboardAvoidingView style={styles.ctr}>

                <Picker
                    mode='dropdown'
                    selectedValue={this.state.selectedValue}
                    style={styles.Picker}
                    onValueChange={(itemValue, itemIndex) => { this.functionOne(itemValue); this.functionTwo(); }}
                >
                    <Picker.Item label="Consultation ou Service" value='all' />
                    <Picker.Item label="Consultation" value='professionel' />
                    <Picker.Item label="Service" value='service' />
                </Picker>
                <Picker
                    mode='dropdown'
                    selectedValue={this.state.selectedValue2}
                    style={styles.Picker}
                    onValueChange={(itemValue, itemIndex) => { this.functionOne(itemValue); this.functionTwo(); }}
                >
                    <Picker.Item label="Au cabinet/centre" value='C' />
                    <Picker.Item label="A domicile" value='D' />
                    <Picker.Item label="Video conférence" value='V' />
                </Picker>
                <Picker
                    //mode='dropdown'
                    selectedValue={this.state.selectedValue3}
                    style={styles.Picker}
                    onValueChange={(itemValue, itemIndex) => { this.functionOne(itemValue); this.functionTwo(); }}
                >
                    {da.map((item, index) =>
                        <Picker.Item label={item.name} value={item.id} key={index} />
                    )}
                </Picker>
                <Picker
                    mode='dropdown'
                    selectedValue={this.state.selectedValue4}
                    style={styles.Picker}
                    onValueChange={(itemValue, itemIndex) => { this.functionOne(itemValue); this.functionTwo(); }}
                >
                    {dat.map((item, index) =>
                        <Picker.Item label={item.name} value={item.id} key={index} />
                    )}
                </Picker>

                <Picker
                    mode='dropdown'
                    selectedValue={this.state.selectedValue5}
                    style={styles.Picker}
                    onValueChange={(itemValue, itemIndex) => { this.functionOne(itemValue); this.functionTwo(); }}
                >

                    <Picker.Item label="Disponibilité" value="0" />
                    <Picker.Item label="Disponibilité la plus proche" value="1" />

                </Picker>
                <TouchableOpacity  style={styles.Search} onPress={() => NavigationService.navigate('médecin ou centre')}>
                <Fontisto color='#7f8c8d' size={20} name={'doctor'} />
                    <Text style={{paddingLeft:10,color:'#7f8c8d',fontSize:16}}> Médecin</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.Search} onPress={() => NavigationService.navigate('médecin ou centre')}>
                <FontAwesome5 color='#7f8c8d' size={20} name={'hospital'} />
                    <Text style={{paddingLeft:10,color:'#7f8c8d',fontSize:16}}> Clinique</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.Search} onPress={() => NavigationService.navigate('changer de ville')}>
                <FontAwesome5 color='#7f8c8d' size={20} name={'city'} />
                    <Text style={{paddingLeft:10,color:'#7f8c8d',fontSize:16}}> {this.props.data.location} </Text>
                </TouchableOpacity>
                        
                <TouchableOpacity  style={{width:100, backgroundColor:'orange'}} onPress={ this._Request}>
                
                    <Text style={{paddingLeft:10,color:'#7f8c8d',fontSize:16}}> recherche </Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>

        )
    }
}
const styles = StyleSheet.create({
    ctr: {
        flex: 1,
        //marginTop:20,
        backgroundColor: '#1E79C5',
        margin: 15,
    },
    Picker: {
        height: 40, width: 200, alignSelf: 'flex-end', margin: 10, borderRadius: 3,color:'white'

    },
    Search: {
        backgroundColor:'white', height: 30, width: 280,alignSelf:'center',borderRadius:5,
        flexDirection:'row',padding:5,margin:10

    }
}
)
*/