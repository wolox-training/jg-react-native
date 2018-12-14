if(__DEV__) {
  import('./app/config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
import {AppRegistry} from 'react-native';

import App from './app/index.js';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
