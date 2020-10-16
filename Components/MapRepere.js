// Marker des medecins sur la map, voir documentation map Expo
import React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';

import { StyleSheet, Text, View, Dimensions,Image,TouchableOpacity  } from 'react-native';
import * as NavigationService from '../Navigation/NavigationService';
//import { Image } from 'native-base';

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
        const {dataSource} = this.props
        console.log("******* PLAN SCREEN *********");
        (dataSource) ?
        dataSource.map((m, key) => {
         return console.log(m.obj);
        
        }):console.log("******* rien *********")
        //console.log(dataSource[0]);
        console.log("******* END *********");
        return (
            <View style={styles.container}>
                <MapView style={styles.mapStyle}
                    initialRegion={{
                        latitude: dataSource[0].obj.latitude_obj,
                        longitude: dataSource[0].obj.longitude_obj,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                          {
                            (dataSource) ?
                            dataSource.map((m, key) => {
                                    return <Marker  pinColor={"orange"} key={key} coordinate={{ latitude: m.obj.latitude_obj, longitude: m.obj.longitude_obj}} /*image={require('../assets/marker.png')}*/ >
                                    <Callout style={{borderRadius:10}}>
                                        <TouchableOpacity style={{flexDirection:'row',borderRadius:5}} onPress={()=>NavigationService.navigate('Disponibilités', { "Med": this.state.data, location: this.props.dataFilter.location, type_rdv: this.props.dataFilter.type_rdv, Name: m.obj.name })} >
                                        <Image style={{width:80,height:80,borderRadius:80/2,alignSelf:'center',marginRight:10}} source={require('../assets/1.jpg')} />
                                        <View style={{borderRadius:5}}>
                                        <Text style={{fontWeight:'bold',alignSelf:'center'}}>{m.obj.name} </Text>
                                        <Text>{m.obj.specialite}</Text>
                                        
                                        </View>
                                        </TouchableOpacity>
                                        
                                    </Callout>
                                    </Marker>
                                })
                                :
                                <></>
                        }
                   
                  
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