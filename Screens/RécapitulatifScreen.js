import React from 'react';
import {View,Text,Button,StyleSheet, AsyncStorage} from 'react-native'
import moment from 'moment';

class Recap extends React.Component {

  state = {
    userInfo: false
  }

    componentDidMount(){
      this.getUser();
    }

    getUser = async ()=>{
      let userInfo  = await AsyncStorage.getItem("userInfo");
      if(userInfo){
        userInfo      = JSON.parse(userInfo);
        this.setState({userInfo});
        console.log(userInfo,"------------- SOMY TEST ------------------")
      }
    }


  render(){
    console.log(this.props.Name)
    const text =this.props.text
    console.log(this.state.userInfo.nom, "============= INSIDE RENDER ===========")
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
                <Text style={styles.txt}> Nom:</Text>
                {(this.state.userInfo)?
                  <>
                    <Text style={styles.txt}> {`${this.state.userInfo.nom}`}</Text>
                    <Text style={styles.txt}> Téléphone:</Text>
                    <Text style={styles.txt}> E-mail:</Text>
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
    fontWeight:'bold',
    
    
  },
  txt1 : {
    fontSize:15,
    //fontWeight:'bold'
    
  },
 
});
export default Recap