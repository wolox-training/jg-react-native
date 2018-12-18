import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './redux/store';
import Screen from './screens';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Screen />
      </Provider>
    );
  }
}

export default App;
