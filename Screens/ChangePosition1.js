import React from 'react';
import { View,Text } from 'react-native';
import MapInput from '../Components/MapInput';
import MyMapView1 from '../Components/Map1';
import { getLocation, geocodeLocationByName } from '../Navigation/LocalisationService';

class MapContainer1 extends React.Component {
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
        console.log(this.state.region.latitude,"!!!!!!!!!!!!!!")
       /* if (this.state.region.latitude &&this.state.region.longitude){
        this.props.coord(this.state.region.longitude,this.state.region.latitude)
            }*/
        return (
            <View style={{height:350,width:'98%',alignSelf:'center'}}>
               {/*} <Text style={{fontSize:16,alignSelf:'center',margin:10}}>Veuillez renseigner l'adresse du rendez-vous :</Text>*/}
               
               <MapInput notifyChange={(loc) => this.getCoordsFromName(loc)}
               />
                

           {
               this.state.region['latitude'] ?
                   <View style={{flex:1,marginTop:10 }}>
                       <MyMapView1
                           region={this.state.region}
                           onRegionChange={(reg) => {this.onMapRegionChange(reg);console.log(this.state.region.latitude,"!!!!!!!!!!!!!!11");this.props.coord(this.state.region.longitude,this.state.region.latitude)}} />
                   </View> : null}
       </View>
   );
}
}

export default MapContainer1;


