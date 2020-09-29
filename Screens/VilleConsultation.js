import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Placesearch from 'react-native-placesearch';
import PlacesInput from 'react-native-places-input';
import { View,TextInput,ScrollView,Text,StyleSheet } from 'react-native';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import * as NavigationService from '../Navigation/NavigationService';
import EntypoI from 'react-native-vector-icons/Entypo'

const GOOGLE_PLACES_API_KEY = 'AIzaSyBwO4e9kDezyKMJBTIsEmGrLveDXzB1kuE'; //run
export default class VilleC extends React.Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor:'white'}}>
      <GooglePlacesAutocomplete
      //placeholder='Où ? (adresse,ville...)'
      placeholder='Où ? (adresse,ville...)'
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: 'fr', // language of the results
          components: 'country:ma',
        }}
        fetchDetails = {true}
        autoFocus={true}
        currentLocation={true}
        currentLocationLabel="Autour de moi"
       /* renderRow={(row) =>
          row.isCurrentLocation ? (
            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
              <EntypoI color={'grey'} size={20} name={'direction'} />
              <Text style={{ color: 'black', marginLeft: 10 }}>
                {row.description}
              </Text>
            </View>
          ) : (
            <Text></Text>
          )
        }*/
        GooglePlacesDetailsQuery	= {{
            fields: ['geometry']
          }}
        onPress={(data, details = null) => {console.log(details.geometry.location.lat);
          console.log(data.description);
          NavigationService.navigate('Résultat',{screen:'Résultats',params:{lien: this.props.route.params.lien, choice: this.props.route.params.choix,lat:details.geometry.location.lat,lng:details.geometry.location.lng,loc:data.description}})
        }}
        onFail={(error) => console.error(error)}
        requestUrl={{
          url:
            'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
          useOnPlatform: 'web',
        }} // this in only required for use on the web. See https://git.io/JflFv more for details. // variable styles can t find error
        enablePoweredByContainer={false}
        styles={{
          textInputContainer: {
            backgroundColor: 'rgba(0,0,0,0)',
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          textInput: {
            borderRadius:0,
            marginLeft: 3,
            marginRight: 3,
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
            paddingLeft:20,
            shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        elevation: 3,
          },
          
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
      />
    </View>
    );
}
}
