
var Dimensions = require('Dimensions');
import React, {Component} from 'react';
import {StyleSheet,View, Button,Text,WebView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HistoryPage from './HistoryPage';
import StorageModule from './StorageModule'

var kWidth = Dimensions.get('window').width;
var kHeight = Dimensions.get('window').height;
var WEBVIEW_REF = 'webview';
var DEFAULT_URL = 'file:///Applications/svn/sixrandom/sixrandomsimple.html';

class MainPage extends React.Component {

  static navigationOptions = {
    headerRight:(<Button title="分享" />),
    title: '六爻',
  };
   
  render(){
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>

  <WebView
          ref={WEBVIEW_REF}
          automaticallyAdjustContentInsets={false}
          //style={styles.webView}
          source={{uri: DEFAULT_URL}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          onNavigationStateChange={this.onNavigationStateChange}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          startInLoadingState={true}
        />
      <TabNavigator tabBarStyle={{height:40}} style={{flex:1}}>  
                  <TabNavigator.Item  
                        title="liuyao"  
                        //selected={this.state.tab=='liuyao'}  
                        onPress={() => navigate('HistoryPage')}  >  
                    </TabNavigator.Item>  
                    <TabNavigator.Item 
                        title="history"  
                        //selected={this.state.tab=='history'}   
                        onPress={ 
                            () => navigate('HistoryPage') 
                          }>
                    </TabNavigator.Item>  
                </TabNavigator>  
             </View>   
    )}
    
}



var styles = StyleSheet.create ({
  container: {
    flex:1
  },
  webSize: {
    width:kWidth,
    height:kHeight
  }
});
module.exports=MainPage;  