
var Dimensions = require('Dimensions');
import React, {Component} from 'react';
import {StyleSheet,View,  Text,WebView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HistoryPage from './HistoryPage';

var storage = new Storage({
	// maximum capacity, default 1000 
	size: 1000,

	// Use AsyncStorage for RN, or window.localStorage for web.
	// If not set, data would be lost after reload.
	storageBackend: AsyncStorage,
	
	// expire time, default 1 day(1000 * 3600 * 24 milliseconds).
	// can be null, which means never expire.
	defaultExpires: 1000 * 3600 * 24,
	
	// cache data in the memory. default is true.
	enableCache: true,
	
	// if data was not found in storage or expired,
	// the corresponding sync method will be invoked and return 
	// the latest data.
	sync : {
		// we'll talk about the details later.
	}
})	
var kWidth = Dimensions.get('window').width;
var kHeight = Dimensions.get('window').height;
var WEBVIEW_REF = 'webview';
var DEFAULT_URL = 'file:///Applications/svn/sixrandom/sixrandomsimple.html';

class MainPage extends React.Component {

  static navigationOptions = {
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