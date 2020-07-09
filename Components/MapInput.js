import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

function MapInput(props){
        return (

            <GooglePlacesAutocomplete
                placeholder='Chercher'
                minLength={2} // minimum length of text to search
                autoFocus={true}
                returnKeyType={'search'} // Can be left out for default return key 
                listViewDisplayed={false}    // true/false/undefined
                fetchDetails={true}
                onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                    props.notifyChange(details.geometry.location);
                }}
                query={{
                    key: 'AIzaSyBwO4e9kDezyKMJBTIsEmGrLveDXzB1kuE',
                   
                    types: ['(cities)'],
                    language: 'fr', // language of the results
          components: 'country:ma',
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={300}
            />
        );
}
export default MapInput;