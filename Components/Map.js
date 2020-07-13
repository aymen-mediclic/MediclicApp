import React from 'react';
import MapView, {Marker} from 'react-native-maps';

const MyMapView = (props) => {
    return (
        <MapView
            style={{ flex: 1 }}
            region={props.region}
            showsUserLocation={true}
            onPress={ (event) =>{ 
              //  if you want lat lng on this screen then you will get 
              // console.log(event.nativeEvent.coordinate) //this display latlong when yu press // samething for this change position screen?
              //yes ok// go for call i will explain you one disadvantage of on Press ok
              console.log(event.nativeEvent.coordinate)
                props.onRegionChange(event.nativeEvent.coordinate)
            }}
            //check again and now press on the map ok just to on log not display it on map, only on consol log
            //still marker at center of map i reaload maybe ok its moving, the marker is moving
            //thats you want right? yes please one small detail for the lat and lng of the marker what? how to extract the lat and lng from the marker
            //onRegionChangeComplete={(reg) => props.onRegionChange(reg)}
            >

            <Marker
                coordinate={props.region} />
        </MapView>
    )
}
export default MyMapView;
/*import React from 'react';
import MapView,{ Marker } from 'react-native-maps';

const MyMapView = (props) => {
    return (
        <MapView
            style={{ flex: 1 }}
            region={props.region}
            showsUserLocation={true}
            onRegionChange={(reg) => props.onRegionChange(reg)}>

            <Marker coordinate={props.region} draggable={true} />
        </MapView>
    )
}
export default MyMapView;*/

