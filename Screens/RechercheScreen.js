////////////lM39oul/////////////////////////
import React, { useEffect, useState } from 'react'
import {View,Text,Button,StyleSheet,FlatList,Modal,TouchableOpacity} from 'react-native'
import MedItem from '../Components/MedItem'
import { getFilmsFromApiWithSearchedText1, fetchLien} from '../Navigation/WelcomeStack'
import{MaterialIcons} from '@expo/vector-icons'
import Filter from '../Components/Filter'



    
    
export default function lienScreen({ route }) {
      const { lien } = route.params;
      const [data, setData] = useState([])
      useEffect(() => {
        fetchLien(lien).then((res) => {
            setData(res);
          })
          .done();
      }, []);
      return (
        <View style={styles.main_container}>
            {/*<Modal visible={this.state.modalOpen} animationType='slide'  >
              <View style={{flex:1,flexDirection:'row',alignItems:'center',marginTop:30}}>
                <MaterialIcons
                name='close'size={30} 
                onPress={()=> this.setState({modalOpen:false})}
                />
                <Text style={{alignSelf:'center',fontSize:28,paddingLeft:5}}> Filtrer</Text>
              
              </View>
              
              <Filter />
            </Modal>
           
            <TouchableOpacity size={24} style={styles.filter_btn}  onPress={()=> this.setState({modalOpen:true})}> 
              <MaterialIcons name='filter' size={15} />
              <Text style={{textAlign:'center',marginLeft:20}}>Filtrer</Text>
      </TouchableOpacity>*/}
            
            <FlatList 
                data={data}
                keyExtractor={item=> item.id.toString()}
                renderItem= {({item})=> <MedItem Med={item}  />} />
        </View>
      );
    
   
}

const styles = StyleSheet.create({
    main_container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    filter_btn:{
      backgroundColor:'#bdc3c7',
      width:100,
      height:20,
      marginTop:10,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:"center"
    }
    });


/*
////////////lM39oul/////////////////////////
import React from 'react'
import {View,Text,Button,StyleSheet,FlatList,Modal,TouchableOpacity} from 'react-native'
import MedItem from '../Components/MedItem'
import { getFilmsFromApiWithSearchedText1, fetchLien} from '../Navigation/WelcomeStack'
import{MaterialIcons} from '@expo/vector-icons'
import Filter from '../Components/Filter'



    
    
export default function RechercheScreen({ route }) {
      const { lien } = route.params;
      const [data, setData] = useState([])
      useEffect(() => {
        fetchLien(lien).then((res) => {
            setData(res);
          })
          .done();
      }, []);
      return (
        <View style={styles.main_container}>
            <Modal visible={this.state.modalOpen} animationType='slide'  >
              <View style={{flex:1,flexDirection:'row',alignItems:'center',marginTop:30}}>
                <MaterialIcons
                name='close'size={30} 
                onPress={()=> this.setState({modalOpen:false})}
                />
                <Text style={{alignSelf:'center',fontSize:28,paddingLeft:5}}> Filtrer</Text>
              
              </View>
              
              <Filter />
            </Modal>
           
            <TouchableOpacity size={24} style={styles.filter_btn}  onPress={()=> this.setState({modalOpen:true})}> 
              <MaterialIcons name='filter' size={15} />
              <Text style={{textAlign:'center',marginLeft:20}}>Filtrer</Text>
            </TouchableOpacity>
            
            <FlatList 
                data={this.state.dataSource}
                keyExtractor={item=> item.id.toString()}
                renderItem= {({item})=> <MedItem Med={item}  />} />
        </View>
      );
    
   
}

const styles = StyleSheet.create({
    main_container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    filter_btn:{
      backgroundColor:'#bdc3c7',
      width:100,
      height:20,
      marginTop:10,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:"center"
    }
    });
*/

 







/*
////////////lM39oul/////////////////////////
import React from 'react'
import {View,Text,Button,StyleSheet,FlatList,Modal,TouchableOpacity} from 'react-native'
import MedItem from '../Components/MedItem'
import { getFilmsFromApiWithSearchedText1, fetchLien} from '../Navigation/WelcomeStack'
import{MaterialIcons} from '@expo/vector-icons'
import Filter from '../Components/Filter'
import * as NavigationService from '../Navigation/NavigationService';

class RechercheScreen extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            isLoading:true,
            dataSource:[],
            modalOpen:false,
        }
    }
    
   /* componentDidMount(){
      fetchLien(lien).then((res) => {
        this.setState({
          isLoading:false,
          dataSource:res,
        })
      })
    }
    componentDidMount(){        
      getFilmsFromApiWithSearchedText1 ('xavier').then((res) => {
      console.log("repooooonse")
      console.log(res)
      console.log("*********success***********")
      console.log(res.lenght)
      console.log("***************************")
      console.log(res[0]['name'])
      this.setState({
        isLoading:false,
        dataSource:res,
      })

  })
  //.done();
  }
    render(){
      //const link = this.props.navigation.getParam('lien', '2');
      //console.log('***') 
      //console.log(this.props.navigation.state.params);
      return (
        <View style={styles.main_container}>
            <Modal visible={this.state.modalOpen} animationType='slide'  >
              <View style={{flex:1,flexDirection:'row',alignItems:'center',marginTop:30}}>
                <MaterialIcons
                name='close'size={30} 
                onPress={()=> this.setState({modalOpen:false})}
                />
                <Text style={{alignSelf:'center',fontSize:28,paddingLeft:5}}> Filtrer</Text>
              
              </View>
              
              <Filter />
            </Modal>
           
            <TouchableOpacity size={24} style={styles.filter_btn}  onPress={()=> this.setState({modalOpen:true})}> 
              <MaterialIcons name='filter' size={15} />
              <Text style={{textAlign:'center',marginLeft:20}}>Filtrer</Text>
            </TouchableOpacity>
            
            <FlatList 
                data={this.state.dataSource}
                keyExtractor={item=> item.id.toString()}
                renderItem= {({item})=> <MedItem Med={item}  />} />
        </View>
      );
    }
   
}

const styles = StyleSheet.create({
    main_container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    filter_btn:{
      backgroundColor:'#bdc3c7',
      width:100,
      height:20,
      marginTop:10,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:"center"
    }
    });

export default RechercheScreen*/
 

