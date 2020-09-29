import React, { Component } from 'react';
import {  View, StyleSheet,TouchableOpacity } from 'react-native';
import { Container, Header, Content, ListItem, Text, Radio, Right, Left } from 'native-base';
import * as NavigationService from '../Navigation/NavigationService';
import Feather from 'react-native-vector-icons/Feather';
import Simp from 'react-native-vector-icons/SimpleLineIcons'
import M from 'react-native-vector-icons/MaterialCommunityIcons'
import FO from 'react-native-vector-icons/FontAwesome'
export default class CustomRadioButtonExample extends Component {
  state = {
    selectedValue: 'C'
  };
  render() {
    const l = this.props.route.params.lien;
    console.log(l)
    return (
      <Container>
        
        <Content>
          <ListItem   >
            <Left>
            <FO color='#2980b9' size={22} name={'building-o'} style={{margin:5,marginRight:15}} />
              <Text>Au Cabinet/Centre</Text>
            </Left>
            <Right>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#1E79C5"}
                selected={this.state.selectedValue=='C'}
                onPress={() => this.setState({ selectedValue: 'C' })}
              />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
            <Simp color='#2980b9' size={21} name={'home'} style={{margin:5,marginRight:15}} />
              <Text>A Domicile</Text>
            </Left>
            <Right>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#1E79C5"}
                selected={this.state.selectedValue=='D'}
                onPress={() => this.setState({ selectedValue: 'D' })}
              />
            </Right>
          </ListItem>
          <ListItem >
            <Left>
            <Feather color='#2980b9' size={22} name={'video'} style={{margin:5,marginRight:15}} />
              <Text>En Visio</Text>
              
            </Left>
            <Right>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#1E79C5"}
                selected={this.state.selectedValue=='V'}
                onPress={() => this.setState({ selectedValue: 'V' })}
              />
            </Right>
          </ListItem>
          <TouchableOpacity style={{backgroundColor:'#1E79C5',height:30,width:120,margin:7,marginTop:20,borderRadius:5,alignItems:'center',justifyContent:'center',alignSelf:'flex-end'}} onPress={() => NavigationService.navigate('Où ?',{lien:l, choix: this.state.selectedValue})} >
            <Text style={{color:'white'}}>SUIVANT</Text>
            </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}
