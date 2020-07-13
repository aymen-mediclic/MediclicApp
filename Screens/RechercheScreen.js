////////////lM39oul/////////////////////////
import React from 'react'
import { View, Text, StyleSheet, FlatList, RefreshControl, Modal, TouchableOpacity,TouchableHighlight, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
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
  
  CloseModal = ()=>{
    this.setState({modalOpen:false})
  }

  dataFilter = (value,key)=>{
  
    this.setState({
      modalOpen: false,
      
    })
    
  let selectedValue  = this.state.datafiltre.type_calendrier;
  let selectedValue2 = this.state.datafiltre.type_rdv;
  let selectedValue3 = this.state.datafiltre.speciality_param;
  let selectedValue4 = this.state.datafiltre.service_param;
  let selectedValue5 = 0;

  if(key == "dispo_date"){
    selectedValue5 = value
  }
  else if(key == "type_calendrier"){
    selectedValue = value
  }
  else if(key == "type_rdv"){
    selectedValue2 = value
  }
  else if(key == "speciality"){
    selectedValue3 = value
  }
  else if(key == "service"){
    selectedValue4 = value
  }
    
      
      fetch('http://51.91.249.185:8069/web/login?db=new_installation')
          return fetch('http://51.91.249.185:8069/api/search'+
          '?filtres= 1'+
          '&dispo_date='+selectedValue5+
          '&medecin_name='+this.state.datafiltre.medecin_name+
          '&centre_name='+this.state.datafiltre.centre_name+ 
          '&type_calendrier='+ selectedValue+ 
          '&type_rdv='+selectedValue2+
          '&speciality='+selectedValue3+
          '&service=' +selectedValue4+
           '&medecin_searche_id='+this.state.datafiltre.medecin_searche_id+ 
           '&centre_searche_id=' +this.state.datafiltre.centre_searche_id+ 
           '&location='+this.state.datafiltre.location+ 
           '&lng='+this.state.datafiltre.lng+ 
           '&lat='+ this.state.datafiltre.lat+
           '&tag=' +this.state.datafiltre.tag_id+ 
           '&cmp_from_medecin_calendar=' +this.state.datafiltre.cmp_from_medecin_calendar+
           '&cmp_from_centre_calendar=' + this.state.datafiltre.cmp_from_centre_calendar+
           '&cmp_from_smart_service=' +this.state.datafiltre.cmp_from_smart_service+
           '&is_pagination=0'+
           '&position_changed=0'  
          )
            
          .then((response) => response.json())
          .then((res) => {
            console.log("repooooonse")
            
            console.log(res)
           
           
            this.setState({
             
              dataSource:res.medecin,
              datafiltre:res
            })
          }).done()
    


  }
  dataFilter1 = (loc,lat,lng)=>{
  

    
    let selectedValue  = this.state.datafiltre.type_calendrier;
    let selectedValue2 = this.state.datafiltre.type_rdv;
    let selectedValue3 = this.state.datafiltre.speciality_param;
    let selectedValue4 = this.state.datafiltre.service_param;
    let selectedValue5 = 0;
    let location = loc;
    let lngde = lng;
    let latde = lat;  
        
        fetch('http://51.91.249.185:8069/web/login?db=new_installation')
            return fetch('http://51.91.249.185:8069/api/search'+
            '?filtres= 1'+
            '&dispo_date='+selectedValue5+
            '&medecin_name='+this.state.datafiltre.medecin_name+
            '&centre_name='+this.state.datafiltre.centre_name+ 
            '&type_calendrier='+ selectedValue+ 
            '&type_rdv='+selectedValue2+
            '&speciality='+selectedValue3+
            '&service=' +selectedValue4+
             '&medecin_searche_id='+this.state.datafiltre.medecin_searche_id+ 
             '&centre_searche_id=' +this.state.datafiltre.centre_searche_id+ 
             '&location='+location+ 
             '&lng='+lngde+ 
             '&lat='+ latde+
             '&tag=' +this.state.datafiltre.tag_id+ 
             '&cmp_from_medecin_calendar=' +this.state.datafiltre.cmp_from_medecin_calendar+
             '&cmp_from_centre_calendar=' + this.state.datafiltre.cmp_from_centre_calendar+
             '&cmp_from_smart_service=' +this.state.datafiltre.cmp_from_smart_service+
             '&is_pagination=0'+
             '&position_changed=0'  
            )
              
            .then((response) => response.json())
            .then((res) => {
              console.log("repooooonse")
              
              console.log(res)
             
             
              this.setState({
                dataSource:res.medecin,
                datafiltre:res
              })
            }).done()
      
  
  
    }

  render() {
    let A = this.props.route.params.choice;
    console.log(A,'126566')
    return (
      <View style={styles.main_container}>
        {this.displayLoading()}
        <Modal  visible={this.state.modalOpen} animationType='slide' transparent={true} >
          <ShortCut data={this.state.datafiltre} dataFilter = {this.dataFilter} dataFilter1 = {this.dataFilter1} modalClose = {this.CloseModal} />
        </Modal>
        <Segment style={{backgroundColor:'white'}}>  
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