import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class RedefinePassword extends Component {
    verifyAccount = () => {
        try {
          firebase.auth().onStateChanged((usuario)=>{
            if(usuario){
              currentUser = usuario;
              //envia um link para resetar a senha
              firebase.auth().sendPasswordResetEmail(usuario.email).then(()=>{
                    alert("email enviado, verifique sua conta!");
              })
            }
       })
        } catch (error) {
          
        }
    }

    render() {
        return (
            <View>
                <Text> Redefinir Senha </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
