//date et lieux
import * as React from 'react';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { View, TextInput, Button, StyleSheet, Text, AsyncStorage, Image, ScrollView, ActivityIndicator, Modal, TouchableHighlight, TouchableOpacity } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EntypoI from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as NavigationService from '../Navigation/NavigationService';
import MapView, { Marker, Callout } from 'react-native-maps';
import Swiper from 'react-native-swiper'
import { url1, url2 } from '../Navigation/GlobalUrl'
import _ from "lodash";


const Drawer = createDrawerNavigator();
const jour = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    }
  }

  render() {
    var result = [];
    if (this.props.data.lieux != null) {
      console.log('==============================')
      console.log(this.props.data.lieux)

      // console.log('==============================')
    }
    function getImageFromApi(name) {
      return url2 + name
    }

    return (
      <ScrollView >
        <View style={styles.ctr1}>
          <Image style={{ height: 200, width: 200, borderRadius: 200 / 2, alignSelf: 'center', marginTop: 5, overflow: "hidden" }} source={{ uri: getImageFromApi(this.props.data.image) }} />


          <Text style={styles.txt_name}>{this.props.data.name}</Text>
          <Text style={styles.txt_spe}>{this.props.data.speciality}</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#7f8c8d', margin: 5, alignSelf: 'center' }}>Présentation :</Text>
          <Text style={styles.txt_spe}>{this.props.data.presentation}</Text>

          { /*{
            (this.props.data && this.props.data.langue )?
               <Text style={styles.txt_spe}>{this.props.data.langue[0].langue}</Text>
            :
            <></>
          
          }*/}
        </View>


        <View style={styles.ctr2} >
          <Text style={{ fontSize: 20, alignSelf: 'center', margin: 5, fontWeight: 'bold' }}>Contact(s)</Text>
          <Swiper showsButtons={true} buttonWrapperStyle={{ alignItems: 'flex-start' }} paginationStyle={{ bottom: undefined, left: undefined, top: 40, right: "47%" }} >
            {
              (this.props.data && this.props.data.lieux) ?
                this.props.data.lieux.map((item, ney) => {
                  if (item.horaires.length > 0) {
                    jour.map(function (jour) {
                      let daysInArray = item.horaires.filter(function (a) {
                        return jour == a.jour
                      })
                      // console.log(daysInArray);
                      if (daysInArray.length) {
                        let time = [];
                        daysInArray.map(function (item, i) {
                          for (let key in item) {
                            if (daysInArray[0].hasOwnProperty(key) && key != "jour") {
                              time.push(item[key])
                            }
                          }
                        })
                        result.push({
                          "jour": jour,
                          "heure": time
                        })
                      } else {
                        result.push({
                          "jour": jour,
                          "heure": []
                        })
                      }
                    })
                  }


                  return <View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }} >
                      <Text style={{ fontSize: 20, alignSelf: 'center', color: 'grey', margin: 5 }}>Lieux : </Text>
                      <Text style={styles.nmbr}>{ney + 1}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }} >
                      <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', marginTop: 25, marginBottom: 25 }}>Type de consultation:</Text>
                      <Text style={{ fontSize: 15, alignSelf: 'center', marginTop: 25, marginBottom: 25 }}> {item.type}</Text>
                    </View>

                    <MapView style={styles.mapStyle}

                      initialRegion={{
                        latitude: item.lat,
                        longitude: item.lng,
                        latitudeDelta: 0.0022,
                        longitudeDelta: 0.0021,
                      }}
                    ><Marker coordinate={{ latitude: item.lat, longitude: item.lng }} image={require('../assets/map_marker.png')} title="DR D" />
                    </MapView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15,paddingVertical:15 }} >

                      <View>
                        <Fontisto name="map-marker-alt" color="#1E79C5" size={22} style={{ alignSelf: 'center' }} />
                        <Text style={{ fontWeight: 'bold' }}>Adresse</Text>

                      </View>

                      <View>
                        <Feather name="headphones" color="#1E79C5" size={22} style={{ alignSelf: 'center' }} />
                        <Text style={{ fontWeight: 'bold' }}>Téléphone (1)</Text>
                        <Text style={{ alignSelf: 'center' }}>{item.tel1}</Text>
                      </View>

                      <View>
                        <Fontisto name="email" color="#1E79C5" size={22} style={{ alignSelf: 'center' }} />
                        <Text style={{ fontWeight: 'bold' }}>Site Web</Text>
                        <Text style={{ alignSelf: 'center' }}>{item.site_web}</Text>
                      </View>


                    </View>

                    <View style={{ flexDirection: 'row',alignSelf:'center' }} >
                      <View style={{ marginRight: 25 }}>
                        <Feather name="headphones" color="#1E79C5" size={22} style={{ alignSelf: 'center' }} />
                        <Text style={{ fontWeight: 'bold' }}>Téléphone (2)</Text>
                        <Text style={{ alignSelf: 'center' }}>{item.tel2}</Text>
                      </View>
                      <View>
                        <AntDesign name="car" color="#1E79C5" size={22} style={{ alignSelf: 'center' }} />
                        <Text style={{ fontWeight: 'bold' }}>Moyen de transport</Text>
                        <Text style={{ alignSelf: 'center' }}>{item.moyen_transport}</Text>
                      </View>
                    </View>
                    <View>
                      <Text style={styles.txt_name}>Horaires d'ouverture</Text>

                      {


                        (item.horaires.length > 0 &&
                          <View style={{ flexDirection: "row", paddingVertical: 20, borderTopWidth: 1, borderBottomWidth: 1, justifyContent: 'center', alignItems: 'center',height:30 }}>
                            <View style={{ flex: 1 / 2, justifyContent: 'center', alignItems: 'center',marginLeft:10 }}>
                              <Text style={{fontWeight:'bold'}}>Jour</Text>
                            </View>
                            <View style={{ flex: 1,marginLeft:100,justifyContent: 'center', alignItems: 'center' }}>
                              <Text style={{fontWeight:'bold'}}>Heure</Text>
                            </View>
                          </View>
                        )

                      }


                      {


                        (item.horaires.length > 0) ?


                          result.map((lng, ney) => {
                            return <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                              <View style={{ flex: 1 / 2, alignItems: 'center' }}>
                                <Text style={{fontWeight:'bold',color:'#95a5a6'}}>{lng.jour}</Text>
                              </View>
                              <View style={{ flex: 1, margin: 5,marginLeft:10,flexDirection:'row' }}>
                                {
                                  lng.heure.length > 0 ?
                                    lng.heure.map((time, key) => <Text key={key} style={{ margin: 5 }}>{time}</Text>
                                  )
                                    :
                                    <Text>  </Text>
                                }

                              </View>
                            </View>

                          })
                          :
                          <Text style={styles.txt_fin}> Non Renseigné </Text>
                      }
                    </View>
                  </View>
                })
                :
                <></>

            }


          </Swiper>

        </View>







      </ScrollView>
    );

  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center', margin: 5 }}>Formation(s) et parcours</Text>
        <Text style={{ fontSize: 16, color: '#1E79C5', margin: 10 }}>Formation(s):</Text>


        {
          (this.props.data.length > 0 && this.props.data.education.length > 0) ?
            this.props.data.education.map((lng, key) => {
              return <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column', flex: 1, backgroundColor: '#bdc3c7', margin: 5 }}>
                  <Text key={key} style={{ margin: 5 }}>{lng.ecole}</Text>
                  <Text key={key} style={{ margin: 5 }}>{lng.ville}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text>{lng.diplome}</Text>
                </View>
              </View>

            })
            : <Text> Non Renseigné </Text>

        }

        <Text style={{ fontSize: 16, color: '#1E79C5', margin: 10 }}>Parcours:</Text>
        {
          (this.props.data.length > 0 && this.props.data.formation.length > 0) ?
            this.props.data.formation.map((lng, key) => {
              return <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column', flex: 1, backgroundColor: '#bdc3c7', margin: 5 }}>
                  <Text key={key} style={{ margin: 5 }}>{lng.societe}</Text>
                  <Text key={key} style={{ margin: 5 }}>{lng.ville}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text>{lng.poste}</Text>
                </View>
              </View>

            })
            : <Text> Non Renseigné </Text>
        }


        <Text style={{ fontSize: 16, color: '#1E79C5', margin: 10 }}>Langue(s) parlée(s) :</Text>
        <View style={{ flexDirection: 'column', margin: 10 }}>
          {
            (this.props.data.length > 0 && this.props.data.langue.length > 0) ?
              this.props.data.langue.map((lng, key) => {
                return <Text key={key} style={styles.txt_spe}>{lng.langue}</Text>
              })
              : <Text> Non Renseigné </Text>
          }
        </View>
      </View>

    );
  }
}
class GalerieScreen extends React.Component {

  render() {
    function getImageFromApi(name) {
      return url2 + name
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Swiper showsButtons={true}>
          <View style={styles.ctr2}>
            {
              (this.props.data.length > 0 && this.props.data.galerie.length > 0) ?

                <Image style={{ margin: 5, alignSelf: 'center', height: 350, width: 300 }} source={{ uri: getImageFromApi(this.props.data.galerie[0].image) }} />
                :
                <></>

            }

          </View>
        </Swiper>
      </View>
    );
  }
}

class CScreen extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center', margin: 5 }}>Actes et tarifs :</Text>
        {
          (this.props.data.length > 0 && this.props.data.tarif.length > 0) ?
            this.props.data.tarif.map((lng, key) => {
              return <Text key={key} style={{ fontSize: 16, color: '#7f8c8d', margin: 10 }}>{lng.type}: {lng.prix}</Text>
            })
            : <Text style={styles.txt_fin}>Non Renseigné</Text>
        }
        <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center', margin: 5 }}>Moyen(s) de paiement accepté(s) :</Text>
        {
          (this.props.data.length > 0 && this.props.data.paiement.length > 0) ?
            this.props.data.paiement.map((lng, key) => {
              return <Text key={key} style={{ fontSize: 16, color: '#7f8c8d', margin: 10 }}>{lng.mode}</Text>
            })
            : <Text style={styles.txt_fin}>Non Renseigné</Text>
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
    return fetch(url2 + '/api/profil_profe?medecin_id=' + this.props.route.params.id)

      .then((response) => response.json())
      .then((res) => {
        console.log("repooooonse")
        console.log(res)
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

      <Tab.Navigator
        tabBarOptions={{
          inactiveTintColor: 'grey',
          activeTintColor: '#1E79C5',
          labelStyle: { fontSize: 11, margin: 0 },
          tabStyle: { width: 90 },
          style: { backgroundColor: 'white' },
          showIcon: true,

        }} swipeEnabled={false}>
        <Tab.Screen name="Contact" options={{

          tabBarIcon: ({ focused, color }) => {
            if (focused) {
              color = '#1E79C5'
            } else {
              color = 'black'
            }
            return <AntDesign name="contacts" color={color} size={20} />
          },
        }} >
          {props => <HomeScreen data={this.state.data} />}
        </Tab.Screen>
        <Tab.Screen name="Galerie" options={{

          tabBarIcon: ({ focused, color }) => {
            if (focused) {
              color = '#1E79C5'
            } else {
              color = 'black'
            }
            return <AntDesign name="picture" color={color} size={20} />
          },
        }}  >
          {props => <GalerieScreen data={this.state.data} />}
        </Tab.Screen>
        <Tab.Screen name="Formation" options={{
          tabBarIcon: ({ focused, color }) => {
            if (focused) {
              color = '#1E79C5'
            } else {
              color = 'black'
            }
            return <EntypoI name="graduation-cap" color={color} size={20} />
          },
        }}>
          {props => <SettingsScreen data={this.state.data} />}
        </Tab.Screen>
        <Tab.Screen name="Tarif" options={{
          tabBarIcon: ({ focused, color }) => {
            if (focused) {
              color = '#1E79C5'
            } else {
              color = 'black'
            }
            return <AntDesign name="creditcard" color={color} size={20} />
          },
        }}>
          {props => <CScreen data={this.state.data} />}
        </Tab.Screen>

      </Tab.Navigator>

    );
  }
}
const styles = StyleSheet.create({
  ctr1: {
    flex: 1,
    //alignItems: 'center',
    padding: 15,
    paddingBottom: 25,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 3,
    shadowColor: "grey",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    elevation: 5,
  },
  ctr2: {
    flex: 1,
    padding:3,
    height: 1150,
    paddingBottom: 25,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 3,
    shadowColor: "grey",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    elevation: 5,
  },
  mapStyle: {
    width: 280,
    height: 250,
    alignSelf: 'center',
    margin: 5,

  },
  txt_name: {
    margin: 15,
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center'
  },
  txt_spe: {
    fontSize: 17,
    color: '#95a5a6',
    alignSelf: 'center'
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
  nmbr: {
    fontSize: 18, textAlign: 'center', color: 'white', margin: 5,
    fontWeight: 'bold', backgroundColor: '#1E79C5',
    height: 25, width: 25,
    borderRadius: 3,
    shadowColor: "grey",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    elevation: 5,
  },
  txt_fin: {
    margin: 10,
    fontSize: 16,
    color: '#34495e',
    alignSelf: 'center',
    fontWeight: 'bold'
  }
})
