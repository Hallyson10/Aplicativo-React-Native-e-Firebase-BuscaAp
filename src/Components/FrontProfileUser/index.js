import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

export default class index extends Component {
  render() {
    const item = this.props.navigation.getParam('item');
    //alert(JSON.stringify(item));
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{height: 200, width: 200}}>
          <Image
            style={{height: 200, width: 200}}
            source={{uri: item.fotoUser}}
          />
        </View>
        <Text>{item.nameUser} </Text>
        <Text>{item.idadeUser}</Text>
        <Text>{item.sexo} </Text>
        <Text>{item.descricao} </Text>
        <Text>{item.cargo}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>{item.dataNascUser.dia}/</Text>
          <Text>{item.dataNascUser.mes}/</Text>
          <Text>{item.dataNascUser.ano}</Text>
        </View>
        <Text>valor disposto a pagar</Text>
        <Text>Images</Text>
        <Text>cidade natal</Text>
        <Text>personalidade</Text>
        <Text>CONVIDAR</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
