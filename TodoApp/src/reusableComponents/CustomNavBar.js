import React, {Component} from 'react'
import { Alert, View, Text, StyleSheet, Image, StatusBar, TouchableWithoutFeedback } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Actions, Router, Scene } from 'react-native-router-flux';
import {strings} from '../Localization'

export class CustomNavBar extends Component {

    showHelpText(infoTitle, infoContent) {
      Actions.helpText(
        {title: infoTitle,
         content: infoContent
        }
      )
    }

    render() {
      let infoTitle = this.props.infoTitle;
      let infoContent = this.props.infoContent;
        return (
          <View>
            <View style={(this.props.isShadow)? styles.backgroundStyle : styles.noShadowBackgroundStyle }>
              <StatusBar />
              <View style={styles.container}>
                { this.props.showBack &&
                  <TouchableWithoutFeedback onPress={() => Actions.pop()}>
                    <Image
                      source={require('../../assets/icons/ic_back.png')}
                      style={styles.backStyle} />
                  </TouchableWithoutFeedback>
                }
                <Text style = {styles.titleStyle}>{this.props.title}</Text>
                <TouchableWithoutFeedback onPress={() => {this.showHelpText(infoTitle, infoContent)}}>
                  <Image
                    source={require('../../assets/icons/ic_info.png')}
                    style={styles.helpStyle} />
                </TouchableWithoutFeedback>
                { this.props.showSkip &&
                  <View style = {styles.skipStyle}>
                    <TouchableWithoutFeedback onPress={() => Actions.mainScreen()}>
                      <Text style={styles.skipTextStyle}>{strings.skip}</Text>
                    </TouchableWithoutFeedback>
                  </View>
                }
              </View>
            </View>
          </View>
        );
    }
}

const styles = EStyleSheet.create({
  backgroundStyle: {
    backgroundColor: '$white',
    height: 86,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: '$black',
    shadowOpacity: 1.0,
    elevation: 4,
  },
  noShadowBackgroundStyle: {
    backgroundColor: '$white',
    height: 86,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleStyle: {
    color:'$colorPrimary',
    fontSize: 22,
    fontWeight: "bold",
    flexDirection: 'row',
    marginLeft: 16,
  },
  backStyle: {
    resizeMode: 'contain',
    width: 24,
    height: 24,
    marginLeft: 24,
    justifyContent: 'flex-start'
  },
  helpStyle: {
    resizeMode: 'contain',
    width: 24,
    height: 24,
    margin: 12,
  },
  skipStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 8,
    padding: 16,
  },
  skipTextStyle: {
    fontSize: 16,
    color: '$colorPrimary',
  },
});
