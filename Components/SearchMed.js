import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import { getFilmsFromApiWithSearchedText } from '../Navigation/WelcomeStack'
import Sugg from '../Components/Sugg';
import { SearchBar } from 'react-native-elements';
import Highlighter from 'react-native-highlight-words';
import * as NavigationService from '../Navigation/NavigationService';
import { url1, url2 } from '../Navigation/GlobalUrl';
//NavigationService.navigate('Choisisser la ville',{lien:item.lien})
export default class SearchMed extends React.Component {

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
      fetch(url1)
      return fetch(url2+'/Searche2' +
            '?doctor_name=' +this.searchedText+
            '&speciality_id='+this.props.route.params.spe+
            '&service_id='+this.props.route.params.serv+
            '&tag_id='+this.props.route.params.tag+
            '&centre_id=' +this.props.route.params.ctr
      )
      .then((response) => response.json())
      .then((res) => {
          console.log("repooooonse")
          console.log(res)
          this.setState(
            {
              loading: false,
              data: res.obj
            },
          );
          
      })
      
      .done();
       
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
          //width: '86%',
          backgroundColor: '#CED0CE',
          //marginLeft: '14%',
        }}
      />
    );
  };
  displayLoading() {
    if (this.state.loading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20, marginBottom: 15 }}>
          <ActivityIndicator />
        </View>
      );
    }
  }
 
  
  render() {
    return (
      <View style={styles.main_container}>
        <SearchBar
          placeholder='Médecin...'
          onChangeText={(text) => this._searchTextInputChanged(text)}
          value={this.searchedText}
          lightTheme='true'
          inputContainerStyle={{ backgroundColor: 'white' }}
          inputStyle={{ fontSize: 14 }}
          containerStyle={{ padding: 1 }}
          placeholderTextColor='#bdc3c7'
        />
        {this.displayLoading()}
        {this.searchedText.length > 0 && (
          <FlatList
            data={this.state.data}
            keyExtractor={item => { return item.id }}
            renderItem={({ item }) => <TouchableOpacity onPress={() => {this.props.route.params.dataFilter2(item.name,item.id);
              this.props.navigation.goBack();} }> 
              
               <Text>{item.name}</Text>
            
            </TouchableOpacity>}
            ItemSeparatorComponent={this.renderSeparator}
          />)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    //marginTop: 20
  },
  textinput: {
    backgroundColor: 'orange'
  }
})