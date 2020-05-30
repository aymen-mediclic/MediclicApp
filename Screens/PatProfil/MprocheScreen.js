import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, TextInput, StyleSheet, FlatList, Image, TouchableHighlight, TouchableOpacity, Modal } from 'react-native'
//import { navigate } from '../../Navigation/NavigationService';
import * as NavigationService from '../../Navigation/NavigationService';


export default function MprochesScreen({ navigation }) {
    const [Data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        fetch('http://51.91.249.185:8069/web/login?db=new_installation')
        return fetch('http://51.91.249.185:8069/api/profil?uid=85&get_proche')
            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)
                setData(res)
            })
            .done();
    }, []);
    function Item({ item }) {
        return (

            <View style={styles.item}>


                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.title}>{item.nom}</Text>
                    <Text style={styles.title}>{item.prenom}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.title1}> {item.email}</Text>

                </View>
                <TouchableOpacity onPress={() => NavigationService.navigate('Proche Profil:')} style={{ backgroundColor: '#3498db', width: 80, borderRadius: 5, alignItems: 'center', marginVertical: 5, alignSelf: 'flex-end' }} >
                    <Text style={{ color: 'white' }}> voir plus</Text>
                </TouchableOpacity>

            </View>
        );
    }
    console.log(Data, "<><><><><><><><")
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}>
                <View style={styles.modalView}>


                    <TouchableOpacity
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <Text style={styles.textStyle}>Fermer</Text>
                    </TouchableOpacity>
                    <ScrollView>
                        <Text style={styles.text}>Nom:</Text>
                        <TextInput style={styles.text_input} placeholder="nom" />
                        <Text style={styles.text}>Prénom:</Text>
                        <TextInput style={styles.text_input} placeholder="Prénom" />
                        <Text style={styles.text}>Adresse e-mail:</Text>
                        <TextInput style={styles.text_input} placeholder="e-mail" />
                        <Text style={styles.text}>Téléphone:</Text>
                        <TextInput style={styles.text_input} placeholder="Téléphone" />
                        <TouchableOpacity
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Ajouter</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

            </Modal>
            <TouchableOpacity style={styles.btn}
                onPress={() => {
                    setModalVisible(true);
                }}>
                <Text style={{ color: 'white', fontSize: 15 }}> Ajouter un proche</Text>
            </TouchableOpacity>
            <View>


                {
                    (Data.proches)
                        ?

                        <FlatList
                            data={Data.proches}
                            renderItem={({ item }) => <Item item={item[0]} />}
                            keyExtractor={item => item[0].id}
                        />
                        :
                        <Text style={{ alignItems: 'center', justifyContent: 'center' }}>Veuillez patienter Svp</Text>
                }

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title1: {
        fontSize: 14,

    },
    title: {
        fontSize: 16,
        marginRight: 5,
        fontWeight: 'bold',
        marginVertical: 5,
        color: '#2c3e50'
    },
    textStyle: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 14,
    },
    centeredView: {
        flex: 1,
        //justifyContent: "center",
        //alignItems: "center",
        //marginBottom: 60,
        //marginTop:30,
        backgroundColor: 'white'
    },
    btn: {
        borderRadius: 8,
        backgroundColor: 'orange',
        color: 'white',
        width: 200,
        height: 30,
        alignSelf: 'flex-end',
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    modalView: {
        //margin: 5,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        //alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        width: 150,
        alignSelf: 'flex-end'
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    text_input: {
        alignSelf: 'center',
        height: 30,
        width: "90%",
        borderColor: '#dfe4ea',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        backgroundColor: 'white',
        marginBottom: 15,
    },
    text: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#2c3e50'
    },
});

