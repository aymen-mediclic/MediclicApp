// modal des filtres
import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Button, TextInput, Picker, KeyboardAvoidingView } from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
import SearchVille from './SearchVille';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ant from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { MaterialIcons } from '@expo/vector-icons'
import { url1, url2 } from '../Navigation/GlobalUrl';
export default class ShortCut extends React.Component {
    state = {

        selectedValue: this.props.data.type_calendrier,
        selectedValue2: this.props.data.type_rdv,
        selectedValue3: this.props.data.speciality_param,
        selectedValue4: this.props.data.service_param,
        selectedValue5: "0"
    };
    // fonction qui fait passé la valeur de l'item choisi depuis le picker, valable pour tout les picker sauf celui du type de rdv
    functionOne(itemValue, key) {
        this.props.dataFilter(itemValue, key)
        //ici c'est pour faire apparaite l'objet choisi en premier dans le picker
        this.setState({ selectedValue: itemValue })
        this.props.modalClose()

    }
    // fonction pour changer le type de rdv
    functionTwo(itemValue, key) {
        this.setState({ selectedValue2: itemValue })
        //console.log('voila',this.state.selectedValue2)
        if (itemValue == 'D') {
            this.props.modalClose();
            NavigationService.navigate('Adresse du rendez-vous', {
                // ce traitement fait en sorte de passer la fonction datafilter1 au screen changement de ville.
                dataFilter4: (loc, lat, lng) => this.props.dataFilter4(loc, lat, lng)
            })
        }
        else {
            this.functionOne(itemValue, key);
        }
    }
    //fonction pour changer la ville
    functionThree() {
        this.props.modalClose()
        NavigationService.navigate('Choisir une ville', {
            // ce traitement fait en sorte de passer la fonction datafilter1 au screen changement de ville.
            dataFilter1: (loc, lat, lng) => this.props.dataFilter1(loc, lat, lng)
        })

    }
    //fonction pour changer le Professionel meme principe
    functionfour() {
        this.props.modalClose()
        NavigationService.navigate('Choisir un professionnel',{spe:this.state.selectedValue3,serv:this.state.selectedValue4,tag:this.props.data.tag_id,
            ctr:this.props.data.centre_searche_id,
            dataFilter2: (name,id) => this.props.dataFilter2(name,id)
        })

    }
    //fonction pour changer le centre meme principe
    functionfive() {
        this.props.modalClose()
        NavigationService.navigate('Choisir un centre',{spe:this.state.selectedValue3,serv:this.state.selectedValue4,tag:this.props.data.tag_id,
            mdc:this.props.data.medecin_searche_id,
            dataFilter3: (name,id) => this.props.dataFilter3(name,id)
        })

    }
    render() {
        //console.log("gggg")
        //console.log(this.props.data.cmp_from_medecin_calendar)
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
                <View style={styles.filtrer} >
                    <View style={{ flex:3,marginLeft:110}}>
                        <Text style={{ fontSize: 22, color: 'white'}}> Filtrer</Text>
                    </View>
                    <TouchableOpacity style={{ flex:1,alignItems:"flex-end",height:30,justifyContent:'center'}} onPress={() =>  this.props.modalClose()}>
                        <Fontisto color='white' size={16} name={'close-a'} style={{justifyContent:'center'}} />
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.Picker_View} >
                <Ant color='#1E79C5' size={20} name={'arrowsalt'} />
                <Picker
                    mode='dropdown'
                    selectedValue={this.state.selectedValue}
                    style={styles.Picker}
                    onValueChange={(itemValue, itemIndex) => { this.functionOne(itemValue, "type_calendrier"); }}
                >
                    <Picker.Item label="Séance ou Service" value='all' />
                    <Picker.Item label="Séance" value='professionel' />
                    <Picker.Item label="Service" value='service' />
                </Picker>
                
                </View>
                <View style={styles.Picker_View} >
                <Fontisto color='#1E79C5' size={20} name={'search'} />
                <Picker
                    mode='dropdown'
                    selectedValue={this.state.selectedValue2}
                    style={styles.Picker}
                    onValueChange={(itemValue, itemIndex) => { this.functionTwo(itemValue, "type_rdv"); }}
                >
                    <Picker.Item label="Au Cabinet/Centre" value='C' />
                    <Picker.Item label="A Domicile" value='D' />
                    <Picker.Item label="En Visio" value='V' />
                </Picker>
                </View>
                <View style={styles.Picker_View} >
                <FontAwesome5 color='#1E79C5' size={20} name={'users'} />
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
                <FontAwesome color='#1E79C5' size={20} name={'gears'} />
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
                
                <TouchableOpacity style={styles.Search} onPress={() => this.functionfour()}>
                <Ant color='#1E79C5' size={20} name={'contacts'} />
                    {this.props.data.medecin_name
                    ? <Text style={{ paddingLeft: 10, color: '#1E79C5', fontSize: 16 }}>
                        {this.props.data.medecin_name}
                        </Text>
                    :<Text style={{ paddingLeft: 10, color: '#1E79C5', fontSize: 16 }}>Professionnel</Text>
                    }
                </TouchableOpacity>
                <TouchableOpacity style={styles.Search} onPress={() => this.functionfive()}>
                    <FontAwesome5 color='#1E79C5' size={20} name={'building'} />
                    {this.props.data.centre_name
                    ?<Text style={{ paddingLeft: 10, color: '#1E79C5', fontSize: 16 }}> {this.props.data.centre_name}</Text>
                    :<Text style={{ paddingLeft: 10, color: '#1E79C5', fontSize: 16 }}>Centre</Text>
                    }
                    </TouchableOpacity>
                <TouchableOpacity style={styles.Search} onPress={() => this.functionThree()}>
                    <Entypo color='#1E79C5' size={20} name={'location'} />
                    {this.props.data.location
                    ?<Text style={{ paddingLeft: 10, color: '#1E79C5', fontSize: 16 }}> {this.props.data.location} </Text>
                    :<Text style={{ paddingLeft: 10, color: '#1E79C5', fontSize: 16 }}> Location </Text>
                    }
                    </TouchableOpacity>
                    <View style={styles.Picker_View} >
                <Entypo color='#1E79C5' size={20} name={'add-user'} />
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
                    {this.state.selectedValue2=='D'?
            <TouchableOpacity style={styles.btn1} onPress={() => {this.props.modalClose();NavigationService.navigate('Adresse du rendez-vous', {
                // ce traitement fait en sorte de passer la fonction datafilter1 au screen changement de ville.
                dataFilter4: (loc, lat, lng) => this.props.dataFilter4(loc, lat, lng)
            })}} >
            
            <Text style={styles.fabIcon}>Modifier l'adresse du rdv</Text>
          </TouchableOpacity>
          :
          <></>
          }                    


            </KeyboardAvoidingView>

        )
    }
}
const styles = StyleSheet.create({
    ctr: {
        flex: 1,
        backgroundColor: '#1E79C5',
       // marginBottom:80,
        //marginHorizontal:20,
        //marginTop:95,
        marginRight:40
    },
    Picker_View: { 
        backgroundColor:'white',
        width:300,
        height:35,
        //justifyContent:'center',
        alignItems:"center",
        borderRadius:5,
        alignSelf:'center',
        margin:15,
        flexDirection:'row',
        padding: 5,
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        elevation: 5,
    },
    Picker: { 
        color: '#1E79C5',
        width:"90%",
        marginLeft:8
    },
    Search: {
        backgroundColor: 'white', height: 35, width: 300, alignSelf: 'center', borderRadius: 5,
        flexDirection: 'row', padding: 5, margin:15,
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        elevation: 5,

    },
    close: {
        borderWidth:1,
        borderColor:'white',
        width:100,
        alignSelf:'flex-end',
        marginRight:12,
        marginTop:5
    },
    filtrer: {
        flexDirection: 'row', margin: 15,alignItems:'center',
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        elevation: 5,
    },
    btn1: {
        borderRadius:5,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems:'center',
        justifyContent:'center',
        width:"90%",
        padding: 5,
        height:30,
        backgroundColor:'#27ae60',
        shadowColor: "grey",
            shadowOpacity: 0.8,
            shadowRadius: 2,
            shadowOffset: {
                height: 1,
                width: 0,
            },
            elevation: 5,
      },
      fabIcon: {
        fontSize: 15,
        color: 'white',
        marginLeft: 5,
        textAlign:'center'
      },
}
)

