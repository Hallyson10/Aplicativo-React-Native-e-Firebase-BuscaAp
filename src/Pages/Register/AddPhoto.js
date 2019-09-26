import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  View,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import b64 from 'base-64';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ImagePicker from 'react-native-image-picker';
import firebase from 'firebase';
import {Button} from 'react-native-paper';
import {connect} from 'react-redux';
import {addfoto, cadastroUsuario} from '../../Store/Actions/Usuario/Profile';
const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class AddPhoto extends Component {
  state = {
    text: 'Oie, Estamos verificando seus dados!',
    modalVisible: false,
  };
  toggleModal = async () => {
    try {
      if (this.props.fotoUser === null) {
        alert('Por favor, insira uma foto de perfil');
        return false;
      } else if (this.props.fotoUser !== null) {
        this.setState({modalVisible: true});
        this.cadastroUsuario();
      }
    } catch (error) {
      alert('Ocorreu um erro ao adicionar sua foto!');
    }
  };
  cadastroUsuario = async () => {
    try {
      const {
        emailUser,
        nameUser,
        cidadeNatal,
        passwordUser,
        contatoUser,
        cargo,
        dataNascUser,
        idadeUser,
        sexo,
        premmium,
        descricao,
        fotoUser,
        oldFind,
        buscando,
        fotodeBusca,
        buscandoEm,
        descricaoBusca,
        minhasCurtidas,
        meusImoveisPublicados,
        meusFavoritos,
        valor,
      } = this.props;

      //alert(JSON.stringify(fotoUser));
      var imge = await fetch(fotoUser);
      var blobi = await imge.blob();

      // alert('c');
      var chave = await firebase
        .database()
        .ref()
        .push().key;
      await firebase
        .auth()
        .createUserWithEmailAndPassword(emailUser, passwordUser)
        .catch(error => {
          if (
            error ==
            'Error:The email address is already in use by another account.'
          ) {
            alert('correto');
          } else if (
            error ==
            'Error: The email address is already in use by another account.'
          ) {
            this.setState({modalVisible: false});
            alert('Email já cadastrado, tente novamente!');
          } else {
            alert('error');
          }
        })
        .then(async user => {
          await this.setState({
            text: 'Tudo certinho, espera um pouco,tá?! estamos cadastrando...',
          });
          let emailb64 = b64.encode(emailUser);
          var ref = await firebase
            .storage()
            .ref('Profile/')
            .child(chave);
          ref.put(blobi).then(async () => {
            await firebase
              .storage()
              .ref('Profile/')
              .child(chave)
              .getDownloadURL()
              .then(async res => {
                await firebase
                  .database()
                  .ref('Users/')
                  .child(emailb64)
                  .set({
                    res,
                    emailb64,
                    nameUser,
                    minhasCurtidas,
                    meusImoveisPublicados,
                    meusFavoritos,
                    cidadeNatal,
                    contatoUser,
                    cargo,
                    dataNascUser,
                    idadeUser,
                    sexo,
                    premmium,
                    descricao,
                    buscando,
                    fotodeBusca,
                    buscandoEm,
                    descricaoBusca,
                    oldFind,
                    valor,
                  })
                  .then(us => {})
                  .catch(error => alert(error + 'addpoto'));
              });
          });
        });
    } catch (error) {
      alert(error);
    }
  };
  photo = () => {
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        
      } else if (response.error) {
        
      } else if (response.customButton) {
      
      } else {
               const source = response.uri;

               // You can also display the image using data:
               // const source = { uri: 'data:image/jpeg;base64,' + response.data };

               this.props.addfoto(source);
             } });
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={styles.modal}>
            <Text style={styles.text}>{this.state.text}</Text>
          </View>
        </Modal>
        <View
          style={{
            height: 84,
            backgroundColor: '#fafafa',
            justifyContent: 'center',
            paddingLeft: 10,
            marginBottom: 16,
          }}>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 20,
              color: '#000',
              marginRight: 20,
              marginLeft: 20,
              marginTop: 20,
            }}>
            {' '}
            Adicione uma foto ao seu perfil{' '}
          </Text>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 20,
              color: '#000',
              marginLeft: 20,
            }}>
            {' '}
            Diga Xiiiis!!!!
          </Text>
        </View>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <View
            style={{
              flex: 2,
              margin: 20,
              marginBottom: 40,
              marginHorizontal: 30,
              borderWidth: 2,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: '#ccc',
              backgroundColor: 'rgb(105,89,205)',
              borderRadius: 10,
              transform: [{perspective: 15}, {rotate: '3deg'}],
            }}>
            <View
              style={{
                height: 280,
                width: '60%',
                margin: 20,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#rgb(211,211,211)',
                borderRadius: 10,
                transform: [{perspective: 15}, {rotate: '2deg'}],
              }}>
              <View
                style={{
                  height: 280,
                  width: '90%',
                  marginBottom: -5,
                  margin: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#ffffff',
                  borderRadius: 10,
                  transform: [{perspective: 10}, {rotate: '-2deg'}],
                }}>
                {this.props.fotoUser != null ? (
                  <Image
                    source={{uri: this.props.fotoUser}}
                    style={{height: '88%', width: '88%', borderRadius: 10}}
                  />
                ) : (
                  <TouchableOpacity onPress={this.photo}>
                    <View style={{alignItems: 'center'}}>
                      <Icon color="purple" name="portrait" size={180} />
                      <View
                        style={{
                          padding: 2,
                          borderWidth: 0.6,
                          borderRadius: 10,
                          elevation: 1,
                          borderColor: 'purple',
                        }}>
                        <Text style={{fontSize: 16, color: 'purple'}}>
                          Adicionar Foto
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              height: 180,
              backgroundColor: '#fafafa',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Button
              style={{
                height: 48,
                justifyContent: 'center',
              }}
              icon="check"
              contentStyle={{height: 48}}
              loading={false}
              disabled={this.props.fotoUser === null}
              mode="contained"
              onPress={this.toggleModal}>
              Finalizar Cadastro
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  fotoUser: state.Profile.fotoUser,
  passwordUser: state.Profile.passwordUser,
  emailUser: state.Profile.emailUser,
  nameUser: state.Profile.nameUser,
  cidadeNatal: state.Profile.cidadeNatal,
  contatoUser: state.Profile.contatoUser,
  cargo: state.Profile.cargo,
  dataNascUser: state.Profile.dataNascUser,
  idadeUser: state.Profile.idadeUser,
  sexo: state.Profile.sexo,
  premmium: state.Profile.premmium,
  descricao: state.Profile.descricao,
  valor: state.Profile.valor,
  fotoUser: state.Profile.fotoUser,
  buscando: state.Profile.buscando,
  fotodeBusca: state.Profile.fotodeBusca,
  buscandoEm: state.Profile.buscandoEm,
  descricaoBusca: state.Profile.descricaoBusca,
  minhasCurtidas: state.Profile.minhasCurtidas,
  meusImoveisPublicados: state.Profile.meusImoveisPublicados,
  meusFavoritos: state.Profile.meusFavoritos,
  oldFind: state.Profile.oldFind,
});
export default connect(
  mapStateToProps,
  {
    addfoto,
    cadastroUsuario,
  },
)(AddPhoto);
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
