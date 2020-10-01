import React from 'react'
import {View,TextInput,TouchableOpacity,StyleSheet,Text,KeyboardAvoidingView,AsyncStorage} from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
import{MaterialIcons} from '@expo/vector-icons'
import EntypoI from 'react-native-vector-icons/AntDesign'
class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchedText:""
        }
    }
    searchTextInputChanged(text){
        this.setState({searchedText: text})
    }
    render(){
        
        return(
            
            <KeyboardAvoidingView style ={styles.main_container} behavior='padding'>
                <Text style={styles.text}>Trouvez votre Medecin!</Text>
                <TextInput style={styles.text_input} onChangeText={(text)=> this.searchTextInputChanged(text)} placeholder='Médecin,Centre...' />
                <View style={styles.btn_ctr}>
                    <TouchableOpacity style={styles.btn} onPress={()=>NavigationService.navigate('Rechercher')} 
                    /* onPress={async () => {
                        try {
                            await AsyncStorage.removeItem("user")
                            await AsyncStorage.removeItem("userInfo")
                            console.log("LOgout Pres")
                        } catch (error) { console.log(error, "---------ON LOGOUT------------") }
    
    
    
                        
                    }}*/ >
                    <Text style={styles.btn_txt}>Rechercher</Text>
                    <MaterialIcons name='search'size={20} />
                    </TouchableOpacity>
                    
                </View>
             </KeyboardAvoidingView>
            

        )
    }
}
const styles= StyleSheet.create({
    main_container:{
        flex:1,
        //backgroundColor:'grey' /*'#1E79C5'*/,
        alignItems: 'center',
        //justifyContent: 'center'
    },
    text_input:{
        marginLeft: 5,
        marginRight:5,
        height: 30,
        width:300,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom:10,
        backgroundColor:"white",
        borderRadius:30,
        
    },
    text :{
        fontSize: 28,
        textAlign:'left',
        marginBottom:10,
        color:'black',
        marginBottom:120,
        paddingTop:60
        //fontFamily: "orbitron medium"
    },
    btn_ctr :{
        
    },
    btn :{
        backgroundColor:"#FFC617",
        width:150,
        padding: 10,
        flexDirection:'row'
    },
    btn_txt :{
        fontSize:16,
        textAlign:'center',
        color:'black',
        paddingRight:5
    }

})
export default Search