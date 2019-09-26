import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
export default class Dialog extends Component {
  render() {
    return (
      <View style={{flex: 1,backgroundColor:'#fff'}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              flex: 1,
              margin: 20,
              alignItems: 'center',
              paddingTop: 30,
            }}>
            <Text>Olá Hallyson, seja bem vindo, somos o BuscaAp!</Text>
            <Text> Estamos com você, o que você procura? </Text>
          </View>
          <View style={{flex: 3}}>
            <Button
              style={styles.marginButton}
              icon="user-friends"
              mode="contained"
              onPress={() => console.log('Pressed')}>
              Encontrar colegas de quarto
            </Button>
            <Button
              style={styles.marginButton}
              icon="home"
              mode="contained"
              onPress={() => console.log('Pressed')}>
              Encontrar uma moradia
            </Button>
            <Button
              style={styles.marginButton}
              icon="add"
              mode="contained"
              onPress={() => console.log('Pressed')}>
              Publicar uma Vaga
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  marginButton: {
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: '#aaaaaaaa',
  },
});
