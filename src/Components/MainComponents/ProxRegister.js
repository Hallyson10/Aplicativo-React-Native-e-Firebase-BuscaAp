import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TextInput} from 'react-native-paper';
import Header from '../Register/Header';
import {connect} from 'react-redux';
import {modificaNumero} from '../../Store/Actions/Usuario/Profile';

class ProxRegister extends Component {
  state = {
    celular: '',
  };

  Prosseguir = () => {
    this.props.contatoUser.length < 11
      ? false
      : this.props.navigation.navigate('SubPageInfo');
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Header
          color="#6a51ae"
          back="#fcfcfc"
          onPressR={() => this.Prosseguir()}
          onPressL={() => this.props.navigation.goBack()}
          nameR="Próximo"
        />
        <View style={{flex: 1, marginTop: 10}}>
          <View
            style={{
              marginStart: 20,
              marginBottom: 20,
              marginRight: 20,
            }}>
            <Text style={{fontSize: 18}}>
              Olá{' '}
              {this.props.nameUser
                .split(' ')
                .slice(0, 2)
                .join(' ')
                .substr(-50, 25)}{' '}
              Precisamos do seu número de telefone para entrarmos em contato com
              você ...
            </Text>
          </View>
          <View style={{marginEnd: 20, marginStart: 20, alignItems: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="phone" size={20} />
              <TextInputMask
                autoFocus
                onBlur={this.Prosseguir}
                type={'cel-phone'}
                placeholder="Número para contato"
                style={{
                  marginLeft: 8,
                  borderBottomWidth: 1.4,
                  borderColor: '#eee',
                  fontSize: 18,
                  backgroundColor: '#ffffff',
                }}
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask: '(99) ',
                }}
                value={this.props.contatoUser}
                onChangeText={text => {
                  this.props.modificaNumero(text);
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  nameUser: state.Profile.nameUser,
  contatoUser: state.Profile.contatoUser,
});
export default connect(
  mapStateToProps,
  {
    modificaNumero,
  },
)(ProxRegister);
const styles = StyleSheet.create({});
