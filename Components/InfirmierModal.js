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
           id:''
        }
    }
    componentDidMount() {
        fetch(url1)
        return fetch(url2+'/rdv/auto')
            .then((response) => response.json())
            .then((res) => {
                console.log("69420")
                console.log(res.infirmiers[0].id)
                this.setState({id:res.infirmiers[0].id,name:res.infirmiers[0].name})
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
                adresse_rdv: this.props.adresse_rdv
            })
    }
      render() {
        console.log("nnn",this.state.id)
        return (
            <View style={styles.ctr}>
                <TouchableOpacity style={{ alignSelf:'flex-end', height:35, width:35,borderRadius:35/2,backgroundColor:'#1E79C5',marginRight:'12%',padding:10}} onPress={() => this.props.modalClose()}>
                  <Fontisto color='white' size={15} name={'close-a'} style={{ alignSelf: 'center',alignItems:'center',justifyContent:'center'}} />
                </TouchableOpacity>
                 <Text style={{color:'white',fontSize:20,backgroundColor:'#1E79C5',textAlign:'center',marginBottom:30}}>Infirmiers</Text>
                <View style={{flexDirection:'row',marge:20}}>
                <TouchableOpacity style={{alignItems:'flex-end',marge:20}} onPress={() => {this.Redirection(),this.props.modalClose();}}>
                <Text style={{fontSize:17,marginRight:85}}>BAROUD A</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'flex-end',marge:20}} onPress={() => {NavigationService.navigate('Mon Profil', { id: this.state.id,name: this.state.name}),this.props.modalClose();}}>
                <Text style={{color:'blue'}}>Voir profil</Text>
                </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row',marge:20}}>
                <Text style={{fontSize:17,marginRight:100}}>ALAMI A</Text>
                <TouchableOpacity style={{alignItems:'flex-end',marge:20}}>
                <Text style={{color:'blue'}}>Voir profil</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
}
}
const styles = StyleSheet.create({
    ctr: {
        flex: 1,
        backgroundColor: '#fff',
        marginBottom:170,
        marginHorizontal:20,
        marginTop:150,
        //alignItems:'center',
        //justifyContent:'center',
        //padding:10
    }
})