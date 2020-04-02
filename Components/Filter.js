import React from 'react'
import { ScrollView,Text, ListView,View,StyleSheet,Picker } from 'react-native'
import{MaterialIcons} from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'
import Pick from '../Components/Pick'
export default class Filter extends React.Component{
    
    render(){
        return(
            <ScrollView >
                <View style={styles.ctr}>
                <View style={styles.ctr1}>
                    <Text style={styles.txt}>Type de consultation</Text>
                    <Pick/>
                </View>
                <View style={styles.ctr1}>
                <Text style={styles.txt}>Spécialité </Text>
                <Pick/>
                </View>
                <View style={styles.ctr1}>
                    <Text style={styles.txt}>Nom du médecin</Text>
                    <TextInput style={{backgroundColor:'white',width:'70%',marginBottom:10,borderRadius:5}} placeholder='Nom du médecin..' />
                </View>
                
                <View style={styles.ctr1}>
                    <Text style={styles.txt}>Ville </Text>
                    <TextInput style={{backgroundColor:'white',width:'80%',marginBottom:10,borderRadius:5}} placeholder='Ville..' />
                </View>
                <View style={styles.ctr1}>
                    <Text style={styles.txt}>Quartier </Text>
                    <TextInput style={{backgroundColor:'white',width:'80%',marginBottom:10,borderRadius:5}} placeholder='Quartier..' />
                </View>
                <View style={styles.ctr1}>
                <Text style={styles.txt}>Disponibilité </Text>
                <Pick/>
                </View>
                <View style={styles.ctr1}>
                <Text style={styles.txt}>Honoraires </Text>
                <Pick/>
                </View>
                <View style={{backgroundColor:'#bdc3c7',alignItems:'center'}}>
                    <Text style={styles.txt}>Prix Max </Text>
                    <TextInput style={{backgroundColor:'white',width:'80%',marginBottom:10}} placeholder='Prix max..' />
                </View>
                <View style={styles.ctr1}>
                    <Text style={styles.txt}>Prix Min </Text>
                    <TextInput style={{backgroundColor:'white',width:'80%',marginBottom:10,borderRadius:5}} placeholder='Prix min..' />
                </View>
                </View>
            </ScrollView>
        )
    }
}
const styles= StyleSheet.create({
    ctr:{
        //flex:1,
        marginTop:20
        
    },
    ctr1:{
        backgroundColor:'#bdc3c7',alignItems:'center',marginTop:5,
        
    },
    txt:{
        marginTop:10,
        marginBottom:10,
        fontSize:16,
        textAlign:'center',
        backgroundColor:'#bdc3c7',
        height:20,
        color:'black'
    }
}
)