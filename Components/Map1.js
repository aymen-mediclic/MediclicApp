import React from 'react';
import MapView, {Marker} from 'react-native-maps';

const MyMapView1 = (props) => {
    return (
        <MapView
            style={{ width:'95%',height:'100%',alignSelf:'center' }}
            region={props.region}
            showsUserLocation={true}
            onPress={ (event) =>{ 
              
              //console.log(event.nativeEvent.coordinate)
                props.onRegionChange(event.nativeEvent.coordinate)
            }}
            >

            <Marker
                coordinate={props.region} />
        </MapView>
    )
}
export default MyMapView1;


