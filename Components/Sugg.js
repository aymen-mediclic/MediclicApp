/*import React from 'react'
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';
export default class Sugg extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const su = this.props.su
        //NavigationService.navigate('Médecin',{screen:'Recherche',params:{lien:su.lien}})
        return (
            
                <TouchableOpacity onPress={()=>NavigationService.navigate('Choisisser la ville')}>
                    {su.type == 'spécialité' && (
                        <Text style={{margin:5,color:'grey'}}> {su.name}</Text>)}
                    {su.type != 'spécialité' && (
                        <View style={{ backgroundColor: 'grey', flexDirection: 'row' }}>
                            <Image style={{ height: 50, width: 80 }} source={require('../assets/Title.jpg')} />
                            <Text> {su.name} </Text>
                        </View>)}
                </TouchableOpacity>
            
        )
    }
}*/