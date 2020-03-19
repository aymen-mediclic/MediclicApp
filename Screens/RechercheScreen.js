////////////lM39oul/////////////////////////
import React from 'react'
import {View,Text,Button,StyleSheet,FlatList,Modal,TouchableOpacity} from 'react-native'
import MedItem from '../Components/MedItem'
import { getFilmsFromApiWithSearchedText} from '../Navigation/WelcomeStack'
import{MaterialIcons} from '@expo/vector-icons'


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
        /*fetch('http://51.254.39.98:8069/web/login?db=Mediclic')
        fetch('http://51.254.39.98:8069/test')
      
      .then((response) => response.json())*/
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
              <MaterialIcons
                name='close'size={24} 
                onPress={()=> this.setState({modalOpen:false})}
              />
              <Text>yo </Text>
            </Modal>
            <TouchableOpacity size={24} style={styles.filter}  onPress={()=> this.setState({modalOpen:true})}> 
              <Text style={{textAlign:'center'}}>
                Filter
              </Text>
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
        //alignContent:'center',
        justifyContent:'center',
        //backgroundColor:"black",
        //paddingLeft:"5%",
        //marginLeft:"2%"
        //paddingRight:'5%',
    },
    filter:{
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