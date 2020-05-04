import React from 'react';
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
export default MyMapView;

/*
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
export default class Map extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle}
        initialRegion={{
          latitude: 33.573109,
          longitude: -7.589843,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035,
        }}
        >
          <Marker coordinate={ {latitude: 33.573109,longitude: -7.589843}}
        title={'Casablanca'} draggable={true}
        >
          
        </Marker>
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
});*/