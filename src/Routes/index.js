import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import {View} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Icon} from 'react-native-material-ui';
import Icone from 'react-native-vector-icons/FontAwesome5';
import Initial from '../Pages/Initial';
import Login from '../Pages/Register/Login';
import Register from '../Pages/Register/Register';
import RegisterVacance from '../Pages/RegisterVacance/RegisterVacance';
import Main from '../Pages/Main';
import Profile from '../Pages/UserProfile';
import FrontProfileUser from '../Components/FrontProfileUser/index';
import SubPageSubmit from '../Pages/Register/SubPageSubmit';
import SubPageInfo from '../Pages/Register/SubPageInfo';
import ProxRegister from '../Components/MainComponents/ProxRegister';
import AddPhoto from '../Pages/Register/AddPhoto';
import VerificationUser from '../Pages/VerificationUser';
import ConfirmEmail from '../Pages/VerifyEmail/ConfirmEmail';
import UsersFind from '../Pages/UsersFind/index';
import Mapi from '../Components/MainComponents/Map';
import MapFind from '../Components/SubComponents/MapFind';
import EditFind from '../Components/UsersFind/EditFind';
import Dialog from '../Components/Register/Dialog';
import SelectPhotos from '../Components/RegisterVagas/SelectPhotos';
import TestMap from '../Components/SubComponents/TestMap';
import TesteResizer from '../Pages/TesteResizer';
import AllUsersFind from '../Pages/AllUsersFind';
import {FluidNavigator} from 'react-navigation-fluid-transitions';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';
import Configuration from '../Pages/ConfigurationProfile/index';

const Nav = createMaterialBottomTabNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        tabBarLabel: 'Busca',
        tabBarIcon: ({tintColor}) => (
          <Icone name="home" size={22} color="#694fad" />
        ),
        tabBarOptions: {
          showIcon: true,
        },
      },
    },
    RegisterVacance: {
      screen: RegisterVacance,
      navigationOptions: {
        tabBarLabel: 'Publicar',
        tabBarIcon: ({tintColor}) => (
          <Icone name="plus-square" size={26} color="#694fad" />
        ),
        tabBarOptions: {
          showIcon: true,
        },
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Meu Perfil',
        tabBarIcon: ({tintColor}) => (
          <Icon name="person" size={28} color="#694fad" />
        ),
        tabBarOptions: {
          showIcon: true,
        },
      },
    },
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
    activeColor: '#694fad',
    inactiveColor: '#694fad',
    shifting: true,
    barStyle: {backgroundColor: '#f0edf6'},
    keyboardHidesTabBar: true,
  },
);
const select = createStackNavigator({SelectPhotos: SelectPhotos});
const Routes = createStackNavigator(
  {
    Nav: Nav,
    ConfirmEmail: {screen: ConfirmEmail},
    RegisterVacance: RegisterVacance,
    Map: {screen: Mapi},
    EditFind: EditFind,
    TesteResizer: TesteResizer,
    UsersFind: {screen: UsersFind},
    Configuration: Configuration,
    MapFind: MapFind,
    FrontProfileUser: FrontProfileUser,
    AllUsersFind: AllUsersFind,
    teste: select,
  },
  {
    headerMode: 'none',
    headerStyle: {
      backgroundColor: '#7D44FF',
    },
  },
);

const Registro = createStackNavigator(
  {
    Initial: {screen: Initial},
    Login: {screen: Login},
    Register: {screen: Register},
    ProxRegister: {screen: ProxRegister},
    SubPageSubmit: {screen: SubPageSubmit},
    SubPageInfo: {screen: SubPageInfo},
    AddPhoto: {screen: AddPhoto},
    Dialog: {
      screen: Dialog,
      navigationOptions: {
        tabBarLabel: 'Publicar',
        tabBarIcon: ({tintColor}) => (
          <Icone name="plus-square" size={26} color="#694fad" />
        ),
        tabBarOptions: {
          showIcon: true,
        },
      },
    },
  },
  {
    mode: 'screen',
    headerMode: 'none', //float, none, screen
  },
);

export default createAppContainer(
  createSwitchNavigator({
    VerificationUser: VerificationUser,
    Registro: Registro,
    Routes: Routes,
  }),
);
