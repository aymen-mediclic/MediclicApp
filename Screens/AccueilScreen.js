import React from 'react';
import {View,StyleSheet,ActivityIndicator} from 'react-native'
import * as Font from 'expo-font';
import Search from '../Components/Search'
//import Header from '../Components/Header'
class AccueilScreen extends React.Component {
    render(){
    return (
      <View style={styles.container}>
          <Search />
        
      </View>
    );
  }

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  
});
export default AccueilScreen
//navigation={this.props.navigation}