////////////lM39oul/////////////////////////
import React from 'react'
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, ScrollView, checkedIcon } from 'react-native'
import { Formik } from 'formik';
import { RadioButton } from 'react-native-paper';
//import { CheckBox } from 'native-base';
import CheckBox from 'react-native-check-box'
export default class Inscription extends React.Component {
  state = {
    value: 'first',
    chkbox: false,
  };
  render() {
    return (
      
        <Formik
          initialValues={{ email: '' }}
          onSubmit={values => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <ScrollView contentContainerStyle={styles.main_container}>
              <RadioButton.Group
                onValueChange={value => this.setState({ value })}
                value={this.state.value}
              >
                <Text style={{ fontSize: 16 }}>Civilité:</Text>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ marginRight: 30 }}>
                    <Text style={styles.text}>Monsieur</Text>
                    <RadioButton value="first" />
                  </View>
                  <View>
                    <Text>Madame</Text>
                    <RadioButton value="second" />
                  </View>
                </View>
              </RadioButton.Group>


              <Text style={styles.text}>Nom</Text>
              <TextInput style={styles.text_input}
                placeholder='Nom'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Text style={styles.text}>Prénom</Text>
              <TextInput style={styles.text_input}
                placeholder='Prénom'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Text style={styles.text}>Vous êtes majeur?</Text>
              <CheckBox
                style={{ flex: 1, padding: 10 }}
                onClick={() => {
                  this.setState({
                    isChecked: !this.state.isChecked
                  })
                }}
                isChecked={this.state.isChecked}
                rightText={"Oui"}
              />
              <Text style={styles.text}>N°Téléphone</Text>
              <TextInput style={styles.text_input}
                placeholder='N°Téléphone'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />

              <Text style={styles.text}>Email</Text>
              <TextInput style={styles.text_input}
                placeholder='Email'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />

              <Text style={styles.text}>Mot de passe</Text>
              <TextInput style={styles.text_input}
                placeholder='Mot de passe'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Text style={styles.text}>Confirmer mot de passe</Text>
              <TextInput style={styles.text_input}
                placeholder='Confirmer mot de passe'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <CheckBox
                style={{ flex: 1, padding: 10 }}
                onClick={() => {
                  this.setState({
                    isChecked: !this.state.isChecked
                  })
                }}
                isChecked={this.state.isChecked}
                rightText={"J'accepte les conditions d'utilisation de la plateforme"}
              />

              <Button   onPress={handleSubmit} title="Inscription" />
            </ScrollView>


          )}
        </Formik>
      
    );
  }

}

const styles = StyleSheet.create({
  main_container: {
    //flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    marginLeft: 10,
  },
  text_input: {
    marginLeft: 10,
    //marginRight: 5,
    height: 30,
    width:'90%',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
    marginTop: 5,
    backgroundColor: "white",
    alignItems:'center'
  }
});

