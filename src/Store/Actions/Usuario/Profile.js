import firebase from 'firebase';
import b64 from 'base-64';
import _ from 'lodash';
import {
  USER,
  MODIFICA_EMAIL,
  NUMERO,
  MODIFICA_SENHA,
  MODIFICADATA,
  MODIFICASEXO,
  ADDFOTO,
  MODIFICAIDADE,
  CONFIRME_SENHA,
  MODIFICA_NOME,
  CADASTRO_ERRO,
  CADASTRO_SUCESSO,
  USUARIO_ERRO,
  USUARIO_SUCESSO,
  LOADING_EM_ANDAMENTO,
  LOADING_CADASTRO,
  DESLOGADO,
  CADASTRADO,
} from '../../Reducers/types';

export const modificaEmail = email => {
  return {
    type: MODIFICA_EMAIL,
    payload: email,
  };
};

export const modificaSenha = senha => {
  return {
    type: MODIFICA_SENHA,
    payload: senha,
  };
};
export const modificaSexo = sexo => {
  return {
    type: MODIFICASEXO,
    payload: sexo,
  };
};
export const modificaData = data => {
  return {
    type: MODIFICADATA,
    payload: data,
  };
};
export const modificaIdade = idade => {
  return {
    type: MODIFICAIDADE,
    payload: idade,
  };
};
export const addfoto = foto => {
  return {
    type: ADDFOTO,
    payload: foto,
  };
};

export const confirmeSenha = senha => {
  return {
    type: CONFIRME_SENHA,
    payload: senha,
  };
};
export const modificaNumero = number => {
  return {
    type: NUMERO,
    payload: number,
  };
};
export const modificaNome = nome => {
  return {
    type: MODIFICA_NOME,
    payload: nome,
  };
};
export const modificaCidadeBusca = cidade => {
  return {
    type: 'cidadeBusca',
    payload: cidade,
  };
};

export const modificaDescricao = descricao => {
  return {
    type: 'modificaDescricao',
    payload: descricao,
  };
};

export const modificaValor = valor => {
  return {
    type: 'modificaValor',
    payload: valor,
  };
};
export const modificaCidade = cidade => {
  return {
    type: 'modificaCidade',
    payload: cidade,
  };
};

// export const cadastroUsuario = ({
//     nameUser,
//     emailUser,
//     passwordUser,
//     contatoUser,
//     cargo,
//     dataNascUser,
//     idadeUser,
//     sexo,
//     premmium,
//     descricao,
//     fotoUser,
//   }) => {
//     var imge = await fetch(fotoUser);
//     var blobi = await imge.blob();
//     dispatch({type: LOADING_CADASTRO});
//     var chave = firebase
//       .database()
//       .ref()
//       .push().key;
//     await firebase
//       .auth()
//       .createUserWithEmailAndPassword(emailUser, passwordUser)
//       .then(user => {
//         let emailb64 = b64.encode(emailUser);
//         var ref = firebase
//           .storage()
//           .ref('Profile')
//           .child(emailb64 + chave);
//         ref.put(blobi);
//         storage
//           .ref('Profile')
//           .child(emailb64 + chave)
//           .getDownloadURL()
//           .then(res => {
//             firebase
//               .database()
//               .ref('Users')
//               .child(emailb64)
//               .set(
//                 res,
//                 nameUser,
//                 contatoUser,
//                 cargo,
//                 dataNascUser,
//                 idadeUser,
//                 sexo,
//                 premmium,
//                 descricao,
//                 buscando,
//                 fotodeBusca,
//               );
//             alert('cadastrado');

//           });
//       });
// };

const CadastroErro = (error, dispatch) => {
  dispatch({type: CADASTRO_ERRO, payload: error.message});
};

export const AutenticarUser = ({email, senha}) => {
  return dispatch => {
    dispatch({type: LOADING_EM_ANDAMENTO});

    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(value => usuario_sucesso(value, dispatch))
      .catch(error => usuario_erro(error, dispatch));
  };
};

const usuario_sucesso = (value, dispatch) => {
  try {
    var myMap = new Map();
    let email = firebase.auth().currentUser.email;
    let emailb64 = b64.encode(email);
    firebase
      .database()
      .ref('/users/' + emailb64)
      .on('value', va => {
        let nome = _.map(va.val())[0];
        let nome1 = _.map(va.val())[0];
        dispatch({type: USUARIO_SUCESSO, payload: nome, nome1});
      });
  } catch (error) {
    Alert.alert('Ops!', 'ocorreu um problema ao entrar!');
  }
};

const usuario_erro = (error, dispatch) => {
  dispatch({type: USUARIO_ERRO});
};

export const Logout = () => {
  return dispatch => {
    try {
      var user = firebase.auth().currentUser;
      if (user != null) {
        firebase
          .auth()
          .signOut()
          .then(() => {
            Alert.alert(' ', 'Volte sempre!');
            dispatch({type: DESLOGADO});
          })
          .catch(() => {
            alert('SaiuErro');
          });
      }
    } catch (error) {
      alert('houve um problema!');
    }
  };
};
export const User = user => {
  return {
    type: USER,
    payload: user,
  };
};
export const cadastrado = () => {
  return {
    type: CADASTRADO,
  };
};
