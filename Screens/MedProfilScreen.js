import React, { useEffect, useState } from 'react'
import {ScrollView,View,Text,Button,StyleSheet,FlatList,Image} from 'react-native'
import { Container, Header, Content, Accordion, Item } from "native-base";


/*const dataArray = [
  { title: "Formation", content: "Diplome asmaa Ecole asmaa ville vullez date debut 2020-02-07 date fin 2020-02-06" },
  { title: "Tarif", content: "300.0 Dhs" },
  { title: "Motif", content: 'généraliste' },
  { title: "Langue", content: "Français" }
];*/

export default function MedProfilScreen({route}){
    const {id,name,specialite,work}=route.params;
    const [data,setData]=useState([])
    useEffect(()=>{
      fetch('http://51.254.39.98:8069/web/login?db=Mediclic')
      fetch('http://51.254.39.98:8069/api/profil?medecin_id='+id)
    
    .then((response) => response.json())
    .then((res) => {
    console.log("repooooonse")
    console.log(res)
    console.log("*********success***********")
    console.log(res.lenght)
    console.log("***************************")
    setData(data);
    })
    .done();
    });

    return(
      <ScrollView contentContainerStyle={{alignItems:'center'} } >
        <View style={styles.ctr1}>
        <Image style={styles.img} source={require('../assets/Title.jpg')} />
          <Text style={styles.txt_name}>{name}</Text>
          <Text style={styles.txt_spe}>{specialite}</Text>
          
          <Button title='Prendre rendez-vous' onPress={()=>{}} />

        </View>
         {/*<View style={styles.ctr2}>
       <Content padder>
          <Accordion dataArray={dataArray} expanded={0}/>
        </Content>
      
        </View>*/}
        
        <View style={styles.ctr2}>
       
        {/*<Accordion dataArray={dataArray} expanded={0}/>*/}
        <FlatList
        data={data}
        keyExtractor={item=> item.id.toString()}
      renderItem= {({item})=> <Text>yo</Text>} 
        />

        
      
        </View>
        
      </ScrollView>
    );
  
}
const styles = StyleSheet.create({
  ctr1: {
    flex:1,
    width:'97%',
    height:'40%',
    backgroundColor:'white',
    marginBottom:10
  },
  ctr2: {
    width:'95%',
    height:'80%',
    backgroundColor:'white',
    marginTop:10
  },
  txt_name: {
    marginTop:10,
    marginBottom:5,
    textAlign:'center',
    fontSize:18
  },
  txt_spe: {
    marginTop:10,
    marginBottom:10,
    textAlign:'center'
  },
  img: {
    alignSelf:'center',
    width:80,
    height:50,
    margin:10,
    borderRadius:20
},
})