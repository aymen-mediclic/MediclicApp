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

export default function MedProfilScreen({ route }) {
  const { id, name, specialite, work, image } = route.params;
  const [data, setData] = useState([])
  const encodedData = image;
  useEffect(() => {
    fetch('http://54.37.228.205:8069/web/login?db=prise_rdv_AB')
    return fetch('http://54.37.228.205:8069/api/profil?medecin_id=' + id)

      .then((response) => response.json())
      .then((res) => {
        console.log("repooooonse")
        console.log(res)
        setData(res);
      })
      .done();
  }, []);
  const renderText = () => {
    if (data.length > 0) {
      return (
        <Text> name: {data[0].name} diplome:{data[1].education[0].diplome}/{data[2].education[0].poste} </Text>
      )
    }
  }
  /*const renderContent = data => {
    if (data.length > 0){
    return (
      <View style={styles.content}>
        <Text>{data[0].name}</Text>
      </View>
    );
    }
  };*/
  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }} >
      <View style={styles.ctr1}>
        <Image style={styles.img} source={{ uri: `data:image/gif;base64,${encodedData}` }} />
        <Text style={styles.txt_name}>{name}</Text>
        <Text style={styles.txt_spe}>{specialite}</Text>

        <Button title='Prendre rendez-vous' onPress={() => NavigationService.navigate('Prendre un rendez-vous')} />

      </View>
      {/* <View style={styles.ctr2}>
        <Content padder>
          <Accordion dataArray={data} expanded={0} 
        renderContent={renderContent}/>
        </Content>

      </View>

      <View style={styles.ctr2}>

        {/*<Accordion dataArray={dataArray} expanded={0}/>
        <FlatList
        data={data}
        //keyExtractor={item=> item.id.toString()}
        renderItem= {({item})=> <Text>{item.res[0].education.ecole}</Text>} />

        <Text>{renderText()}</Text>

  </View>*/}
      <View style={styles.v_tempo} >
        {data.length > 0 && (
          <Text> -Nom: {data[0].name}</Text>
        )}
        {data.length > 0 && (
          <Text> -Profession:    {data[0].profession}</Text>
        )}
        {data.length > 0 && (
          <Text> -Specialité: {data[0].specialite}</Text>
        )}
        {data.length > 0 && (
          <Text> -Présentation:    {data[0].presentation}</Text>
        )}

      </View>
      <View style={styles.v_tempo} >
        <Text style={styles.t_tempo}>Formation</Text>
        {data.length > 0 && (
          <Text> -Diplome: {data[1].education[0].diplome}</Text>
        )}
        {data.length > 0 && (
          <Text> -Ecole: {data[1].education[0].ecole}</Text>
        )}
        {data.length > 0 && (
          <Text> -Date_debut: {data[1].education[0].date_debut}</Text>
        )}
        {data.length > 0 && (
          <Text> -Date_fin: {data[1].education[0].date_fin}</Text>
        )}
        {data.length > 0 && (
          <Text> -Ville: {data[1].education[0].ville}</Text>
        )}

      </View>
      <View style={styles.v_tempo} >
        <Text style={styles.t_tempo}>Expériences</Text>
        {data.length > 0 && (
          <Text> -Société: {data[2].education[0].societe}</Text>
        )}
        {data.length > 0 && (
          <Text> -Poste: {data[2].education[0].poste}</Text>
        )}
        {data.length > 0 && (
          <Text> -Date_debut: {data[2].education[0].date_debut}</Text>
        )}
        {data.length > 0 && (
          <Text> -Date_fin: {data[2].education[0].date_fin}</Text>
        )}
        {data.length > 0 && (
          <Text> -Ville: {data[2].education[0].ville}</Text>
        )}
        {data.length > 0 && (
          <Text style={{ marginTop: 10 }}> -Société: {data[2].education[1].societe}</Text>
        )}
        {data.length > 0 && (
          <Text> -Poste: {data[2].education[1].poste}</Text>
        )}
        {data.length > 0 && (
          <Text> -Date_debut: {data[2].education[1].date_debut}</Text>
        )}
        {data.length > 0 && (
          <Text> -Date_fin: {data[2].education[1].date_fin}</Text>
        )}
        {data.length > 0 && (
          <Text> -Ville: {data[2].education[1].ville}</Text>
        )}

      </View>
      <View style={styles.v_tempo} >
        <Text style={styles.t_tempo}>Tarif</Text>
        {data.length > 0 && (
          <Text> -Prix: {data[3].tarif[0].prix}</Text>
        )}
        {data.length > 0 && (
          <Text> -Type: {data[3].tarif[0].type}</Text>
        )}
        {data.length > 0 && (
          <Text> -Prix: {data[3].tarif[1].prix}</Text>
        )}
        {data.length > 0 && (
          <Text> -Type: {data[3].tarif[1].type}</Text>
        )}

      </View>
      <View style={styles.v_tempo} >
        <Text style={styles.t_tempo}>infos</Text>
        {data.length > 0 && (
          <Text> -adresse: {data[4].lieu[0].adress}</Text>
        )}
        {data.length > 0 && (
          <Text> -tel1: {data[4].lieu[0].tel1}</Text>
        )}
        {data.length > 0 && (
          <Text> -tel2: {data[4].lieu[0].tel2}</Text>
        )}
      </View>
      <View style={styles.v_tempo} >
        <Text style={styles.t_tempo}>Paiement</Text>
        {data.length > 0 && (
          <Text> -Mode: {data[5].paiement[0].mode}</Text>
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
  v_tempo: {
    backgroundColor: "#bdc3c7",
    marginBottom: 8,
    width: '100%'
  },
  t_tempo: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

/*useEffect(() => {
   fetch('http://51.254.39.98:8069/web/login?db=Mediclic')
   fetch('http://51.254.39.98:8069/api/profil?medecin_id=' + id)

     .then((response) => response.json())
     .then((res) => {
       console.log("repooooonse")
       console.log(res)
       console.log("*********success***********")
       console.log(res.lenght)
       console.log("***************************")
       setData(res);
     })
     .done();
 }, []);*/