import {
  USER,
  MODIFICA_EMAIL,
  MODIFICA_SENHA,
  MODIFICA_NOME,
  MODIFICAIDADE,
  MODIFICADATA,
  CADASTRO_ERRO,
  MODIFICASEXO,
  CADASTRO_SUCESSO,
  NUMERO,
  ADDFOTO,
  USUARIO_ERRO,
  USUARIO_SUCESSO,
  LOADING_EM_ANDAMENTO,
  LOADING_CADASTRO,
  DESLOGADO,
  CADASTRADO,
} from '../types';
import _ from 'lodash';

const INITIAL_STATE = {
  adm: false,
  emailUser: '',
  oldFind: '',
  nameUser: '',
  passwordUser: '',
  contatoUser: '',
  cargo: '',
  dataNascUser: {ano: new Date().getFullYear(), mes: 0, dia: 0},
  idadeUser: 0,
  sexo: '',
  cidadeNatal: '',
  premmium: false,
  descricao: '',
  valor: 0,
  fotoUser: null,
  buscando: false,
  fotodeBusca: '',
  buscandoEm: {cidadeBusca: '', longitudeBusca: 0, latitudeBusca: 0},
  descricaoBusca: '',
  minhasCurtidas: '',
  meusImoveisPublicados: '',
  meusFavoritos: '',
  message_error: '',
  erro_login: '',
  loading_login: false,
  loading_cadastro: false,
  isAutenticaded: false,
  isCadastrado: false,
};

export default Profile = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFICA_EMAIL:
      return {
        ...state,
        emailUser: action.payload,
        erro_login: '',
        message_error: '',
      };

    case MODIFICA_SENHA:
      return {
        ...state,
        passwordUser: action.payload,
        erro_login: '',
        message_error: '',
      };
    case MODIFICA_NOME:
      return {
        ...state,

        nameUser: action.payload,
        message_error: '',
      };
    case MODIFICADATA:
      return {
        ...state,
        dataNascUser: action.payload,
      };
    case MODIFICAIDADE:
      return {
        ...state,
        idadeUser: action.payload,
      };
    case MODIFICASEXO:
      return {
        ...state,
        sexo: action.payload,
      };
    case NUMERO:
      return {
        ...state,
        contatoUser: action.payload,
      };
    case ADDFOTO:
      return {
        ...state,
        fotoUser: action.payload,
      };
    case CADASTRO_ERRO:
      return {
        ...state,
        message_error: 'Ops! houve um erro. Verifique todos os campos!',
        loading_cadastro: false,
        isCadastrado: false,
      };
    case 'modificaDescricao':
      return {
        ...state,
        descricaoBusca: action.payload,
      };
    case 'modificaValor':
      return {
        ...state,
        valor: action.payload,
      };
    case 'modificaCidade':
      alert(action.payload + 'reducer');
      return {
        ...state,
        buscandoEm: {cidadeBusca: action.payload},
      };
    case CADASTRO_SUCESSO:
      return {
        ...state,
        message_error: '',
        nome: action.payload,
        senha: '',
        confirme_senha: '',
        loading_cadastro: false,
        isCadastrado: true,
      };
    case USUARIO_ERRO:
      return {
        ...state,
        erro_login: 'Ops! todo mundo erra :/ verifique seus dados',
        loading_login: false,
        isAutenticaded: false,
      };
    case USUARIO_SUCESSO:
      return {
        ...state,
        erro_login: '',
        nome: action.payload.nome,
        loading_login: false,
        isAutenticaded: true,
        email: '',
        senha: '',
      };
    case LOADING_EM_ANDAMENTO:
      return {
        ...state,
        loading_login: true,
      };
    case LOADING_CADASTRO:
      return {
        ...state,
        loading_cadastro: true,
        message_error: '',
      };
    case DESLOGADO:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case CADASTRADO:
      return {
        ...state,
        isCadastrado: false,
      };
    case USER:
      // alert(JSON.stringify(action.payload.buscandoEm.cidadeBusca));
      return {
        ...state,
        emailUser: action.payload.emailb64,
        nameUser: action.payload.nameUser,
        contatoUser: action.payload.contatoUser,
        cargo: action.payload.cargo,
        dataNascUser: action.payload.dataNascUser,
        idadeUser: action.payload.idadeUser,
        sexo: action.payload.sexo,
        cidadeNatal: action.payload.cidadeNatal,
        premmium: action.payload.premmium,
        descricao: action.payload.descricao,
        fotoUser: action.payload.fotoUser,
        buscando: action.payload.buscando,
        fotodeBusca: action.payload.fotodeBusca,
        buscandoEm: action.payload.buscandoEm,
        descricaoBusca: action.payload.descricaoBusca,
        minhasCurtidas: action.payload.minhasCurtidas,
        meusImoveisPublicados: action.payload.meusImoveisPublicados,
        meusFavoritos: action.payload.meusFavoritos,
        fotoUser: action.payload.res,
        oldFind: action.payload.oldFind,
      };
    default:
      return state;
  }
};
