import React from 'react'
import { ScrollView, View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Accordion, Item } from "native-base";
import * as NavigationService from '../Navigation/NavigationService';

const dataArray = [
    { title: "Mercredi" },
    { title: "jeudi", content: "300.0 Dhs" },
    { title: "Vendredi", content: 'généraliste' },
    { title: "Samedi", content: "Français" },
    { title: "Lundi", content: "Français" },
    { title: "Mardi", content: "Français" }
];



export default class DateC extends React.Component {
    _renderContent() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                <TouchableOpacity style={styles.btn}>
                    <Text>08:00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text>09:00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text>10:00</Text>
                </TouchableOpacity>
            </View>
            

        )
    }
    render() {

        return (
            <View>
                <Text style={styles.txt}>Choisissez la date de consultation</Text>
                <Accordion dataArray={dataArray} expanded={0} renderContent={this._renderContent} />
            </View>

        );

    }
}
const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#c7ecee',
        width: 70,
        height: 50,
        marginBottom:10,
        marginTop:10
    },
    txt: {
        textAlign:'center',
        fontSize:18,
        marginBottom:10,
        marginTop:10

    },

});