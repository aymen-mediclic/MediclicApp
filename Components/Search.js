import React from 'react'
import {View,TextInput,Button,StyleSheet,Text} from 'react-native'
class Search extends React.Component{
    render(){
        return(
            <View style ={styles.main_container}>
                <Text style={styles.text}>Trouvez votre Medecin!</Text>
                <TextInput style={styles.text_input}  placeholder='Médecin,Centre...' />
                <Button  title='Rechercher' onPress={() => {}} />

            </View>

        )
    }
}
const styles= StyleSheet.create({
    main_container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
       
    },
    text_input:{
        //flex:4,
        marginLeft: 5,
        marginRight:5,
        height: 30,
        width:300,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 10,
        /*alignItems: 'center',
        justifyContent: 'center',*/
        
    },
    text :{
        fontSize: 28,
        textAlign:'left'
    },
    /*button :{
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 28,
        flex:1
    }*/
})
export default Search