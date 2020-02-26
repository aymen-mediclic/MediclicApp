import React from 'react'
import {View,TextInput,TouchableOpacity,StyleSheet,Text,KeyboardAvoidingView} from 'react-native'

class Search extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        
        return(
            
            <KeyboardAvoidingView style ={styles.main_container} behavior='padding'>
                <Text style={styles.text}>Trouvez votre Medecin!</Text>
                <TextInput style={styles.text_input}  placeholder='Médecin,Centre...' />
                <View style={styles.btn_ctr}>
                    <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('list')}  >
                    <Text style={styles.btn_txt}>Rechercher</Text>
                    </TouchableOpacity>
                </View>
             </KeyboardAvoidingView>
            

        )
    }
}
const styles= StyleSheet.create({
    main_container:{
        flex:1,
        backgroundColor:'grey' /*'#1E79C5'*/,
        alignItems: 'center',
        justifyContent: 'center'
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
        color:'white'
    },
    btn_ctr :{
        
    },
    btn :{
        backgroundColor:"#FFC617",
        width:150,
        padding: 10,
    },
    btn_txt :{
        fontSize:16,
        textAlign:'center',
        color:'white'
    }

})
export default Search