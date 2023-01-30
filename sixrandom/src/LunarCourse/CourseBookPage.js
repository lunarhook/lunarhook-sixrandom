
import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView,   findNodeHandle,UIManager, FlatList, NativeModules } from 'react-native';
import TabNavigator from '@lunarhook/react-native-tab-navigator';  
import { Grid, Accordion, WhiteSpace } from '@ant-design/react-native';
import { Button, Drawer, List, InputItem } from '@ant-design/react-native';
import CourseIndexPage from './Course/CourseIndexPage'
import { StyleConfig, FontStyleConfig } from '../config/StyleConfig';
import ScreenConfig from '../config/ScreenConfig';
import IconConfig from '../config/IconConfig'

import WechatShare from '../config/WechatShare'
var constMeng = new Array()

class CourseBookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateMeng: [],
      datahistory: [],
      keyindex: 0,
      searchText: "",
      itemArr: [],
    };
  };
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      title: navigation.getParam('title', 'A Nested Details Screen'),
    }
  };

  updatesearchText(filtertext) {
    this.setState({ searchText: filtertext })
    console.log("updatesearchTextupdatesearchText", filtertext)
    this.renderDrawer(filtertext, this.state.keyindex)
    return filtertext;
  }

  renderDrawer(filtertext, keyindex) {
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

        var x = constMeng[index].name
        if (filtertext != "" && (-1 != x.indexOf(filtertext)) || filtertext == "") {
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
                onPress={() => { this.setState({ keyindex: index }), this.renderDrawer(this.state.searchText, index), this.drawer.closeDrawer() }}
              >
                <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 15 }}>{undefined != constMeng[index].icon ? constMeng[index].icon : ""}{constMeng[index].name}{index == keyindex ? IconConfig.IconStar : ""}</Text>
              </Button>
            </List.Item>
          );
        }


      })
    this.setState({ itemArr: itemArr })
    console.log(itemArr.length)

  }

  autoup() {

    if (undefined != this.refs['Drawer']) {
      const handle = findNodeHandle(this.refs['Drawer'])
      UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
        console.log("autoup", height)
        if (height > 200) {
          console.log("autoupheight", height)
          return true
        }
      })
    }
    return false
  }


  render() {
    const { navigate } = this.props.navigation;
    if (undefined != this.props.navigation.state.params && "" != this.props.navigation.state.params.text) {
      var CourseIndex = this.props.navigation.state.params.text;
      this.props.navigation.state.params.text = ""
      var Q = RouteConfig[CourseIndex]
      this.props.navigation.setParams({ title: Q.titlename })
      var NativePlumber = NativeModules.NativePlumber;
      NativePlumber.PlumberRouting(Q.titlename, "", "", "")
      var x = CourseIndexPage.GetBookType(Q.titlename)
      if (x.length === 1) {
        ScreenConfig.DeviceToast("资料未开放")
        this.props.navigation.goBack()
        return (<View></View>)
      }
      this.setState({ dateMeng: x })
      return (<View></View>)
    }
    constMeng = []
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
      this.renderDrawer(this.state.searchText, this.state.keyindex - 1)
      this.setState({ keyindex: this.state.keyindex-1 })
      return (<View />)
    }
    if ("" == this.state.searchText && this.state.itemArr.length == 0) {
      this.renderDrawer(this.state.searchText)
    }


    const tip = (<TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight(), backgroundColor: '#ffffff'  }}>
      <TabNavigator.Item
        title={"回顶部"}
        renderIcon={() => IconConfig.IconUp}
        //renderSelectedIcon={() => IconConfig.IconDvinationSel}
        onPress={() => this.refs['Drawer'].scrollTo({ x: 0, y: 0, animated: true })}
        titleStyle={StyleConfig.menufont}>
      </TabNavigator.Item>
    </TabNavigator >)
    sidebartips = (
      <View>
        <ScrollView ref="Drawer" style={{ backgroundColor: '#ffffff' }}>
          <List>
            <InputItem

              value={this.state.searchText}
              onChange={(value: any) => {
                this.setState({ searchText: this.updatesearchText(value) })
              }}
              extra=""
              Style={{ backgroundColor: "000000" }}
            >检索
          </InputItem>
          </List>
          <List>{this.state.itemArr}</List>
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
        </ScrollView>
        {
              (this.state.itemArr.length>11?tip:<View />)
        }
      </View>
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

    var prev = (            <TabNavigator.Item
      title={"回顾"}
      renderIcon={() => RouteConfig["IconLast"].icon}
      //renderSelectedIcon={() => IconConfig.IconDvinationSel}
      onPress={() => this.setState({ keyindex: this.state.keyindex - 1 }, this.refs['location'].scrollTo({ x: 0, y: 0, animated: true }), this.renderDrawer(this.state.searchText, this.state.keyindex - 1))}
      titleStyle={StyleConfig.menufont}>
    </TabNavigator.Item>)
    var next = (
      <TabNavigator.Item
      title={"新课"}
      //renderIcon={() => BaseCourseConfig["CourseToolsPage"].icon}
      renderIcon={() => RouteConfig["IconNext"].icon}
      onPress={() => this.setState({ keyindex: this.state.keyindex + 1 }, this.refs['location'].scrollTo({ x: 0, y: 0, animated: true }), this.renderDrawer(this.state.searchText, this.state.keyindex + 1))}
      titleStyle={StyleConfig.menufont}>
    </TabNavigator.Item>
    )
    return (
      <Drawer
        sidebar={sidebartips}
        position="left"
        open={false}
        drawerRef={el => (this.drawer = el)}
        onOpenChange={this.onOpenChange}
        drawerBackgroundColor="#ffffff"
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
            {
              (this.state.keyindex>0?prev:<View />)
            }
            {
              (this.state.keyindex<this.state.dateMeng.length-1?next:<View />)
            }
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
module.exports = CourseBookPage;  