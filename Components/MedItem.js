import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Image, Modal } from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Calendar from './Calendar';
import { MaterialIcons } from '@expo/vector-icons'
class MedItem extends React.Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.state = {
            modalOpen: false,
        }
    }
    handler() {
        this.setState({
            modalOpen: false,
        });
    }
    render() {
        const Med = this.props.Med
        const encodedData = Med.image;
        return (
            <View style={styles.main_container}  >

                <View style={styles.ctr1}>
                <TouchableOpacity style={{flexDirection:'row'}}  onPress={() => {
                        if (Med.identifier == 'medecin') {
                            NavigationService.navigate('MedProfil', Med)
                        }
                        else {
                            NavigationService.navigate('CentreProfil', Med)
                        }
                    }}>
                        <Image style={styles.img} source={{ uri: `data:image/gif;base64,${encodedData}` }} />
                    
                    <View>
                        <Text style={styles.txt}> {Med.name} </Text>
                        <Text style={{ flexWrap: 'wrap' }} > {Med.specialite} </Text>
                        <Text style={{ flexShrink:1 }} > {Med.work} </Text>
                    </View>    
                    </TouchableOpacity>
                </View>
                <View style={styles.ctr2}>
                    <Text style={{ textAlign: 'center', marginBottom: 5, fontSize: 18 }}>Prochaines disponibilités:</Text>
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.v_slt}>
                            <Text>Ven:10/04</Text>
                            <Text>Sam:11/04</Text>
                        </View>
                        <View style={styles.v_slt1}>
                            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={styles.txt_slt}>08:00</Text>
                            <Text style={styles.txt_slt}>09:00</Text>
                            <Text style={styles.txt_slt}>10:00</Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={styles.txt_slt}>08:00</Text>
                            <Text style={styles.txt_slt}>09:00</Text>
                            <Text style={styles.txt_slt}>10:00</Text>
                            </View>
                        </View>
                    </View>
                    <Modal visible={this.state.modalOpen} animationType='slide' transparent={true}  >
                        <View style={styles.modal}>
                            <MaterialIcons name='close' size={30} onPress={() => this.setState({ modalOpen: false })} />
                            <Text style={{ alignSelf: 'center', fontSize: 28,backgroundColor:'#2980b9',color:'white' }}> Toutes les disponibilités</Text>

                        <Calendar action={this.handler} />
                        </View>
                    </Modal>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity style={{marginTop:10,backgroundColor: '#FFC617', height: 25, width: 100, borderRadius: 10 }} onPress={() => this.setState({ modalOpen: true })}>
                        <Text style={{ textAlign: 'center', fontStyle: 'italic', color: 'white' }}> Voir plus</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main_container: {
        flex:1,
        height: 300,
        flexDirection: 'column',
        backgroundColor: "grey",
        width: '95%',
        margin:10,
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
        marginTop:1
        //margin: 2,
        //flexWrap:'wrap'
    },
    txt2: {
        width: 30,
        backgroundColor: 'grey',
        marginBottom: 5,
    },
    v_slt: {
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between',
        marginTop:3,
        paddingLeft:5
        //marginRight:20
    },
    v_slt1: {
        flex:2,
        flexDirection:'column',
        justifyContent:'space-between',
        marginTop:3,
        paddingRight:10
        //marginRight:20
    },
    txt_slt: {
        textAlign:'center',
        backgroundColor: '#1E79C5',
        width:50,
        color:'white',
        marginBottom:2
    },
    modal: {
        flex:1,
        backgroundColor: 'white',
        margin: 30, 
        height:'20%'
    },
});
export default MedItem
