

import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, FlatList, ScrollView, Platform } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Storage from 'react-native-storage';

import { captureRef } from "react-native-view-shot";
import { Grid, Accordion, WhiteSpace, WingBlank, List } from '@ant-design/react-native';
import StorageModule from '../../config/StorageModule'
import ScreenConfig from '../../config/ScreenConfig';
import { StyleConfig, FontStyleConfig } from '../../config/StyleConfig';
import WechatShare from '../../config/WechatShare'
import ziweiModule from './ziweiModule'
import RouteConfig from '../../config/RouteConfig';
import IconConfig from '../../config/IconConfig'
import EightrandomModule from '../UniversechangesLib/EightrandomLib/EightrandomModule'
import { SixrandomModule } from '../UniversechangesLib/SixrandomLib/SixrandomModule'
const { width, height } = Dimensions.get('window');
//if("android"===Platform.OS)

let ziweiMainPagethis = null
class ziweiMainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curluckyearnum: 0,
      curminiluckyearnum: 0,
      beginlucky: 0,
    };
    ziweiMainPagethis = this
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

  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    //headerRight:(<Button title="返回" />),
    return {

      title: RouteConfig["ziweiMainPage"].name,
    }

  };




  refreshlist() {
    const { navigate } = this.props.navigation;

    var parameter = this.props.navigation.state.params

    console.log("refreshlist", parameter)
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
      //this.build(Gstr)
      var ziweRet = ziweiModule.calc(info.data, info.sex)
      var luckyyear = new Array();
      var ziweiEightDate = info.EightDate
      ziweiEightDate.split(0,7)
      luckyyear = EightrandomModule.getbigluckyear(ziweiEightDate, info.sex);
      var luckyearrelation = new Array();
      var luckyyearposition = new Array();
      for (var i in luckyyear) {

        var rel = luckyyear[i].slice(0, 1);
        //console.log("luckyyear",rel, luckyyear[i]);
        rel = EightrandomModule.parentday(rel, info.EightDate[4])
        //console.log(rel);
        luckyearrelation.push(rel);
        luckyyearposition.push(EightrandomModule.gettwelfthposition(info.EightDate[4] + luckyyear[i].slice(1, 2)))
      }
      var buildeight = new Array()
      buildeight[0] = EightrandomModule.parentday(info.EightDate[0], info.EightDate[4])
      buildeight[2] = EightrandomModule.parentday(info.EightDate[2], info.EightDate[4])
      buildeight[4] = "元"//this.parentday(info.EightDate[4],info.EightDate[4])
      buildeight[6] = EightrandomModule.parentday(info.EightDate[6], info.EightDate[4])
      buildeight[1] = EightrandomModule.parentearth(info.EightDate[1], info.EightDate[4])
      buildeight[3] = EightrandomModule.parentearth(info.EightDate[3], info.EightDate[4])
      buildeight[5] = EightrandomModule.parentearth(info.EightDate[5], info.EightDate[4])
      buildeight[7] = EightrandomModule.parentearth(info.EightDate[7], info.EightDate[4])
      var buildeightExt = new Array()
      buildeightExt[0] = EightrandomModule.gethide(info.EightDate[1]);
      buildeightExt[2] = EightrandomModule.gethide(info.EightDate[3]);
      buildeightExt[4] = EightrandomModule.gethide(info.EightDate[5]);
      buildeightExt[6] = EightrandomModule.gethide(info.EightDate[7]);
      buildeightExt[1] = EightrandomModule.gethideshishen(buildeightExt[0], info.EightDate[4]);
      buildeightExt[3] = EightrandomModule.gethideshishen(buildeightExt[2], info.EightDate[4]);
      buildeightExt[5] = EightrandomModule.gethideshishen(buildeightExt[4], info.EightDate[4]);
      buildeightExt[7] = EightrandomModule.gethideshishen(buildeightExt[6], info.EightDate[4]);
      var precent = new Array();
      var daykey = new Array();
      var o = EightrandomModule.getfive(info.EightDate)
      precent = o.q
      daykey = o.p
      var gong = new Array()
      gong.push(ziweRet.gong[5].split(","))
      gong.push(ziweRet.gong[6].split(","))
      gong.push(ziweRet.gong[7].split(","))
      gong.push(ziweRet.gong[8].split(","))
      gong.push(ziweRet.gong[4].split(","))
      gong.push(ziweRet.ju + "\n\t" + ziweRet.zhihua)
      gong.push(" ")
      gong.push(ziweRet.gong[9].split(","))
      gong.push(ziweRet.gong[3].split(","))
      gong.push(" ")
      gong.push(" ")
      gong.push(ziweRet.gong[10].split(","))
      gong.push(ziweRet.gong[2].split(","))
      gong.push(ziweRet.gong[1].split(","))
      gong.push(ziweRet.gong[0].split(","))
      gong.push(ziweRet.gong[11].split(","))

      var t = info.birth.split(" ");
      var gz = new Date(t[0]);
      var EightDate = SixrandomModule.lunar_f(gz)
      var retterm = EightrandomModule.getYearTerm(gz.getFullYear())
      var beginlucky = EightrandomModule.getbigluckyearbegin(retterm, gz, ziweiEightDate, info.sex);
      var ju = ziweRet.ju.split(" ")
      this.setState({
        EightDate: ziweiEightDate,
        zhihua: ziweRet.zhihua,
        gong: gong,
        ju: ju,
        geju: ziweRet.geju,
        gejudetail: ziweRet.gejudetail,
        luckyyear: luckyyear,
        luckyearrelation: luckyearrelation,
        luckyyearposition: luckyyearposition,
        buildeight: buildeight,
        buildeightExt: buildeightExt,
        daykey: daykey,
        beginlucky: Math.floor(beginlucky),
        curyear: EightDate.Year,
        curmonth:EightDate.Month,
        birth:info.birth,
        sex:info.sex,

      })
      this.changeyear("", (new Date()).getFullYear())
    }
    else {
      this.props.navigation.goBack()
    }
  }
  keyExtractor = (item, index) => index.toString()
  renderItem(item) {
    return (
      <Text>{item.item}</Text>
    );
  }
  getShensha(str) {
    var s = str.split(" ")
    var itemArr = s.map(function (_, i, arr) {
      return i;
    }).map((_i, index) => {
      if (undefined != s[index] && "" != s[index]) {
        var c = "black"
        if ("权" == s[index]) c = "red"
        if ("禄" == s[index]) c = "green"
        if ("科" == s[index]) c = "blue"
        if ("忌" == s[index]) c = "darkred"
        return (<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, flexDirection: "column", width: 16, color: c }}>{s[index]}</Text>)
      }
    })
    return itemArr

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
  getColor(king) {
    if ("甲" == king || "乙" == king || "寅" == king || "卯" == king) {
      return (<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 13, color: 'green' }}>{king}</Text>)
    }
    if ("丙" == king || "丁" == king || "午" == king || "巳" == king) {
      return (<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 13, color: 'red' }}>{king}</Text>)
    }
    if ("戊" == king || "己" == king || "丑" == king || "未" == king || "辰" == king || "戌" == king) {
      return (<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 13, color: 'brown' }}>{king}</Text>)
    }
    if ("庚" == king || "辛" == king || "申" == king || "酉" == king) {
      return (<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 13, color: 'gold' }}>{king}</Text>)
    }
    if ("癸" == king || "壬" == king || "子" == king || "亥" == king) {
      return (<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 13, color: 'blue' }}>{king}</Text>)
    }

    return (<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 13 }}>{king}</Text>)
  }
  changeyear(bigyear, miniyear) {
    var by = 0
    var my = new Date()
    my = my.getFullYear()
    if ("" !== bigyear) {
      //console.log("changeyearbig",bigyear,miniyear)
      by = Number(bigyear)
      my = Math.floor(Number(by * 10 + this.state.beginlucky))
      this.setState({ curluckyearnum: by, curminiluckyearnum: my })

    }
    else if ("" !== miniyear) {
      //console.log("changeyearmini",bigyear,miniyear)
      my = Number(miniyear)
      if (my >= this.state.beginlucky) {
        by = Math.floor((my - this.state.beginlucky) / 10)
      }

      this.setState({ curluckyearnum: by, curminiluckyearnum: my })
    }
    //console.log("changeyear",bigyear,miniyear,by,my,this.state.beginlucky)
  }
  renderminyearItem(item) {

    var year = item.split(" ");
    var yearcolor = IconConfig.colororange
    if (year[1] == this.state.curminiluckyearnum) {
      yearcolor = IconConfig.colorblue
    }
    //console.log("color",yearcolor,year[1],this.state.curminiluckyearnum)
    return (
      <View style={[styles.gridmid]}>
        <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 12, color: yearcolor }}>{year[0]}</Text>
        <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 12, color: yearcolor }}>{year[1]}</Text>
      </View>

    );
  }
  testselectyear(item, curluckyear) {
    var yearcolor = IconConfig.colorred
    if (this.state.curluckyearnum == curluckyear) {
      yearcolor = IconConfig.colorgreen
    }
    //console.log("testselectyear",item,curluckyear,yearcolor)
    return (
      <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 12, color: yearcolor }}>{item}</Text>
    )
  }
  render() {
    const { navigate } = this.props.navigation;

    var androidh = 1.0
    //if("android"===Platform.OS)
    {
        androidh = 1.3
    }

    if (undefined != this.state.gong) {
      var thisyear = new Date()//这里应该选小运的年份
      if(0!=this.state.curminiluckyearnum)
      {thisyear.setFullYear(this.state.curminiluckyearnum)}
      var eightyear = SixrandomModule.lunar_f(thisyear)
      var years = new Array()
      years = this.state.luckyearrelation.concat(this.state.luckyyear, this.state.luckyyearposition)
      var minluckyyear = new Array()
      var birthdayyear = new Date()

      birthdayyear.setYear(this.state.curyear)
      birthdayyear.setMonth(this.state.curmonth)
      birthdayyear = SixrandomModule.lunar_f(birthdayyear)
      birthdayyear = birthdayyear.gzYear + birthdayyear.gzMonth + birthdayyear.gzDate + birthdayyear.gzTime;
      minluckyyear = EightrandomModule.getminlucky(birthdayyear, this.state.sex, this.state.curyear);


      return (
        <View style={StyleConfig.container} >
          <ScrollView ref="location" style={{ backgroundColor: '#ffffff' }}>
            <View style={StyleConfig.container} >
              <WingBlank size="lg">
                <WhiteSpace size="xl" />
                <Grid
                  data={this.state.gong}
                  columnNum={4}
                  hasLine={false}
                  itemStyle={{ width: (width - 30) / 4, height: ((height - 100) / 5 )*androidh}}
                  renderItem={(el, index) => {
                    var bs = 0.5
                    var s = 1


                    

                    if (-1 != [5, 6, 9, 10].indexOf(index)) {
                      bs = 0
                    }
                    if (-1 != [5].indexOf(index)) {
                      var test = new Array()

                      var gzYear = eightyear.gzYear
                      var curluckyear = ziweiMainPagethis.state.luckyyear[ziweiMainPagethis.state.curluckyearnum]
                      test.push({ info: "运", hide: '' })
                      test.push({ info: "流", hide: '' })
                      test.push({ info: "年", hide: '' })
                      test.push({ info: "月", hide: '' })
                      test.push({ info: "日", hide: '' })
                      test.push({ info: "时", hide: '' })

                      test.push({ info: EightrandomModule.parentday(curluckyear[0], this.state.EightDate[4]), hide: '' })
                      test.push({ info: EightrandomModule.parentday(gzYear[0], this.state.EightDate[4]), hide: '' })
                      for (var i = 0; i < 4; i++) {
                        test.push({ info: this.state.buildeight[i * 2], hide: '' })
                      }

                      test.push({ info: curluckyear[0], hide: '' })
                      test.push({ info: gzYear[0], hide: '' })
                      for (var i = 0; i < 4; i++) {
                        test.push({ info: this.state.EightDate[i * 2], hide: '' })
                      }

                      test.push({ info: curluckyear[1], hide: EightrandomModule.gethide(curluckyear[1]) })
                      test.push({ info: gzYear[1], hide: EightrandomModule.gethide(gzYear[1]) })
                      for (var i = 0; i < 4; i++) {
                        test.push({ info: this.state.EightDate[i * 2 + 1], hide: this.state.buildeightExt[i * 2] })
                      }

                      test.push({ info: EightrandomModule.parentearth(curluckyear[1], this.state.EightDate[4]), hide: EightrandomModule.gethideshishen(EightrandomModule.gethide(curluckyear[1]), this.state.EightDate[4]) })
                      test.push({ info: EightrandomModule.parentearth(gzYear[1], this.state.EightDate[4]), hide: EightrandomModule.gethideshishen(EightrandomModule.gethide(gzYear[1]), this.state.EightDate[4]) })

                      for (var i = 0; i < 4; i++) {
                        test.push({ info: this.state.buildeight[i * 2 + 1], hide: this.state.buildeightExt[i * 2 + 1] })
                      }

                      test.push({ info: EightrandomModule.gettwelfthposition(this.state.EightDate[4] + curluckyear[1]), hide: '' })
                      test.push({ info: EightrandomModule.gettwelfthposition(this.state.EightDate[4] + gzYear[1]), hide: '' })
                      for (var i = 0; i < 4; i++) {
                        var x = EightrandomModule.gettwelfthposition(this.state.EightDate[4] + this.state.EightDate[i * 2 + 1])
                        test.push({ info: x, hide: "" })
                      }
                      s = 2
                      var hi = (s * (height - 100) / 5)*androidh
                      return (
                        <View style={{ borderWidth: bs, width: s * (width - 30) / 4, height:hi, flex: 1, }}>
                          <WhiteSpace size="xl" /><WingBlank size="sm">
                          <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 12 }}>{this.state.ju[0]+" "+this.state.ju[1]}</Text>
                          <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 12 }}>{this.state.ju[2]+" "+this.state.ju[3]+" "+this.state.ju[4]}</Text>
                          <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 12 }}>{this.state.birth}</Text>
                          <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 12 }}>{this.state.sex}</Text>
                          <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 12 }}>{"起运:"+this.state.beginlucky}</Text>
                          </WingBlank><WhiteSpace size="xl" />
                          <Grid
                            data={test}
                            columnNum={6}
                            hasLine={true}
                            itemStyle={{ height: 20 }}
                            renderItem={dataItem => (
                              <View style={styles.container}>
                                <View style={styles.gridmid}>
                                  <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 12 }}>{this.getColor(dataItem.info)}</Text>
                                </View>
                              </View>
                            )}
                          />
                          <WhiteSpace size="xl" />
                        </View>)
                    }
                    else if (-1 != [6, 9, 10].indexOf(index)) {
                      s = 0
                      var hi = (s * (height - 100) / 5)*androidh
                      return (
                        <View style={{ borderWidth: bs, width: s * (width - 30) / 4, height:hi, flex: 1, }}>
                        </View>)
                    } else {
                      var ds = new Array()
                      ds = ds.concat(el)
                      var shengong = " "
                      if ("[身宫]" == el[3]) {
                        shengong = shengong.concat(el[3])
                        ds = ds.splice(5, ds.length - 2)
                      }
                      else {
                        ds = ds.splice(4, ds.length - 2)
                      }
                      delete ds[ds.length - 1]
                      var itemArr = ds.map(function (_, i, arr) {
                        return i;
                      }).map((_i, index) => {
                        if (undefined != ds[index] && "" != ds[index]) {
                          return (<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, flexDirection: "column", width: 16 }}>{this.getShensha(ds[index])}</Text>)
                        }
                      })
                      var hi = (s * (height - 100) / 5)*androidh
                      return (
                        
                        <View style={{ borderWidth: bs, width: s * (width - 30) / 4, height:hi , flex: 1, }}>
                          <View style={{ bottom: - hi+ 30, justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                            <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 12, color: "red" }}>{el[2]}</Text>
                            <Text>{this.getColor(el[1][0])}{this.getColor(el[1][1])}</Text>
                          </View>
                          <View style={{ bottom: - hi + 100, justifyContent: "center", alignItems: 'center', }}>
                            <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14 }}>{shengong}</Text>
                            <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14 }}>{el[" " != shengong ? 4 : 3]}</Text>
                          </View>
                          <View style={{ bottom: - hi + 80, justifyContent: "flex-start", alignItems: 'flex-start', }}>
                            <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14 }}>{el[el.length - 1]}</Text>
                          </View>
                          <View style={{ top: -75, flexWrap: 'wrap', flexDirection: 'row', justifyContent: "flex-start" }}>
                            {itemArr}
                          </View>
                        </View>)
                    }
                  }}
                />
                <WhiteSpace size="xl" />
                <Grid
                  data={years}
                  columnNum={8}
                  hasLine={true}
                  itemStyle={{ height: 25 }}
                  //当选择大运的时候，相当于选择了流年小运
                  onPress={(_el: any, index: any) => this.changeyear(Number(index % 8), "")}
                  renderItem={(dataItem, itemIndex) => (
                    <View style={styles.container}>
                      <View style={styles.gridmid}>
                        {this.testselectyear(dataItem, itemIndex % 8)}
                      </View>
                    </View>
                  )}
                />
                <WhiteSpace size="xl" />
                <Grid
                  data={minluckyyear}
                  columnNum={6}
                  hasLine={true}
                  itemStyle={{ height: 35 }}
                  isCarousel={true}
                  carouselMaxRow={4}
                  //当选择大运的时候，相当于选择了流年小运
                  onPress={(_el: any, index: any) => this.changeyear("", Number(_el.split(" ")[1]))}
                  renderItem={dataItem => this.renderminyearItem(dataItem)}
                //isCarousel
                //onClick={()}
                />
                <WhiteSpace size="xl" />
                <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14 }}>{this.state.zhihua}</Text>
                <WhiteSpace size="xl" />
                <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14 }}>{this.state.geju}</Text>
                <WhiteSpace size="xl" />
                <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14 }}>{this.state.gejudetail}</Text>
                <WhiteSpace size="xl" />
                {
                  (WechatShare.shareimg(this.state.shareimg))
                }
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
              </WingBlank>
            </View>
          </ScrollView>
          {WechatShare.shareRetBar(WechatShare, this, "紫薇排盘")}
        </View>
      )
    }
    else {
      return (<View></View>)
    }
  }
};

var styles = StyleSheet.create({
  gridfix:
  {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    textAlignVertical: "bottom",
  },
  grid: {
    flex: 1,
    fontSize: FontStyleConfig.getFontApplySize() + 12,
    height: 100,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlignVertical: "top",
  },
  gridmid: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: "center",
    //alignItems: 'center',
  },
});
module.exports = ziweiMainPage;  