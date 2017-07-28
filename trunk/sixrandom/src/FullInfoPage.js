
var Dimensions = require('Dimensions');
import React, {Component} from 'react';
import {StyleSheet,View,  Text,WebView,Button} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { StackNavigator } from 'react-navigation';

import StorageModule from './StorageModule'

var kWidth = Dimensions.get('window').width;
var kHeight = Dimensions.get('window').height;
var WEBVIEW_REF = 'webview';
var DEFAULT_URL = "./sixrandomfulldetail.html"
class FullinfoPage extends React.Component {
    
    webview: WebView
    static navigationOptions = {
       //headerRight:(<Button title="分享" onPress={ () => ShareModule.Sharetotimeline()}/>),
    title: '详情',
    };
 
  render(){
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>

  <WebView
          ref={webview => this.webview = webview}
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          source={{uri:(DEFAULT_URL)}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          scrollEnabled={true}
          onNavigationStateChange={this.onNavigationStateChange}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          startInLoadingState={true}
          injectedJavaScript="document.addEventListener('message', function(e) {eval(e.data);});"
        />
             </View>    
    )}

onNavigationStateChange = (event) => {
    if (this.webview) {
      //DEFAULT_URL = event.url + this.props.navigation.state.params
      var smsg = "msg('"+this.props.navigation.state.params+"')";
      //alert(smsg)
      this.webview.postMessage(smsg)
      return true;
    }
  };
}

var styles = StyleSheet.create ({
  container: {
    flex:1
  },
    webSize: {
    width:kWidth,
    height:kHeight
  },
    vb_text: {  
    color: '#333333',  
    fontFamily: 'Times',  
    margin: 10,  
    fontSize: 12,         
    textAlign: 'auto',  
    lineHeight: 22,     //行高  
    fontStyle: 'italic',    //设置文字：normal：正常体；italic：斜体  
    fontWeight: 'bold', //设置粗体字，'normal' /*default*/, 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'  
    textDecorationLine: 'underline line-through',//下划线和删除线的样式：['none' /*default*/, 'underline', 'line-through', 'underline line-through'  
  },
   button:{
    height: 40,
    width: 50,
    backgroundColor:'transparent',
   justifyContent:'center',
   borderRadius: 20,
    },
});
module.exports=FullinfoPage;  