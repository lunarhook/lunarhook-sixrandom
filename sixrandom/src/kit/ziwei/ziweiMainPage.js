

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
      gong.push(ziweRet.gong[5].split(","))
      gong.push(ziweRet.gong[6].split(","))
      gong.push(ziweRet.gong[7].split(","))
      gong.push(ziweRet.gong[8].split(","))
      gong.push(ziweRet.gong[4].split(","))
      gong.push(ziweRet.ju + "\n\t" + ziweRet.zhihua)
      gong.push(" ")
      gong.push(ziweRet.gong[9].split(","))
      gong.push(ziweRet.gong[3].split(","))
      gong.push(" ")
      gong.push(" ")
      gong.push(ziweRet.gong[10].split(","))
      gong.push(ziweRet.gong[2].split(","))
      gong.push(ziweRet.gong[1].split(","))
      gong.push(ziweRet.gong[0].split(","))
      gong.push(ziweRet.gong[11].split(","))

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
  getShensha(str)
  {
    var s = str.split(" ")
    var itemArr = s.map(function (_, i, arr) {
      return i;
    }).map((_i, index) => {
      if (undefined != s[index] && "" != s[index]) {
        var c= "black"
        if("权" == s[index]) c = "red"
        if("禄" == s[index]) c = "green"
        if("科" == s[index]) c = "blue"
        if("忌" == s[index]) c = "darkred"
        return (<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 11, flexDirection: "column", width: 12 ,color:c}}>{s[index]}</Text>)
      }
    })
    return itemArr

  }
  getColor(king) {
    if ("甲" == king || "乙" == king || "寅" == king || "卯" == king) {
      return (<Text style={ { fontSize: FontStyleConfig.getFontApplySize() + 13,color: 'green' }}>{king}</Text>)
    }
    if ("丙" == king || "丁" == king || "午" == king || "巳" == king) {
      return (<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 13,color: 'red' }}>{king}</Text>)
    }
    if ("戊" == king || "己" == king || "丑" == king || "未" == king || "辰" == king || "戌" == king) {
      return (<Text style={ { fontSize: FontStyleConfig.getFontApplySize() + 13,color: 'brown' }}>{king}</Text>)
    }
    if ("庚" == king || "辛" == king || "申" == king || "酉" == king) {
      return (<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 13,color: 'gold' }}>{king}</Text>)
    }
    if ("癸" == king || "壬" == king || "子" == king || "亥" == king) {
      return (<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 13,color: 'blue' }}>{king}</Text>)
    }
    if (undefined != king && king.toString().length > 1) {
      return king
    }

    return (<Text style={{fontSize: FontStyleConfig.getFontApplySize()}}>{king}</Text>)
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
                  hasLine={false}
                  itemStyle={{ width: (width - 30) / 4, height: (height - 100) / 5 }}
                  renderItem={(el, index) => {
                    var bs = 0.2
                    var s = 1

                    if (-1 != [5, 6, 9, 10].indexOf(index)) {
                      bs = 0
                    }
                    if (-1 != [5].indexOf(index)) {
                      s = 2
                      return (
                        <View style={{ borderWidth: bs, width: s * (width - 30) / 4, height: s * (height - 100) / 5, flex: 1, }}>
                          <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 11 }}>{el}</Text>
                        </View>)
                    }
                    else if (-1 != [6, 9, 10].indexOf(index)) {
                      s = 0
                      return (
                        <View style={{ borderWidth: bs, width: s * (width - 30) / 4, height: s * (height - 100) / 5, flex: 1, }}>
                        </View>)
                    } else {
                      var ds = new Array()
                      ds = ds.concat(el)
                      if ("[身宫]" == el[3]) {
                        el[3] = el[3] + el[4]
                        ds = ds.splice(5, ds.length - 2)
                      }
                      else {
                        ds = ds.splice(4, ds.length - 2)
                      }
                      delete ds[ds.length - 1]
                      var itemArr = ds.map(function (_, i, arr) {
                        return i;
                      }).map((_i, index) => {
                        if (undefined != ds[index] && "" != ds[index]) {
                          return (<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 11, flexDirection: "column", width: 12 }}>{this.getShensha(ds[index])}</Text>)
                        }
                      })
                      return (
                        <View style={{ borderWidth: bs, width: s * (width - 30) / 4, height: s * (height - 100) / 5, flex: 1, }}>

                          <View style={{ bottom: -s * (height - 100) / 5 + 30, justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                            <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 11 ,color:"red"}}>{el[2]}</Text>
                            <Text>{this.getColor(el[1][0])}{this.getColor(el[1][1])}</Text>
                          </View>
                          <View style={{ bottom: -s * (height - 100) / 5 + 80, justifyContent: "center", alignItems: 'center', }}>
                            <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14 }}>{el[3]}</Text>
                          </View>
                          <View style={{ bottom: -s * (height - 100) / 5 + 70, justifyContent: "flex-start", alignItems: 'flex-start', }}>
                            <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 13 }}>{el[el.length - 1]}</Text>
                          </View>
                          <View style={{ top: -55, flexWrap: 'wrap', flexDirection: 'row', justifyContent: "flex-start" }}>
                            {itemArr}

                          </View>
                        </View>)
                    }

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