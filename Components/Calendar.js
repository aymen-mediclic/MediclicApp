import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
class Screen extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            c_month: '',
            c_year: '',
            dayName: '',
            showList: '',
            daysList: [
                { id: 0, day: 'Dimanche' },
                { id: 1, day: 'Lundi' },
                { id: 2, day: 'Mardi' },
                { id: 3, day: 'Mercredi' },
                { id: 4, day: 'Jeudi' },
                { id: 5, day: 'Vendredi' },
                { id: 6, day: 'Samedi' },
            ],
            timeList: [
                { id: 1, time: '08:00 am' },
                { id: 2, time: '09:00 am' },
                { id: 3, time: '10:00 am' },
                { id: 4, time: '11:00 am' },
                { id: 5, time: '12:00 pm' },
                { id: 6, time: '01:00 pm' },
                { id: 7, time: '02:00 pm' },
                { id: 8, time: '03:00 pm' },
                { id: 9, time: '04:00 pm' },
                { id: 10, time: '05:00 pm' },
                { id: 11, time: '06:00 pm' },
                { id: 12, time: '07:00 pm' },
                { id: 13, time: '08:00 pm' },
            ],
        }
    }
    componentDidMount() {
        var d = new Date();
        var month = ["January", "February", "Mars", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
        var dayName = days[d.getDay()];

        var c_month = month[d.getMonth()];
        var c_year = d.getFullYear();

        var day = new Date();
        var week = new Array(
            "Dimanche",
            "Lundi",
            "Mardi",
            "Mercredi",
            "Jeudi",
            "Vendredi",
            "Samedi"
        );
        var data1 = []
        var i;
        var data;
        for (i = 0; i < 7; i++) {
            data = { id: i, day: week[(day.getDay() + i) % 7] }
            data1.push(data)
        }
        this.setState({ c_month: c_month, c_year: c_year, dayName: dayName, daysList: data1 })
    }
    onTimeClick(time) {
        alert("Day=" + this.state.dayName + "\nTime=" + time)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                    <Text style={{ fontSize: 25, paddingVertical: 10 }}>{this.state.c_month} {this.state.c_year}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee', }}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => this.setState({ showList: '' })} style={styles.chevron}>
                            <Icon name="chevron-left" size={20} color={'white'} />
                        </TouchableOpacity>
                        {(this.state.showList == '' || this.state.showList == 'prev') &&
                            <View style={styles.loopMain}>
                                {this.state.daysList.slice(0, 4).map((item, index) => {
                                    return (
                                        this.renderData(item, index)
                                    )
                                })}
                            </View>
                        }
                        {this.state.showList == 'next' &&
                            <View style={styles.loopMain}>
                                {this.state.daysList.slice(4, 7).map((item, index) => {
                                    return (
                                        this.renderData(item, index)
                                    )
                                })}
                            </View>
                        }
                        <TouchableOpacity activeOpacity={0.8} onPress={() => this.setState({ showList: 'next' })} style={styles.chevron}>
                            <Icon name="chevron-right" size={25} color={'white'} />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={this.state.timeList}
                        renderItem={({ item, index }) => this.renderTimeData(item, index)}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        );
    }
    renderData(item, index) {
        var borderBottom = 0
        if (this.state.dayName.toLowerCase() == item.day.toLowerCase()) {
            borderBottom = 2
        }
        else {
            borderBottom = 0
        }
        return (
            <View key={index.toString()}>
                <TouchableOpacity style={{ padding: 12, marginVertical: 0, borderBottomColor: 'blue', borderBottomWidth: borderBottom }} activeOpacity={0.8} onPress={() => this.setState({ dayName: item.day })}>
                    <Text style={{ fontSize: 15 }}>{item.day}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    renderTimeData(item, index) {
        return (
            <View style={{ padding: 5, alignItems: 'center', margin: 5, }}>
                <TouchableOpacity style={{ padding: 15, backgroundColor: 'blue', borderRadius: 60, paddingHorizontal: 50 }} activeOpacity={0.8} onPress={() => this.onTimeClick(item.time)}>
                    <Text style={{ color: '#FFF' }}>{item.time}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chevron: {
        padding: 7, paddingVertical: 12, backgroundColor: 'blue', borderRadius: 5, marginHorizontal: 4
    },
    loopMain: {
        flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
    }
})
