// file qui contient le tab navigateur des deux screen de la page de resultats.
import React from 'react'
import {View,Text,Button,StyleSheet,TouchableOpacity,Image} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import { fetchLien } from '../Navigation/WelcomeStack'
import { url1, url2 } from '../Navigation/GlobalUrl'

import RechercheScreen from './RechercheScreen'
import MapR from '../Components/MapRepere';

const tab = createMaterialTopTabNavigator();
//classe plan du screen Plan qui affiche les repères des Médecin de la page de resultats sur la map
class PlanScreen extends React.Component {
    render(){
      // dataSource le Array depuis le fichier json Fetcher qui contient le objets de chaque médecin(nom,prénom...)
      const {dataSource} = this.props
     
     /* console.log("******* PLAN SCREEN *********");
      console.log(dataSource[0].obj);
      //console.log(">>>><<",this.props.route.params.myId)
      console.log("******* END *********");*/


      return (
        <View style={styles.container}>
           <MapR dataSource={dataSource} />          
        </View>
      );
    }
  
  }

  // classe principale du Tab navigator
class ListMed extends React.Component {

  state = {
    activeTab: "Résultats",
    isLoading: true,
    dataSource: [],
    datafiltre: [],
    modalOpen: false,
    refreshing: false,
    cmp1: "",
    cmp2: "",
    cmp3: "",
    pag: false,
    finres: false
  }

  // quand la page est montée on fait appele à la fonction Request
  componentDidMount() {
    this._Request();
  }

    // Request utilise l'Api fetch pour appeler le données depuis le serveur  
  _Request = () => {
    //this.setState({ isLoading: true })
    // Ceci sont les valeurs choisi au Screen précedents est nécessaire pour concatener dans la route utilisé dans fetch
    const {lien,choice,lng,lat,loc} = this.props.route.params.params
    fetchLien(lien,choice,lng,lat,loc).then((res) => {
      //console.log(res[1].obj.name);
      //let date=moment(res[1].days[0].date_start).format('YYYY-MM-DD');
      //console.log(date)
      
      //voir le format du fichier json recu 
      this.setState({
        isLoading: false,
        dataSource: res.medecin,
        datafiltre: res,
        refreshing: false,
      })
      console.log("****ici reponse test");
      console.log(res.medecin[0].days[0].date_start);
      //console.log("!!!!!!!!!!!!!!!", this.state.dataSource)
      console.log("****************");
      console.log("<<<<<>>>>>>>>ici reponse test >>>>>>>>>>>>>>");
      //console.log(res.medecin[0].obj);
      //console.log( this.state.dataFilter)
      console.log(">>>>>>>>>>>>>>>>>>>");
      //this.props.navigation.setParams({myId: this.state.dataSource[0].obj.name })
    })
  }

  // fonction appeler lors de la pagination, quand on aboutit à la fin de la flat liste
  loadMoreData = () => {
    /*this.setState({
      isLoading:true
    })*/
    
    let selectedValue = this.state.datafiltre.type_calendrier;
    let selectedValue2 = this.state.datafiltre.type_rdv;
    let selectedValue3 = this.state.datafiltre.speciality_param;
    let selectedValue4 = this.state.datafiltre.service_param;
    let selectedValue5 = 0;
    //
    if (this.state.pag == false) {
      this.state.cmp1 = this.state.datafiltre.cmp_from_medecin_calendar
      this.state.cmp2 = this.state.datafiltre.cmp_from_centre_calendar
      this.state.cmp3 = this.state.datafiltre.cmp_from_smart_service
    }
    //console.log("test", this.state.cmp1)
    //console.log("teste", this.state.cmp2)
    //console.log("test", this.state.cmp3)

    fetch(url1)
    return fetch(url2 + '/api/search' +
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
        //condition pour charger encore les data.cas=null plus de chargement
        if (res.medecin.length) {
          let d = this.state.dataSource;
          let da = this.state.datafiltre;
          this.setState({
            dataSource: d.concat(res.medecin),
            //nouvelles valeurs de cmp pour lors de pagination ne pas avoir les memes resultats lors des prochains load
            cmp1: res.cmp_from_medecin_calendar,
            cmp2: res.cmp_from_centre_calendar,
            cmp3: res.cmp_from_smart_service,
            pag: true,
            //isLoading:false
            //datafiltre: da.concat(res),
          })
          console.log(res.medecin, "222222")
        } else {
          console.log(res.medecin, "hahahahahaha")
          this.setState({ finres: true })
          console.log(res.medecin, "hahahahahaha!!!!!!!!!!!!!!!")
        }

        /*
        console.log("medecin",this.state.cmp1)
        console.log("centre",this.state.cmp2)
        console.log("smart",this.state.cmp3)*/

      }).done()
  }

  // fonction pour actualiser la flat list

  handleRefresh = () => {
    this.setState = {
      refreshing: true
    }, () => {
      this._Request();
    }
  }
  /////////////////

  /// fonction des éléments Picker du filtre, au choix d'une nouvelle valeur du Picker cette fonction prend ces valeurs est fait l'appel au serveur avec.
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
    return fetch(url2 + '/api/search' +
      '?filtres= 1' +
      /////
      '&dispo_date=' + selectedValue5 +
      ///////
      '&medecin_name=' + this.state.datafiltre.medecin_name +
      '&centre_name=' + this.state.datafiltre.centre_name +
      /////////
      '&type_calendrier=' + selectedValue +
      '&type_rdv=' + selectedValue2 +
      '&speciality=' + selectedValue3 +
      '&service=' + selectedValue4 +
      //////////
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
        console.log("000000000000000")

        console.log(res.medecin)
       console.log("0000202000000000")

        this.setState({
          isLoading: false,
          dataSource: res.medecin,
          datafiltre: res
        })
      }).done()



  }

  //fonction de l'element changer de position, dans le filtre qui prends le lat lng et location de la nouvelle positon
  dataFilter1 = (loc, lat, lng) => {

    this.setState({
      isLoading: true,
    })

    let selectedValue = this.state.datafiltre.type_calendrier;
    let selectedValue2 = this.state.datafiltre.type_rdv;
    let selectedValue3 = this.state.datafiltre.speciality_param;
    let selectedValue4 = this.state.datafiltre.service_param;
    let selectedValue5 = 0;
    let location = loc;
    let lngde = lng;
    let latde = lat;

    fetch(url1)
    return fetch(url2 + '/api/search' +
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
          datafiltre: res,
          isLoading: false,
        })
      }).done()



  }
  // fonction du nouveau nom de professionel choisi
  dataFilter2 = (name, id) => {



    let selectedValue = this.state.datafiltre.type_calendrier;
    let selectedValue2 = this.state.datafiltre.type_rdv;
    let selectedValue3 = this.state.datafiltre.speciality_param;
    let selectedValue4 = this.state.datafiltre.service_param;
    let selectedValue5 = 0;


    fetch(url1)
    return fetch(url2 + '/api/search' +
      '?filtres= 1' +
      '&dispo_date=' + selectedValue5 +
      //nouveau nom du Professionel
      '&medecin_name=' + name +
      '&centre_name=' + this.state.datafiltre.centre_name +
      '&type_calendrier=' + selectedValue +
      '&type_rdv=' + selectedValue2 +
      '&speciality=' + selectedValue3 +
      '&service=' + selectedValue4 +
      //nouveau id du Profession
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
  // fonction du nouveau nom de Centre choisi recoit le nom et id du centre
  dataFilter3 = (name, id) => {



    let selectedValue = this.state.datafiltre.type_calendrier;
    let selectedValue2 = this.state.datafiltre.type_rdv;
    let selectedValue3 = this.state.datafiltre.speciality_param;
    let selectedValue4 = this.state.datafiltre.service_param;
    let selectedValue5 = 0;


    fetch(url1)
    return fetch(url2 + '/api/search' +
      '?filtres= 1' +
      '&dispo_date=' + selectedValue5 +
      '&medecin_name=' + this.state.datafiltre.centre_name +
      //nouveau nom du centre
      '&centre_name=' + name +
      '&type_calendrier=' + selectedValue +
      '&type_rdv=' + selectedValue2 +
      '&speciality=' + selectedValue3 +
      '&service=' + selectedValue4 +
      '&medecin_searche_id=' + this.state.datafiltre.medecin_searche_id +
      //nouveau id du centre
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
       // console.log("repooooonse")

        //console.log(res)


        this.setState({

          dataSource: res.medecin,
          datafiltre: res
        })
      }).done()



  }
   //fonction changer d'adress cas passage de cab/centre à domicile
  dataFilter4 = (loc, lat, lng) => {

    this.setState({
      isLoading: true,
    })

    let selectedValue = this.state.datafiltre.type_calendrier;
    let selectedValue2 = 'D';
    let selectedValue3 = this.state.datafiltre.speciality_param;
    let selectedValue4 = this.state.datafiltre.service_param;
    let selectedValue5 = 0;
    let location = loc;
    let lngde = lng;
    let latde = lat;

    fetch(url1)
    return fetch(url2 + '/api/search' +
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
          datafiltre: res,
          isLoading: false,
        })
      }).done()



  }
  
  
  render(){  
    const {lien,choice,lng,lat,loc} = this.props.route.params.params
    return(
      <View style ={{flex: 1}}>
        <View style ={styles.tabsContainer}>
          {/* ceci est un custom tab navigator que j'ai créer au lieu du tab navigateur propre a React, pour des raison techniques */}
          <TouchableOpacity 
            style={(this.state.activeTab == "Résultats")?styles.activeTab:styles.inActiveTab} 
            onPress={()=>this.setState({activeTab: 'Résultats'})}>
            <Text 
              style={ (this.state.activeTab == "Résultats")?styles.activeTabText:styles.inActiveTabText}>
                Résultats
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={(this.state.activeTab == "Plan")?styles.activeTab:styles.inActiveTab}
            onPress={()=>this.setState({activeTab: 'Plan'})}>
            <Text style={ (this.state.activeTab == "Plan")?styles.activeTabText:styles.inActiveTabText}>Plan</Text>
          </TouchableOpacity>

        </View>
        {// on passe toutes les fonctions déclarer au par avant au composant screen RechercheScreen
          (this.state.activeTab == "Plan")?
          <PlanScreen
            dataSource    = {this.state.dataSource}
          />
          : 
          <RechercheScreen
            isLoading     = {this.state.isLoading}
            dataSource    = {this.state.dataSource}
            datafiltre    = {this.state.datafiltre}
            refreshing    = {this.state.refreshing}
            finres        = {this.state.finres}
            loadMoreData  = {this.loadMoreData}
            handleRefresh = {this.handleRefresh}
            dataFilter    = {this.dataFilter}
            dataFilter1   = {this.dataFilter1}
            dataFilter2   = {this.dataFilter2}
            dataFilter3   = {this.dataFilter3}
            dataFilter4   = {this.dataFilter4}
            lat={lat}
            lng={lng}
          />
        }
      </View>
    )
    return (
      <tab.Navigator swipeEnabled={false} tabBarOptions={{
        activeTintColor: '#1E79C5',
        inactiveTintColor: 'grey'
      }}>
          <tab.Screen name="Résultats" component={RechercheScreen} />
          <tab.Screen name="Plan" component={PlanScreen}/> 
      </tab.Navigator>
      
    );
  }
}
    
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    tabsContainer: {
      flexDirection: 'row',
      height: 60, 
      backgroundColor: '#fff',
      zIndex: 999999,
    },
    activeTab:{
      flex: 1, justifyContent: 'center', alignItems: 'center',
      borderBottomColor: '#1E79C5',
      borderBottomWidth: 1
    },
    inActiveTab:{
      flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    activeTabText:{
      color: '#1E79C5',
    },
    inActiveTabText: {
      color: 'gray'
    }
  
});
export default ListMed
/*import React from 'react'
import {View,Text,Button,StyleSheet,TouchableOpacity,Image} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

import RechercheScreen from './RechercheScreen'
import MapR from '../Components/MapRepere';

const tab = createMaterialTopTabNavigator();




class PlanScreen extends React.Component {
    render(){
      console.log("****************");
      //console.log(res.medecin[0].obj);
      //console.log(">>>><<",this.props.route.params.myId)
      console.log("****************");
      return (
        <View style={styles.container}>
           <MapR/>
             {/*<TouchableOpacity >
                    <Image style={styles.img} source={require('../assets/map.jpg')} />
            </TouchableOpacity> }
          
        </View>
      );
    }
  
  }

  class ListMed extends React.Component {
  render(){
    return (
      
      <tab.Navigator swipeEnabled={false} tabBarOptions={{
        activeTintColor: '#1E79C5',
        inactiveTintColor: 'grey'
      }}>
          <tab.Screen name="Résultats" component={RechercheScreen} />
          <tab.Screen name="Plan" component={PlanScreen}/> 
      </tab.Navigator>
      
    );
  }
  

}
    
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  
});
export default ListMed*/