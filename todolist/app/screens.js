import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import Todo from './screens/Todo'
import ListBook from './screens/ListBook';

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
