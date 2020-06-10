import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Placesearch from 'react-native-placesearch';
import PlacesInput from 'react-native-places-input';
import { View,TextInput,ScrollView,Text } from 'react-native';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import * as NavigationService from '../Navigation/NavigationService';

/*
export default class VilleC extends React.Component {
    render() {
        return (
<View style={{flex:1}}>
<GooglePlacesAutocomplete
        placeholder='Search'
        minLength={2} // minimum length of text to search
        autoFocus={false}
        fetchDetails={true}
        listViewDisplayed={false}


        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
          console.log(data);
          console.log(details);
        }}
        getDefaultValue={() => {
          return ''; // text input default value
        }}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: 'AIzaSyAM8Nsgo_wAY--K5UuDY7K7YSlUNOcmCog',
          language: 'en', // language of the results
          types: '(cities)', // default: 'geocode'
        }}
        styles={{
          description: {
            fontWeight: 'bold',
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
             
        
        }}

        currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
        currentLocationLabel="Current location"
        nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={{
          // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
        }}
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: 'distance',
          types: 'food',
        }}
        GooglePlacesDetailsQuery={{
            // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
            fields: 'formatted_address',
        }}

        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

        //predefinedPlaces={[homePlace, workPlace]}

        //predefinedPlacesAlwaysVisible={true}
      />
    </View>
        );
}
}*/


export default class VilleC extends React.Component {
    constructor(props) {
        super(props);
       
      }
    render() {
        
        
        return (
<View style={{flex:1}}>
<PlacesInput
                    googleApiKey={'AIzaSyAM8Nsgo_wAY--K5UuDY7K7YSlUNOcmCog'}
                    placeHolder={"Choisir la ville "}
                    language={"en-US"}
                    queryCountries={['ma']}
                    onSelect={place => {
                      NavigationService.navigate('Médecin',{screen:'Recherche',params:{lien: this.props.route.params.lien}})  
                      //NavigationService.navigate('Médecin')
                        //this.props.goToPoint(get(place, 'result.geometry.location.lat'), get(place, 'result.geometry.location.lng'))
                    }}
                    //iconResult={<Ionicons name="md-pin" size={25} style={styles.placeIcon}/>}
                />
                
    </View>
        );
}
}