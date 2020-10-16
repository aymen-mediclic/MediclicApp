//composant liste des assistant+ map pour les  adresses.
import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, ActivityIndicator, ScrollView, Image } from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
import SearchVille from './SearchVille';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { MaterialIcons } from '@expo/vector-icons'
import { url1, url2 } from '../Navigation/GlobalUrl';
import MapContainer1 from '../Screens/ChangePosition1';

export default class InfirmierL extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            data: [],
            isLoading: true,
            assistant:'',
            lngi:'-9.625376600000001',
            lati:'33.57737410000001'
        }
    }
    //
    componentDidMount() {
        fetch(url1)
       /* return fetch(url2 + '/rdv/auto' + '?lng=' + this.props.route.params.lng + '&lat=' + this.props.route.params.lat
            + '&assistant_speciality_id=' + this.props.route.params.assistant_id)*/
            return fetch(url2 + '/rdv/auto' + '?lng=' + this.state.lngi + '&lat=' + this.state.lati
            + '&assistant_speciality_id=' + this.props.route.params.assistant_id)
            .then((response) => response.json())
            .then((res) => {
                console.log("6942000000000000000000000000000000")
                /*console.log(this.props.route.params.lat)
                console.log(this.props.route.params.lng)
                console.log(this.props.route.params.assistant_id)*/
                console.log(res)
                console.log("694200000000000000000000000000000000000")
                this.setState({
                    id: res.infirmiers[0].id, nam: res.infirmiers[0].name,
                     data: res.infirmiers,
                    isLoading: false,
                })
                console.log("694200000000000000000000000000000000000", this.props.route.params.name,
                this.props.route.params.adresse,
                 this.props.route.params.type_rdv,
                 this.props.route.params.namo,
                this.props.route.params.text,
                this.props.route.params.text1,
               this.props.route.params.doctor,
                 this.props.route.params.duration,
                 this.props.route.params.partner_id,
               this.props.route.params.context,
               this.props.route.params.praticien,
                this.props.route.params.service_id,
                this.props.route.params.service_name,
                 this.props.route.params.service_salle,
                 this.props.route.params.adresse_rdv,
               )
            })
            .done();
    }
    // fct apres séléction d'un infirmier depuis la liste,
    Redirection = () => {
        NavigationService.navigate('Validez votre rendez-vous',
            {
                name: this.props.route.params.name,
                adresse: this.props.route.params.adresse,
                type_rdv: this.props.route.params.type_rdv,
                namo: this.props.route.params.namo,
                text: this.props.route.params.text,
                text1: this.props.route.params.text1,
                doctor: this.props.route.params.doctor,
                duration: this.props.route.params.duration,
                partner_id: this.props.route.params.partner_id,
                context: this.props.route.params.context,
                praticien: this.props.route.params.praticien,
                service_id: this.props.route.params.service_id,
                service_name: this.props.route.params.service_name,
                service_salle: this.props.route.params.service_salle,
                adresse_rdv: this.props.route.params.adresse_rdv,
                infirmier_id: this.state.id,
                assistant:this.state.assistant
            })
    }
    // cette fonction prend le lat et lng depuis le repere pour afficher la liste des infirmiers dans celui ci
    infirmier_coord= (cor1,cor2) => {
        this.setState({lngi:cor1,lati:cor2})
        this.setState({
            isLoading: true,
        })
        fetch(url1)
        /* return fetch(url2 + '/rdv/auto' + '?lng=' + this.props.route.params.lng + '&lat=' + this.props.route.params.lat
             + '&assistant_speciality_id=' + this.props.route.params.assistant_id)*/
             return fetch(url2 + '/rdv/auto' + '?lng=' + this.state.lngi + '&lat=' + this.state.lati
             + '&assistant_speciality_id=' + this.props.route.params.assistant_id)
             .then((response) => response.json())
             .then((res) => {
                 console.log("!!!!!!!!!!!!!!!")
                 /*console.log(this.props.route.params.lat)
                 console.log(this.props.route.params.lng)
                 console.log(this.props.route.params.assistant_id)*/
                 let Assistants=res.infirmiers;
                 console.log( this.state.lngi ,"6942")
                 console.log( Assistants,"6942")
                 console.log("!!!!!!!!!!!!!!!!!!!")
                 if(Assistants[0]){
                 this.setState({
                     id: res.infirmiers[0].id, nam: res.infirmiers[0].name,
                      data: res.infirmiers,
                     isLoading: false,
                 })
                }else{
                    this.setState({
                        isLoading: false,
                    })
                    return<Text>Aucun résultat.</Text>
                }
             })
             .done();
    }
    displayLoading() {
        if (this.state.isLoading) {
            //Loading View while data is loading
            return (
                <View style={{ flex: 1, marginTop: 15, marginBottom: 10 }}>
                    <ActivityIndicator size="large" color="#1E79C5" />
                </View>
            );
        }
    }
//Affichage
    render() {
        function getImageFromApi(name) {
            return url2 + '/web/image?model=oeh.medical.physician&id=' + name + '&field=image'
        }

        console.log("nnn", this.state.id)
        return (
            <ScrollView style={styles.ctr}>
                {/*<Text style={{ color: 'white', fontSize: 16, backgroundColor: '#1E79C5', textAlign: 'center', height: 60, paddingTop: 18, padding: 7 }}>{this.props.route.params.assistant} à domicile</Text>*/}
                <Text style={{ fontSize: 15, margin: 5 }}>Ce professionnel exige un(e) {this.props.route.params.assistant} à domicile pour l'assister lors de ce rendez-vous en visio.</Text>
                <Text style={{ fontSize: 15, margin: 5 }}>Veuillez renseigner l'adresse du rendez-vous :</Text>
                <View style={{ marginBottom:10, marginTop: 5 }}>
                    <MapContainer1 coord={this.infirmier_coord} />
                </View>

                
                <Text style={{margin:5}} > Veuillez choisir un(e) {this.props.route.params.assistant} parmi cette liste :</Text>
                {/*this.displayLoading()*/}

                {this.displayLoading()}
                {
                    (this.state.data && this.state.isLoading!=true) ?
                        this.state.data.map((lng, key) => {
                            return <ScrollView contentContainerStyle={{ flexDirection: 'row', marginTop:10}}>
                               
                                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center',margin:5}} onPress={() => { this.Redirection();this.setState({assistant:lng.name}) }}>
                                    <Image style={{ width: 80, height: 80, borderRadius: 80 / 2,marginRight:5}} source={require('../assets/1.jpg')} />
                                    {/*<Image style={styles.img} source={{ uri:getImageFromApi( this.state.id ) }} />*/}
                                    <Text style={{ fontSize: 15, alignSelf: 'center' }}>{lng.name}</Text>
                                </TouchableOpacity>
                                
                                <View style={{margin:5,flex:1 ,alignItems:'flex-end',justifyContent:'center'}}>
                                <TouchableOpacity style={styles.prf} onPress={() => { NavigationService.navigate('Mon Profil', { id: this.state.id, name: lng.name }), this.props.route.params.modalClose(); }}>
                                    <Text style={{ color: 'white', alignSelf: 'center' }}>Voir profil</Text>
                                </TouchableOpacity>
                                </View>
                            </ScrollView>
                        })
                        :
                        <></>
                }

            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    ctr: {
        //flex: 1,
        backgroundColor: '#fff',
        //marginBottom:'30%',
        //marginHorizontal:'5%',
        //marginTop:'1%',
        //borderRadius:3
        //alignItems:'center',
        //justifyContent:'center',
        //padding:5
    },
    prf: {
        /*alignSelf:'center',*/ height: 30, width:80, backgroundColor: '#1E79C5',
        justifyContent: 'center',
        //alignItems: 'flex-end',
        //flex:1,
        borderRadius: 3,
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        elevation: 3,
    }
})