// tel patient generer+ update
import * as React from 'react';
import { View, Picker, TextInput, Modal, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { url2, url1 } from '../Navigation/GlobalUrl';



export default class ImagePickerExample extends React.Component {
  state = {
    value: 'first',
    selectedValue: '',
    data: [],
    modalVisible: false,
    nom:"",
    prenom:"",
    mail:"",
    tel:"",
    
  };
  componentDidMount() {
    fetch(url1)
    return fetch(url2+'/api/profil?uid=26&get_proche')
      .then((response) => response.json())
      .then((res) => {
        console.log("!!!test proches")
        console.log(res.proches[2][0].nom)
        console.log("!!!!!!!!!")
        console.log(res.proches.length)
        let da = [];
        var count = Object.keys(res.proches).length;
        for (var i = 0; i < count; i++) {
          //console.log(res.proches[i][0].nom) // I need to add 
          da.push(res.proches[i][0].nom); // Create your array of data
        }


        this.setState({
          data: da
        })


      })
      .done();
  }
  

  render() {
    let { value } = this.state;
    console.log("!!!!!!!!!")
    console.log(this.state.data);
    const update = () => {



      let bodyData = JSON.stringify({
          uid: "85",
          'nom':this.state.nom,
          'prenom':this.state.prenom,
          
          'email': this.state.mail,
          'tel':this.state.tel,
      })


      console.log(bodyData, "-------------------")

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
        onValueChange={value => this.setState({ value })}
        value={this.state.value}
      >
        <View style={{ marginTop: 20, backgroundColor: 'white', paddingBottom: 200 }}>
          <Text style={{ fontSize: 16, alignSelf: 'center', fontWeight: 'bold' }}>Vous prenez un rendez-vous pour:</Text>
          <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15 }}>
            <View style={{ marginRight: 30 }}>
              <Text>Pour vous</Text>
              <RadioButton value="first" />
            </View>
            <View>
              <Text>Pour un Proche</Text>
              <RadioButton value="second" />
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15 }}>
            {value == 'second' && (
              <View>
              <Picker
                selectedValue={this.state.selectedValue}
                style={{ height: 100, width: 200 }}
                onValueChange={(itemValue, itemIndex) => this.setState({selectedValue:itemValue})} >
                {this.state.data.map((item, index) =>
                  <Picker.Item label={item} value={index} key={index} />
                )}
              </Picker>
              <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}>
              <View style={styles.modalView}>


                <TouchableOpacity
                  style={{ backgroundColor: "#2196F3" }}
                  onPress={() => {
                    this.setState({ modalVisible: false });
                  }}
                >
                  <Text style={styles.textStyle}>Fermer</Text>
                </TouchableOpacity>
                <ScrollView>
                  <Text style={styles.text}>Nom:</Text>
                  <TextInput
                    style={styles.text_input}
                    placeholder="nom"
                    value={this.state.nom}
                    onChangeText={(name) => this.setState({nom:name}) }
                  />
                  <Text style={styles.text}>Prénom:</Text>
                  <TextInput
                    style={styles.text_input}
                    value={this.state.prenom}
                    placeholder="Pénom"
                    onChangeText={(prename) => { this.setState({prenom:prename}) }}

                  />
                  <Text style={styles.text}>Adresse e-mail:</Text>
                  <TextInput
                    style={styles.text_input}
                    placeholder="e-mail:"
                    defaultValue='asmaa@odoo.com'
                    onChangeText={(maili) => { this.setState({mail:maili}) }}

                  />
                  <Text style={styles.text}>Téléphone:</Text>
                  <TextInput
                    style={styles.text_input}
                    placeholder="Téléphone:"
                    defaultValue='0673259781'
                    onChangeText={(tele) => { this.setState({tel:tele}) }}

                  />
                  <TouchableOpacity
                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                    onPress={() => update()}
                  >
                    <Text style={styles.textStyle}>Ajouter</Text>
                  </TouchableOpacity>

                </ScrollView>
              </View>

            </Modal>
            <TouchableOpacity style={styles.btn}
              onPress={() => {
                this.setState({ modalVisible: true });
              }}>
              <Text style={{ color: 'white', fontSize: 15 }}> Ajouter un proche</Text>
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
    borderRadius: 8,
    backgroundColor: 'orange',
    color: 'white',
    width: 200,
    height: 30,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  modalView: {
    //margin: 5,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
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
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: 150,
    alignSelf: 'flex-end'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
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
    marginBottom: 15,
  },
  text: {

    
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2c3e50'
  },
});
