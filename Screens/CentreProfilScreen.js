import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, Button, StyleSheet, FlatList, Image } from 'react-native'
import { Container, Header, Content, Accordion, Item } from "native-base";
import * as NavigationService from '../Navigation/NavigationService';
console.disableYellowBox = true;
const dataArray = [
  { title: "Formation", content: "Diplome: doctorat,Ecole: Faculté des sciences,Date debut: 2020-02-07 ,Date fin: 2020-02-06" },
  { title: "Tarif", content: "300.0 Dhs" },
  { title: "Motif", content: 'généraliste' },
  { title: "Langue", content: "Français" }
];

export default function CentreProfilScreen({ route }) {
  const { id, name, specialite, work,image } = route.params;
  const [data, setData] = useState([])
  const encodedData = image;
  useEffect(() => {
    fetch('http://54.37.228.205:8069/web/login?db=prise_rdv_AB')
    return fetch('http://54.37.228.205:8069/api/profil?centre_id=' + id)

      .then((response) => response.json())
      .then((res) => {
        console.log("repooooonse")
        console.log(res)
        setData(res);
      })
      .done();
  }, []);
  /*const renderText = () => {
    if (data.length > 0){
      return (
         <Text> name: {data[0].name} diploma: {data[2].education[0].poste}</Text>
      )
    }
  }*/
  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }} >
      <View style={styles.ctr1}>
        <Image style={styles.img} source={{uri: `data:image/gif;base64,${encodedData}`}} />
        <Text style={styles.txt_name}>{name}</Text>
        <Text style={styles.txt_spe}>{specialite}</Text>

        <Button title='Prendre rendez-vous' onPress={() => NavigationService.navigate('Prendre un rendez-vous')} />

      </View>
      

      <View>

        {/*<Accordion dataArray={dataArray} expanded={0}/>
        <FlatList
        data={data}
        //keyExtractor={item=> item.id.toString()}
        renderItem= {({item})=> <Text>{item.res[0].education.ecole}</Text>} />

        <Text>{renderText()}</Text>*/}
        <View style={styles.v_tempo} >
    {data.length>0 &&(
  <Text> -Nom: {data[0].name}</Text>
    )}
    {data.length>0 &&(
  <Text> -Présentation:    {data[0].presentation}</Text>
    )}
  
  </View>
      </View>
      <View style={styles.v_tempo} >
    <Text style={styles.t_tempo}>Tarif</Text>
    {data.length>0 &&(
  <Text> -Prix: {data[3].tarif[0].prix}</Text>
    )}
    {data.length>0 &&(
  <Text> -Service: {data[3].tarif[0].service}</Text>
    )}
    {data.length>0 &&(
      <Text> -Prix: {data[3].tarif[1].prix}</Text>
    )}
    {data.length>0 &&(
 <Text> -Service: {data[3].tarif[1].service}</Text>
    )}
  </View>
  <View style={styles.v_tempo} >
        <Text style={styles.t_tempo}>Medecins</Text>
        {data.length > 0 && (
          <Text> -adresse: {data[4].medecin[0].name}</Text>
        )}
        {data.length > 0 && (
          <Text> -tel1: {data[4].medecin[0].profession}</Text>
        )}
        {data.length > 0 && (
          <Text> -tel2: {data[4].medecin[0].speciality}</Text>
        )}
         {data.length > 0 && (
          <Text> -nom: {data[4].medecin[1].name}</Text>
        )}
        {data.length > 0 && (
          <Text> -Profession: {data[4].medecin[1].profession}</Text>
        )}
        {data.length > 0 && (
          <Text> -specialité: {data[4].medecin[1].speciality}</Text>
        )}
         {data.length > 0 && (
          <Text> -nom: {data[4].medecin[2].name}</Text>
        )}
        {data.length > 0 && (
          <Text> -Profession: {data[4].medecin[2].profession}</Text>
        )}
        {data.length > 0 && (
          <Text> -Specialité: {data[4].medecin[2].speciality}</Text>
        )}
      </View>
      
    </ScrollView>
  );

}
const styles = StyleSheet.create({
  ctr1: {
    flex: 1,
    width: '97%',
    height: '40%',
    backgroundColor: 'white',
    marginBottom: 10
  },
  ctr2: {
    width: '95%',
    height: '80%',
    backgroundColor: 'white',
    marginTop: 10
  },
  txt_name: {
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'center',
    fontSize: 18
  },
  txt_spe: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center'
  },
  img: {
    alignSelf: 'center',
    width: 80,
    height: 90,
    margin: 10,
    borderRadius: 20
  },
  v_tempo:{
    backgroundColor:"#bdc3c7",
    marginBottom:8,
    width:'100%'
  },
  t_tempo: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

 