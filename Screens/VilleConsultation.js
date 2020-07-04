import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Placesearch from 'react-native-placesearch';
import PlacesInput from 'react-native-places-input';
import { View,TextInput,ScrollView,Text,StyleSheet } from 'react-native';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import * as NavigationService from '../Navigation/NavigationService';

const GOOGLE_PLACES_API_KEY = 'AIzaSyBwO4e9kDezyKMJBTIsEmGrLveDXzB1kuE'; //run
export default class VilleC extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
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
        onPress={(data, details = null) => {console.log(details.geometry.location);
          NavigationService.navigate('Médecin',{screen:'Recherche',params:{lien: this.props.route.params.lien, choice: this.props.route.params.choix}})
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
    </View>
    );
}
}

/*
export default class VilleC extends React.Component {
    constructor(props) {
        super(props);
       
      }
    render() {
        
        
        return (
<View style={{flex:1}}>
<PlacesInput
                    googleApiKey={'AIzaSyA4qngbP1rO_kRLSg__RhqrT29Kst_yHXg'}
                    placeHolder={"Choisir la ville "}
                    language={"en-US"}
                    queryCountries={['ma']}
                    onSelect={place => {
                      //NavigationService.navigate('Médecin',{screen:'Recherche',params:{lien: this.props.route.params.lien}}) 
                      NavigationService.navigate('Médecin',{screen:'Recherche',params:{lien: this.props.route.params.lien, choice: this.props.route.params.choix}}) 
                      //NavigationService.navigate('Médecin')
                        //this.props.goToPoint(get(place, 'result.geometry.location.lat'), get(place, 'result.geometry.location.lng'))
                    }}
                    //iconResult={<Ionicons name="md-pin" size={25} style={styles.placeIcon}/>}
                />
                
    </View>
        );
}
}*/