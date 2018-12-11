import {AppRegistry} from 'react-native';

import App from './app/index.js';
import {name as appName} from './app.json';
import configReactotron from './app/config/ReactotronConfig';

if(__DEV__) {
  configReactotron();
}

AppRegistry.registerComponent(appName, () => App);
