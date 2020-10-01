// tel patient generer+ update
import * as React from 'react';
import { View, Picker, TextInput, StyleSheet, TouchableOpacity, ScrollView,AsyncStorage } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { url2, url1 } from '../Navigation/GlobalUrl';
import { Button,Input } from 'react-native-elements';
import Modal from 'react-native-modal';

export default class ImagePickerExample extends React.Component {
  constructor(props) {
    super(props)
  this.state = {
    value: '',
    selectedValue: '',
    data: [],
    modalVisible: false,
    nom:"",
    prenom:"",
    mail:"",
    tel:"",
    Adress2:""
  };}
  componentDidMount() {
    //let uid =  AsyncStorage.getItem(uid);
    //console.log('111',uid)
    fetch(url1)
    return fetch(url2+'/api/profil?uid=26&get_proche')
      .then((response) => response.json())
      .then((res) => {
        //console.log("!!!test proches",res)
        /*console.log(res.proches[2][0].nom)
        console.log("!!!!!!!!!")
        console.log(res.proches.length)*/
        let da = [];
        var count = Object.keys(res.proches).length;
        for (var i = 0; i < count; i++) {
          //console.log(res.proches[i][0].nom) // I need to add 
          //da.push(res.proches[i][0].nom); // Create your array of data
          da.push(res.proches[i][0]);
        }
        
       // this.props.AbleNext(false)
        this.setState({
          data: da
        })


      })
      .done();
  }
  getProcheInfo = async (itemValue,itemIndex) => {
    this.setState({ selectedValue: itemValue });
    //await AsyncStorage.removeItem("userInfo");
    await AsyncStorage.setItem("userInfo", JSON.stringify(this.state.data[itemIndex]));
    console.log("qfsfgdstf",JSON.stringify(this.state.data[itemIndex]))
    this.props.getUser();
  }
  render() {
    let { value } = this.state;
    //console.log("nooum",this.state.selectedValue)
    //console.log(this.state.data);
    const update = () => {



      let bodyData = JSON.stringify({
          uid: "85",
          'nom':this.state.nom,
          'prenom':this.state.prenom,
          
          'email': this.state.mail,
          'tel':this.state.tel,
      })


     // console.log(bodyData, "-------------------")

      fetch(url1)
      fetch(url2+'/api/ajout_proche', {
          method: 'POST',
          headers: {
              'Accept': 'application/json, text/javascript, */*; q=0.01',
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: bodyData
      })

          .then((response) => response.json())
          .then((res) => {
              console.log("repooooonse")
              console.log(res)
              console.log("*********success***********")
              this.setState({ modalVisible: false })
              alert("Votre proche a été ajouté avec succes!")
          })
          .done();
  }
    return (
      <RadioButton.Group
        onValueChange={value => {this.setState({ value });this.props.AbleNext(false)}}
        value={this.state.value}
      >
        <View style={{ marginTop: 20, backgroundColor: 'white', paddingBottom: 200 }}>
          <Text style={{ fontSize: 16, alignSelf: 'center'}}>Vous prenez un rendez-vous pour :</Text>
          <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15 }}>
            <View style={{ marginRight: 30,alignItems:'center' }}>
              <Text>Vous</Text>
              <RadioButton color='#1E79C5' value="first" />
            </View>
            <View style={{alignItems:'center'}}>
              <Text>Un Proche</Text>
              <RadioButton color='#1E79C5' value="second" />
            </View>
          </View>
          {/*<View>
                <Text style={{marginLeft:20}}>Adresse 2</Text>
              <TextInput
                    style={styles.text_input}
                    placeholder="Adresse 2"
                    onChangeText={(Adress2) => this.setState({Adress2}) }
                  />
              </View>*/}
          <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15 }}>
            {value == 'second' && (
              <View>
                <View style={{borderBottomColor:'grey',borderBottomWidth:1}}>
              <Picker
                selectedValue={this.state.selectedValue}
                style={{ height: 30, width: 250 }}
                onValueChange={(itemValue, itemIndex) => {
                  this.getProcheInfo(itemValue,itemIndex);
                }} >
                {this.state.data.map((item, index) =>
                  <Picker.Item label={item.nom} value={index} key={index} />
                )}
              </Picker>
              </View>
              <Modal
              animationType="slide"
              transparent={true}
              isVisible={this.state.modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}>
              <View style={styles.modalView}>
                
                <ScrollView contentContainerStyle={{marginBottom:10}}>
                <Text style={{alignSelf:'center',width:"100%",textAlign:"center",fontSize:20,color:'white',height:40,borderTopLeftRadius:5,borderTopRightRadius:5,backgroundColor:'#1E79C5',padding:5}}>Ajouter un proche</Text>
                  <Text style={{...styles.text,marginTop:10}}>Nom (de naissance) :</Text>
                  <TextInput
                    style={styles.text_input}
                    placeholder="Nom (de naissance)"
                    value={this.state.nom}
                    onChangeText={(name) => this.setState({nom:name}) }
                  />
                  <Text style={styles.text}>Prénom :</Text>
                  <TextInput
                    style={styles.text_input}
                    value={this.state.prenom}
                    placeholder="Pénom"
                    onChangeText={(prename) => { this.setState({prenom:prename}) }}

                  />
                  <Text style={styles.text}>E-mail :</Text>
                  <TextInput
                    style={styles.text_input}
                    placeholder="E-mail"
                    //defaultValue='asmaa@odoo.com'
                    onChangeText={(maili) => { this.setState({mail:maili}) }}

                  />
                  <Text style={styles.text}>N° Téléphone :</Text>
                  <TextInput
                    style={styles.text_input}
                    placeholder="N° Téléphone"
                    defaultValue='0673259781'
                    onChangeText={(tele) => { this.setState({tel:tele}) }}

                  />
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <TouchableOpacity
                    style={{ ...styles.openButton, backgroundColor: "#f0ad4e" }}
                    onPress={() => {
                      this.setState({ modalVisible: false });
                    }}
                  >
                    <Text style={styles.textStyle}>Annuler</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ ...styles.openButton, backgroundColor: "#1E79C5" }}
                    onPress={() => update()}
                  >
                    <Text style={styles.textStyle}>Ajouter</Text>
                  </TouchableOpacity>
                  
                  </View>
                </ScrollView>
              </View>

            </Modal>
            <TouchableOpacity style={styles.btn}
              onPress={() => {
                this.setState({ modalVisible: true });
              }}>
              <Text style={{ color: 'white', fontSize: 16,alignSelf:'center' }}> Ajouter un proche</Text>
            </TouchableOpacity>
              </View>
              
            )}
            
          </View>
        </View>
              
      </RadioButton.Group>
    );
  }






}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,

  },
  title1: {
    fontSize: 14,

  },
  title: {
    fontSize: 16,
    marginRight: 5,
    fontWeight: 'bold',
    marginVertical: 5,
    color: '#2c3e50'
  },
  textStyle: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 14,
  },
  centeredView: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    //marginBottom: 60,
    //marginTop:30,
    backgroundColor: 'white'
  },
  btn: {
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 5,
    backgroundColor:'#1E79C5',
    color: 'white',
    width: 250,
    height: 30,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
  },

  modalView: {
    marginTop: 60,
    backgroundColor: "white",
    borderRadius: 5,
    //padding: 10,
    //alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius:3,
    //padding: 10,
    elevation: 2,
    width: 120,
    height:30,
    //alignSelf: 'flex-end',
    margin:15,
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  text_input: {
    alignSelf: 'center',
    height: 30,
    width: "90%",
    borderColor: '#dfe4ea',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  text: {
    marginLeft: 17,
    marginVertical:4,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2c3e50'
  },
});
