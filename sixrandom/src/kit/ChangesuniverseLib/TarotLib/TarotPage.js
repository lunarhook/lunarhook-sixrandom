

import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, ImageBackground, Text, ScrollView, FlatList } from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank, List } from '@ant-design/react-native';
import TabNavigator from 'react-native-tab-navigator';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';
import { captureRef } from "react-native-view-shot";
import RouteConfig from '../../../config/RouteConfig'
import ScreenConfig from '../../../config/ScreenConfig';
import StyleConfig from '../../../config/StyleConfig';
import TarotModule from './TarotModule'
import WechatShare from '../../../config/WechatShare'

let TarotPagethis = ""
class TarotPage extends React.Component {
  constructor(props) {
    super(props);
    var ret = new Array()
    var card = require('../../../../img/holy.png');
    ret[0] = ret[1] = ret[2] = { name: "未知", align: "正位" ,img:card};
    this.state = {
      ret: ret,
      tip: "",
      pick: 0
    }
    TarotPagethis = this
  }

  UNSAFE_componentWillMount() {
    this.init();
  }
  init() {
    var ret = new Array()
    var card = require('../../../../img/holy.png');
    ret[0] = ret[1] = ret[2] = { name: "未知", align: "正位" ,img:card};

    this.setState({
      ret: ret,
      pick: 0,
      tip: "",
    })
  }

  clear() {
    this.init();
    this.props.navigation.setParams({ TarotState: 'off' })
  }

  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {

      title: RouteConfig["TarotPage"].name,
    }
  };

  result() {
    var ret = TarotModule.holy();
    this.props.navigation.setParams({ TarotState: 'on' })
    var tip = new Array()
    tip[0] = { name: "过去", align: "" };
    tip[1] = { name: "现在", align: "" };
    tip[2] = { name: "将来", align: "" };
    this.setState({ ret: ret, tip: tip, pick: 1 })
  }
  keyExtractor = (item, index) => index.toString()

  renderItem(item) {
    var it = item.item
    console.log("renderItem",item.item)
    var tran = [{scale:1}]
    var postion=""
    if (undefined == TarotPagethis.state.pick  || 1 == TarotPagethis.state.pick ) {
      postion = item.item.align
    }
    if (item.item.align == "逆位") {
      tran = [{scale:-1}]
    }
    return (
      <View >
        <Text></Text>
        <Text></Text>
        <ImageBackground
          style={styles.Tarotcard}
          source={it.img}
          imageStyle={{ borderRadius: 10 ,transform: tran}}
        >
          <Text></Text>
          <Text></Text>

        </ImageBackground>
        <TouchableHighlight>
        <View style={styles.indexcard}>
        <Text >{it.name}</Text>
        <Text >{postion}</Text>
        </View>
          </TouchableHighlight>
      </View>
    );
  }
  renderItemtip(item) {
    var it = item.item
    if("未知"!=it.name)
    {
      return (
        
        <View style={styles.list}>
          <WhiteSpace size="xl" />
            <Text >{it.name}:{it.key}</Text>
            <Text></Text>
            <Text >{it.name}{it.align}:{"正位"==it.align?it.position:it.negative}</Text>
        </View>
      );
    }
    return(  
        
        <View style={styles.list}>
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <Text ></Text>
            <Text></Text>
            <Text ></Text>
        </View>
      )
    
  }

  switchbar() {
    const { navigate } = this.props.navigation;
    if (this.state.pick == 0) {
      return (
        <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight() , backgroundColor: '#ffffff',}}>
          <TabNavigator.Item
            title={RouteConfig["BeginImage"].name}
            renderIcon={() => RouteConfig["BeginImage"].icon}
            onPress={() => this.result()}
            titleStyle={StyleConfig.menufont}>
          </TabNavigator.Item>
        </TabNavigator>

      )
    }
    else if ('on' == this.props.navigation.getParam('TarotState', 'off') && this.state.pick != 0) {
      return (
        <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight() , backgroundColor: '#ffffff',}}>
          <TabNavigator.Item
            title={RouteConfig["RefreshImage"].name}
            renderIcon={() => RouteConfig["RefreshImage"].icon}
            onPress={() => this.clear()}
            titleStyle={StyleConfig.menufont}>
          </TabNavigator.Item>
          <TabNavigator.Item
            title={RouteConfig["ScreenImage"].name}
            renderIcon={() => RouteConfig["ScreenImage"].icon}
            onPress={() => { this.setState({ shareimg: true }), WechatShare.snapshot(this.refs['location'], "塔罗牌神圣三角", this) }}
            titleStyle={StyleConfig.menufont}>
          </TabNavigator.Item>
        </TabNavigator>
      )
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={[styles.container,{height:ScreenConfig.__screenH()}]}>
       
        <ScrollView ref="location">
        <ImageBackground source={require('../../../../img/tarotbg.jpg')} style={{width: '100%',backgroundColor: "transparent",resizeMode:"repeat"}}>
         
         <View style={styles.container} >
          
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <FlatList
              data={this.state.ret}
              extraData={this.state}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              numColumns={3}
              columnWrapperStyle={{ justifyContent: 'space-around', alignItems: 'stretch' }}

            />


            <Text></Text>
            <FlatList
              data={this.state.ret}
              extraData={this.state}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItemtip}
            />
            
            <WhiteSpace size="xl" />
            {
              (WechatShare.shareimg(this.state.shareimg))
            }

            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
          </View>
          </ImageBackground>
        </ScrollView>
        
        {this.switchbar()}

      </View>
    )
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Tarotcard: {
    width: 90,
    height: 145,
    opacity: 60,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
    alignItems: 'center',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    //paddingTop:5
  },
  index:
  {
    lineHeight: 30,
    textAlign: 'center',
    fontSize: 15,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
    alignItems: 'center',

  },
  indexcard:
  {
    color: 'gold',
    lineHeight: 30,
    textAlign: 'center',
    fontSize: 12,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
    alignItems: 'center',
    fontWeight: 'bold',
  },

  list: {
    color: '#000000',
    marginLeft: 10,
    paddingLeft: 20,
    marginRight: 10,
    paddingRight: 20,
    //borderRadius: 4,
    //justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
  },
});
module.exports = TarotPage;  