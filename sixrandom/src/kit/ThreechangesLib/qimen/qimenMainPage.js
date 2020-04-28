

import React, {Component} from 'react';
import {StyleSheet,View, Text,Dimensions,TouchableOpacity,FlatList,ScrollView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import Storage from 'react-native-storage';

import { captureRef } from "react-native-view-shot";
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import StorageModule from '../../../config/StorageModule'
import ScreenConfig from '../../../config/ScreenConfig';
import {StyleConfig,FontStyleConfig} from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
import qimenModule from './qimenModule'
import RouteConfig from '../../../config/RouteConfig';
const {width, height} = Dimensions.get('window');  

var jump = false
let curyear = 0
let qimenMainPagethis
class qimenMainPage extends React.Component {
  constructor(props) {

  super(props);

		this.state = {
      sanchuanarray:"",
      Gstr:"",
    };
    qimenMainPagethis = this
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

  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    //headerRight:(<Button title="返回" />),
    return{
      
    title: RouteConfig["qimenMainPage"].name,
    }
    
  };

 
  

  refreshlist()
  {
      const { navigate } = this.props.navigation;
      
      var parameter = this.props.navigation.state.params

      console.log("refreshlist",parameter)
      if(undefined!=parameter)
      {
        var info = null;
        
        var ret;
        var args = {};
            var match = null;
            var search = decodeURIComponent(parameter.substring(1));
            var reg = /(?:([^&]+)=([^&]+))/g;
            while((match = reg.exec(search))!==null){
                args[match[1]] = match[2];
            }
        info = args
        //var Gstr = SixCourseModule.qiKe(info.SixCourseDate);
        //this.build(Gstr);
        var Gstr = this.calc_qimen(info.Date)
        console.log(Gstr)
        this.build(Gstr)
        this.setState({  
                Date:info.qimenDate,
                tip:info.tip,
                Gstr:Gstr
              }); 
      }
      else
      {
        StorageModule.load({
            key:"lastqimen",
        }).then(ret => {
              var Gstr = this.calc_qimen(ret.Date)
              this.setState({  
                Date:ret.qimenDateDate,
                tip:ret.tip,
                Gstr:Gstr
               }); 
            }).catch(err => {
            if(false==jump)
            {
               this.begin('qimenNewPage')
               jump = true
            }
        })
      }
    }

  replaceAt(str,index, character) 
  {
    console.log("replaceAt",str,index,character)
    if (undefined==str) str=""
      return str.substr(0, index) + character + str.substr(index+character.length);
  };
     
  calc_qimen(gbl_date) {
    Gstr = new Object()
    outx = new Array();
      var d = new Date(gbl_date);
      console.log("calc_qimen",d)
      var jiqi = qimenModule.GetJiqiInfo(
        d.getFullYear(),d.getMonth()+1,d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds(),0);
      //console.log(jiqi);
      //var out  = sprintf("%s\r\n",QIMEN_STAR.jiqi.JTime(jiqi.julian));
      var out  = String(qimenModule.JTime(jiqi.julian))+d.getMilliseconds();
      outx.push(out);
      out="";
          (function() {
            var lunar = qimenModule.Solar2Lunar(d.getFullYear(),d.getMonth()+1,d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds());
            // 計當下月將
            var _arrGen = new Array;
            for(var i = 2; i < 25; i+=2) {
              _arrGen.push(jiqi.wholeYear[i-1]);
            }
            var _gen = 11;
            for(var i = 0; i < 12; i++) {
              ////console.log(jiqi.jq0[(11-i)*2+1]);
              if(jiqi.julian > _arrGen[11 - i]) {
                _gen = 11 - i;
                break;
              }
            }
            // 計算日期
            var ldate = lunar.substring(lunar.indexOf('月')+1,lunar.indexOf('日'));
            ldate = parseInt(ldate);
            var ldate2 = String(parseInt(ldate))+String(d.getHours())+String(d.getMinutes());ldate2 = parseInt(ldate2);
            var idxLst = (function(ld) {
              var lst = [0,21730,50430,71530,100230,121330,150030,171130,192230,220930,242030,270330,291830];
              var idx = 0;
              for(var i = 13; i > 0; i--) if(lst[i] < ld) { idx = i; break }
              var astro = "亥戌酉申未午巳辰卯寅丑子亥戌酉申未午巳辰卯寅丑子".substr(_gen,12);
              return String(astro[idx%12])+":"+Number(idx % 12);
              })(ldate2);
            //
            out += lunar+idxLst;
            outx.push(out)
            out="";
          })();
          var cjiqi = jiqi.currentJiqiIdx - 1; if(cjiqi < 0) cjiqi = 23;
          out += "當前節氣: "+String(jiqi.jiqi[cjiqi],)+",",String(qimenModule.JTime(jiqi.wholeYear[cjiqi]));
      // 排四柱
      var tcol0 = new Array;
      var dcol0 = new Array;
      for(var i = 6; i > -1 ; i -= 2) tcol0.push(jiqi.bazi[i]);
      for(var i = 7; i > -1 ; i -= 2) dcol0.push(jiqi.bazi[i]);
      //
      // 計時家奇門三元
      var idx1 =  "甲乙丙丁戊己庚辛壬癸".indexOf(jiqi.bazi[4]);
      var idx2 = "子丑寅卯辰巳午未申酉戌亥".indexOf(jiqi.bazi[5]);
      idx2 = idx2 - idx1 % 5;
      if(idx2 < 0) idx2 += 12;
      idx2 = idx2 % 3;
      if(idx2 > 0) {
        idx2 = (idx2 == 1)? 2 : 1;
      }
      out += jiqi.jiqi[cjiqi]+"上中下".charAt(idx2)+"元　";
      // 計算當前局數
      // 計陰陽遁
      var dun_type = 2; // 0為陰遁, 1為陽遁, 其餘為錯誤
      var kook = [8,9,1,3,4,5,4,5,6,9,8,7,2,1,9,7,6,5,6,5,4,1,2,3]; // 局數
      var using_kook = kook[cjiqi];  //局數
      //console.log(jtoday, jqTime[21], jqTime[9]);
      if( jiqi.julian > jiqi.wholeYear[9] && jiqi.julian < jiqi.wholeYear[21]) {
        // 陰遁
        dun_type = 0;
        for(var i = 0; i < idx2; i++) {
          using_kook -= 6;
          while(using_kook < 1) using_kook += 9;
        }
      } else {
        // 陽遁
        dun_type = 1;
        for(var i = 0; i < idx2; i++) {
          using_kook += 6;
          while(using_kook > 9) using_kook -= 9;
        }
      }
     dun_type = 0;
     using_kook = 1;
      //console.log("using_kook",using_kook);
      out += "陰陽".charAt(dun_type)+"遁"+" 一二三四五六七八九".charAt(using_kook)+"局"+"\r\n";
      outx.push(out)
      out="";
      // 輸出柱名
      out += "　　　";
      //for(var i = 0; i < jiqi.bazi.length; i+=2) {
      for(var i = 0; i < 12; i+=2) {
        out += "　"+"　年　月　日　時　分　秒毫秒不知未明疑問".substr(i,2);
      }  outx.push(out)
      out="";
      // 輸出八字;
      out += ("八字：");
      //for(var i = 0; i < jiqi.bazi.length; i += 2) out+=("　"+jiqi.bazi.substr(i, 2));
      for(var i = 0; i < 12; i += 2) out+=("　"+jiqi.bazi.substr(i, 2));
      outx.push(out)
      out="";
      // 計空亡
      out += ("空亡：");
      for(var i = 0; i < 12; i += 2) {
        var chun_sau = "子丑寅卯辰巳午未申酉戌亥".indexOf(jiqi.bazi[i+1]) - "甲乙丙丁戊己庚辛壬癸".indexOf(jiqi.bazi[i]);
        if(chun_sau < 0) chun_sau += 12;
        var hung_mon = chun_sau - 2;
        if(hung_mon < 0) hung_mon += 12;
        out += ("　"+"子丑寅卯辰巳午未申酉戌亥".substr(hung_mon, 2));
      }
      outx.push(out)
      out="";
       
      // ---
      // 計算時家奇門遁甲
      // ---
      var ot = new Array()
      var q1 = qimenModule.qimenCalc(dun_type,using_kook,jiqi.bazi.substr(6,2));
      //var q2 = QIMEN_STAR.minQimen(d.getHours(),d.getMinutes(),d.getSeconds());
      out += "值符：天"+String(q1['info']['符']);
      outx.push(out)
      out="";
      //out += sprintf("秒家：干支:%s, %s遁%s局\r\n", q2['info']['干支'],q2['info']['遁'],q2['info']['局']);
      // setup info 
      //$('#info').html(out);
      var ot = new Array()
      //console.log(q1)
      var gn = {'符':'值符','蛇':'騰蛇','陰':'太陰','合':'六合','白':'白虎','玄':'玄武','地':'九地','天':'九天'};
      var idx = [17,8,11,6,12,18,13,16,7];
      for(var i = 0; i < 25; i++) {
        ot[i] = new Object()
        ot[i].shen = ""
        ot[i].kong = ""
      }
      for(var i = 0; i < 9; i++) {
        // 時家奇門
        x = idx[i]
        ot[x] = new Object()
        ot[x].kong = ""
        ot[x].shen = ""
        ot[x].di = q1['地'][i+1];
        if(i == 4) continue;
        ot[x].line1 = q1['門'][i+1] + '門'
        if(i != 4){ ot[x].line2 = gn[q1['神'][i+1]]};
        
        ot[x].line3 = q1['星'][i+1]  + '天'
        
        ot[x].tian = q1['天'][i+1];
        //console.log(ot)
      }
      
      
      // 建立空亡符號
      (function() {
        var abc = jiqi.bazi.substr(6,2)
        var chun_sau = "子丑寅卯辰巳午未申酉戌亥".indexOf(abc[1]) - "甲乙丙丁戊己庚辛壬癸".indexOf(abc[0]);
        if(chun_sau < 0) chun_sau += 12;
        var hung_mon = chun_sau - 2;
        if(hung_mon < 0) hung_mon += 12;
        // 建立空亡符號var idx = [7,2,3,0,4,8,5,6,2];
        var idx = [17,8,11,6,12,18,13,16,7];
        var a = "077233811655".charAt(hung_mon);
        var sy = idx[a]
        ot[sy].kong= 'Ｏ';
        var a = "077233811655".charAt(hung_mon+1);//console.log(a)
        var sy = idx[a]
        ot[sy].kong = 'Ｏ';
      })();
      // 計貴人
      (function() {
        // 計當下月將
        var _arrGen = new Array;
        for(var i = 2; i < 25; i+=2) {
          _arrGen.push(jiqi.wholeYear[i-1]);
        }
        var _gen = 11;
        for(var i = 0; i < 12; i++) {
          ////console.log(jiqi.jq0[(11-i)*2+1]);
          if(jiqi.julian > _arrGen[11 - i]) {
            _gen = 11 - i;
            break;
          }
        }
        // 月將加時
        var _ginmon = "子丑寅卯辰巳午未申酉戌亥".indexOf("亥戌酉申未午巳辰卯寅丑子".charAt(_gen));  // 找月將index
        var _gmonth = "子丑寅卯辰巳午未申酉戌亥".indexOf(dcol0[0]); //月將加時index
        var _gg = _ginmon - _gmonth;
        if(_gg < 0) _gg+= 12;
        var gnm = "子丑寅卯辰巳午未申酉戌亥子丑寅卯辰巳午未申酉戌亥".substr(_gg,12); // 月將加時天盤
        var _gen_text = "亥戌酉申未午巳辰卯寅丑子".charAt(_gen);
        var _dnt = gnm.indexOf(_gen_text);
        var day_night_tin = "卯辰巳午未申酉戌亥子丑寅";
        var day_night_tin = day_night_tin.indexOf("子丑寅卯辰巳午未申酉戌亥".charAt(_dnt));
        var tin_idx  = "甲乙丙丁戊己庚辛壬癸".indexOf(tcol0[1]);
        var help_man;
        if(day_night_tin < 6) { // 日貴人
          var help_man = "丑子亥亥丑子丑午巳巳".charAt(tin_idx);
        } else { //夜貴人
          var help_man = "未申酉酉未申未寅卯卯".charAt(tin_idx);
        }
        var help_man2;
        var _tmp  = gnm.indexOf(help_man); //console.log(gnm.charAt(_tmp));
        var _tmp2 = "子丑寅卯辰巳午未申酉戌亥".charAt(_tmp);
        var day_night_dei = "亥子丑寅卯辰巳午未申酉戌".indexOf(_tmp2);//console.log(_tmp2,":",day_night_dei);
        var _start_at = 12 - _tmp; if(_start_at == 0) _start_at = 12;
        //console.log(day_night_dei,': ',_start_at);
        if(day_night_dei < 6) { // 順貴人
          var help_man2 = "貴蛇朱合勾青空白常玄陰后貴蛇朱合勾青空白常玄陰后貴蛇朱合勾青空白常玄陰后".substr(_start_at, 12);
        } else { //逆貴人
          var help_man2 = "后陰玄常白空青勾合朱蛇貴后陰玄常白空青勾合朱蛇貴后陰玄常白空青勾合朱蛇貴".substr(_start_at-1, 12);
        }
        // dump 貴人
        //console.log('天盤:',gnm);
        //console.log('貴人:',help_man2);
        var xy = [22,21,15,10,5,1,2,3,9,14,19,23];
        for(var i = 0; i< 12; i++) {
          ox = xy[i]
          ot[ox].shen = gnm[i] + help_man2[i]
        }
        //console.log(ot)
        //console.log(sixcourse)
        //console.log(out)
        
        Gstr.ot = ot
        Gstr.outx = outx
        
      })();
      //$('#output').html(ot.join("\n"));
      return Gstr
    }
  
  
  build(Gstr)
  {
     var sanchuanarray = new Array();
     
     for(var i=0;i<5;i++)
     { 
        for (var n=0;n<5;n++)
        {
          sanchuanarray[i*5+n] = Gstr.ot[i*5+n]
        }
     }
     console.log(sanchuanarray)
     this.setState({sanchuanarray:sanchuanarray})
  }

  keyExtractor=(item, index) => index.toString()



  renderItem(item) {
    return (
  
        <Text>{item.item}</Text>
  
    );
  }

  renderGridItem(dataItem){
    console.log(dataItem)
    let content = (
      <View style={styles.container}>
            <View style={styles.grid}>
            <Text style={[fontSize=11]}>{dataItem.line1}{dataItem.kong}</Text>
            <Text style={[fontSize=11]}>{dataItem.line2}</Text>
            <Text style={[fontSize=11]}>{dataItem.line3}</Text>
            
            </View>
            <View style={styles.gridfix}>
            <Text style={styles.gridfix}>{dataItem.tian}</Text>
            <Text style={styles.gridfix}>{dataItem.di}</Text>
            <Text style={styles.gridfix}>{dataItem.shen}</Text>
            </View>
            </View>
    )
    return content;
  }
  
  render(){
      const { navigate } = this.props.navigation;
      
      
      
      
        return(
        <View style={styles.container} >
          <ScrollView ref="location" style={{backgroundColor:'#ffffff'}}>
          <View style={styles.container} >
          <WingBlank size="lg">
          <WhiteSpace size="xl" />
          <FlatList  
              data={this.state.Gstr.outx}
              extraData={this.state}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              />

          <Grid
          data={this.state.sanchuanarray}
          columnNum={5}
          hasLine={true}
          renderItem={dataItem => this.renderGridItem(dataItem)}
          //isCarousel
          //onClick={()}
        />
        <WhiteSpace size="xl" />
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
              
              {WechatShare.shareRetBar(WechatShare,this,"奇门详情")}
                          </View>
                         
    )
    }
   

   
  };


    




var styles = StyleSheet.create ({
  container: {
    flex:1,
    backgroundColor:'#ffffff'
  },
  gridfix:
  {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems:'flex-end',
    textAlignVertical:"bottom",
  },

 rowhigth:{
    lineHeight:25,
  },
  grid:{
    flex: 1,
    fontSize:FontStyleConfig.getFontApplySize()+12,
    height:100,
    justifyContent: 'flex-start',
    alignItems:'flex-start',
    textAlignVertical:"top",
  },
  list:{
    height:30,
    marginLeft: 1,
    paddingLeft:1,
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    flexWrap:'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  textbutton:{
    flex:1,
    justifyContent:'center', 
    flexWrap:'wrap',
    alignItems:'stretch',
    flexDirection: 'row',
  },
   button:{
    height: 50,
    backgroundColor:'transparent',
   justifyContent:'center',
   borderRadius: 4,
    },
  tabBarStyle:{
    flex: 1,
    height:40,
    flex:1
  },

  flatText: {
    justifyContent: 'space-around', //虽然样式中设置了 justifyContent: 'center'，但无效  
    flexDirection: 'row',
    alignItems:'stretch',
    marginLeft: 5, 
    marginRight: 5, 
  },
  flatTextfone:{
    justifyContent: 'space-around', //虽然样式中设置了 justifyContent: 'center'，但无效  
    flexDirection: 'row',
    alignItems:'stretch',
    //paddingLeft:5
  },
});
module.exports=qimenMainPage;  