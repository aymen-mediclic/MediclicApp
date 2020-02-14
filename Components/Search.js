import React from 'react'
import {View,TextInput,Button,StyleSheet,Text} from 'react-native'
class Search extends React.Component{
    render(){
        return(
            <View style ={styles.main_container}>
                <Text>Trouvez votre Medecin!</Text>
                <TextInput  placeholder='Médecin,Centre...' />
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
        justifyContent: 'center',
    },
    text_input:{
        marginLeft: 5,
        marginRight:5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})
export default Search