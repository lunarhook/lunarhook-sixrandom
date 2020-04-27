
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import ScreenConfig from '../../../config/ScreenConfig';
import StyleConfig from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
var EPQDate=Array()
EPQDate[1]="你是否有广泛的爱好？  "
EPQDate[2]="在做任何事情之前，你是否都要考虑-番？"
EPQDate[3]="你的情绪时常波动吗？"
EPQDate[4]="当别人做了好事，而周围的入却认为是你做的时候，你是否感到洋洋得意？   "
EPQDate[5]="你是一个健谈的人吗？"
EPQDate[6]="你曾经无缘无故觉得自己'可怜'吗？"
EPQDate[7]="你曾经有过贪心使自己多得份外物质利益吗？  "
EPQDate[8]="晚上你是否小心地把门锁好？  "
EPQDate[9]="你认为自己活泼吗？   "
EPQDate[10]="当看到小孩（或动物）受折磨时你是否难受？   "
EPQDate[11]="你是否时常担心你会说出（或做出）不应该说（或做）的事情？ "
EPQDate[12]="若你说过要做某件事，是否不管遇到什么困难都要把它做成？   "
EPQDate[13]="在愉快的聚会中，你通常是否尽情享受？"
EPQDate[14]="你是一位易激怒的人吗？ "
EPQDate[15]="你是否有过自己做错了事反责备别人的时候？   "
EPQDate[16]="你喜欢会见陌生人吗？"
EPQDate[17]="你是否相信参加储蓄是一种好办法？"
EPQDate[18]="你的感情是否容易受到伤害？   "
EPQDate[19]="你想服用有奇特效果或有危险性的药物吗？   "
EPQDate[20]="你是否时常感到'极其厌烦'？"
EPQDate[21]="你曾多占多得别人东西（甚至一针一线）吗？   "
EPQDate[22]="如果条件允许，你喜欢经常外出（旅行）吗？   "
EPQDate[23]="对你所喜欢的人，你是否为取乐开过过头玩笑？  "
EPQDate[24]="你是否常因'自罪感'而烦恼？"
EPQDate[25]="你是否有时候谈论一些你毫无所知的事情？"
EPQDate[26]="你是否宁愿看些书，而不想去会见别人？"
EPQDate[27]="有坏人想要害你吗？   "
EPQDate[28]="你认为自己'神经过敏'吗？"
EPQDate[29]="你的朋友多吗？"
EPQDate[30]="你是个忧虑重重的人吗？"
EPQDate[31]="你在儿童时代是否立即听从大人的吩咐而毫无怨言？   "
EPQDate[32]="你是一个无忧无虑、逍遥自在的人吗？"
EPQDate[33]="有礼貌、爱整洁对你很重要吗？"
EPQDate[34]="你是否担心将会发生可怕的事情？"
EPQDate[35]="在结识新朋友时，你通常是主动的吗？"
EPQDate[36]="你觉得自已是个非常敏感的人吗？   "
EPQDate[37]="和别人在一起的时候，你是否不常说话？   "
EPQDate[38]="你是否认为结婚是个框框，应该废除？"
EPQDate[39]="你有时有点自吹自擂吗？   "
EPQDate[40]="在一个沉闷的场合，你能给大家添点生气吗？   "
EPQDate[41]="慢腾腾开车的司机是否使你讨厌？"
EPQDate[42]="你担心自己的健康吗？   "
EPQDate[43]="你是否喜欢说笑话和谈论有趣的事？   "
EPQDate[44]="你是否觉得大多数事情对你都是无所谓的?   "
EPQDate[45]="你小时候曾经有过对父母鲁莽无礼的行为吗?   "
EPQDate[46]="你喜欢和别人打成一片，整天相处在一起吗?"
EPQDate[47]="你失眠吗？"
EPQDate[48]="你饭前必定洗手吗？"
EPQDate[49]="当别人问你话时，你是否对答如流？   "
EPQDate[50]="你是否宁愿有富裕时间喜欢早点动身去赴约会？   "
EPQDate[51]="你经常无缘无故感到疲倦和无精打采吗？   "
EPQDate[52]="在游戏或打牌时你曾经作弊吗？"
EPQDate[53]="你喜欢紧张的工作吗？"
EPQDate[54]="你时常觉得自已的生活很单调吗？"
EPQDate[55]="你曾经为了自己而利用过别人吗？"
EPQDate[56]="你是否参加的活动太多，已超过自己可能分配的时间？   "
EPQDate[57]="是否有那么几个人时常躲着你？   "
EPQDate[58]="你是否认为人们为保障自己的将来而精打细算勤俭节约所费的时间太多了？"
EPQDate[59]="你是否曾经想过去死？"
EPQDate[60]="若你确知不会被发现，你会少付人家钱吗？   "
EPQDate[61]="你能使一个联欢会开得成功吗？   "
EPQDate[62]="你是否尽力使自己不粗鲁？"
EPQDate[63]="一件使你为难的事情过去之后，是否使你烦恼好久？   "
EPQDate[64]="你曾否坚持要照你的想法办事？   "
EPQDate[65]="当你去乘火车时，你是否最后一分种到达？"
EPQDate[66]="你是否'神经质'？"
EPQDate[67]="你常感到寂寞吗？"
EPQDate[68]="你的言行总是一致的吗？"
EPQDate[69]="你有时喜欢玩弄动物吗？"
EPQDate[70]="有人对你或你的工作吹毛求疵时，是否容易伤害你的积极性？   "
EPQDate[71]="你去赴约会或上班时，曾否迟到？   "
EPQDate[72]="你是否喜欢周围有许多热闹和高兴的事？"
EPQDate[73]="你愿意让别人怕你吗？"
EPQDate[74]="你是否有时兴致勃勃，有时却很懒散不想动？   "
EPQDate[75]="你有时会把今天应做的事拖到明天吗？"
EPQDate[76]="别人是否认为你是生气勃勃的？"
EPQDate[77]="别人是否对你说过许多谎话？"
EPQDate[78]="你是否对有些事情易性急生气？   "
EPQDate[79]="若你犯有错误，是否都愿意承认？  "
EPQDate[80]="你是一个整洁严谨，有条不紊的人吗？   "
EPQDate[81]="在公园里或马路上，你是否总是把果皮或废纸扔到垃圾箱里？:"
EPQDate[82]="遇到为难的事情，你是否拿不定主意？"
EPQDate[83]="你是否有过随口骂人的时候？"
EPQDate[84]="若你乘车或坐飞机外出时，你是否担心会碰撞或出意外？   "
EPQDate[85]="你是一个爱交往的人吗？"
var EPQ=Array();
for(i=1;i<86;i++)
{
  EPQ[i] = {}
}

var invertdate = [ 26,37,2,8,10,17,33,50,62,80,4,7,15,21,25,39,45,52,55,60,64,71,75,83]

for(i=1;i<86;i++)
{
  EPQ[i].q = EPQDate[i]
  EPQ[i].key = i
  EPQ[i].sel = ""
  EPQ[i].a = "是"
  EPQ[i].b = "否"
  EPQ[i].ret_a = 1
  EPQ[i].ret_b = 0
  if(true==invertdate.includes(i))
  {
    EPQ[i].ret_a = 0
    EPQ[i].ret_b = 1
  }
}
var retnumber = new Array()
retnumber["外向内向"] = [1,5,9,13,16,22,29,32 ,35,40,43,46,49,53,56,61,72,76,85,26,37]
retnumber["神经质"] = [3,6,11,14,18,20,24,28,30,34,36,42,47,51,54,59,63,66,67,70,74,78,82,84]
retnumber["精神质"] =[19,23,27,38,41,44,57,58,65,69,73,77,2,8,10,17,33,50,62,80]
retnumber["幼稚水平"] =[12,31,48,68,79,81,4,7,15,21,25,39,45,52,55,60,64,71,75,83]
for(var i in retnumber){
  var retindex = retnumber[i]
  
  for(var x in retindex)
  {
    var indexnumber = Number(retindex[x])
    EPQ[indexnumber].type = i
  }
}



class EPQModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      EPQ:[],
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var EPQrandom = new Array();
    var runtimeEPQ = EPQ.concat()
    while(runtimeEPQ.length>0)
    {
      var p = parseInt(Math.random()*runtimeEPQ.length)
      if(undefined!=runtimeEPQ[p])
      {EPQrandom.push(runtimeEPQ[p]);}
      runtimeEPQ.splice(p,1)
    }
    //console.log(EPQrandom)
    var checked = new Array();
    for(i=0;i<EPQrandom.length;i++)
    {
      checked[0]=undefined
checked[i]=""
      EPQrandom[i].index=i
      EPQrandom[i].key=i
      EPQrandom[i].sel=""
    }
    //console.log(EPQrandom)
    this.setState ({
      checked:checked,
      EPQ:EPQrandom,
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
      closetest:false,
    })
    console.log("clear",EPQrandom)

  }
  check(){
    //if(__DEV__)
//    {return true}
    for(i=0;i<EPQ.length;i++)
    {
      if(undefined != EPQ[i] && this.state.checked[i]==="")
      {
        alert("请检查题目："+(i))
        return false;
      }
    }
  }
    
  componentDidMount()
  {
    const action = this.props.navigation.getParam('action', 'action');
    if(action=='new')
    {
      //this.props.navigation.setParams({action:''});
      //this.randominit()
      // console.log('refresh',action)
    }
    this.clear()
    //this.props.navigation.setParams({fresh:this.clear})
  }
  

  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
      
    title: RouteConfig["EPQModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.EPQ[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<EPQ.length;i++)
      {
        //console.log(EPQ[i].sel)
      }
    }

  }

  result()
  {
    if(false==this.check())
    {
      return
    }
    var testEPQ = this.state.EPQ
    var ret = new Array();
    ret["外向内向"]=ret["神经质"]=ret["精神质"]=ret["幼稚水平"]=0

    var total = 0
    var bigtotal = 0 
    //console.log(testEPQ)
    for(i=0;i<testEPQ.length;i++)
    {
      var _p = testEPQ[i].sel;
      var _t = testEPQ[i].type
      
      if(''!=_p)
      {
        //console.log(testEPQ[i].sel, testEPQ[i].type)
        total = total + Number(_p); 
        ret[_t] =Number(ret[_t])+ Number(_p)
        if (Number(_p)>1)
        {
          bigtotal = bigtotal +1
        }
      }
      
    }
    var retpercent = ""
    for(var n in ret)
    {
      retpercent = retpercent + n + ":" +  ret[n] + " \n"
    }
    var extrainfo = new Array

    extrainfo.push( "E外向内向:" + Math.floor(ret["外向内向"] ) ) 
    extrainfo.push( "N神经质:" + Math.floor(ret["神经质"]) ) 
    extrainfo.push(  "P精神质:" + Math.floor(ret["精神质"]) ) 
    extrainfo.push(  "L幼稚水平:" + Math.floor(ret["幼稚水平"]) ) 

    //console.log(ret,total)
    var detailinfo = new Array
    detailinfo.push("各项评分中等标准如下，过高过低分别未9分或者0分\n ")
    detailinfo.push("E量表分：分数高于15，表示人格外向，可能是好交际，渴望刺激和冒险，情感易于冲动。分数低于8，表示人格内向，如好静，富于内省，不喜欢刺激，喜欢有秩序的生活方式，情绪比较稳定。\n ")
    detailinfo.push("N量表分：分数高于14表示焦虑、忧心仲仲、常郁郁不乐，有强烈情绪反应，甚至出现不够理智的行为。低于9表示情绪稳定\n ")
    detailinfo.push("P量表分：分数高于8表示可能是孤独、不关心他人，难以适应外部环境，不近人情，与别人不友好，喜欢寻衅搅扰，喜欢干奇特的事情，并且不顾危险。\n ")
    detailinfo.push("L量表分：Ｌ量表分如高于18，显示被试有掩饰倾向，测验结果可能失真。\n ")

    this.setState({
      ret:"总分:"+total ,
      percent:retpercent,
      extrainfo:extrainfo,
      closetest:true,
      detailinfo:detailinfo,
    })
  }



  renderItem(item) {
    return (
      <View>
        <Text key={item.item} style={styles.list}>{item.item}</Text>
        </View>
    );
  }

  switchbar()
  {
    const { navigate } = this.props.navigation;
    //console.log("swithchbar",this.state.ret)
    if(this.state.ret!="")
    
    {
      return(
        <TabNavigator  tabBarStyle={{ height: ScreenConfig.getTabBarHeight() , backgroundColor: '#ffffff',}}>
             <TabNavigator.Item
                                  title={RouteConfig["RefreshImage"].name}
                                  renderIcon={() => RouteConfig["RefreshImage"].icon}
                                  onPress={()=>this.clear()}  
                                  titleStyle={StyleConfig.menufont}>  
                              </TabNavigator.Item>  
        <TabNavigator.Item
              title={RouteConfig["ScreenImage"].name}
              renderIcon={() => RouteConfig["ScreenImage"].icon} 
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['EPQlocation'], "霍兰德职业性格测试结果",this)}}                
              titleStyle={StyleConfig.menufont}>  
          </TabNavigator.Item>  
      </TabNavigator>   
      )
    }
    else
    {
      return(
        <TabNavigator  tabBarStyle={{ height: ScreenConfig.getTabBarHeight() , backgroundColor: '#ffffff',}}>
        <TabNavigator.Item
              title={RouteConfig["EPQModule"].titlename}
              renderIcon={() => RouteConfig["PsychTestPage"].icon} 
              onPress={()=>this.result()}  
              titleStyle={StyleConfig.menufont}>  
          </TabNavigator.Item>  
      </TabNavigator>   
      )
    }
  }




  keyExtractor = (item, index) => index.toString();
  render()
  {

    return (
      <View style={styles.container}>
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='EPQlocation'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["EPQModule"].titlename}</Text>
      <FlatList

            data={this.state.EPQ}
            extraData={this.state}
            keyExtractor={this.keyExtractor}
						renderItem={({ item }) => (
              <View id={item.id}>
              <Text style={styles.list}></Text>
              <Text style={styles.list}>第{item.index+1}题:{item.q}</Text>
              <View style = {styles.dateContainer}>
              <CheckBox containerStyle={styles.CheckBox} title = {item.a} checked={this.state.checked[Number(item.key+1)]===item.ret_a}  onPress={()=>this.updateIndex(Number(item.key+1),item.ret_a)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.b} checked={this.state.checked[Number(item.key+1)]===item.ret_b}  onPress={()=>this.updateIndex(Number(item.key+1),item.ret_b)}/>
              
              </View>
              <Text></Text>
              </View>
            )}
        />
        
        
        <View>
        <Text style={styles.list}></Text>
        <Text style={styles.list}>{this.state.ret}</Text>
        <Text style={styles.list}></Text>

        <Text style={styles.list}></Text>
        <Text style={styles.list}></Text>
       
        <Text style={styles.list}></Text>
        
        <FlatList  
              data={this.state.extrainfo}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              />
              <Text style={styles.list}></Text>
        <Text style={styles.list}></Text>
        <FlatList  
              data={this.state.detailinfo}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              />
              </View>
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
            </WingBlank>
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
  CheckBox:{
    borderColor:'#ffffff',
    backgroundColor:'#ffffff'
  },
  dateContainer: {
    flexWrap: 'wrap',
    justifyContent:'flex-start',
    flexDirection: 'row',
    alignItems:'flex-start'
    
  },
  ScrollView:{
    backgroundColor:'#fafafa'
  },
  list:{
    marginLeft: 15,
    paddingLeft:15,
    borderRadius: 4,
    marginRight: 15,
    paddingRight:15,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    flexWrap:'wrap',
    alignItems: 'flex-start',
  },

})

module.exports=EPQModule;  