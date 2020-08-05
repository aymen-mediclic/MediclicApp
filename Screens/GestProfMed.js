//date et lieux
import * as React from 'react';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { View, TextInput, Button, StyleSheet, Text, AsyncStorage, Image, ScrollView, ActivityIndicator,Modal,TouchableHighlight,TouchableOpacity } from 'react-native'
import FScreen from './PatProfil/FilesScreen';
import MrdvScreen from './PatProfil/MrdvScreen';
import MprofilScreen from './PatProfil/MprofilScreen';
import MprochesScreen from './PatProfil/MprocheScreen';
import Feather from 'react-native-vector-icons/Feather';
import EntypoI from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as NavigationService from '../Navigation/NavigationService';
import MapView, { Marker, Callout } from 'react-native-maps';
import Swiper from 'react-native-swiper'
import Global, { url1, url2 } from '../Navigation/GlobalUrl'

const Drawer = createDrawerNavigator();

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    }
  }

  render() {
    if(this.props.data.lieux!= null) {  
    console.log('==============================')
    //console.log(this.props.data.lieux[0])
    console.log('==============================')
    }
    function getImageFromApi (name) {
      return url2 + name
    }
  
    return (
      <ScrollView >
        <View style={styles.ctr1}>
          <Image style={{ height: 200, width: 200, borderRadius: 200/2 , alignSelf: 'center', marginTop: 5, overflow: "hidden" }} source={{ uri:getImageFromApi( this.props.data.image ) }} />


          <Text style={styles.txt_name}>{this.props.data.name}</Text>
          <Text style={styles.txt_spe}>{this.props.data.speciality}</Text>
          <Text style={{fontSize:18,fontWeight:'bold',color:'#7f8c8d',margin:5}}>Présentation :</Text>
          <Text style={styles.txt_spe}>{this.props.data.presentation}</Text>
      
          { /*{
            (this.props.data && this.props.data.langue )?
               <Text style={styles.txt_spe}>{this.props.data.langue[0].langue}</Text>
            :
            <></>
          
          }*/}
        </View>
        <Text style={{ fontSize: 20, alignSelf: 'center', margin: 5,fontWeight:'bold' }}>Lieux</Text>
        <Swiper showsButtons={true}>

          <View style={{ height: 300, backgroundColor: 'white', flex: 1 }}>
          {/*{
            (this.props.data && this.props.data.lieux)?
            <View> 
            <Text style={{ fontSize: 15, alignSelf: 'center',color:'#2980b9',margin:10 }}>Lieu 1</Text>
            <Text style={{ fontSize: 15, alignSelf: 'center' }}>Type de consultation:{this.props.data.lieux[0].type} </Text>
            </View>
            :
            <></>
          
          }*/}
            <MapView style={styles.mapStyle}
              scrollEnabled={false}
              initialRegion={{
                latitude: 33.5912796,
                longitude: -7.6353386,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            ><Marker coordinate={{ latitude: 33.5912796, longitude: -7.6353386, }} image={require('../assets/map_marker.png')} title="DR D" />
            </MapView>
            <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalOpen}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.modalView}>
           <View style={{ flexDirection: 'row' }}>
           

          <View style={{ flexDirection: 'column',flex:1,margin:5,marginBottom:10}}>
            <Text>Adresse complete :</Text>
            <Text>N° Tél (2) : </Text>
            <Text>Site Web :</Text>
            <Text>Cabinet :cabinet </Text>
          </View>
          <View style={{ flex:1}}>
          <Text>N° Tél (1) :</Text>
          <Text>Moyen de Transport :</Text>
          <Text>Identifiant Professionnel  :</Text>
          </View>
          </View>
          <TouchableOpacity
                style={{ width:100,alignItems:'flex-end', backgroundColor: "#f39c12" }}
                onPress={() => {
                  this.setState({modalOpen:false});
                }}
              >
                <Text style={{ alignSelf: 'center' }}>Annuler</Text>
              </TouchableOpacity>
        </View>
          
              
        </Modal>
            <TouchableHighlight
                style={{ ...styles.openButton }}
                onPress={() => {
                  this.setState({modalOpen:true});
                }}
              >
                  
                <Text style={{ alignSelf: 'center' ,fontWeight:'bold'}}>Infos supplementaires</Text>
              </TouchableHighlight>
             
          
       
          </View>
          <View style={{ height: 300, backgroundColor: 'white', flex: 1 }}>
            <Text style={{ fontSize: 15, alignSelf: 'center' }}>Lieu 2</Text>
            <Text style={{ fontSize: 15, alignSelf: 'center' }}>Type de consultation:   cabinet</Text>
            <MapView style={styles.mapStyle}
              scrollEnabled={false}
              initialRegion={{
                latitude: 33.5912796,
                longitude: -7.6353386,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            ><Marker coordinate={{ latitude: 33.5912796, longitude: -7.6353386, }} image={require('../assets/map_marker.png')} title="DR D" />
            </MapView>
            <Text style={{ fontSize: 15, alignSelf: 'center', margin: 10 }}>Infos supplementaires</Text>
            <Text style={styles.txt_name}>Horraires</Text>
          </View>

        </Swiper>
      </ScrollView>
    );
            
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{backgroundColor:'white',flex:1 }}>
        <Text style={{fontSize:20,fontWeight:'bold',alignSelf:'center',margin:5}}>Formation(s) et parcours</Text>
        <Text style={{fontSize:16,color:'#1E79C5',margin:10}}>Formation(s):</Text>
        
          
          {
            (this.props.data && this.props.data.education)?
              this.props.data.education.map((lng, key)=>{ 
               return <View style={{ flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'column',flex:1 ,backgroundColor:'#bdc3c7',margin:5}}>
                  <Text key= {key} style={{margin:5}}>{lng.ecole}</Text>
                  <Text key= {key} style={{margin:5}}>{lng.ville}</Text>
                  </View>
                  <View style={{ flex:1}}>
                  <Text>{lng.diplome}</Text>
                  </View>
                </View>
               
              })
            :
            <></>
          }
            
        <Text style={{fontSize:16,color:'#1E79C5',margin:10}}>Parcours:</Text>
        {
            (this.props.data && this.props.data.formation)?
              this.props.data.formation.map((lng, key)=>{ 
               return <View style={{ flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'column',flex:1 ,backgroundColor:'#bdc3c7',margin:5}}>
                  <Text key= {key} style={{margin:5}}>{lng.societe}</Text>
                  <Text key= {key} style={{margin:5}}>{lng.ville}</Text>
                  </View>
                  <View style={{ flex:1}}>
                  <Text>{lng.poste}</Text>
                  </View>
                </View>
               
              })
            :
            <></>
          }
        
        
        <Text style={{fontSize:16,color:'#1E79C5',margin:10}}>Langue(s) parlée(s) :</Text>
        <View style={{ flexDirection: 'column',margin:10 }}>
        {
            (this.props.data.langue)?
              this.props.data.langue.map((lng, key)=>{
                return <Text key= {key} style={styles.txt_spe}>{lng.langue}</Text>
              })
            :
            <></>
          }
       </View>
      </View>
      
    );
  }
}
class GalerieScreen extends React.Component {
  
  render() {
    function getImageFromApi (name) {
      return url2 + name
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>
        <Swiper showsButtons={true}>
        <View style={styles.slide1}>
        {/*
            (this.props.data && this.props.data.galerie )?
               
               <Image style={{margin: 5,alignSelf:'center',height:350,width:300}} source={{ uri:getImageFromApi( this.props.data.galerie[0].image ) }} />
            :
            <></>
          
          */}
        
        </View>
        </Swiper>
      </View>
    );
  }
}

class CScreen extends React.Component {
  render() {
    return (
      <View style={{backgroundColor:'white',flex:1 }}>
        <Text style={{fontSize:20,fontWeight:'bold',alignSelf:'center',margin:5}}>Actes et tarifs :</Text>
        {
            (this.props.data && this.props.data.tarif)?
              this.props.data.tarif.map((lng, key)=>{
                return <Text key= {key} style={{fontSize:16,color:'#7f8c8d',margin:10}}>{lng.type}: {lng.prix}</Text>
              })
            :
            <></>
          }
      <Text style={{fontSize:20,fontWeight:'bold',alignSelf:'center',margin:5}}>Moyen(s) de paiement accepté(s) :</Text>
      {
            (this.props.data && this.props.data.paiement)?
              this.props.data.paiement.map((lng, key)=>{
                return <Text key= {key} style={{fontSize:16,color:'#7f8c8d',margin:10}}>{lng.mode}</Text>
              })
            :
            <></>
          }
       </View>
    );
  }
}

const Tab = createMaterialTopTabNavigator();

export default class GProfMed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      modalOpen: false,
      refreshing: false,
    }
  }
  Id = this.props.route.params.id;
  componentDidMount(Id) {
    fetch(url1)
    return fetch(url2+'/api/profil_profe?medecin_id='+this.props.route.params.id)

      .then((response) => response.json())
      .then((res) => {
        //console.log("repooooonse")
        //console.log(res)
        this.setState({
          isLoading: false,
          data: res
        });
       // console.log("rep!!!!!1213", this.state.data.lieux[0].type)+this.props.route.params.id
       // console.log("rep!!!!!", this.state.data.galerie[0].image)
      })
      .done();
  }
  displayLoading() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
  }
  render() {
    const Id = this.props.route.params.id;
    //console.log(Id,'white***********************')
    return (

      <Tab.Navigator tabBarOptions={{
        labelStyle: { fontSize: 10 },
        tabStyle: { width: 90 },
        style: { backgroundColor: 'white' },
      }} swipeEnabled={false}>
        <Tab.Screen name="Contact">
          {props => <HomeScreen data={this.state.data} />}
        </Tab.Screen>
        <Tab.Screen name="Galerie">
        {props => <GalerieScreen   data={ this.state.data}  />}
          </Tab.Screen> 
        <Tab.Screen name="Formation">
        {props => <SettingsScreen data={this.state.data} />}
        </Tab.Screen> 
        <Tab.Screen name="Tarif">
        {props => <CScreen data={this.state.data} />}
        </Tab.Screen>

      </Tab.Navigator>

    );
  }
}
const styles = StyleSheet.create({
  ctr1: {
    flex: 1,
    alignItems: 'center',
    padding:15,
    backgroundColor: 'white',
    margin: 10,
    borderRadius:3
  },
  mapStyle: {
    width: '90%',
    height: '70%',
    alignSelf: 'center',
    marginTop: 5
  },
  txt_name: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 18
  },
  txt_spe: {
    fontSize: 17,
    color:'#95a5a6'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    marginTop: 22
  },
  modalView: {
    marginTop: 100,
    backgroundColor: "white",
    borderRadius: 10,
  
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
})