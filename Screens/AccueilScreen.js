import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native'
import Search from '../Components/Search'
//import Header from '../Components/Header'
class AccueilScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
          
          <Search navigation={this.props.navigation}/>
        
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