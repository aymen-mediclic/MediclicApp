import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Image, Modal,TouchableOpacity } from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
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
                    <TouchableOpacity style={{ flexDirection: 'row',flex:1}} onPress={() => {
                        if (Med.identifier == 'medecin') {
                            NavigationService.navigate('MedProfil', Med)
                        }
                        else {
                            NavigationService.navigate('CentreProfil', Med)
                        }
                    }}>
                        

                        <View style={{ flexDirection: 'column',flex:1}}>
                            <Text style={styles.txt}> {Med.obj.name} </Text>
                            <Text> {Med.obj.specialite} </Text>
                            
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.ctr2}>
                    <Text style={{ textAlign: 'center', marginBottom: 5, fontSize: 16 }}> available appointements:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.v_slt}>
                            <Text style={{ color: 'grey' }}>Today</Text>
                            <Text style={{ color: 'grey' }}>Tomorrow</Text>
                        </View>
                        <View style={styles.v_slt1}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.txt_slt}>07:00</Text>

                                <Text style={styles.txt_slt}>08:00</Text>
                                <Text style={styles.txt_slt}>11:00</Text>

                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.txt_slt}>08:00</Text>
                                
                            </View>
                        </View>
                    </View>
                    <Modal visible={this.state.modalOpen} animationType='slide' transparent={true}  >
                        <View style={styles.modal}>
                            <View style={{ flexDirection: 'row', backgroundColor: '#1E79C5', justifyContent: 'center' }}>
                                
                                <Text style={{ alignSelf: 'center', fontSize: 22, color: 'white' }}> Toutes les disponibilités</Text>
                            </View>
                            <Calendar />
                            
                            <TouchableOpacity style={{ marginTop: 10,marginRight:10, backgroundColor: '#FFC617', height: 25, width: 100, borderRadius: 3,alignSelf:"flex-end"}} onPress={() => this.setState({ modalOpen: false })} >
                                    <Text style={{ textAlign: 'center', fontStyle: 'italic', color: 'white' }}>Fermer</Text>
                                </TouchableOpacity>
                        </View>
                    </Modal>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#FFC617', height: 25, width: 100, borderRadius: 10 }} onPress={() => this.setState({ modalOpen: true })}>
                            <Text style={{ textAlign: 'center', fontStyle: 'italic', color: 'white' }}> See more</Text>
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
        marginBottom:2,
        borderRadius: 3
    },
    modal: {
        //flex:1,
        backgroundColor: '#fff',
        margin: 30,
        height: '50%',
        borderRadius: 5,
        borderColor:'black',
        borderWidth:1
    },
});
export default MedItem
/*version officiel
import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Image, Modal,TouchableOpacity } from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
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
                    <TouchableOpacity style={{ flexDirection: 'row',flex:1}} onPress={() => {
                        if (Med.identifier == 'medecin') {
                            NavigationService.navigate('MedProfil', Med)
                        }
                        else {
                            NavigationService.navigate('CentreProfil', Med)
                        }
                    }}>
                        <Image style={styles.img} source={{ uri: `data:image/gif;base64,${encodedData}` }} />

                        <View style={{ flexDirection: 'column',flex:1}}>
                            <Text style={styles.txt}> {Med.name} </Text>
                            <Text> {Med.specialite} </Text>
                            <Text> {Med.work} </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.ctr2}>
                    <Text style={{ textAlign: 'center', marginBottom: 5, fontSize: 16 }}>Prochaines disponibilités:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.v_slt}>
                            <Text style={{ color: 'grey' }}>Ven:10/04</Text>
                            <Text style={{ color: 'grey' }}>Sam:11/04</Text>
                        </View>
                        <View style={styles.v_slt1}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.txt_slt}>08:00</Text>

                                <Text style={styles.txt_slt}>09:00</Text>
                                <Text style={styles.txt_slt}>10:00</Text>

                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.txt_slt}>08:00</Text>
                                <Text style={styles.txt_slt}>09:00</Text>
                                <Text style={styles.txt_slt}>10:00</Text>
                            </View>
                        </View>
                    </View>
                    <Modal visible={this.state.modalOpen} animationType='slide' transparent={true}  >
                        <View style={styles.modal}>
                            <View style={{ flexDirection: 'row', backgroundColor: '#2980b9', justifyContent: 'center' }}>
                                <MaterialIcons color='white' name='close' size={25} onPress={() => this.setState({ modalOpen: false })} />
                                <Text style={{ alignSelf: 'center', fontSize: 22, color: 'white' }}> Toutes les disponibilités</Text>
                            </View>
                            <Calendar />
                        </View>
                    </Modal>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#FFC617', height: 25, width: 100, borderRadius: 10 }} onPress={() => this.setState({ modalOpen: true })}>
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
        marginBottom:2,
        borderRadius: 3
    },
    modal: {
        //flex:1,
        backgroundColor: '#fff',
        margin: 30,
        height: '50%',
        borderRadius: 5,
    },
});
export default MedItem

*/ 