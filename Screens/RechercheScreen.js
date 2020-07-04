////////////lM39oul/////////////////////////
import React from 'react'
import { View, Text, StyleSheet, FlatList, RefreshControl, Modal, TouchableOpacity,TouchableHighlight, ActivityIndicator } from 'react-native'
import MedItem from '../Components/MedItem'
import {fetchLien } from '../Navigation/WelcomeStack'
import { MaterialIcons } from '@expo/vector-icons'
import Filter from '../Components/Filter'
import {  Header,Button, Segment, Content } from 'native-base';
import ShortCut from '../Components/ShortCut'

class RechercheScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
      datafiltre: [],
      modalOpen: false,
      refreshing: false,
    }
  }

  componentDidMount() {
    this._Request();
  }
  _Request = () => {
    //this.setState({ isLoading: true })
    fetchLien(this.props.route.params.lien,this.props.route.params.choice
    ).then((res) => {
      
      console.log("****************");
      console.log(res.medecin[0].obj);
      console.log("****************");
      //console.log(res[1].obj.name);
      //let date=moment(res[1].days[0].date_start).format('YYYY-MM-DD');
      //console.log(date)
      this.setState({
        isLoading: false,
        dataSource:res.medecin,
        datafiltre:res,
        refreshing: false,
      })
    })
  }
  displayLoading() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
  }
  handleRefresh = () => {
    this.setState = {
      refreshing: true
    }, () => {
      this._Request();
    }
  }
  render() {
    let A = this.props.route.params.choice;
    console.log(A,'126566')
    return (
      <View style={styles.main_container}>
        {this.displayLoading()}
        <Modal visible={this.state.modalOpen} animationType='slide' transparent={true}  >
        <View style={{ flexDirection: 'row', backgroundColor: '#1E79C5',marginTop:15 }}>
            <MaterialIcons color='white' name='close' size={25} onPress={() => this.setState({ modalOpen: false })} />
            <Text style={{ fontSize: 18, color: 'white',marginLeft:10 }}> Nouvelle recherche</Text>
          </View>

          <ShortCut data={this.state.datafiltre} />
        </Modal>
        <Segment style={{backgroundColor:'white',justifyContent: 'center'}}>  
        <TouchableOpacity delayPressIn={100} onPress={() => this.setState({modalOpen:true})} >
          <Text style={styles.fabIcon}>FILTRER</Text>
        </TouchableOpacity>
        </Segment>
        
        

        {/*<TouchableOpacity delayPressIn={100} onPress={() => alert('FAB clicked')} style={styles.fab}>
          <Text style={styles.fabIcon}>FILTRER</Text>
        </TouchableOpacity>
        */}
        <FlatList
          data={this.state.dataSource}
          keyExtractor={item => { return item.id }}
      renderItem={({ item }) =><MedItem Med={item}/> }
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}/>
        
      </View>
    );
  }

}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  fab: { 
    position: 'absolute', 
    width: 120, 
    height: 35, 
    alignItems: 'center', 
    justifyContent: 'center', 
    alignSelf:'center',
    //right: 20, 
    bottom: 20, 
    backgroundColor: '#ecf0f1', 
    borderRadius: 5, 
    elevation: 8 
    }, 
    fabIcon: { 
      fontSize: 15, 
      color: '#2c3e50' 
    }
});

export default RechercheScreen
