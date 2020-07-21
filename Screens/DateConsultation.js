import React from 'react'
import { ScrollView, View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Accordion, Item } from "native-base";
import * as NavigationService from '../Navigation/NavigationService';

const dataArray = [
    { title: "lun 27/07" },
    { title: "mar 28/07" }


];



export default class DateC extends React.Component {
    _renderContent() {
        return (
            <View>
                <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                    <TouchableOpacity style={styles.btn} onPress={() => NavigationService.navigate('Prendre un rendez-vous')}>
                        <Text>08:00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text>09:00</Text>
                    </TouchableOpacity>
                    


                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                    <TouchableOpacity style={styles.btn}>
                        <Text>10:00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text>11:00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text>12:00</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                    <TouchableOpacity style={styles.btn}>
                        <Text>13:00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text>14:00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text>15:00</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                    <TouchableOpacity style={styles.btn}>
                        <Text>16:00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text>17:00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text>18:00</Text>
                    </TouchableOpacity>

                </View>
            </View>

        )
    }
    render() {

        return (
            <View>
                <Text style={styles.txt}>Choisissez la date de consultation</Text>
                <Accordion dataArray={dataArray}  renderContent={this._renderContent} />
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
        marginBottom: 10,
        marginTop: 10
    },
    txt: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 10,
        marginTop: 10

    },

});