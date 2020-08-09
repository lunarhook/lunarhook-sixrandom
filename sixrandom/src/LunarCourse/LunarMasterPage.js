
import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, NativeModules, FlatList, Dimensions } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Tabs, Grid, Accordion, WhiteSpace } from '@ant-design/react-native';
import RouteConfig from '../config/RouteConfig'
import ScreenConfig from '../config/ScreenConfig';
import { StyleConfig, FontStyleConfig } from '../config/StyleConfig';
import IconConfig from '../config/IconConfig'
import { HistoryArrayGroup } from '../config/StorageModule'
import MasterConfig from '../config/MasterConfig'

const intro = [

  //{icon: RouteConfig['MasterSearchPage'].icon,text: RouteConfig['MasterSearchPage'].name,url:RouteConfig['MasterSearchPage'].route},
  { icon: IconConfig.IconStar, text: "由内而外", url: "", },
  { icon: IconConfig.IconStar, text: "敏锐感知", url: "" },
  { icon: IconConfig.IconStar, text: "情感逻辑", url: "" },
  { icon: IconConfig.IconStar, text: "探索判断", url: "" },
  { icon: IconConfig.IconStar, text: "运用变化", url: "" },
  { icon: IconConfig.IconStar, text: "社交基本", url: "" },

]
const MBTI = [
  { icon: IconConfig.IconStar, text: "由内而外", url: "", },
  { icon: IconConfig.IconStar, text: "敏锐感知", url: "" },
  { icon: IconConfig.IconStar, text: "情感逻辑", url: "" },
  { icon: IconConfig.IconStar, text: "探索判断", url: "" },
  { icon: IconConfig.IconStar, text: "运用变化", url: "" },
  { icon: IconConfig.IconStar, text: "社交关系", url: "" },
  { icon: IconConfig.IconStar, text: "需求满足", url: "" },
]

const Univers = [
  { icon: IconConfig.IconLunarCourseRed, text: "感受自然", url: RouteConfig['fivelevel1Module'].route, index: { text: "fivelevel1Module" } },
  { icon: IconConfig.IconLunarCourseBlue, text: "世间万象", url: RouteConfig['fivelevel2Module'].route, index: { text: "fivelevel2Module" } },
  { icon: IconConfig.IconLunarCourseclaygreen, text: "人间百态", url: RouteConfig['fivelevel2Module'].route, index: { text: "fivelevel2Module" } },
  { icon: IconConfig.IconLunarCourseLightPink, text: "家道伦常", url: RouteConfig['fivelevel2Module'].route, index: { text: "fivelevel2Module" } },
]
const old = [
  { icon: IconConfig.IconLunarCourseGold, text: "道德原本", url: RouteConfig['fivelevel2Module'].route, index: { text: "fivelevel2Module" } },
  { icon: IconConfig.IconLunarCourseGreen, text: "矛盾变化", url: RouteConfig['fivelevel2Module'].route, index: { text: "fivelevel2Module" } },
  { icon: IconConfig.IconLunarCourseclaygreen, text: "人间道", url: RouteConfig['fivelevel2Module'].route, index: { text: "fivelevel2Module" } },
]

const story = [
  { icon: IconConfig.IconLunarCourseGold, text: "故事课", url: RouteConfig['fivelevel2Module'].route, index: { text: "fivelevel2Module" } },
  //{ icon: IconConfig.IconLunarCourseGreen, text: "矛盾变化", url: RouteConfig['fivelevel2Module'].route, index: { text: "fivelevel2Module" } },
  //{ icon: IconConfig.IconLunarCourseclaygreen, text: "人间道", url: RouteConfig['fivelevel2Module'].route, index: { text: "fivelevel2Module" } },
]

var w = ScreenConfig.__screenW()
var coln = 4
if (w > 320 && Platform.OS === 'ios') {
  coln = 4
}
var NativePlumber = NativeModules.NativePlumber;
let LunarMasterPagethis = null
class LunarMasterPage extends React.Component {
  constructor(props) {
    super(props);
    var MasterSelectMode = MasterConfig.getMasterRandom()
    this.state = {
      tabs: MasterSelectMode['全部'],
      selectmode: "训练大师",
      date: "",
      datahistory: [],
      activeSections: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      historyactiveSections: [0],
      Channel: ""
    };
    LunarMasterPagethis = this
    this.onChange = (activeSections: number[]) => {
      var re = this.state.activeSections
      if (activeSections.length > 1) {
        this.setState({ activeSections: activeSections })
      }
      else {
        re.push(activeSections[0])
        this.setState({ activeSections: re })
      }
    };
    this.historyonChange = (historyactiveSections: number[]) => {
      var re = this.state.historyactiveSections
      if (historyactiveSections.length > 1) {
        this.setState({ historyactiveSections: historyactiveSections })
      }
      else {
        re.push(historyactiveSections[0])
        this.setState({ historyactiveSections: re })
      }
    };
  };
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;

    return {

      title: RouteConfig["LunarMasterPage"].titlename,

    }
  };
  componentDidMount() {

    NativePlumber.PlumberGetChannel((error, events) => {
      this.setState({ Channel: events })
    })

  }

  refreshlist() {
    /*
    var MasterSelectMode = MasterConfig.getMasterRandom()
    //var itemsrandom = KitConfig.getitemsrandom()
    this.setState({ tabs: MasterSelectMode['全部'] })
    HistoryArrayGroup.GetMasterConfigHistory().then(ids => {

      HistoryArrayGroup.load("MasterConfigselectmode").then(T => {
        try {
          console.log("MasterConfigselectmode", T)
          if (ids.length != 0) {

            let selectedItems = ids.filter((ids, index) => ids.isSelect)
            let tabs = new Array()
            selectedItems.forEach(element => {
              obj = {}
              obj.title = element.title
              if (undefined == obj.title) {
                HistoryArrayGroup.removeall("MasterConfig")
                throw new Error("MasterConfig")
              }
              tabs.push(obj)
            });
            if (this.state.datahistory.length > 0) {
              if (tabs[1].title === "关注") { } else { tabs.splice(1, 0, { title: '关注' }) }

            }
            console.log("refreshlist", ids, tabs)
            this.setState({ tabs: tabs, selectmode: T })
          } else if (undefined != T) {
            //从来没有选择过现实模式的人，只能使用系统默认的职业性格或者心理学初始化
            this.setState({ selectmode: T })
          }
        } catch{
          this.setState({ selectmode: "国学经典" })
          return
        }
      })
    })
    this.render()
    */
  }

  keyExtractor = (item, index) => item.id
  onPress(el, navigate) {
    var datahistory = this.state.datahistory
    while (datahistory.length > 5) {
      datahistory.pop()
    }
    datahistory.reverse()
    datahistory.push({ icon: el.icon, text: el.text, url: el.url })
    datahistory.reverse()
    tabs = this.state.tabs
    if (datahistory.length > 0) {
      if (tabs[1].title === "关注") { } else { tabs.splice(1, 0, { title: '关注' }) }

    }
    this.setState({ datahistory: datahistory, tabs: tabs })
    this.props.navigation.setParams({ text: "refresh" })
    if (undefined != el.index) {

      var param = JSON.parse(JSON.stringify(el.index))
      navigate(el.url, param)
    }
    else {
      navigate(el.url)
    }
  }
  switchhistory() {
    if (this.state.datahistory.length > 0) {
      return (
        <Accordion.Panel header="历史浏览记录">
          <Grid
            data={this.state.datahistory}
            columnNum={5}
            onPress={(_el: any, index: any) => {/*alert(_el.url),*/navigate(_el.url) }}
          /></Accordion.Panel >
      )
    }
  }
  renderItemel(el, index) {
    return (<View style={{ alignItems: "center", flex: 1, justifyContent: 'center', }}>
      {el.icon}
      <Text style={{ textAlign: "center", fontSize: FontStyleConfig.getFontApplySize() + 14 }}>{el.text}</Text>
    </View>)
  }
  renderContent = (tab, index) => {
    console.log("renderContentfunc", tab, index)
    const { navigate } = this.props.navigation;
    var contentlist = new Array()
    contentlist["关注"] = (
      <Accordion.Panel header="关注" key={"关注"}>
        <Grid
          data={this.state.datahistory}
          columnNum={coln}
          renderItem={this.renderItemel}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >
    )
    contentlist["导读"] = (
      <Accordion.Panel header={"导读"} key={"导读"}>
        <Grid
          data={intro}
          columnNum={coln}
          isCarousel={false}
          hasLine={true}
          renderItem={this.renderItemel}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >)
    contentlist["故事课"] = (
      <Accordion.Panel header={"故事课"} key={"故事课"}>
        <Grid
          data={story}
          columnNum={coln}
          isCarousel={false}
          hasLine={true}
          renderItem={this.renderItemel}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >)
    contentlist["MBTI训练"] = (
      <Accordion.Panel header={"MBTI训练"} key={"MBTI训练"}>
        <Grid
          data={MBTI}
          columnNum={coln}
          isCarousel={false}
          hasLine={true}
          renderItem={this.renderItemel}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >)
    contentlist["五行掌握"] = (
      <Accordion.Panel header={"五行掌握"} key={"五行掌握"}>
        <Grid
          data={Univers}
          columnNum={coln}
          isCarousel={false}
          hasLine={true}
          renderItem={this.renderItemel}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >)
    contentlist["道德经"] = (
      <Accordion.Panel header={"道德经"} key={"道德经"}>
        <Grid
          data={old}
          columnNum={coln}
          isCarousel={false}
          hasLine={true}
          renderItem={this.renderItemel}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >)




    if ("关注" == tab.title) {
      return (
        <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
          {contentlist["关注"]}
        </Accordion>
      )
    } else if ("全部" == tab.title) {
      return (
        <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
          {(function (handler) {
            var alllist = MasterConfig.getMasteralllist()
            var sel = alllist[handler.state.selectmode]
            var curalllist = JSON.parse(JSON.stringify(sel))
            var content = new Array()
            if ("Huawei" == LunarMasterPagethis.state.Channel) {
            }
            curalllist.forEach(element => {
              if (undefined != contentlist[element.title]) {
                content.push(contentlist[element.title])
              }
            })
            return content
          })(this)
          }
        </Accordion>
      )
    } else if ("MBTI训练" == tab.title) {
      return (
        <ScrollView>
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {contentlist["MBTI训练"]}
          </Accordion>
        </ScrollView>
      )
    } else if ("五行掌握" == tab.title) {
      return (
        <ScrollView>
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {contentlist["五行掌握"]}
          </Accordion>
        </ScrollView>
      )
    } else if ("道德经" == tab.title) {
      return (
        <ScrollView>
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {contentlist["道德经"]}
          </Accordion>
        </ScrollView>
      )
    }
  };

  render() {
    const { navigate } = this.props.navigation;

    if ("" == this.state.Channel) {
      return (<View></View>)
    }
    if (undefined != this.props.navigation.state.params && "refresh" === this.props.navigation.state.params.text) {
      this.props.navigation.state.params.text = ""
      LunarMasterPagethis.refreshlist()
      //return (<View></View>)
    }

    return (

      <View style={StyleConfig.container}>
        <Tabs tabs={this.state.tabs} page={"全部"} tabBarPosition="top" tabBarTextStyle={{ textAlign: "center", fontSize: FontStyleConfig.getFontApplySize() + 14 }}>
          {this.renderContent}
        </Tabs>
      </View>
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
module.exports = LunarMasterPage;  