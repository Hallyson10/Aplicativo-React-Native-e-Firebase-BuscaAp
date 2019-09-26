import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class FotosUser extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 20,
          marginBottom: 20,
          paddingHorizontal: 18,
        }}>
        <View style={{marginBottom: 20}}>
          <Text> Minhas Fotos </Text>
        </View>
        <View style={{height: 400, borderWidth: 1}}>
          <View></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
