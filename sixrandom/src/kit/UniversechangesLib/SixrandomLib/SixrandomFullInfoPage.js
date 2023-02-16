

var ReactNative = require('react-native');
import React, { Component } from 'react';
import { findNodeHandle, Image, StyleSheet, View, Alert, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { captureRef } from "react-native-view-shot";
import TabNavigator from '@lunarhook/react-native-tab-navigator';  
import { Grid, Accordion, WhiteSpace, WingBlank, List } from '@ant-design/react-native';
import { SixrandomModule } from '../SixrandomLib/SixrandomModule'
import StorageModule from '../../../config/StorageModule'
import IconConfig from '../../../config/IconConfig';
import { StyleConfig, FontStyleConfig } from '../../../config/StyleConfig';
import UserModule from '../../../config/UserModule'
import WechatShare from '../../../config/WechatShare'
import { HistoryArrayGroup } from '../../../config/StorageModule'
import ScreenConfig from '../../../config/ScreenConfig';

let SixrandomFullinfoPagethis = null
class SixrandomFullinfoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      parameter: 'null',
      infogrid: []
    }
    SixrandomFullinfoPagethis = this
  };

  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      // headerRight:(<Button title="分享" onPress={ () => ShareModule.Sharetotimeline() }/>),
      title: RouteConfig["SixrandomFullInfoPage"].name,
      headerRight: () => (
        <TouchableOpacity
          style={{ padding: 10, alignContent: "center", alignItems: "baseline" }}
          //onPress={() => navigate('Search')}
          onPress={() =>  SixrandomFullinfoPagethis.deletethis()}
        >
          {IconConfig.IconDelete}
        </TouchableOpacity>),
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
  async deletethis()
  {
    var rowid = SixrandomFullinfoPagethis.state.rowid 
    console.log("rowid",rowid)
    HistoryArrayGroup.loadid('sixrandom', rowid).then(async (ret) => {
      if(undefined!=ret)
      {
        var Jobj = JSON.parse(ret);
        let T = await UserModule.SyncFileServer("sixrandom", rowid, "")
        if (undefined != T && 2000 == T.code) {
          T.data.forEach(async (element) => {
            filename = element.File
            if (-1 != filename.indexOf(String(rowid)) && true == element.Del) {
              await HistoryArrayGroup.remove('sixrandom', rowid);
            }
          });
        }
        else {
          await HistoryArrayGroup.remove('sixrandom', rowid);
        }
      }
      //this.props.navigation.dispatch(CommonActions.goBack());
      this.props.navigation.goBack()
      if(undefined!=this.props.navigation.state.params.goback)
      {
        this.props.navigation.state.params.goback()
      }

      //this.props.navigation.navigate("SixrandomHistoryPage",{ text: "refresh" })
    })
  }
  componentWillUnmount() {
    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.timer && clearInterval(this.timer);
  }

  refreshlist() {
    const { navigate } = this.props.navigation;
    parameter = this.props.navigation.state.params.url
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
      var kind = __ret.kind
      var rowid = _ret.rowid
      for (var index = 0; index < ggrid.length; index++) {
        var o = {}
        if (undefined != ggrid[index]) {
          var cur = ggrid[index]
          console.log(cur)
          o.myth = cur[0] + " " + cur[1];
          o.sixrandom = cur[2];
          o.tip = cur[3]
          o.change = cur[4];
        }
        else {
          o.myth = "";
          o.sixrandom = "";
          o.tip = ""
          o.change = "";
        }
        console.log(o)
        infogrid.push(o)
      }
      console.log(infogrid)
      SixrandomFullinfoPagethis.setState({
        date: _build, parameter: parameter, infogrid: infogrid, infoext: infoext, infobase: infobase,kind:kind,rowid:rowid
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
            o.tip = cur[3]
            o.change = cur[4];
          }
          else {
            o.myth = "";
            o.sixrandom = "";
            o.tip = ""
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
  rendercolor(item) {
    var c = "#000000"
    if (true) {
      const fire = "#FF0000"
      const Coral = "#FF7F50"
      const gold = "#FFCE00"
      const goldwhite = "#F7BA00"
      const orange = "#ED7F06"
      const red = "#DE4F1F"
      const blue = "#1FA7DE"
      const startblue = "#00C0FF"
      const green = "#13BD7A"
      const claygreen = "#3dd1e0"
      const darkgold = "#AC633D"
      const gray = "#848484"
      const LightPink = "#FFB6C1"
      const black = "#000000"
      const white = "#FFFFFF"
      const ironblack = "#3D1111"
      const stoneblack = "#393939"
      if (-1 != item.indexOf("天医") || -1 != item.indexOf("午火") || -1 != item.indexOf("巳火") || -1 != item.indexOf("朱雀")) {
        c = fire
      }
      if (-1 != item.indexOf("延年")) {
        c = orange
      }
      else if (-1 != item.indexOf("生气")) {
        c = Coral
      }
      else if (-1 != item.indexOf("伏位") || -1 != item.indexOf("申金") || -1 != item.indexOf("酉金") || -1 != item.indexOf("白虎")) {
        c = goldwhite
      }
      else if (-1 != item.indexOf("六煞") || -1 != item.indexOf("寅木") || -1 != item.indexOf("卯木") || -1 != item.indexOf("青龙")) {
        c = green
      }
      else if (-1 != item.indexOf("祸害") || -1 != item.indexOf("螣蛇")) {
        c = claygreen
      }
      else if (-1 != item.indexOf("五鬼")) {
        c = startblue
      }
      else if( -1 != item.indexOf("玄武")){
        //黑色也是水色
        c = ironblack
      }
      else if( -1 != item.indexOf("勾陈")){
        c = stoneblack
      }
      else if (-1 != item.indexOf("绝命") || -1 != item.indexOf("子水") || -1 != item.indexOf("亥水")) {
        c = blue
      }
      else if(-1 != item.indexOf("未土") || -1 != item.indexOf("丑土") || -1 != item.indexOf("辰土") || -1 != item.indexOf("戌土") )
      {
        c = darkgold
      }
    }

    c = c
    return c
  }
  render() {
    const { navigate } = this.props.navigation;
    var jump = false;
    const rwidth = ScreenConfig.__screenW()
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
                  if (index < 9) {
                    var c = this.rendercolor(dataItem.myth)
                    return (
                      <View style={{ flexDirection: 'row', textAlign: 'left' }}>
                        <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, width: rwidth/10,color:c }}>{dataItem.myth.substr(0,3)}</Text>
                        <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, width: rwidth/5 }}>{dataItem.myth.substr(3)}</Text>
                        <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, width: rwidth/5 }}>{dataItem.sixrandom}</Text>
                        <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, width: rwidth/6 }}>{dataItem.tip}</Text>
                        <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, width: rwidth/3 }}>{dataItem.change}</Text>
                      </View>
                    )
                  }
                  else {
                    var c = this.rendercolor(dataItem.myth.substr(0,3))
                    var f = this.rendercolor(dataItem.myth.substr(3))
                    var g = this.rendercolor(dataItem.sixrandom.substr(0,5))
                    var b = this.rendercolor(dataItem.change)
                    return (
                      <View style={{ flexDirection: 'row', textAlign: 'left' }}>
                        <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, width: rwidth/10,color:c }}>{dataItem.myth.substr(0,3)}</Text>
                        <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, width: rwidth/5,color:f }}>{dataItem.myth.substr(3)}</Text>
                        <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, width: rwidth/5,color:g }}>{dataItem.sixrandom.substr(0,5)}</Text>
                        <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, width: rwidth/6 }}>{dataItem.sixrandom.substr(5)}</Text>
                        <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, width: rwidth/3 ,color:b}}>{dataItem.change}</Text>
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