

import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Storage from 'react-native-storage';

import { captureRef } from "react-native-view-shot";
import { Grid, Accordion, WhiteSpace, WingBlank, List } from '@ant-design/react-native';
import StorageModule from '../../config/StorageModule'
import ScreenConfig from '../../config/ScreenConfig';
import { StyleConfig, FontStyleConfig } from '../../config/StyleConfig';
import WechatShare from '../../config/WechatShare'
import ziweiModule from './ziweiModule'
import RouteConfig from '../../config/RouteConfig';
const { width, height } = Dimensions.get('window');

var jump = false
let curyear = 0
let ziweiMainPagethis
class ziweiMainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sanchuanarray: "",
      Gstr: "",
    };
    ziweiMainPagethis = this
  };

  componentDidMount() {
    this.timer = setTimeout(
      () => {
        this.refreshlist()
      },
      200
    );
  }
  componentWillUnmount() {
    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.timer && clearInterval(this.timer);
  }

  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    //headerRight:(<Button title="返回" />),
    return {

      title: RouteConfig["ziweiMainPage"].name,
    }

  };




  refreshlist() {
    const { navigate } = this.props.navigation;

    var parameter = this.props.navigation.state.params

    console.log("refreshlist", parameter)
    if (undefined != parameter) {
      var info = null;

      var ret;
      var args = {};
      var match = null;
      var search = decodeURIComponent(parameter.substring(1));
      var reg = /(?:([^&]+)=([^&]+))/g;
      while ((match = reg.exec(search)) !== null) {
        args[match[1]] = match[2];
      }
      info = args
      //this.build(Gstr)
      var ziweRet = ziweiModule.calc(info.Date, info.sex)
      var gong = new Array()
      gong.push(ziweRet.gong[0])
      gong.push(ziweRet.gong[1])
      gong.push(ziweRet.gong[2])
      gong.push(ziweRet.gong[3])
      gong.push(ziweRet.gong[11])
      gong.push(" ")
      gong.push(" ")
      gong.push(ziweRet.gong[4])
      gong.push(ziweRet.gong[10])
      gong.push(" ")
      gong.push(" ")
      gong.push(ziweRet.gong[5])
      gong.push(ziweRet.gong[9])
      gong.push(ziweRet.gong[8])
      gong.push(ziweRet.gong[7])
      gong.push(ziweRet.gong[6])

      this.setState({
        zhihua: ziweRet.zhihua,
        gong: gong,
        ju: ziweRet.ju,
        geju: ziweRet.geju,
        gejudetail: ziweRet.gejudetail
      })
    }
    else {
      StorageModule.load({
        key: "lastziwei",
      }).then(ret => {
        var ziweRet = ziweiModule.calc(ret.Date, ret.sex)
        this.setState({
          zhihua: ziweRet.zhihua,
          gong: ziweRet.gong,
          ju: ziweRet.ju,
          geju: ziweRet.geju,
          gejudetail: ziweRet.gejudetail
        })
      }).catch(err => {
        if (false == jump) {
          this.begin('ziweiNewPage')
          jump = true
        }
      })
    }
  }
  keyExtractor = (item, index) => index.toString()
  renderItem(item) {
    return (
      <Text>{item.item}</Text>
    );
  }

  render() {
    const { navigate } = this.props.navigation;

    if (undefined != this.state.gong) {
      return (
        <View style={StyleConfig.container} >
          <ScrollView ref="location" style={{ backgroundColor: '#ffffff' }}>
            <View style={StyleConfig.container} >
              <WingBlank size="lg">
                <WhiteSpace size="xl" />
                <Grid
                  data={this.state.gong}
                  columnNum={4}
                  hasLine={true}
                  renderItem={(el, index) => {
                    return (
                      <View style={StyleConfig.container}>
                        <Text>{el}</Text>
                      </View>)
                  }}
                />
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                {
                  (WechatShare.shareimg(this.state.shareimg))
                }
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
              </WingBlank>
            </View>
          </ScrollView>
          {WechatShare.shareRetBar(WechatShare, this, "紫薇排盘")}
        </View>
      )
    }
    else {
      return (<View></View>)
    }

  
  }
};

var styles = StyleSheet.create({
  gridfix:
  {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    textAlignVertical: "bottom",
  },
  grid: {
    flex: 1,
    fontSize: FontStyleConfig.getFontApplySize() + 12,
    height: 100,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlignVertical: "top",
  },
});
module.exports = ziweiMainPage;  