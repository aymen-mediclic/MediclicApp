import React from 'react';
import {View,Text,Button,StyleSheet,ScrollView,Image} from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

class About extends React.Component {
  render(){
    return (
      <ScrollView style={styles.container}>
       
       
        <Text style={styles.text}>Une multitude de services pratiques pour les patients</Text>
        <Image style={styles.img} source={require('../assets/1.jpg')} />
        <Text style={styles.text1}>Prise de rendez-vous en ligne </Text>
        <Text style={styles.text2}>Prenez-rendez-vous où vous voulez et quand vous voulez.</Text>
        <Text style={styles.text3}>Vous pouvez prendre rendez-vous en ligne 24h/24 et 7j/7 sur MEDICLIC en quelques clics depuis n’importe quel ordinateur, tablette ou smartphone. Plus besoin d’attendre que votre professionnel vous réponde.</Text>
        <Image style={styles.img} source={require('../assets/2.jpg')} />
        <Text style={styles.text1}>Plusieurs types de Rendez-vous disponibles </Text>
        <Text style={styles.text2}>Vous avez accès à un large choix de type de rendez-vous.</Text>
        <Text style={styles.text3}>Avec MEDICLIC, vous pouvez prendre plusieurs types de rendez-vous : A domicile, Au cabinet, par Téléconsultation. Avec les rendez-vous à domicile et la téléconsultation vous n’avez plus besoin de sortir de chez vous.

Commencez par le client: trouvez ce qu'il veut et donner-le lui.</Text>
<Image style={styles.img} source={require('../assets/3.jpg')} />
        <Text style={styles.text1}>Plusieurs Acteurs disponibles </Text>
        <Text style={styles.text2}>Vous avez accès à un large choix de professionnels et de centres.</Text>
        <Text style={styles.text3}>Avec MEDICLIC, vous pouvez prendre des rendez-vous en ligne avec plusieurs acteurs de la santé et du bien-être : Coachs sportif, Thérapeutes, Médecins, Laboratoires, Préleveurs, Infirmiers, Psychologues, Dentistes, Centres de Radiologie, Diététiciens, Kinésithérapeutes …</Text>
<Image style={styles.img} source={require('../assets/4.jpg')} />
        <Text style={styles.text1}>Partage </Text>
        <Text style={styles.text2}>Vos informations sont envoyées avant le rendez-vous.</Text>
        <Text style={styles.text3}>Vos informations administratives et médicales remplies en ligne lors de votre prise de rendez-vous sont enregistrées sur l’agenda du professionnel. Vous n’avez plus besoin de tout renseigner le jour du rendez-vous. Vous pouvez également partager des documents avec le professionnel avant et après votre rendez-vous.</Text>
<Image style={styles.img} source={require('../assets/5.jpg')} />
        <Text style={styles.text1}>Accès aux profils des Professionnels </Text>
        <Text style={styles.text2}>Prenez vos rendez-vous plus sereinement.</Text>
        <Text style={styles.text3}>Vous pouvez consultez les profils des différents professionnels inscrits sur MEDICLIC. En accédant aux informations sur leurs activités, formations, expertises … vous pouvez prendre rendez-vous plus sereinement.</Text>
<Image style={styles.img} source={require('../assets/6.jpg')} />
        <Text style={styles.text1}>Oubli des rendez-vous </Text>
        <Text style={styles.text2}>Vous n’oublierez plus vos rendez-vous grâce à nos solutions de rappels.</Text>
        <Text style={styles.text3}>MEDICLIC vous rappelle automatiquement vos rendez-vous par email et par SMS, quelques jours avant. Vous pouvez aussi modifier ou annuler votre rendez-vous directement sur MEDICLIC si vous le souhaitez.</Text>
<Image style={styles.img} source={require('../assets/7.jpg')} />
        <Text style={styles.text1}>Carnet de suivi </Text>
        <Text style={styles.text2}>Vous vous sentirez plus impliqués et plus autonomes grâce au carnet de suivi de vos rendez-vous en ligne.</Text>
        <Text style={styles.text3}>Gérez l’ensemble de vos rendez-vous et ceux de vos proches depuis votre compte MEDICLIC. Vous y retrouvez vos rendez-vous et vos documents partagés avec vos professionnels.</Text>
      </ScrollView>
      
    );
  }

}
const styles = StyleSheet.create({
  container: {
    //flex : 1,
    backgroundColor: '#fff',
    //justifyContent: 'center',
    //alignItems: 'center', 
  },
  text : {
    /*alignItems: 'center',
    justifyContent: 'center',*/
    color: '#2980b9',
    fontSize:40,
    margin:20
  },
  text1 : {
    fontSize:28,
    fontWeight:'bold',
    margin:10,
  },
  text2 : {
    fontStyle:'italic',
    fontWeight:'bold',
    margin:10,
  },
  text3 : {
    margin:10
  },
  img : {
    margin:10,
    width:320,
    height:320,
    alignSelf:'center'
  }
 
});
export default About 