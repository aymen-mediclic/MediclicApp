import React from 'react';
import { View } from 'react-native';
import MapInput from '../Components/MapInput';
import MyMapView from '../Components/Map';
import { getLocation, geocodeLocationByName } from '../Navigation/LocalisationService';

class MapContainer extends React.Component {
    state = {
        region: {}
    };

    componentDidMount() {
        this.getInitialState();
    }

    getInitialState() {
        getLocation().then(
            (data) => {
                console.log(data);
                this.setState({
                    region: {
                        latitude: data.latitude,
                        longitude: data.longitude,
                        latitudeDelta: 0.003,
                        longitudeDelta: 0.003
                    }
                });
            }
        );
    }

    getCoordsFromName(loc) {
        this.setState({
            region: {
                latitude: loc.lat,
                longitude: loc.lng,
                latitudeDelta: 0.003,
                longitudeDelta: 0.003
            }
        });
    }

    onMapRegionChange(region) {
        this.setState({ region });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <MapInput notifyChange={(loc) => this.getCoordsFromName(loc)}
                    />
                </View>

                {
                    this.state.region['latitude'] ?
                        <View style={{ flex: 1 }}>
                            <MyMapView
                                region={this.state.region}
                                onRegionChange={(reg) => this.onMapRegionChange(reg)} />
                        </View> : null}
            </View>
        );
    }
}

export default MapContainer;
/*import React from 'react'
import { View, Picker, Text, StyleSheet,Button } from 'react-native'
import Map from '../Components/Map'

export default class ChangeP extends React.Component {
    render() {
        return (
            <View style={styles.ctr}>
                <Map/>
                <Button title='valider'/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    ctr: {
        flex: 1,
        //marginTop:20,
        alignItems: 'center',
        justifyContent: 'center'
    },
})*/