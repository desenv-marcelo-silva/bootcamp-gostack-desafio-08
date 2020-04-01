import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from './Routes';

import store from './store';

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Routes />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
