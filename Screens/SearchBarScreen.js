// ceci est le fichier de la page de la bar de recherche 
import React from 'react'
import { StyleSheet, View, TextInput,SectionList, Text, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import { getFilmsFromApiWithSearchedText } from '../Navigation/WelcomeStack'
import Sugg from '../Components/Sugg';
import { SearchBar } from 'react-native-elements';
import Highlighter from 'react-native-highlight-words';
import * as NavigationService from '../Navigation/NavigationService';
import { url2 } from '../Navigation/GlobalUrl';

export default class Search extends React.Component {


  constructor(props) {
    super(props)
    //this.searchedText = "",// Initialisation de notre donnée searchedText en dehors du state
    this.state = {
      loading: false,
      data: [],
      searchedText : ""
    }
  }
//fonction qui load les suggestions, y a une fonction getFilms imbriqué qui simplement execute le fetch vers la route des données
  loadSugg() {
    if (this.state.searchedText.length != 0) { // Seulement si le texte recherché n'est pas vide
      this.setState({ loading: true })
      //click droit et aller a definition pour mieux la voir
      getFilmsFromApiWithSearchedText(this.state.searchedText)

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
  // fonction qui à chaque écriture sur le champ l'etat est établie. exemple: taper c :searchedText devient c.
  //en plus cette valeur est transférer à la fonction loadSugg
  _searchTextInputChanged(text) {
    this.setState({searchedText: text}) 
   // this.searchedText= text;
    this.loadSugg();
  }
  // fontion separation entre chaque bloque de la flatlist
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
  // pour afficher le loader
  displayLoading() {
    if (this.state.loading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
  }
  
  render() {
    
    // Cette fonction prend l'url http://51.91.249.185:8002/ et rajoute le lien de l'image du docteur pour get les image dans la file des suggesstions
    function getImageFromApi (name) {
      return url2 + name
    }
    return (
      <View style={styles.main_container}>
        {/*search bar n'est pas un component propre a React */}
        <SearchBar
          placeholder='Spécialité, Professionel, Centre, Service...'
          onChangeText={(text) => this._searchTextInputChanged(text)}
          value={this.state.searchedText}
          //lightTheme='true'
          inputContainerStyle={{ backgroundColor:'white' }}
          inputStyle={{ fontSize: 15 }}
          containerStyle={styles.textinput}
          placeholderTextColor='#bdc3c7'
        />
        {this.displayLoading()}
        {this.state.searchedText.trim() != 0 && (
          <FlatList
            //data={this.state.data.sort((a, b) => a.type === 'spécialité' ? -1 : 1)}
            data={this.state.data}
            keyExtractor={item => { return item.id }}
            renderItem={({ item }) => 
              <TouchableOpacity onPress={() => NavigationService.navigate('Type de rendez-vous', { lien: item.lien})}> 
              {item.type == 'spécialité' && (
                
                <Highlighter
                  highlightStyle={{ backgroundColor: '#FFC617',flex:1 }}
                  searchWords={[this.state.searchedText]}
                  textToHighlight={item.name}
                  style={{paddingLeft:10,color: '#2c3e50',height:42,backgroundColor: 'white'}}
                />
                
              )}
              {item.type == 'Tag' && (
                <Highlighter
                highlightStyle={{ backgroundColor: '#FFC617' }}
                searchWords={[this.state.searchedText]}
                textToHighlight={item.name}
                style={{paddingLeft:10,color: '#2c3e50',height:42,backgroundColor: 'white'}}
              />
                
              )}
              {item.type == 'Médecin' && (
                <View style={{ backgroundColor: 'white', flexDirection: 'row',flexWrap: 'wrap',height:80 }}>
                <Image style={{ height: 50, width: 80,marginTop:5, borderRadius:5 }} source={{ uri:getImageFromApi( item.image ) }} />
                <View style={{ flexDirection: 'column'}}>
                <Text style={{ fontWeight:'bold',color:'#2980b9' }}> {item.name} </Text>
                <Text style={{color: '#2c3e50'}}> {item.speciality} </Text>
                </View>
              </View>)}
              {item.type == 'Clinique' && (
                
                <View style={{ backgroundColor: 'white', flexDirection: 'row',flexWrap: 'wrap',height:80 }}>
                <Image style={{ height: 50, width: 80,marginTop:5, borderRadius:5 }} source={{ uri:getImageFromApi( item.image ) }} />
                <View style={{ flexDirection: 'column'}}>
                <Text style={{ fontWeight:'bold',color:'#2980b9' }}> {item.name} </Text>
                <Text style={{color: '#2c3e50'}}> {item.speciality} </Text>
                </View>
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
  },
  textinput: {
    padding:1,marginTop:5,backgroundColor:'white',borderBottomColor:'white',borderTopColor:'white',marginLeft: 3,
    marginRight: 3,
    shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        elevation: 3, 
  }
})

