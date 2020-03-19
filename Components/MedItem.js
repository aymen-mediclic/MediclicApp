import React, { Component } from 'react'
import {View,Text,Button,StyleSheet,FlatList,Image} from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Calendar from './Calendar';

class MedItem extends React.Component {
    render(){
        const Med = this.props.Med
      return (
        <View style={styles.main_container}  >
            
            <View style={styles.ctr1}>
                <TouchableOpacity onPress={()=>NavigationService.navigate('Calendar')}>
                    <Image style={styles.img} source={require('../assets/Title.jpg')} />
                </TouchableOpacity>    
                <TouchableOpacity onPress={()=>NavigationService.navigate('MedProfil',Med)}>
                    <Text style={styles.txt}> {Med.name} </Text>
                    <Text style={{flexWrap:'wrap'}} > {Med.specialite} </Text>
                    <Text> {Med.work} </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.ctr2}>
                    <Text style={{textAlign:'center',marginBottom:5}}>Disponibilité</Text>
                   
                   
                                         
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
        backgroundColor:"orange",
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
        flexWrap:'wrap'
    },
    img: {
        width:80,
        height:50,
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
        flex:2,
        backgroundColor:'pink',
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
