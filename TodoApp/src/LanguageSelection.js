import React, {Component} from 'react'
import {Alert, StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import EStyleSheet from 'react-native-extended-stylesheet';

import {strings} from './Localization'
import {LanguageView} from './LanguageView'
import {CustomNavBar} from './reusableComponents/CustomNavBar'

const um = require('../src/managers/UserManager');


let isEnSelected = true;
let isDeSelected = false;

export class LanguageSelection extends Component {

    gotoWorkHours = () => {
      um.userManager.load("add android");
      Actions.workHours()
    }

    selectLanguage = (langCode) => {
      if (langCode == "en") {
        isEnSelected = true;
        isDeSelected = false;
        strings.setLanguage("en");
        this.setState({});
      } else {
        isDeSelected = true;
        isEnSelected = false;
        strings.setLanguage("de");
        this.setState({});
      }
    }

    render() {
        return (
                <View style={styles.background}>
                  <CustomNavBar showBack={false} title="Language"
                    infoTitle={strings.language} infoContent={strings.languageInfo}
                    showSkip={false} isShadow />
                  <View style={styles.container} >
                    <View style = {styles.languageContainer}>
                      <TouchableOpacity onPress={() => this.selectLanguage("en")} >
                        <LanguageView isSelected = {isEnSelected}  code="E" name = "English"/>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this.selectLanguage("de")} >
                        <LanguageView isSelected = {isDeSelected} code="D" name = "Deutsch"/>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.nextStyle}>
                      <TouchableOpacity onPress={() => this.gotoWorkHours()} >
                        <Image source={require('../images/ic_next.png')} style = {styles.nextIcon} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
        );
    }
}

const styles = EStyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  languageContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  nextStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  nextIcon: {
    width: 48,
    height: 48,
    marginBottom: 16,
    marginRight: 16,
  }
});
