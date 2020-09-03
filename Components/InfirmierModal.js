import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Button, TextInput, Picker, KeyboardAvoidingView } from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
import SearchVille from './SearchVille';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { MaterialIcons } from '@expo/vector-icons'
import { url1, url2 } from '../Navigation/GlobalUrl';

export default class Infirmier extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           id:'',
           data:[]
        }
    }
    componentDidMount() {
        fetch(url1)
        return fetch(url2+'/rdv/auto')
            .then((response) => response.json())
            .then((res) => {
                console.log("69420")
                console.log(res.infirmiers)
                this.setState({id:res.infirmiers[0].id,name:res.infirmiers[0].name,data:res.infirmiers})
                
            })
            .done();
      }
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
      render() {
        console.log("nnn",this.state.id)
        return (
            <View style={styles.ctr}>
                 <Text style={{color:'white',fontSize:20,backgroundColor:'#1E79C5',textAlign:'center',marginBottom:30,height:40}}>Assistants</Text>
                
                
                {
                                        (this.state.data) ?
                                        this.state.data.map((lng, key) => {
                                                return <View style={{flexDirection:'row',margin:7,justifyContent:'space-between'}}>
                                                <TouchableOpacity style={{}} onPress={() => {this.props.modalClose();this.Redirection()}}>
                                                <Text style={{fontSize:17}}>{lng.name}</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{alignSelf:'flex-end'}} onPress={() => {NavigationService.navigate('Mon Profil', { id: this.state.id,name: this.state.name}),this.props.modalClose();}}>
                                                <Text style={{color:'blue'}}>Voir profil</Text>
                                                </TouchableOpacity>
                                                </View>
                                            })
                                            :
                                            <></>
                                    }
                
            </View>
        )
}
}
const styles = StyleSheet.create({
    ctr: {
        flex: 1,
        backgroundColor: '#fff',
        marginBottom:'30%',
        marginHorizontal:'5%',
        marginTop:'1%',
        //alignItems:'center',
        //justifyContent:'center',
        //padding:10
    }
})