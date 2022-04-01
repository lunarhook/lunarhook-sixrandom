

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated, ScrollView, Image, Dimensions } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Storage from 'react-native-storage';

import { captureRef } from "react-native-view-shot";
import { Grid, Accordion, WhiteSpace, WingBlank, List, Icon } from '@ant-design/react-native';
const Item = List.Item;
import StorageModule from '../../../config/StorageModule'
import { SixrandomModule } from '../SixrandomLib/SixrandomModule'
import EightrandomModule from '../EightrandomLib/EightrandomModule'
import ScreenConfig from '../../../config/ScreenConfig';
import { StyleConfig, FontStyleConfig } from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
import IconConfig from '../../../config/IconConfig'
import { VictoryPie, VictoryBar, VictoryGroup, } from 'victory-native';
import { HistoryArrayGroup } from '../../../config/StorageModule'
import UserModule from '../../../config/UserModule'
import Svg, {
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Use,
  Defs,
  Stop
} from 'react-native-svg';
import { dateAdd } from '../solar2lunar/chinese-lunar';
import { tapGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/TapGestureHandler';
const { width, height } = Dimensions.get('window');

var jump = false
let curyearleader = 0
let curmonthleader = 0
let curyearPartnership = 0
let curmonthPartnership = 0
let PartnershipMainPagethis = undefined
/*
八字要展现的东西就比较多了
1、公立生日
2、生肖
3、星座
4、农历生日
5、命卦
6、姓名，性别
7、八字盘
8、地势
9、纳音
10、节气
11、大运
12、排大运
13、流年小运
14、四柱神煞
15、五行力量分析
16、日柱分析
17、八字婚姻
18、日柱分析
19、六亲
20、事业
21、健康
22、运势太岁关系
*/



class PartnershiMainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xingsuleader:"",
      xingsuPartnership:"",
      gzxkleader: "",
      shareimg: false,
      fadeInOpacity: new Animated.Value(0.3),
      gzxkPartnership: "",
      EightDateleader: "",
      EightDatePartnership: "",
      birthleader: "",
      birthPartnership: "",
      gzbirthleader: "",
      gzbirthPartnership: "",
      buildeightleader: new Array(),
      buildeightPartnership: new Array(),
      buildeightExtleader: new Array(),
      buildeightExtPartnership: new Array(),

      daykeyleader: new Array(),
      daykeyPartnership: new Array(),
      luckyyearleader: "",
      luckyyearpositionleader: "",
      luckyearrelationleader: "",
      curluckyearnumleader: 0,
      curminiluckyearnumleader: 0,
      beginluckyleader: 0,
      luckyyearPartnership: "",
      luckyyearpositionPartnership: "",
      luckyearrelationPartnership: "",
      curluckyearnumPartnership: 0,
      curminiluckyearnumPartnership: 0,
      beginluckyPartnership: 0,
      activeSections: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      renderswitch: false,
    };

    PartnershipMainPagethis = this
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
  };

  componentDidMount() {

    this.timer = setTimeout(
      () => {
        this.refreshlist()

      },
      200
    );
    this.timerinterval = setInterval(() => {
      this.setState({ fadeInOpacity: new Animated.Value(0.3) })
    }, 1000 * 3);
  }

  componentWillUnmount() {
    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.timer && clearInterval(this.timer);
    this.timerinterval && clearInterval(this.timerinterval);
  }

  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {

      //headerLeft:(<Button title="万年历" onPress={  () => navigate('MainPage')  }/>),
      //headerRight:(<Button title="历史" onPress={  () => navigate('HistoryPage')  }/>),
      title: RouteConfig["PartnershipMainPage"].name,
      headerRight: () => (
        <TouchableOpacity
          style={{ padding: 10, alignContent: "center", alignItems: "baseline" }}
          //onPress={() => navigate('Search')}
          onPress={() =>  PartnershipMainPagethis.deletethis()}
        >
          {IconConfig.IconDelete}
        </TouchableOpacity>),
    }
  };
  async deletethis()
  {
    var rowid = PartnershipMainPagethis.state.rowid 
    console.log("rowid",rowid)
    HistoryArrayGroup.loadid('Partnership', rowid).then(async (ret) => {
      if(undefined!=ret)
      {
        var Jobj = JSON.parse(ret);
        let T = await UserModule.SyncFileServer("Partnership", rowid, "")
        if (undefined != T && 2000 == T.code) {
          T.data.forEach(async (element) => {
            filename = element.File
            if (-1 != filename.indexOf(String(rowid)) && true == element.Del) {
              await HistoryArrayGroup.remove('Partnership', rowid);
            }
          });
        }
        else {
          await HistoryArrayGroup.remove('Partnership', rowid);
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

  refreshlist() {
    const { navigate } = this.props.navigation;

    var parameter = this.props.navigation.state.params.url


    if (undefined != parameter) {
      var info = null;
      var args = {};
      var match = null;
      var search = decodeURIComponent(parameter.substring(1));
      var reg = /(?:([^&]+)=([^&]+))/g;
      while ((match = reg.exec(search)) !== null) {
        args[match[1]] = match[2];
      }
      info = args
      var t = info.birthleader.split(" ");
      var gzleader = new Date(t[0]);
      gzleader.setHours(t[1]);
      gzleader.setMinutes(undefined != t[2] ? t[2] : t[2] = 0)
      gzleader.setSeconds(undefined != t[3] ? t[3] : t[3] = 0)
      info.birthleader = t[0] + " " + ("00" + t[1]).slice(-2) + ":" + ("00" + t[2]).slice(-2) + ":" + ("00" + t[3]).slice(-2)
      console.log(gzleader);
      var EightDategzleader = SixrandomModule.lunar_f(gzleader)
      var gzDateleader = EightDategzleader.gzYear + " " + EightDategzleader.gzMonth + " " + EightDategzleader.gzDate + " " + EightDategzleader.gzTime;
      var gzxkleader = SixrandomModule.get_empty_sixty_cycle(EightDategzleader.gzYear) + " " + SixrandomModule.get_empty_sixty_cycle(EightDategzleader.gzMonth) + " " + SixrandomModule.get_empty_sixty_cycle(EightDategzleader.gzDate) + " " + SixrandomModule.get_empty_sixty_cycle(EightDategzleader.gzTime);

      curyearleader = EightDategzleader.Year;
      curmonthleader = EightDategzleader.Month

      var rettermleader = EightrandomModule.getYearTerm(gzleader.getFullYear())
      var beginluckyleader = EightrandomModule.getbigluckyearbegin(rettermleader, gzleader, info.EightDateleader, info.sexleader);
      console.log("beginlucky", Math.floor(beginluckyleader), Number(gzleader.getFullYear()))
      PartnershipMainPagethis.setState({
        EightDateleader: info.EightDateleader, birthleader: info.birthleader, gzbirthleader: gzDateleader, beginluckyleader: Math.floor(beginluckyleader), gzxkleader: gzxkleader,xingsuleader:EightDategzleader.xingsu,sexleader:info.sexleader
      });
      this.buildeight("领导人",info.sexleader);

      t = info.birthPartnership.split(" ");
      var gzPartnership = new Date(t[0]);
      gzPartnership.setHours(t[1]);
      gzPartnership.setMinutes(undefined != t[2] ? t[2] : t[2] = 0)
      gzPartnership.setSeconds(undefined != t[3] ? t[3] : t[3] = 0)
      info.birthPartnership = t[0] + " " + ("00" + t[1]).slice(-2) + ":" + ("00" + t[2]).slice(-2) + ":" + ("00" + t[3]).slice(-2)
      console.log(gzPartnership);
      var EightDategzPartnership = SixrandomModule.lunar_f(gzPartnership)
      var gzDatePartnership = EightDategzPartnership.gzYear + " " + EightDategzPartnership.gzMonth + " " + EightDategzPartnership.gzDate + " " + EightDategzPartnership.gzTime;
      var gzxkPartnership = SixrandomModule.get_empty_sixty_cycle(EightDategzPartnership.gzYear) + " " + SixrandomModule.get_empty_sixty_cycle(EightDategzPartnership.gzMonth) + " " + SixrandomModule.get_empty_sixty_cycle(EightDategzPartnership.gzDate) + " " + SixrandomModule.get_empty_sixty_cycle(EightDategzPartnership.gzTime);

      curyearPartnership = EightDategzPartnership.Year;
      curmonthPartnership = EightDategzPartnership.Month

      var rettermPartnership = EightrandomModule.getYearTerm(gzPartnership.getFullYear())
      var beginluckyPartnership = EightrandomModule.getbigluckyearbegin(rettermPartnership, gzPartnership, info.EightDatePartnership, info.sexPartnership);
      console.log("beginlucky", Math.floor(beginluckyPartnership), Number(gzPartnership.getFullYear()))
      PartnershipMainPagethis.setState({
        EightDatePartnership: info.EightDatePartnership, birthPartnership: info.birthPartnership, gzbirthPartnership: gzDatePartnership, beginluckyPartnership: Math.floor(beginluckyPartnership), gzxkPartnership: gzxkPartnership,xingsuPartnership:EightDategzPartnership.xingsu,rowid:info.rowid,sexPartnership:info.sexPartnership
      });

      this.buildeight("合伙人",info.sexPartnership);

      this.setState({ renderswitch: true })
    }
  }

  buildeight(type,sex) {
    var buildeight = new Array()
    if ("领导人" == type) {
      buildeight[0] = EightrandomModule.parentday(this.state.EightDateleader[0], this.state.EightDateleader[4])
      buildeight[2] = EightrandomModule.parentday(this.state.EightDateleader[2], this.state.EightDateleader[4])
      buildeight[4] = sex
      buildeight[6] = EightrandomModule.parentday(this.state.EightDateleader[6], this.state.EightDateleader[4])
      buildeight[1] = EightrandomModule.parentearth(this.state.EightDateleader[1], this.state.EightDateleader[4])
      buildeight[3] = EightrandomModule.parentearth(this.state.EightDateleader[3], this.state.EightDateleader[4])
      buildeight[5] = EightrandomModule.parentearth(this.state.EightDateleader[5], this.state.EightDateleader[4])
      buildeight[7] = EightrandomModule.parentearth(this.state.EightDateleader[7], this.state.EightDateleader[4])
      var buildeightExt = new Array()
      buildeightExt[0] = EightrandomModule.gethide(this.state.EightDateleader[1]);
      buildeightExt[2] = EightrandomModule.gethide(this.state.EightDateleader[3]);
      buildeightExt[4] = EightrandomModule.gethide(this.state.EightDateleader[5]);
      buildeightExt[6] = EightrandomModule.gethide(this.state.EightDateleader[7]);
      buildeightExt[1] = EightrandomModule.gethideshishen(buildeightExt[0], this.state.EightDateleader[4]);
      buildeightExt[3] = EightrandomModule.gethideshishen(buildeightExt[2], this.state.EightDateleader[4]);
      buildeightExt[5] = EightrandomModule.gethideshishen(buildeightExt[4], this.state.EightDateleader[4]);
      buildeightExt[7] = EightrandomModule.gethideshishen(buildeightExt[6], this.state.EightDateleader[4]);
      var precent = new Array();
      var daykey = new Array();
      var o = EightrandomModule.getfive(this.state.EightDateleader)
      precent = o.q
      daykey = o.p



      var luckyyear = new Array();
      luckyyear = EightrandomModule.getbigluckyear(this.state.EightDateleader, "乾造");
      var luckyearrelation = new Array();
      var luckyyearposition = new Array();
      for (var i in luckyyear) {

        var rel = luckyyear[i].slice(0, 1);
        //console.log("luckyyear",rel, luckyyear[i]);
        rel = EightrandomModule.parentday(rel, this.state.EightDateleader[4])
        //console.log(rel);
        luckyearrelation.push(rel);
        luckyyearposition.push(EightrandomModule.gettwelfthposition(this.state.EightDateleader[4] + luckyyear[i].slice(1, 2)))
      }


      this.setState({
        buildeightleader: buildeight, buildeightExtleader: buildeightExt,
        daykeyleader: daykey, precentleader: precent,
        luckyyearleader: luckyyear,
        luckyyearpositionleader: luckyyearposition,
        luckyearrelationleader: luckyearrelation,
      });
      this.changeyear("", (new Date()).getFullYear(), "乾造")
    } else {
      buildeight[0] = EightrandomModule.parentday(this.state.EightDatePartnership[0], this.state.EightDatePartnership[4])
      buildeight[2] = EightrandomModule.parentday(this.state.EightDatePartnership[2], this.state.EightDatePartnership[4])
      buildeight[4] = sex
      buildeight[6] = EightrandomModule.parentday(this.state.EightDatePartnership[6], this.state.EightDatePartnership[4])
      buildeight[1] = EightrandomModule.parentearth(this.state.EightDatePartnership[1], this.state.EightDatePartnership[4])
      buildeight[3] = EightrandomModule.parentearth(this.state.EightDatePartnership[3], this.state.EightDatePartnership[4])
      buildeight[5] = EightrandomModule.parentearth(this.state.EightDatePartnership[5], this.state.EightDatePartnership[4])
      buildeight[7] = EightrandomModule.parentearth(this.state.EightDatePartnership[7], this.state.EightDatePartnership[4])
      var buildeightExt = new Array()
      buildeightExt[0] = EightrandomModule.gethide(this.state.EightDatePartnership[1]);
      buildeightExt[2] = EightrandomModule.gethide(this.state.EightDatePartnership[3]);
      buildeightExt[4] = EightrandomModule.gethide(this.state.EightDatePartnership[5]);
      buildeightExt[6] = EightrandomModule.gethide(this.state.EightDatePartnership[7]);
      buildeightExt[1] = EightrandomModule.gethideshishen(buildeightExt[0], this.state.EightDatePartnership[4]);
      buildeightExt[3] = EightrandomModule.gethideshishen(buildeightExt[2], this.state.EightDatePartnership[4]);
      buildeightExt[5] = EightrandomModule.gethideshishen(buildeightExt[4], this.state.EightDatePartnership[4]);
      buildeightExt[7] = EightrandomModule.gethideshishen(buildeightExt[6], this.state.EightDatePartnership[4]);
      var precent = new Array();
      var daykey = new Array();
      var o = EightrandomModule.getfive(this.state.EightDatePartnership)
      precent = o.q
      daykey = o.p



      var luckyyear = new Array();
      luckyyear = EightrandomModule.getbigluckyear(this.state.EightDatePartnership, "坤造");
      var luckyearrelation = new Array();
      var luckyyearposition = new Array();
      for (var i in luckyyear) {

        var rel = luckyyear[i].slice(0, 1);
        //console.log("luckyyear",rel, luckyyear[i]);
        rel = EightrandomModule.parentday(rel, this.state.EightDatePartnership[4])
        //console.log(rel);
        luckyearrelation.push(rel);
        luckyyearposition.push(EightrandomModule.gettwelfthposition(this.state.EightDatePartnership[4] + luckyyear[i].slice(1, 2)))
      }


      this.setState({
        buildeightPartnership: buildeight, buildeightExtPartnership: buildeightExt,
        daykeyPartnership: daykey, precentPartnership: precent,
        luckyyearPartnership: luckyyear,
        luckyyearpositionPartnership: luckyyearposition,
        luckyearrelationPartnership: luckyearrelation,
      });
      this.changeyear("", (new Date()).getFullYear(), "坤造")
    }

  }

  getColor(king, size) {
    if ("甲" == king || "乙" == king || "寅" == king || "卯" == king) {
      return (<Text style={[styles.Eightstylewithfont, { color: 'green', fontSize: size }]}>{king}</Text>)
    }
    if ("丙" == king || "丁" == king || "午" == king || "巳" == king) {
      return (<Text style={[styles.Eightstylewithfont, { color: 'red', fontSize: size }]}>{king}</Text>)
    }
    if ("戊" == king || "己" == king || "丑" == king || "未" == king || "辰" == king || "戌" == king) {
      return (<Text style={[styles.Eightstylewithfont, { color: '#8B4513', fontSize: size }]}>{king}</Text>)
    }
    if ("庚" == king || "辛" == king || "申" == king || "酉" == king) {
      return (<Text style={[styles.Eightstylewithfont, { color: '#DAA520', fontSize: size }]}>{king}</Text>)
    }
    if ("癸" == king || "壬" == king || "子" == king || "亥" == king) {
      return (<Text style={[styles.Eightstylewithfont, { color: '#1E90FF', fontSize: size }]}>{king}</Text>)
    }
    if (undefined != king && king.toString().length > 1) {
      return king
    }

    return (<Text style={[styles.Eightstylewithfont], { fontSize: size }}>{king}</Text>)
  }

  //keyExtractor = (item,index) => item.key
  keyExtractor = (item, index) => index.toString()

  renderItem(item) {
    return (

      <Text key={item.item} style={styles.flatTextfone}>{item.item}</Text>

    );
  }

  renderminyearItem(item, itemIndex) {

    var year = item.split(" ");
    var yearcolor = IconConfig.colororange
    if (year[1] == this.state.curminiluckyearnum) {
      yearcolor = IconConfig.colorblue
    }
    //console.log("color",yearcolor,year[1],this.state.curminiluckyearnum)
    return (
      <View style={[styles.grid, { height: 25 }]}>
        <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: yearcolor }}>{year[0]}</Text>
        <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: yearcolor }}>{year[1]}</Text>
      </View>

    );
  }
  changeyear(bigyear, miniyear, sex) {
    var by = 0
    var my = new Date()
    my = my.getFullYear()
    if ("" !== bigyear) {
      //console.log("changeyearbig",bigyear,miniyear)
      by = Number(bigyear)
      if(by>7){by=7}
      if ("乾造" == sex) {
        my = Math.floor(Number(by * 10 + this.state.beginluckyleader))
        this.setState({ curluckyearnumleader: by, curminiluckyearnumleader: my })
      } else {
        my = Math.floor(Number(by * 10 + this.state.beginluckyPartnership))
        this.setState({ curluckyearnumPartnership: by, curminiluckyearnumPartnership: my })
      }


    }
    else if ("" !== miniyear) {

      my = Number(miniyear)

      console.log("changeyearmini", bigyear, miniyear, by, my)
      if(my-70>this.state.beginlucky){my=this.state.beginlucky-60}
      if ("乾造" == sex) {
        if (my >= this.state.beginluckyleader) {
          by = Math.floor((my - this.state.beginluckyleader) / 10)
        }
        this.setState({ curluckyearnumleader: by, curminiluckyearnumleader: my })
      } else {
        if (my >= this.state.beginluckyPartnership) {
          by = Math.floor((my - this.state.beginluckyPartnership) / 10)
        }
        this.setState({ curluckyearnumPartnership: by, curminiluckyearnumPartnership: my })
      }
    }
    //console.log("changeyear",bigyear,miniyear,by,my,this.state.beginlucky)
  }


  checksub(hide) {
    if (undefined != hide) {
      return (
        <View style={styles.gridfix}>
          <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14 }}>{hide}</Text>
        </View>
      )
    }
  }
  testselectyear(item, curluckyear) {
    var yearcolor = IconConfig.colorred
    if (this.state.curluckyearnum == curluckyear) {
      yearcolor = IconConfig.colorgreen
    }
    //console.log("testselectyear",item,curluckyearleader,yearcolor)
    return (
      <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: yearcolor }}>{item}</Text>
    )
  }

  createpie() {
    if (this.state.precent != "") {
      var ret = this.state.pie
      console.log("createpie", ret)
      return (
        <View style={[{ textAlign: 'center', alignItems: 'center' }]}>
          <Svg width={300} height={300} >
            <VictoryPie
              colorScale={["green", "red", "#8B4513", "#DAA520", "#1E90FF"]}
              data={[
                { x: 1, y: this.state.precentleader[5] + 0, label: '木' },
                { x: 2, y: this.state.precentleader[6] + 0, label: '火' },
                { x: 3, y: this.state.precentleader[7] + 0, label: '土' },
                { x: 4, y: this.state.precentleader[8] + 0, label: '金' },
                { x: 5, y: this.state.precentleader[9] + 0, label: '水' },
              ]}
              standalone={false}
              width={300} height={300}
            />
          </Svg>
          <Svg height={300}>
            <VictoryGroup offset={(70)} width={400} domain={{ x: [-3, 6] }}
              colorScale={["green", "red", "#8B4513", "#DAA520", "#1E90FF"]}
            >
              <VictoryBar
                barWidth={15}
                data={[
                  { x: "甲", y: Number(this.state.daykeyleader['甲']) / 10 },
                  { x: "乙", y: Number(this.state.daykeyleader['乙']) / 10 },
                ]}
                labels={["甲:" + `${this.state.daykeyleader['甲']}`, "乙:" + `${this.state.daykeyleader['乙']}`]}
              />
              <VictoryBar
                barWidth={15}
                data={[
                  { x: "丙", y: Number(this.state.daykeyleader['丙']) / 10 },
                  { x: "丁", y: Number(this.state.daykeyleader['丁']) / 10 },
                ]}
                labels={["丙:" + `${this.state.daykeyleader['丙']}`, "丁:" + `${this.state.daykeyleader['丁']}`]}
              />
              <VictoryBar
                barWidth={15}
                data={[
                  { x: "戊", y: Number(this.state.daykeyleader['戊']) / 10 },
                  { x: "己", y: Number(this.state.daykeyleader['己']) / 10 },
                ]}
                labels={["戊:" + `${this.state.daykeyleader['戊']}`, "己:" + `${this.state.daykeyleader['己']}`]}
              />
              <VictoryBar
                barWidth={15}
                data={[
                  { x: "庚", y: Number(this.state.daykeyleader['庚']) / 10 },
                  { x: "辛", y: Number(this.state.daykeyleader['辛']) / 10 },
                ]}
                labels={["庚:" + `${this.state.daykeyleader['庚']}`, "辛:" + `${this.state.daykeyleader['辛']}`]}
              />
              <VictoryBar
                barWidth={15}
                data={[
                  { x: "壬", y: Number(this.state.daykeyleader['壬']) / 10 },
                  { x: "癸", y: Number(this.state.daykeyleader['癸']) / 10 },
                ]}
                labels={["壬:" + `${this.state.daykeyleader['壬']}`, "癸:" + `${this.state.daykeyleader['癸']}`]}
              />
            </VictoryGroup>
          </Svg>
        </View>
      )
    }
  }



  render() {


    if (undefined == this.state.luckyyearleader || "" == this.state.luckyyearleader || this.state.renderswitch == false) {
      return null
    }
    //这里是大运确定
    var curluckyearleader = this.state.luckyyearleader[this.state.curluckyearnumleader]

    var curluckyearPartnership = this.state.luckyyearPartnership[this.state.curluckyearnumPartnership]
    //console.log("curluckyearnum",Number(this.state.curluckyearnum))
    //这里小运，如果选了小运，用小运去换算大运
    var thisyear
    if (0 == this.state.curminiluckyearnumleader) {
      thisyear = new Date();
    }
    else {
      console.log("curminiluckyearnum", Number(this.state.curminiluckyearnumleader))
      thisyear = new Date()//这里应该选小运的年份
      thisyear.setFullYear(this.state.beginluckyleader)
      //这里必须要算出正月，所以流年月份按3月计算
      thisyear.setMonth(3)
    }

    //根据小运计算干支
    var eightyear = SixrandomModule.lunar_f(thisyear)
    var gzYear = eightyear.gzYear
    //计算大运，流年，原句的所有冲克信息
    console.log("curluckyearleader", this.state.luckyyear, this.state.curluckyearnum)
    var rleader = EightrandomModule.getrelationship(this.state.EightDateleader, gzYear[1], curluckyearleader, "乾造")
    var rPartnership = EightrandomModule.getrelationship(this.state.EightDatePartnership, gzYear[1], curluckyearPartnership, "坤造")
    const { navigate } = this.props.navigation;

    jump = false;


    var luckyyearpositionleader = this.state.luckyyearpositionleader;
    var luckyyearpositionPartnership = this.state.luckyyearpositionPartnership;
    var minluckyyear = new Array()
    var luckyearrelationleader = this.state.luckyearrelationleader;
    var luckyearrelationPartnership = this.state.luckyearrelationPartnership;
    //拍出所有小运
    var birthdayyear = new Date()
    birthdayyear.setYear(curyearleader)
    birthdayyear.setMonth(curmonthleader)
    birthdayyear = SixrandomModule.lunar_f(birthdayyear)
    birthdayyear = birthdayyear.gzYear + birthdayyear.gzMonth + birthdayyear.gzDate + birthdayyear.gzTime;
    console.log("birthdayyear", birthdayyear, curyearleader, curmonthleader)
    minluckyyear = EightrandomModule.getminlucky(birthdayyear, "乾造", curyearleader);


    //console.log(minluckyyear)

    var testleader = new Array()
    testleader.push({ info: "时辰", hide: '' })
    testleader.push({ info: "大运", hide: '' })
    testleader.push({ info: "流年", hide: '' })
    testleader.push({ info: "年柱", hide: '' })
    testleader.push({ info: "月柱", hide: '' })
    testleader.push({ info: "日柱", hide: '' })
    testleader.push({ info: "时柱", hide: '' })

    testleader.push({ info: "十神", hide: '' })
    //console.log(gzYear[0],this.state.EightDateleader[4])
    testleader.push({ info: EightrandomModule.parentday(curluckyearleader[0], this.state.EightDateleader[4]), hide: '' })
    testleader.push({ info: EightrandomModule.parentday(gzYear[0], this.state.EightDateleader[4]), hide: '' })
    for (var i = 0; i < 4; i++) {
      testleader.push({ info: this.state.buildeightleader[i * 2], hide: '' })
    }

    testleader.push({ info: "天干", hide: '' })
    testleader.push({ info: curluckyearleader[0], hide: '' })
    testleader.push({ info: gzYear[0], hide: '' })
    for (var i = 0; i < 4; i++) {
      testleader.push({ info: this.state.EightDateleader[i * 2], hide: '' })
    }

    testleader.push({ info: "地支", hide: '' })
    testleader.push({ info: curluckyearleader[1], hide: "" })
    testleader.push({ info: gzYear[1], hide: "" })
    for (var i = 0; i < 4; i++) {
      testleader.push({ info: this.state.EightDateleader[i * 2 + 1], hide: "" })
    }

    testleader.push({ info: "十神", hide: '' })
    testleader.push({ info: EightrandomModule.parentearth(curluckyearleader[1], this.state.EightDateleader[4]), hide: "" })
    testleader.push({ info: EightrandomModule.parentearth(gzYear[1], this.state.EightDateleader[4]), hide: "" })

    for (var i = 0; i < 4; i++) {
      testleader.push({ info: this.state.buildeightleader[i * 2 + 1], hide: "" })
    }

    var testPartnership = new Array()
    testPartnership.push({ info: "时辰", hide: '' })
    testPartnership.push({ info: "大运", hide: '' })
    testPartnership.push({ info: "流年", hide: '' })
    testPartnership.push({ info: "年柱", hide: '' })
    testPartnership.push({ info: "月柱", hide: '' })
    testPartnership.push({ info: "日柱", hide: '' })
    testPartnership.push({ info: "时柱", hide: '' })

    testPartnership.push({ info: "十神", hide: '' })
    //console.log(gzYear[0],this.state.EightDateleader[4])
    testPartnership.push({ info: EightrandomModule.parentday(curluckyearPartnership[0], this.state.EightDatePartnership[4]), hide: '' })
    testPartnership.push({ info: EightrandomModule.parentday(gzYear[0], this.state.EightDatePartnership[4]), hide: '' })
    for (var i = 0; i < 4; i++) {
      testPartnership.push({ info: this.state.buildeightPartnership[i * 2], hide: '' })
    }

    testPartnership.push({ info: "天干", hide: '' })
    testPartnership.push({ info: curluckyearPartnership[0], hide: '' })
    testPartnership.push({ info: gzYear[0], hide: '' })
    for (var i = 0; i < 4; i++) {
      testPartnership.push({ info: this.state.EightDatePartnership[i * 2], hide: '' })
    }

    testPartnership.push({ info: "地支", hide: '' })
    testPartnership.push({ info: curluckyearPartnership[1], hide: "" })
    testPartnership.push({ info: gzYear[1], hide: "" })
    for (var i = 0; i < 4; i++) {
      testPartnership.push({ info: this.state.EightDatePartnership[i * 2 + 1], hide: "" })
    }

    testPartnership.push({ info: "十神", hide: '' })
    testPartnership.push({ info: EightrandomModule.parentearth(curluckyearPartnership[1], this.state.EightDatePartnership[4]), hide: "" })
    testPartnership.push({ info: EightrandomModule.parentearth(gzYear[1], this.state.EightDatePartnership[4]), hide: "" })

    for (var i = 0; i < 4; i++) {
      testPartnership.push({ info: this.state.buildeightPartnership[i * 2 + 1], hide: "" })
    }

    var test1leader = new Array()

    test1leader.push({ info: ["", "藏干"], hide: '' })
    var hidelist = EightrandomModule.gethide(curluckyearleader[1])
    hidelist = hidelist.split("")
    var hindinfo = new Array()
    hidelist.forEach(element => {

      hindinfo.push(element + EightrandomModule.parentday(element, this.state.EightDateleader[4]))
    });
    test1leader.push({ info: hindinfo, hide: "" })

    hidelist = EightrandomModule.gethide(gzYear[1])
    hidelist = hidelist.split("")
    hindinfo = new Array()
    hidelist.forEach(element => {
      hindinfo.push(element + EightrandomModule.parentday(element, this.state.EightDateleader[4]))
    });
    test1leader.push({ info: hindinfo, hide: "" })
    for (var i = 0; i < 4; i++) {
      hidelist = this.state.buildeightExtleader[i * 2]
      hidelist = hidelist.split("")
      hindinfo = new Array()
      hidelist.forEach(element => {
        hindinfo.push(element + EightrandomModule.parentday(element, this.state.EightDateleader[4]))
      });
      test1leader.push({ info: hindinfo, hide: "" })
    }

    var test1Partnership = new Array()

    test1Partnership.push({ info: ["", "藏干"], hide: '' })
    var hidelist = EightrandomModule.gethide(curluckyearPartnership[1])
    hidelist = hidelist.split("")
    var hindinfo = new Array()
    hidelist.forEach(element => {

      hindinfo.push(element + EightrandomModule.parentday(element, this.state.EightDatePartnership[4]))
    });
    test1Partnership.push({ info: hindinfo, hide: "" })

    hidelist = EightrandomModule.gethide(gzYear[1])
    hidelist = hidelist.split("")
    hindinfo = new Array()
    hidelist.forEach(element => {
      hindinfo.push(element + EightrandomModule.parentday(element, this.state.EightDatePartnership[4]))
    });
    test1Partnership.push({ info: hindinfo, hide: "" })
    for (var i = 0; i < 4; i++) {
      hidelist = this.state.buildeightExtPartnership[i * 2]
      hidelist = hidelist.split("")
      hindinfo = new Array()
      hidelist.forEach(element => {
        hindinfo.push(element + EightrandomModule.parentday(element, this.state.EightDatePartnership[4]))
      });
      test1Partnership.push({ info: hindinfo, hide: "" })
    }
    /*
        testleader.push({ info: "副星", hide: '' })
        testleader.push({ info: EightrandomModule.gethide(curluckyearleader[1]) + EightrandomModule.parentearth(curluckyearleader[1], this.state.EightDateleader[4]), hide: "" })
        testleader.push({ info: EightrandomModule.gethide(gzYear[1]) + EightrandomModule.parentearth(gzYear[1], this.state.EightDateleader[4]), hide: "" })
    
        for (var i = 0; i < 4; i++) {
          testleader.push({ info: this.state.buildeightExt[i * 2] + this.state.buildeight[i * 2 + 1], hide: this.state.buildeightExt[i * 2 + 1] })
        }
    */

    var test2leader = new Array()

    test2leader.push({ info: "长生", hide: '' })
    test2leader.push({ info: EightrandomModule.gettwelfthposition(this.state.EightDateleader[4] + curluckyearleader[1]), hide: '' })
    test2leader.push({ info: EightrandomModule.gettwelfthposition(this.state.EightDateleader[4] + gzYear[1]), hide: '' })
    for (var i = 0; i < 4; i++) {
      var x = EightrandomModule.gettwelfthposition(this.state.EightDateleader[4] + this.state.EightDateleader[i * 2 + 1])
      test2leader.push({ info: x, hide: "" })
    }

    test2leader.push({ info: "纳音", hide: '' })
    test2leader.push({ info: EightrandomModule.gettwelfth(curluckyearleader[0] + curluckyearleader[1]), hide: '' })
    test2leader.push({ info: EightrandomModule.gettwelfth(gzYear[0] + gzYear[1]), hide: '' })
    for (var i = 0; i < 4; i++) {
      var x = EightrandomModule.gettwelfth(this.state.EightDateleader[i * 2] + this.state.EightDateleader[i * 2 + 1])
      test2leader.push({ info: x, hide: "" })
    }

    var test2Partnership = new Array()

    test2Partnership.push({ info: "长生", hide: '' })
    test2Partnership.push({ info: EightrandomModule.gettwelfthposition(this.state.EightDatePartnership[4] + curluckyearPartnership[1]), hide: '' })
    test2Partnership.push({ info: EightrandomModule.gettwelfthposition(this.state.EightDatePartnership[4] + gzYear[1]), hide: '' })
    for (var i = 0; i < 4; i++) {
      var x = EightrandomModule.gettwelfthposition(this.state.EightDatePartnership[4] + this.state.EightDateleader[i * 2 + 1])
      test2Partnership.push({ info: x, hide: "" })
    }

    test2Partnership.push({ info: "纳音", hide: '' })
    test2Partnership.push({ info: EightrandomModule.gettwelfth(curluckyearPartnership[0] + curluckyearPartnership[1]), hide: '' })
    test2Partnership.push({ info: EightrandomModule.gettwelfth(gzYear[0] + gzYear[1]), hide: '' })
    for (var i = 0; i < 4; i++) {
      var x = EightrandomModule.gettwelfth(this.state.EightDatePartnership[i * 2] + this.state.EightDatePartnership[i * 2 + 1])
      test2Partnership.push({ info: x, hide: "" })
    }

    var yearsnumberleader = new Array()
    for (var i = 0; i < 8; i++) {
      yearsnumberleader.push(i == 0 ? this.state.beginluckyleader : yearsnumberleader[i - 1] + 10)
    }
    var yearsleader = new Array()
    yearsleader = luckyearrelationleader.concat(yearsnumberleader, this.state.luckyyearleader, luckyyearpositionleader)



    var yearsnumberPartnership = new Array()
    for (var i = 0; i < 8; i++) {
      yearsnumberPartnership.push(i == 0 ? this.state.beginluckyPartnership : yearsnumberPartnership[i - 1] + 10)
    }
    var yearsPartnership = new Array()
    yearsPartnership = luckyearrelationPartnership.concat(yearsnumberPartnership, this.state.luckyyearPartnership, luckyyearpositionPartnership)
    //console.log("years", years, luckyearrelation, this.state.luckyyear, luckyyearposition)

    var fiveleader = new Array();
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>木</Text>)
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>火</Text>)
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>土</Text>)
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>金</Text>)
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>水</Text>)
    /*
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>甲:{this.state.daykeyleader['甲']}</Text>)
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>丙:{this.state.daykeyleader['丙']}</Text>)
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>戊:{this.state.daykeyleader['戊']}</Text>)
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>庚:{this.state.daykeyleader['庚']}</Text>)
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>壬:{this.state.daykeyleader['壬']}</Text>)
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>乙:{this.state.daykeyleader['乙']}</Text>)
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>丁:{this.state.daykeyleader['丁']}</Text>)
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>己:{this.state.daykeyleader['己']}</Text>)
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>辛:{this.state.daykeyleader['辛']}</Text>)
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>癸:{this.state.daykeyleader['癸']}</Text>)
    */
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>{this.state.precentleader[5]}%</Text>)
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>{this.state.precentleader[6]}%</Text>)
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>{this.state.precentleader[7]}%</Text>)
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>{this.state.precentleader[8]}%</Text>)
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>{this.state.precentleader[9]}%</Text>)
    var fivepowerleader = EightrandomModule.geikeypower(this.state.EightDateleader[3]);
    var fivepowerPartnership = EightrandomModule.geikeypower(this.state.EightDatePartnership[3]);
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>{fivepowerleader[0]}</Text>)
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>{fivepowerleader[1]}</Text>)
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>{fivepowerleader[2]}</Text>)
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>{fivepowerleader[3]}</Text>)
    fiveleader.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>{fivepowerleader[4]}</Text>)
    //console.log("five",five)

    var fivePartnership = new Array();
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>木</Text>)
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>火</Text>)
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>土</Text>)
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>金</Text>)
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>水</Text>)
    /*
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>甲:{this.state.daykeyleader['甲']}</Text>)
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>丙:{this.state.daykeyleader['丙']}</Text>)
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>戊:{this.state.daykeyleader['戊']}</Text>)
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>庚:{this.state.daykeyleader['庚']}</Text>)
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>壬:{this.state.daykeyleader['壬']}</Text>)
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>乙:{this.state.daykeyleader['乙']}</Text>)
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>丁:{this.state.daykeyleader['丁']}</Text>)
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>己:{this.state.daykeyleader['己']}</Text>)
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>辛:{this.state.daykeyleader['辛']}</Text>)
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>癸:{this.state.daykeyleader['癸']}</Text>)
    */
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>{this.state.precentPartnership[5]}%</Text>)
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>{this.state.precentPartnership[6]}%</Text>)
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>{this.state.precentPartnership[7]}%</Text>)
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>{this.state.precentPartnership[8]}%</Text>)
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>{this.state.precentPartnership[9]}%</Text>)
    var fivepowerleader = EightrandomModule.geikeypower(this.state.EightDateleader[3]);
    var fivepowerPartnership = EightrandomModule.geikeypower(this.state.EightDatePartnership[3]);
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>{fivepowerPartnership[0]}</Text>)
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>{fivepowerPartnership[1]}</Text>)
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>{fivepowerPartnership[2]}</Text>)
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>{fivepowerPartnership[3]}</Text>)
    fivePartnership.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>{fivepowerPartnership[4]}</Text>)
    //console.log("five",five)


    var dayleader = EightrandomModule.getselfinfo(this.state.EightDateleader[4] + this.state.EightDateleader[5])
    var dayPartnership = EightrandomModule.getselfinfo(this.state.EightDatePartnership[4] + this.state.EightDatePartnership[5])

    var shensha = new Array()
    /*
    shensha[0] = '年柱：'
    shensha[1] = '月柱：'
    shensha[2] = '日柱：'
    shensha[3] = '时柱：'
    for (i = 0; i < 4; i++) {
      this.state.EightDateleader[i]
      shensha[i] = shensha[i] + EightrandomModule.shensha_dayg2earthz(this.state.EightDateleader[4], this.state.EightDateleader[i * 2 + 1]);
      shensha[i] = shensha[i] + EightrandomModule.shensha_moon(this.state.EightDateleader[3], this.state.EightDateleader[i * 2]);
      shensha[i] = shensha[i] + EightrandomModule.shensha_yearg2earthz(this.state.EightDateleader[0], this.state.EightDateleader[i * 2 +1]);
      if (i != 1) {
        shensha[i] = shensha[i] + EightrandomModule.shensha_moon(this.state.EightDateleader[3], this.state.EightDateleader[i * 2 + 1]);//月支不见月支
      }
      if (i != 2) {
        shensha[i] = shensha[i] + EightrandomModule.shensha_dayz2earthz(this.state.EightDateleader[5], this.state.EightDateleader[i * 2 + 1]);//日支不见自己
      }
      if (i != 0) {
        shensha[i] = shensha[i] + EightrandomModule.shensha_tianluo(this.state.EightDateleader[0] + this.state.EightDateleader[1], this.state.EightDateleader[i * 2 + 1]);//年支不见年支
        shensha[i] = shensha[i] + EightrandomModule.shensha_diwang(this.state.EightDateleader[0] + this.state.EightDateleader[1], this.state.EightDateleader[i * 2 + 1]);//年支不见年支
        shensha[i] = shensha[i] + EightrandomModule.shensha_yearz2earthz(this.state.EightDateleader[1], this.state.EightDateleader[i * 2 + 1]);//年支不见年支
      }

    }
    */
   /*

八字看合伙规则
1、日元五行互补，比合不能相互克制（合婚姻翻着）
2、五行地支相合，比同，不能相互冲互克（同婚姻）
3、天干地支有合为上，合神不能相互克
4、比劫多者不建议合伙，日主印旺者比劫忌神的，不能合伙，比劫为用神适合合伙（扶抑用神需要同弱才可合伙）
5、双方的喜用神不能互补（合婚相反，会出现利益冲突）
6、正官星喜用优先，正印喜用其次，正财第三，食神第四，依次加分
7、身财两旺者不可合伙
9、纳音必须同合生半克反
*/
    //身旺判断
    var totalcountleader = 0
    var totalcountPartnership = 0
    const daykey = "甲乙丙丁戊己庚辛壬癸"
    const dayfive = "木木火火土土金金水水"
    const earthkey = "子丑寅卯辰巳午未申酉戌亥"
    const earthfive = "水土木木土火火土金金土水"
    const kindleader = "木土，火金，土水，金木，水火，"
    const kindPartnership = "土木，金火，水土，木金，火水，"
    const kindassistleader = "木火,火土,土金,金水,水木,"
    const kindassistPartnership = "火木,土火,金土,水金,木水,"
    const kindassist = kindassistleader+kindassistPartnership
    const kindsame = "木木，火火，土土，金金，水水"
    const kind = kindleader + kindPartnership
    //四柱不应该被冲克刑
    const congtest = "辰戌，戌辰，子午，午子，寅申，申寅，卯酉，酉卯，丑未，未丑，巳亥，亥巳，子卯，卯子，午午，亥亥，酉酉，辰辰，酉戌，戌酉，卯辰，辰卯，子未，未子，丑午，午丑，申亥，亥申，寅巳，巳寅，丑午，午丑"
    const sixhetest = "子丑，丑子，寅亥，亥寅，卯戌，戌卯，辰酉，酉辰，巳申，申巳，午未，未午，"
    const sanhetest = "申子，子申，亥卯，卯亥，寅午，午寅，巳酉，酉巳，子辰，辰子，卯未，未卯，午戌，戌午，酉丑，丑酉，亥未，未亥，申辰，辰申，巳丑，丑巳，寅戌，戌寅"
    const hetest = sixhetest + sanhetest
    var tianganhuahe = []
    tianganhuahe["甲己"] = tianganhuahe["己甲"] = "土"
    tianganhuahe["乙庚"] = tianganhuahe["庚乙"] = "金"
    tianganhuahe["丙辛"] = tianganhuahe["辛丙"] = "水"
    tianganhuahe["丁壬"] = tianganhuahe["壬丁"] = "木"
    tianganhuahe["戊癸"] = tianganhuahe["癸戊"] = "火"

    var ret_powerselfleader = EightrandomModule.getpowerself(this.state.EightDateleader, this.state.buildeightleader,curluckyearleader[1],this.state.precentleader)
    var testpowerselfleader = ret_powerselfleader.powerself

    //身旺判断
    var ret_powerselfPartnership = EightrandomModule.getpowerself(this.state.EightDatePartnership, this.state.buildeightPartnership,curluckyearPartnership[1],this.state.precentPartnership)
    var testpowerselfPartnership = ret_powerselfPartnership.powerself

    var yongshenleader = EightrandomModule.getyongshen(this.state.EightDateleader, this.state.buildeightleader, curluckyearleader[1],this.state.precentleader)
    var yongshenPartnership = EightrandomModule.getyongshen(this.state.EightDatePartnership, this.state.buildeightPartnership, curluckyearPartnership[1],this.state.precentPartnership)

    var Partnershipinfoleader = EightrandomModule.getmarryinfo(this.state.EightDateleader, this.state.sexleader, rleader, this.state.buildeightleader)
    var PartnershipinfoPartnership = EightrandomModule.getmarryinfo(this.state.EightDatePartnership, this.state.sexPartnership, rPartnership, this.state.buildeightPartnership)
    var locationselfleader = EightrandomModule.getlocationself(curyearleader, 0)
    var locationselfPartnership = EightrandomModule.getlocationself(curyearPartnership, 1)
    var houseleader = EightrandomModule.gethouselocation(locationselfleader)
    var housePartnership = EightrandomModule.gethouselocation(locationselfPartnership)
    var homeleader = new Array()
    homeleader = homeleader.concat(dayleader.self)
    homeleader = homeleader.concat(dayleader.tip)
    homeleader = homeleader.concat(houseleader)
    var homePartnership = new Array()
    homePartnership = homePartnership.concat(dayPartnership.self)
    homePartnership = homePartnership.concat(dayPartnership.tip)
    homePartnership = homePartnership.concat(housePartnership)
    console.log("locationself", locationselfleader)
    var base = new Array()
    base.push(["命  造:", this.state.sexleader, this.state.sexPartnership])
    base.push(["公  历:", this.state.birthleader, this.state.birthPartnership])
    base.push(["四  柱:", this.state.gzbirthleader, this.state.gzbirthPartnership])
    base.push(["旬  空:", this.state.gzxkleader, this.state.gzxkPartnership])
    base.push(["起  运:", this.state.beginluckyleader, this.state.beginluckyPartnership])
    base.push(["命  卦:", locationselfleader, locationselfPartnership])
    base.push(["身  旺:", testpowerselfleader, testpowerselfPartnership])
    base.push(["用  神:", yongshenleader.yongshen, yongshenPartnership.yongshen])
    base.push(["喜  神:", yongshenleader.xishen, yongshenPartnership.xishen])
    if(""!=yongshenleader.xishen2 || ""!=yongshenPartnership.xishen2)
    {
      base.push(["后  喜:", yongshenleader.xishen2, yongshenPartnership.xishen2])
    }

    base.push(["忌  神:", yongshenleader.jishen, yongshenPartnership.jishen])
    if(""!= yongshenleader.jishen2 || ""!=yongshenPartnership.jishen2)
    {
      base.push(["后  忌:", yongshenleader.jishen2, yongshenPartnership.jishen2])
    }

    base.push(["仇  神:", yongshenleader.choushen, yongshenPartnership.choushen])
    if(undefined!=yongshenleader.buyongshen || undefined!=yongshenPartnership.buyongshen)
    {
      base.push(["病  药:", undefined!=yongshenleader.buyongshen?yongshenleader.buyongshen:"", undefined!=yongshenPartnership.buyongshen?yongshenPartnership.buyongshen:""])
    
    }
    base.push(["扶  抑:", yongshenleader.adjustyongshen,yongshenPartnership.adjustyongshen ])
    var leaderyongshencheck = yongshenleader.yongshen + yongshenleader.xishen
    var Partnershipyongshencheck = yongshenPartnership.yongshen + yongshenPartnership.xishen
    //喜忌相同互助
    if (-1 != yongshenleader.yongshen.indexOf(yongshenPartnership.jishen) || -1 != yongshenleader.yongshen.indexOf(yongshenPartnership.choushen) ) {
      leaderyongshencheck = IconConfig.IconPartnershipCheck
    }
    //喜用互补相互耗
    else if((-1 != yongshenleader.yongshen.indexOf(yongshenPartnership.xishen) || -1 != yongshenleader.yongshen.indexOf(yongshenPartnership.xishen2) )){
      leaderyongshencheck = IconConfig.IconPartnershipCheckfault
    }
    else{
      //相克不支持
      leaderyongshencheck = IconConfig.IconPartnershipCheckLeft
    }
    //喜用相同
    if (-1 != yongshenPartnership.yongshen.indexOf(yongshenleader.jishen) || -1 != yongshenPartnership.yongshen.indexOf(yongshenleader.choushen)) {
      Partnershipyongshencheck = IconConfig.IconPartnershipCheck
    }
    //喜用互补相互号
    else if((-1 != yongshenPartnership.yongshen.indexOf(yongshenleader.xishen) || -1 != yongshenPartnership.yongshen.indexOf(yongshenleader.xishen2) )){
      Partnershipyongshencheck = IconConfig.IconPartnershipCheckfault
    } else {
      //相克不支持
      Partnershipyongshencheck = IconConfig.IconPartnershipCheckRight
    }
    if(IconConfig.IconPartnershipCheck==leaderyongshencheck){totalcountleader  = totalcountleader+20}
    else if(IconConfig.IconPartnershipCheckLeft==leaderyongshencheck){totalcountleader  = totalcountleader+10}
    if(IconConfig.IconPartnershipCheck==Partnershipyongshencheck){totalcountPartnership  = totalcountPartnership+20}
    else if(IconConfig.IconPartnershipCheckRight==Partnershipyongshencheck){totalcountPartnership  = totalcountPartnership+10}
    base.push(["神  合:", leaderyongshencheck, Partnershipyongshencheck])
    


    base.push(["日  元:", this.state.EightDateleader[4], this.state.EightDatePartnership[4]])
    /*
    它的主和顺序是：同性克，比劫同 （ 异性克是很难克制的，比如甲去克己，直接合走，天干五合，生的关系就不太好，男命祖父，女命母亲，妈宝之类的）
    如果日元直接五合，也就是好婚配，所以同配就是一般了，比如丙配丙丁，相生就庚差一些，最下配
    甲 己戊庚辛 
    乙 庚己辛戊 
    丙 辛庚壬癸 
    丁 壬辛癸庚 
    戊 癸壬甲乙 
    己 甲癸乙壬 
    庚 乙甲丙丁 
    辛 丙乙丁甲 
    壬 丁丙戊己 
    癸 戊丁己丙
    */
    //日元不能相互克
    //日元天干化合为喜用最佳
    var leader = IconConfig.IconPartnershipCheckfault
    var Partnership = IconConfig.IconPartnershipCheckfault

    if (undefined != tianganhuahe[this.state.EightDateleader[4] + this.state.EightDatePartnership[4]]) {
      //天干化合，但是土为忌仇神，只能半合
      var x = tianganhuahe[this.state.EightDateleader[4] + this.state.EightDatePartnership[4]]
      if (-1 != (yongshenleader.xishen + yongshenleader.yongshen).indexOf(x)) {
        leader = IconConfig.IconPartnershipCheckLeft
      }
      else{
        leader = IconConfig.IconPartnershipCheck
      }
      if (-1 != (yongshenPartnership.xishen + yongshenPartnership.yongshen).indexOf(x)) {
        Partnership = IconConfig.IconPartnershipCheckRight
      }else
      {
        Partnership = IconConfig.IconPartnershipCheck
      }
    }
    else if (-1 != kind.indexOf(dayfive[daykey.indexOf(this.state.EightDateleader[4])] + dayfive[daykey.indexOf(this.state.EightDatePartnership[4])])) {
      //天干相克不合
      Partnership = IconConfig.IconPartnershipCheckfault
      leader = IconConfig.IconPartnershipCheckfault
    }
    else if(-1!=kindsame.indexOf(dayfive[daykey.indexOf(this.state.EightDateleader[4])] + dayfive[daykey.indexOf(this.state.EightDatePartnership[4])]))
    {
      //天干相同半合
      leader = IconConfig.IconPartnershipCheckLeft
      Partnership = IconConfig.IconPartnershipCheckRight
    }
    //日元印生，同强同弱用神不冲突
    else if (-1 != kindassist.indexOf(dayfive[daykey.indexOf(this.state.EightDateleader[4])] + dayfive[daykey.indexOf(this.state.EightDatePartnership[4])]) || dayfive[daykey.indexOf(this.state.EightDateleader[4])] == dayfive[daykey.indexOf(this.state.EightDatePartnership[4])]) {
        leader = IconConfig.IconPartnershipCheckfault   
        Partnership = IconConfig.IconPartnershipCheckfault
        if(yongshenleader.adjustyongshen.indexOf("扶") && yongshenPartnership.adjustyongshen.indexOf("扶"))
        {
          leader = IconConfig.IconPartnershipCheck  
          Partnership = IconConfig.IconPartnershipCheck
        }
        else if(yongshenleader.adjustyongshen.indexOf("扶") && yongshenPartnership.adjustyongshen.indexOf("抑"))
        {
          leader = IconConfig.IconPartnershipCheck  
          Partnership = IconConfig.IconPartnershipCheckRight
        }            
        else if(yongshenleader.adjustyongshen.indexOf("抑") && yongshenPartnership.adjustyongshen.indexOf("扶"))
        {
          leader = IconConfig.IconPartnershipCheckLeft  
          Partnership = IconConfig.IconPartnershipCheck
        }
    }
    
    if(IconConfig.IconPartnershipCheck==leader){totalcountleader  = totalcountleader+20}
    else if(IconConfig.IconPartnershipCheckLeft==leader){totalcountleader  = totalcountleader+10}
    if(IconConfig.IconPartnershipCheck==Partnership){totalcountPartnership  = totalcountPartnership+20}
    else if(IconConfig.IconPartnershipCheckRight==Partnership){totalcountPartnership  = totalcountPartnership+10}
    base.push(["元  合:", leader, Partnership])
   

    base.push(["日  支:", this.state.EightDateleader[5], this.state.EightDatePartnership[5]])
    Partnership = IconConfig.IconPartnershipCheckfault
    leader = IconConfig.IconPartnershipCheckfault
    //日支不能相互克制
    if (-1 == kind.indexOf(earthfive[earthkey.indexOf(this.state.EightDateleader[5])] + earthfive[earthkey.indexOf(this.state.EightDatePartnership[5])])) {
      //日支不能刑冲
      if (-1 == congtest.indexOf(this.state.EightDateleader[5] + this.state.EightDatePartnership[5])) {
        //日支最好是生，和日元完全相反，同半，克最差，但是生也不能刑，比如子卯
        if(-1!=kindassist.indexOf(earthfive[earthkey.indexOf(this.state.EightDateleader[5])] + earthfive[earthkey.indexOf(this.state.EightDatePartnership[5])]))
        {
          //助加分
          Partnership = IconConfig.IconPartnershipCheck
          leader = IconConfig.IconPartnershipCheck
        }
        else if(-1!=kindsame.indexOf(earthfive[earthkey.indexOf(this.state.EightDateleader[5])] + earthfive[earthkey.indexOf(this.state.EightDatePartnership[5])])){
          //比合就差一些
          Partnership = IconConfig.IconPartnershipCheckRight
          leader = IconConfig.IconPartnershipCheckLeft
        }
      }
    }
    if(IconConfig.IconPartnershipCheck==leader){totalcountleader  = totalcountleader+10}
    else if(IconConfig.IconPartnershipCheckLeft==leader){totalcountleader  = totalcountleader+5}
    if(IconConfig.IconPartnershipCheck==Partnership){totalcountPartnership  = totalcountPartnership+10}
    else if(IconConfig.IconPartnershipCheckRight==Partnership){totalcountPartnership  = totalcountPartnership+5}
    if(-1!=hetest.indexOf(this.state.EightDateleader[5] + this.state.EightDatePartnership[5]))
    {
          //六合加分
          totalcountleader  = totalcountleader+5
          totalcountPartnership  = totalcountPartnership+5
          Partnership = IconConfig.IconPartnershipCheckDiamond
          leader = IconConfig.IconPartnershipCheckDiamond
    }
    base.push(["支  合:",leader, Partnership])

    var ret_leader = ""
    var ret_Partnership = ""

    for (var i = 0; i < 5; i++) {
      //if( this.state.precentleader[i+5]>20){ret_leader=  ret_leader + kind[i] + (Math.floor(this.state.precentleader[i+5]-20)).toString() }
      //if( this.state.precentPartnership[i+5]>20){ret_Partnership= ret_Partnership + kind[i]+ (Math.floor(this.state.precentPartnership[i+5]-20)).toString()}
    }
    //base.push(["势  气:",ret_leader,ret_Partnership])

    var leaderindex = Math.floor(daykey.indexOf(this.state.EightDateleader[4]) / 2)
    var Partnershipindex = Math.floor(daykey.indexOf(this.state.EightDatePartnership[4]) / 2)
    var assistleaderindex = (leaderindex - 1 + 4) % 4
    var assistPartnershipindex = (Partnershipindex - 1 + 4) % 4
    var helpleader = Math.floor(50 - this.state.precentleader[leaderindex + 5] - this.state.precentleader[assistleaderindex + 5])
    var helpPartnership = Math.floor(50 - this.state.precentPartnership[Partnershipindex + 5] - this.state.precentPartnership[assistPartnershipindex + 5])
    var daykeyleader = kind
    var checkhelpleader = (helpleader >= 0 ? kind[leaderindex] + kind[assistleaderindex] : daykeyleader.replace(kind[assistleaderindex], "").replace(kind[leaderindex], "")) + Math.abs(helpleader).toString();
    var checkhelpPartnership = (helpPartnership >= 0 ? kind[Partnershipindex] + kind[assistPartnershipindex] : daykeyleader.replace(kind[assistPartnershipindex], "").replace(kind[Partnershipindex], "")) + Math.abs(helpPartnership).toString();
    //base.push(["喜  用:",checkhelpleader,checkhelpPartnership])

    ret_leader = EightrandomModule.gettwelfth(this.state.EightDateleader[0] + this.state.EightDateleader[1])
    ret_Partnership = EightrandomModule.gettwelfth(this.state.EightDatePartnership[0] + this.state.EightDatePartnership[1])
    base.push(["纳  音:", ret_leader, ret_Partnership])

    //纳音以相生为主
    Partnership = IconConfig.IconPartnershipCheckfault
    leader = IconConfig.IconPartnershipCheckfault
    if (-1 != kind.indexOf(ret_leader.charAt(2) + ret_Partnership.charAt(2)) ) {
      Partnership = IconConfig.IconPartnershipCheckfault
      leader = IconConfig.IconPartnershipCheckfault
    }
    else if(-1 != kindassist.indexOf(ret_leader.charAt(2) + ret_Partnership.charAt(2)))
    {
      Partnership = IconConfig.IconPartnershipCheck
      leader = IconConfig.IconPartnershipCheck
    }else{
      Partnership = IconConfig.IconPartnershipCheckRight
      leader = IconConfig.IconPartnershipCheckLeft
    }
    if(IconConfig.IconPartnershipCheck==leader){totalcountleader  = totalcountleader+10}
    else if(IconConfig.IconPartnershipCheckLeft==leader){totalcountleader  = totalcountleader+5}
    if(IconConfig.IconPartnershipCheck==Partnership){totalcountPartnership  = totalcountPartnership+10}
    else if(IconConfig.IconPartnershipCheckRight==Partnership){totalcountPartnership  = totalcountPartnership+5}
    base.push(["音  合:",leader, Partnership])




    base.push(["大  运:", curluckyearleader[0] + curluckyearleader[1], curluckyearPartnership[0] + curluckyearPartnership[1]])
    //base.push(["星  宿:", this.state.xingsuleader.xingsu+this.state.xingsuleader.r, this.state.xingsuPartnership.xingsu+this.state.xingsuPartnership.r])
    //var xingsuretleader = EightrandomModule.getrongqin(this.state.xingsuleader.xingsu, this.state.xingsuPartnership.xingsu)
    //var xingsuretPartnership = EightrandomModule.getrongqin(this.state.xingsuPartnership.xingsu, this.state.xingsuleader.xingsu)
    //base.push(["荣  亲:", xingsuretleader.r, xingsuretPartnership.r])
    //base.push(["关  系:", xingsuretleader.d<=4?"近":(xingsuretleader.d<=8?"中":"远"),  xingsuretPartnership.d<=4?"近":(xingsuretPartnership.d<=8?"中":"远")])

    ret_leader = ""
    ret_Partnership = ""
    for (var i = 0; i < 5; i++) {
      if (fivepowerleader[i] == "旺") { ret_leader = "木火土金水"[i] }
      if (fivepowerPartnership[i] == "旺") { ret_Partnership = "木火土金水"[i] }
    }
    base.push(["月  令:", ret_leader, ret_Partnership])
    base.push(["年  柱:", this.state.EightDateleader[0] + this.state.EightDateleader[1], this.state.EightDatePartnership[0] + this.state.EightDatePartnership[1]])
    var leader = IconConfig.IconPartnershipCheckfault
    var Partnership = IconConfig.IconPartnershipCheckfault
    if (undefined != tianganhuahe[this.state.EightDateleader[0] + this.state.EightDatePartnership[0]]) {
        var x = tianganhuahe[this.state.EightDateleader[0] + this.state.EightDatePartnership[0]]
        if (-1 != (yongshenleader.xishen + yongshenleader.yongshen).indexOf(x)) {
          leader = IconConfig.IconPartnershipCheckLeft
        }else{
          leader = IconConfig.IconPartnershipCheck
        }
        if (-1 != (yongshenPartnership.xishen + yongshenPartnership.yongshen).indexOf(x)) {
          Partnership = IconConfig.IconPartnershipCheckRight
        }else{
          Partnership = IconConfig.IconPartnershipCheck
        }
      }
    else if (-1 == kind.indexOf(dayfive[daykey.indexOf(this.state.EightDateleader[0])] + dayfive[daykey.indexOf(this.state.EightDatePartnership[0])])) {
      //比同合
      leader = IconConfig.IconPartnershipCheck
      Partnership = IconConfig.IconPartnershipCheck
    }else if (-1 == kindassistleader.indexOf(dayfive[daykey.indexOf(this.state.EightDateleader[0])] + dayfive[daykey.indexOf(this.state.EightDatePartnership[0])])) {
      //助创始人加分
      leader = IconConfig.IconPartnershipCheck
      Partnership = IconConfig.IconPartnershipCheck
      totalcountleader  = totalcountleader+5
    }else if (-1 == kindassistPartnership.indexOf(dayfive[daykey.indexOf(this.state.EightDateleader[0])] + dayfive[daykey.indexOf(this.state.EightDatePartnership[0])])) {
      //助合伙人加分
      leader = IconConfig.IconPartnershipCheck
      Partnership = IconConfig.IconPartnershipCheck
      totalcountPartnership  = totalcountPartnership+5
    }
    if(IconConfig.IconPartnershipCheck==leader){totalcountleader  = totalcountleader+10}
    else if(IconConfig.IconPartnershipCheckLeft==leader){totalcountleader  = totalcountleader+5}
    if(IconConfig.IconPartnershipCheck==Partnership){totalcountPartnership  = totalcountPartnership+10}
    else if(IconConfig.IconPartnershipCheckRight==Partnership){totalcountPartnership  = totalcountPartnership+5}
    base.push(["年  合:", leader, Partnership])


    base.push(["月  柱:", this.state.EightDateleader[2] + this.state.EightDateleader[3], this.state.EightDatePartnership[2] + this.state.EightDatePartnership[3]])
    leader = IconConfig.IconPartnershipCheckfault
    Partnership = IconConfig.IconPartnershipCheckfault
    if (-1 == kind.indexOf(dayfive[daykey.indexOf(this.state.EightDateleader[2])] + dayfive[daykey.indexOf(this.state.EightDatePartnership[2])]) || undefined != tianganhuahe[this.state.EightDateleader[2] + this.state.EightDatePartnership[2]]) {
      if (-1 == kind.indexOf(earthfive[earthkey.indexOf(this.state.EightDateleader[3])] + earthfive[earthkey.indexOf(this.state.EightDatePartnership[3])])) {
        leader = IconConfig.IconPartnershipCheck
        Partnership = IconConfig.IconPartnershipCheck
        if (-1 != congtest.indexOf(this.state.EightDatePartnership[3] + this.state.EightDateleader[3])) {
          //如果有冲克，就看天干合以后的喜用
          leader = IconConfig.IconPartnershipCheckfault
          Partnership = IconConfig.IconPartnershipCheckfault
          if (undefined != tianganhuahe[this.state.EightDateleader[2] + this.state.EightDatePartnership[2]]) {
            //因为有地支冲突，所以天干合还是要扣分的，如果天干无合不会进来，也不会扣分
            totalcountPartnership =  totalcountPartnership - 5
            totalcountleader =  totalcountleader - 5
            //这里对天干五合在评价，如果五合为忌仇，虽合但是无分数
            Partnership = IconConfig.IconPartnershipCheckfault
            leader = IconConfig.IconPartnershipCheck
            Partnership = IconConfig.IconPartnershipCheck
            var x = tianganhuahe[this.state.EightDateleader[2] + this.state.EightDatePartnership[2]]
            if (-1 != (yongshenleader.xishen + yongshenleader.yongshen).indexOf(x)) {
              leader = IconConfig.IconPartnershipCheck
            } else {
              leader = IconConfig.IconPartnershipCheckLeft
            }
            if (-1 != (yongshenPartnership.xishen + yongshenPartnership.yongshen).indexOf(x)) {
              Partnership = IconConfig.IconPartnershipCheck
            } else {
              Partnership = IconConfig.IconPartnershipCheckRight
            }
          }
        } else if (undefined != tianganhuahe[this.state.EightDateleader[2] + this.state.EightDatePartnership[2]]) {

          var x = tianganhuahe[this.state.EightDateleader[2] + this.state.EightDatePartnership[2]]
          if (-1 != (yongshenleader.xishen + yongshenleader.yongshen).indexOf(x)) {
            leader = IconConfig.IconPartnershipCheck
          } else {
            leader = IconConfig.IconPartnershipCheckLeft
          }
          if (-1 != (yongshenPartnership.xishen + yongshenPartnership.yongshen).indexOf(x)) {
            Partnership = IconConfig.IconPartnershipCheck
          } else {
            Partnership = IconConfig.IconPartnershipCheckRight
          }
        }
      }
    }
    if(IconConfig.IconPartnershipCheck==leader){totalcountleader  = totalcountleader+20}
    else if(IconConfig.IconPartnershipCheckLeft==leader){totalcountleader  = totalcountleader+10}
    if(IconConfig.IconPartnershipCheck==Partnership){totalcountPartnership  = totalcountPartnership+20}
    else if(IconConfig.IconPartnershipCheckRight==Partnership){totalcountPartnership  = totalcountPartnership+10}
    if(-1!=hetest.indexOf(this.state.EightDateleader[3] + this.state.EightDatePartnership[3]))
    {
          //六合加分
          totalcountleader  = totalcountleader+5
          totalcountPartnership  = totalcountPartnership+5
          Partnership = IconConfig.IconPartnershipCheckDiamond
          leader = IconConfig.IconPartnershipCheckDiamond
    }
    base.push(["月  合:", leader, Partnership])



    base.push(["属  象:", this.state.EightDateleader[1], this.state.EightDatePartnership[1]])
    var leader = IconConfig.IconPartnershipCheckfault
    var Partnership = IconConfig.IconPartnershipCheckfault
    
    if(-1 != hetest.indexOf(this.state.EightDateleader[1] + this.state.EightDatePartnership[1]))
    {
      //生肖最好三合暗合
      //合而不冲
      if (-1 == congtest.indexOf(this.state.EightDateleader[1] + this.state.EightDatePartnership[1])) {
        leader = IconConfig.IconPartnershipCheck
        Partnership = IconConfig.IconPartnershipCheck
      }
    }else if ((-1 == kind.indexOf(earthfive[(earthkey.indexOf(this.state.EightDateleader[1]))] + earthfive[(earthkey.indexOf(this.state.EightDatePartnership[1]))]))){
      if (-1 == congtest.indexOf(this.state.EightDateleader[1] + this.state.EightDatePartnership[1])) {
        //地支五行不克且不刑冲
        leader = IconConfig.IconPartnershipCheck
        Partnership = IconConfig.IconPartnershipCheck
        if(-1!=kindsame.indexOf(earthfive[earthkey.indexOf(this.state.EightDateleader[1])] + earthfive[earthkey.indexOf(this.state.EightDatePartnership[1])])){
          Partnership = IconConfig.IconPartnershipCheckRight
          leader = IconConfig.IconPartnershipCheckLeft
        }
      }
    }
    if(IconConfig.IconPartnershipCheck==leader){totalcountleader  = totalcountleader+10}
    else if(IconConfig.IconPartnershipCheckLeft==leader){totalcountleader  = totalcountleader+5}
    if(IconConfig.IconPartnershipCheck==Partnership){totalcountPartnership  = totalcountPartnership+10}
    else if(IconConfig.IconPartnershipCheckRight==Partnership){totalcountPartnership  = totalcountPartnership+5}
    if(-1!=hetest.indexOf(this.state.EightDateleader[1] + this.state.EightDatePartnership[1]))
    {
          //六合加分
          totalcountleader  = totalcountleader+5
          totalcountPartnership  = totalcountPartnership+5
          Partnership = IconConfig.IconPartnershipCheckDiamond
          leader = IconConfig.IconPartnershipCheckDiamond
    }
    base.push(["象  合:", leader, Partnership])
    base.push(["评  分:", totalcountleader>100?IconConfig.IconMarryDiamond:totalcountleader, totalcountPartnership>100?IconConfig.IconMarryDiamond:totalcountPartnership])
    base.push(["合伙评分60以上为适合合伙"])
    base.push(["元 神 支看彼此关系"])
    base.push(["音 年 月 象看两人周边关系"])
    base.push(["合伙主要判断人际关系和独立程度"])
    Animated.sequence([Animated.timing(this.state.fadeInOpacity, { toValue: 1, duration: 1000, useNativeDriver: true }), Animated.delay(1000), Animated.timing(this.state.fadeInOpacity, { toValue: 0.3, duration: 1000, useNativeDriver: true })]).start()
    return (
      <View style={styles.container} >
        <ScrollView ref="location" style={{ backgroundColor: '#ffffff' }}>
          <View style={styles.container} >
            <WingBlank size="lg" style={{ backgroundColor: '#ffffff' }}>
              <Accordion onChange={this.onChange} activeSections={this.state.activeSections} styles={{ backgroundColor: '#ffffff' }}>
                <Accordion.Panel header={"合伙测试"} styles={{ backgroundColor: '#ffffff' }}>
                  <View>
                    <Grid
                      data={base}
                      columnNum={1}
                      hasLine={true}
                      itemStyle={{ height: 25, backgroundColor: '#ffffff' }}
                      renderItem={(dataItem, index) => {
                        if (dataItem.length >= 2) {
                          return (
                            <View style={[styles.container, { flexDirection: 'row', alignItems: "flex-end" }]}>
                              <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, width: 60, textAlign: "left" }}>{dataItem[0]}</Text>
                              <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, width: 150, textAlign: "center" }}>{dataItem[1]}</Text>
                              <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, width: 150, textAlign: "center" }}>{dataItem[2]}</Text>
                            </View>)
                        }
                        else {
                          return (
                            <View style={[styles.container, { flexDirection: 'row', alignItems: "flex-end" }]}>
                              <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, width: 360, textAlign: "left" }}>{""+dataItem[0]}</Text>
                            </View>)
                        }
                      }} />
                    <WhiteSpace size="xl" styles={{ backgroundColor: '#ffffff' }} />
                  </View>
                </Accordion.Panel >
                <Accordion.Panel header={"创始人"} styles={{ backgroundColor: '#ffffff' }}>
                  <View>
                    <Grid
                      data={testleader}
                      columnNum={7}
                      hasLine={false}
                      itemStyle={{ height: 25, backgroundColor: '#ffffff' }}
                      renderItem={dataItem => {
                        if (undefined != dataItem.info && dataItem.info.length === 3) {
                          const a = dataItem.info.forEach(element => {
                            <View>
                              <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14 }}>  {element}</Text>
                            </View>
                          })
                          return (
                            <View style={{ height: 90 }}>
                              {a}
                            </View>
                          )
                        } else {
                          return (
                            <View style={styles.container}>
                              <View style={styles.grid}>
                                <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14 }}>  {this.getColor(dataItem.info, FontStyleConfig.getFontApplySize() + 14 + 4)}</Text>
                              </View>
                            </View>
                          )
                        }
                      }} />
                    <Grid
                      data={test1leader}
                      columnNum={7}
                      hasLine={false}
                      itemStyle={{ alignItems: "center", textAlignVertical: "center", flex: 1, justifyContent: "flex-start", marginTop: 5, backgroundColor: '#ffffff' }}
                      renderItem={dataItem => (
                        dataItem.info.map((item, idx) => {
                          if (3 === item.length) {
                            return (
                              <View key={idx} style={{ flexDirection: "row", textAlignVertical: "center", alignItems: "center", backgroundColor: '#ffffff' }}>
                                {this.getColor(item[0], FontStyleConfig.getFontApplySize() + 14)}
                                <Text style={{ justifyContent: 'space-around', fontSize: FontStyleConfig.getFontApplySize() + 14, backgroundColor: '#ffffff' }}>  {item[1] + item[2]}</Text>
                              </View>)
                          }
                          return (
                            <View key={idx} >
                              <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, textAlign: "center", textAlignVertical: "center", backgroundColor: '#ffffff' }}>  {item}</Text>
                            </View>)
                        })
                      )} />
                    <Grid
                      data={test2leader}
                      columnNum={7}
                      hasLine={false}
                      itemStyle={{ height: 25 }}
                      renderItem={dataItem => (

                        <View style={styles.container}>
                          <View style={styles.grid}>
                            <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, textAlign: "center" }}>  {dataItem.info}</Text>
                          </View>
                        </View>
                      )} /><WhiteSpace size="xl" styles={{ backgroundColor: '#ffffff' }} />
                    <Grid
                      data={shensha}
                      columnNum={1}
                      hasLine={false}
                      itemStyle={{ height: 25, alignItems: "flex-start" }}
                      renderItem={dataItem => (
                        <View style={styles.container}>
                          <View style={styles.grid}>
                            <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14 }}>  {dataItem}</Text>
                          </View>
                        </View>
                      )} />
                    <Grid
                      data={yearsleader}
                      columnNum={8}
                      hasLine={false}
                      itemStyle={{ height: 25 }}
                      //当选择大运的时候，相当于选择了流年小运
                      //onPress={(_el: any, index: any) => this.changeyearleader(Number(index % 8), "")}
                      renderItem={(dataItem, itemIndex) => (
                        <View style={styles.container}>
                          <View style={styles.grid}>
                            {this.testselectyear(dataItem, itemIndex % 8)}
                          </View>
                        </View>
                      )}
                    />
                  </View>
                </Accordion.Panel >
                <Accordion.Panel header={"合伙人"} styles={{ backgroundColor: '#ffffff' }}>
                  <View>

                    <Grid
                      data={testPartnership}
                      columnNum={7}
                      hasLine={false}
                      itemStyle={{ height: 25, backgroundColor: '#ffffff' }}
                      renderItem={dataItem => {
                        if (undefined != dataItem.info && dataItem.info.length === 3) {
                          const a = dataItem.info.forEach(element => {
                            <View>
                              <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14 }}>  {element}</Text>
                            </View>
                          })
                          return (
                            <View style={{ height: 90 }}>
                              {a}
                            </View>
                          )
                        } else {
                          return (
                            <View style={styles.container}>
                              <View style={styles.grid}>
                                <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14 }}>  {this.getColor(dataItem.info, FontStyleConfig.getFontApplySize() + 14 + 4)}</Text>
                              </View>
                            </View>
                          )
                        }
                      }} />
                    <Grid
                      data={test1Partnership}
                      columnNum={7}
                      hasLine={false}
                      itemStyle={{ alignItems: "center", textAlignVertical: "center", flex: 1, justifyContent: "flex-start", marginTop: 5, backgroundColor: '#ffffff' }}
                      renderItem={dataItem => (
                        dataItem.info.map((item, idx) => {
                          if (3 === item.length) {
                            return (
                              <View key={idx} style={{ flexDirection: "row", textAlignVertical: "center", alignItems: "center", backgroundColor: '#ffffff' }}>
                                {this.getColor(item[0], FontStyleConfig.getFontApplySize() + 14)}
                                <Text style={{ justifyContent: 'space-around', fontSize: FontStyleConfig.getFontApplySize() + 14, backgroundColor: '#ffffff' }}>  {item[1] + item[2]}</Text>
                              </View>)
                          }
                          return (
                            <View key={idx} >
                              <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, textAlign: "center", textAlignVertical: "center", backgroundColor: '#ffffff' }}>  {item}</Text>
                            </View>)
                        })
                      )} />
                    <Grid
                      data={test2Partnership}
                      columnNum={7}
                      hasLine={false}
                      itemStyle={{ height: 25 }}
                      renderItem={dataItem => (

                        <View style={styles.container}>
                          <View style={styles.grid}>
                            <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, textAlign: "center" }}>  {dataItem.info}</Text>
                          </View>
                        </View>
                      )} /><WhiteSpace size="xl" styles={{ backgroundColor: '#ffffff' }} />
                    <Grid
                      data={shensha}
                      columnNum={1}
                      hasLine={false}
                      itemStyle={{ height: 25, alignItems: "flex-start" }}
                      renderItem={dataItem => (
                        <View style={styles.container}>
                          <View style={styles.grid}>
                            <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14 }}>  {dataItem}</Text>
                          </View>
                        </View>
                      )} />
                    <Grid
                      data={yearsPartnership}
                      columnNum={8}
                      hasLine={false}
                      itemStyle={{ height: 25 }}
                      //当选择大运的时候，相当于选择了流年小运
                      //onPress={(_el: any, index: any) => this.changeyearleader(Number(index % 8), "")}
                      renderItem={(dataItem, itemIndex) => (
                        <View style={styles.container}>
                          <View style={styles.grid}>
                            {this.testselectyear(dataItem, itemIndex % 8)}
                          </View>
                        </View>
                      )}
                    />
                  </View>
                </Accordion.Panel >
                <Accordion.Panel header="创始人" styles={{ backgroundColor: '#ffffff' }}>
                  <Grid
                    data={fiveleader}
                    columnNum={5}
                    hasLine={false}
                    itemStyle={{ height: 25, backgroundColor: '#ffffff' }}
                    renderItem={dataItem => (
                      <View style={styles.container}>
                        <View style={[styles.grid, { fontSize: FontStyleConfig.getFontApplySize() + 12 }]}>
                          {dataItem}
                        </View>
                      </View>
                    )}
                  />

                </Accordion.Panel >
                <Accordion.Panel header="合伙人" styles={{ backgroundColor: '#ffffff' }}>
                  <Grid
                    data={fivePartnership}
                    columnNum={5}
                    hasLine={false}
                    itemStyle={{ height: 25, backgroundColor: '#ffffff' }}
                    renderItem={dataItem => (
                      <View style={styles.container}>
                        <View style={[styles.grid, { fontSize: FontStyleConfig.getFontApplySize() + 12 }]}>
                          {dataItem}
                        </View>
                      </View>
                    )}
                  />

                </Accordion.Panel >

                <Accordion.Panel header="创始人信息" styles={{ backgroundColor: '#ffffff' }}>
                  <List>
                    <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, lineHeight: 25, textAlign: 'justify' }}>{homeleader[0]}</Text>
                    <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, lineHeight: 25, textAlign: 'justify' }}>{homeleader[1]}</Text>
                    <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, lineHeight: 25, textAlign: 'justify' }}>{homeleader[2]}</Text>
                  </List>
                </Accordion.Panel >
                <Accordion.Panel header="合伙人信息" styles={{ backgroundColor: '#ffffff' }}>
                  <List>
                    <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, lineHeight: 25, textAlign: 'justify' }}>{homePartnership[0]}</Text>
                    <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, lineHeight: 25, textAlign: 'justify' }}>{homePartnership[1]}</Text>
                    <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, lineHeight: 25, textAlign: 'justify' }}>{homePartnership[2]}</Text>
                  </List>
                </Accordion.Panel >
                <Accordion.Panel header="创始人" styles={{ backgroundColor: '#ffffff' }}>
                  <List>
                    <Animated.View style={{ opacity: this.state.fadeInOpacity }}>
                      <View>
                        {Partnershipinfoleader.map(item => {
                          return (
                            <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, lineHeight: 25 }}>{item}{EightrandomModule.tipfire(item)}</Text>)
                        })}
                      </View>
                    </Animated.View>
                  </List>
                </Accordion.Panel >
                <Accordion.Panel header="合伙人" styles={{ backgroundColor: '#ffffff' }}>
                  <List>
                    <Animated.View style={{ opacity: this.state.fadeInOpacity }}>
                      <View>
                        {PartnershipinfoPartnership.map(item => {
                          return (
                            <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, lineHeight: 25 }}>{item}{EightrandomModule.tipfire(item)}</Text>)
                        })}
                      </View>
                    </Animated.View>
                  </List>
                </Accordion.Panel >

              </Accordion>
            </WingBlank>
            <WhiteSpace size="xl" styles={{ backgroundColor: '#ffffff' }} />
            {
              (WechatShare.shareimg(this.state.shareimg))
            }

            <WhiteSpace size="xl" styles={{ backgroundColor: '#ffffff' }} />
            <WhiteSpace size="xl" styles={{ backgroundColor: '#ffffff' }} />
            <WhiteSpace size="xl" styles={{ backgroundColor: '#ffffff' }} />
            <WhiteSpace size="xl" styles={{ backgroundColor: '#ffffff' }} />
            <WhiteSpace size="xl" styles={{ backgroundColor: '#ffffff' }} />

          </View>
        </ScrollView>
        {WechatShare.shareRetBar(WechatShare, this, "八字格局")}
      </View>

    )
  }


};







var styles = StyleSheet.create({
  grid: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: "center",
    height: 50,
    backgroundColor: '#ffffff'
    //alignItems: 'center',
  },
  gridfix:
  {
    //flex:1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    textAlignVertical: "bottom",
    backgroundColor: '#ffffff'
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  rowhigth: {
    lineHeight: 25,
  },
  list: {
    height: 30,
    marginLeft: 1,
    paddingLeft: 1,
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    backgroundColor: '#ffffff'
  },
  textbutton: {
    flex: 1,
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    flexDirection: 'row', backgroundColor: '#ffffff'
  },
  button: {
    height: 50,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#ffffff'
  },
  tabBarStyle: {
    flex: 1,
    height: 40,
    flex: 1
  },
  Eightstylewithfont: {
    justifyContent: 'space-around', //虽然样式中设置了 justifyContent: 'center'，但无效
    fontSize: FontStyleConfig.getFontApplySize() + 18,
    backgroundColor: '#ffffff'
  },
  EightstyleSectionline: {
    justifyContent: 'space-around', //虽然样式中设置了 justifyContent: 'center'，但无效
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 30,
    backgroundColor: '#ffffff'
  },
  EightstyleCoreline: {
    justifyContent: 'space-around', //虽然样式中设置了 justifyContent: 'center'，但无效
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#ffffff'
  },
  Eightstylebetweenline: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    //flexwrap:'nowrap',
    paddingLeft: 5
  },
  flatText: {
    justifyContent: 'space-around', //虽然样式中设置了 justifyContent: 'center'，但无效
    flexDirection: 'row',
    alignItems: 'stretch',
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#ffffff'
  },
  flatTextfone: {
    //flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: "center",
    //justifyContent: 'space-around', //虽然样式中设置了 justifyContent: 'center'，但无效  
    //paddingLeft:5
    backgroundColor: '#ffffff'
  },
});
module.exports = PartnershiMainPage;