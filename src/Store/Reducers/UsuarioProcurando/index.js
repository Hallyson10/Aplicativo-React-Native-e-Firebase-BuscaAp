import {USERFIND} from '../types';
const INITIAL_STATE = {
  userFind: [],
};

export default UsuarioProcurando = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERFIND:
      //alert('ok' + action.payload);
      return {
        ...state,
        userFind: state.userFind.concat(action.payload),
      };
    default:
      return state;
  }
};
