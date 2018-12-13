import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator, createAppContainer, TabNavigator, createBottomTabNavigator } from 'react-navigation';

import Todo from '../Todo'
import ListBook from '../ListBook';

const Tabs = createBottomTabNavigator({
  Todo: {
    screen: Todo
  },
  ListBook: {
    screen: ListBook
  }
});

const StackNavigation = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'Training App'
    }
  }
});

const AppContainer = createAppContainer(StackNavigation);

export default AppContainer;
