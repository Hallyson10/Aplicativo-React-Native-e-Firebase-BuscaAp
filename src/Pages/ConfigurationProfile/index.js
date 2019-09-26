import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Configuration from '../../Components/Configuration/index';
export default class index extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Configuration />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
