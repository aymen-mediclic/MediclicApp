// Components/Search.js
import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import { getFilmsFromApiWithSearchedText } from '../Navigation/WelcomeStack'
import Sugg from '../Components/Sugg';
import { SearchBar } from 'react-native-elements';
import Highlighter from 'react-native-highlight-words';
import * as NavigationService from '../Navigation/NavigationService';
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
    const c = this.props.route.params.choix;
    console.log(c)
    return (
      <View style={styles.main_container}>
        <SearchBar
          placeholder='Médecin,établissement,spécialité....'
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
            data={this.state.data.sort((a, b) => a.type === 'spécialité' ? -1 : 1)}
            keyExtractor={item => { return item.id }}
            renderItem={({ item }) => <TouchableOpacity onPress={() => NavigationService.navigate('Choisisser la ville',{lien:item.lien})}>
              {item.type == 'spécialité' && (
                <Highlighter
                  highlightStyle={{ backgroundColor: '#f39c12' }}
                  searchWords={[this.searchedText]}
                  textToHighlight={item.name}
                  style={{margin:10, color: 'grey'}}
                />
              )}
              {item.type != 'spécialité' && (
                <View style={{ backgroundColor: 'grey', flexDirection: 'row' }}>
                  <Image style={{ height: 50, width: 80 }} source={require('../assets/Title.jpg')} />
                  <Text> {item.name} </Text>
                </View>)}
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
