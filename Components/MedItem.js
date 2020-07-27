import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
import Calendar from './Calendar';
import { Button } from 'native-base';
import moment from 'moment';
import DateC from '../Screens/DateConsultation';
import { url2 } from '../Navigation/GlobalUrl';
class MedItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false,
            data: []
        }
    }

    /* if (Med.identifier == 'medecin') {
                                NavigationService.navigate('MedProfil', Med.obj.id)
                            }
                            else {
                                NavigationService.navigate('CentreProfil', Med)
                            } */
    componentDidMount() {
        const input = this.props.Med.days;

        const group = input.reduce((acc, item) => {
            let date = moment(item.date_start).format('MM/DD/YYYY');

            if (!acc[date]) {
                acc[date] = [];
            }

            acc[date].push(item);
            return acc;
        }, {})


        const entries = Object.entries(group)

        this.setState({
            data: entries
        })


    }


    render() {
        const Med = this.props.Med
        /*console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        for (let i = 0; i < (Med.lieux_color_ref.length); i++) {
            console.log(i)
            let data = Med.lieux_color_ref[i]
            console.log(data.lieu, '126566')
        }

        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')*/
        //const encodedData = Med.image_obj;
        function getImageFromApi(name) {
            return url2 + name
        }


        return (
            <View style={styles.main_container}  >

                <View style={styles.ctr1}>
                    {
                        (this.props.Med.obj) ?
                            <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }} onPress={() => {

                                NavigationService.navigate('Mon Profil', { id: Med.obj.id })


                            }}>
                                <Image style={styles.img} source={require('../assets/1.jpg')} />
                                {/*<Image style={styles.img} source={{ uri:getImageFromApi( Med.obj.image ) }} />*/}
                                <View style={{ flexDirection: 'column', flex: 1 }}>
                                    <Text style={styles.txt}>{Med.obj.name} </Text>
                                    <Text style={{ color: '#1E79C5', fontWeight: "bold",alignSelf:'flex-end',marginLeft:5 }}>{Med.distance} </Text>
                                    {
                                        (Med.obj.specialite) ?
                                            <Text style={{ color: '#FFC617' }}>{Med.obj.specialite} </Text>
                                            :
                                            <></>
                                    }
                                    {
                                        (Med.obj.adress_obj) ?
                                            <Text style={{ color: '#FFC617' }}>{Med.obj.adress_obj} </Text>
                                            :
                                            <></>
                                    }

                                    <Text style={{ color: '#FFC617' }}>{Med.service_display}</Text>
                                    {
                                        (Med.lieux_color_ref) ?
                                            Med.lieux_color_ref.map((lng, key) => {
                                                return <Text key={key}>{lng.lieu}</Text>
                                            })
                                            :
                                            <></>
                                    }
                                    

                                </View>
                            </TouchableOpacity>
                            :
                            <></>

                    }
                </View>

                <View style={styles.ctr2}>
                    <Text style={{ textAlign: 'center', marginBottom: 5, fontSize: 16 }}> Prochaines disponibilités:</Text>

                    {
                        this.state.data.map((item, i) => {
                            //Show only two dates 
                            return (i < 2) ?
                                <View style={{ flexDirection: 'row', marginHorizontal: 5, marginVertical: 4, justifyContent: 'space-between' }}>
                                    <Text style={{ flex: 1 / 2, color: 'grey' }}>{moment(item[0]).format("ddd DD/MM")}</Text>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        {
                                            item[1].map((day, i) => {
                                                //show only 3 times
                                                return (i < 3) ?
                                                    <TouchableOpacity style={[styles.txt_slt, { marginHorizontal: 2 }]} onPress={() => NavigationService.navigate('Prendre un rendez-vous',
                                                        {
                                                            name: Med.obj.name,
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
                                                        })}>
                                                        <Text style={styles.txt_t}>{moment(day.date_start).format("h:mm ")}</Text>
                                                    </TouchableOpacity>
                                                    :
                                                    <></>
                                            })
                                        }
                                    </View>
                                </View>
                                : <></>

                        })
                    }



                    <Modal visible={this.state.modalOpen} animationType='slide' transparent={true}  >
                        <View style={styles.modal}>
                            <View style={{ flexDirection: 'row', backgroundColor: '#1E79C5', justifyContent: 'center' }}>

                                <Text style={{ alignSelf: 'center', fontSize: 22, color: 'white' }}> Toutes les disponibilités</Text>
                            </View>
                            <DateC />
                            <TouchableOpacity style={{ marginTop: 10, marginRight: 10, backgroundColor: '#FFC617', height: 25, width: 100, borderRadius: 3, alignSelf: "flex-end" }} onPress={() => this.setState({ modalOpen: false })} >
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>Fermer</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <TouchableOpacity style={{
                            marginTop: 10, backgroundColor: '#FFC617', height: 25, width: 100, borderRadius: 5, filtrer: {
                                flexDirection: 'row', margin: 15, alignItems: 'center'
                            }
                        }} onPress={() => NavigationService.navigate('Date de rendez-vous')}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white', }}> Voir plus</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        height: 300,
        flexDirection: 'column',
        backgroundColor: "#bdc3c7",
        borderRadius: 5,
        width: '95%',
        margin: 10,
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        elevation: 5,
    },
    ctr1: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        //margin: 2,
    },
    img: {
        width: 120,
        height: 120,
        borderRadius: 60,
        //borderColor:'black',
        borderWidth: 1,
        margin: 10,
        borderRadius: 20
    },
    txt: {
        marginTop: 10,
        color: '#1E79C5',
        fontSize: 16,
        fontWeight: "bold"
    },
    ctr2: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent:'center',
        backgroundColor: 'white',
        marginTop: 1
        //margin: 2,
        //flexWrap:'wrap'
    },
    txt2: {
        width: 30,
        backgroundColor: 'grey',
        marginBottom: 5,
    },
    v_slt: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 3,
        paddingLeft: 5
        //marginRight:20
    },
    v_slt1: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 3,
        paddingRight: 10
        //marginRight:20
    },
    txt_slt: {
        textAlign: 'center',
        backgroundColor: '#2ecc71',
        width: 70,
        color: 'white',
        marginBottom: 2,
        borderRadius: 5
    },
    txt_t: {
        textAlign: 'center',

        color: 'white',
    },
    modal: {
        //flex:1,
        backgroundColor: '#fff',
        margin: 30,
        height: '50%',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1
    },
});
export default MedItem
