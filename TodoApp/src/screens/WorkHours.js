import React, {Component} from 'react'
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Actions } from 'react-native-router-flux';
import {WorkHoursView} from '../reusableComponents/WorkHoursView'
import {strings} from '../Localization'
import {CustomNavBar} from '../reusableComponents/CustomNavBar'
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';


export class WorkHours extends Component {

    gotoDisturbanceLevel = () => {
      Actions.disturbanceLevel()
    }

    render() {
        return (
                <View style={styles.container}>
                  <CustomNavBar showBack title={strings.workHours}
                    infoTitle={strings.workHours} infoContent={strings.workHoursInfo}
                    showSkip isShadow={false} />
                  <View style={styles.containerItems}>
                  <ScrollableTabView
                    initialPage={0}
                    renderTabBar={() => <ScrollableTabBar />} >
                      <WorkHoursView tabLabel='Work Week'/>
                      <WorkHoursView tabLabel='Mon'/>
                      <WorkHoursView tabLabel='Tues'/>
                      <WorkHoursView tabLabel='Wed'/>
                      <WorkHoursView tabLabel='Thur'/>
                      <WorkHoursView tabLabel='Fri'/>
                      <WorkHoursView tabLabel='Sat'/>
                      <WorkHoursView tabLabel='Sun'/>
                  </ScrollableTabView>
                  <View>
                  <TouchableHighlight onPress={() => this.gotoDisturbanceLevel()} >
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
