import React from 'react'
import { ScrollView, View, Text, Button, StyleSheet, TouchableOpacity,Modal } from 'react-native'
import { Container, Header, Content,Icon, Accordion, Item } from "native-base";
import * as NavigationService from '../Navigation/NavigationService';
import moment from 'moment';
import Infirmier from '../Components/InfirmierModal';
const dataArray = [
    { title: "lun 27/07" },
    { title: "mar 28/07" }
];



export default class DateC extends React.Component {
      
    constructor(props) {
        super(props);
        this.state = {
            
            modalOpen1: false,
            
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
           console.log(adresse, "=========")
           console.log("=========================`")
        return (
            <View>
                <Modal 
          visible    = {this.state.modalOpen1}
          animationIn  = "slideInLeft"
          animationOut = "slideOutLeft"
          style        = {{margin: 0}}
          transparent={true}
        >   
          <Infirmier  modalClose={this.CloseModal}/>
        </Modal>
                <Accordion 
                    dataArray={this.props.route.params.Med} 
                    renderContent={(item)=><View style ={{flexDirection: 'row', flexWrap: "wrap", justifyContent: 'center'}}>
                    {
                        item[1].map((day, i) => {
                        //show only 3 times
                            return(<TouchableOpacity style={styles.btn} onPress={()=> {type_rdv=='D' ? this.setState({ modalOpen1: true })/*NavigationService.navigate('Seconde adresse',
                            {
                                name: Med.obj.name,
                                adresse:this.props.dataFilter.location,
                                type_rdv:this.props.dataFilter.type_rdv,
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
                            })*/
                                
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
                                <Text>{moment(day.date_start).format("h:mm ")}</Text>
                            </TouchableOpacity>)
                            
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
