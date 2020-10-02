import React from 'react';
import { View, Text, Button, StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native'
import moment from 'moment';
import Adresse2 from '../Components/Adresse2';
import Modal from 'react-native-modal';
// import { useNavigation } from '@react-navigation/native';

class Recap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen1: false,
      adress2: ''
    }
  }
  Adresse2 = (txt) => {
    this.setState({ adress2: txt })
    this.setState({ modalOpen1: false })
  }


  render() {

    console.log(this.props.userInfo, "!!!!!2222!!!!!!!!!!!!!!!!!!!!!")
    const text = this.props.text
    return (
      <View style={styles.container}>
        <Modal
          isVisible={this.state.modalOpen1}
          animationIn="slideInLeft"
          animationOut="slideOutLeft"
          style={{ margin: 0 }}
          transparent={true}
        >
          <Adresse2 adress2={this.Adresse2} />
        </Modal>

        <View style={styles.ctr1} >
          <Text style={styles.title} > Informations sur le rendez-vous :</Text>
          <View style={{ flexDirection: 'row', marginVertical: 3, justifyContent: 'space-between' }}>
            <Text style={{ ...styles.txt, flex: 3 }}>RDV avec</Text>
            <Text style={{ ...styles.txt, width: 10 }}>:</Text>
            <Text style={{ ...styles.txt1, flex: 4 }}>{this.props.Name}</Text>
          </View>
          {(this.props.service_name) ?
            <>
              <View style={{ flexDirection: 'row', marginVertical: 3, justifyContent: 'space-between' }}>
                <Text style={{ ...styles.txt, flex: 3 }}>Service</Text>
                <Text style={{ ...styles.txt, width: 10 }}>:</Text>
                <Text style={{ ...styles.txt1, flex: 4 }}>{this.props.service_name}</Text>
              </View>
            </>
            :
            <></>
          }
          <View style={{ flexDirection: 'row', marginVertical: 3, justifyContent: 'space-between' }}>
            <Text style={{ ...styles.txt, flex: 3 }}>Type du RDV</Text>
            <Text style={{ ...styles.txt, width: 10 }}>:</Text>
            <Text style={{ ...styles.txt1, flex: 4 }}>{this.props.type_rdv == 'V' ? 'En Visio' : this.props.type_rdv == 'D' ? 'A Domicile' : 'Au Cabinet/Centre'}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginVertical: 3, justifyContent: 'space-between' }}>
            <Text style={{ ...styles.txt, flex: 3 }}>Date</Text>
            <Text style={{ ...styles.txt, width: 10 }}>:</Text>
            <Text style={{ ...styles.txt1, flex: 4 }}>{moment(text).format("DD-MM-YYYY")}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginVertical: 3, justifyContent: 'space-between' }}>
            <Text style={{ ...styles.txt, flex: 3 }}>Heure</Text>
            <Text style={{ ...styles.txt, width: 10 }}>:</Text>
            <Text style={{ ...styles.txt1, flex: 4 }}>{moment(text).format("h:mm ")}</Text>
          </View>
          {this.props.type_rdv!='V' ?
          <View style={{ flexDirection: 'row', marginVertical: 3, justifyContent: 'space-between' }}>
            <Text style={{ ...styles.txt, flex: 3 }}>Adresse</Text>
            <Text style={{ ...styles.txt, width: 10 }}>:</Text>
            <Text style={{ ...styles.txt1, flex: 4 }}>{this.props.type_rdv=='V'?'En Visio':this.props.adresse}</Text>
          </View>
           :
           <></>
         }
          {(this.props.type_rdv == 'D') ?
            <>
              <View style={{ flexDirection: 'row', marginVertical: 3, justifyContent: 'space-between' }}>
                <Text style={{ ...styles.txt, flex: 3 }}>Complément d'adresse</Text>
                <Text style={{ ...styles.txt, width: 20 }}>:</Text>
                <Text style={{ ...styles.txt1, flex: 4 }}>{this.state.adress2}</Text>


              </View>
              <TouchableOpacity style={styles.btn} onPress={() => this.setState({ modalOpen1: true })} >
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 15, fontWeight: 'bold', marginTop: 5 }}>Compléter mon adresse</Text>
              </TouchableOpacity>
            </>
            :
            <></>
          }

          {(this.props.service_salle) ?
            <>
              <View style={{ flexDirection: 'row', marginVertical: 3, justifyContent: 'space-between' }}>
                <Text style={{ ...styles.txt, flex: 3 }}>Salle</Text>
                <Text style={{ ...styles.txt, width: 10 }}>:</Text>
                <Text style={{ ...styles.txt1, flex: 4 }}>{this.props.service_salle}</Text>
              </View>
            </>
            :
            <></>
          }
          


        </View>
        <View style={styles.ctr2} >
          <Text style={styles.title}> Informations sur vous :</Text>
          {(this.props.userInfo) ?
            <>
              <View style={{ flexDirection: 'row', marginVertical: 3, justifyContent: 'space-between' }}>
                <Text style={{ ...styles.txt, flex: 3 }}>Nom</Text>
                <Text style={{ ...styles.txt, width: 10 }}>:</Text>
                <Text style={{ ...styles.txt1, flex: 4 }}>{this.props.userInfo.nom}</Text>
              </View>
              <View style={{ flexDirection: 'row', marginVertical: 3, justifyContent: 'space-between' }}>
                <Text style={{ ...styles.txt, flex: 3 }}>Prénom</Text>
                <Text style={{ ...styles.txt, width: 10 }}>:</Text>
                <Text style={{ ...styles.txt1, flex: 4 }}>{this.props.userInfo.prenom}</Text>
              </View>
              <View style={{ flexDirection: 'row', marginVertical: 3, justifyContent: 'space-between' }}>
                <Text style={{ ...styles.txt, flex: 3 }}>N°Téléphone</Text>
                <Text style={{ ...styles.txt, width: 10 }}>:</Text>
                <Text style={{ ...styles.txt1, flex: 4 }}>{this.props.userInfo.tel}</Text>
              </View>
              <View style={{ flexDirection: 'row', marginVertical: 3, justifyContent: 'space-between' }}>
                <Text style={{ ...styles.txt, flex: 3 }}>E-mail</Text>
                <Text style={{ ...styles.txt, width: 10 }}>:</Text>
                <Text style={{ ...styles.txt1, flex: 4 }}>{this.props.userInfo.email}</Text>
              </View>

            </>
            :
            <></>

          }
        </View>
        {this.props.type_rdv=='V'&& this.props.Assist!=null ?
        <View style={styles.ctr2} >
          <Text style={styles.title}> Informations sur RDV à domicile :</Text>
          
            
              <View style={{ flexDirection: 'row', marginVertical: 3, justifyContent: 'space-between' }}>
                <Text style={{ ...styles.txt, flex: 3 }}>Assistant</Text>
                <Text style={{ ...styles.txt, width: 10 }}>:</Text>
                <Text style={{ ...styles.txt1, flex: 4 }}>{this.props.Assist}</Text>
              </View>
              <View style={{ flexDirection: 'row', marginVertical: 3, justifyContent: 'space-between' }}>
                <Text style={{ ...styles.txt, flex: 3 }}>Adresse</Text>
                <Text style={{ ...styles.txt, width: 10 }}>:</Text>
                <Text style={{ ...styles.txt1, flex: 4 }}>{this.props.adresse}</Text>
              </View>
              <View style={{ flexDirection: 'row', marginVertical: 3, justifyContent: 'space-between' }}>
                <Text style={{ ...styles.txt, flex: 3 }}>Complément d'adresse</Text>
                <Text style={{ ...styles.txt, width: 10 }}>:</Text>
                <Text style={{ ...styles.txt1, flex: 4,marginRight:3 }}>{this.state.adress2!=""?this.props.adresse+","+this.state.adress2:""}</Text>


              </View>
              <TouchableOpacity style={styles.btn1} onPress={() => this.setState({ modalOpen1: true })} >
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 15, fontWeight: 'bold', marginTop: 5 }}>Compléter mon adresse</Text>
              </TouchableOpacity>

            
        </View>
       
            :
            <></>

          }

      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    //justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  ctr1: {
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
    paddingTop: 10,
    paddingLeft: 10,
    width: '95%',
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
  ctr2: {
    marginBottom: 10,
    marginTop: 10,
    //backgroundColor:'grey',
    padding: 3,
    paddingTop: 10,
    paddingLeft: 10,
    width: '95%',
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
  title: {
    fontSize: 19,
    color: '#1E79C5',
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  txt: {
    fontSize: 15,
    fontWeight: 'bold',


  },
  txt1: {
    fontSize: 15,
    //fontWeight:'bold'

  },
  btn: {
    marginBottom:5,
    width:200,
    alignSelf: 'flex-start',
    marginRight: 20,
    marginRight: 5,
    borderColor: '#1E79C5',
    backgroundColor: '#1E79C5',
    borderWidth: 1,
    height: 35,
    borderRadius: 4,
   // width: 100,
    shadowColor: "grey",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    elevation: 5,
  },
btn1: {
  alignSelf: 'flex-start',
  marginRight: 20,
  marginRight: 5,
  marginBottom:10,
  borderColor: '#1E79C5',
  backgroundColor: '#1E79C5',
  borderWidth: 1,
  height: 35,
  borderRadius: 4,
  width: 200,
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