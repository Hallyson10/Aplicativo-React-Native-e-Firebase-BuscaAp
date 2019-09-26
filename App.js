import React, {Component, Fragment} from 'react';
import {
  Text,
  StyleSheet,
  Alert,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  Image,
  ScrollView,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import Routes from './src/Routes/index';
import {Provider} from 'react-redux';
import Store from './src/Store/index';
import firebase from 'firebase';
console.disableYellowBox = true;
export default class App extends Component {
  state = {
    images: [],
    image: null,
    uri: null,
    initialPosition: {},
    lastPosition: 0,
  };
  UNSAFE_componentWillMount() {
    var firebaseConfig = {
      apiKey: 'AIzaSyAkKooE9efHh8BNk-Dj0POlMIX5HPbmZlY',
      authDomain: 'casa-de-estudante.firebaseapp.com',
      databaseURL: 'https://casa-de-estudante.firebaseio.com',
      projectId: 'casa-de-estudante',
      storageBucket: 'casa-de-estudante.appspot.com',
      messagingSenderId: '773540591527',
      appId: '1:773540591527:web:45214bc536e37754',
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  render() {
    return (
      <Provider store={Store}>
        <Routes />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});
