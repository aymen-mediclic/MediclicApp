////////////lM39oul/////////////////////////
import React from 'react'
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Formik } from 'formik';
import { RadioButton } from 'react-native-paper';
export default class Inscription extends React.Component {
  state = {
    value: 'first',
  };
  render() {
    return (
      <View style={styles.main_container}>
        <Formik
          initialValues={{ email: '' }}
          onSubmit={values => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <ScrollView>
              <RadioButton.Group
                onValueChange={value => this.setState({ value })}
                value={this.state.value}
              >
                <Text style={{ fontSize: 16 }}>Civilité:</Text>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ marginRight: 30 }}>
                  <Text>Monsieur</Text>
                  <RadioButton value="first" />
                </View>
                <View>
                  <Text>Madame</Text>
                  <RadioButton value="second" />
                </View>
              </View>
              </RadioButton.Group>
              

              <Text>Nom</Text>
              <TextInput style={styles.text_input}
                placeholder='Nom'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Text>Prénom</Text>
              <TextInput style={styles.text_input}
                placeholder='Prénom'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Text>Date de naissance</Text>
              <TextInput style={styles.text_input}
                placeholder='Date de naissance'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Text>N°Téléphone</Text>
              <TextInput style={styles.text_input}
                placeholder='N°Téléphone'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Text>Confirmer N°Téléphone</Text>
              <TextInput style={styles.text_input}
                placeholder='Confirmer N°Téléphone'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Text>Email</Text>
              <TextInput style={styles.text_input}
                placeholder='Email'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Text>Confirmer Email</Text>
              <TextInput style={styles.text_input}
                placeholder='Confirmer Email'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Text>Mot de passe</Text>
              <TextInput style={styles.text_input}
                placeholder='Mot de passe'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Text>Confirmer mot de passe</Text>
              <TextInput style={styles.text_input}
                placeholder='Confirmer mot de passe'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Button onPress={handleSubmit} title="Inscription" />
            </ScrollView>


          )}
        </Formik>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: 'white'
  },
  text_input: {
    marginLeft: 5,
    marginRight: 5,
    height: 30,
    width: 300,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: "white",

  }
});

