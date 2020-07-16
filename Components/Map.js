import React from 'react';
import MapView, {Marker} from 'react-native-maps';

const MyMapView = (props) => {
    return (
        <MapView
            style={{ flex: 1 }}
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
    )
}
export default MyMapView;


