import React, {Component} from 'react'
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Actions } from 'react-native-router-flux';
import {DisturbanceLevelView} from '../reusableComponents/DisturbanceLevelView'
import {strings} from '../Localization'
import {CustomNavBar} from '../reusableComponents/CustomNavBar'
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';


export class DisturbanceLevel extends Component {

    gotoTimeBlocks = () => {
      Actions.timeBlocks()
    }

    render() {
        return (
                <View style={styles.container}>
                  <CustomNavBar showBack title={strings.disturbanceLevel}
                    infoTitle={strings.disturbanceLevel} infoContent={strings.disturbanceLevelInfo}
                    showSkip isShadow={false} />
                  <View style={styles.containerItems}>
                  <ScrollableTabView
                    initialPage={0}
                    renderTabBar={() => <ScrollableTabBar />} >
                      <DisturbanceLevelView tabLabel='Work Week'/>
                      <DisturbanceLevelView tabLabel='Mon'/>
                      <DisturbanceLevelView tabLabel='Tues'/>
                      <DisturbanceLevelView tabLabel='Wed'/>
                      <DisturbanceLevelView tabLabel='Thur'/>
                      <DisturbanceLevelView tabLabel='Fri'/>
                      <DisturbanceLevelView tabLabel='Sat'/>
                      <DisturbanceLevelView tabLabel='Sun'/>
                  </ScrollableTabView>
                  <View>
                  <TouchableHighlight onPress={() => this.gotoTimeBlocks()} >
                    <Image source={require('../../images/ic_next.png')} style = {styles.nextIcon} />
                  </TouchableHighlight>
                  </View>
                  </View>
                </View>
        );
    }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  containerItems: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '$bgColor',
  },
  nextIcon: {
    width: 48,
    height: 48,
    alignSelf: 'flex-end',
    marginBottom: 16,
    marginRight: 16,
  },
});
