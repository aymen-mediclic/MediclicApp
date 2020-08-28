import React from 'react';
import { View, Text, Image, StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import moment from 'moment';
import Recap from './RécapitulatifScreen';
import MyComponent from '../Components/RadioButton';
import Identification from './IdentificationScreen';
import { url1, url2 } from '../Navigation/GlobalUrl';
import { Button, Input } from 'react-native-elements';
import EntypoI from 'react-native-vector-icons/AntDesign'
import * as NavigationService from '../Navigation/NavigationService';
import Conf from './Confirmation';
class RDV extends React.Component {

  state = {
    userInfo: false,
    nxt: true,
    adress2: '',
    nbr:0
  }
  getAdress2 = () => {
    this.setState({ adress2: this.props.route.params.adresse2 })
  }

  onFocusFunction = () => {
    // do some stuff on every screen focus
    //alert('Focus')

    this.getUser();
  }

  // add a focus listener onDidMount
  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.onFocusFunction()
    })
  }


  AbleNext = (val) => {
    this.setState({ nxt: val })
  }


  getUser = async () => {
    fetch(url1)
    fetch(url2 + '/api/profil?uid=26&get_profil')
      .then((response) => response.json())
      .then(async (res) => {
        console.log("12")
        console.log(res)

        await AsyncStorage.setItem("userInfo", JSON.stringify(res))

      })
      .done();
    let userInfo = await AsyncStorage.getItem("userInfo");
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
      this.setState({ userInfo });
      console.log(userInfo, "------------- Aymane TEST ------------------")
    }
  }
  Confirmation = (name1 = this.props.route.params.namo,

    text = this.props.route.params.text,
    text1 = this.props.route.params.text1,
    doctor = this.props.route.params.doctor,
    duration = this.props.route.params.duration,
    partner_id = this.props.route.params.partner_id,
    context = this.props.route.params.context,
    praticien = this.props.route.params.praticien,
    service_id = this.props.route.params.service_id,
    service_name = this.props.route.params.service_name,
    service_salle = this.props.route.params.service_salle,
    adresse_rdv = this.props.route.params.adresse_rdv) => {
    fetch(url1)
    fetch(url2 + '/api/create_event', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: JSON.stringify({
        uid: "26",
        'name': name1,
        'date_start': text,
        'date_end': text1,
        'doctor': doctor,

        'duration': duration,
        'partner_id': partner_id,
        'is_visio': '0',
        'context_mediclic': context,
        'praticien': praticien,
        'type': "1",
        'patient_proche': "0",
        'adresse_rdv': adresse_rdv,
        "service_id": service_id,
        'service_name': service_name,
        'service_salle': service_salle,


        'type_cons': "C",
        'location': "131 anfa. Casablanca",
        'adresse_2': "0",
        'responsable': "1",




      })
    })

      .then((response) => response.json())
      .then((res) => {

        console.log("repooooonse")
        console.log(res)
        console.log("*********success***********")


      })
      .done();
  }




  render() {
    let text = this.props.route.params.text;
    let name = this.props.route.params.name;

    let service_salle = this.props.route.params.service_salle;
    //console.log(text)
    //console.log(name)
    //console.log(name1)
    const buttonTextStyle = {
      color: '#393939'
  };
    return (
      <View style={styles.container}>

        <ProgressSteps activeStep= {this.state.nbr} completedProgressBarColor='#1E79C5' completedLabelColor='#1E79C5' completedStepIconColor='#1E79C5' activeStepIconBorderColor='#f0ad4e' activeLabelColor='#f0ad4e' activeStepNumColor='#f0ad4e' >
          <ProgressStep label="Identification " nextBtnText="Suivant" nextBtnDisabled={this.state.nxt} previousBtnText="Précédent" previousBtnDisabled={false} >
            <Identification AbleNext={this.AbleNext} userInfo={this.state.userInfo} getUser={this.getUser} type_rdv={this.props.route.params.type_rdv} getAdress2={this.getAdress2} />
            


          </ProgressStep>

          <ProgressStep label="Récapitulatif" nextBtnText="Confirmer" previousBtnText="Précédent" onNext={this.Confirmation} >
            <Recap Name={name} text={text} userInfo={this.state.userInfo} adresse={this.props.route.params.adresse} type_rdv={this.props.route.params.type_rdv} service_name={this.props.route.params.service_name} service_salle={this.props.route.params.service_salle} adress2={this.props.route.params.adresse2} onFocusFunction={this.onFocusFunction} />
          </ProgressStep>
          <ProgressStep label="Confirmation" previousBtnText="Précédent" finishBtnText='Confirmer' /*onSubmit={this.Confirmation}*/ nextBtnDisabled={true} previousBtnDisabled={true}  >
            <Conf/>
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
  },

});
export default RDV
//() => alert("Félicitation, votre rendez-vous est confirmé !")