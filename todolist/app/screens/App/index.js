import { createStackNavigator, createAppContainer, TabNavigator, createBottomTabNavigator } from 'react-navigation';

import Todo from '../Todo'
import ListBook from '../ListBook';
import BookDetail from '../BookDetail';
import routes from '../../constants/routes';

import styles from './styles';

const StackBooks = createStackNavigator({
  ListBook: {
    screen: ListBook,
    navigationOptions: {
      title: routes.BookList.title,
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.headerTitleStyle
    }
  },
  BookDetail: {
    screen: BookDetail,
    navigationOptions: {
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.headerTitleStyle
    }
  }
});

const Tabs = createBottomTabNavigator(
  {
    Todo: {
      screen: Todo,
      navigationOptions: {
        title: routes.Todo.title
      }
    },
    BookList: {
      screen: StackBooks,
      navigationOptions: {
        title: routes.BookList.title
      }
    }
  },
  {
    tabBarOptions: {
      style: styles.tapBarStyle,
      labelStyle: styles.labelStyle
    }
  });

const StackNavigation = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: routes.Home.title
    }
  }
});

const AppContainer = createAppContainer(StackNavigation);

export default AppContainer;
