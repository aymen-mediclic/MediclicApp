import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native'


class Recap extends React.Component {
  render(){
    return (
        <View style={styles.container}>
       
             <View style={styles.ctr1} >
                <Text style={styles.title} > Informations sur le rendez-vous:</Text>
                <Text style={styles.txt}> Medecin: Dr xavier vilan</Text>
                <Text style={styles.txt}> Motif de consultation:</Text>
                <Text style={styles.txt}> Heure:08:18</Text>
                <Text style={styles.txt}> Date:2020-03-30</Text>
             </View>
             <View style={styles.ctr2} >
                <Text style={styles.title}> Informations sur le patient:</Text>
                <Text style={styles.txt}> Nom:</Text>
                <Text style={styles.txt}> Prénom:</Text>
                <Text style={styles.txt}> Téléphone:</Text>
                <Text style={styles.txt}> E-mail:</Text>
             </View>


        </View>
      
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex : 1,
    //backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column', 
  },
  ctr1 : {
    marginTop:5,
    marginBottom:5,
    //backgroundColor:'grey',
    width:'80%'
  },
  ctr2 : {
    marginBottom:5,
    //backgroundColor:'grey',
    width:'80%'
  },
  title : {
    fontSize:20,
    color:'black',
    marginBottom:5,
    textAlign:'center'
  },
  txt : {
    fontSize:15,
    color:'grey',
    marginBottom:5
  },
 
});
export default Recap