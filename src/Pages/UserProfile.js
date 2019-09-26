import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  BackHandler,
  TouchableOpacity,
  TouchableNativeFeedback,
  ImageBackground,
} from 'react-native';

import PlanoDeFundo from '../Components/MainComponents/ProfileUser/PlanoDeFundo';
import FotoProfile from '../Components/MainComponents/ProfileUser/FotoProfile';
import MenuOptions from '../Components/MainComponents/ProfileUser/MenuOptions';
import FotoUser from '../Components/MainComponents/ProfileUser/FotosUser';
import firebase from 'firebase';
import {connect} from 'react-redux';
class UserProfile extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView>
          <PlanoDeFundo />
          <View style={{alignItems: 'center', marginTop: -60}}>
            <FotoProfile fotoUser={this.props.fotoUser} />
            <View style={{marginTop: 5}}>
              <Text style={{fontSize: 18}}>
                {this.props.nameUser}, {this.props.idadeUser}
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('TesteResizer')}>
                <Text style={{fontSize: 18}}>Universitário</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{alignItems: 'center', marginTop: 10, marginBottom: 20}}>
            <View
              style={{
                height: 120,
                width: '80%',
                //elevation: 0.1,
                borderRadius: 10,
                //borderWidth: 0.7,
                borderColor: '#f4f4f4',
                padding: 10,
              }}>
              <Text style={{fontSize: 14}}>Essa é sua descrição</Text>
              <Text style={{fontSize: 16}}>" {this.props.descricao} "</Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <MenuOptions
              onPress={() => this.props.navigation.navigate('UsersFind')}
              cidadeBusca={this.props.buscandoEm.cidadeBusca}
              configuration={() =>
                this.props.navigation.navigate('Configuration')
              }
            />
          </View>
          <FotoUser />
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  fotoUser: state.Profile.fotoUser,
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
  minhasCurtidas: state.Profile.minhasCurtidas,
  meusImoveisPublicados: state.Profile.meusImoveisPublicados,
  meusFavoritos: state.Profile.meusFavoritos,
  userFind: state.UsersFind.userFind,
  cidadeBusca: state.FilterFind.cidadeBusca,
  longitudeBusca: state.FilterFind.longitudeBusca,
  latitudeBusca: state.FilterFind.latitudeBusca,
});
export default connect(
  mapStateToProps,
  {},
)(UserProfile);
const styles = StyleSheet.create({});
