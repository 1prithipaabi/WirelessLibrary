import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import BookTransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';

export default class App extends React.Component {
  render(){
  return (
    <AppContainer
    
    />
  );
  }
}

var TabNavigator = createBottomTabNavigator({
  Transaction: {screen:BookTransactionScreen},
  Search: {screen: SearchScreen}
})
const Appcontainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
