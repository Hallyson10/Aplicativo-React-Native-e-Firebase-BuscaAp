import {USERFIND} from '../../Reducers/types';
import b64 from 'base-64';
import moment from 'moment';
import firebase from 'firebase';
import {modificaCidade} from '../Usuario/Profile';
export const UsersFind = user => {
  //alert(JSON.stringify(user));
  return {
    type: USERFIND,
    payload: user,
  };
};

export const OnUserFind = (
  emailUser,
  nameUser,
  contatoUser,
  cargo,
  dataNascUser,
  idadeUser,
  sexo,
  cidadeNatal,
  premmium,
  descricao,
  fotoUser,
  buscando,
  fotodeBusca,
  buscandoEm,
  descricaoBusca,
  valor,
  minhasCurtidas,
  meusImoveisPublicados,
  meusFavoritos,
  userFind,
  cidadeBusca,
  longitudeBusca,
  latitudeBusca,
  oldFind,
) => {
  return dispatch => {
    try {
      const usu = firebase.auth().currentUser;
      alert(cidadeBusca + 'aqui');
      const emailb64 = b64.encode(usu.email);
      firebase
        .database()
        .ref('Users/')
        .child(emailb64)
        .child('oldFind')
        .set(cidadeBusca);
      firebase
        .database()
        .ref('/Timeline/UsersProcurando')
        .child(cidadeBusca)
        .child(emailb64)
        .set({
          emailUser: emailUser,
          nameUser: nameUser,
          contatoUser: contatoUser,
          cargo: cargo,
          dataNascUser: dataNascUser,
          idadeUser: idadeUser,
          sexo: sexo,
          valor: valor,
          cidadeNatal: cidadeNatal,
          premmium: premmium,
          descricao: descricao,
          fotoUser: fotoUser,
          buscando: buscando,
          fotodeBusca: fotodeBusca,
          buscandoEm: buscandoEm,
          descricaoBusca: descricaoBusca,
          minhasCurtidas: minhasCurtidas,
          meusImoveisPublicados: meusImoveisPublicados,
          meusFavoritos: meusFavoritos,
          dataBusca: moment()
            .subtract(1, 'dias')
            .calendar(),
          oldFind: oldFind,
        })
        .then(async usu => {
          dispatch({
            type: 'LimpaBusca',
            payload: cidadeBusca,
          });
          firebase
            .database()
            .ref('/Timeline/UsersProcurando')
            .on('value', snapshot => {
              let items = [];
              snapshot.forEach(dataSnapshot => {
                let item = dataSnapshot.val();
                item['key'] = dataSnapshot.key;
                items.push(item);
              });
              //UsersFind(items);
              //alert(JSON.stringify(items));
              dispatch({
                type: USERFIND,
                payload: items,
              });
            });
        })
        .catch(error => {
          alert(error);
        });
    } catch (error) {
      alert('Ocorreu um erro inesperado :(' + error);
    }
  };
};

export const EditFind = async () => {};
