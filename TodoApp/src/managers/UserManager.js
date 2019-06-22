import React from 'react';
import firebase from 'react-native-firebase';

class UserManager extends React.Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('user');
  }

  async load(id) {
    const doc = await this.ref.doc(id).get()
    if (doc.exists) {
      return doc.data()
    } else {
      const defaultDoc = {
        email: "abcd@gmail.ocom"
      }
      await this.ref.doc(id).set(defaultDoc)
      return doc
    }
  }
}

export const userManager = new UserManager()
