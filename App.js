/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from './src/global_state/store';
import 'react-native-gesture-handler';
import MainNavigator from './src/navigators/MainNavigator';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
