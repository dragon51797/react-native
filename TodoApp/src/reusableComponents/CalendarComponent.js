/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
 import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
 import EStyleSheet from 'react-native-extended-stylesheet';

 import {strings} from './src/Localization'

 LocaleConfig.locales['en'] = {
   monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
   monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul.','Aug','Sep','Oct','Nov','Dec'],
   dayNames: ['Sunday','Monday','TuesDay','WednesDay','Thursday','Friday','Saturday'],
   dayNamesShort: ['S','M','T','W','T','F','S'],
   today: 'Today'
 };
 LocaleConfig.defaultLocale = 'en';

 var selectedDate = new Date().getDate();

 type Props = {};
 export default class CalendarComponent extends Component<Props> {
   render() {
     return (
       <View style={styles.container}>
         <View style={styles.calendar_theme}>
           <CalendarList
             theme={{
                 backgroundColor: '#ffffff',
                 calendarBackground: '#ffffff',
                 textSectionTitleColor: '#b6c1cd',
                 selectedDayBackgroundColor: '#ff0000',
                 selectedDayTextColor: 'white',
                 todayTextColor: 'red',
                 dayTextColor: '#2d4150',
                 textDisabledColor: '#d9e1e8',
                 dotColor: '#00adf5',
                 selectedDotColor: '#ffffff',
                 arrowColor: 'orange',
                 monthTextColor: 'black',
                 indicatorColor: 'blue',
                 // textDayFontFamily: 'monospace',
                 // textMonthFontFamily: 'monospace',
                 // textDayHeaderFontFamily: 'monospace',
                 textDayFontWeight: '300',
                 // textMonthFontWeight: 'bold',
                 textDayHeaderFontWeight: '300',
                 textDayFontSize: 16,
                 textMonthFontSize: 16,
                 textDayHeaderFontSize: 16
               }}
             // initially selected day
             selected={'2019-05-27'}
             // Initially visible month. Default = Date()
             current={'2019-05-27'}
             // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
             minDate={'2015-04-27'}
             // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
             maxDate={'2023-06-27'}
             // Handler which gets executed on day press. Default = undefined
             onDayPress={(day) => {console.log('selected day', day)}}
             // Handler which gets executed on day long press. Default = undefined
             onDayLongPress={(day) => {console.log('selected day', day)}}
             // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
             monthFormat={'MMM yyyy'}
             // Handler which gets executed when visible month changes in calendar. Default = undefined
             onMonthChange={(month) => {console.log('month changed', month)}}
             // Hide month navigation arrows. Default = false
             hideArrows={true}
             // Replace default arrows with custom ones (direction can be 'left' or 'right')
             renderArrow={(direction) => (<Arrow />)}
             // Do not show days of other months in month page. Default = false
             hideExtraDays={true}
             // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
             // day from another month that is visible in calendar page. Default = false
             disableMonthChange={true}
             // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
             firstDay={0}
             // Hide day names. Default = false
             hideDayNames={false}
             // Show week numbers to the left. Default = false
             showWeekNumbers={false}
             // Handler which gets executed when press arrow icon left. It receive a callback can go back month
             onPressArrowLeft={substractMonth => substractMonth()}
             // Handler which gets executed when press arrow icon left. It receive a callback can go next month
             onPressArrowRight={addMonth => addMonth()}
             // Max amount of months allowed to scroll to the past. Default = 50
             pastScrollRange={50}
             // Max amount of months allowed to scroll to the future. Default = 50
             futureScrollRange={50}
             // Enable or disable scrolling of calendar list
             scrollEnabled={true}
             // Enable horizontal scrolling, default = false
             horizontal={true}
             // Enable paging on horizontal, default = false
             pagingEnabled={true}

             markedDates={{
               '2019-05-27': {selected: true}
             }}
         />
         </View>
       </View>
     );
   }
 }

 const styles = EStyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   calendar_theme: {

   }
 });
