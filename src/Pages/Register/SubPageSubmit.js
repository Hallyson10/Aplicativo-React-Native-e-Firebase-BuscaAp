import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class SubPageSubmit extends Component {
    render() {
        return (
            <View>
                <Text> O que você quer?</Text>
                <Text onPress={()=>{this.props.navigation.navigate('Main')}}> Main </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
