///////////////////////////////////// fichier de la page Résultats
import React from 'react'
import { View, Text, StyleSheet, FlatList, RefreshControl, TouchableOpacity, TouchableHighlight, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import MedItem from '../Components/MedItem'
import { fetchLien } from '../Navigation/WelcomeStack'
import { MaterialIcons } from '@expo/vector-icons'
import { Header, Button, Segment, Content } from 'native-base';
import ShortCut from '../Components/ShortCut'
import Fontisto from 'react-native-vector-icons/Fontisto';
import { url1, url2 } from '../Navigation/GlobalUrl'
import Modal from 'react-native-modal';
import * as NavigationService from '../Navigation/NavigationService';
class RechercheScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    }
  }


  displayLoading() {
    if (this.props.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1,alignItems:'center',justifyContent:'center',margin:10,marginTop:20 }}>
          <ActivityIndicator  size="large" color="#1E79C5" />
        </View>
      );
    }
  }

  
// fermer le modal des filtres
  CloseModal = () => {
    this.setState({ modalOpen: false })
  }

  
  

  render() {
    // let A = this.props.route.params.choice;
    const {lat,lng,handleRefresh,dataSource,datafiltre, refreshing,loadMoreData, dataFilter,dataFilter1,dataFilter2,dataFilter3,dataFilter4,finres} = this.props;
    let A= dataSource
    //console.log(" voila AAAAAAAAAAAAAAAAAA",A);
    return (
      <View style={styles.main_container}>
        {/*modal des filtres, le contenu est dans le custom component Shortcut.on lui fait passer l'ensemnle des array des donnees fetcher dans ListMed.js  */}
        <Modal 
          isVisible    = {this.state.modalOpen}
          animationIn  = "slideInLeft"
          animationOut = "slideOutLeft"
          style        = {{margin: 0}}
        >
          <ShortCut data={datafiltre} dataFilter={dataFilter} dataFilter1={dataFilter1} dataFilter2={dataFilter2} dataFilter3={dataFilter3} dataFilter4={dataFilter4} modalClose={this.CloseModal} />
        </Modal>

        <Segment style={{ justifyContent:'space-between',backgroundColor: '#1E79C5', height: 45 ,justifyContent:'center'}}>
          <TouchableOpacity style={styles.filter_btn} onPress={() => this.setState({ modalOpen: true })} >
            <Fontisto color='white' size={16} name={'equalizer'} />
            <Text style={styles.fabIcon}>FILTRER</Text>
          </TouchableOpacity>
        </Segment>
        {this.displayLoading()}


        {/*<TouchableOpacity delayPressIn={100} onPress={() => alert('FAB clicked')} style={styles.fab}>
          <Text style={styles.fabIcon}>FILTRER</Text>
        </TouchableOpacity>
        */}
        {A.length>0 ?
        <FlatList
          data={dataSource}
          keyExtractor={item => { return item.id }}
          renderItem={({ item }) => <MedItem Med={item} dataFilter={datafiltre} finres={finres} lng={lng} lat={lat} />}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          onEndReachedThreshold={1}
          onEndReached={() => A.length>0 ?loadMoreData():''}
          ListFooterComponent={() => finres == true &&
            <Text style={styles.txt_fin}> Fin de résultats! </Text>
          }
        />
        :( A.length==0 && this.props.isLoading==false)?
        <View style={{flex:1,alignItems:'center'}}>
        <Text style={{...styles.txt_fin,marginBottom:0,marginTop:150,alignSelf:'center'}}>{"Aucun résultat."}</Text>
        <Text style={{...styles.txt_fin,marginBottom:0,marginTop:0,marginHorizontal:50}}>{"Veuillez réessayer avec d'autres"}</Text>
        <Text style={{...styles.txt_fin,marginTop:0,marginHorizontal:50}}>{"critères de recherche"}</Text>
        </View>
        :<></>
        }
        <View>

        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  fabIcon: {
    fontSize: 15,
    color: 'white',
    marginLeft: 5
  },
  filter_btn: {
    backgroundColor: '#1E79C5',
    marginHorizontal: 5,
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'white',
    width: 100,
    padding: 5,
    height:30,
    shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        elevation: 5,
  },
  
  txt_fin: {
    margin: 10,
    fontSize: 18,
    color: '#34495e',
    alignSelf: 'center',
    fontWeight: 'bold'
  }
});

export default RechercheScreen
