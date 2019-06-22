import React, {Component} from 'react'
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Col, Row, Grid } from "react-native-easy-grid";

export class RowWorkHoursView extends Component {

    render() {
        return (
                  <View style={styles.container}>
                    <View style={styles.rowcontainer}>
                      <Text style={styles.timetext}>Start Time</Text>
                      <Image style={styles.rangeicon} source={(require('../../images/ic_time_range.png'))} />
                      <Text style={styles.timetext}>End Time</Text>
                    </View>
                    <View style={styles.rowcontainer}>
                      <Text style={styles.startTimeButton}>{this.props.start_time}</Text>
                      <Text style={styles.endTimeButton}>{this.props.end_time}</Text>
                    </View>
                    <View style={styles.bottomLineStyle} />
                  </View>
        );
    }
}


const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems:'flex-start',
    alignSelf:'stretch',
    padding: 4,
  },
  rowcontainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf:'stretch',
    marginLeft: 24,
    marginRight: 24,
  },
  rangeicon: {
    marginTop: 6,
    marginLeft: 8,
    marginRight: 8,
  },
  timetext: {
    color: '#2C2C2C',
    fontSize: 12,
    padding: 8,
  },
  startTimeButton: {
    color: '$colorPrimary',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: '$white',
    borderRadius: 4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
  },
  endTimeButton: {
    color: '$colorPrimary',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: '$white',
    borderRadius: 4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    marginLeft: 120,
  },
  bottomLineStyle: {
    width: '100%',
    borderBottomColor: '$lineGrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 20,
  },
});
