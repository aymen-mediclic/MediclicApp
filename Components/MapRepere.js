import React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';

import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Image } from 'native-base';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            region: {
                latitude: 33.5912796,
                longitude: -7.6353386,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },

        };
    }

    onRegionChange(region) {
        this.setState({ region });
    }
    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.mapStyle}
                    initialRegion={{
                        latitude: 33.5912796,
                        longitude: -7.6353386,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker coordinate={{ latitude: 33.5912796, longitude: -7.6353386, }} image={require('../assets/map_marker.png')} title="DR D">
                        
                    </Marker>
                    <Marker coordinate={{ latitude: 33.5812796, longitude: -7.6353386, }} image={require('../assets/map_marker.png')} title="test map1" >
                    </Marker>
                    <Marker coordinate={{ latitude: 33.5812796, longitude: -7.6153386, }} image={require('../assets/map_marker.png')} title="Polyclinique casablanca" >
                    </Marker>
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});