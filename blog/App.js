import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider as BlogProvider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const navigator = createStackNavigator(
  { 
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
  }, {
  initalRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

/**
 * createAppContainer는 component를 반환해준다.
 */
const App = createAppContainer(navigator);

export default () => {
  return (
  <BlogProvider>
    <App />
  </BlogProvider>
  );
};