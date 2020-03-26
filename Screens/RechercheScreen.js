////////////lM39oul/////////////////////////
import React from 'react'
import {View,Text,Button,StyleSheet,FlatList,Modal,TouchableOpacity} from 'react-native'
import MedItem from '../Components/MedItem'
import { getFilmsFromApiWithSearchedText} from '../Navigation/WelcomeStack'
import{MaterialIcons} from '@expo/vector-icons'
import Filter from '../Components/Filter'


class RechercheScreen extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            isLoading:true,
            dataSource:[],
            modalOpen:false,
        }
    }
    
    
    componentDidMount(){        
      getFilmsFromApiWithSearchedText ('xavier').then((res) => {
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
      return (
        <View style={styles.main_container}>
            <Modal visible={this.state.modalOpen} animationType='slide'>
              <View style={{}}>
                <MaterialIcons
                name='close'size={30} 
                onPress={()=> this.setState({modalOpen:false})}
                />
                <Text style={{alignSelf:'center',fontSize:28}}> Filter</Text>
              
              </View>
              
              <Filter />
            </Modal>
           
            <TouchableOpacity size={24} style={styles.filter_btn}  onPress={()=> this.setState({modalOpen:true})}> 
              <Text style={{textAlign:'center'}}>Filter </Text>
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
      backgroundColor:'orange',
      width:100,
      height:20,
      marginTop:10,
    }
    });

export default RechercheScreen
 

































//////version opencr
/*
function getMedFromApi(text){
    fetch('http://51.254.39.98:8069/web/login?db=Mediclic')
    return fetch('http://51.254.39.98:8069/test')
  
  .then((response) => response.json())
  /*.then((res) => {
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
.catch((error) => console.error(error))
}
loadMed(){
    getMedFromApi('xavier').then(res => {
        
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
  }*/