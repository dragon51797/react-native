import React, {Component} from 'react'
import {StyleSheet, View, FlatList, Text, Image, TouchableHighlight} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Actions } from 'react-native-router-flux';
import {RowWorkHoursView} from '../reusableComponents/RowWorkHoursView'

export class WorkHoursView extends Component {

    getData() {
    return [
      {
        key: 1,
        start_time: '06:00 PM',
        end_time: '06:30 PM',
        priority: 'Medium'
      },
      {
        key: 2,
        start_time: '08:00 PM',
        end_time: '09:30 PM',
        priority: 'Low'
      },
      {
        key: 3,
        start_time: '02:00 AM',
        end_time: '05:00 AM',
        priority: 'High'
      },
      {
        key: 4,
        start_time: '08:00 PM',
        end_time: '09:30 PM',
        priority: 'Medium'
      },
      {
        key: 5,
        start_time: '02:00 AM',
        end_time: '05:00 AM',
        priority: 'High'
      },
      {
        key: 6,
        start_time: '08:00 PM',
        end_time: '09:30 PM',
        priority: 'Low'
      },
      {
        key: 7,
        start_time: '02:00 AM',
        end_time: '05:00 AM',
        priority: 'Medium'
      },
      {
        key: 8,
        start_time: '08:00 PM',
        end_time: '09:30 PM',
        priority: 'Medium'
      },
      {
        key: 9,
        start_time: '02:00 AM',
        end_time: '05:00 AM',
        priority: 'High'
      },
    ]
  }

    render() {
        return (
                <View >
                  <View style={styles.container} >
                  <FlatList
                      data={this.getData()}
                      renderItem={({ item }) => <RowWorkHoursView
                      start_time={item.start_time}
                      end_time={item.end_time}
                      priority = {item.priority}
                      />}
                  />
                  </View>
                </View>
        );
    }
}


const styles = EStyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
});
