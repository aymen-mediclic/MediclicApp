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































{/*  <CalendarStrip
 
  selectedDate={this.state.selectedDate}
  onPressDate={(date) => {
    this.setState({ selectedDate: date });
  }}
  onPressGoToday={(today) => {
    this.setState({ selectedDate: today });
  }}
  onSwipeDown={() => {
    alert('onSwipeDown');
  }}
  markedDate={['2018-05-04', '2018-05-15', '2018-06-04', '2018-05-01']}
  weekStartsOn={1} // 0,1,2,3,4,5,6 for S M T W T F S, defaults to 0
/>*/}  
/*import React from 'react';
import {
    AppRegistry,
    View,Text
} from 'react-native';
import CalendarDays from 'react-native-calendar-slider-carousel';

export default class Example extends React.Component {
  changeSelectedDate = date => {
    console.log(date); // "2019-07-20"
    
    this.setState({
      selectedDate: date,
     });
  };
  render() {
        return ( <CalendarDays
          // First day. Default = new Date()
          firstDate={"2019-07-05"}
          // Last day. You can specify number of days instead
          lastDate={"2019-07-20"}
          // You can use numberOfDays instead of lastDate. Default = 30
          numberOfDays={60}
          // Initial selected day. Default = firstDate
          selectedDate={"2019-07-10"}
          // Text to display instead of week day in disables days
          disabledText={'closed'}
          // scrollView width
          width={240}
          // Instead of width you can specify number of days visible Each day box width = 120
          daysInView={3}
          // Only available if width % 120 = 0. Scroll by full width
          paginate
          // Array of disabled dates. Default [] 
          disabledDates={['2019-07-11', '2019-07-12', '2019-07-15']}
          // Function to get selected date in 'YYYY-MM-DD' format
          onDateSelect={date => this.changeSelectedDate(date)}
        />
        

        );
    }
}*/

/*import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Lundi', 'Mardi', 'Mercredi', 'jeudi', 'vendredi', 'Samedi', 'Dimanche'],
      widthArr: [40, 60, 80, 100, 120, 140, 160, 180, 200]
    }
  }

  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 9; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }

    return (
      
        <ScrollView horizontal={true} nestedScrollEnabled={true}>
          <View>
            <Table borderStyle={{borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper} nestedScrollEnabled={true}>
              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      
    )
  }
}

const styles = StyleSheet.create({
  //container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: 'pink',justifyContent:'flex-start',alignItems:'center' },
  header: { height: 50, backgroundColor: '#537791',marginRight:5 },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: 2 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});*/

/*import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import TimeTableView, { genTimeBlock } from 'react-native-timetable';
const events_data = [
  {
    title: "Math",
    startTime: genTimeBlock("MON", 9),
    endTime: genTimeBlock("MON", 10, 50),
    location: "Classroom 403",
    extra_descriptions: ["Kim", "Lee"],
  },
  {
    title: "Math",
    startTime: genTimeBlock("WED", 9),
    endTime: genTimeBlock("WED", 10, 50),
    location: "Classroom 403",
    extra_descriptions: ["Kim", "Lee"],
  },
  {
    title: "Physics",
    startTime: genTimeBlock("MON", 11),
    endTime: genTimeBlock("MON", 11, 50),
    location: "Lab 404",
    extra_descriptions: ["Einstein"],
  },
  {
    title: "Physics",
    startTime: genTimeBlock("WED", 11),
    endTime: genTimeBlock("WED", 11, 50),
    location: "Lab 404",
    extra_descriptions: ["Einstein"],
  },
  {
    title: "Mandarin",
    startTime: genTimeBlock("TUE", 9),
    endTime: genTimeBlock("TUE", 10, 50),
    location: "Language Center",
    extra_descriptions: ["Chen"],
  },
  {
    title: "Japanese",
    startTime: genTimeBlock("FRI", 9),
    endTime: genTimeBlock("FRI", 10, 50),
    location: "Language Center",
    extra_descriptions: ["Nakamura"],
  },
  {
    title: "Club Activity",
    startTime: genTimeBlock("THU", 9),
    endTime: genTimeBlock("THU", 10, 50),
    location: "Activity Center",
  },
  {
    title: "Club Activity",
    startTime: genTimeBlock("FRI", 13, 30),
    endTime: genTimeBlock("FRI", 14, 50),
    location: "Activity Center",
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.numOfDays = 5;
    this.pivotDate = genTimeBlock('mon');
  }

  scrollViewRef = (ref) => {
    this.timetableRef = ref;
  };

  onEventPress = (evt) => {
    Alert.alert("onEventPress", JSON.stringify(evt));
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={styles.container}  horizontal={true} scrollEventThrottle={16}  >
          <ScrollView nestedScrollEnabled={true} >
          <TimeTableView
            scrollViewRef={this.scrollViewRef}
            events={events_data}
            pivotTime={9}
            pivotDate={this.pivotDate}
            numberOfDays={this.numOfDays}
            onEventPress={this.onEventPress}
            headerStyle={styles.headerStyle}
            formatDateHeader="dddd"
            locale="en"
          />
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#81E1B8'
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
});*/

/*
import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet , Image} from "react-native";
import moment from "moment";
import PropTypes from 'prop-types';


const days = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


export default class DatePicker extends React.Component {
  constructor() {
    super();
    this.state = {
      arrowCount: 0,
      weekObject: [],
      selectedDate: {
        day: null,
        date: null
      }
    };
  }
  componentDidMount() {
    this.dateCreator();
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.weekObject != nextState.weekObject ||
      this.state.selectedDate != nextState.selectedDate
    );
  }

  dateCreator = () => {
    const daysArray = days;
    let weekObject = [...this.state.weekObject];
    weekObject[this.state.arrowCount] = [];
    let todaysDateIndex = daysArray.indexOf(moment().format("ddd"));
    for (let day in daysArray) {
      let selectedWeekDaySet =
        day - todaysDateIndex + this.state.arrowCount * 7;
      let calenderDay = daysArray[day];
      let dateObject = {
        day: calenderDay,
        date: moment()
          .add(selectedWeekDaySet, "day")
          .format(this.props.dateFormat),
        monthYear: moment()
          .add(selectedWeekDaySet, "day")
          .format("MMMM YYYY")
      };
      weekObject[this.state.arrowCount][day] = dateObject;
    }
    this.setState({ weekObject });
  };

  handlePress = date => {
    if (
      this.state.selectedDate.day == date.day &&
      this.state.selectedDate.date == date.date
    ) {
      this.setState({ selectedDate: { day: null, date: null } });
    } else{
      let dates = {
        day: date.day,
        date: date.date
      }
      this.setState({
        selectedDate: {
          day: date.day,
          date: date.date
        }
      }, this.props.selected(dates));
    }
  };

  handleArrowChange = time => {
    this.setState({ arrowCount: this.state.arrowCount - time }, () => {
      this.dateCreator();
    });
  };

  handleMonthYearComponent = () => {
    if(this.state.weekObject.length > 0)
    return <Text  style={Styles.dateComponentYearText}>{this.state.weekObject[this.state.arrowCount][3].monthYear}</Text>
  }

  handleDateComponentDisplay = () => {
    return this.state.weekObject[this.state.arrowCount].map((date, index) => {
      let isPressed =
        this.state.selectedDate.day == date.day &&
        this.state.selectedDate.date == date.date;
      return (
        <TouchableOpacity
          key={index}
          onPress={() => this.handlePress(date)}
          style={Styles.dateComponentDateTouchable}
          >
          <Text style={{ color: isPressed ? this.props.pressedColor  : this.props.depressedColor  }}>
            {date.day}
          </Text>
          <Text style={{ color: isPressed ? this.props.pressedColor : this.props.depressedColor  }}>
            {date.date}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  render() {
    return (
      <View style={Styles.dateComponentView}>
        {this.handleMonthYearComponent()}
        <View style={Styles.dateComponentDateView}>
          <Text />
          <TouchableOpacity onPress={() => this.handleArrowChange(1)}>
            <Image style={{width: this.props.iconSize, height: this.props.iconSize}} 
            source={require('../assets/left-arrow.png')}
            />
          </TouchableOpacity>
          {this.state.weekObject.length != 0 &&
            this.handleDateComponentDisplay()}
          <TouchableOpacity onPress={() => this.handleArrowChange(-1)}>
          <Image style={{width: this.props.iconSize, height: this.props.iconSize}} 
            source={require('../assets/right-arrow.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
DatePicker.defaultProps = {
    iconSize: 30,
    dateFormat: "D",
    pressedColor: "#fff",
    depressedColor: "#7d7c7b",
}

DatePicker.PropTypes = {
  iconSize: PropTypes.number,
  dateFormat: PropTypes.string,
  pressedColor: PropTypes.string,
  depressedColor: PropTypes.string,
  selected: PropTypes.func
}


const Styles = StyleSheet.create({
  dateComponentView: {
    flex: 1, flexDirection: "column" , alignItems: 'center'
  },
  dateComponentYearText: {
    color: '#fff', fontSize: 20
  },
  dateComponentDateTouchable: {
    flex: 1,
    flexDirection: "column",
    color: "#7d7c7b",
    alignItems: "center"
  },
  dateComponentDateView: {
    flex: 1, flexDirection: "row", marginTop: 10
  }
})*/