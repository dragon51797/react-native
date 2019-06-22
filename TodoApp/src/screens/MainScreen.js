import React, {Component} from 'react'
import {StyleSheet, View, Text, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export class MainScreen extends Component {

    render() {
        return (
                <View>
                  <Text style={styles.selectedtab}>ToDo App</Text>
                </View>
        );
    }
}


const styles = EStyleSheet.create({
  selectedtab: {
    color: '$colorPrimary',
    fontSize: 24,
    padding: 8,
  },
});
