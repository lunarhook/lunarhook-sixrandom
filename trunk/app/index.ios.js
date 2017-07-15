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
import NewPage from '../app/src/NewPage';
import FullInfoPage from '../app/src/FullInfoPage'



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

const sixrandom = StackNavigator({
  MainPage: { screen: MainPage },
  HistoryPage: { screen: HistoryPage },
  NewPage: {screen: NewPage},
  FullInfoPage: {screen: FullInfoPage}
});

AppRegistry.registerComponent('sixrandom', () =>sixrandom);
