
import React from 'react'
import {View,Text,Button,StyleSheet,FlatList,Image} from 'react-native'
import MedItem from '../Components/MedItem'
import { TextInput } from 'react-native-gesture-handler';

class RechercheScreen extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            isLoading:true,
            dataSource:[],
            searchedText:""
        }
    }
    componentDidMount(){
        fetch('http://51.254.39.98:8069/web/login?db=Mediclic')
        fetch('http://51.254.39.98:8069/test')
      
      .then((response) => response.json())
      .then((res) => {
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
  .done();
  }
    render(){
      return (
        <View style={styles.main_container}>
            
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
    });

export default RechercheScreen
 