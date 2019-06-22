/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native'
import {HelpText} from './src/HelpText'
import firebase from 'react-native-firebase';

import {strings} from './src/Localization'
import { Router, Scene, ActionConst, Actions, Tabs } from 'react-native-router-flux'
import EStyleSheet from 'react-native-extended-stylesheet';

import {LoginScreen} from './src/LoginScreen'
import {LanguageSelection} from './src/LanguageSelection'
import {WorkHours} from './src/screens/WorkHours'
import {TabView} from './src/reusableComponents/TabView'
import {DisturbanceLevel} from './src/screens/DisturbanceLevel'
import {TimeBlocks} from './src/screens/TimeBlocks'
import {MainScreen} from './src/screens/MainScreen'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
   'Double tap R on your keyboard to reload,\n' +
   'Shake or press menu button for dev menu',
});

firebase.auth()
  .signInAnonymously()
  .then(credential => {
    if (credential) {
      console.log('default app user ->', credential.user.toJSON());
    }
  });

type Props = {};
export default class App extends Component<Props> {

  skipOnBoarding = () => {
    Actions.mainScreen()
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key={'loginScreen'} component={LoginScreen} hideNavBar initial = {true}/>
          <Scene key={'languageSelection'} component={LanguageSelection} hideNavBar/>
          <Scene key={'helpText'} component={HelpText} hideNavBar />
          <Scene key={'workHours'} component={WorkHours} hideNavBar />
          <Scene key={'disturbanceLevel'} component={DisturbanceLevel} hideNavBar />
          <Scene key={'timeBlocks'} component={TimeBlocks} hideNavBar />

          <Scene key={'mainScreen'} component={MainScreen} title="ToDo App" titleStyle={styles.toolbarTitle} type={ActionConst.RESET} />
        </Scene>
      </Router>
    );
  }
}

EStyleSheet.build({
  $colorPrimary: '#C90D0D',
  $white: '#FFFFFF',
  $black: '#000000',
  $transparent: '#ffffff00',
  $bgColor: '#EFEFEF',
  $lineGrey: '#707070',
  $colorMedium: '#162FAC',
  $colorLow: '#7C7C7C',
});

const styles = EStyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FCFF',
 },
 welcome: {
   fontSize: 32,
   textAlign: 'center',
   margin: 10,
   color: 'red',
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
 skipbtn: {
   fontSize: 16,
   color: '$colorPrimary',
 },
 tabBar: {
    backgroundColor: 'ghostwhite',
    opacity: 0.98
  },
  tabIndicatorStyle:{
    backgroundColor:'$colorPrimary'
  },
  toolbarTitle:{
    color:'$colorPrimary',
  },
});
