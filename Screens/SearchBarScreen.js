import React from 'react'
import { StyleSheet, View, TextInput,SectionList, Text, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import { getFilmsFromApiWithSearchedText } from '../Navigation/WelcomeStack'
import Sugg from '../Components/Sugg';
import { SearchBar } from 'react-native-elements';
import Highlighter from 'react-native-highlight-words';
import * as NavigationService from '../Navigation/NavigationService';
import { url2 } from '../Navigation/GlobalUrl';
//NavigationService.navigate('Choisisser la ville',{lien:item.lien})
export default class Search extends React.Component {
  //where from you called?function getfilms?

  constructor(props) {
    super(props)
    this.searchedText = "",// Initialisation de notre donnée searchedText en dehors du state
    this.state = {
      loading: false,
      data: [],
      
    }
  }

  loadFilms() {
    if (this.searchedText.trim() != 0) { // Seulement si le texte recherché n'est pas vide
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
    //this.setState({searchedText: text}) 
    this.searchedText= text;
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
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
  }
  
  render() {
    
    
    function getImageFromApi (name) {
      return url2 + name
    }
    return (
      <View style={styles.main_container}>
        <SearchBar
          placeholder='Spécialité,Professionels,Centre,Service...'
          onChangeText={(text) => this._searchTextInputChanged(text)}
          value={this.searchedText}
          //lightTheme='true'
          inputContainerStyle={{ backgroundColor:'white' }}
          inputStyle={{ fontSize: 15 }}
          containerStyle={styles.textinput}
          placeholderTextColor='#bdc3c7'
        />
        {this.displayLoading()}
        {this.searchedText.trim() != 0 && (
          <FlatList
            data={this.state.data.sort((a, b) => a.type === 'spécialité' ? -1 : 1)}
            keyExtractor={item => { return item.id }}
            renderItem={({ item }) => 
              <TouchableOpacity onPress={() => NavigationService.navigate('Type de rendez-vous', { lien: item.lien})}> 
              {item.type == 'spécialité' && (
                
                <Highlighter
                  highlightStyle={{ backgroundColor: '#FFC617',flex:1 }}
                  searchWords={[this.searchedText]}
                  textToHighlight={item.name}
                  style={{paddingLeft:10,color: '#2c3e50',height:42,backgroundColor: 'white'}}
                />
                
              )}
              {item.type == 'Tag' && (
                <Highlighter
                highlightStyle={{ backgroundColor: '#FFC617' }}
                searchWords={[this.searchedText]}
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

