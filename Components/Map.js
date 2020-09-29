import { View } from "react-native";
import React from 'react';
import MapView, {Marker} from 'react-native-maps';

const MyMapView = (props) => {
    return (
        <View style={{ height:300,width:200 }}>
        <MapView
            style={{ height:300,width:500,marginTop:20}}
            region={props.region}
            showsUserLocation={true}
            onPress={ (event) =>{ 
              
              console.log(event.nativeEvent.coordinate)
                props.onRegionChange(event.nativeEvent.coordinate)
            }}
            >

            <Marker
                coordinate={props.region} />
        </MapView>
        </View>
    )
}
export default MyMapView;


