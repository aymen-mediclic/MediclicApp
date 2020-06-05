import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 


export default function FScreen({ navigation }) {
    const [Data, setData] = useState([])
    useEffect(() => {
        fetch('http://51.91.249.185:8069/web/login?db=new_installation')
        return fetch('http://51.91.249.185:8069/api/profil?uid=85&get_file')
            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)
                setData(res);
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

    return (


        <View  >


            {
                (Data.files)
                    ?
                    <FlatList
                        data={Data.files}
                        renderItem={({ item }) => <Item item={item[0]} />}
                        keyExtractor={item => item[0].id.toString()}
                    />
                    :
                    <Text style={{alignItems:'center',justifyContent:'center'}}>Veuillez patientez svp</Text>
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