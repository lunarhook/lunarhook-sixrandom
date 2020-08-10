

import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, DeviceEventEmitter, Clipboard, Alert, Linking, NativeModules, Platform ,PermissionsAndroid} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import { Grid, Accordion, WhiteSpace, Tabs, Modal, Button, Card } from '@ant-design/react-native';
import RouteConfig from '../config/RouteConfig';
import IconConfig from '../config/IconConfig';
import ScreenConfig from '../config/ScreenConfig';
import { StyleConfig, FontStyleConfig } from '../config/StyleConfig';
import WechatShare from '../config/WechatShare'
import shareimage from '../config/shareimage'
import { HistoryArrayGroup } from '../config/StorageModule'
import KitConfig from '../config/KitConfig'
var w = ScreenConfig.__screenW()
var H = ScreenConfig.__screenH()
var coln = 3
if (w > 320 && Platform.OS === 'ios') {
  coln = 4
}
var kitlist = new Array();
const data = [
  { icon: RouteConfig['SixrandomNewPage'].icon, text: RouteConfig['SixrandomNewPage'].name, url: RouteConfig['SixrandomNewPage'].route },
  { icon: RouteConfig['EightrandomNewPage'].icon, text: RouteConfig['EightrandomNewPage'].name, url: RouteConfig['EightrandomNewPage'].route },
  { icon: RouteConfig['NumberMainPage'].icon, text: RouteConfig['NumberMainPage'].name, url: RouteConfig['NumberMainPage'].route },
  { icon: RouteConfig['SixCourseNewPage'].icon, text: RouteConfig['SixCourseNewPage'].name, url: RouteConfig['SixCourseNewPage'].route },
  { icon: RouteConfig['qimenNewPage'].icon, text: RouteConfig['qimenNewPage'].name, url: RouteConfig['qimenNewPage'].route },
  { icon: RouteConfig['taiyiNewPage'].icon, text: RouteConfig['taiyiNewPage'].name, url: RouteConfig['taiyiNewPage'].route },
  { icon: RouteConfig['ziweiNewPage'].icon, text: RouteConfig['ziweiNewPage'].name, url: RouteConfig['ziweiNewPage'].route },
  { icon: RouteConfig['TrackStarPage'].icon, text: RouteConfig['TrackStarPage'].name, url: RouteConfig['TrackStarPage'].route },
]
const Tarot = [
  { icon: RouteConfig['TarotPage'].icon, text: RouteConfig['TarotPage'].name, url: RouteConfig['TarotPage'].route },
  { icon: RouteConfig['TarotVenusPage'].icon, text: RouteConfig['TarotVenusPage'].name, url: RouteConfig['TarotVenusPage'].route },
  { icon: RouteConfig['TarotStarofDavidPage'].icon, text: RouteConfig['TarotStarofDavidPage'].name, url: RouteConfig['TarotStarofDavidPage'].route },
  { icon: RouteConfig['TarotCeltsPage'].icon, text: RouteConfig['TarotCeltsPage'].name, url: RouteConfig['TarotCeltsPage'].route },
]
const data1 = [
  { icon: RouteConfig['ChangesuniversePage'].icon, text: RouteConfig['ChangesuniversePage'].name, url: RouteConfig['ChangesuniversePage'].route },
  { icon: RouteConfig['GamblePage'].icon, text: RouteConfig['GamblePage'].name, url: RouteConfig['GamblePage'].route },
  { icon: RouteConfig['StarInfoPage'].icon, text: RouteConfig['StarInfoPage'].name, url: RouteConfig['StarInfoPage'].route },
]
const consultants = [
  { icon: RouteConfig['malecall'].icon, text: "刘老师", url: "tel:18911832827" },
  { icon: RouteConfig['femalecall'].icon, text: "郑老师", url: "tel:13391909968" },
  { icon: RouteConfig['femalecall'].icon, text: "菅老师", url: "tel:15330231513" },
  { icon: RouteConfig['business'].icon, text: "郑女士（商务）", url: "tel:13391909968" },
  { icon: RouteConfig['business'].icon, text: "菅女士（商务）", url: "tel:15330231513" },
  { icon: RouteConfig['email'].icon, text: RouteConfig['email'].name, url: "mailto:1140669231@qq.com" },
  { icon: RouteConfig['wechat'].icon, text: RouteConfig['wechat'].name, url: "wechat" },
  { icon: RouteConfig['qrcode'].icon, text: RouteConfig['qrcode'].name, url: "openqrcode" },
]
kitlist["tools"] = [
  { icon: RouteConfig['NamePage'].icon, text: RouteConfig['NamePage'].name, url: RouteConfig['NamePage'].route },
  { icon: RouteConfig['NameModule'].icon, text: RouteConfig['NameModule'].name, url: RouteConfig['NameModule'].route },
  { icon: RouteConfig['NumberMotionNewPage'].icon, text: RouteConfig['NumberMotionNewPage'].name, url: RouteConfig['NumberMotionNewPage'].route },
  { icon: RouteConfig['SloganShare'].icon, text: RouteConfig['SloganShare'].name, url: RouteConfig['SloganShare'].route },
  { icon: RouteConfig['MORALSModule'].icon, text: RouteConfig['MORALSModule'].name, url: RouteConfig['MORALSModule'].route },

]
const data2 = [
  { icon: RouteConfig['MBTIModule'].icon, text: RouteConfig['MBTIModule'].name, url: RouteConfig['MBTIModule'].route },
  { icon: RouteConfig['EnneagramModule'].icon, text: RouteConfig['EnneagramModule'].name, url: RouteConfig['EnneagramModule'].route },
  { icon: RouteConfig['HollandModule'].icon, text: RouteConfig['HollandModule'].name, url: RouteConfig['HollandModule'].route },
  { icon: RouteConfig['BIGFIVEModule'].icon, text: RouteConfig['BIGFIVEModule'].name, url: RouteConfig['BIGFIVEModule'].route },
  { icon: RouteConfig['DISCModule'].icon, text: RouteConfig['DISCModule'].name, url: RouteConfig['DISCModule'].route },
  { icon: RouteConfig['AMSModule'].icon, text: RouteConfig['AMSModule'].name, url: RouteConfig['AMSModule'].route },
  { icon: RouteConfig['SADModule'].icon, text: RouteConfig['SADModule'].name, url: RouteConfig['SADModule'].route },
  { icon: RouteConfig['EPQModule'].icon, text: RouteConfig['EPQModule'].name, url: RouteConfig['EPQModule'].route },
  { icon: RouteConfig['PDPModule'].icon, text: RouteConfig['PDPModule'].name, url: RouteConfig['PDPModule'].route },
]
const datadepress = [
  { icon: RouteConfig['SCL90Module'].icon, text: RouteConfig['SCL90Module'].name, url: RouteConfig['SCL90Module'].route },
  { icon: RouteConfig['SDSModule'].icon, text: RouteConfig['SDSModule'].name, url: RouteConfig['SDSModule'].route },
  { icon: RouteConfig['SASModule'].icon, text: RouteConfig['SASModule'].name, url: RouteConfig['SASModule'].route },
  { icon: RouteConfig['SESModule'].icon, text: RouteConfig['SESModule'].name, url: RouteConfig['SESModule'].route },
  { icon: RouteConfig['PLCCModule'].icon, text: RouteConfig['PLCCModule'].name, url: RouteConfig['PLCCModule'].route },
  { icon: RouteConfig['IASModule'].icon, text: RouteConfig['IASModule'].name, url: RouteConfig['IASModule'].route },
  { icon: RouteConfig['PANASModule'].icon, text: RouteConfig['PANASModule'].name, url: RouteConfig['PANASModule'].route },
]
const relation = [
  { icon: RouteConfig['LASModule'].icon, text: RouteConfig['LASModule'].name, url: RouteConfig['LASModule'].route },
  { icon: RouteConfig['OlsonModule'].icon, text: RouteConfig['OlsonModule'].name, url: RouteConfig['OlsonModule'].route },
  { icon: RouteConfig['FESModule'].icon, text: RouteConfig['FESModule'].name, url: RouteConfig['FESModule'].route },
  { icon: RouteConfig['ECRModule'].icon, text: RouteConfig['ECRModule'].name, url: RouteConfig['ECRModule'].route },
  { icon: RouteConfig['ITSModule'].icon, text: RouteConfig['ITSModule'].name, url: RouteConfig['ITSModule'].route },
  { icon: RouteConfig['FADModule'].icon, text: RouteConfig['FADModule'].name, url: RouteConfig['FADModule'].route },
  { icon: RouteConfig['EMBUFemaleModule'].icon, text: RouteConfig['EMBUFemaleModule'].name, url: RouteConfig['EMBUFemaleModule'].route },
  { icon: RouteConfig['EMBUMaleModule'].icon, text: RouteConfig['EMBUMaleModule'].name, url: RouteConfig['EMBUMaleModule'].route },
]
const child = [
  { icon: RouteConfig['CARSModule'].icon, text: RouteConfig['CARSModule'].name, url: RouteConfig['CARSModule'].route },
  { icon: RouteConfig['GATBModule'].icon, text: RouteConfig['GATBModule'].name, url: RouteConfig['GATBModule'].route },
  { icon: RouteConfig['PROFModule'].icon, text: RouteConfig['PROFModule'].name, url: RouteConfig['PROFModule'].route },
  { icon: RouteConfig['MHTModule'].icon, text: RouteConfig['MHTModule'].name, url: RouteConfig['MHTModule'].route },
  { icon: RouteConfig['MHRSPModule'].icon, text: RouteConfig['MHRSPModule'].name, url: RouteConfig['MHRSPModule'].route },
]
const Exploration1 = [
  { icon: RouteConfig['MBTIModule'].icon, text: RouteConfig['MBTIModule'].name, url: RouteConfig['MBTIModule'].route },
  { icon: RouteConfig['EnneagramModule'].icon, text: RouteConfig['EnneagramModule'].name, url: RouteConfig['EnneagramModule'].route },
  { icon: RouteConfig['EightrandomNewPage'].icon, text: RouteConfig['EightrandomNewPage'].name, url: RouteConfig['EightrandomNewPage'].route },
  { icon: RouteConfig['SCL90Module'].icon, text: RouteConfig['SCL90Module'].name, url: RouteConfig['SCL90Module'].route },
]

let kitPageController = null
class kitPage extends React.Component {
  constructor(props) {
    var itemsrandom = KitConfig.getitemsrandom()
    super(props);

    this.state = {
      tabs: itemsrandom['全部'],
      selectmode: "职业性格",
      date: "",
      datahistory: [],
      historySection: [0],
      activeSections: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      historyactiveSections: [0],
      Channel: "",
      less: false,
      handler: 0,
    };
    kitPageController = this
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
  static ShareInstance() {
    if (!kitPageController) {
      kitPageController = new kitPage();
    }
    return kitPageController;
  }

  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;

    return {
      title: RouteConfig["kitPage"].name,
      headerRight: () => (
        <TouchableOpacity
          style={{ padding: 10, alignContent: "center", alignItems: "baseline" }}
          //onPress={() => navigate('Search')}
          onPress={() => navigate(RouteConfig['kitConfigPage'].route)}
        >
          {RouteConfig['kitConfigPage'].icon}
        </TouchableOpacity>),
    }
  };
  UNSAFE_componentWillMount() {
    this.setState({ handler: 0 })
    this.privacycheck()
  }
  componentDidMount() {
    var NativePlumber = NativeModules.NativePlumber;
    NativePlumber.PlumberGetChannel((error, events) => {
      console.log('error', error);
      console.log('events', events);
      this.setState({ Channel: events })
      this.refreshlist()
    })
  }
  async requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA, PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          'title': '乾坤爻',
          'message': '探索功能需要相册读写权限'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera")
      } else {
        console.log("Camera permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  }

  async privacycheck() {
    //this.setState({ less: true })
    await HistoryArrayGroup.GetFirstTime().then(T => {
      if (Platform.OS === 'android') {
        if (undefined == T) {
          this.setState({ less: true })
          if (0 == this.state.handler) {
            var handler = Modal.alert('服务协议和隐私政策', '用户请审慎阅读，充分理解"服务协议"和"隐私政策"各项条款，包括但不限于：为了向您提供即时通信，内容分享等服务，同时需要收集用户您的设备信息，日志和个人信息。您可以在"设置"查看变更删除您的各项信息并管理授权。您可以阅读"服务协议"和"隐私政策"了解详细信息，如果您同意，请点击"同意"并开始接受我们的服务', [
              {
                text: '《用户协议》',
                onPress: () => { this.setState({ handler: 1 }), this.props.navigation.navigate("AgreePage") },
              },
              {
                text: '《隐私政策》',
                onPress: () => { this.setState({ handler: 2 }), this.props.navigation.navigate("PrivacyPage") },
              },
              {
                text: '退出',
                onPress: () => RNExitApp.exitApp(),
                style: 'cancel',
              },
              { text: '同意', onPress: () => { HistoryArrayGroup.SaveFirstTime(), this.setState({ handler: 3 })} },
            ])
            //navigate(RouteConfig["MyPage"].route)

            console.log("privacycheck", handler)
          }

        }
        else {
          this.setState({ less: false })
        }
        this.requestCameraPermission()
      } else {
        if (undefined == T) {
          this.setState({ less: true })
        } else {
          this.setState({ less: false })
        }
        HistoryArrayGroup.SaveFirstTime()
        this.setState({ handler: 3 })
        DeviceEventEmitter.removeListener('privacycheck')
      }
    })
    this.render()
  }

  refreshlist() {
    var itemsrandom = KitConfig.getitemsrandom()
    this.setState({ tabs: itemsrandom['全部'] })
    HistoryArrayGroup.GetKitConfigHistory().then(ids => {

      HistoryArrayGroup.load("kitConfigselectmode").then(async (T) => {
        try {
          console.log("kitConfigselectmode", T)
          var alllist = KitConfig.getalllist()
          if (undefined == alllist[T]) {

            HistoryArrayGroup.removeall("kitConfigselectmode")
            await HistoryArrayGroup.save("kitConfigselectmode", "职业性格")
            throw new Error("kitConfigselectmode")
          }
          if (ids.length != 0) {

            let selectedItems = ids.filter((ids, index) => ids.isSelect)
            let tabs = new Array()
            selectedItems.forEach(element => {
              let obj = {}
              obj.title = element.title
              if (undefined == obj.title) {
                HistoryArrayGroup.removeall("kitConfig")
                throw new Error("kitConfig")
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
          this.setState({ selectmode: "职业性格" })
          return
        }
      })
    })
    this.render()
  }

  keyExtractor = (item, index) => item.id
  onBussion(el, navigate) {
    if ("service" == el) {
      var url = "mqqapi://card/show_pslcard?src_type=internal&version=1&uin=" + 775931827 + "&card_type=group&source=external"
      Linking.canOpenURL(url).then(supported => {
        if (supported) {
          Linking.openURL(url);
        }
        else {
          Alert.alert('需要安装QQ', '', [
            { text: '取消', onPress: () => { } }
          ])
        }
      });
    }
    /*
    else if ("wechat" == el.url) {
      Alert.alert('请关注公众号\n大道易德\n', '', [
        //{text: '打开微信', onPress: () =>{}},
        { text: '复制名称并打开微信', onPress: () => { Clipboard.setString("北京大道易德文化传媒有限公司"), WechatShare.openWechat() } },
        { text: '取消', onPress: () => { } }
      ])
    }
    */
    else if ("openqrcode" == el.url) {
      this.setState({ shareimage: true == this.state.shareimage ? false : true })
    }
    else if (-1 != el.url.indexOf("mailto")) {
      Alert.alert('1140669231@qq.com\n联系' + el.text + '\n', '', [
        //{text: '打开微信', onPress: () =>{}},
        { text: '复制', onPress: () => { Clipboard.setString("1140669231@qq.com") } },
        { text: '确定', onPress: () => Linking.openURL(el.url) },
        { text: '取消', onPress: () => { } }
      ])
    }
    else {
      Alert.alert('联系' + el.text + '\n', '', [
        { text: '确定', onPress: () => Linking.openURL(el.url) },
        { text: '取消', onPress: () => { } }
      ])
    }
  }
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
    navigate(el.url)
  }
  /*
  showshare() {
    if (this.state.shareimage) {
      return (
        <View style={{ justifyContent: 'center', alignItems: "center" }}>
          <Image style={{ width: 128, height: 128 }} source={{ uri: shareimage['dadaoyideshare'] }}></Image>
          <Text></Text>
          <Text>微信扫描二维码可关注大道易德</Text>
        </View>
      )
    }
  }
  */
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
      <Accordion.Panel header={"关注"} key={"关注"}>
        <Grid
          data={this.state.datahistory}
          columnNum={coln}
          renderItem={this.renderItemel}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >
    )
    contentlist["性格测评"] = (
      <Accordion.Panel header={"性格测评"} key={"性格测评"}>
        <Grid
          data={data2}
          columnNum={coln}
          isCarousel={false}
          hasLine={true}
          renderItem={this.renderItemel}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >)
    contentlist["心理测评"] = (
      <Accordion.Panel header="心理测评" key={"心理测评"}>
        <Grid
          data={datadepress}
          columnNum={coln}
          isCarousel={false}
          hasLine={true}
          renderItem={this.renderItemel}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >)
    contentlist["情感家庭"] = (
      <Accordion.Panel header="情感家庭" key={"情感家庭"}>
        <Grid
          data={relation}
          columnNum={coln}
          isCarousel={false}
          hasLine={true}
          renderItem={this.renderItemel}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >)

    contentlist["星盘星座"] = (
      <Accordion.Panel header={"星盘星座"} key={"星盘星座"}>
        <Grid
          data={data1}
          columnNum={coln}
          isCarousel={false}
          hasLine={true}
          renderItem={this.renderItemel}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >)
    contentlist["塔罗牌阵"] = (
      <Accordion.Panel header={"塔罗牌阵"} key={"塔罗牌阵"}>
        <Grid
          data={Tarot}
          columnNum={coln}
          isCarousel={false}
          hasLine={true}
          renderItem={this.renderItemel}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >)
    contentlist["工具助手"] = (
      <Accordion.Panel header={"工具助手"} key={"工具助手"}>
        <Grid
          data={kitlist["tools"]}
          columnNum={coln}
          isCarousel={false}
          hasLine={true}
          renderItem={this.renderItemel}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >)
    if ("Huawei" != kitPageController.state.Channel) {
      /*contentlist["大道易德"] = (
        <Accordion.Panel header={"大道易德咨询合作"} key={"大道易德咨询合作"}>
          <Grid
            data={consultants}
            columnNum={coln}
            isCarousel={false}
            hasLine={true}
            renderItem={this.renderItemel}
            onPress={(_el: any, index: any) => { this.onBussion(_el, navigate) }}
          /></Accordion.Panel >)*/
      contentlist["周易八卦"] = (
        <Accordion.Panel header={"周易八卦"} key={"周易八卦"}>
          <Grid
            data={data}
            columnNum={coln}
            isCarousel={false}
            hasLine={true}
            renderItem={this.renderItemel}
            onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
          /></Accordion.Panel >)
    }
    contentlist["儿童少年"] = (
      <Accordion.Panel header={"儿童青少年"} key={"儿童青少年"}>
        <Grid
          data={child}
          columnNum={coln}
          isCarousel={false}
          hasLine={true}
          renderItem={this.renderItemel}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >)
    /*
    if (true == this.state.less) {
      contentlist = new Array()
      contentlist["呦呦鹿鸣"] = (
        <Accordion.Panel header={"呦呦鹿鸣"} key={"呦呦鹿鸣"}>
          <Grid
            data={Exploration1}
            columnNum={2}
            isCarousel={false}
            hasLine={true}
            renderItem={this.renderItemel}
            onPress={(_el: any, index: any) => { navigate(_el.url) }}
          /></Accordion.Panel >)
    }
    */
    //if (false == this.state.less) {
    if ("关注" == tab.title) {
      return (
        <ScrollView>
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {contentlist["关注"]}
          </Accordion></ScrollView>
      )
    } else if ("全部" == tab.title) {
      return (
        <ScrollView style={Styles.container}>
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {(function (handler) {
              var alllist = KitConfig.getalllist()
              var sel = alllist[handler.state.selectmode]
              var curalllist = JSON.parse(JSON.stringify(sel))
              var content = new Array()
              if ("Huawei" == kitPageController.state.Channel) {
                delete contentlist["大道易德"]
                delete contentlist["周易八卦"]
                delete contentlist["塔罗牌阵"]
                delete contentlist["星盘星座"]
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
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
        </ScrollView>
      )
    } else if ("儿童少年" == tab.title) {
      return (
        <ScrollView>
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {contentlist["儿童少年"]}
          </Accordion></ScrollView>
      )
    } else if ("情感家庭" == tab.title) {
      return (
        <ScrollView>
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {contentlist["情感家庭"]}
          </Accordion></ScrollView>
      )
    } else if ("心理学" == tab.title) {
      return (
        <ScrollView>
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {contentlist["性格测评"]}
            {contentlist["心理测评"]}
            {contentlist["情感家庭"]}
            {contentlist["儿童少年"]}

          </Accordion>
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" /></ScrollView>
      )
    } else if ("性格测评" == tab.title) {
      return (
        <ScrollView>
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {contentlist["性格测评"]}
          </Accordion></ScrollView>
      )
    } else if ("抑郁焦虑" == tab.title) {
      return (
        <ScrollView>
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {contentlist["心理测评"]}
          </Accordion></ScrollView>
      )
    }
    else if ("周易八卦" == tab.title && "Huawei" != kitPageController.state.Channel) {
      return (
        <ScrollView>
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {contentlist["周易八卦"]}
          </Accordion></ScrollView>
      )
    }
    else if ("塔罗牌阵" == tab.title) {
      return (
        <ScrollView>
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {contentlist["塔罗牌阵"]}
          </Accordion></ScrollView>
      )
    }
    else if ("星盘星座" == tab.title && "Huawei" != kitPageController.state.Channel) {
      return (
        <ScrollView >
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {contentlist["星盘星座"]}
          </Accordion></ScrollView>
      )
    }
    /*
    else if ("大道易德" == tab.title && "Huawei" != kitPageController.state.Channel) {
      return (
        <ScrollView>
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {contentlist["大道易德"]}
          </Accordion></ScrollView>
      )
    }
    */
    else if ("工具助手" == tab.title) {
      return (
        <ScrollView>
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {contentlist["工具助手"]}
          </Accordion></ScrollView>
      )
    }
    //}
    /*
     else if ("全部" == tab.title) {
      return (
        <ScrollView style={Styles.container}>
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {contentlist["呦呦鹿鸣"]}
          </Accordion></ScrollView>
      )
    }
    */
  };
  render() {

    if ("" == this.state.Channe) {
      return (<View></View>)
    }
    const { navigate } = this.props.navigation;
    if (undefined != this.props.navigation.state.params && "refresh" === this.props.navigation.state.params.text) {
      this.props.navigation.state.params.text = ""
      kitPageController.refreshlist()
      //return (<View></View>)
    }
    var itemsrandom = KitConfig.getitemsrandom()
    return (
      <View style={Styles.container}>
        {function () {
          let cthis = kitPage.ShareInstance()
          if (true == cthis.state.less) {
            return (<Modal
              title="新用户推荐"
              transparent
              onClose={() => cthis.setState({ less: false })}
              maskClosable
              visible={cthis.state.less}
              closable>
              <View style={{ paddingVertical: 20 }}>
                <WhiteSpace size="lg" />
                <TouchableOpacity onPress={() => { cthis.setState({ less: false }), navigate(RouteConfig['MBTIModule'].route) }}>
                  <Card>
                    <Card.Header
                      extra={RouteConfig['MBTIModule'].name}
                      thumbStyle={{ width: 30, height: 30 }}
                      thumb={RouteConfig['MBTIModule'].icon}
                    />
                    <Card.Body>
                      <Text style={{ marginLeft: 16 }}>通过MBTI职业性格测试可以全面的了解人的内外向性格以及行动模式偏向思考还是情感</Text>
                    </Card.Body>
                  </Card>
                </TouchableOpacity >
                <WhiteSpace size="lg" />
                <TouchableOpacity onPress={() => { cthis.setState({ less: false }), navigate(RouteConfig['NumberMainPage'].route) }}>
                  <Card>
                    <Card.Header
                      extra={RouteConfig['NumberMainPage'].name}
                      thumbStyle={{ width: 30, height: 30 }}
                      thumb={RouteConfig['NumberMainPage'].icon}
                    />
                    <Card.Body>
                      <Text style={{ marginLeft: 16 }}>通过对数字例如电话号码的排列组合对固定数字组合的运势做判断</Text>
                    </Card.Body>
                  </Card>
                </TouchableOpacity>
                <WhiteSpace size="lg" />
                <TouchableOpacity onPress={() => { cthis.setState({ less: false }), navigate(RouteConfig['GamblePage'].route) }}>
                  <Card>
                    <Card.Header
                      extra={RouteConfig['GamblePage'].name}
                      thumbStyle={{ width: 30, height: 30 }}
                      thumb={RouteConfig['GamblePage'].icon}
                    />
                    <Card.Body>
                      <Text style={{ marginLeft: 16 }}>当你的情感不顺利的时候可以尝试用星座骰子去探索下问题</Text>
                    </Card.Body>
                  </Card>
                </TouchableOpacity>
                <WhiteSpace size="lg" />
              </View>
              <Button type="primary" onPress={() => cthis.setState({ less: false })}>
                关闭
          </Button>
            </Modal>)
          }
        }()}


        <Tabs tabs={this.state.tabs} page={"全部"} tabBarPosition="top" tabBarTextStyle={{ textAlign: "center", fontSize: FontStyleConfig.getFontApplySize() + 14, }}>
          {this.renderContent}
        </Tabs>
        <View>
          {function () {
            /*
            return (<TabNavigator.Item
              title={this.state.less == false ? RouteConfig["kitExplorationPage"].name : RouteConfig["kitPage"].name}
              renderIcon={() => RouteConfig["kitExplorationPage"].icon}
              //renderSelectedIcon={() => IconConfig.IconDvinationSel}
              //onPress={() => navigate(RouteConfig["kitExplorationPage"].route)}
              onPress={() => this.setState({ less: !this.state.less, tabs: false == this.state.less ? [{ title: '全部', isSelect: true }] : itemsrandom["全部"] })}
              titleStyle={StyleConfig.menufont}>
            </TabNavigator.Item>)
            */
          }()}
          {function () {
            /*
            if (kitPageController && kitPageController.state.less == false) {
              return (<TabNavigator.Item
                title={RouteConfig["SearchPage"].name}
                renderIcon={() => RouteConfig["SearchPage"].icon}
                //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                onPress={() => navigate(RouteConfig["SearchPage"].route)}
                titleStyle={StyleConfig.menufont}>
              </TabNavigator.Item>)
            }*/
          }()}
          {function () {
            /*
            if (Platform.OS === 'android' || Platform.OS === 'ios') {
              return (<TabNavigator.Item
                title={RouteConfig["service"].name}
                renderIcon={() => RouteConfig["service"].icon}
                //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                onPress={() => kitPageController.onBussion("service", navigate)}
                titleStyle={StyleConfig.menufont}>
              </TabNavigator.Item>)
            }
            */
          }()
          }

        </View>
      </View>)
  }
};
var Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',

  },
});
module.exports = kitPage;  