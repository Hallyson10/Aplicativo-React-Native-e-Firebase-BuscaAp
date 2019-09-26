import React from 'react';
import {FluidNavigator} from 'react-navigation-fluid-transitions';

import VerificationUser from '../Pages/VerificationUser';
import Main from '../Pages/Main';
import Initial from '../Pages/Initial';

// ... outras screen's aqui

export default Navigator = FluidNavigator({
  VerificationUser: {screen: VerificationUser},
  Main: {screen: Main},
  Initial: {screen: Initial},
});
