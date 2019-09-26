import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class verifyAccount extends Component {
    verifyAccount = () => {
        try {
          firebase.auth().onStateChanged((usuario)=>{
            if(usuario){
              currentUser = usuario;
              //mudando o idioma de email enviado p/user
              firebase.auth().useDeviceLanguage();
              if(!usuario.emailVerified){
                //envia email para user verificar e confirmar email
                usuario.sendEmailVerification().then(()=>{
                  alert('email enviado');
                })
              }
            }
       })
        } catch (error) {
          
        }
    }

    render() {
        return (
            <View>
                <Text> verifyAccount </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
