
import React from 'react'
import {View,Text,Button,StyleSheet,FlatList,Image} from 'react-native'


class MedItem extends React.Component {
    render(){
        const Med = this.props.Med
      return (
        <View style={styles.main_container}>
            
            <Image style={styles.img} source={require('../assets/Title.jpg')} />
            <View style={styles.ctr}>
                <Text> {Med.name} </Text>
                <Text > {Med.specialite} </Text>
                <Text> {Med.work} </Text>
                <Text> Rabat</Text>
               <Button style={styles.btn} title='voir profil' onPress={()=>{}}/> 
            
            </View>
            
        </View>
      );
    }
}
const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row',
        //flex:1,
        //height:'150',
        //flexDirection: 'row',
        //alignItems:'center',
        //justifyContent:'center',
       backgroundColor:"orange",
       width:'90%',
       borderRadius:10,
       marginBottom:20,
    },
   /* bloc: {
        flex:1,
        flexDirection: 'row',
        backgroundColor:'blue',
        height: 190,
        width:"90%"
    },*/
    ctr: {
        flex:1,
        margin:5,
        flexDirection: 'column',
        backgroundColor:'white'
    },
    img: {
        width:130,
        height:90,
        margin:10,
        borderRadius:20
    },
  
});
export default MedItem
 /*style={styles.text1}*/