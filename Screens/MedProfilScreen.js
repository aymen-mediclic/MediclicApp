import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, Button, StyleSheet, FlatList, Image, TouchableHighlight, Modal } from 'react-native'
import { Container, Header, Content, Accordion, Item } from "native-base";
import * as NavigationService from '../Navigation/NavigationService';
console.disableYellowBox = true;
import MapView, { Marker, Callout } from 'react-native-maps';

export default function MedProfilScreen({ route }) {
  const { id, name, specialite, work, image } = route.params;
  const [data, setData] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const encodedData = image;
  useEffect(() => {
    fetch('http://51.91.249.185:8069/web/login?db=new_installation')
    return fetch('http://51.91.249.185:8069/api/profil_profe?medecin_id=13')

      .then((response) => response.json())
      .then((res) => {
        console.log("repooooonse")
        console.log(res)
        setData(res);
        console.log("rep!!!!!0000000", res.lieux[0].type)
      })
      .done();
  }, []);
  const dataArray = [

    { title: "Formation(s)", content: <Text>2005-2010 Enseignante d'Homéopathie Faculté de médecine de Rabat</Text> },
    { title: "Parcours", content: 'généraliste' },
    { title: "Langue(s) parlée(s) :", content: " Arabe\n Français\n Anglais" },
    { title: "Actes et tarifs :", content: "Consultation : 300.0 Dhs" },
    { title: "Moyen(s) de paiement accepté(s) :", content: "Carte bancaire\nEspece" },
  ];

  function getImageFromApi(name) {
    return 'http://51.91.249.185:8069' + name
  }
  return (
    <ScrollView >
      <View>
        <View style={styles.ctr1}>
          <Image style={styles.img} source={{ uri: getImageFromApi(image) }} />
          <Text style={styles.txt_name}>{name}</Text>
          <Text style={styles.txt_spe}>{specialite}</Text>

          

        </View>
        
        {/* <View style={{ height: 200, backgroundColor: 'white' }}>
         <MapView style={styles.mapStyle}
            initialRegion={{
              latitude: 33.5912796,
              longitude: -7.6353386,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          ><Marker coordinate={{ latitude: 33.5912796, longitude: -7.6353386, }} image={require('../assets/map_marker.png')} title="DR D" />
          </MapView>
          <Text style={styles.txt_name}>Lieux</Text>
        </View>*/}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={{ alignSelf: 'center' }}>X</Text>
              </TouchableHighlight>
              <Text style={styles.modalText}> lieu 1</Text>
              <MapView style={styles.mapStyle}
            initialRegion={{
              latitude: 33.5912796,
              longitude: -7.6353386,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          ><Marker coordinate={{ latitude: 33.5912796, longitude: -7.6353386, }} image={require('../assets/map_marker.png')} title="DR D" />
          </MapView>


            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible1(!modalVisible1);
                }}
              >
                <Text style={{ alignSelf: 'center' }}>X</Text>
              </TouchableHighlight>
              <Text>2005-2010 :Enseignante d'Homéopathie Faculté de médecine de Rabat</Text>
              

            </View>
          </View>
        </Modal>

        <View style={styles.ctr2}>
        <TouchableHighlight
            style={{ margin: 10 }}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={styles.textStyle}>Lieu1</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{ margin: 10 }}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={styles.textStyle}>Lieu2</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{ margin: 10 }}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={styles.textStyle}>Formation(s)</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{ margin: 10 }}
            onPress={() => {
              setModalVisible1(true);
            }}
          >
            <Text style={styles.textStyle}>Parcours</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{ margin: 10 }}
            onPress={() => {
              setModalVisible1(true);
            }}
          >
            <Text style={styles.textStyle}>Langue(s) parlée(s)</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{ margin: 10 }}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={styles.textStyle}>Actes et tarifs</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{ margin: 10 }}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={styles.textStyle}>Moyen(s) de paiement accepté(s) </Text>
          </TouchableHighlight>



        </View>
      </View>
      {/*
      <View style={styles.ctr2}>

        {/*<Accordion dataArray={dataArray} expanded={0}/>
        <FlatList
        data={data}
        //keyExtractor={item=> item.id.toString()}
        renderItem= {({item})=> <Text>{item.res[0].education.ecole}</Text>} />

        <Text>{renderText()}</Text>
       renderContent={renderContent}
  </View>*/}



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
    //width: '95%',
    //height: '80%',
    backgroundColor: 'white',
    margin: 10
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
    width: 120,
    height: 100,
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
  },
  mapStyle: {
    width: '90%',
    height: '70%',
    alignSelf: 'center',
    marginTop: 5
  },
  centeredView: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 90,
    alignItems: "center",
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
    color: "black",
    fontWeight: "bold",
    marginLeft: 5
  },
})

