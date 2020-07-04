import React, { Component } from 'react';
import {  View, StyleSheet,TouchableOpacity } from 'react-native';
import { Container, Header, Content, ListItem, Text, Radio, Right, Left } from 'native-base';
import * as NavigationService from '../Navigation/NavigationService';
export default class CustomRadioButtonExample extends Component {
  state = {
    selectedValue: 'C'
  };
  render() {
    return (
      <Container>
        
        <Content>
          <ListItem   >
            <Left>
              <Text>Au cabinet/centre</Text>
            </Left>
            <Right>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={this.state.selectedValue=='C'}
                onPress={() => this.setState({ selectedValue: 'C' })}
              />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>A domicile</Text>
            </Left>
            <Right>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={this.state.selectedValue=='D'}
                onPress={() => this.setState({ selectedValue: 'D' })}
              />
            </Right>
          </ListItem>
          <ListItem selected={true}>
            <Left>
              <Text>Video conférence</Text>
            </Left>
            <Right>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={this.state.selectedValue=='V'}
                onPress={() => this.setState({ selectedValue: 'V' })}
              />
            </Right>
          </ListItem>
          <TouchableOpacity style={{backgroundColor:'#3498db',height:30,width:120,margin:7,borderRadius:5,alignItems:'center',justifyContent:'center',alignSelf:'flex-end'}} onPress={() => NavigationService.navigate('Rechercher', { choix: this.state.selectedValue })} >
            <Text style={{color:'white'}}>SUIVANT</Text>
            </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}
/*
import * as React from 'react';
import { Button, Text, View, StyleSheet, Picker,TouchableOpacity } from 'react-native';
import * as NavigationService from '../Navigation/NavigationService';

//import { Button } from "native-base";
export default class TypeC extends React.Component {
  state = {
    selectedValue: 'C'
  };
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.txt}> Sélectionner un type de RDV :</Text>
        <View style={{flexDirection:'row'}}>
        <Picker
          mode="dropdown"
          selectedValue={this.state.selectedValue}
          style={{ height: 50, width: '70%', marginBottom: 20 }}
          onValueChange={(itemValue, itemIndex) => this.setState({ selectedValue: itemValue })}
        >
          <Picker.Item label="Au cabinet/centre" value="C" />
          <Picker.Item label="A domicile" value="D" />
          <Picker.Item label="Video conférence" value="V" />
        </Picker>
        {this.state.selectedValue == 'C' && (
          <TouchableOpacity style={{backgroundColor:'#3498db',height:30,width:80,marginTop:7,borderRadius:5,alignItems:'center',justifyContent:'center'}} onPress={() => NavigationService.navigate('Rechercher', { choix: this.state.selectedValue })} >
            <Text style={{color:'white', fontWeight:'bold'}}>Suivant</Text>
            </TouchableOpacity>
        )}
        {this.state.selectedValue == 'D' && (
          <Button title='SUIVANT' onPress={() => NavigationService.navigate('Choisisser la ville:')} />
        )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  txt: {
    fontSize: 20,
    marginBottom: 5,
    //marginTop:80,
   
    
  }
});
*/