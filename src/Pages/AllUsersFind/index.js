import React, {Component} from 'react';
import {Text, StyleSheet, View, FlatList, SafeAreaView} from 'react-native';
import AllUsersFind from '../../Components/AllUsersFind/index';
export default class index extends Component {
  state = {
    data: [
      {nome: 'Jean', idade: 12},
      {nome: 'zé', idade: 15},
      {nome: 'moaçam', idade: 19},
      {nome: 'Jean', idade: 13},
      {nome: 'zézao', idade: 33},
      {nome: 'moaçam', idade: 554},
    ],
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.idade}
          numColumns={3} // Número de colunas
          renderItem={({item}) => {
            return <AllUsersFind item={item} />;
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
