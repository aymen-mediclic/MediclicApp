import React from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import MapInput from '../Components/MapInput';
import MyMapView from '../Components/Map';
import { getLocation, geocodeLocationByName } from '../Navigation/LocalisationService';
import Geocoder from 'react-native-geocoding';
import { getAddress } from '../Navigation/GetAdreesApi';


class MapContainer extends React.Component {
    state = {
        region: {},
        add:''
    };

    componentDidMount() {
        this.getInitialState();
    }

// ok run

    getInitialState() {
        getLocation().then(
            (data) => {
                console.log(data,"!!!!!");
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
        
        
        console.log(this.state.region,this.props.val,"fgg")
       // console.log(data.description);
       /*
       getAddress(latitude,longitude,(res)=>{
                    if(res){
                    const address =  res.results[0].locations[0].street
                        console.log(address)
                    }else{this.setState({islocation: false})}
                }) 
       */
        return (
            <View style={{ flex: 1,backgroundColor:'white'}}>
                <Text style={{fontWeight:'bold',fontSize:16,alignSelf:'center',margin:10}}>Veuillez renseigner l'adresse du rendez-vous :</Text>
                    
                    <MapInput  address={this.state.add} notifyChange={(loc) => this.getCoordsFromName(loc)}
                    />
                   
                {
                    this.state.region['latitude'] ?
                        <View style={{ /*height:"80%"*/marginTop:10,flex:1}}>
                            <MyMapView
                                region={this.state.region}
                                onRegionChange={(reg) => {
                                    this.onMapRegionChange(reg);
                                    
                                    getAddress(reg.latitude,reg.longitude,(res)=>{
                                        if(res){
                                        const address =  res.results[0].locations[0].street
                                            console.log(address)
                                            this.setState({add: address})
                                        }else{this.setState({islocation: false})}
                                    }) 
                                }}/>
                                <TouchableOpacity style={{justifyContent:'center',borderRadius:3,backgroundColor:'#1E79C5',width:100,height:35,margin:10,alignSelf:'flex-end'}}
                                onPress={()=>{console.log(this.state.add,'ffffff')
                                this.props.route.params.dataFilter4(this.state.add,this.state.region.latitude,this.state.region.longitude);
                                this.props.navigation.goBack();
                            
                                }}
                                >
                                        <Text style={{color:'white',alignSelf:'center',fontSize:17}}> Valider</Text>
                                    </TouchableOpacity>
                                    

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