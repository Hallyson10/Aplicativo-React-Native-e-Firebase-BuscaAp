import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const WIDTH = Dimensions.get('window');
import FotoProfile from './FotoProfile';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default PlanoDeFundo = props => {
  return (
    <View
      style={{
        height: 280,
        backgroundColor: '#fff',
        // borderRadius: 50,
        // transform: [{scaleX: 2}],
      }}>
      <LinearGradient
        colors={['#694fad', '#3b5998', '#4c669f']}
        style={{flex: 1, shadowColor: '#694fad'}}>
        <View style={{alignItems: 'flex-end'}}>
          <Icon
            name="user-edit"
            size={28}
            style={{color: '#fff', margin: 12}}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({});
