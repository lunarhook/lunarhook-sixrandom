/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry,Navigator,StyleSheet,View,  Text} from 'react-native';
import { StackNavigator } from 'react-navigation';


import MainPage from '../app/src/MainPage';
import HistoryPage from '../app/src/HistoryPage';



class splash extends Component {
  
  render() {
    return (
      <MainPage/>
        )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const app = StackNavigator({
  MainPage: { screen: MainPage },
  HistoryPage: { screen: HistoryPage },
});

AppRegistry.registerComponent('app', () => app);
