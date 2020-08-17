import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, TextInput, StyleSheet, FlatList, Image, TouchableHighlight, TouchableOpacity, Modal,ActivityIndicator } from 'react-native'
//import { navigate } from '../../Navigation/NavigationService';
import * as NavigationService from '../../Navigation/NavigationService';
import { url1,url2 } from '../../Navigation/GlobalUrl';


export default function MprochesScreen({ navigation }) {
    const [Data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const [nom, setNom] = useState("")
    const [prenom, setPreNom] = useState("")
    const [mail, setMail] = useState("")
    const [tel, setTel] = useState("")
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(url1)
        return fetch(url2+'/api/profil?uid=26&get_proche')
            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)
                setData(res)
                setLoading(false)
            })
            .done();
    }, []);

    const update = () => {



        let bodyData = JSON.stringify({
            uid: "26",
            nom:nom,
            prenom:prenom,
            
            email: mail,
            tel:tel,
        })


        console.log(bodyData, "-------------------")

        fetch('http://51.91.249.185:8069/web/login?db=new_installation')
        fetch('http://51.91.249.185:8069/api/ajout_proche', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: bodyData
        })

            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)
                console.log("*********success***********")
                
               
                setModalVisible(false)
            })
            .done();
    }
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
    let displayLoading=() => {
        if (loading) {
          //Loading View while data is loading
          return (
            <View style={{ flex: 1, alignItems:'center', justifyContent:'center' }}>
              <ActivityIndicator size="large" color="#1E79C5" />
              
            </View>
          );
        }
      }
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}>
                <View style={styles.modalView}>


                    
                    <ScrollView>
                    <Text style={styles.text}>Nom :</Text>
                        <TextInput
                            style={styles.text_input}
                            placeholder="nom"
                            onChangeText={(nom) => { setNom(nom) }}
                        />
                        <Text style={styles.text}>Prénom :</Text>
                        <TextInput
                            style={styles.text_input}
                            placeholder="nom"
                            onChangeText={(prenom) => { setPreNom(prenom) }}
                        />
                        <Text style={styles.text}>Adresse e-mail :</Text>
                        <TextInput
                            style={styles.text_input}
                            placeholder="nom"
                            onChangeText={(mail) => { setMail(mail) }}
                        />
                        <Text style={styles.text}>Téléphone :</Text>
                        <TextInput
                            style={styles.text_input}
                            placeholder="nom"
                            onChangeText={(tel) => { setTel(tel) }}
                        />
                        <View style={{flexDirection:'row',justifyContent:"flex-end",justifyContent:"space-between"}}>
                        <TouchableOpacity
                        style={{ ...styles.openButton, backgroundColor: "#1E79C5" }}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <Text style={styles.textStyle}>Fermer</Text>
                    </TouchableOpacity>
                        <TouchableOpacity
                            style={{ ...styles.openButton, backgroundColor: "#1E79C5" }}
                            onPress={() => update()}
                        >
                            <Text style={styles.textStyle}>Ajouter</Text>
                        </TouchableOpacity>
                        </View>
                    </ScrollView>
                    
                </View>

            </Modal>
            <TouchableOpacity style={styles.btn}
                onPress={() => {
                    setModalVisible(true);
                }}>
                <Text style={{ color: 'white', fontSize: 15 }}> Ajouter un proche</Text>
            </TouchableOpacity>
            


                {
                    (Data.proches)
                        ?

                        <FlatList
                            data={Data.proches}
                            renderItem={({ item }) => <Item item={item[0]} />}
                            keyExtractor={item => item[0].id.toString()}
                        />
                        :
                        displayLoading()
                }

            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center'
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
        marginTop: 95,
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

