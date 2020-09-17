import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity,ActivityIndicator } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import { url1, url2 } from '../../Navigation/GlobalUrl';


export default function FScreen({ navigation }) {
    const [Data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(url1)
        return fetch(url2+'/api/profil?uid=26&get_file')
            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)
                setData(res);
                setLoading(false)
            })
            .done();
    }, []);

    function Item({ item }) {
        return (
            <View style={styles.item}>
                <View style={{ flexDirection: "row", justifyContent: 'space-between'}}>
                                    <Text style={{flex:1,height:40,padding:10,marginBottom:'2%',fontWeight:'bold',textAlign:'center',color:'white',backgroundColor:'#1E79C5'}}>{item.categorie}</Text>
                                </View>
                <View style={{ flexDirection: "row",justifyContent:"space-between",marginVertical:'2%' }}>
                    <Text style={{...styles.title,flex:3}}>Ajouté Par</Text>
                    <Text style={{...styles.title,flex:1}}>:</Text>
                    <Text style={{...styles.title1,flex:3}}>{item.ajouter_par}</Text>
                </View>
                <View style={{ flexDirection: "row",justifyContent:"space-between" }}>
                    <Text style={{...styles.title,flex:3}}>Créer le</Text>
                    <Text style={{...styles.title,flex:1}}>:</Text>
                    <Text style={{...styles.title1,flex:3}}>{item.create_date}</Text>
                </View>
                <View style={{ flexDirection: "row",justifyContent:"space-between"}}>
                    <Text style={{...styles.title,flex:3}}>Date du RDV</Text>
                    <Text style={{...styles.title,flex:1}}>:</Text>
                    <Text style={{...styles.title1,flex:3}}>{item.dtae_rdv}</Text>
                </View>
                <View style={{ flexDirection: "row",justifyContent:"space-between" }}>
                    <Text style={{...styles.title,flex:3}}>RDV avec</Text>
                    <Text style={{...styles.title,flex:1}}>:</Text>
                    <Text style={{...styles.title1,flex:3}}>{item.rdv_avec}</Text>
                </View>
                <View style={{ flexDirection: "row",justifyContent:"space-between",marginVertical:'2%' }}>
                    <Text style={{...styles.title,flex:3}}>Spécialité</Text>
                    <Text style={{...styles.title,flex:1}}>:</Text>
                    <Text style={{...styles.title1,flex:3}}>{item.speciality}</Text>
                </View>
                <TouchableOpacity style={{flexDirection:'row',alignSelf:'flex-end',margin:15}}>
                    <Text style={{marginRight:10,fontWeight:'bold',color:'#1E79C5'}}>
                    {item.nom_file}
                    </Text>
                <FontAwesome name="download" size={24} color="#1E79C5" />
                </TouchableOpacity>
                
            </View>
        );
    }

    //RENDER ITEM
    
    
    
    //END




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


        <View style={{ flex: 1, justifyContent:'center' }} >


            {
                (Data.files)
                    ?
                    <FlatList
                        data={Data.files}
                        renderItem={({ item }) => <Item item={item[0]} />}
                        keyExtractor={item => item[0].id.toString()}
                    />
                    :
                    displayLoading()
            }

        </View >

    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    item: {
        backgroundColor: 'white',
        paddingBottom: 15,
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
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginHorizontal:15
    },
    title1: {
        fontSize: 15,
        marginHorizontal:15
    },
});