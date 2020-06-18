import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
import Calendar from './Calendar';
import { Button } from 'native-base';
import moment from 'moment';
import DateC from '../Screens/DateConsultation';
class MedItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false,
            data: []
        }
    }


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


        //const encodedData = Med.image_obj;
       function getImageFromApi (name) {
            return 'http://51.91.249.185:8069' + name
          }


        return (
            <View style={styles.main_container}  >

                <View style={styles.ctr1}>
                    <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }} onPress={() => {
                        if (Med.identifier == 'medecin') {
                            NavigationService.navigate('MedProfil', Med)
                        }
                        else {
                            NavigationService.navigate('CentreProfil', Med)
                        }
                    }}>

                        <Image style={styles.img} source={{ uri:getImageFromApi( Med.obj.image ) }} />
                        <View style={{ flexDirection: 'column', flex: 1 }}>
                            <Text style={styles.txt}> {Med.obj.name} </Text>
                            <Text> {Med.obj.specialite} </Text>
                            <Text> {Med.obj.adress_obj} </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.ctr2}>
                    <Text style={{ textAlign: 'center', marginBottom: 5, fontSize: 16 }}> Prochaines disponibilités:</Text>

                    {
                        this.state.data.map((item, i) => {
                            //Show only two dates 
                            return (i < 2) ?
                                <View style={{ flexDirection: 'row', marginHorizontal: 5, justifyContent: 'space-between' }}>
                                    <Text style={{ flex: 1 / 2, color: 'grey' }}>{moment(item[0]).format("ddd DD/MM")}</Text>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        {
                                            item[1].map((day, i) => {
                                                //show only 3 times
                                                return (i < 3) ?
                                                    <TouchableOpacity style={[styles.txt_slt, { marginHorizontal: 2 }]} onPress={() => NavigationService.navigate('Prendre un rendez-vous', { text: day.date_start, name: Med.obj.name })}>
                                                        <Text style={[styles.txt_slt, { marginHorizontal: 2 }]} >{moment(day.date_start).format("h:mm a")}</Text>
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
                        <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#FFC617', height: 25, width: 100, borderRadius: 10 }} onPress={() => NavigationService.navigate('Date de rendez-vous')}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}> Voir plus</Text>
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
        backgroundColor: "grey",
        width: '95%',
        margin: 10,
    },
    ctr1: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        //margin: 2,
    },
    img: {
        width: 90,
        height: 70,
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
        backgroundColor: '#1E79C5',
        width: 70,
        color: 'white',
        marginBottom: 2,
        borderRadius: 3
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
