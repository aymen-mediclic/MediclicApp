
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
                <TouchableOpacity onPress={()=>NavigationService.navigate('MedProfil')}>
                    <Image style={styles.img} source={require('../assets/Title.jpg')} />
                </TouchableOpacity>    
                <TouchableOpacity onPress={()=>NavigationService.navigate('MedProfil')}>
                    <Text style={styles.txt}> {Med.name} </Text>
                    <Text style={{flexWrap:'wrap'}} > {Med.specialite} </Text>
                    <Text> {Med.work} </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.ctr2}>
                    <Text style={{textAlign:'center',marginBottom:5}}>Disponibilité</Text>
                   {/* <Text style={{textAlign:'left',marginBottom:10}}>Jour</Text>*/}
                   {/* <Text style={{textAlign:'left'}}>Heure</Text>*/}
                    
                     <Calendar/>
                     {/*<FlatList 
                        data={[{ key: 'A' }, { key: 'B' }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }, { key: 'G' }, { key: 'H' }, { key: 'I' }, { key: 'J' }]}
                         renderItem={({item})=><Text style={{color:'white'}}>{item.key} </Text>}
                        />*/}
                    
               {/*<Text style={styles.txt2}>8h</Text>
                <Text style={styles.txt2}>9h</Text>
                <Text style={styles.txt2}>10h</Text>
                <Text style={styles.txt2} >11h</Text> 
                <Text style={styles.txt2}>12h</Text> 
                <Text style={styles.txt2}>13h</Text> */}
                     
            </View>
        </View>
      );
    }
}
const styles = StyleSheet.create({
    main_container: {
        height: 300,
        flexDirection: 'column',
        //alignItems:'center',
        //justifyContent:'center',
       backgroundColor:"orange",
       width:'90%',
       marginBottom:20,
       borderColor:'black',
       flexWrap:'wrap'
    },
    ctr1: {
        flex:1,
        margin:2,
        flexDirection: 'column',
        backgroundColor:'white',
        flexDirection: 'row',
        width:"100%",
        height:'100%'
    },
    img: {
        width:80,
        height:50,
        margin:10,
        borderRadius:20
    },
    txt: {
        marginTop:10,
    },
    ctr2:{
        flex:2,
        backgroundColor:'pink',
        margin:2
    },
    txt2: {
        width:30,
        backgroundColor:'grey',
        marginBottom:5
    },
});
export default MedItem
 /*style={styles.text1}*/