import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, TextInput, StyleSheet, FlatList, Image, AsyncStorage, TouchableOpacity,ActivityIndicator } from 'react-native'
//import { navigate } from '../../Navigation/NavigationService';
import * as NavigationService from '../../Navigation/NavigationService';
import { url1,url2 } from '../../Navigation/GlobalUrl';
import Modal from 'react-native-modal';
import Fontisto from 'react-native-vector-icons/Fontisto';
export default function MprochesScreen({ navigation }) {
    const [Data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const [nom, setNom] = useState("")
    const [prenom, setPreNom] = useState("")
    const [mail, setMail] = useState("")
    const [tel, setTel] = useState("")
    const [loading, setLoading] = useState(true);
    const [Error,setError] = useState(true)
    const [color,setColor] = useState('#dfe4ea')
    const [Error1,setError1] = useState(true)
    const [color1,setColor1] = useState('#dfe4ea')
    const [Error2,setError2] = useState(true)
    const [color2,setColor2] = useState('#dfe4ea')
    const [Error3,setError3] = useState(true)
    const [color3,setColor3] = useState('#dfe4ea')
    const [Id, setId] = useState('')
    useEffect(() => {
        _retrieveData();
    }, []);
    const _retrieveData = async () => {
        try {
          
          let id = await AsyncStorage.getItem("id");
         
    
          if (id !== null) {
            // We have data!!
            console.log(id,"1!!");
            setId(id)
          }
        } catch (error) {
            console.log(error);
        }
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
        }
    const update = () => {
        var formdata = new FormData()
            
        formdata.append('uid',Id),
        formdata.append('nom',nom)
        formdata.append('prenom',prenom)
        formdata.append('email', mail)
        formdata.append('tel',tel)
        


        console.log(formdata, "-------------------")

        fetch(url1)
        fetch(url2+'/api/ajout_proche', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            body: formdata
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
    const checkError=()=> {
        if(nom == ''){
           setError(false), setColor('red')
        }/* else if(nom != '')
        {  setError(true),setColor('#2ecc71')}*/
        
        else if(prenom == ''){
            setError1(false), setColor1('red') ,setError(true),setColor('#2ecc71')
        }else if(mail == ''){
            setError2(false), setColor2('red'),setError1(true),setColor1('#2ecc71')
        }
        else if(tel == ''){
            setError3(false), setColor3('red'),setError2(true),setColor2('#2ecc71')
        }
        /*else if(adresse== ''){
            setError4(false), setColor4('red'),setError3(true),setColor3('#2ecc71')
        }
        else if(ville == ''){
            setError5(false), setColor5('red'),setError4(true),setColor4('#2ecc71')
        }*/
        else{
            setModalVisible(!modalVisible);
            update()
            
        }
        

    }
    let Capitalize=(str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1);
        }
    function Item({ item }) {
        return (
            
            <View style={styles.item}>


                <View style={{ flexDirection: "row" }}>
                    <Text style={{ ...styles.title, flex: 3 }}>Nom</Text>
                    <Text style={{ ...styles.title,  width:10}}>:</Text>
                    <Text style={{...styles.title1, flex: 3}}>{item.nom.toUpperCase()}  {Capitalize(item.prenom)}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                <Text style={{ ...styles.title, flex: 3 }}>Adresse e-mail</Text>
                    <Text style={{ ...styles.title,  width:10}}>:</Text>
                    <Text style={{...styles.title1, flex: 3}}>{item.email?item.email:"Non renseigné"}</Text>

                </View>
                <View style={{ flexDirection: "row" ,marginBottom:5}}>
                <Text style={{ ...styles.title, flex: 3 }}>N°Téléphone</Text>
                    <Text style={{ ...styles.title,  width:10}}>:</Text>
                    <Text style={{...styles.title1, flex: 3}}>{item.tel?item.tel:"Non renseigné"}</Text>

                </View>
                <TouchableOpacity onPress={() => NavigationService.navigate('Proche Profil:',{id_p:item.id})} style={{ backgroundColor: '#1E79C5',justifyContent:"center",height:25, width: 80, borderRadius: 5, alignItems: 'center', marginVertical: 5, alignSelf: 'flex-end' }} >
                    <Text style={{ color: 'white',fontWeight:'bold' }}> Voir plus</Text>
                </TouchableOpacity>
                
            </View>
        );
    }
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
                isVisible={modalVisible}
                >
                <View style={styles.modalView}>


                <View style={{ flexDirection: "row", alignItems:'center',justifyContent: 'space-between',padding:10,height:50,backgroundColor:'#1E79C5',borderTopLeftRadius:5,borderTopRightRadius:5,marginBottom:10}}>
                                        <Text style={{fontSize:17,fontWeight:'bold',textAlign:'center',color:'white'}}>Ajouter un proche</Text>
                                        <TouchableOpacity style={{ flex: 1, alignItems: "flex-end", height: 30, justifyContent: 'center' }} onPress={() => {
                                setModalVisible(!modalVisible);
                            }}>
                        <Fontisto color='white' size={16} name={'close-a'} style={{ justifyContent: 'center' }} />
                    </TouchableOpacity>
                      </View> 
                    <View>
                  
                    <Text style={styles.text}>Nom (de naissance) :</Text>
                        <TextInput
                            style={{...styles.text_input,borderColor:color}}
                            placeholder="Nom (de naissance)"
                            onChangeText={(nom) => { setNom(nom) }}
                        />
                        {Error == false ? (
                            <Text style={{fontSize:14,color:'red',marginLeft:20}} >
                                 Veuillez renseigner votre nom (de naissance).
                            </Text>
                             ) : null}
                        <Text style={styles.text}>Prénom :</Text>
                        <TextInput
                            style={{...styles.text_input,borderColor:color1}}
                            placeholder="Prénom"
                            onChangeText={(prenom) => { setPreNom(prenom) }}
                        />
                        {Error1 == false ? (
                            <Text style={{fontSize:14,color:'red',marginHorizontal:10}} >
                                 Veuillez renseigner votre prénom .
                            </Text>
                             ) : null}
                        <Text style={styles.text}>Adresse e-mail :</Text>
                        <TextInput
                            style={{...styles.text_input,borderColor:color2}}
                            placeholder="Adresse e-mail"
                            //value='asmaa@a.com'
                            onChangeText={(mail) => { setMail(mail) }}
                        />
                        {Error2 == false ? (
                            <Text style={{color:'red',marginLeft:20}} >
                                 Veuillez renseigner votre adresse e-mail .
                            </Text>
                             ) : null}
                        <Text style={styles.text}>N° Téléphone  :</Text>
                        <TextInput
                            style={{...styles.text_input,borderColor:color3}}
                            placeholder="N° Téléphone "
                            value='0785858582'
                            onChangeText={(tel) => { setTel(tel) }}
                        />
                        {Error3 == false ? (
                            <Text style={{color:'red',marginLeft:20}} >
                                 Veuillez renseigner votre téléphone .
                            </Text>
                             ) : null}
                       
                        <TouchableOpacity
                            style={{ ...styles.openButton, backgroundColor: "#1E79C5",margin:10 }}
                            onPress={() => checkError()}
                        >
                            <Text style={styles.textStyle}>Ajouter</Text>
                        </TouchableOpacity>
                        
                    </View>
                    
                </View>

            </Modal>
            <TouchableOpacity style={{flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', margin: 5, marginRight: 15, marginTop: 15 }}
                            onPress={() => {
                                setModalVisible(true);
                            }}>
                                <Text style={{ color: 'orange', fontSize: 17, fontWeight: 'bold', marginRight: 5 }}>Ajouter un proche</Text>
                                <View style={{backgroundColor:'orange',padding:5,width:30,height:30,borderRadius:30/2,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{ color: 'white', fontSize: 25 }}>+</Text>
                            </View>
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
        borderRadius: 4,
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
                        height: 1,
            width: 0,
        },
        elevation: 5,
    },
    title1: {
        fontSize: 14,
        marginVertical:5
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
        marginVertical:'10%',
        backgroundColor: "white",
        borderRadius:5,
        paddingBottom: 15,
        marginHorizontal: 8,
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
        borderRadius: 3,
        padding: 5,
        elevation: 2,
        width: 100,
        alignSelf: 'flex-end',
        height:30
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
        marginVertical:5
    },
    text: {
        marginHorizontal: 20,
        marginTop:5,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#2c3e50',
    },
    btn1: {
        borderRadius: 30/2,
        backgroundColor: 'orange',
        color: 'white',
        width: 30,
        height: 30,
        alignSelf: 'flex-end',
        //marginRight: 10,
        //marginBottom: 10,
        //marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "grey",
            shadowOpacity: 0.8,
            shadowRadius: 2,
            shadowOffset: {
                height: 1,
                width: 0,
            },
            elevation: 5,
    }
});

