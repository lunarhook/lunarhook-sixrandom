/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry,StyleSheet,View,  Text} from 'react-native';
import { StackNavigator,TabNavigator,NavigationActions,TabBarBottom } from 'react-navigation';


import MainPage from './src/MainPage';
import SixrandomHistoryPage from './src/SixrandomHistoryPage';
import SixrandomNewPage from './src/SixrandomNewPage';
import SixrandomFullInfoPage from './src/SixrandomFullInfoPage'
import StudentPage from './src/StudentPage'
import SixrandomMainPage from './src/SixrandomMainPage'
import EightrandomNewPage from './src/EightrandomNewPage';
import MyPage from './src/MyPage'



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
  SixrandomHistoryPage: { screen: SixrandomHistoryPage },
  SixrandomNewPage: {screen: SixrandomNewPage},
  SixrandomFullInfoPage: {screen: SixrandomFullInfoPage},
  StudentPage: { screen: StudentPage },
  SixrandomMainPage:{screen:SixrandomMainPage},
  EightrandomNewPage:{screen:EightrandomNewPage},
  MyPage:{screen:MyPage},
});



AppRegistry.registerComponent('sixrandom', () =>sixrandom);
