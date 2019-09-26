import React, {Component} from 'react';
import {
  Text,
  Modal,
  TouchableHighlight,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Button} from 'react-native-paper';
import firebase from 'firebase';

export default class Initial extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: '#fafafa',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

        <View>
          <Text style={{color: '#fff', fontSize: 18, marginBottom: 10}}>
            {' '}
            Bem vindo{' '}
          </Text>
          <Button
            icon="camera"
            mode="contained"
            onPress={() => this.props.navigation.navigate('Register')}>
            Ainda não me cadastrei
          </Button>
          <Button
            icon="camera"
            style={{color: '#fff'}}
            mode="outlined"
            onPress={() => this.props.navigation.navigate('Register')}>
            Já sou cadastrado
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}
