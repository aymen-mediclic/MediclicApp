////////////lM39oul/////////////////////////
import React from 'react'
import { View, Text, StyleSheet, FlatList, RefreshControl, Modal, TouchableOpacity, TouchableHighlight, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import MedItem from '../Components/MedItem'
import { fetchLien } from '../Navigation/WelcomeStack'
import { MaterialIcons } from '@expo/vector-icons'
import Filter from '../Components/Filter'
import { Header, Button, Segment, Content } from 'native-base';
import ShortCut from '../Components/ShortCut'
import Fontisto from 'react-native-vector-icons/Fontisto';
import { url1, url2 } from '../Navigation/GlobalUrl'
class RechercheScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
      datafiltre: [],
      modalOpen: false,
      refreshing: false,
      cmp1:"",
      cmp2:"",
      cmp3:"",
      pag:false,
    }
  }

  componentDidMount() {
    this._Request();
  }

  _Request = () => {
    //this.setState({ isLoading: true })
    fetchLien(this.props.route.params.lien, this.props.route.params.choice,this.props.route.params.lng,this.props.route.params.lat,this.props.route.params.loc
    ).then((res) => {

     
      //console.log(res[1].obj.name);
      //let date=moment(res[1].days[0].date_start).format('YYYY-MM-DD');
      //console.log(date)
      this.setState({
        isLoading: false,
        dataSource: res.medecin,
        datafiltre:res,
        refreshing: false,
      })
     console.log("****************");
      //console.log(res.medecin[0].obj);
      console.log(">>>><<",this.state.dataSource[0].obj.name)
      console.log("****************");
      //this.props.navigation.setParams({myId: this.state.dataSource[0].obj.name })
    })
  }

  displayLoading() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, marginTop:15,marginBottom:10 }}>
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

  CloseModal = () => {
    this.setState({ modalOpen: false })
  }

  dataFilter = (value, key) => {

    this.setState({
      modalOpen: false,
      isLoading: true,
    })

    let selectedValue = this.state.datafiltre.type_calendrier;
    let selectedValue2 = this.state.datafiltre.type_rdv;
    let selectedValue3 = this.state.datafiltre.speciality_param;
    let selectedValue4 = this.state.datafiltre.service_param;
    let selectedValue5 = 0;

    if (key == "dispo_date") {
      selectedValue5 = value
    }
    else if (key == "type_calendrier") {
      selectedValue = value
    }
    else if (key == "type_rdv") {
      selectedValue2 = value
    }
    else if (key == "speciality") {
      selectedValue3 = value
    }
    else if (key == "service") {
      selectedValue4 = value
    }


    fetch(url1)
    return fetch(url2+'/api/search' +
      '?filtres= 1' +
      '&dispo_date=' + selectedValue5 +
      '&medecin_name=' + this.state.datafiltre.medecin_name +
      '&centre_name=' + this.state.datafiltre.centre_name +
      '&type_calendrier=' + selectedValue +
      '&type_rdv=' + selectedValue2 +
      '&speciality=' + selectedValue3 +
      '&service=' + selectedValue4 +
      '&medecin_searche_id=' + this.state.datafiltre.medecin_searche_id +
      '&centre_searche_id=' + this.state.datafiltre.centre_searche_id +
      '&location=' + this.state.datafiltre.location +
      '&lng=' + this.state.datafiltre.lng +
      '&lat=' + this.state.datafiltre.lat +
      '&tag=' + this.state.datafiltre.tag_id +
      '&cmp_from_medecin_calendar=' + this.state.datafiltre.cmp_from_medecin_calendar +
      '&cmp_from_centre_calendar=' + this.state.datafiltre.cmp_from_centre_calendar +
      '&cmp_from_smart_service=' + this.state.datafiltre.cmp_from_smart_service +
      '&is_pagination=0' +
      '&position_changed=0'
    )

      .then((response) => response.json())
      .then((res) => {
        console.log("repooooonse")

        console.log(res)


        this.setState({
          isLoading: false,
          dataSource: res.medecin,
          datafiltre: res
        })
      }).done()



  }
  dataFilter1 = (loc, lat, lng) => {



    let selectedValue = this.state.datafiltre.type_calendrier;
    let selectedValue2 = this.state.datafiltre.type_rdv;
    let selectedValue3 = this.state.datafiltre.speciality_param;
    let selectedValue4 = this.state.datafiltre.service_param;
    let selectedValue5 = 0;
    let location = loc;
    let lngde = lng;
    let latde = lat;

    fetch(url1)
    return fetch(url2+'/api/search' +
      '?filtres= 1' +
      '&dispo_date=' + selectedValue5 +
      '&medecin_name=' + this.state.datafiltre.medecin_name +
      '&centre_name=' + this.state.datafiltre.centre_name +
      '&type_calendrier=' + selectedValue +
      '&type_rdv=' + selectedValue2 +
      '&speciality=' + selectedValue3 +
      '&service=' + selectedValue4 +
      '&medecin_searche_id=' + this.state.datafiltre.medecin_searche_id +
      '&centre_searche_id=' + this.state.datafiltre.centre_searche_id +
      '&location=' + location +
      '&lng=' + lngde +
      '&lat=' + latde +
      '&tag=' + this.state.datafiltre.tag_id +
      '&cmp_from_medecin_calendar=' + this.state.datafiltre.cmp_from_medecin_calendar +
      '&cmp_from_centre_calendar=' + this.state.datafiltre.cmp_from_centre_calendar +
      '&cmp_from_smart_service=' + this.state.datafiltre.cmp_from_smart_service +
      '&is_pagination=0' +
      '&position_changed=0'
    )

      .then((response) => response.json())
      .then((res) => {
        console.log("repooooonse")

        console.log(res)


        this.setState({
          dataSource: res.medecin,
          datafiltre: res
        })
      }).done()



  }
  dataFilter2 = (name, id) => {



    let selectedValue = this.state.datafiltre.type_calendrier;
    let selectedValue2 = this.state.datafiltre.type_rdv;
    let selectedValue3 = this.state.datafiltre.speciality_param;
    let selectedValue4 = this.state.datafiltre.service_param;
    let selectedValue5 = 0;


    fetch(url1)
    return fetch(url2+'/api/search' +
      '?filtres= 1' +
      '&dispo_date=' + selectedValue5 +
      '&medecin_name=' + name +
      '&centre_name=' + this.state.datafiltre.centre_name +
      '&type_calendrier=' + selectedValue +
      '&type_rdv=' + selectedValue2 +
      '&speciality=' + selectedValue3 +
      '&service=' + selectedValue4 +
      '&medecin_searche_id=' + id +
      '&centre_searche_id=' + this.state.datafiltre.centre_searche_id +
      '&location=' + this.state.datafiltre.location +
      '&lng=' + this.state.datafiltre.lng +
      '&lat=' + this.state.datafiltre.lat +
      '&tag=' + this.state.datafiltre.tag_id +
      '&cmp_from_medecin_calendar=' + this.state.datafiltre.cmp_from_medecin_calendar +
      '&cmp_from_centre_calendar=' + this.state.datafiltre.cmp_from_centre_calendar +
      '&cmp_from_smart_service=' + this.state.datafiltre.cmp_from_smart_service +
      '&is_pagination=0' +
      '&position_changed=0'
    )

      .then((response) => response.json())
      .then((res) => {
        console.log("repooooonse")

        console.log(res)


        this.setState({

          dataSource: res.medecin,
          datafiltre: res
        })
      }).done()



  }
  dataFilter3 = (name, id) => {



    let selectedValue = this.state.datafiltre.type_calendrier;
    let selectedValue2 = this.state.datafiltre.type_rdv;
    let selectedValue3 = this.state.datafiltre.speciality_param;
    let selectedValue4 = this.state.datafiltre.service_param;
    let selectedValue5 = 0;


    fetch(url1)
    return fetch(url2+'/api/search' +
      '?filtres= 1' +
      '&dispo_date=' + selectedValue5 +
      '&medecin_name=' + this.state.datafiltre.centre_name +
      '&centre_name=' + name +
      '&type_calendrier=' + selectedValue +
      '&type_rdv=' + selectedValue2 +
      '&speciality=' + selectedValue3 +
      '&service=' + selectedValue4 +
      '&medecin_searche_id=' + this.state.datafiltre.medecin_searche_id +
      '&centre_searche_id=' + id +
      '&location=' + this.state.datafiltre.location +
      '&lng=' + this.state.datafiltre.lng +
      '&lat=' + this.state.datafiltre.lat +
      '&tag=' + this.state.datafiltre.tag_id +
      '&cmp_from_medecin_calendar=' + this.state.datafiltre.cmp_from_medecin_calendar +
      '&cmp_from_centre_calendar=' + this.state.datafiltre.cmp_from_centre_calendar +
      '&cmp_from_smart_service=' + this.state.datafiltre.cmp_from_smart_service +
      '&is_pagination=0' +
      '&position_changed=0'
    )

      .then((response) => response.json())
      .then((res) => {
        console.log("repooooonse")

        console.log(res)


        this.setState({

          dataSource: res.medecin,
          datafiltre: res
        })
      }).done()



  }
  loadMoreData = () => {
    /*this.setState({
      isLoading:true
    })*/
    let selectedValue = this.state.datafiltre.type_calendrier;
    let selectedValue2 = this.state.datafiltre.type_rdv;
    let selectedValue3 = this.state.datafiltre.speciality_param;
    let selectedValue4 = this.state.datafiltre.service_param;
    let selectedValue5 = 0;
    if(this.state.pag==false){
      this.state.cmp1=this.state.datafiltre.cmp_from_medecin_calendar
      this.state.cmp2=this.state.datafiltre.cmp_from_centre_calendar
      this.state.cmp3=this.state.datafiltre.cmp_from_smart_service
    }
    console.log("test",this.state.cmp1)
        console.log("teste",this.state.cmp2)
        console.log("test",this.state.cmp3)

    fetch(url1)
    return fetch(url2+'/api/search' +
      '?filtres= 1' +
      '&dispo_date=' + selectedValue5 +
      '&medecin_name=' + this.state.datafiltre.medecin_name +
      '&centre_name=' + this.state.datafiltre.centre_name +
      '&type_calendrier=' + selectedValue +
      '&type_rdv=' + selectedValue2 +
      '&speciality=' + selectedValue3 +
      '&service=' + selectedValue4 +
      '&medecin_searche_id=' + this.state.datafiltre.medecin_searche_id +
      '&centre_searche_id=' + this.state.datafiltre.centre_searche_id +
      '&location=' + this.state.datafiltre.location +
      '&lng=' + this.state.datafiltre.lng +
      '&lat=' + this.state.datafiltre.lat +
      '&tag=' + this.state.datafiltre.tag_id +
      '&cmp_from_medecin_calendar=' + this.state.cmp1 +
      '&cmp_from_centre_calendar=' + this.state.cmp2 +
      '&cmp_from_smart_service=' + this.state.cmp3 +
      '&is_pagination=1' +
      '&position_changed=0'
    )

      .then((response) => response.json())
      .then((res) => {
        
        
        let d=this.state.dataSource;
        let da=this.state.datafiltre;
        this.setState({
          dataSource: d.concat(res.medecin),
          cmp1:res.cmp_from_medecin_calendar,
        cmp2:res.cmp_from_centre_calendar,
        cmp3:res.cmp_from_smart_service,
        pag:true,
        //isLoading:false
          //datafiltre: da.concat(res),
        })
        console.log(this.state.datafiltre,"222222")
        /*
        console.log("medecin",this.state.cmp1)
        console.log("centre",this.state.cmp2)
        console.log("smart",this.state.cmp3)*/
       
      }).done()



  }

  render() {
    let A = this.props.route.params.choice;
    
    return (
      <View style={styles.main_container}>
        
        <Modal visible={this.state.modalOpen} animationType='slide' transparent={true} >
          <ShortCut data={this.state.datafiltre} dataFilter={this.dataFilter} dataFilter1={this.dataFilter1} dataFilter2={this.dataFilter2} dataFilter3={this.dataFilter3} modalClose={this.CloseModal} />
        </Modal>
        <Segment style={{ backgroundColor: '#1E79C5',height:40}}>
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
        <FlatList
          data={this.state.dataSource}
          keyExtractor={item => { return item.id }}
          renderItem={({ item }) => <MedItem Med={item} />}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh} 
          onEndReachedThreshold={0.1}
          onEndReached={()=>{
            console.log("onEndReached");
            this.loadMoreData();
           }
          
          //this.loadMoreData();
          }
          />
          
 
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
    marginLeft:5
  },
  filter_btn:{
    marginHorizontal:5,
    flexDirection:'row',
    alignSelf:'center',
    borderWidth:1,
    borderColor:'white',
    width:100,
    padding:5
  } 
});

export default RechercheScreen