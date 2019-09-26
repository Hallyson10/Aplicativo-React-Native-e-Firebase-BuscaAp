import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import firebase from 'firebase';
export default class ConfirmEmail extends Component {
  componentDidMount = () => {
    var user = firebase.auth().currentUser;
    firebase.auth().languageCode = 'br';
    user
      .sendEmailVerification()
      .then(() => {})
      .catch(function(error) {
        // An error happened.
      });
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View
          style={{flex: 1, alignItems: 'center', marginTop: 50, padding: 10}}>
          <Text style={{marginBottom: 40, fontSize: 18}}>
            Enviamos um link de confirmação para seu email, verifique sua caixa
            de mensagens em {this.props.emailUser}.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
