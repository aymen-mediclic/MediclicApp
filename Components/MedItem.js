import React, { Component } from 'react'
import {View,Text,Button,StyleSheet,Image,Modal} from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Calendar from './Calendar';
import{MaterialIcons} from '@expo/vector-icons'
class MedItem extends React.Component {
    constructor(props){
        super(props);
        this.handler = this.handler.bind(this);
        this.state={
            modalOpen:false,
        }
    }
    handler() {
        this.setState({
            modalOpen:false,
        });
    }
    render(){
        const Med = this.props.Med
        const encodedData = Med.image;
      return (
        <View style={styles.main_container}  >
            
            <View style={styles.ctr1}>
                <TouchableOpacity >
                    <Image style={styles.img} source={{uri: `data:image/gif;base64,${encodedData}`}}  />
                </TouchableOpacity>    
                <TouchableOpacity onPress={()=>NavigationService.navigate('MedProfil',Med)}>
                    <Text style={styles.txt}> {Med.name} </Text>
                    <Text style={{flexWrap:'wrap'}} > {Med.specialite} </Text>
                    <Text> {Med.work} </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.ctr2}>
                    <Text style={{textAlign:'center',marginBottom:5,fontSize:18}}>Disponibilités</Text>  
                    <Modal visible={this.state.modalOpen} animationType='slide'  >
                        <View >
                            <MaterialIcons name='close'size={30} onPress={()=> this.setState({modalOpen:false})}/>
                            <Text style={{alignSelf:'center',fontSize:28}}> Horaires</Text>
              
                        </View>
                    <Calendar action={this.handler} />
                    </Modal>
               <TouchableOpacity style={{backgroundColor:'#FFC617',height:30,width:130,borderRadius:10}} onPress={()=> this.setState({modalOpen:true})}>
                   <Text style={{textAlign:'center',fontStyle:'italic',color:'white'}}> Consulter Horaires</Text>
                </TouchableOpacity>   
                                                         
            </View>
        </View>
      );
    }
}
const styles = StyleSheet.create({
    main_container: {
        height: 300,
        flexDirection: 'column',
        flexWrap:'wrap',
        backgroundColor:"grey",
        width:'100%',
        marginBottom:20,
        marginTop:5,
    },
    ctr1: {
        flex:1,
        flexDirection: 'column',
        backgroundColor:'white',
        flexDirection: 'row',
        width:"100%",
        height:'100%',
        flexWrap:'wrap',
        margin:2
    },
    img: {
        width:90,
        height:70,
        margin:10,
        borderRadius:20
    },
    txt: {
        marginTop:10,
        color:'#1E79C5',
        fontSize:16,
        fontWeight:"bold"
    },
    ctr2:{
        flex:1,
        alignItems:'center',
        //justifyContent:'center',
        backgroundColor:'white',
        margin:2,
        //flexWrap:'wrap'
    },
    txt2: {
        width:30,
        backgroundColor:'grey',
        marginBottom:5
    },
});
export default MedItem
