import React from 'react';
import {AsyncStorage} from 'react-native';

class UserDefaults extends React.Component {
  constructor() {
    super();
  }

  // async setUserId(String userId) {
  //   try {
  //     await AsyncStorage.setItem('@MySuperStore:USER_ID', userId);
  //   } catch (error) {
  //     // Error saving data
  //   }
  // }

  // async getUserId(String userId) {
  //   try {
  //     const value = await AsyncStorage.getItem('USER_ID');
  //     return value;
  //   } catch (error) {
  //     return null;
  //   }
  // }
}

export const userDefaults = new UserDefaults()
