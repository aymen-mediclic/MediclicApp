import React from 'react';
import {View,Text,Button,StyleSheet,} from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

import Recap from './RécapitulatifScreen';
import MyComponent from '../Components/RadioButton';
import Identification from './IdentificationScreen';
class RDV extends React.Component {
    constructor(props){
        super(props);
        this.handler = this.handler.bind(this);
        this.state={
            next:true
        }
    }
    handler() {
        this.setState({
            next: false
        });
    }
    render(){
    return (
      <View style={styles.container}>
       
        <ProgressSteps  >
            <ProgressStep label="Identification " nextBtnDisabled={false}	 >
                
                    <Identification action={this.handler}/>
               
            </ProgressStep>
        <ProgressStep label=" Motif" >
                <View style={{ alignItems: 'center' }}>
                    <MyComponent/>
                </View>
        </ProgressStep>
        <ProgressStep label="Récapitulatif">
            <Recap/>
        </ProgressStep>
        <ProgressStep label="Confirmation">
            <View style={{ alignItems: 'center' }}>
                <Text>Félicitation, votre rendez-vous est confirmé !</Text>
            </View>
        </ProgressStep>
    </ProgressSteps>
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
export default RDV 