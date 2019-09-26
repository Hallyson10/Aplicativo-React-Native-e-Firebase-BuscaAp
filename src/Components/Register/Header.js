import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default Header = props => {
  return (
    <View
      style={{
        height: 60,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: props.back, //'transparent'
        flexDirection: 'row',
      }}>
      <TouchableOpacity onPress={props.onPressL}>
        <View
          style={{
            height: 60,
            width: 100,
            justifyContent: 'center',
          }}>
          <Text style={{marginLeft: 20, color: props.color, fontSize: 18}}>
            Voltar
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onPressR}>
        <View
          style={{
            height: 60,
            width: 120,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: props.color,
              fontSize: 18,
              fontWeight: '400',
            }}>
            {props.nameR}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
