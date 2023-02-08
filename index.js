/**
 * @format
 */
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

 function AppWithNavigationContainer() {
  return (
    <NavigationContainer>
        <App/>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => AppWithNavigationContainer);