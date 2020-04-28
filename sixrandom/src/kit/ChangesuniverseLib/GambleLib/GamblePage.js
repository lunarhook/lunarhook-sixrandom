

import React, {Component} from 'react';
import {StyleSheet,View,TouchableHighlight,Platform, Text,Vibration,ScrollView,FlatList,Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { Button} from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { captureRef } from "react-native-view-shot";
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleConfig,FontStyleConfig} from '../../../config/StyleConfig';
import FontTypeModule from '../../../config/FontTypeModule';
import ScreenConfig from '../../../config/ScreenConfig';
import WechatShare from '../../../config/WechatShare'
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import RNShake from 'react-native-shake';
/*
      庙     旺     落      陷
太阳 庙：狮子 旺：白羊 落：水瓶 陷：天平
月亮 庙：巨蟹 旺：金牛 落：摩羯 陷：天蝎
水星 庙：双子处女 旺：处女 落：射手双鱼 陷：双鱼
金星 庙：金牛天平 旺：双鱼 落：天蝎白羊 陷：处女
火星 庙：白羊天蝎 旺：摩羯 落：天平金牛 陷：巨蟹
木星 庙：射手双鱼 旺：巨蟹 落：双子处女 陷：摩羯
土星 庙：摩羯水瓶 旺：天平 落：巨蟹狮子 陷：白羊
    
1 4 7 10 角宫 最快，有力 
2 5 8 11 续宫 最稳，中速
3 6 9 12 果宫 最慢，无力

飞星

*/

var planet = new Array()
planet[0]="太阳"
planet[1]="月亮"
planet[2]="水星"
planet[3]="金星"
planet[4]="木星"
planet[5]="火星"
planet[6]="土星"
planet[7]="天王"
planet[8]="海王"
planet[9]="冥王"
planet[10]="北交"
planet[11]="南交"

var planettip = new Array()
planettip[0]="太阳:权利，生命力，价值，人生目标，创造力与才华，地位，尊贵，政府机构，政治，焦点，舞台，名利，赌博，投机，股票证券，玩乐"
planettip[1]="月亮:心情，直觉，安全感，保护与照顾，无常，变动，情绪，家庭，环境，饮食，女性，日常生活，液体，历史"
planettip[2]="水星:思考，知识，学习，演讲，语言，网络，信息，文件，商业活动，交通，钥匙，问题"
planettip[3]="金星:爱情，情感，关系，绯闻，金钱，享受，财富，社交，艺术，珠宝，奢侈品，礼物，女性"
planettip[4]="木星:道德，信仰，宗教，智慧，法律，幸运，远方，扩张，财富，赌博，成功，旅行，异国，教育"
planettip[5]="火星:野心，积极，行动，破坏，冲突，危险，竞争，欲望，金属，犯罪"
planettip[6]="土星:责任，耐心，认真，拖延，保守，忧郁，困难，阻碍，限制，损失，严肃，稳定，破旧"
planettip[7]="天王:叛逆，创造，分离，意外，独立，突发，任性，革命，科技，社会意识，新思想"
planettip[8]="海王:理想，幻想，催眠，自欺，骗局，迷糊，不负责任，混乱，假象，神秘，梦境，艺术，酒精，药物，水，慈善"
planettip[9]="冥王:阴谋，疑心，洞察，潜意识，侦查，秘密，欲望，生死，毁灭与重生，保险，权利，黑社会"
planettip[10]="北交:前世业报，顺势而为，难以抵挡"
planettip[11]="南交:前世业障，逆势而为，执着虚妄"

var planetstar = new Array()
planetstar[0]="白羊"
planetstar[1]="金牛"
planetstar[2]="双子"
planetstar[3]="巨蟹"
planetstar[4]="狮子"
planetstar[5]="处女"
planetstar[6]="天平"
planetstar[7]="天蝎"
planetstar[8]="射手"
planetstar[9]="摩羯"
planetstar[10]="水瓶"
planetstar[11]="双鱼"

var planetstartip = new Array()
planetstartip[0]="白羊:勇气，斗争，领袖，霸道，主动，激情，活力，本能"
planetstartip[1]="金牛:沉着，耐心，贪婪，肉体，物质，固执，大自然，惰性，沉默"
planetstartip[2]="双子:心智，幼稚，好奇，适应，商业，活跃，三心二意，思考"
planetstartip[3]="巨蟹:母性，顾家，念旧，情绪化，温顺，敏感，直觉，保护，滋养"
planetstartip[4]="狮子:王者，意志，追求，雄心，专横，真诚，大度，虚荣，热情"
planetstartip[5]="处女:分析，谨慎，秩序，方法，实际，琐碎，批评，纠结"
planetstartip[6]="天平:艺术，公正，社交，美学，优柔寡断，懒散，浪漫"
planetstartip[7]="天蝎:顽强，意志，好斗，毁灭，重生，神秘，欲望，性爱"
planetstartip[8]="射手:坦率，哲学，高傲，自负，热情，旅行，冒险，教育"
planetstartip[9]="摩羯:内向，专心，严谨，责任，耐性，借鉴，忧郁，功利，冷漠"
planetstartip[10]="水瓶:利他，独创，群体，独立，思想，叛逆，革命"
planetstartip[11]="双鱼:神秘，牺牲，敏感，梦幻，同情，浪漫，成瘾，堕落"

var planetpositon = new Array()
planetpositon[0]="一宫"
planetpositon[1]="二宫"
planetpositon[2]="三宫"
planetpositon[3]="四宫"
planetpositon[4]="五宫"
planetpositon[5]="六宫"
planetpositon[6]="七宫"
planetpositon[7]="八宫"
planetpositon[8]="九宫"
planetpositon[9]="十宫"
planetpositon[10]="十一"
planetpositon[11]="十二"

var planetpositontip = new Array()
planetpositontip[0]="一宫:角宫，自我意识，表达方式，外貌，人格及童年成长环境"
planetpositontip[1]="二宫:续宫，个人资产，获得财富方式，赚钱能力，价值观"
planetpositontip[2]="三宫:果宫，个人心智，与兄弟姐妹相处状态，适应环境能力，语言沟通能力"
planetpositontip[3]="四宫:角宫，家居生活，安全感，房地产"
planetpositontip[4]="五宫:续宫，创造力，娱乐，恋爱，子女"
planetpositontip[5]="六宫:果宫，个人责任，健康，社会服务"
planetpositontip[6]="七宫:角宫，婚姻，合伙关系"
planetpositontip[7]="八宫:续宫，夫妻共同财产或者资源，性，死亡重生"
planetpositontip[8]="九宫:果宫，高等教育，哲学，宗教，法律，旅行，世界观，心灵"
planetpositontip[9]="十宫:角宫，名誉地位，事业成就，社会责任"
planetpositontip[10]="十一:续宫，团体，友谊，个人精神与文化层次活动"
planetpositontip[11]="十二:果宫，潜意识，个人隐私，内省，心灵净化"

var lucky = new Array()
lucky["太阳"] = "太阳,庙：狮子 旺：白羊 落：水瓶 陷：天平" 
lucky["月亮"] = "月亮,庙：巨蟹 旺：金牛 落：摩羯 陷：天蝎"
lucky["水星"] = "水星,庙：双子处女 旺：处女 落：射手双鱼 陷：双鱼"
lucky["金星"] = "金星,庙：金牛天平 旺：双鱼 落：天蝎白羊 陷：处女"
lucky["火星"] = "火星,庙：白羊天蝎 旺：摩羯 落：天平金牛 陷：巨蟹"
lucky["木星"] = "木星,庙：射手双鱼 旺：巨蟹 落：双子处女 陷：摩羯"
lucky["土星"] = "土星,庙：摩羯水瓶 旺：天平 落：巨蟹狮子 陷：白羊"

let GamblePage_controllor;
class GamblePage extends React.Component {
   constructor(props) {
    super(props);
    var res = new Array()
    res[0]=res[1]=res[2]="未知"
    var tip = new Array()
    tip[0]=tip[1]=tip[2]=""
    this.state = {
      pick:0,
      res:res,
      tip:tip,
      seq:"",
      newseq:""
    }
    GamblePage_controllor = this
  }

  UNSAFE_componentWillMount() {
    this.init();
    RNShake.addEventListener('ShakeEvent', () => {
      
      this.result()
    });
  }


  componentWillUnmount() {
    RNShake.removeEventListener('ShakeEvent');
  }
  init()
  {
    var res = new Array()
    res[0]=res[1]=res[2]="未知"
    var tip = new Array()
    tip[0]=tip[1]=tip[2]=""
    
    this.setState({
      pick:0,
      res:res,
      tip:tip,
      seq:"",
      newseq:""
    })
  }

  clear()
  {
    this.init();
    this.props.navigation.setParams({ GambleState: 'off' })
  }

  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
      
    title: RouteConfig["GamblePage"].name,
    }
  };
  result()
  {
    Vibration.vibrate();
    var pick = this.state.pick;
    
    var res = this.state.res
    var retip = this.state.tip;
    var x = Math.random(100)*100
    x = parseInt(x)%12
    if(pick==0)
    {
      res[0] = planet[x];
      retip[0] = planettip[x];
    }
    if(pick==1)
    {
      res[1] = planetstar[x];
      retip[1] = planetstartip[x];
      this.setState({seq:x})//星座排位
    }
    if(pick==2)
    {
      res[2] = planetpositon[x];
      retip[2] = planetpositontip[x];
      var luckyinfo = lucky[res[0]]
      if(undefined!=luckyinfo)
      {
        retip.push(luckyinfo)
        var seqstar = this.state.seq 
        var position = x
        var seq = new Array();
        for(var i = 0;i<12;i++)
        {
          seq.push("飞星"+ planetpositontip[i].slice(0,2) + ":" + planetstar[(seqstar+i)%12])
          seq.push("（原"+planetpositontip[(position+i)%12]+")")
        }
        this.setState({newseq:seq})
      }
      
    }

    pick++;
    var rt  = JSON.parse(JSON.stringify(res));
    var tip  = JSON.parse(JSON.stringify(retip));
    this.props.navigation.setParams({ GambleState: 'on' })
    this.setState({pick:pick,res:rt,tip:tip})
  }
  GambleButtonShow()
  {
    if(this.state.pick>0)
    {
      return(
        <View>
        <Text style={styles.list}>星座骰子解释</Text>
        </View>
      )
    }
  }
  keyExtractor = (item,index) => index.toString()

  renderItem(item) {
    var text = FontTypeModule[item.item]
    var col = ""
    var bg = ""
    var bd = 0
    if(undefined!=FontTypeModule[item.item])
    {
      text = (FontTypeModule[item.item])[0]
      col = (FontTypeModule[item.item])[1]
      bg = (FontTypeModule[item.item])[2]
      bd = 1
    }
    else
    {
      text = ""
      col = '#00C0FF'
      bg = '#F0F9FF'
      bd = 1
    }
    return (
        <View style={[styles.container,{alignItems:'center'}]}>
        <TouchableHighlight style = {[{backgroundColor:bg,borderColor:col,borderStyle:'solid',borderWidth:bd,borderRadius:30}]}>
        <Text style = {[StyleConfig.astrofont,{color:col}]}>{text}</Text>
        </TouchableHighlight>
        <Text></Text>
        <Text key={item.item} style ={[{color:col}]}>{item.item}</Text>
        
        
        </View>
    );
  }

  renderItemTip(item) {
    return (
        <View style={styles.container}>
        <Text key={item.item} style = {styles.list}>{item.item}</Text>
        
        </View>

    );
  }

  switchbar()
  {
    const { navigate } = this.props.navigation;
    if (this.state.pick > 2) {
      return (
        <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight() , backgroundColor: '#ffffff',}}>
          <TabNavigator.Item
            title={RouteConfig["RefreshImage"].name}
            renderIcon={() => RouteConfig["RefreshImage"].icon}
            onPress={() => this.clear()}
            titleStyle={StyleConfig.menufont}>
          </TabNavigator.Item>
          <TabNavigator.Item
            title={RouteConfig["ScreenImage"].name}
            renderIcon={() => RouteConfig["ScreenImage"].icon}
            onPress={() => { this.setState({ shareimg: true }), WechatShare.snapshot(this.refs['location'], "星座骰子", this) }}
            titleStyle={StyleConfig.menufont}>
          </TabNavigator.Item>
        </TabNavigator>
      )
    }
    else {
      return (
        <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight() , backgroundColor: '#ffffff',}}>
          <TabNavigator.Item
            title={RouteConfig["GamblePageButton"].name}
            renderIcon={() => RouteConfig["GamblePageButton"].icon}
            //renderSelectedIcon={() => IconConfig.IconDvinationSel}
            onPress={() => this.result()}
            titleStyle={StyleConfig.menufont}>
          </TabNavigator.Item>
        </TabNavigator>
      )
    }
  }
  render()
  {
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
      <ScrollView ref="location" style={{backgroundColor:'#ffffff'}}>
      <View style={styles.container} >
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
            <FlatList  
              data={this.state.res}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              numColumns ={3}
              columnWrapperStyle={{justifyContent: 'space-around',alignItems:'stretch'}}

              />
              <Text></Text>
              <Text></Text>
              {this.GambleButtonShow()}
              <Text></Text>
              <FlatList  
              data={this.state.tip}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItemTip}

              />
              <Text></Text>
              <Text></Text>
              <Text style={styles.list}>{""!=this.state.newseq?"飞星宫位":""}</Text>
              <Text></Text>
              <Text></Text>
              <FlatList  
              data={this.state.newseq}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItemTip}

              />

              <WhiteSpace size="xl" />
            {
             (WechatShare.shareimg(this.state.shareimg))
            }
            
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            </View>
            </ScrollView>
            {this.switchbar()}
      
    </View>
					)
  }
  
}

var styles = StyleSheet.create ({
  container: {
    flex:1,
    backgroundColor:'#ffffff'
  },
  subtitleView:{
    flexDirection:'row',
    paddingLeft:10,
    //paddingTop:5
  },
  ratingText:{
    paddingLeft:10,
    color:'blue'
  },


  list:{
    //height:45,
    marginLeft: 10,
    paddingLeft:10,
    marginRight: 10,
    paddingRight:10,
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
  },


});
module.exports=GamblePage;  