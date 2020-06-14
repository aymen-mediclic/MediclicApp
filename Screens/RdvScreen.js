import React from 'react';
import { View, Text, Button, StyleSheet,AsyncStorage } from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

import Recap from './RécapitulatifScreen';
import MyComponent from '../Components/RadioButton';
import Identification from './IdentificationScreen';

class RDV extends React.Component {

  state = {
    userInfo: false
  }

  onFocusFunction = () => {
    // do some stuff on every screen focus
    //alert('Focus')
    
    this.getUser();
  }
  
  // add a focus listener onDidMount
  componentDidMount () {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.onFocusFunction()
    })
  }
  
  
  // componentWillUnmount () {
  //   this.focusListener.remove()
  // }
  

    getUser = async ()=>{
      let userInfo  = await AsyncStorage.getItem("userInfo");
      if(userInfo){
        userInfo      = JSON.parse(userInfo);
        this.setState({userInfo});
        console.log(userInfo,"------------- Aymane TEST ------------------")
      }
    }



  render() {
    const text = this.props.route.params.text;
    const name = this.props.route.params.name;
    console.log(text)
    console.log(name)
    return (
      <View style={styles.container}>

        <ProgressSteps>
          <ProgressStep label="Identification " nextBtnText="Suivant" >

            <Identification />

          </ProgressStep>

          <ProgressStep label="Récapitulatif" nextBtnText="Suivant" previousBtnText="Précédent" >
            <Recap Name={name} text={text} userInfo = {this.state.userInfo}/>
          </ProgressStep>
          <ProgressStep label="Confirmation" previousBtnText="Précédent" finishBtnText='Confirmer' onSubmit={() => alert("Félicitation, votre rendez-vous est confirmé !")} >
            <View style={{ alignItems: 'center' }}>
              <Text>Confirmez votre rendez-vous</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>

    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //justifyContent: 'center',
    //alignItems: 'center',
    
  },
  text: {
    /*alignItems: 'center',
    justifyContent: 'center',*/
    backgroundColor: '#ecf0f1',
  }

});
export default RDV 