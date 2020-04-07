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

