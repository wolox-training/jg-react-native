import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-navigation';

import configureStore from './redux/store';
import AppScreen from './screens/App';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <AppScreen />
      </Provider>
    )
  }
}

export default App;
