import React, {Component} from 'react';
import firebase from 'firebase';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
export default class Configuration extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Button
            style={{backgroundColor: 'purple'}}
            title="Sair"
            onPress={() => {
              firebase.auth().signOut();
            }}>
            <Text>Sair</Text>
          </Button>
        </View>
      </View>
    );
  }
}
