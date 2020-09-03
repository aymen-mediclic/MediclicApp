import React from 'react';
import {View,Text,Button,StyleSheet, AsyncStorage,TouchableOpacity} from 'react-native'
import moment from 'moment';
import Adresse2 from '../Components/Adresse2';
import Modal from 'react-native-modal';
// import { useNavigation } from '@react-navigation/native';

class Recap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen1: false,
      adress2:''
    }
  }
   Adresse2=(txt) => {
    this.setState({adress2:txt})
    this.setState({ modalOpen1: false })
   }


  render(){
    
    console.log(this.props.userInfo, "!!!!!2222!!!!!!!!!!!!!!!!!!!!!")
    const text =this.props.text
    return (
        <View style={styles.container}>
          <Modal
                                                            isVisible={this.state.modalOpen1}
                                                            animationIn="slideInLeft"
                                                            animationOut="slideOutLeft"
                                                            style={{ margin: 0 }}
                                                            transparent={true}
                                                        >
                                                        <Adresse2 adress2={this.Adresse2}/>
                                                        </Modal>
       
             <View style={styles.ctr1} >
                <Text style={styles.title} > Informations sur le rendez-vous :</Text>
                <View style={{flexDirection:'row',marginVertical:3,justifyContent:'space-between'}}>
                <Text style={{ ...styles.txt, flex: 3 }}>Type du RDV</Text>
                <Text style={{ ...styles.txt, flex: 1 }}>:</Text>
                <Text style={{ ...styles.txt1, flex: 3 }}>{this.props.type_rdv}</Text>
                </View>
                <View style={{flexDirection:'row',marginVertical:3,justifyContent:'space-between'}}>
                <Text style={{ ...styles.txt, flex: 3 }}>RDV avec</Text>
                <Text style={{ ...styles.txt, flex: 1 }}>:</Text>
                <Text style={{ ...styles.txt1, flex: 3 }}>{this.props.Name}</Text>
                </View>
                <View style={{flexDirection:'row',marginVertical:3,justifyContent:'space-between'}}>
                <Text style={{ ...styles.txt, flex: 3 }}>Adresse</Text>
                <Text style={{ ...styles.txt, flex: 1 }}>:</Text>
                <Text style={{ ...styles.txt1, flex: 3 }}>{this.props.adresse}</Text>
                </View>
                {(this.props.type_rdv =='D')?
                  <>
                <View style={{flexDirection:'row',marginVertical:3,justifyContent:'space-between'}}>
                <Text style={{ ...styles.txt, flex: 3 }}>Adresse 2</Text>
                <Text style={{ ...styles.txt, flex: 1 }}>:</Text>
                <Text style={{ ...styles.txt1, flex: 3 }}>{this.state.adress2}</Text>
                <TouchableOpacity style={styles.btn} onPress={()=>this.setState({ modalOpen1: true })} >
            <Text style={{ color: 'white', alignSelf: 'center', fontSize: 15, fontWeight: 'bold', marginTop: 5 }}>Adr 2</Text>
          </TouchableOpacity>
                
                </View>
                </>
                  :
                  <></> 
                }
                {(this.props.service_name)?
                  <>
                <View style={{flexDirection:'row',marginVertical:3,justifyContent:'space-between'}}>
                <Text style={{ ...styles.txt, flex: 3 }}>Service</Text>
                <Text style={{ ...styles.txt, flex: 1 }}>:</Text>
                <Text style={{ ...styles.txt1, flex: 3 }}>{this.props.service_name}</Text>
                </View>
                </>
                  :
                  <></> 
                }
                {(this.props.service_salle)?
                  <>
                <View style={{flexDirection:'row',marginVertical:3,justifyContent:'space-between'}}>
                <Text style={{ ...styles.txt, flex: 3 }}>Salle</Text>
                <Text style={{ ...styles.txt, flex: 1 }}>:</Text>
                <Text style={{ ...styles.txt1, flex: 3 }}>{this.props.service_salle}</Text>
                </View>
                </>
                  :
                  <></> 
                }
                <View style={{flexDirection:'row',marginVertical:3,justifyContent:'space-between'}}>
                <Text style={{ ...styles.txt, flex: 3 }}>Heure</Text>
                <Text style={{ ...styles.txt, flex: 1 }}>:</Text>
                <Text style={{ ...styles.txt1, flex: 3 }}>{moment(text).format("h:mm ")}</Text>
                </View>
                <View style={{flexDirection:'row',marginVertical:3,justifyContent:'space-between'}}>
                <Text style={{ ...styles.txt, flex: 3 }}>Date</Text>
                <Text style={{ ...styles.txt, flex: 1 }}>:</Text>
                <Text style={{ ...styles.txt1, flex: 3 }}>{moment(text).format("DD-MM-YYYY")}</Text>
                </View>
                
             </View>
             <View style={styles.ctr2} > 
                <Text style={styles.title}> Informations sur vous :</Text>
                {(this.props.userInfo)?
                  <>
                  <View style={{flexDirection:'row',marginVertical:3,justifyContent:'space-between'}}>
                  <Text style={{ ...styles.txt, flex: 3 }}>Nom</Text>
                <Text style={{ ...styles.txt, flex: 1 }}>:</Text>
                <Text style={{ ...styles.txt1, flex: 3 }}>{this.props.userInfo.nom}</Text>
                  </View>
                  <View style={{flexDirection:'row',marginVertical:3,justifyContent:'space-between'}}>
                  <Text style={{ ...styles.txt, flex: 3 }}>Prénom</Text>
                <Text style={{ ...styles.txt, flex: 1 }}>:</Text>
                <Text style={{ ...styles.txt1, flex: 3 }}>{this.props.userInfo.prenom}</Text>
                  </View>
                  <View style={{flexDirection:'row',marginVertical:3,justifyContent:'space-between'}}>
                  <Text style={{ ...styles.txt, flex: 3 }}>Téléphone</Text>
                <Text style={{ ...styles.txt, flex: 1 }}>:</Text>
                <Text style={{ ...styles.txt1, flex: 3 }}>{this.props.userInfo.tel}</Text>
                  </View>
                  <View style={{flexDirection:'row',marginVertical:3,justifyContent:'space-between'}}>
                  <Text style={{ ...styles.txt, flex: 3 }}>E-mail</Text>
                <Text style={{ ...styles.txt, flex: 1 }}>:</Text>
                <Text style={{ ...styles.txt1, flex: 3 }}>{this.props.userInfo.email}</Text>
                  </View>
                    
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
    padding:3,
    paddingLeft:10,
    width:'80%',
    borderRadius: 4,
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
                        height: 1,
            width: 0,
        },
        elevation: 5,
  },
  ctr2 : {
    marginBottom:5,
    marginTop:10,
    //backgroundColor:'grey',
    width:'80%',
    padding:3,
    paddingLeft:10,
    width:'80%',
    borderRadius: 4,
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
                        height: 1,
            width: 0,
        },
        elevation: 5,
  },
  title : {
    fontSize:19,
    color:'#34495e',
    marginBottom:8,
    textAlign:'center',
    fontWeight:'bold'
  },
  txt : {
    fontSize:15,
    fontWeight:'bold',
    
    
  },
  txt1 : {
    fontSize:15,
    //fontWeight:'bold'
    
  },
  btn: {
    marginRight:20,
    borderColor: '#1E79C5',
    backgroundColor: '#1E79C5',
    borderWidth: 1,
    height: 35,
    borderRadius: 4,
    width:50,
    shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        elevation: 5,
  },
 
});
export default Recap