import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';
import {SafeAreaView} from 'react-navigation';
export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: '#6a51ae',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            onPress={() => {
              this.props.navigation.navigate('Register');
            }}>
            {' '}
            Login{' '}
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
