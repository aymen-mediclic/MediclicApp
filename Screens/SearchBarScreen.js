// Components/Search.js
import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList,Image,ActivityIndicator } from 'react-native'
import {getFilmsFromApiWithSearchedText} from '../Navigation/WelcomeStack'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as NavigationService from '../Navigation/NavigationService';
import Sugg from '../Components/Sugg';
export default class Search extends React.Component {

  constructor(props) {
    super(props)
    this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
    this.state = {
      loading: false,
      data: []
    }
  }

  loadFilms() {
    if (this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
    this.setState({ loading: true })
    getFilmsFromApiWithSearchedText(this.searchedText)
    
    .then(response => {
      console.log('*************************')
      console.log(response)
      console.log('*************************')
      //console.log(this.props.state.selectedValue)
      this.setState(
        {
          loading: false,
          data: response
        },
      );
    });
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text 
    this.loadFilms();
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };
  displayLoading(){
    if (this.state.loading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20,marginBottom:15 }}>
          <ActivityIndicator />
        </View>
      );
    }}
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder='Médecin,établissement,spécialité....'
          onChangeText={(text) => this._searchTextInputChanged(text)}
        />
        {this.displayLoading()}
        {this.searchedText.length > 0 &&(
        <FlatList
          data={this.state.data.sort((a,b) =>  a.type === 'spécialité' ? -1 : 1)}
          keyExtractor={item => { return item.id}}
    renderItem={({item}) => <Sugg su={item} />}
      ItemSeparatorComponent={this.renderSeparator}
        />)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom:3,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})
/*import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import {getFilmsFromApiWithSearchedText} from '../Navigation/WelcomeStack'
class FlatListDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      text: '',
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
   
    this.setState({ loading: true });

    getFilmsFromApiWithSearchedText(this.state.text)
      .then(res => {
        console.log(res)
        this.setState({
          data: res,
          loading: false,
        });
        this.arrayholder = res;
      })
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.toUpperCase()} ${item.name.toUpperCase()} ${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
      text: text,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <Text>{item.name} </Text>
          )}
          keyExtractor={item => item.id
          +}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

export default FlatListDemo;*/






/*
//This is an example code to Add Search Bar Filter on Listview//
import React, { Component } from 'react';
import MedItem from '../Components/MedItem'
import * as NavigationService from '../Navigation/NavigationService';
import { SearchBar } from 'react-native-elements';
import {getFilmsFromApiWithSearchedText} from '../Navigation/WelcomeStack'
//import react in our code.

import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { TouchableOpacity } from 'react-native';
//import all the components we are going to use.

export default class App extends Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, text: '' };
    this.arrayholder = [];
  }

  componentDidMount() {
    getFilmsFromApiWithSearchedText(this.state.text)
      .then(response => {
        this.setState(
          {
            isLoading: false,
            dataSource: response
          },
          function() {
            this.arrayholder = response;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      text: text,
    });
  }
  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };
  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <View >
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Médecin,établissement,spécialité...."
        />
        <FlatList
          data={this.state.dataSource}
          //ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={({ item }) => ( <TouchableOpacity onPress={()=>NavigationService.navigate('Médecin') } >
              <Text>{item.name}</Text>
          </TouchableOpacity>
             
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={item=> item.id}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 40,
    padding: 16,
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#1E79C5',
    backgroundColor: '#FFFFFF',
    margin:2
  },
});*/