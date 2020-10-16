import React from 'react';
import { View } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const  minLength = 2

class MapInput extends React.Component {
    state = {
        text: ''
    }
    render() {
        return (
            <View style = {{flex: (this.state.text.length >= minLength)?1: 1/8}}>

                <GooglePlacesAutocomplete
                    placeholder= {this.props.address?this.props.address:'Casablanca, Maroc'}
                    minLength={minLength} // minimum length of text to search
                    //autoFocus={true}
                    //returnKeyType={'search'} // Can be left out for default return key 
                    listViewDisplayed={'auto'}    // true/false/undefined
                    fetchDetails={true}
                    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                        this.props.notifyChange(details.geometry.location);
                        this.setState({text: ''})
                    }
                    }
                    textInputProps={{
                        onChangeText: (text) => { this.setState({text}) }
                    }}
                    query={{
                        key: 'AIzaSyBwO4e9kDezyKMJBTIsEmGrLveDXzB1kuE',
                        language: 'fr', // language of the results
                        components: 'country:ma',
                    }}
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
    
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={300}
                    enablePoweredByContainer={false}
                />
            </View>
        );
    }
}
export default MapInput;
/*import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

function MapInput(props){
        return (

            <GooglePlacesAutocomplete
                placeholder='Chercher'
                minLength={1} // minimum length of text to search
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
export default MapInput;*/