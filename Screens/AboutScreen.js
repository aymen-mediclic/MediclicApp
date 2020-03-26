import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

class About extends React.Component {
  render(){
    return (
      <View style={styles.container}>
       
       <View style={{flex: 1}}>
    <ProgressSteps  >
        <ProgressStep label="RDV" >
            <View style={{ alignItems: 'center' }}>
                <Text>Sélectionnez un RDV!</Text>
            </View>
        </ProgressStep>
        <ProgressStep label="Authentification">
            <View style={{ alignItems: 'center' }}>
                <Text>Se connecter!</Text>
            </View>
        </ProgressStep>
        <ProgressStep label="Confirmation">
            <View style={{ alignItems: 'center' }}>
                <Text>Confirmation!</Text>
            </View>
        </ProgressStep>
    </ProgressSteps>
  </View>
      </View>
      
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  text : {
    /*alignItems: 'center',
    justifyContent: 'center',*/
    backgroundColor: '#ecf0f1',
  }
 
});
export default About 