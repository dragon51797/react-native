import React, {Component} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View, Alert} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Actions, Router, Scene } from 'react-native-router-flux';

export class HelpText extends Component {

    closeHelpDialog() {
      Actions.pop()
    }

    render(){
      return(
          <View style={styles.container}>
            <Text style={styles.titleStyle}>{this.props.title}</Text>
            <Text style={styles.contentStyle}>{this.props.content}</Text>
          </View>
      )
    }
}

// <TouchableOpacity onPress={()=> {this.closeHelpDialog()}} >
  // <Text style = {styles.instructions}>Close</Text>
// </TouchableOpacity>

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#C90D0D39',
  },
  titleStyle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '$white',
    marginTop: 38,
  },
  contentStyle: {
    fontSize: 22,
    fontWeight: 'normal',
    color: '$white',
    marginTop: 22,
    textAlign: 'left',
    marginLeft: 36,
    marginRight: 36,
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    color: 'blue',
    marginTop: 16,
    padding: 10,
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 2,
    marginBottom: 5,
  },
});
