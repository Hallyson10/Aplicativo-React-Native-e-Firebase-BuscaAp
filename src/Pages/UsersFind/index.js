import React, {PureComponent} from 'react';
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  FlatList,
  ScrollView,
} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import firebase from 'firebase';
//AIzaSyDxDgoVgEgGD-GoheR8YYguquuhxl6fsJY
import b64 from 'base-64';
import moment from 'moment';
import {connect} from 'react-redux';
import {
  modificaDescricao,
  modificaValor,
  modificaCidade,
} from '../../Store/Actions/Usuario/Profile';
import {
  UsersFind,
  OnUserFind,
} from '../../Store/Actions/UsuarioProcurando/index';
import {TextInput, HelperText, Button} from 'react-native-paper';
class index extends PureComponent {
  state = {
    bairro: '',
    dataBusca: moment()
      .subtract(1, 'dias')
      .calendar(),
  };

  // onUserFind = async () => {
  //   try {
  //     const {
  //       emailUser,
  //       nameUser,
  //       contatoUser,
  //       cargo,
  //       dataNascUser,
  //       idadeUser,
  //       sexo,
  //       cidadeNatal,
  //       premmium,
  //       descricao,
  //       fotoUser,
  //       buscando,
  //       fotodeBusca,
  //       buscandoEm,
  //       descricaoBusca,
  //       valor,
  //       minhasCurtidas,
  //       meusImoveisPublicados,
  //       meusFavoritos,
  //       userFind,
  //       cidadeBusca,
  //       longitudeBusca,
  //       latitudeBusca,
  //       oldFind,
  //     } = this.props;

  //     const usu = firebase.auth().currentUser;
  //     // //alert(usu.email);
  //     const emailb64 = b64.encode(usu.email);
  //     if (this.props.oldFind !== '') {
  //       await firebase
  //         .database()
  //         .ref('/Timeline/UsersProcurando')
  //         .child(this.props.oldFind)
  //         .child(emailb64)
  //         .remove();
  //     }
  //     await firebase
  //       .database()
  //       .ref('Users/')
  //       .child(emailb64)
  //       .child('buscandoEm')
  //       .update({
  //         cidadeBusca: this.props.cidadeBusca,
  //         longitudeBusca: this.props.longitudeBusca,
  //         latitudeBusca: this.props.latitudeBusca,
  //       });
  //     this.props.modificaCidade(this.props.cidadeBusca);
  //     await this.props.OnUserFind(
  //       emailUser,
  //       nameUser,
  //       contatoUser,
  //       cargo,
  //       dataNascUser,
  //       idadeUser,
  //       sexo,
  //       cidadeNatal,
  //       premmium,
  //       descricao,
  //       fotoUser,
  //       buscando,
  //       fotodeBusca,
  //       buscandoEm,
  //       descricaoBusca,
  //       valor,
  //       minhasCurtidas,
  //       meusImoveisPublicados,
  //       meusFavoritos,
  //       userFind,
  //       cidadeBusca,
  //       longitudeBusca,
  //       latitudeBusca,
  //       oldFind,
  //     );
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  AtivaUserFind = async () => {
    try {
      const usu = firebase.auth().currentUser;
      alert(usu.email);
      const emailb64 = b64.encode(usu.email);
      if (this.props.oldFind !== '') {
        await firebase
          .database()
          .ref('/Timeline/UsersProcurando')
          .child(this.props.oldFind)
          .child(emailb64)
          .remove();
      }
      await firebase
        .database()
        .ref('Users/')
        .child(emailb64)
        .child('buscandoEm')
        .update({
          cidadeBusca: this.props.cidadeBusca,
          longitudeBusca: this.props.longitudeBusca,
          latitudeBusca: this.props.latitudeBusca,
        });
      this.props.modificaCidade(this.props.cidadeBusca);
      await firebase
        .database()
        .ref('Users/')
        .child(emailb64)
        .child('oldFind')
        .set(this.props.cidadeBusca);
      await firebase
        .database()
        .ref('/Timeline/UsersProcurando')
        .child(this.props.cidadeBusca)
        .child(emailb64)
        .set({
          emailUser: this.props.emailUser,
          nameUser: this.props.nameUser,
          contatoUser: this.props.contatoUser,
          cargo: this.props.cargo,
          dataNascUser: this.props.dataNascUser,
          idadeUser: this.props.idadeUser,
          sexo: this.props.sexo,
          cidadeNatal: this.props.cidadeNatal,
          premmium: this.props.premmium,
          descricao: this.props.descricao,
          fotoUser: this.props.fotoUser,
          buscando: this.props.buscando,
          fotodeBusca: this.props.fotodeBusca,
          buscandoEm: this.props.buscandoEm,
          descricaoBusca: this.props.descricaoBusca,
          minhasCurtidas: this.props.minhasCurtidas,
          meusImoveisPublicados: this.props.meusImoveisPublicados,
          meusFavoritos: this.props.meusFavoritos,
          dataBusca: moment()
            .subtract(1, 'dias')
            .calendar(),
          oldFind: this.props.oldFind,
        })
        .then(async usu => {
          await firebase
            .database()
            .ref('/Timeline/UsersProcurando')
            .on('value', snapshot => {
              let items = [];
              snapshot.forEach(dataSnapshot => {
                let item = dataSnapshot.val();
                item['key'] = dataSnapshot.key;
                items.push(item);
              });
              this.props.UsersFind(items);
            });
        })
        .catch(error => {
          alert(error);
        });
    } catch (error) {
      alert('Ocorreu um erro inesperado :(' + error);
    }
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#ffffff'}}>
        <KeyboardAvoidingView
          behavior="padding"
          style={{backgroundColor: '#ffffff'}}>
          <ScrollView style={{backgroundColor: '#ffffff'}}>
            <View style={{marginTop: 30, marginBottom: 50}}>
              <Text style={{fontSize: 20, marginLeft: 20}}>
                Está procurando uma moradia? Vamos encontrar juntos!
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 16, marginLeft: 20}}>
                Você deseja uma moradia em qual cidade?
              </Text>
              <TextInput
                style={{
                  marginBottom: 30,
                  marginLeft: 20,
                  marginRight: 20,
                  height: 60,
                  justifyContent: 'center',
                }}
                mode="outlined"
                multiline
                label="Cidade"
                value={this.props.cidadeBusca}
                onFocus={() => this.props.navigation.navigate('MapFind')}
              />
            </View>
            <View style={{marginLeft: 20, marginRight: 20}}>
              <View>
                <Text style={{marginBottom: 12, fontSize: 16}}>
                  Descreva o motivo da sua busca por uma moradia{' '}
                </Text>
                <TextInput
                  style={{marginBottom: 30, height: 90}}
                  mode="outlined"
                  multiline
                  label="Descrição"
                  value={this.props.descricaoBusca}
                  onChangeText={descricao =>
                    this.props.modificaDescricao(descricao)
                  }
                />
              </View>
              <View>
                <Text style={{marginBottom: 12, fontSize: 16}}>
                  Valor máximo disposto a pagar
                </Text>
                <TextInput
                  placeholder="R$"
                  mode="outlined"
                  style={{marginBottom: 30, height: 60}}
                  render={props => (
                    <TextInputMask
                      {...props}
                      type={'money'}
                      options={{
                        precision: 2,
                        separator: ',',
                        delimiter: '.',
                        unit: 'R$',
                        suffixUnit: '',
                      }}
                      value={this.props.valor}
                      onChangeText={text => {
                        this.props.modificaValor(text);
                      }}
                    />
                  )}
                />
              </View>
            </View>
            <View style={{marginBottom: 20, backgroundColor: '#ffffff'}}>
              <Button onPress={this.AtivaUserFind}>Salvar</Button>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  emailUser: state.Profile.emailUser,
  nameUser: state.Profile.nameUser,
  contatoUser: state.Profile.contatoUser,
  cargo: state.Profile.cargo,
  dataNascUser: state.Profile.dataNascUser,
  idadeUser: state.Profile.idadeUser,
  sexo: state.Profile.sexo,
  cidadeNatal: state.Profile.cidadeNatal,
  premmium: state.Profile.premmium,
  descricao: state.Profile.descricao,
  fotoUser: state.Profile.fotoUser,
  buscando: state.Profile.buscando,
  fotodeBusca: state.Profile.fotodeBusca,
  buscandoEm: state.Profile.buscandoEm,
  descricaoBusca: state.Profile.descricaoBusca,
  valor: state.Profile.valor,
  minhasCurtidas: state.Profile.minhasCurtidas,
  meusImoveisPublicados: state.Profile.meusImoveisPublicados,
  meusFavoritos: state.Profile.meusFavoritos,
  userFind: state.UsersFind.userFind,
  cidadeBusca: state.FilterFind.cidadeBusca,
  longitudeBusca: state.FilterFind.longitudeBusca,
  latitudeBusca: state.FilterFind.latitudeBusca,
  oldFind: state.Profile.oldFind,
});
export default connect(
  mapStateToProps,
  {
    UsersFind,
    modificaDescricao,
    modificaValor,
    modificaCidade,
    OnUserFind,
  },
)(index);
const styles = StyleSheet.create({});
