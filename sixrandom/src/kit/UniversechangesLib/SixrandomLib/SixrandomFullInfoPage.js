

var ReactNative = require('react-native');
import React, { Component } from 'react';
import { findNodeHandle, Image, StyleSheet, View, Alert, Text, Dimensions, FlatList, ScrollView } from 'react-native';
import { captureRef } from "react-native-view-shot";
import TabNavigator from 'react-native-tab-navigator';
import { Grid, Accordion, WhiteSpace, WingBlank, List } from '@ant-design/react-native';
import { SixrandomModule } from '../SixrandomLib/SixrandomModule'
import StorageModule from '../../../config/StorageModule'
import ScreenConfig from '../../../config/ScreenConfig';
import { StyleConfig, FontStyleConfig } from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'

class SixrandomFullinfoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      parameter: 'null',
      infogrid: []
    }
  };

  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      // headerRight:(<Button title="分享" onPress={ () => ShareModule.Sharetotimeline() }/>),
      title: RouteConfig["SixrandomFullInfoPage"].name,
    }
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

  refreshlist() {
    const { navigate } = this.props.navigation;
    parameter = this.props.navigation.state.params
    //console.log("refreshlist()",parameter)
    if ("last" != parameter) {
      var _ret = SixrandomModule.build(parameter);
      var __ret = SixrandomModule.get_random_draw()
      //console.log("ret2",__ret)
      var _build = __ret._build
      var infogrid = new Array()
      var ggrid = __ret.infogrid
      var infoext = __ret.infoext
      var infobase = __ret.infobase
      for (var index = 0; index < ggrid.length; index++) {
        var o = {}
        if (undefined != ggrid[index]) {
          var cur = ggrid[index]
          console.log(cur)
          o.myth = cur[0] + " " + cur[1];
          o.sixrandom = cur[2];
          o.change = cur[3];
        }
        else {
          o.myth = "";
          o.sixrandom = "";
          o.change = "";
        }
        console.log(o)
        infogrid.push(o)
      }
      console.log(infogrid)
      this.setState({
        date: _build, parameter: parameter, infogrid: infogrid, infoext: infoext, infobase: infobase
      });
    }
    else {
      StorageModule.load({
        key: "last",
      }).then(ret => {
        randArray = ret
        var date = new Date(Number(randArray[7]))
        var lunar = ""
        for (index = 1; index < 7; index++) {
          lunar = lunar + (randArray[index]).toString()
        }
        var question = randArray[0]
        var parameter = "?date=" + date + "&lunar=" + lunar + "&question=" + question
        var _ret = SixrandomModule.build(parameter);
        //console.log("ret1",_ret)
        var __ret = SixrandomModule.get_random_draw()
        var _build = __ret._build
        var infogrid = new Array()
        var ggrid = __ret.infogrid
        var infoext = __ret.infoext
        var infobase = __ret.infobase
        for (var index = 0; index < ggrid.length; index++) {
          var o = {}
          if (undefined != ggrid[index]) {
            var cur = ggrid[index]
            console.log(cur)
            o.myth = cur[0] + " " + cur[1];
            o.sixrandom = cur[2];
            o.change = cur[3];
          }
          else {
            o.myth = "";
            o.sixrandom = "";
            o.change = "";
          }
          console.log(o)
          infogrid.push(o)
        }
        console.log(infogrid)
        this.setState({
          date: _build, parameter: parameter, infogrid: infogrid, infoext: infoext, infobase: infobase
        });
      }).catch(err => {
        if (false == jump) {
          this.begin('NewPage')
          jump = true
        }
      })
    }
  }
  renderItem(item) {
    return (
      <View style={styles.list}>
        <Text style={[{ fontSize: FontStyleConfig.getFontApplySize() + 14 }, styles.rowhigth]}>{item.item}</Text>
      </View>
    );
  }
  keyExtractor = (item, index) => index.toString()
  render() {
    const { navigate } = this.props.navigation;
    jump = false;
    return (
      <View style={styles.container} >
        <ScrollView ref='location' style={{ backgroundColor: '#ffffff' }}>
          <View style={styles.container} >
            <View style={styles.container} >
              <FlatList
                data={this.state.infobase}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
              />
            </View>
            <WingBlank>
              <Grid
                data={this.state.infogrid}
                columnNum={1}
                hasLine={false}
                itemStyle={{ height: 20 }}
                renderItem={(dataItem, index) => {
                  if (index < 8) {
                    return (
                      <View style={{ flexDirection: 'row', textAlign: 'left' }}>
                        <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, width: 100 }}>{dataItem.myth}</Text>
                        <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, width: 120 }}>{dataItem.sixrandom}</Text>
                        <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, width: 120 }}>{dataItem.change}</Text>
                      </View>
                    )
                  }
                  else {
                    return (
                      <View style={{ flexDirection: 'row', textAlign: 'left' }}>
                        <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, width: 100 }}>{dataItem.myth}</Text>
                        <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, width: 120 }}>{dataItem.sixrandom}</Text>
                        <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, width: 120 }}>{dataItem.change}</Text>
                      </View>
                    )
                  }
                }
                }
              /></WingBlank>
            <View style={styles.container} >
              <FlatList
                data={this.state.infoext}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
              />
            </View>
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
        </ScrollView>
        {WechatShare.shareRetBar(WechatShare, this,  RouteConfig["SixrandomFullInfoPage"].name)}
      </View>
    )
  }

}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  rowhigth: {
    lineHeight: 20,
  },
  list: {
    //lineHigeht:25,
    //height:25,
    //borderWidth:1,
    marginLeft: 5,
    paddingLeft: 5,
    marginRight: 5,
    paddingRight: 5,
    //borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    //textAlign:'center', 
    //textDecorationLine:'underline'
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    //flexDirection: 'row',
  },
});
module.exports = SixrandomFullinfoPage;  