import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableNativeFeedback,
  NetInfo,
} from 'react-native';
import {connect} from 'react-redux';
import firebase from 'firebase';
class EditFind extends Component {
  cancelBusca = async () => {
    const {buscandoEm} = this.props;
    const {emailUser} = this.props;
    try {
      if (this.props.buscandoEm.cidadeBusca !== '') {
        await firebase
          .database()
          .ref('/Timeline/UsersProcurando')
          .child(buscandoEm.cidadeBusca)
          .child(emailUser)
          .remove();
        await firebase
          .database()
          .ref('Users/')
          .child(emailUser)
          .child('buscandoEm')
          .update({
            cidadeBusca: '',
            longitudeBusca: 0,
            latitudeBusca: 0,
          });
        await firebase
          .database()
          .ref('Users/')
          .child(emailUser)
          .update({oldFind: ''});
      }
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        {this.props.buscandoEm.cidadeBusca !== '' ? (
          <View>
            <Text>
              {' '}
              Estou buscando uma moradia em {
                this.props.buscandoEm.cidadeBusca
              }{' '}
            </Text>
          </View>
        ) : (
          <View>
            <Text>Não estou buscando moradia</Text>
          </View>
        )}

        <TouchableNativeFeedback onPress={this.cancelBusca}>
          <View>
            <Text>Cancelar busca por moradia</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  nameUser: state.Profile.nameUser,
  contatoUser: state.Profile.contatoUser,
  cargo: state.Profile.cargo,
  descricao: state.Profile.descricao,
  valor: state.Profile.valor,
  buscando: state.Profile.buscando,
  fotodeBusca: state.Profile.fotodeBusca,
  buscandoEm: state.Profile.buscandoEm,
  descricaoBusca: state.Profile.descricaoBusca,
  oldFind: state.Profile.oldFind,
  emailUser: state.Profile.emailUser,
});

export default connect(
  mapStateToProps,
  {},
)(EditFind);

const styles = StyleSheet.create({});
