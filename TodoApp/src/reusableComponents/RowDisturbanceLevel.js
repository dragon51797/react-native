import React, {Component} from 'react'
import { Alert, View, Text, StyleSheet, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export class RowDisturbanceLevel extends Component {

    render() {
        return (
          <View style={styles.container}>
            <View style={styles.rowcontainer}>
              <Text style={styles.timetext}>{this.props.start_time}</Text>
              <Image style={styles.rangeicon} source={(require('../../images/ic_time_range.png'))} />
              <Text style={styles.timetext}>{this.props.end_time}</Text>
              <Text style={styles.priority}>{this.props.priority}</Text>
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
    alignSelf: 'stretch',
  },
  rowcontainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 4,
    marginLeft: 8,
  },
  rangeicon: {
    marginTop: 4,
    marginLeft: 4,
    marginRight: 4,
  },
  timetext: {
    color: '$colorMedium',
    fontSize: 15,
    padding: 8,
    fontWeight: "bold",
  },
  priority : {
    color: '$white',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: '$colorMedium',
    borderRadius: 12,
    borderColor: '$white',
    borderWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
  },
  bottomLineStyle: {
    width: '100%',
    borderBottomColor: '$lineGrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 8,
  },
});
