import React from 'react';
import {View,Text,Button,StyleSheet, AsyncStorage} from 'react-native'
import moment from 'moment';
// import { useNavigation } from '@react-navigation/native';

class Recap extends React.Component {

  


  render(){
    
    console.log(this.props.userInfo, "!!!!!!!!!!!!!!!!!!!!!!!!!!")
    const text =this.props.text
    return (
        <View style={styles.container}>
       
             <View style={styles.ctr1} >
                <Text style={styles.title} > Informations sur le rendez-vous:</Text>
                <View style={{flexDirection:'row',marginVertical:3,justifyContent:'space-between'}}>
                <Text style={styles.txt}> Type du RDV: </Text>
                <Text style={styles.txt1}> C</Text>
                </View>
                <View style={{flexDirection:'row',marginVertical:3,justifyContent:'space-between'}}>
                <Text style={styles.txt}> Medecin: </Text>
                <Text style={styles.txt1}> {this.props.Name}</Text>
                </View>
                <View style={{flexDirection:'row',marginVertical:3,justifyContent:'space-between'}}>
                <Text style={styles.txt}> Adresse:</Text>
                <Text style={styles.txt1}> Casablanca </Text>
                </View>
                <View style={{flexDirection:'row',marginVertical:3,justifyContent:'space-between'}}>
                <Text style={styles.txt}> Adresse domicile:</Text>
                <Text style={styles.txt1}> Maison </Text>
                </View>
                <View style={{flexDirection:'row',marginVertical:3,justifyContent:'space-between'}}>
                <Text style={styles.txt}> Date:</Text>
                <Text style={styles.txt1}> {moment(text).format("h:mm a")}</Text>
                </View>
                <View style={{flexDirection:'row',marginVertical:3,justifyContent:'space-between'}}>
                <Text style={styles.txt}> Heure:</Text>
                <Text style={styles.txt1}> {moment(text).format("DD-MM-YYYY")}</Text>
                </View>
                
             </View>
             <View style={styles.ctr2} > 
                <Text style={styles.title}> Informations sur le patient:</Text>
                {(this.props.userInfo)?
                  <>
                    <Text style={styles.txt}> {`Nom: ${this.props.userInfo.nom}`}</Text>
                    <Text style={styles.txt}> {`Prenom: ${this.props.userInfo.prenom}`}</Text>
                    <Text style={styles.txt}> {`Téléphone:0622102874 `}</Text>
                    <Text style={styles.txt}> {`E-mail: asmaa@odoo.com`}</Text>
                    
                  </>
                  :
                  <></> 
                  
                }
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
    fontSize:19,
    color:'#34495e',
    marginBottom:8,
    textAlign:'center'
  },
  txt : {
    fontSize:15,
    //fontWeight:'bold',
    
    
  },
  txt1 : {
    fontSize:15,
    //fontWeight:'bold'
    
  },
 
});
export default Recap