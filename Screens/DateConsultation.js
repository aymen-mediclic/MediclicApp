import React from 'react'
import { ScrollView, View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Header, Content,Icon, Accordion, Item } from "native-base";
import * as NavigationService from '../Navigation/NavigationService';
import moment from 'moment';
import Infirmier from '../Components/InfirmierModal';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Modal from 'react-native-modal';
const dataArray = [
    { title: "lun 27/07" },
    { title: "mar 28/07" }
];



export default class DateC extends React.Component {
      
    constructor(props) {
        super(props);
        this.state = {
            modalOpen1: false,
            name: "",
            adresse: "",
            type_rdv: "",
            namo: "",
            text: "",
            text1: "",
            doctor: "",
            duration: "",
            partner_id: "",
            context: "",
            praticien: "",
            service_id: "",
            service_name: "",
            service_salle: "",
            adresse_rdv: ""
        }
    }
    _renderContent(item) {
        return (
            <View style ={{flexDirection: 'row', flexWrap: "wrap", justifyContent: 'center'}}>
                {
                    item[1].map((day, i) => {
                    //show only 3 times
                        return(<TouchableOpacity style={styles.btn} onPress={(props)=>NavigationService.navigate('Validez votre rendez-vous',
                                                {
                                                    name:Name,
                                                    namo: day.name,
                                                    text: day.date_start,
                                                    text1: day.date_end,
                                                    doctor: day.doctor,
                                                    duration: day.duration,
                                                    partner_id: day.partner_id,
                                                    context: day.context,
                                                    praticien: day.praticien,
                                                    service_id: day.service_id,
                                                    service_name: day.service_name,
                                                    service_salle: day.service_salle,
                                                    adresse_rdv: day.adresse_rdv
                                                })} >
                            <Text>{moment(day.date_start).format("h:mm ")}</Text>
                        </TouchableOpacity>)
                        
                    })

                }

            </View>
        )
       
    }

    _renderHeander = (item, expanded)=>{
        return(
        <View style ={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            backgroundColor: "lightgray",
            margin:2
        }}>
            <Text>{moment(item[0]).format("ddd DD/MM")}</Text>
            {expanded
          ? <Icon style={{ fontSize: 15 }} name="remove" />
          : <Icon style={{ fontSize: 15 }} name="add" />}
        </View>
        )
    }
    CloseModal = () => {
        this.setState({ modalOpen1: false })
      }

    render() {
        const Name= this.props.route.params.Name
        const adresse=this.props.route.params.location
       const type_rdv=this.props.route.params.type_rdv
       console.log("=========================")
           console.log(this.props.route.params.Med, "=========")
           console.log("=========================`")
        return (
            <View>
                <Modal
                        isVisible={this.state.modalOpen1}
                        //animationIn="slideInLeft"
                        //animationOut="slideOutLeft"
                        style={{ margin: 0 }}
                        transparent={true}
                    >
                        <TouchableOpacity style={{ alignSelf: 'flex-end', height: 35, width: 35, borderRadius: 35 / 2, backgroundColor: '#1E79C5',marginTop:'30%', marginRight: '5%', padding: 10 }} onPress={() =>   this.setState({ modalOpen1: false })}>
                            <Fontisto color='white' size={15} name={'close-a'} style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }} />
                        </TouchableOpacity>
                        <Infirmier modalClose={this.CloseModal}
                            name={this.state.name}
                            adresse={this.state.adresse}
                            type_rdv={this.state.type_rdv}
                            namo={this.state.namo}
                            text={this.state.text}
                            text1={this.state.text1}
                            doctor={this.state.doctor}
                            duration={this.state.duration}
                            partner_id={this.state.partner_id}
                            context={this.state.context}
                            praticien={this.state.praticien}
                            service_id={this.state.service_id}
                            service_name={this.state.service_name}
                            service_salle={this.state.service_salle}
                            adresse_rdv={this.state.adresse_rdv} />
                    </Modal>
                <Accordion 
                    dataArray={this.props.route.params.Med} 
                    renderContent={(item)=><View style ={{flexDirection: 'row', flexWrap: "wrap", justifyContent: 'center'}}>
                    {
                        item[1].map((day, i) => {
                        //show only 3 times
                            return(<TouchableOpacity style={[styles.btn,{ backgroundColor: day.color }]} onPress={()=> {type_rdv=='V'&& day.assistant!=false ? this.setState({ modalOpen1: true,
                            
                                name:Name,
                                adresse:adresse,
                                type_rdv:type_rdv,
                                namo: day.name,
                                text: day.date_start,
                                text1: day.date_end,
                                doctor: day.doctor,
                                duration: day.duration,
                                partner_id: day.partner_id,
                                context: day.context,
                                praticien: day.praticien,
                                service_id: day.service_id,
                                service_name: day.service_name,
                                service_salle: day.service_salle,
                                adresse_rdv: day.adresse_rdv
                            })
                                
                               : NavigationService.navigate('Validez votre rendez-vous',
                                                    {
                                                        name:Name,
                                                        adresse:adresse,
                                                        type_rdv:type_rdv,
                                                        namo: day.name,
                                                        text: day.date_start,
                                                        text1: day.date_end,
                                                        doctor: day.doctor,
                                                        duration: day.duration,
                                                        partner_id: day.partner_id,
                                                        context: day.context,
                                                        praticien: day.praticien,
                                                        service_id: day.service_id,
                                                        service_name: day.service_name,
                                                        service_salle: day.service_salle,
                                                        adresse_rdv: day.adresse_rdv
                                                    })}} >
                                                        
                                <Text style={{color:'white'}} >{moment(day.date_start).format("h:mm ")}</Text>
                            </TouchableOpacity>
                            )
                            
                        })
    
                    }
                
                </View>}
                    renderHeader = {this._renderHeander}
                />
            </View>

        );

    }
}
const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#c7ecee',
        width: 70,
        height: 50,
        margin: 10,
    },
    txt: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 10,
        marginTop: 10

    },

});
