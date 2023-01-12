

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated, ScrollView, Dimensions } from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank, List, Button ,SegmentedControl} from '@ant-design/react-native';
const Item = List.Item;
import StorageModule from '../../../config/StorageModule'
import { SixrandomModule } from '../SixrandomLib/SixrandomModule'
import EightrandomModule from './EightrandomModule'
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
let curyear = 0
let curmonth = 0
let EightrandomMainPagethis = undefined
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



class EightrandomMainPage extends React.Component {
  constructor(props) {

    super(props);

    var sex = ""
    var EightDate = ""
    var birth = ""
    var gzbirth = ""
    var gzxk = ""
    var buildeight = new Array();
    var buildeightExt = new Array();
    var precent = new Array();
    var daykey = new Array();

    this.state = {
      xingsu:"",
      shareimg:false,
      fadeInOpacity: new Animated.Value(0.3),
      enhance:"空",
      sex: sex,
      EightDate: EightDate,
      birth: birth,
      gzbirth: gzbirth,
      gzxk:gzxk,
      buildeight: buildeight,
      buildeightExt: buildeightExt,
      precent: precent,
      daykey: daykey,
      luckyyear: "",
      luckyyearposition: "",
      luckyearrelation: "",
      curluckyearnum: 0,
      curminiluckyearnum: 0,
      beginlucky: 0,
      activeSections: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    };

    EightrandomMainPagethis = this
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
      title: '八字分析',
      headerRight: () => (
        <TouchableOpacity
          style={{ padding: 10, alignContent: "center", alignItems: "baseline" }}
          //onPress={() => navigate('Search')}
          onPress={() =>  EightrandomMainPagethis.deletethis()}
        >
          {IconConfig.IconDelete}
        </TouchableOpacity>),
    }
  };


  async deletethis()
  {
    var rowid = EightrandomMainPagethis.state.rowid 
    console.log("rowid",rowid)
    HistoryArrayGroup.loadid('eightrandom', rowid).then(async (ret) => {
      if(undefined!=ret)
      {
        var Jobj = JSON.parse(ret);
        let T = await UserModule.SyncFileServer("eightrandom", rowid, "")
        if (undefined != T && 2000 == T.code) {
          T.data.forEach(async (element) => {
            filename = element.File
            if (-1 != filename.indexOf(String(rowid)) && true == element.Del) {
              await HistoryArrayGroup.remove('eightrandom', rowid);
            }
          });
        }
        else {
          await HistoryArrayGroup.remove('eightrandom', rowid);
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

      var ret;
      var args = {};
      var match = null;
      var search = decodeURIComponent(parameter.substring(1));
      var reg = /(?:([^&]+)=([^&]+))/g;
      while ((match = reg.exec(search)) !== null) {
        args[match[1]] = match[2];
      }
      info = args
      //console.log(info.EightDate);
      //console.log(info.sex);
      //console.log(info.birth);
      var t = info.birth.split(" ");
      var gz = new Date(t[0]);
      gz.setHours(t[1]);
      gz.setMinutes(undefined != t[2] ? t[2] : t[2] = 0)
      gz.setSeconds(undefined != t[3] ? t[3] : t[3] = 0)
      info.birth = t[0] + " " + ("00" + t[1]).slice(-2) + ":" + ("00" + t[2]).slice(-2) + ":" + ("00" + t[3]).slice(-2)
      console.log(gz);
      var EightDate = SixrandomModule.lunar_f(gz)
      var gzDate = EightDate.gzYear + " " + EightDate.gzMonth + " " + EightDate.gzDate + " " + EightDate.gzTime;
      var gzxk = SixrandomModule.get_empty_sixty_cycle(EightDate.gzYear)+ " " + SixrandomModule.get_empty_sixty_cycle(EightDate.gzMonth) + " " + SixrandomModule.get_empty_sixty_cycle(EightDate.gzDate) + " " + SixrandomModule.get_empty_sixty_cycle(EightDate.gzTime);
      curyear = EightDate.Year;
      curmonth = EightDate.Month

      var retterm = EightrandomModule.getYearTerm(gz.getFullYear())
      var beginlucky = EightrandomModule.getbigluckyearbegin(retterm, gz, info.EightDate, info.sex);
      console.log("beginlucky", Math.floor(beginlucky), Number(gz.getFullYear()))
      EightrandomMainPagethis.setState({
        sex: info.sex, EightDate: info.EightDate, birth: info.birth, gzbirth: gzDate,  gzxk: gzxk,beginlucky: Math.floor(beginlucky),rowid:info.rowid,xingsu:EightDate.xingsu
      });
      this.buildeight(info.sex);
    }
    else {
      StorageModule.load({
        key: "lastname",
      }).then(ret => {
        this.setState({
          sex: ret.sex, EightDate: ret.EightDate
        });
      }).catch(err => {
        if (false == jump) {
          this.begin('EightrandomNewPage')
          jump = true
        }
      })
    }
  }

  buildeight(sex) {
    var buildeight = new Array()
    buildeight[0] = EightrandomModule.parentday(this.state.EightDate[0], this.state.EightDate[4])
    buildeight[2] = EightrandomModule.parentday(this.state.EightDate[2], this.state.EightDate[4])
    buildeight[4] = "乾造" == sex ? "元男" : "元女"
    buildeight[6] = EightrandomModule.parentday(this.state.EightDate[6], this.state.EightDate[4])
    buildeight[1] = EightrandomModule.parentearth(this.state.EightDate[1], this.state.EightDate[4])
    buildeight[3] = EightrandomModule.parentearth(this.state.EightDate[3], this.state.EightDate[4])
    buildeight[5] = EightrandomModule.parentearth(this.state.EightDate[5], this.state.EightDate[4])
    buildeight[7] = EightrandomModule.parentearth(this.state.EightDate[7], this.state.EightDate[4])
    var buildeightExt = new Array()
    buildeightExt[0] = EightrandomModule.gethide(this.state.EightDate[1]);
    buildeightExt[2] = EightrandomModule.gethide(this.state.EightDate[3]);
    buildeightExt[4] = EightrandomModule.gethide(this.state.EightDate[5]);
    buildeightExt[6] = EightrandomModule.gethide(this.state.EightDate[7]);
    buildeightExt[1] = EightrandomModule.gethideshishen(buildeightExt[0], this.state.EightDate[4]);
    buildeightExt[3] = EightrandomModule.gethideshishen(buildeightExt[2], this.state.EightDate[4]);
    buildeightExt[5] = EightrandomModule.gethideshishen(buildeightExt[4], this.state.EightDate[4]);
    buildeightExt[7] = EightrandomModule.gethideshishen(buildeightExt[6], this.state.EightDate[4]);
    var precent = new Array();
    var daykey = new Array();
    var o = EightrandomModule.getfive(this.state.EightDate)
    precent = o.q
    daykey = o.p



    var luckyyear = new Array();
    luckyyear = EightrandomModule.getbigluckyear(this.state.EightDate, this.state.sex);
    var luckyearrelation = new Array();
    var luckyyearposition = new Array();
    for (var i in luckyyear) {

      var rel = luckyyear[i].slice(0, 1);
      //console.log("luckyyear",rel, luckyyear[i]);
      rel = EightrandomModule.parentday(rel, this.state.EightDate[4])
      //console.log(rel);
      luckyearrelation.push(rel);
      luckyyearposition.push(EightrandomModule.gettwelfthposition(this.state.EightDate[4] + luckyyear[i].slice(1, 2)))
    }


    this.setState({
      buildeight: buildeight, buildeightExt: buildeightExt,
      daykey: daykey, precent: precent,
      luckyyear: luckyyear,
      luckyyearposition: luckyyearposition,
      luckyearrelation: luckyearrelation,
    });
    this.changeyear("", (new Date()).getFullYear())
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
  changeyear(bigyear, miniyear) {
    var by = 0
    var my = new Date()
    my = my.getFullYear()
    if ("" !== bigyear) {
      //console.log("changeyearbig",bigyear,miniyear)
      by = Number(bigyear)
      my = Math.floor(Number(by * 10 + this.state.beginlucky))
      if(by>7){by=7}
      if(my>2100){my=2100}
      this.setState({ curluckyearnum: by, curminiluckyearnum: my })

    }
    else if ("" !== miniyear) {
      
      my = Number(miniyear)
      if(my-70>this.state.beginlucky && my-70>1900){my=my-60}
      if(my>2100){my=2100}
      if (my >= this.state.beginlucky) {
        by = Math.floor((my - this.state.beginlucky) / 10)
      }

      console.log("changeyearmini",bigyear,miniyear,by,my)
      this.setState({ curluckyearnum: by, curminiluckyearnum: my })
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
    //console.log("testselectyear",item,curluckyear,yearcolor)
    return (
      <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: yearcolor }}>{item}</Text>
    )
  }

  createpie(display,map) {


    var indexcolor = '子丑寅卯辰巳午未申酉戌亥'.indexOf(this.state.EightDate[3])
    var colorsel = ["#1E90FF", "#8B4513", "green", "green", "#8B4513", "red", "red", "#8B4513", "#DAA520", "#DAA520", "#8B4513", "#1E90FF"]
    //console.log("colorsel",colorsel[indexcolor])
    if (this.state.precent != "") {

      var datafive=[
        { x: 1, y: ("空" != this.state.enhance ? map[this.state.enhance][0] * this.state.precent[5] : this.state.precent[5]), label: '木' },
        { x: 2, y: ("空" != this.state.enhance ? map[this.state.enhance][2] * this.state.precent[6] : this.state.precent[6]), label: '火' },
        { x: 3, y: ("空" != this.state.enhance ? map[this.state.enhance][4] * this.state.precent[7] : this.state.precent[7]), label: '土' },
        { x: 4, y: ("空" != this.state.enhance ? map[this.state.enhance][5] * this.state.precent[8] : this.state.precent[8]), label: '金' },
        { x: 5, y: ("空" != this.state.enhance ? map[this.state.enhance][8] * this.state.precent[9] : this.state.precent[9]), label: '水' },
      ]

      var ret = this.state.pie
      console.log("createpie", ret)
      return (
        <View style={[{ textAlign: 'center', alignItems: 'center' }]}>
          <SegmentedControl
            values={["空", "子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"]}
            selectedIndex={0}
            tintColor={colorsel[indexcolor]}
            style={{ height: 40, width: 280 }}
            onChange={(e) => this.setState({ enhance: e.nativeEvent.value }, console.log("selvales", e.nativeEvent.value))}
          />
          <Svg width={300} height={300} >
            <VictoryPie
              colorScale={["green", "red", "#8B4513", "#DAA520", "#1E90FF"]}
              data={datafive}
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
                  { x: "甲", y: Number(display['甲']) / 10 },
                  { x: "乙", y: Number(display['乙']) / 10 },
                ]}
                labels={["甲:" + `${display['甲']}`, "乙:" + `${display['乙']}`]}
              />
              <VictoryBar
                barWidth={15}
                data={[
                  { x: "丙", y: Number(display['丙']) / 10 },
                  { x: "丁", y: Number(display['丁']) / 10 },
                ]}
                labels={["丙:" + `${display['丙']}`, "丁:" + `${display['丁']}`]}
              />
              <VictoryBar
                barWidth={15}
                data={[
                  { x: "戊", y: Number(display['戊']) / 10 },
                  { x: "己", y: Number(display['己']) / 10 },
                ]}
                labels={["戊:" + `${display['戊']}`, "己:" + `${display['己']}`]}
              />
              <VictoryBar
                barWidth={15}
                data={[
                  { x: "庚", y: Number(display['庚']) / 10 },
                  { x: "辛", y: Number(display['辛']) / 10 },
                ]}
                labels={["庚:" + `${display['庚']}`, "辛:" + `${display['辛']}`]}
              />
              <VictoryBar
                barWidth={15}
                data={[
                  { x: "壬", y: Number(display['壬']) / 10 },
                  { x: "癸", y: Number(display['癸']) / 10 },
                ]}
                labels={["壬:" + `${display['壬']}`, "癸:" + `${display['癸']}`]}
              />
            </VictoryGroup>
          </Svg>
        </View>
      )
    }
  }
  

  render() {


    if (undefined == this.state.luckyyear || "" == this.state.luckyyear) {
      return null
    }
    //这里是大运确定
    var curluckyear = this.state.luckyyear[this.state.curluckyearnum]
    //console.log("curluckyearnum",Number(this.state.curluckyearnum))
    //这里小运，如果选了小运，用小运去换算大运
    var thisyear
    if (0 == this.state.curminiluckyearnum) {
      thisyear = new Date();
    }
    else {
      console.log("curminiluckyearnum", Number(this.state.curminiluckyearnum))
      thisyear = new Date()//这里应该选小运的年份
      thisyear.setFullYear(this.state.curminiluckyearnum)
      //这里必须要算出正月，所以流年月份按3月计算
      thisyear.setMonth(3)
    }

    //根据小运计算干支
    var eightyear = SixrandomModule.lunar_f(thisyear)
    var gzYear = eightyear.gzYear
    //计算大运，流年，原句的所有冲克信息
    console.log("curluckyear", this.state.luckyyear, this.state.curluckyearnum)
    var r = EightrandomModule.getrelationship(this.state.EightDate, gzYear[1], curluckyear,this.state.sex)

    const { navigate } = this.props.navigation;

    jump = false;


    var luckyyearposition = this.state.luckyyearposition;
    var minluckyyear = new Array()
    var luckyearrelation = this.state.luckyearrelation;
    //拍出所有小运
    var birthdayyear = new Date()
    birthdayyear.setYear(curyear)
    birthdayyear.setMonth(curmonth)
    birthdayyear = SixrandomModule.lunar_f(birthdayyear)
    birthdayyear = birthdayyear.gzYear + birthdayyear.gzMonth + birthdayyear.gzDate + birthdayyear.gzTime;
    console.log("birthdayyear", birthdayyear, curyear, curmonth)
    minluckyyear = EightrandomModule.getminlucky(birthdayyear, this.state.sex, curyear);


    //console.log(minluckyyear)

    var test = new Array()
    test.push({ info: "时辰", hide: '' })
    test.push({ info: "大运", hide: '' })
    test.push({ info: "流年", hide: '' })
    test.push({ info: "年柱", hide: '' })
    test.push({ info: "月柱", hide: '' })
    test.push({ info: "日柱", hide: '' })
    test.push({ info: "时柱", hide: '' })

    test.push({ info: "十神", hide: '' })
    //console.log(gzYear[0],this.state.EightDate[4])
    test.push({ info: EightrandomModule.parentday(curluckyear[0], this.state.EightDate[4]), hide: '' })
    test.push({ info: EightrandomModule.parentday(gzYear[0], this.state.EightDate[4]), hide: '' })
    for (var i = 0; i < 4; i++) {
      test.push({ info: this.state.buildeight[i * 2], hide: '' })
    }

    test.push({ info: "天干", hide: '' })
    test.push({ info: curluckyear[0], hide: '' })
    test.push({ info: gzYear[0], hide: '' })
    for (var i = 0; i < 4; i++) {
      test.push({ info: this.state.EightDate[i * 2], hide: '' })
    }

    test.push({ info: "地支", hide: '' })
    test.push({ info: curluckyear[1], hide: "" })
    test.push({ info: gzYear[1], hide: "" })
    for (var i = 0; i < 4; i++) {
      test.push({ info: this.state.EightDate[i * 2 + 1], hide: "" })
    }

    test.push({ info: "十神", hide: '' })
    test.push({ info: EightrandomModule.parentearth(curluckyear[1], this.state.EightDate[4]), hide: "" })
    test.push({ info: EightrandomModule.parentearth(gzYear[1], this.state.EightDate[4]), hide: "" })

    for (var i = 0; i < 4; i++) {
      test.push({ info: this.state.buildeight[i * 2 + 1], hide: "" })
    }

    var test1 = new Array()
    test1.push({ info: ["", "藏干"], hide: '' })
    var hidelist = EightrandomModule.gethide(curluckyear[1])
    hidelist = hidelist.split("")
    var hindinfo = new Array()
    hidelist.forEach(element => {

      hindinfo.push(element + EightrandomModule.parentday(element, this.state.EightDate[4]))
    });
    test1.push({ info: hindinfo, hide: "" })

    hidelist = EightrandomModule.gethide(gzYear[1])
    hidelist = hidelist.split("")
    hindinfo = new Array()
    hidelist.forEach(element => {
      hindinfo.push(element + EightrandomModule.parentday(element, this.state.EightDate[4]))
    });
    test1.push({ info: hindinfo, hide: "" })
    for (var i = 0; i < 4; i++) {
      hidelist = this.state.buildeightExt[i * 2]
      hidelist = hidelist.split("")
      hindinfo = new Array()
      hidelist.forEach(element => {
        hindinfo.push(element + EightrandomModule.parentday(element, this.state.EightDate[4]))
      });
      test1.push({ info: hindinfo, hide: "" })
    }
    /*
        test.push({ info: "副星", hide: '' })
        test.push({ info: EightrandomModule.gethide(curluckyear[1]) + EightrandomModule.parentearth(curluckyear[1], this.state.EightDate[4]), hide: "" })
        test.push({ info: EightrandomModule.gethide(gzYear[1]) + EightrandomModule.parentearth(gzYear[1], this.state.EightDate[4]), hide: "" })
    
        for (var i = 0; i < 4; i++) {
          test.push({ info: this.state.buildeightExt[i * 2] + this.state.buildeight[i * 2 + 1], hide: this.state.buildeightExt[i * 2 + 1] })
        }
    */
    var test2 = new Array()
    test2.push({ info: "长生", hide: '' })
    test2.push({ info: EightrandomModule.gettwelfthposition(this.state.EightDate[4] + curluckyear[1]), hide: '' })
    test2.push({ info: EightrandomModule.gettwelfthposition(this.state.EightDate[4] + gzYear[1]), hide: '' })
    for (var i = 0; i < 4; i++) {
      var x = EightrandomModule.gettwelfthposition(this.state.EightDate[4] + this.state.EightDate[i * 2 + 1])
      test2.push({ info: x, hide: "" })
    }

    test2.push({ info: "纳音", hide: '' })
    test2.push({ info: EightrandomModule.gettwelfth(curluckyear[0] + curluckyear[1]), hide: '' })
    test2.push({ info: EightrandomModule.gettwelfth(gzYear[0] + gzYear[1]), hide: '' })
    for (var i = 0; i < 4; i++) {
      var x = EightrandomModule.gettwelfth(this.state.EightDate[i * 2] + this.state.EightDate[i * 2 + 1])
      test2.push({ info: x, hide: "" })
    }

    var yearsnumber = new Array()
    for (var i = 0; i < 8; i++) {
      yearsnumber.push(i == 0 ? this.state.beginlucky : yearsnumber[i - 1] + 10)
    }
    var years = new Array()
    years = luckyearrelation.concat(yearsnumber, this.state.luckyyear, luckyyearposition)
    //console.log("years", years, luckyearrelation, this.state.luckyyear, luckyyearposition)

    var map = new Array()
    //甲乙丙丁戊己庚辛壬癸
    map['寅'] = [1.14, 1.14, 1.2, 1.2, 1.06, 1.06, 1, 1, 1, 1]
    map['卯'] = [1.2, 1.2, 1.2, 1.2, 1, 1, 1, 1, 1, 1]
    map['辰'] = [1.1, 1.1, 1.06, 1.06, 1.1, 1.1, 1.1, 1.1, 1.04, 1.04]
    map['巳'] = [1, 1, 1.14, 1.14, 1.14, 1.14, 1.06, 1.06, 1.06, 1.06]
    map['午'] = [1, 1, 1.2, 1.2, 1.2, 1.2, 1, 1, 1, 1]
    map['未'] = [1.04, 1.04, 1.1, 1.1, 1.16, 1.16, 1.1, 1.1, 1, 1]
    map['申'] = [1.06, 1.06, 1, 1, 1, 1, 1.14, 1.14, 1.2, 1.2]
    map['酉'] = [1, 1, 1, 1, 1, 1, 1.2, 1.2, 1.2, 1.2]
    map['戌'] = [1, 1, 1.04, 1.04, 1.14, 1.14, 1.16, 1.16, 1.06, 1.6]
    map['亥'] = [1.2, 1.2, 1, 1, 1, 1, 1, 1, 1.14, 1.14]
    map['子'] = [1.2, 1.2, 1, 1, 1, 1, 1, 1, 1.2, 1.2]
    map['丑'] = [1.06, 1.06, 1, 1, 1.1, 1.1, 1.14, 1.14, 1.1, 1.1]
    var display = new Array()
    display['甲'] = "空" != this.state.enhance ? Math.floor(map[this.state.enhance][0] * this.state.daykey['甲']) : this.state.daykey['甲']
    display['乙'] = "空" != this.state.enhance ? Math.floor(map[this.state.enhance][1] * this.state.daykey['乙']) : this.state.daykey['乙']
    display['丙'] = "空" != this.state.enhance ? Math.floor(map[this.state.enhance][2] * this.state.daykey['丙']) : this.state.daykey['丙']
    display['丁'] = "空" != this.state.enhance ? Math.floor(map[this.state.enhance][3] * this.state.daykey['丁']) : this.state.daykey['丁']
    display['戊'] = "空" != this.state.enhance ? Math.floor(map[this.state.enhance][4] * this.state.daykey['戊']) : this.state.daykey['戊']
    display['己'] = "空" != this.state.enhance ? Math.floor(map[this.state.enhance][5] * this.state.daykey['己']) : this.state.daykey['己']
    display['庚'] = "空" != this.state.enhance ? Math.floor(map[this.state.enhance][6] * this.state.daykey['庚']) : this.state.daykey['庚']
    display['辛'] = "空" != this.state.enhance ? Math.floor(map[this.state.enhance][7] * this.state.daykey['辛']) : this.state.daykey['辛']
    display['壬'] = "空" != this.state.enhance ? Math.floor(map[this.state.enhance][8] * this.state.daykey['壬']) : this.state.daykey['壬']
    display['癸'] = "空" != this.state.enhance ? Math.floor(map[this.state.enhance][9] * this.state.daykey['癸']) : this.state.daykey['癸']
    var totalfive =  display['甲'] +  display['乙']+ display['丙']+ display['丁']+ display['戊']+ display['己']+ display['庚']+ display['辛']+ display['壬']+ display['癸']
    var fiveprecent = new Array()
    fiveprecent["木"] = Math.floor((display["甲"]+display["乙"])*100/totalfive)
    fiveprecent["火"] = Math.floor((display["丙"]+display["丁"])*100/totalfive)
    fiveprecent["土"] = Math.floor((display["戊"]+display["己"])*100/totalfive)
    fiveprecent["金"] = Math.floor((display["庚"]+display["辛"])*100/totalfive)
    fiveprecent["水"] = Math.floor((display["壬"]+display["癸"])*100/totalfive)

    var five = new Array();
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>木</Text>)
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>火</Text>)
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>土</Text>)
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>金</Text>)
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>水</Text>)
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>甲:{display['甲']}</Text>)
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>丙:{display['丙']}</Text>)
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>戊:{display['戊']}</Text>)
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>庚:{display['庚']}</Text>)
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>壬:{display['壬']}</Text>)
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>乙:{display['乙']}</Text>)
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>丁:{display['丁']}</Text>)
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>己:{display['己']}</Text>)
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>辛:{display['辛']}</Text>)
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>癸:{display['癸']}</Text>)
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>{fiveprecent["木"]}%</Text>)
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>{fiveprecent["火"]}%</Text>)
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>{fiveprecent["土"]}%</Text>)
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>{fiveprecent["金"]}%</Text>)
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>{fiveprecent["水"]}%</Text>)
    var fivepower = EightrandomModule.geikeypower(this.state.EightDate[3]);
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>{fivepower[0]}</Text>)
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>{fivepower[1]}</Text>)
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>{fivepower[2]}</Text>)
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>{fivepower[3]}</Text>)
    five.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>{fivepower[4]}</Text>)
    //console.log("five",five)


    var day = EightrandomModule.getselfinfo(this.state.EightDate[4] + this.state.EightDate[5])

    var shensha = new Array()
    shensha[0] = '年柱：'
    shensha[1] = '月柱：'
    shensha[2] = '日柱：'
    shensha[3] = '时柱：'
    for (i = 0; i < 4; i++) {
      this.state.EightDate[i]
      shensha[i] = shensha[i] + EightrandomModule.shensha_dayg2earthz(this.state.EightDate[4], this.state.EightDate[i * 2 + 1]);
      shensha[i] = shensha[i] + EightrandomModule.shensha_moon(this.state.EightDate[3], this.state.EightDate[i * 2]);
      shensha[i] = shensha[i] + EightrandomModule.shensha_yearg2earthz(this.state.EightDate[0], this.state.EightDate[i * 2 +1]);
      if (i != 1) {
        shensha[i] = shensha[i] + EightrandomModule.shensha_moon(this.state.EightDate[3], this.state.EightDate[i * 2 + 1]);//月支不见月支
      }
      if (i != 2) {
        shensha[i] = shensha[i] + EightrandomModule.shensha_dayz2earthz(this.state.EightDate[5], this.state.EightDate[i * 2 + 1]);//日支不见自己
      }
      if (i != 0) {
        shensha[i] = shensha[i] + EightrandomModule.shensha_tianluo(this.state.EightDate[0] + this.state.EightDate[1], this.state.EightDate[i * 2 + 1]);//年支不见年支
        shensha[i] = shensha[i] + EightrandomModule.shensha_diwang(this.state.EightDate[0] + this.state.EightDate[1], this.state.EightDate[i * 2 + 1]);//年支不见年支
        shensha[i] = shensha[i] + EightrandomModule.shensha_yearz2earthz(this.state.EightDate[1], this.state.EightDate[i * 2 + 1]);//年支不见年支
      }

    }

    var marryinfo = EightrandomModule.getmarryinfo(this.state.EightDate, this.state.sex, r, this.state.buildeight)

    var locationself = EightrandomModule.getlocationself(curyear, this.state.sex == "乾造" ? 0 : 1)
    var house = EightrandomModule.gethouselocation(locationself)
    var yongshen = EightrandomModule.getyongshen(this.state.EightDate,  this.state.buildeight,curluckyear[1],this.state.precent)
    var home = new Array()
    home = home.concat(day.self)
    home = home.concat(day.tip)
    home = home.concat(house)
    console.log("locationself", locationself)
    var base = new Array()
    base.push("公历: " + this.state.birth)
    base.push(" ")
    base.push("四柱: " + this.state.gzbirth)
    base.push(" ")
    base.push("旬空: " + this.state.gzxk)
    base.push(" ")
    base.push("命造: " + this.state.sex)
    base.push("起运: " + this.state.beginlucky)
    base.push("命卦: " + locationself)

    Animated.sequence([Animated.timing(this.state.fadeInOpacity, { toValue: 1, duration: 1000 ,useNativeDriver: true}), Animated.delay(1000), Animated.timing(this.state.fadeInOpacity, { toValue: 0.3, duration: 1000 ,useNativeDriver: true})]).start()
   
    //身旺判断
    var ret_powerself = EightrandomModule.getpowerself(this.state.EightDate,this.state.buildeight,curluckyear[1],this.state.precent)
    base.push( "命身: " +ret_powerself.powerself )
    base.push( "喜用: " +yongshen.xishen + yongshen.yongshen + (yongshen.special!=undefined?"("+yongshen.special+")":"") )
    base.push(" ")
    base.push( "忌仇: " +yongshen.jishen + yongshen.choushen  )
    if(undefined!=yongshen.passyonshen)
    {
      base.push( "通关: " +yongshen.passyonshen  )
    }
    base.push( "扶抑: " +yongshen.adjustyongshen )
    if(undefined!=yongshen.buyongshen )
    {
      base.push( "病药: " +yongshen.buyongshen  )
    }

    base.push( "星宿: " +this.state.xingsu.xingsu +this.state.xingsu.r )
    //base.push( "（得令用十二长生中非沐浴计算且不使用任何时柱）" )


    return (
      <View style={styles.container} >
        <ScrollView ref="location" style={{ backgroundColor: '#ffffff' }}>
          <View style={styles.container} >
            <WingBlank size="lg" style={{ backgroundColor: '#ffffff' }}>
              <Accordion onChange={this.onChange} activeSections={this.state.activeSections} styles={{ backgroundColor: '#ffffff',color:'#ffffff',opacity:100}}>
                <Accordion.Panel header={"八字排盘"} styles={{ backgroundColor: '#ffffff',color:'#ffffff',opacity:100}}>
                  <View>
                    <Grid
                      data={base}
                      columnNum={2}
                      hasLine={false}
                      itemStyle={{ height: 25, alignItems: "flex-start", flexwrap: "wrap",    backgroundColor: '#ffffff' }}
                      renderItem={dataItem => (
                        <View style={styles.container}>
                          <View style={styles.grid}>
                            <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14 }}>  {dataItem}</Text>
                          </View>
                        </View>
                      )} />
                    <WhiteSpace size="xl" styles={{ backgroundColor: '#ffffff'}}/>
                    <Grid
                      data={test}
                      columnNum={7}
                      hasLine={false}
                      itemStyle={{ height: 25,backgroundColor: '#ffffff' }}
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
                      data={test1}
                      columnNum={7}
                      hasLine={false}
                      itemStyle={{ alignItems: "center", textAlignVertical: "center", flex: 1, justifyContent: "flex-start", marginTop: 5 ,backgroundColor: '#ffffff'}}
                      renderItem={dataItem => (
                        dataItem.info.map((item, idx) => {
                          if (3 === item.length) {
                            return (
                              <View key={idx} style={{ flexDirection: "row" ,textAlignVertical:"center",alignItems:"center",backgroundColor: '#ffffff'}}>
                                {this.getColor(item[0], FontStyleConfig.getFontApplySize() + 14)}
                                <Text style={{ justifyContent: 'space-around', fontSize: FontStyleConfig.getFontApplySize() + 14 ,backgroundColor: '#ffffff'}}>  {item[1] + item[2]}</Text>
                              </View>)
                          }
                          return (
                            <View key={idx} >
                              <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, textAlign: "center", textAlignVertical: "center" ,backgroundColor: '#ffffff'}}>  {item}</Text>
                            </View>)})
                      )} />
                    <Grid
                      data={test2}
                      columnNum={7}
                      hasLine={false}
                      itemStyle={{ height: 25 }}
                      renderItem={dataItem => (

                        <View style={styles.container}>
                          <View style={styles.grid}>
                            <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, textAlign: "center" }}>  {dataItem.info}</Text>
                          </View>
                        </View>
                      )} /><WhiteSpace size="xl" styles={{ backgroundColor: '#ffffff'}}/>
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
                      )} /></View>
                </Accordion.Panel >
                <Accordion.Panel header={"大运排盘"} styles={{ backgroundColor: '#ffffff',color:'#ffffff'}}>
                  <Grid
                    data={years}
                    columnNum={8}
                    hasLine={false}
                    itemStyle={{ height: 25 }}
                    //当选择大运的时候，相当于选择了流年小运
                    onPress={(_el: any, index: any) => this.changeyear(Number(index % 8), "")}
                    renderItem={(dataItem, itemIndex) => (
                      <View style={styles.container}>
                        <View style={styles.grid}>
                          {this.testselectyear(dataItem, itemIndex % 8)}
                        </View>
                      </View>
                    )}
                  /></Accordion.Panel >

                <Accordion.Panel header="流年信息" styles={{ backgroundColor: '#ffffff',color:'#ffffff',opacity:100}}>
                  <Grid
                    data={minluckyyear}
                    columnNum={6}
                    itemStyle={{ height: 35 }}
                    isCarousel={true}
                    carouselMaxRow={4}
                    hasLine={false}
                    carouselProps={{
                      style: {
                        width: "100%",
                        height: 170,
                        backgroundColor: '#ffffff'
                      }
                    }}
                    onPress={(_el: any, index: any) => this.changeyear("", Number(_el.split(" ")[1]))}
                    renderItem={(dataItem, itemIndex) => (this.renderminyearItem(dataItem))}
                  />
                </Accordion.Panel >
                <Accordion.Panel header="五行衰旺" styles={{ backgroundColor: '#ffffff'}}>
                  <Grid
                    data={five}
                    columnNum={5}
                    hasLine={false}
                    itemStyle={{ height: 25,backgroundColor: '#ffffff' }}
                    renderItem={dataItem => (
                      <View style={styles.container}>
                        <View style={[styles.grid, { fontSize: FontStyleConfig.getFontApplySize() + 12 }]}>
                          {dataItem}
                        </View>
                      </View>
                    )}
                  />

                </Accordion.Panel >
                <Accordion.Panel>
                  {this.createpie(display,map)}
                </Accordion.Panel >
                <Accordion.Panel header="八字冲克" styles={{ backgroundColor: '#ffffff',color:'#ffffff',opacity:100 }}>
                  <List>
                    {r.dr.map(item => {
                      return (
                        <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, lineHeight: 25 }}>{item}</Text>)
                    })}
                    {r.er.map(item => {
                      return (
                        <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, lineHeight: 25 }}>{item}</Text>)
                    })}
                  </List>
                </Accordion.Panel >
                <Accordion.Panel header="流年大运" styles={{ backgroundColor: '#ffffff' ,color:'#ffffff',opacity:100}}>
                  <List>
                    {r.lr.map(item => {
                      return (
                        <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, lineHeight: 25 ,textAlign: 'justify'}}>{item}</Text>)
                    })}
                    {r.br.map(item => {
                      return (
                        <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, lineHeight: 25, textAlign: 'justify' }}>{item}</Text>)
                    })}
                  </List>
                </Accordion.Panel >
                <Accordion.Panel header="日柱信息" styles={{ backgroundColor: '#ffffff' ,color:'#ffffff',opacity:100}}>
                  <List>
                    <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, lineHeight: 25, textAlign: 'justify' }}>{home[0]}</Text>
                    <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, lineHeight: 25, textAlign: 'justify' }}>{home[1]}</Text>
                    <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, lineHeight: 25, textAlign: 'justify' }}>{home[2]}</Text>
                  </List>
                </Accordion.Panel >
                <Accordion.Panel header="婚姻提示" styles={{ backgroundColor: '#ffffff' ,color:'#ffffff',opacity:100}}>
                  <List>
                    <Animated.View style={{ opacity: this.state.fadeInOpacity }}>
                      <View>
                        {marryinfo.map(item => {
                          return (
                            <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, lineHeight: 25 }}>{item}{EightrandomModule.tipfire(item)}</Text>)
                        })}
                      </View>
                    </Animated.View>
                  </List>
                </Accordion.Panel >
              </Accordion>
            </WingBlank>
            <WhiteSpace size="xl" styles={{ backgroundColor: '#ffffff'}}/>
            {
              (WechatShare.shareimg(this.state.shareimg))
            }

            <WhiteSpace size="xl" styles={{ backgroundColor: '#ffffff'}}/>
            <WhiteSpace size="xl" styles={{ backgroundColor: '#ffffff'}}/>
            <WhiteSpace size="xl" styles={{ backgroundColor: '#ffffff'}}/>
            <WhiteSpace size="xl" styles={{ backgroundColor: '#ffffff'}}/>
            <WhiteSpace size="xl" styles={{ backgroundColor: '#ffffff'}}/>

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
    flexDirection: 'row',  backgroundColor: '#ffffff'
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
module.exports = EightrandomMainPage;  