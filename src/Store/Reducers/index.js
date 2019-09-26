import {combineReducers} from 'redux';

import thunk from 'redux-thunk';

import Profile from './Usuario/Profile';
import UsuarioProcurando from './UsuarioProcurando/index';
import FilterFind from './FilterFind/index';
import Properties from './Vagas/PropertiesVagas';
export default combineReducers({
  Profile: Profile,
  UsersFind: UsuarioProcurando,
  FilterFind: FilterFind,
  Properties: Properties,
});
