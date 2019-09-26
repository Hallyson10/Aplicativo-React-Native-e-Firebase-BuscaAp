import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import UserFindCard from '../MainComponents/UserFindCard';
export default class CardMainUser extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{height: 280, width: '100%', backgroundColor: 'blue'}}>
          <UserFindCard />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
