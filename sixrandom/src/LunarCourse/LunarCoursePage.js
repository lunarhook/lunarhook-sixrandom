
import React, { Component } from 'react';
import { AppRegistry, View, Text, ScrollView, TouchableOpacity, NativeModules, FlatList, Dimensions } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Tabs, Grid, Accordion, WhiteSpace } from '@ant-design/react-native';
import RouteConfig from '../config/RouteConfig'
import ScreenConfig from '../config/ScreenConfig';
import { StyleConfig, FontStyleConfig } from '../config/StyleConfig';
import { HistoryArrayGroup } from '../config/StorageModule'
import CourseConfig from '../config/CourseConfig'

const intro = [

  { icon: RouteConfig['IntroBooksPage'].icon, text: RouteConfig['IntroBooksPage'].name, url: RouteConfig['IntroBooksPage'].route },
  { icon: RouteConfig['IntroAncientPage'].icon, text: RouteConfig['IntroAncientPage'].name, url: RouteConfig['IntroAncientPage'].route },
  { icon: RouteConfig['IntroThreePage'].icon, text: RouteConfig['IntroThreePage'].name, url: RouteConfig['IntroThreePage'].route },
  { icon: RouteConfig['LunarCourseAnswerPage'].icon, text: RouteConfig['LunarCourseAnswerPage'].name, url: RouteConfig['LunarCourseAnswerPage'].route },
]
const base = [
  { icon: RouteConfig['ShuoWenBookPage'].icon, text: RouteConfig['ShuoWenBookPage'].name, url: RouteConfig['ShuoWenBookPage'].route, index: { text: "ShuoWenBookPage" } },
  { icon: RouteConfig['ErYaBookPage'].icon, text: RouteConfig['ErYaBookPage'].name, url: RouteConfig['ErYaBookPage'].route, index: { text: "ErYaBookPage" } },
  { icon: RouteConfig['ShengYunBookPage'].icon, text: RouteConfig['ShengYunBookPage'].name, url: RouteConfig['ShengYunBookPage'].route, index: { text: "ShengYunBookPage" } },
]

const three = [
  { icon: RouteConfig['UniversBookPage'].icon, text: RouteConfig['UniversBookPage'].name, url: RouteConfig['UniversBookPage'].route, index: { text: "UniversBookPage" } },
  { icon: RouteConfig['OldBookPage'].icon, text: RouteConfig['OldBookPage'].name, url: RouteConfig['OldBookPage'].route, index: { text: "OldBookPage" } },
  { icon: RouteConfig['ZhuangBookPage'].icon, text: RouteConfig['ZhuangBookPage'].name, url: RouteConfig['ZhuangBookPage'].route, index: { text: "ZhuangBookPage" } },
]

const four = [
  { icon: RouteConfig['LunyuBookPage'].icon, text: RouteConfig['LunyuBookPage'].name, url: RouteConfig['LunyuBookPage'].route, index: { text: "LunyuBookPage" } },
  { icon: RouteConfig['MengziBookPage'].icon, text: RouteConfig['MengziBookPage'].name, url: RouteConfig['MengziBookPage'].route, index: { text: "MengziBookPage" } },
  { icon: RouteConfig['ShangshuBookPage'].icon, text: RouteConfig['ShangshuBookPage'].name, url: RouteConfig['ShangshuBookPage'].route, index: { text: "ShangshuBookPage" } },
  { icon: RouteConfig['LijiBookPage'].icon, text: RouteConfig['LijiBookPage'].name, url: RouteConfig['LijiBookPage'].route, index: { text: "LijiBookPage" } },
]

const fouradd = [
  { icon: RouteConfig['ZhongBookPage'].icon, text: RouteConfig['ZhongBookPage'].name, url: RouteConfig['ZhongBookPage'].route, index: { text: "ZhongBookPage" } },
  { icon: RouteConfig['BigBookPage'].icon, text: RouteConfig['BigBookPage'].name, url: RouteConfig['BigBookPage'].route, index: { text: "BigBookPage" } },

]
const Meng = [
  { icon: RouteConfig['AncientSanZiJingPage'].icon, text: RouteConfig['AncientSanZiJingPage'].name, url: RouteConfig['AncientSanZiJingPage'].route, index: { text: "AncientSanZiJingPage" } },
  { icon: RouteConfig['AncientBaiJiaXingPage'].icon, text: RouteConfig['AncientBaiJiaXingPage'].name, url: RouteConfig['AncientBaiJiaXingPage'].route, index: { text: "AncientBaiJiaXingPage" } },
  { icon: RouteConfig['AncientQianZiWenPage'].icon, text: RouteConfig['AncientQianZiWenPage'].name, url: RouteConfig['AncientQianZiWenPage'].route, index: { text: "AncientQianZiWenPage" } },
]

const yi = [
  { icon: RouteConfig['HuangDiNeiJingSuWenPage'].icon, text: RouteConfig['HuangDiNeiJingSuWenPage'].name, url: RouteConfig['HuangDiNeiJingSuWenPage'].route, index: { text: "HuangDiNeiJingSuWenPage" } },
  { icon: RouteConfig['HuangDiNeiJingLingShuPage'].icon, text: RouteConfig['HuangDiNeiJingLingShuPage'].name, url: RouteConfig['HuangDiNeiJingLingShuPage'].route, index: { text: "HuangDiNeiJingLingShuPage" } },
  { icon: RouteConfig['nanjingPage'].icon, text: RouteConfig['nanjingPage'].name, url: RouteConfig['nanjingPage'].route, index: { text: "nanjingPage" } },
]

const ji = [
  { icon: RouteConfig['sanshiliujiPage'].icon, text: RouteConfig['sanshiliujiPage'].name, url: RouteConfig['sanshiliujiPage'].route, index: { text: "sanshiliujiPage" } },
]
const celun = [
  { icon: RouteConfig['zhanguoPage'].icon, text: RouteConfig['zhanguoPage'].name, url: RouteConfig['zhanguoPage'].route, index: { text: "zhanguoPage" } },
  { icon: RouteConfig['guanziPage'].icon, text: RouteConfig['guanziPage'].name, url: RouteConfig['guanziPage'].route, index: { text: "guanziPage" } },
  { icon: RouteConfig['gongsunlongziPage'].icon, text: RouteConfig['gongsunlongziPage'].name, url: RouteConfig['gongsunlongziPage'].route, index: { text: "gongsunlongziPage" } },
  { icon: RouteConfig['sushuPage'].icon, text: RouteConfig['sushuPage'].name, url: RouteConfig['sushuPage'].route, index: { text: "sushuPage" } },
  { icon: RouteConfig['fanjingPage'].icon, text: RouteConfig['fanjingPage'].name, url: RouteConfig['fanjingPage'].route, index: { text: "fanjingPage" } },
]

var w = ScreenConfig.__screenW()
var coln = 4
if (w > 320 && Platform.OS === 'ios') {
  coln = 5
}
var NativePlumber = NativeModules.NativePlumber;
let LunarCoursePagethis = null
class LunarCoursePage extends React.Component {
  constructor(props) {
    super(props);
    var CourseSelectMode = CourseConfig.getCourseRandom()
    this.state = {
      tabs: CourseSelectMode['全部'],
      selectmode: "国学经典",
      date: "",
      datahistory: [],
      activeSections: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      historyactiveSections: [0],
      Channel: ""
    };
    LunarCoursePagethis = this
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

      title: RouteConfig["LunarCoursePage"].titlename,
      headerRight: () => (
        <TouchableOpacity
          style={{ padding: 10, alignContent: "center", alignItems: "baseline" }}
          //onPress={() => navigate('Search')}
          onPress={() => navigate(RouteConfig['LunarCourseConfigPage'].route)}
        >
          {RouteConfig['LunarCourseConfigPage'].icon}
        </TouchableOpacity>),
    }
  };
  componentDidMount() {
    NativePlumber.PlumberGetChannel((error, events) => {
      this.setState({ Channel: events })
      this.refreshlist()
    })

  }

  refreshlist() {
    var CourseSelectMode = CourseConfig.getCourseRandom()
    //var itemsrandom = KitConfig.getitemsrandom()
    this.setState({ tabs: CourseSelectMode['全部'] })
    HistoryArrayGroup.GetCourseConfigHistory().then(ids => {

      HistoryArrayGroup.load("CourseConfigselectmode").then(T => {
        try {
          console.log("CourseConfigselectmode", T)
          if (T == undefined) {
            this.setState({ selectmode: "国学经典" })
            return
          }
          if (ids.length != 0) {

            let selectedItems = ids.filter((ids, index) => ids.isSelect)
            let tabs = new Array()
            selectedItems.forEach(element => {
              obj = {}
              obj.title = element.title
              if (undefined == obj.title) {
                HistoryArrayGroup.removeall("CourseConfig")
                throw new Error("CourseConfig")
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
    }).then(T2 => {
      console.log(T2)
      this.setState({ selectmode: "国学经典" })
      return

    })
    this.render()
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
  onclick(el, navigate) {

    var datahistory = this.state.datahistory

    while (datahistory.length > 5) {
      datahistory.pop()
    }
    datahistory.reverse()
    datahistory.push({ icon: el.icon, text: el.text, url: el.route })
    datahistory.reverse()
    console.log(el)
    this.setState({ datahistory: datahistory })
    //console.log("ReadPage",el.text,el.url)
    navigate(el.url)
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
    contentlist["小学"] = (
      <Accordion.Panel header={RouteConfig['AncientChineseLiteraturePage'].name} key={RouteConfig['AncientChineseLiteraturePage'].name}>
        <Grid
          data={base}
          columnNum={coln}
          isCarousel={false}
          hasLine={true}
          renderItem={this.renderItemel}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >)
    contentlist["三玄"] = (
      <Accordion.Panel header={RouteConfig['ThreeExtPage'].name} key={RouteConfig['ThreeExtPage'].name}>
        <Grid
          data={three}
          columnNum={coln}
          isCarousel={false}
          hasLine={true}
          renderItem={this.renderItemel}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >)

    contentlist["四书五经"] = (
      <Accordion.Panel header={RouteConfig['FourExtPage'].name} key={RouteConfig['FourExtPage'].name}>
        <View>
          <Grid
            data={four}
            columnNum={coln}
            isCarousel={false}
            hasLine={true}
            renderItem={this.renderItemel}
            onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
          />
          <Grid
            data={fouradd}
            columnNum={coln}
            isCarousel={false}
            hasLine={true}
            renderItem={this.renderItemel}
            onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
          /></View>
      </Accordion.Panel >)
    contentlist["蒙学"] = (
      <Accordion.Panel header={RouteConfig['MengBookPage'].name} key={RouteConfig['MengBookPage'].name}>
        <Grid
          data={Meng}
          columnNum={coln}
          isCarousel={false}
          hasLine={true}
          renderItem={this.renderItemel}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >)
    contentlist["中医"] = (
      <Accordion.Panel header={RouteConfig['ChineseMedicationPage'].name} key={RouteConfig['ChineseMedicationPage'].name}>
        <Grid
          data={yi}
          columnNum={coln}
          isCarousel={false}
          hasLine={true}
          renderItem={this.renderItemel}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >)
    contentlist["谋略"] = (
      <Accordion.Panel header={RouteConfig['BingFaPage'].name} key={RouteConfig['BingFaPage'].name}>
        <Grid
          data={ji}
          columnNum={coln}
          isCarousel={false}
          hasLine={true}
          renderItem={this.renderItemel}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >)
    contentlist["策论"] = (
      <Accordion.Panel header={RouteConfig['CePage'].name} key={RouteConfig['CePage'].name}>
        <Grid
          data={celun}
          columnNum={coln}
          isCarousel={false}
          hasLine={true}
          renderItem={this.renderItemel}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >)

    if ("关注" == tab.title) {
      return (
        <ScrollView>
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {contentlist["关注"]}
          </Accordion></ScrollView>
      )
    } else if ("全部" == tab.title) {
      return (
        <ScrollView>
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {(function (handler) {
              try {
                var alllist = CourseConfig.getCoursealllist()
                var sel = alllist[handler.state.selectmode]
                var curalllist = JSON.parse(JSON.stringify(sel))
                var content = new Array()
                if ("Huawei" == LunarCoursePagethis.state.Channel) {
                  delete contentlist["大道易德"]
                  delete contentlist["周易八卦"]
                  delete contentlist["塔罗占星"]
                }
                delete contentlist["蒙童幼学"]
                delete contentlist["医药经典"]
                curalllist.forEach(element => {
                  if (undefined != contentlist[element.title]) {
                    content.push(contentlist[element.title])
                  }

                })
              } catch{
                return []
              }

              return content
            })(this)
            }

          </Accordion>
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" /></ScrollView>
      )
    } else if ("小学三玄" == tab.title) {
      return (
        <ScrollView>
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {contentlist["小学"]}
            {contentlist["三玄"]}
          </Accordion></ScrollView>
      )
    } else if ("四书五经" == tab.title) {
      return (
        <ScrollView>
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {contentlist["四书五经"]}
          </Accordion></ScrollView>
      )
    }

    else if ("蒙童幼学" == tab.title) {
      return (
        <ScrollView>
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {contentlist["蒙学"]}
          </Accordion></ScrollView>
      )
    }

    else if ("医药经典" == tab.title) {
      return (
        <ScrollView>
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {contentlist["中医"]}
          </Accordion></ScrollView>
      )
    }

    else if ("计策谋略" == tab.title) {
      return (
        <ScrollView>
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {contentlist["谋略"]}
          </Accordion></ScrollView>
      )
    }
    else if ("策论" == tab.title) {
      return (
        <ScrollView>
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {contentlist["策论"]}
          </Accordion></ScrollView>
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
      LunarCoursePagethis.refreshlist()
      //return (<View></View>)
    }

    return (
      <View style={StyleConfig.container}>
        <Tabs tabs={this.state.tabs} page={"全部"} tabBarPosition="top" tabBarTextStyle={{ textAlign: "center", fontSize: FontStyleConfig.getFontApplySize() + 14 }}>
          {this.renderContent}
        </Tabs>
        <View>
          <TabNavigator style={{ height: ScreenConfig.getTabBarHeight() }} tabBarStyle={{ height: ScreenConfig.getTabBarHeight(), backgroundColor: '#ffffff', }}>
            <TabNavigator.Item
              title={RouteConfig["LunarBooks"].name}
              renderIcon={() => RouteConfig["LunarBooks"].icon}
              //renderSelectedIcon={() => IconConfig.IconDvinationSel}
              onPress={() => navigate(RouteConfig["LunarBooks"].route)}
              titleStyle={StyleConfig.menufont}>
            </TabNavigator.Item>
                <TabNavigator.Item
                  title={RouteConfig["CourseSearchPage"].name}
                  renderIcon={() => RouteConfig["CourseSearchPage"].icon}
                  //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                  onPress={() => navigate(RouteConfig["CourseSearchPage"].route)}
                  titleStyle={StyleConfig.menufont}>
                </TabNavigator.Item>
            <TabNavigator.Item
              title={RouteConfig["LunarMasterPage"].name}
              renderIcon={() => RouteConfig["LunarMasterPage"].icon}
              //renderSelectedIcon={() => IconConfig.IconDvinationSel}
              onPress={() => navigate(RouteConfig["LunarMasterPage"].route)}
              titleStyle={StyleConfig.menufont}>
            </TabNavigator.Item>
          </TabNavigator >
        </View>
      </View>
    )
  }
};
module.exports = LunarCoursePage;  