import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class index extends Component {
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#dcda48',
          flexGrow: 1,
          margin: 4,
          padding: 20,
          flexBasis: 0,
        }}>
        <Text>{this.props.item.nome} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
