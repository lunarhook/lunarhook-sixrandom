
var Dimensions = require('Dimensions');
import React, {Component} from 'react';
import {StyleSheet,View,  Text,WebView,Navigator} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
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

var MainPage = React.createClass({
    getInitialState(){
        return{
            selectedTab:'liuyao' // 默认选中的tabBar
        }
    },
    _changebutton(info)
    {
      
      const { navigator} = this.props;
              if (navigator) {
                console.warn()
                  navigator.push({
                      name:'HistoryPage',
                      component:HistoryPage,
                  })
              }
    },
  render(){
    return (
<View style={styles.container}>

  <WebView
          ref={WEBVIEW_REF}
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
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
                        selected={this.state.tab=='liuyao'}  
                        onPress={()=>this.setState({tab:'liuyao'})}  >  
                    </TabNavigator.Item>  
                    <TabNavigator.Item 
                        title="history"  
                        //selected={this.state.tab=='history'}   
                        onPress={ this._changebutton("history")}
                        
                        >

                    </TabNavigator.Item>  
                </TabNavigator>  
             </View>   
    )},
    
});

var styles = StyleSheet.create ({
  container: {
    flex:1
  },
  webSize: {
    width:kWidth,
    height:kHeight-40
  }
});
module.exports=MainPage;  