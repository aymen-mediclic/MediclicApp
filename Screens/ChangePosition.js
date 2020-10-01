import React from 'react';
import { View,Text } from 'react-native';
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
                console.log(data,"vrouuuuuuuuuuuuuuuuuum");
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
        console.log(this.state.region,"fgg")
       // console.log(data.description);
        return (
            <View style={{ flex: 1,backgroundColor:'white'}}>
                <Text style={{fontSize:16,alignSelf:'center',margin:10}}>Veuillez renseigner l'adresse du rendez-vous :</Text>
                    <MapInput notifyChange={(loc) => this.getCoordsFromName(loc)}
                    />
                

                {
                    this.state.region['latitude'] ?
                        <View style={{ flex:1 }}>
                            <MyMapView
                                region={this.state.region}
                                onRegionChange={(reg) => this.onMapRegionChange(reg)} />
                        </View> : null}
            </View>
        );
    }
}

export default MapContainer;
/*
import React from 'react';
import { View,Text } from 'react-native';
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
                console.log(data,"vrouuuuuuuuuuuuuuuuuum");
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
        console.log(this.state.region,"fgg")
       // console.log(data.description);
        return (
            <View style={{ backgroundColor:'orange',height:250,width:'98%',alignSelf:'center'}}>
               {/*} <Text style={{fontSize:16,alignSelf:'center',margin:10}}>Veuillez renseigner l'adresse du rendez-vous :</Text>*}
               <MapInput notifyChange={(loc) => this.getCoordsFromName(loc)}
               />
           

           {
               this.state.region['latitude'] ?
                   <View style={{ flex:1,backgroundColor:'brown' }}>
                       <MyMapView
                           region={this.state.region}
                           onRegionChange={(reg) => this.onMapRegionChange(reg)} />
                   </View> : null}
       </View>
   );
}
}

export default MapContainer;


*/