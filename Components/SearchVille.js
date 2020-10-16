//changement Ville depuis filtre
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Placesearch from 'react-native-placesearch';
import PlacesInput from 'react-native-places-input';
import { View,TextInput,ScrollView,Text,StyleSheet,KeyboardAvoidingView } from 'react-native';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import * as NavigationService from '../Navigation/NavigationService';

const GOOGLE_PLACES_API_KEY = 'AIzaSyBwO4e9kDezyKMJBTIsEmGrLveDXzB1kuE'; //run
export default class SearchVille extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location:"",
      lat:"",
      lng:""
    }
  }
  render() {
    return (
      <KeyboardAvoidingView style={{flex:1}}>
      <GooglePlacesAutocomplete
      placeholder='Rechercher'
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: 'fr', // language of the results
          components: 'country:ma',
        }}
        fetchDetails = {true}
        GooglePlacesDetailsQuery	= {{
            fields: ['geometry']
          }}
        onPress={(data, details = null) => {console.log(details.geometry.location.lat);
          console.log(data.description);
          this.setState({
            location:data.description,
            lat:details.geometry.location.lat,
            lng:details.geometry.location.lng
          })
          console.log('1111',this.state.location);
          console.log('22',this.state.lat);
          console.log('33',this.state.lng);
          //this.props.route.params.dataFilter1( this.state.location,this.state.lat,this.state.lng)
          //NavigationService.navigate('Médecin')
          this.props.route.params.dataFilter1(this.state.location,this.state.lat,this.state.lng);
          this.props.navigation.goBack();
        }}
        onFail={(error) => console.error(error)}
        requestUrl={{
          url:
            'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
          useOnPlatform: 'web',
        }} // this in only required for use on the web. See https://git.io/JflFv more for details. // variable styles can t find error
        styles={{
          textInputContainer: {
            backgroundColor: 'rgba(0,0,0,0)',
            borderTopWidth: 0,
            borderBottomWidth: 0,
            
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
          },
          
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
      />
    </KeyboardAvoidingView>
    );
}
}