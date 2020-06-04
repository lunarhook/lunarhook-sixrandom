
import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, RefreshControl, FlatList, NativeModules } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Grid, Accordion, WhiteSpace } from '@ant-design/react-native';
import { Button, Drawer, List } from '@ant-design/react-native';
import QIndexPage from './QDateBase/QIndexPage'
import ScreenConfig from '../config/ScreenConfig';
import { StyleConfig, FontStyleConfig } from '../config/StyleConfig';
import IconConfig from '../config/IconConfig'

import WechatShare from '../config/WechatShare'

class DetailBookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateMeng: [],
      datahistory: [],
      keyindex: 0
    };
  };
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      title: navigation.getParam('title', 'A Nested Details Screen'),
    }
  };
  render() {
    const { navigate } = this.props.navigation;
    if (undefined != this.props.navigation.state.params && "" != this.props.navigation.state.params.text) {
      var Qindex = this.props.navigation.state.params.text;
      this.props.navigation.state.params.text = ""
      var Q = RouteConfig[Qindex]
      this.props.navigation.setParams({ title: Q.titlename })
      var NativePlumber = NativeModules.NativePlumber;
      NativePlumber.PlumberRouting(Q.titlename, "", "", "")
      var x = QIndexPage.GetBookType(Q.titlename)
      if (x.length === 1) {
        ScreenConfig.DeviceToast("资料未开放")
        this.props.navigation.goBack()
        return (<View></View>)
      }
      this.setState({ dateMeng: x })
      return (<View></View>)
    }
    var constMeng = new Array()
    var alignTextCenter = false
    if (this.state.dateMeng.length < 1) {
      return (<View></View>)
    }
    if (undefined != this.state.dateMeng[0].center && true == this.state.dateMeng[0].center) {
      alignTextCenter = true
    }
    for (var key in this.state.dateMeng) {
      constMeng[key] = this.state.dateMeng[key]
    }
    if (this.state.keyindex < 0) {
      this.setState({ keyindex: constMeng.length - 1 })
      return (<View />)
    }
    if (this.state.keyindex >= constMeng.length) {
      this.setState({ keyindex: 0 })
      return (<View />)
    }


    itemArr = constMeng.map(function (_, i, arr) {
      return i;
    })
      .map((_i, index) => {

        if (index === 0) {
          return (
            <List.Item
              key={index}
              multipleLine
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 20 }}>{undefined != constMeng[index].icon ? constMeng[index].icon : ""}{constMeng[index].name}</Text>
                <Button
                  type="primary"
                  size="small"
                  onPress={() => this.drawer.closeDrawer()}
                >
                  {"返回"}
                </Button>
              </View>
            </List.Item>
          );
        }
        return (

          <List.Item
            key={index}
          >

            <Button
              style={{
                justifyContent: "center",
                alignItems: 'flex-start',
                alignContent: "center",

              }}
              onPress={() => { this.setState({ keyindex: index }), this.drawer.closeDrawer() }}
            >
              <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 15 }}>{undefined != constMeng[index].icon ? constMeng[index].icon : ""}{constMeng[index].name}{index == this.state.keyindex ? IconConfig.IconStar : ""}</Text>
            </Button>
          </List.Item>
        );
      });

    const sidebar = (
      <ScrollView style={[styles.container]}>
        <List>{itemArr}</List>
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
      </ScrollView>
    );
    var curMeng = new Array()
    curMeng.push(constMeng[this.state.keyindex].name)
    if (undefined != constMeng[this.state.keyindex].content) {
      curMeng = curMeng.concat(constMeng[this.state.keyindex].content)
    }
    curMeng.push("")
    curMeng.push("")
    curMeng.push("")
    curMeng.push("")
    return (
      <Drawer
        sidebar={sidebar}
        position="left"
        open={false}
        drawerRef={el => (this.drawer = el)}
        onOpenChange={this.onOpenChange}
        drawerBackgroundColor="#ccc"
      >
        <View style={StyleConfig.container}>
          <ScrollView ref="location" style={{ backgroundColor: '#ffffff' }}>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <FlatList
              ref={(flatList) => this._flatList = flatList}
              useFlatList={true}
              //1数据的获取和渲染
              //data={undefined != content[this.state.keyindex]?content[this.state.keyindex]:""}
              data={curMeng}
              keyExtractor={(item, index) => index.toString()}
              getItemLayout={this.getItemLayout}
              renderItem={(data) => (
                <View>
                  <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 15, paddingLeft: 15, paddingRight: 15, textAlign: alignTextCenter ? "center" : "auto" }}>{data.item}</Text>
                  <WhiteSpace size="xl" />
                </View>)}
            >
            </FlatList>
            <WhiteSpace size="xl" />
            {
              (WechatShare.shareimg(this.state.shareimg))
            }
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
          </ScrollView>
          <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight(), backgroundColor: '#ffffff', }}>
            <TabNavigator.Item
              title={"目录"}
              renderIcon={() => RouteConfig["IconMore"].icon}
              //renderSelectedIcon={() => IconConfig.IconDvinationSel}
              onPress={() => this.drawer && this.drawer.openDrawer()}
              titleStyle={StyleConfig.menufont}>
            </TabNavigator.Item>
            <TabNavigator.Item
              title={"上一页"}
              renderIcon={() => RouteConfig["IconLast"].icon}
              //renderSelectedIcon={() => IconConfig.IconDvinationSel}
              onPress={() => this.setState({ keyindex: this.state.keyindex - 1 }, this.refs['location'].scrollTo({ x: 0, y: 0, animated: true }))}
              titleStyle={StyleConfig.menufont}>
            </TabNavigator.Item>
            <TabNavigator.Item
              title={"下一页"}
              //renderIcon={() => BaseCourseConfig["CourseToolsPage"].icon}
              renderIcon={() => RouteConfig["IconNext"].icon}
              onPress={() => this.setState({ keyindex: this.state.keyindex + 1 }, this.refs['location'].scrollTo({ x: 0, y: 0, animated: true }))}
              titleStyle={StyleConfig.menufont}>
            </TabNavigator.Item>
            {
              WechatShare.CourseShareBar(WechatShare, this, RouteConfig["ZhuangBookPage"].name)
            }
          </TabNavigator >

        </View>
      </Drawer>
    )
  }
};
var styles = StyleSheet.create({

  button: {
    height: 50,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    borderRadius: 4,
  },
  dateContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
module.exports = DetailBookPage;  