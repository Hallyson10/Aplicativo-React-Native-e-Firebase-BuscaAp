import React, {PureComponent, Fragment} from 'react';
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import {TextInput, HelperText} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import Header from '../../Components/Register/Header';
import {
  modificaEmail,
  modificaSenha,
  modificaNome,
} from '../../Store/Actions/Usuario/Profile';

class Register extends PureComponent {
  state = {
    passwordVisible: true,
  };
  validate = text => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      return false;
    } else {
      return true;
    }
  };
  Prosseguir = () => {
    this.props.nameUser != null &&
    this.props.nameUser.length >= 4 &&
    this.props.emailUser.includes('@') &&
    this.validate(this.props.emailUser) === true &&
    this.props.passwordUser.length >= 6
      ? this.props.navigation.navigate('ProxRegister')
      : alert('É necessário inserir todos os dados para continuar!');
  };

  MostraSenha = () => {
    if (!this.state.passwordVisible) {
      return (
        <TouchableHighlight
          activeOpacity={10}
          underlayColor="#fafafa"
          style={{
            zIndex: 1,
            position: 'absolute',
            marginStart: -30,
            marginTop: -5,
          }}
          onPress={() => {
            this.setState({passwordVisible: true});
          }}>
          <Icon name="eye" size={22} />
        </TouchableHighlight>
      );
    } else {
      return (
        <TouchableHighlight
          underlayColor="#fafafa"
          style={{
            zIndex: 1,
            position: 'absolute',
            marginStart: -30,
            marginTop: -5,
          }}
          activeOpacity={10}
          onPress={() => {
            this.setState({passwordVisible: false});
          }}>
          <Icon name="eye-slash" size={22} />
        </TouchableHighlight>
      );
    }
  };
  render() {
    return (
      <KeyboardAvoidingView
        style={{flex: 1, backgroundColor: '#ffffff', zIndex: 0}}>
        <ScrollView>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ImageBackground
              source={require('../../../src/images/image.jpeg')}
              style={{backgroundColor: '#fff', width: '100%', height: 298}}>
              <Header
                back="rgba(52, 52, 52, 0.2)"
                color="#fafafa"
                onPressL={() => this.props.navigation.goBack()}
                onPressR={() => this.Prosseguir()}
                nameR="Próximo"
              />
              <View
                style={{
                  justifyContent: 'flex-end',
                  flex: 1,
                  marginLeft: 20,
                  marginBottom: 10,
                }}>
                <Text style={{fontSize: 30, color: '#fff'}}>Cadastre-se</Text>
              </View>
            </ImageBackground>
            <View style={{flex: 3, width: '100%'}}>
              <View
                style={{
                  flex: 1,
                  marginEnd: 20,
                  marginStart: 20,
                  marginTop: 10,
                }}>
                <TextInput
                  error={this.props.nameUser.length <= 4 ? 'error' : false}
                  style={{
                    backgroundColor: '#ffffff',
                    marginBottom: 5,
                    marginTop: 5,
                  }}
                  label="Nome Completo"
                  autoCapitalize="words"
                  autoCorrect={false}
                  returnKeyType={'next'}
                  onSubmitEditing={() => {
                    this.secondTextInput.focus();
                  }}
                  value={this.props.nameUser}
                  onChangeText={name => {
                    this.props.modificaNome(name);
                  }}
                />
                <HelperText
                  type="error"
                  visible={this.props.nameUser.length <= 4 ? true : false}>
                  Insira seu nome completo
                </HelperText>
                <TextInput
                  autoCapitalize={'none'}
                  autoCorrect={false}
                  ref={input => {
                    this.secondTextInput = input;
                  }}
                  returnKeyType={'next'}
                  style={{
                    backgroundColor: '#ffffff',
                    marginTop: 7,
                    marginBottom: 5,
                  }}
                  onSubmitEditing={() => {
                    this.terceiroTextInput.focus();
                  }}
                  label="Email"
                  error={
                    this.validate(this.props.emailUser) === false
                      ? 'error'
                      : false
                  }
                  value={this.props.emailUser}
                  onChangeText={email => {
                    this.props.modificaEmail(email);
                  }}
                />
                <HelperText
                  type="error"
                  visible={this.validate(this.props.emailUser) === false}>
                  Insira um email válido
                </HelperText>
                <View
                  style={{
                    marginBottom: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={{flex: 1}}>
                    <TextInput
                      ref={input => {
                        this.terceiroTextInput = input;
                      }}
                      // onBlur={this.Prosseguir}
                      returnKeyType={'next'}
                      style={{backgroundColor: '#ffffff', zIndex: 0}}
                      label="Senha"
                      secureTextEntry={this.state.passwordVisible}
                      error={
                        this.props.passwordUser.length <= 6 ? 'error' : false
                      }
                      value={this.props.passwordUser}
                      onChangeText={senha => {
                        this.props.modificaSenha(senha);
                      }}
                    />
                  </View>
                  <View>{this.MostraSenha()}</View>
                </View>
                <HelperText
                  type="error"
                  visible={this.props.passwordUser.length <= 6 ? true : false}>
                  Insira uma senha com no mínimo 6 caracteres
                </HelperText>
                <View style={{marginTop: 46, alignItems: 'center'}}>
                  <Text style={{fontSize: 20}}>Já tenho uma conta</Text>
                </View>
                <View
                  style={{
                    marginTop: 50,
                    alignItems: 'center',
                    marginBottom: 30,
                  }}>
                  <Text style={{fontSize: 16}}>
                    Clicando em "Próximo" Você aceita os{' '}
                  </Text>
                  <Text style={{fontSize: 16}}>
                    termos de responsabilidade, termo de privacidade e termo de
                    aplicação{' '}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
const mapStateToProps = state => ({
  nameUser: state.Profile.nameUser,
  emailUser: state.Profile.emailUser,
  passwordUser: state.Profile.passwordUser,
});
export default connect(
  mapStateToProps,
  {
    modificaEmail,
    modificaSenha,
    modificaNome,
  },
)(Register);
const styles = StyleSheet.create({});
