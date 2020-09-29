import React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';

import { StyleSheet, Text, View, Dimensions,Image } from 'react-native';
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
                                    return <Marker pinColor={"orange"} key={key} coordinate={{ latitude: m.obj.latitude_obj, longitude: m.obj.longitude_obj}} /*image={require('../assets/marker.png')}*/ >
                                    <Callout>
                                        <View style={{flexDirection:'row'}}>
                                        <Image style={{width:80,height:80,borderRadius:80/2,alignSelf:'center'}} source={require('../assets/1.jpg')} />
                                        <View S>
                                        <Text style={{fontWeight:'bold',alignSelf:'center'}}>{m.obj.name} </Text>
                                        <Text>{m.obj.specialite}</Text>
                                        </View>
                                        </View>
                                        
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