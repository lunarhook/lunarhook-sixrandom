/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry,Navigator,StyleSheet,View,  Text} from 'react-native';
import { StackNavigator } from 'react-navigation';


import MainPage from './src/MainPage';
import HistoryPage from './src/HistoryPage';
import NewPage from './src/NewPage';
import FullInfoPage from './src/FullInfoPage'
//import HistoryInfoPage from './src/HistoryInfoPage'
import SixrandomMainPage from './src/SixrandomMainPage'
import MyPage from './src/MyPage'



class splash extends Component {
  
  render() {
    return (
      <NewPage/>
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
  FullInfoPage: {screen: FullInfoPage},
  //HistoryInfoPage: { screen: HistoryInfoPage },
  SixrandomMainPage:{screen:SixrandomMainPage},
  MyPage:{screen:MyPage},
});

AppRegistry.registerComponent('sixrandom', () =>sixrandom);
