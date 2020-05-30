import React, { useEffect, useState } from 'react'
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, ScrollView, checkedIcon, Modal, _ScrollView } from 'react-native'

export default function MprofilScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        fetch('http://51.91.249.185:8069/web/login?db=new_installation')
        return fetch('http://51.91.249.185:8069/api/profil_proche?uid=85&get_file&proche=118')
            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)
            })
            .done();
    }, []);
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }} >
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
                            <Text style={styles.text}>Civilité:</Text>
                            <TextInput style={styles.text_input} placeholder="Civilité" />
                            <Text style={styles.text}>Date de naissance:</Text>
                            <TextInput style={styles.text_input} placeholder="Date de naissance" />
                            <Text style={styles.text}>N° CIN :</Text>
                            <TextInput style={styles.text_input} placeholder="N° CIN" />
                            <Text style={styles.text}>N° Mutuelle :</Text>
                            <TextInput style={styles.text_input} placeholder="N° Mutuelle" />
                            <Text style={styles.text}>Adresse :</Text>
                            <TextInput style={styles.text_input} placeholder="Adresse" />
                            <Text style={styles.text}>Ville :</Text>
                            <TextInput style={styles.text_input} placeholder="Ville " />
                            <TouchableOpacity
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>Modifier</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                
            </Modal>
            <TouchableOpacity style={styles.btn}
                onPress={() => {
                    setModalVisible(true);
                }}>
                <Text style={{ color: 'white', fontSize: 15 }}> Modifier mon profil</Text>
            </TouchableOpacity>
            <View style={styles.main_container}>
                <Text style={styles.text}>Nom:</Text>
                <Text style={styles.text1}>TEST</Text>
            </View>
            <View style={styles.main_container}>
                <Text style={styles.text}>Prénom:</Text>
                <Text style={styles.text1}>Test</Text>
            </View>
            <View style={styles.main_container}>
                <Text style={styles.text}>Civilité:</Text>
                <Text style={styles.text1}>femme</Text>
            </View>
            <View style={styles.main_container}>
                <Text style={styles.text}>Date de naissance:</Text>
                <Text style={styles.text1}>01-01-1980</Text>
            </View>
            <View style={styles.main_container}>
                <Text style={styles.text}>N° CIN :</Text>
                <Text style={styles.text1}>BE 12345</Text>
            </View>
            <View style={styles.main_container}>
                <Text style={styles.text}>N° Mutuelle :</Text>
                <Text style={styles.text1}>12345</Text>
            </View>
            <View style={styles.main_container}>
                <Text style={styles.text}>Adresse :</Text>
                <Text style={styles.text1}>xxxx</Text>
            </View>
            <View style={styles.main_container}>
                <Text style={styles.text}>Ville :</Text>
                <Text style={styles.text1}>xxxx</Text>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    main_container: {
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 10,
        justifyContent: "space-between",
        paddingRight: 10
    },
    text: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#2c3e50'
    },
    text1: {
        fontSize: 16
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
    centeredView: {
        //flex: 1,
        //justifyContent: "center",
        //alignItems: "center",
        //marginTop: 10
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
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})
/*import React, { useEffect, useState } from 'react'
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, ScrollView, checkedIcon, Modal, _ScrollView } from 'react-native'

export default function MprofilScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        fetch('http://51.91.249.185:8069/web/login?db=new_installation')
        return fetch('http://51.91.249.185:8069/api/profil?uid=244&get_profil')
            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)
            })
            .done();
    }, []);
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }} >
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
                            <Text style={styles.text}>Civilité:</Text>
                            <TextInput style={styles.text_input} placeholder="Civilité" />
                            <Text style={styles.text}>Date de naissance:</Text>
                            <TextInput style={styles.text_input} placeholder="Date de naissance" />
                            <Text style={styles.text}>N° CIN :</Text>
                            <TextInput style={styles.text_input} placeholder="N° CIN" />
                            <Text style={styles.text}>N° Mutuelle :</Text>
                            <TextInput style={styles.text_input} placeholder="N° Mutuelle" />
                            <Text style={styles.text}>Adresse :</Text>
                            <TextInput style={styles.text_input} placeholder="Adresse" />
                            <Text style={styles.text}>Ville :</Text>
                            <TextInput style={styles.text_input} placeholder="Ville " />
                            <TouchableOpacity
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>Modifier</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                
            </Modal>
            <TouchableOpacity style={styles.btn}
                onPress={() => {
                    setModalVisible(true);
                }}>
                <Text style={{ color: 'white', fontSize: 15 }}> Modifier mon profil</Text>
            </TouchableOpacity>
            <View style={styles.main_container}>
                <Text style={styles.text}>Nom:</Text>
                <Text style={styles.text1}>TEST</Text>
            </View>
            <View style={styles.main_container}>
                <Text style={styles.text}>Prénom:</Text>
                <Text style={styles.text1}>Test</Text>
            </View>
            <View style={styles.main_container}>
                <Text style={styles.text}>Civilité:</Text>
                <Text style={styles.text1}>femme</Text>
            </View>
            <View style={styles.main_container}>
                <Text style={styles.text}>Date de naissance:</Text>
                <Text style={styles.text1}>01-01-1980</Text>
            </View>
            <View style={styles.main_container}>
                <Text style={styles.text}>N° CIN :</Text>
                <Text style={styles.text1}>BE 12345</Text>
            </View>
            <View style={styles.main_container}>
                <Text style={styles.text}>N° Mutuelle :</Text>
                <Text style={styles.text1}>12345</Text>
            </View>
            <View style={styles.main_container}>
                <Text style={styles.text}>Adresse :</Text>
                <Text style={styles.text1}>xxxx</Text>
            </View>
            <View style={styles.main_container}>
                <Text style={styles.text}>Ville :</Text>
                <Text style={styles.text1}>xxxx</Text>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    main_container: {
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 10,
        justifyContent: "space-between",
        paddingRight: 10
    },
    text: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#2c3e50'
    },
    text1: {
        fontSize: 16
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
    centeredView: {
        //flex: 1,
        //justifyContent: "center",
        //alignItems: "center",
        //marginTop: 10
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
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})*/