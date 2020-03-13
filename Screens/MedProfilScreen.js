import React from 'react'
import {ScrollView,View,Text,Button,StyleSheet,FlatList,Image} from 'react-native'
import { Container, Header, Content, Accordion } from "native-base";

const dataArray = [
  { title: "Formation", content: 'ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd' },
  { title: "Motif", content: "Motif.............." },
  { title: "Parcours", content: "Parcours............." }
];

export default function MedProfilScreen({route}){
    const {name,specialite,work}=route.params;
    return(
      <ScrollView contentContainerStyle={{flex:1,alignItems:'center'}} >
        <View style={styles.ctr1}>
          <Text style={styles.txt}>{name}</Text>
          <Text style={styles.txt}>{specialite}</Text>
          <Text style={styles.txt}>{work}</Text>
          <Button title='Prendre rendez-vous' onPress={()=>{}} />
        </View>
        <View style={styles.ctr2}>
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0}/>
        </Content>
      
        </View>
        <View>
          <Text>fgfg</Text>
          <Text>fgfg</Text>
          <Text>fgfg</Text>
          <Text>fgfg</Text>
          <Text>fgfg</Text>
        </View>
      </ScrollView>
    );
  
}
const styles = StyleSheet.create({
  ctr1: {
    width:'97%',
    height:'40%',
    backgroundColor:'white',
    marginBottom:10
  },
  ctr2: {
    width:'95%',
    height:'80%',
    backgroundColor:'white'
  },
  txt: {
    marginTop:10,
    marginBottom:10
  },
})























