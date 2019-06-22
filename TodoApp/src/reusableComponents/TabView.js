import React, {Component} from 'react'
import {StyleSheet, View, Text, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export class TabView extends Component {

    render() {
        return (
                <View>
                  <Text style={styles.selectedtab}>{this.props.title}</Text>
                </View>
        );
    }
}


const styles = EStyleSheet.create({
  selectedtab: {
    color: '$colorPrimary',
    fontSize: 16,
    padding: 8,
  },
});
