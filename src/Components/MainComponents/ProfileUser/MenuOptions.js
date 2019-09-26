import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {List, ListItem} from 'react-native-elements';

export default class MenuOptions extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff', marginTop: 20}}>
        <ListItem
          //roundAvatar
          //avatar={{uri: l.avatar_url}}
          style={{
            borderBottomWidth: 0.8,
            borderColor: '#f4f4f4',
            borderTopWidth: 0.8,
          }}
          rightIcon={{name: 'loyalty', color: '#694fad'}}
          title="Meus Favoritos"
        />
        <ListItem
          //roundAvatar
          //avatar={{uri: l.avatar_url}}
          style={{
            borderBottomWidth: 0.8,
            borderColor: '#f4f4f4',
          }}
          rightIcon={{name: 'home', color: '#694fad'}}
          title="Minhas Publicações"
        />
        <ListItem
          roundAvatar
          //avatar={{uri: l.avatar_url}}
          style={{
            borderBottomWidth: 0.8,
            borderColor: '#f4f4f4',
          }}
          onPress={this.props.onPress}
          rightTitle={this.props.cidadeBusca}
          rightIcon={{name: 'room', color: '#694fad'}}
          title="Buscando moradia em"
        />
        <ListItem
          //roundAvatar
          //avatar={{uri: l.avatar_url}}
          style={{
            borderBottomWidth: 0.8,
            borderColor: '#f4f4f4',
          }}
          onPress={this.props.configuration}
          rightIcon={{name: 'settings', color: '#694fad'}}
          title="Configurações"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
