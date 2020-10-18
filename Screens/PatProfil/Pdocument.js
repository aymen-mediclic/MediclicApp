// documents proche patient meme code que patient
import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity,ActivityIndicator } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import { url2, url1 } from '../../Navigation/GlobalUrl';


export default function FprocheScreen({ navigation }) {
    const [Data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(url1)
        return fetch(url2+'/api/profil_proche?uid=126&get_file&proche=72')
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
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.title}>ajouter par: </Text>
                    <Text style={styles.title}>{item.ajouter_par}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.title}>categorie: </Text>
                    <Text style={styles.title}>{item.categorie}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.title}>creer le: </Text>
                    <Text style={styles.title}>{item.create_date}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.title}>rdv avec: </Text>
                    <Text style={styles.title}>{item.rdv_avec}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.title}>date du rdv: </Text>
                    <Text style={styles.title}>{item.dtae_rdv}</Text>
                </View>
                <TouchableOpacity style={{flexDirection:'row',alignSelf:'flex-end',margin:5}}>
                    <Text>
                        Pièce jointe
                    </Text>
                <FontAwesome name="download" size={24} color="black" />
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
    },
});