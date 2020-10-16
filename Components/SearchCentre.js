//changement centre depuis filtre
import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import { getFilmsFromApiWithSearchedText } from '../Navigation/WelcomeStack'
import { SearchBar } from 'react-native-elements';
import Highlighter from 'react-native-highlight-words';
import * as NavigationService from '../Navigation/NavigationService';
import { url1, url2 } from '../Navigation/GlobalUrl';
//NavigationService.navigate('Choisisser la ville',{lien:item.lien})
export default class SearchCtr extends React.Component {

  constructor(props) {
    super(props)
    this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
    this.state = {
      loading: false,
      data: []
    }
  }
  componentDidMount() {
    console.log('helooo')
    console.log(this.props.route.params.spe,'1')
    console.log(this.props.route.params.serv,'12')
    console.log(this.props.route.params.tag,'13')
    console.log(this.props.route.params.mdc,'14')
  }

  loadFilms1() {
    if (this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
      this.setState({ loading: true })
      fetch(url1)
      return fetch(url2+'/Searche' +
            '?centre_name='+this.searchedText+
            '&speciality='+this.props.route.params.spe+
            '&service='+this.props.route.params.serv+
            '&tag='+this.props.route.params.tag+
            '&medecin='+this.props.route.params.mdc 
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
    this.loadFilms1();
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
          placeholder='Choisir un centre'
          onChangeText={(text) => this._searchTextInputChanged(text)}
          value={this.searchedText}
          lightTheme='true'
          inputContainerStyle={{ backgroundColor: 'white' }}
          inputStyle={{ fontSize: 14 }}
          containerStyle={styles.textinput}
          placeholderTextColor='#bdc3c7'
        />
        {this.displayLoading()}
        {this.searchedText.length > 0 && (
          <FlatList
            data={this.state.data}
            keyExtractor={item => { return item.id }}
            renderItem={({ item }) => <TouchableOpacity onPress={() => {this.props.route.params.dataFilter3(item.name,item.id);
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