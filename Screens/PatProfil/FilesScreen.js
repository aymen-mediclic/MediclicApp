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
                <View style={{ flexDirection: "row",justifyContent:"space-between" }}>
                    <Text style={styles.title}>Ajouté Par : </Text>
                    <Text style={styles.title1}>{item.ajouter_par}</Text>
                </View>
                <View style={{ flexDirection: "row",justifyContent:"space-between" }}>
                    <Text style={styles.title}>Catégorie : </Text>
                    <Text style={styles.title1}>{item.categorie}</Text>
                </View>
                <View style={{ flexDirection: "row",justifyContent:"space-between" }}>
                    <Text style={styles.title}>Créer le : </Text>
                    <Text style={styles.title1}>{item.create_date}</Text>
                </View>
                <View style={{ flexDirection: "row",justifyContent:"space-between" }}>
                    <Text style={styles.title}>RDV avec : </Text>
                    <Text style={styles.title1}>{item.rdv_avec}</Text>
                </View>
                <View style={{ flexDirection: "row",justifyContent:"space-between" }}>
                    <Text style={styles.title}>Date du RDV : </Text>
                    <Text style={styles.title1}>{item.dtae_rdv}</Text>
                </View>
                <TouchableOpacity style={{flexDirection:'row',alignSelf:'flex-end',margin:15}}>
                    <Text style={{marginRight:10,fontWeight:'bold',color:'#1E79C5'}}>
                        Pièces jointes
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
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold'
    },
});