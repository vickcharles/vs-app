import { NavigatorIOSProperties } from 'react-native';
import React from 'react';

import UseLessTextInput from './UseLessTextInput';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './components/Login';
import RequestsList from './components/request/RequestsList';
import Restar from './components/Restar';

const MainNavigator = createStackNavigator({
  Home: { screen: Login },
  Profile: { screen: UseLessTextInput },
  RequestsList: { screen: RequestsList },
  Restar: { screen: Restar },
});

const App = createAppContainer(MainNavigator);

export default App;
