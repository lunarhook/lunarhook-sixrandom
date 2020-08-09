
import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Animated, AppRegistry, FlatList, Image, Dimensions, DeviceEventEmitter, TouchableOpacity, Platform, PermissionsAndroid } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Calendar, CalendarList, LocaleConfig } from 'react-native-calendars';
import { Modal } from '@ant-design/react-native';
import RouteConfig from './config/RouteConfig';
import IconConfig from './config/IconConfig';
import ScreenConfig from './config/ScreenConfig';
import { FontStyleConfig } from './config/StyleConfig';
import NetModule from './net/NetModule'
import { appinfo, appname } from './config/appinfo'
import { SixrandomModule } from './kit/UniversechangesLib/SixrandomLib/SixrandomModule'
import UniversechangesConfig from './kit/UniversechangesLib/UniversechangesConfig';
import { WhiteSpace, Card, WingBlank } from '@ant-design/react-native'
import { HistoryArrayGroup } from './config/StorageModule'
import RNExitApp from 'react-native-exit-app';
import { useNavigation } from '@react-navigation/native';
HistoryArrayGroup.init()


LocaleConfig.locales['cn'] = {
  monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  monthNamesShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  dayNames: ['日', '一', '二', '三', '四', '五', '六'],
  dayNamesShort: ['日', '一', '二', '三', '四', '五', '六']
};

LocaleConfig.defaultLocale = 'cn';
const { width, height } = Dimensions.get('window');
var imgtime = new Array()
var infotime = new Array()
var infotimedetail = new Array()
let CalendarPagethis = undefined
class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    var wanNianLiInfo = SixrandomModule.lunarsix();
    var curtimelucky = wanNianLiInfo.info.gzTime
    var imgindex = imgtime[curtimelucky[1]]
    var day = new Date();
    var sel = this.getDateFormat(day)
    var timelucky = UniversechangesConfig.gettimelucky(wanNianLiInfo.info.gzDate)
    this.state = {
      wanNianLiInfo: wanNianLiInfo,
      selected: sel,
      //info: info,
      timelucky: timelucky,
      imgindex: imgindex,
      fadeInOpacity: new Animated.Value(0),
      handler: 0,
      otherParam: false,
    };
    if (undefined == CalendarPagethis) {
      //console.log("CalendarPageload")
      NetModule._handleWebSocketSetup()
    }
    this.onDayPress = this.onDayPress.bind(this);
    StyleConfig = FontStyleConfig.buildstyle()
    CalendarPagethis = this;
  };
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    var keys = AppRegistry.getAppKeys();
    //RouteConfig["CalendarPage"].name = appname[keys[0]]
    //console.log("getAppKeys", RouteConfig["CalendarPage"].name, keys[0], appname)
    return {
      headerLeft: () => (<></>),
      headerRight: () => (
        <TouchableOpacity
          style={[styles.dateContainer, { paddingRight: 40 }]}
          //onPress={() => navigate('Search')}
          onPress={() => CalendarPagethis.today()}>
          {(false == CalendarPagethis.state.otherParam) ? (null) : IconConfig.ReCover}
        </TouchableOpacity>),
      title: RouteConfig["CalendarPage"].name,
      cardStack: { gesturesEnabled: true }
    }
  };

  static ShareInstance() {
    if (!CalendarPagethis) {
      CalendarPagethis = new CalendarPage();
    }
    return CalendarPagethis;
  }
  UNSAFE_componentWillMount() {

    imgtime["子"] = require('../img/time/1.jpg')
    imgtime["丑"] = require('../img/time/2.jpg')
    imgtime["寅"] = require('../img/time/3.jpg')
    imgtime["卯"] = require('../img/time/4.jpg')
    imgtime["辰"] = require('../img/time/5.jpg')
    imgtime["巳"] = require('../img/time/6.jpg')
    imgtime["午"] = require('../img/time/7.jpg')
    imgtime["未"] = require('../img/time/8.jpg')
    imgtime["申"] = require('../img/time/9.jpg')
    imgtime["酉"] = require('../img/time/10.jpg')
    imgtime["戌"] = require('../img/time/11.jpg')
    imgtime["亥"] = require('../img/time/12.jpg')
    infotime["子"] = "子时 曰困敦，为混沌万物之初萌"//（注：万物刚开始滋生）
    infotime["丑"] = "鸡鸣 曰赤奋若，气运奋迅而起"//（注：万物萌发生长）东方明矣
    infotime["寅"] = "平旦 曰摄提格，万物承阳而起"//（注：万物吸收阳气快速吐芽）
    infotime["卯"] = "日出 曰单阏，阳气推万物而起"//（注：万物已近繁茂）
    infotime["辰"] = "食时 曰执徐，伏蛰之物，而敷舒出"//（注：万物舒展，持续茁壮）
    infotime["巳"] = "隅中 曰大荒落，万物炽盛而出，霍然落之"//（注：万物已经长成，生命力旺盛）
    infotime["午"] = "日中 曰敦牂，万物壮盛也"
    infotime["未"] = "日昳 曰协洽，阴阳和合，万物化生"//（注：万物成熟，但同时阴气渐起）
    infotime["申"] = "晡时 曰涒滩，万物吐秀，倾垂也"//（注：万物由极盛开始朝向衰败）
    infotime["酉"] = "日入 曰作噩，万物皆芒枝起"//（注：万物开始衰老）
    infotime["戌"] = "黄昏 曰阉茂，万物皆蔽冒也"//（注：万物已经衰灭）
    infotime["亥"] = "人定 曰大渊献，万物于天，深盖藏也"//（注：万物消亡，但已开始酝酿下一次的萌发）
    infotimedetail["子初"] = "阳气混沌"//一阳生
    infotimedetail["子正"] = "阳气始萌"//未央
    infotimedetail["丑初"] = "寒气屈曲"//未央
    infotimedetail["丑正"] = "燃灯"//未央
    infotimedetail["寅初"] = "平旦"//未央
    infotimedetail["寅正"] = "夜隐"//未央
    infotimedetail["卯初"] = "日始"//未央
    infotimedetail["卯正"] = "旭日升"//未央
    infotimedetail["辰初"] = "万物舒伸"//未央
    infotimedetail["辰正"] = "朝食"//未央
    infotimedetail["巳初"] = "阳气炙盛"
    infotimedetail["巳正"] = "大荒落"
    infotimedetail["午初"] = "阳气炙盛"
    infotimedetail["午正"] = "阴阳交相"
    infotimedetail["未初"] = "日中而昃"
    infotimedetail["未正"] = "眛·日跌"
    infotimedetail["申初"] = "伸缩"//（注：万物由极盛开始朝向衰败）
    infotimedetail["申正"] = "日西斜"//（注：万物由极盛开始朝向衰败）
    infotimedetail["酉初"] = "日入"//（注：万物开始衰老）
    infotimedetail["酉正"] = "日沉"//（注：万物开始衰老）
    infotimedetail["戌初"] = "万物朦胧"
    infotimedetail["戌正"] = "日夕"
    infotimedetail["亥初"] = "万物收藏"//（注：万物消亡，但已开始酝酿下一次的萌发）
    infotimedetail["亥正"] = "迎阳献祭"//（注：万物消亡，但已开始酝酿下一次的萌发）

  }

  componentDidMount() {
    this.timer = setInterval(() => {
      var wanNianLiInfo = SixrandomModule.lunarsix();
      var timelucky = UniversechangesConfig.gettimelucky(wanNianLiInfo.info.gzDate)
      var curtimelucky = wanNianLiInfo.info.gzTime
      var imgindex = imgtime[curtimelucky[1]]
      if (this.state.imgindex != imgindex) {
        console.log("slogantest", this.state.imgindex, imgindex)
        this.setState({ imgindex: imgindex, fadeInOpacity: new Animated.Value(0) })
      }
      this.setState({ wanNianLiInfo: wanNianLiInfo, timelucky: timelucky })//每分钟一跳，当系统
      var cur = new Date();
      cur = this.getDateFormat(cur)
      if (cur != this.state.selected) {
        this.setState({ otherParam: true })
      }
      //console.log("refresh calendar:",wanNianLiInfo)
    }, 1000 * 60);

  }
  componentWillUnmount() {
    imgtime = []
    infotime = []
    infotimedetail = []
    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.timer && clearInterval(this.timer);
  }
  renderItem(item) {
    return (
      <View style={StyleConfig.list}>
        <Text style={StyleConfig.list}>{item.item}</Text>
      </View>
    );
  }
  renderItemTimeLucky(item) {
    return (
      <View style={StyleConfig.columelist}>
        <Text style={StyleConfig.columehigth}>{item.item}</Text>
      </View>
    );
  }

  getDateFormat(curDate) {
    var date = new Date(curDate);
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
  }

  keyExtractor = (item, index) => index.toString()

  timedetail(infoindexdetail) {
    if ("" != infoindexdetail) {
      return (
        <View style={styles.dateContainer}>
          <Text style={StyleConfig.list}>
            {infoindexdetail}
          </Text>
        </View>
      )
    }
  }

  renderTabbar() {
    const { navigate } = this.props.navigation;
    var keys = AppRegistry.getAppKeys();
    ExplorationTab = (<TabNavigator.Item
      title={RouteConfig["ExplorationTab"].name}
      renderIcon={() => RouteConfig["ExplorationTab"].icon}
      //renderSelectedIcon={() => IconConfig.IconDvinationSel}
      onPress={() => navigate(RouteConfig["ExplorationTab"].route)}
      titleStyle={StyleConfig.menufont}>
    </TabNavigator.Item>)
    kitPage = (<TabNavigator.Item
      title={RouteConfig["kitPage"].name}
      renderIcon={() => RouteConfig["kitPage"].icon}
      //renderSelectedIcon={() => IconConfig.IconDvinationSel}
      onPress={() => navigate(RouteConfig["kitPage"].route)}
      titleStyle={StyleConfig.menufont}>
    </TabNavigator.Item>)
    LunarMasterPage = (<TabNavigator.Item
      title={RouteConfig["LunarMasterPage"].name}
      renderIcon={() => RouteConfig["LunarMasterPage"].icon}
      //renderSelectedIcon={() => IconConfig.IconDvinationSel}
      onPress={() => navigate(RouteConfig["LunarMasterPage"].route)}
      titleStyle={StyleConfig.menufont}>
    </TabNavigator.Item>
    )
    MyPage = (
      <TabNavigator.Item
        title={RouteConfig["MyPage"].name}
        renderIcon={() => RouteConfig["MyPage"].icon}
        //renderSelectedIcon={() => IconConfig.IconDvinationSel}
        onPress={() => navigate(RouteConfig["MyPage"].route)}
        titleStyle={StyleConfig.menufont}>
      </TabNavigator.Item>)
    /*
      if ("sixrandom" == keys) {
        return (
          <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight(), backgroundColor: '#ffffff', }}>
            {kitPage}
            {LunarMasterPage}
            {MyPage}
          </TabNavigator >
        )
      }
      return (
        <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight(), backgroundColor: '#ffffff', }}>
          {kitPage}
          {LunarMasterPage}
          {ExplorationTab}
          {MyPage}
        </TabNavigator >
      )
      */
  }



  render() {
    if (undefined != this.props.navigation.state.params && "refresh" === this.props.navigation.state.params.text) {
      this.props.navigation.state.params.text = ""
      StyleConfig = FontStyleConfig.buildstyle()
    }
    const { navigate } = this.props.navigation;
    var wanNianLiInfo = this.state.wanNianLiInfo;

    var sel = this.state.selected;
    var selectday = new Date(sel)
    var curtimelucky = this.state.wanNianLiInfo.info.gzTime
    var curgztime = this.state.wanNianLiInfo.info.gzQuarter;
    var imgindex = imgtime[curtimelucky[1]]

    var infoindex = infotime[curtimelucky[1]]
    var info = UniversechangesConfig.GetInfo(wanNianLiInfo)
    for (var j in this.state.timelucky) {
      if (this.state.timelucky[j].indexOf(this.state.wanNianLiInfo.info.gzTime) != -1) {
        curtimelucky = this.state.timelucky[j];
      }
    }
    var infoindexdetail = ""
    for (var x in infotimedetail) {
      if (-1 != curgztime.indexOf(x)) {
        infoindexdetail = infotimedetail[x]
      }
    }
    Animated.timing(this.state.fadeInOpacity, { toValue: 1, duration: 3000 }).start()
    //console.log("icon", imgindex)
    //console.log(Platform.OS,TabNavigator.tabBarHeight)
    return (
      <View style={StyleConfig.container}>
        <ScrollView style={{ backgroundColor: '#ffffff', }}>
          <View style={{ height: 350, backgroundColor: '#ffffff', }}>
            <Calendar
              horizontal={true}
              pagingEnabled={true}
              calendarWidth={width}
              onDayPress={this.onDayPress}
              style={styles.calendar}
              current={selectday}
              //current={'2012-05-16'}
              markedDates={{ [this.state.selected]: { selected: true, selectedColor: "#1FA7DE" } }}
              theme={{
                backgroundColor: '#ffffff',
                textSectionTitleColor: "#1FA7DE",
                selectedDayBackgroundColor: '#1FA7DE',
              }}
            />
          </View>
          <Card style={{ borderWidth: 0, alignItems: "center", backgroundColor: '#ffffff', }}>
            <Card.Body>

              <Animated.View style={{ opacity: this.state.fadeInOpacity }}>
                <Image
                  style={{ width: width - 20, height: 200, borderRadius: 15, backgroundColor: '#ffffff', }}
                  source={imgindex}
                />
              </Animated.View>
            </Card.Body>
          </Card>

          <WingBlank>
            <Animated.View style={{ opacity: this.state.fadeInOpacity, backgroundColor: '#ffffff', }}>
              <View style={styles.dateContainer}>
                <Text style={StyleConfig.list}>
                  {curgztime} {infoindexdetail}
                </Text>
                <Text style={StyleConfig.list}>
                  {infoindex}
                </Text></View>
            </Animated.View>
            <View style={styles.dateContainer}>
              <Text style={StyleConfig.list}>
                {wanNianLiInfo.info.Year}年{wanNianLiInfo.info.Month}月{wanNianLiInfo.info.Date}日 星期{wanNianLiInfo.info.cnDay}
              </Text>
              <Text style={StyleConfig.list}>
                {wanNianLiInfo.info.gzYear}年{wanNianLiInfo.info.lMonth}月{wanNianLiInfo.info.lDate} ({wanNianLiInfo.info.animal})
        </Text>
            </View>
            <Text style={StyleConfig.list}>{wanNianLiInfo.six_random_date[2]}</Text>
            <Text style={StyleConfig.list}>{wanNianLiInfo.six_random_date[3]}</Text>
            <Text style={StyleConfig.list}>{wanNianLiInfo.six_random_date[4]}</Text>
            <FlatList
              data={info}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
            />
            <Text style={StyleConfig.list}>
            </Text>
            <Text style={StyleConfig.list}>十二吉时:{curtimelucky}
            </Text>

            <FlatList
              style={{ backgroundColor: 'white' }}
              data={this.state.timelucky}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItemTimeLucky}
              columnWrapperStyle={{ justifyContent: 'space-around', alignItems: 'stretch', backgroundColor: 'white', }}
              numColumns={12}
            />
            <Text style={StyleConfig.list}>
            </Text>
            <Text style={StyleConfig.list}>
            </Text>
            <Text style={StyleConfig.list}>
            </Text>
            <Text style={StyleConfig.list}>
            </Text>
          </WingBlank>
        </ScrollView>
        {this.renderTabbar()}
      </View>
    )
  }

  today() {
    var now = new Date();
    var parameter = "?date=" + now.toString() + "&lunar=" + "999999" + "&question=";
    this.state.wanNianLiInfo = SixrandomModule.build(parameter);
    this.state.info = UniversechangesConfig.GetInfo(this.state.wanNianLiInfo)
    var sday = this.getDateFormat(now);
    this.setState({
      selected: sday,
      otherParam: false
    })
    this.props.navigation.setParams({otherParam: false})
  }
  onDayPress(day) {
    var now = new Date();
    var time = new Date(day.dateString);
    if (day.dateString == this.getDateFormat(now)) {
      this.today();
    }
    else {
      time.setHours(now.getHours());
      var parameter = "?date=" + time.toString() + "&lunar=" + "999999" + "&question=";
      this.state.wanNianLiInfo = SixrandomModule.build(parameter);
      this.state.info = UniversechangesConfig.GetInfo(this.state.wanNianLiInfo)
      this.setState({
        selected: day.dateString,otherParam: true 
      });
      this.props.navigation.setParams({otherParam: true })
    }

  }
  begin(pagename) {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: pagename }),
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }
};
var styles = StyleSheet.create({

  dateContainer: {
    backgroundColor: "#ffffff",
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  calendar: {
    //flex:1,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'white',
    //height:2000,
  },



  dateContainer: {
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
module.exports = CalendarPage;  