import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet,ActivityIndicator,ScrollView,Image } from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
import SearchVille from './SearchVille';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { MaterialIcons } from '@expo/vector-icons'
import { url1, url2 } from '../Navigation/GlobalUrl';
import MapContainer from '../Screens/ChangePosition';

export default class InfirmierL extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           id:'',
           data:[],
           isLoading: true,
        }
    }
   /* componentDidMount() {
        fetch(url1)
        return fetch(url2+'/rdv/auto')
            .then((response) => response.json())
            .then((res) => {
                console.log("69420")
                console.log(res.infirmiers)
                this.setState({id:res.infirmiers[0].id,name:res.infirmiers[0].name
                    ,data:res.infirmiers,
                    isLoading: false,
                })
                
            })
            .done();
      }*/
      Redirection = () => {
        NavigationService.navigate('Validez votre rendez-vous',
            {
                name: this.props.name,
                adresse:this.props.adresse,
                type_rdv:this.props.type_rdv,
                namo: this.props.namo,
                text: this.props.text,
                text1: this.props.text1,
                doctor: this.props.doctor,
                duration: this.props.duration,
                partner_id: this.props.partner_id,
                context: this.props.context,
                praticien: this.props.praticien,
                service_id: this.props.service_id,
                service_name: this.props.service_name,
                service_salle: this.props.service_salle,
                adresse_rdv: this.props.adresse_rdv,
                infirmier_id:this.state.id
            })
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
     
      render() {
        function getImageFromApi(name) {
            return url2+'/web/image?model=oeh.medical.physician&id='+ name+'&field=image'
        }
       
        console.log("nnn",this.state.id)
        return (
            <View style={styles.ctr}>
                 <Text style={{color:'white',fontSize:16,backgroundColor:'#1E79C5',textAlign:'center',height:60,paddingTop:8}}>{this.props.assistant} à domicile</Text>
                
                 <Text style={{fontSize:15,textAlign:'center',margin:7}}>Ce professionnel exige un(e) {this.props.assistant} à domicile pour l'assister lors de ce rendez-vous en vidéo.
                 Veuillez choisir un(e) {this.props.assistant} parmi cette liste :</Text>
                 {/*this.displayLoading()*/}
                {
                                        (this.state.data) ?
                                        this.state.data.map((lng, key) => {
                                                return <ScrollView contentContainerStyle={{flexDirection:'row',margin:10,justifyContent:'space-between',padding:3}}>
                                                <TouchableOpacity style={{}} onPress={() => {this.props.modalClose();this.Redirection()}}>
                                                <Image style={styles.img} source={{ uri:getImageFromApi( this.state.id ) }} />
                                                <Text style={{fontSize:15}}>{lng.name}</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.prf} onPress={() => {NavigationService.navigate('Mon Profil', { id: this.state.id,name: this.state.name}),this.props.modalClose();}}>
                                                <Text style={{color:'white',alignSelf:'center'}}>Voir profil</Text>
                                                </TouchableOpacity>
                                                </ScrollView>
                                            })
                                            :
                                            <></>
                                    }
                <MapContainer/>
            </View>
        )
}
}
const styles = StyleSheet.create({
    ctr: {
        flex: 1,
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
        alignSelf:'flex-end',height:20,width:'25%',backgroundColor:'orange',
        borderRadius:3,
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