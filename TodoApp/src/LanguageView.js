import React, {Component} from 'react'
import {StyleSheet, View, Text, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export class LanguageView extends Component {

    render() {
        let isSelected = this.props.isSelected;
        return (
                <View style={[styles.background, isSelected ? styles.selectedBackground : styles.background]}>
                  <Text style = {[styles.code, isSelected ? styles.selectedCode : styles.code]}> {this.props.code} </Text>
                  <Text style = {[styles.name, isSelected ? styles.selectedName : styles.name]} > {this.props.name} </Text>
                  <View style = {[styles.line, isSelected ? styles.selectedLine : styles.line]} />
                </View>
        );
    }
}


const styles = EStyleSheet.create({
  selectedBackground: {
    backgroundColor: 'white',
    borderRadius: 24,
    borderWidth: 0,
    width: 120,
    margin: 16,
    padding: 12,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1.0,
    shadowRadius: 10,
    elevation: 10,
  },
  background: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    borderWidth: 0,
    width: 120,
    marginTop: 36,
    padding: 12,
  },
  selectedCode: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '$colorPrimary',
  },
  code: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'grey',
  },
  selectedName: {
    fontSize: 14,
    color: '$colorPrimary',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  name: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  selectedLine: {
    borderBottomColor: '$colorPrimary',
    borderBottomWidth: 1,
    marginTop: 16,
    marginBottom: 8,
  },
  line: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0,
    marginTop: 16,
    marginBottom: 8,
  },
});
