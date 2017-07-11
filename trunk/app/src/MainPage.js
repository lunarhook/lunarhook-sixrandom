
var Dimensions = require('Dimensions');
import React, {Component} from 'react';
import {StyleSheet,View,  Text,WebView} from 'react-native';


var kWidth = Dimensions.get('window').width;
var kHeight = Dimensions.get('window').height;
var WEBVIEW_REF = 'webview';
var DEFAULT_URL = 'file:///Applications/svn/sixrandom/sixrandomsimple.html';

var MainPage = React.createClass({
  render(){
    return (
      <View style={styles.container}>
        <WebView injectedJavaScript={alert("hello")}
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
      </View>
    );
  },
});

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