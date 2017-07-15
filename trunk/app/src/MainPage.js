
var Dimensions = require('Dimensions');
import React, {Component} from 'react';
import {StyleSheet,View, Button,TouchableOpacity,Text,WebView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HistoryPage from './HistoryPage';
import StorageModule from './StorageModule'
import NewPage from './NewPage';
import FullInfoPage from './FullInfoPage';

var kWidth = Dimensions.get('window').width;
var kHeight = Dimensions.get('window').height;
var WEBVIEW_REF = 'webview';
var DEFAULT_URL = "../../sixrandomsimple.html";

class MainPage extends React.Component {

  static navigationOptions = {
    headerRight:(<Button title="分享" />),
    title: '卦象',
  };
   
   
  render(){
    var parameter = "?date=Mon Jul 10 2017 23:43:54 GMT+0800 (CST)&lunar=123123";
    DEFAULT_URL = DEFAULT_URL + this.props.navigation.state.params
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
        <TouchableOpacity style={styles.button} onPress={ () => navigate('FullInfoPage',parameter) }>
          
        <Text style={styles.textstyle}
        >
          详细   
        </Text>
        </TouchableOpacity>
      <TabNavigator tabBarStyle={{height:40}} style={{flex:1}}>  
                  <TabNavigator.Item
                        title="取卦"  
                        //   
                        //selected={this.state.tab=='liuyao'}  
                        onPress={() => navigate('NewPage')}  
                        titleStyle={styles.menufont}>  
                    </TabNavigator.Item>  
                    <TabNavigator.Item 
                        title="历史"  
                        //selected={this.state.tab=='history'}   
                        onPress={ 
                            () => navigate('HistoryPage') 
                          }titleStyle={styles.menufont}>  
                        
                    </TabNavigator.Item>  
                </TabNavigator>  
                
             </View>   
    )}
    
}



var styles = StyleSheet.create ({
  container: {
    flex:1,
  },
  menufont:{
    fontSize:15,
    color: '#333333', 
    height:25
  },
  webSize: {
    width:kWidth,
    height:kHeight
  },
   button:{
    height: 40,
    width: 50,
    backgroundColor:'transparent',
   justifyContent:'center',
   borderRadius: 20,
    },
});
module.exports=MainPage;  