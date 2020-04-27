
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import ScreenConfig from '../../../config/ScreenConfig';
import StyleConfig from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'

var LAS=Array();
LAS[1]={
  "key":"1",
  "q":"我的爱人和我在第一次见面时，就立刻被彼此吸引,我和他/她属于一见钟情型",
  "a":"A 没有",
  "b":"B 较轻",
  "c":"C 中度",
  "d":"D 重度",
  "e":"D 严重",
  "ret_a":"1",
  "ret_b":"2",
  "ret_c":"3",
  "ret_d":"4",
  "ret_e":"5",
  "sel":"",
}
LAS[2]={
  "key":"2",
  "q":"我很难明确地说我和他/她是何时从友情变成爱情的",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"r",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[3]={
  "key":"3",
  "q":"对他/她做承诺之前，我会考虑他/她将来可能变成的样子 ",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":" ",
  "ret_b":"e",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[4]={
  "key":"4",
  "q":"我试着不给他/她明确的承诺。",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"a",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[5]={
  "key":"5",
  "q":"和他/她的关系不太对劲时，我的身体就会不舒服",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":" ",
  "ret_b":"c",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[6]={
  "key":"6",
  "q":"我总是试着帮他/她度过难关",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"i",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[7]={
  "key":"7",
  "q":"我和他/她很来电",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"c",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[8]={
  "key":"8",
  "q":"我相信他/她不知道我的一些事，也不会受到伤害",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"i",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[9]={
  "key":"9",
  "q":"我需要先经过一阵子的关心和照顾，才有可能产生爱情。",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"a",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[10]={
  "key":"10",
  "q":"在选择他/她之前，我会先试着仔细规划我的人生",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"a",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[11]={
  "key":"11",
  "q":"失恋时，我会十分沮丧，甚至会有自杀的念头",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"e",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[12]={
  "key":"12",
  "q":"我宁愿自己痛苦，也不愿意让他/她受苦",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":" ",
  "ret_b":"s",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[13]={
  "key":"13",
  "q":"我和他/她的亲密行为是很热情且很令我满意 ",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"r",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[14]={
  "key":"14",
  "q":"有时候，我得防范他/她发现我还有其他情人",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":" ",
  "ret_b":"r",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[15]={
  "key":"15",
  "q":"我和他/她的友情随着时间逐渐转变为爱情",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":" ",
  "ret_b":"s",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[16]={
  "key":"16",
  "q":"我和他/她最好有相似的背景 ",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":" ",
  "ret_b":"e",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[17]={
  "key":"17",
  "q":"我有时会因为想到自己正在谈恋爱而兴奋地睡不着觉",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"a",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[18]={
  "key":"18",
  "q":"除非我先让他/她快乐，否则我不会感到快乐",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":" ",
  "ret_b":"c",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[19]={
  "key":"19",
  "q":"我觉得我和他/她是天生一对",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"c",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[20]={
  "key":"20",
  "q":"我可以很容易、很快地忘掉过往的恋情",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"i",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[21]={
  "key":"21",
  "q":"我和他/她的爱情关系是最理想因为是由长久的友谊发展而成的",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":" ",
  "ret_b":"i",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[22]={
  "key":"22",
  "q":"他/她如何看待我的家人是我选择他/她的主要考量。",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"r",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[23]={
  "key":"23",
  "q":"当他/她不注意我时，我会全身不舒服 ",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":" ",
  "ret_b":"r",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[24]={
  "key":"24",
  "q":"我通常愿意牺牲自己的愿望，达成他/她的愿望",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"e",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[25]={
  "key":"25",
  "q":"我和他/她的感情、亲密行为进展得很快",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":" ",
  "ret_b":"e",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[26]={
  "key":"26",
  "q":"如果他/她知道我和其他人做了某些事，他/她会不高兴。",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"s",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[27]={
  "key":"27",
  "q":"我希望和曾经相爱的他/她是永远的朋友",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":" ",
  "ret_b":"s",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[28]={
  "key":"28",
  "q":"他/她将来会不会是一个好父亲/母亲是我选择他/她的一个重要因素",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"e",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[29]={
  "key":"29",
  "q":"自从和他/她谈恋爱后，我很难专心在其他任何事情上 ",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"c",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[30]={
  "key":"30",
  "q":"他/她可以任意使用我的东西",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"i",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[31]={
  "key":"31",
  "q":"我和他/她非常了解彼此",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"i",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[32]={
  "key":"32",
  "q":"当他/她太依赖我时，我会想和他/她疏远一些 ",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":" ",
  "ret_b":"a",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[33]={
  "key":"33",
  "q":"我和他/她的爱情是一种深刻的友情，而不是一种很神秘的情感",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"a",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[34]={
  "key":"34",
  "q":"他/她如何看待我的职业会是我选择他/她的一个考量",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"a",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[35]={
  "key":"35",
  "q":"当我怀疑他/她和其他人在一起时，我就无法放松",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"e",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[36]={
  "key":"36",
  "q":"当他/她对我发脾气时，我仍然全心全意、无条件地爱他/她",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"r",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[37]={
  "key":"37",
  "q":"他/她的外貌符合我的理想标准",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"s",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[38]={
  "key":"38",
  "q":"我享受和他/她及一些不同的情人玩爱情游戏",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"e",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[39]={
  "key":"39",
  "q":"我和他/她的爱情关系是最令人满意，因为是由良好友情发展成的",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"c",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[40]={
  "key":"40",
  "q":"在和他/她深入交往之前，我会试着了解他/她是否有良好的遗传基因",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":" ",
  "ret_b":"c",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[41]={
  "key":"41",
  "q":"如果他/她忽略我一阵子，我会做出一些傻事来吸引他/她的注意力",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"c",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
LAS[42]={
  "key":"42",
  "q":"为了他/她，我愿意忍受任何事情",
  "a":"A 是",
  "b":"B 否",
  "c":"",
  "d":"",
  "ret_a":"i",
  "ret_b":" ",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}

for(i=1;i<43;i++)
{
  LAS[i].sel = ""
  LAS[i].a = "完全不符合"
  LAS[i].b = "不符合"
  LAS[i].c = "未关注"
  LAS[i].d = "符合"
  LAS[i].e = "完全符合"
  LAS[i].ret_a = "1"
  LAS[i].ret_b = "2"
  LAS[i].ret_c = "3"
  LAS[i].ret_d = "4"
  LAS[i].ret_e = "5"
}
var retnumber = new Array()
retnumber["浪漫型"] = [1,7,13,19,25,31,37]
retnumber["游戏型"] = [2,8,14,20,26,32,38]
retnumber["同伴型"] = [3,9,15,21,27,33,39]
retnumber["现实型"] = [4,10,16,22,28,34,40]
retnumber["占有型"] = [5,11,17,23,29,35,41]
retnumber["奉献性"] = [6,12,18,24,30,36,42]
for(var i in retnumber){
  var retindex = retnumber[i]
  
  for(var x in retindex)
  {
    var indexnumber = Number(retindex[x])
    LAS[indexnumber].type = i
  }
}



class LASModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      LAS:[],
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var LASrandom = new Array();
    var runtimeLAS = LAS.concat()
    while(runtimeLAS.length>0)
    {
      var p = parseInt(Math.random()*runtimeLAS.length)
      if(undefined!=runtimeLAS[p])
      {LASrandom.push(runtimeLAS[p]);}
      runtimeLAS.splice(p,1)
    }
    //console.log(LASrandom)
    var checked = new Array();
    for(i=0;i<LASrandom.length;i++)
    {
      checked[0]=undefined
checked[i]=""
      LASrandom[i].index=i
      LASrandom[i].key=i
      LASrandom[i].sel=""
    }
    //console.log(LASrandom)
    this.setState ({
      checked:checked,
      LAS:LASrandom,
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
      closetest:false,
    })

  }
  check(){
    //if(__DEV__)
//    {return true}
    for(i=0;i<LAS.length;i++)
    {
      if(undefined != LAS[i] && this.state.checked[i]==="")
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
      
    title: RouteConfig["LASModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.LAS[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<LAS.length;i++)
      {
        //console.log(LAS[i].sel)
      }
    }

  }
  checkrender_C(item)
  {
    if(""!=item.ret_c)
    {return(
      <CheckBox containerStyle={styles.CheckBox} title = {"C"} checked={this.state.checked[Number(item.key+1)]==item.ret_c}  onPress={()=>this.updateIndex(item.key,item.ret_c)}/>
    )}
    return null
  }
  checkrender_D(item)
  {
    if(""!=item.ret_d)
    {return(
      <CheckBox containerStyle={styles.CheckBox} title = {"D"} checked={this.state.checked[Number(item.key+1)]==item.ret_d}  onPress={()=>this.updateIndex(item.key,item.ret_d)}/>
    )}
    return null
  }
  result()
  {
    if(false==this.check())
    {
      return
    }
    var testLAS = this.state.LAS
    var ret = new Array();

    ret["浪漫型"]=ret["游戏型"]=ret["同伴型"]=ret["现实型"]=ret["占有型"]=ret["奉献性"]=0

    var total = 0
    var bigtotal = 0 
    //console.log(testLAS)
    for(i=0;i<testLAS.length;i++)
    {
      var _p = testLAS[i].sel;
      var _t = testLAS[i].type
      
      if(''!=_p)
      {
        //console.log(testLAS[i].sel, testLAS[i].type)
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

    extrainfo.push( "浪漫型:" + Math.floor(ret["浪漫型"] ) ) 
    extrainfo.push( "游戏型:" + Math.floor(ret["游戏型"]) ) 
    extrainfo.push(  "同伴型:" + Math.floor(ret["同伴型"]) ) 
    extrainfo.push(  "现实型:" + Math.floor(ret["现实型"]) ) 
    extrainfo.push(  "占有型:" + Math.floor(ret["占有型"]) ) 
    extrainfo.push(  "奉献性:" + Math.floor(ret["奉献性"] ) ) 
    
    //console.log(ret,total)
    var detailinfo = new Array
    detailinfo.push("爱情拥有各种向度，这份爱情态度量表只是突显出受测者得分最高的类型，但不代表受测者没有其它类型的特质。爱情本来就会希望独占，渴求激情，无私奉献，情感亲密了解，也不能缺乏理智分析，但如果极端地偏向一边，虽然暂时满足自己的心理需求，但却容易出现严重的后遗症，而使爱情变质。当大家在世上寻觅合适爱情对象时。也应尝试深入了解对方的爱情类型是否也让自己认可，否则一旦盲目投入爱情关系，只会为彼此带来更多伤害。\n ")
    detailinfo.push("浪漫型:浪漫激烈式的爱情较易出现一见钟情的情况，由于未曾深入了解对方，因此最常见的情况是受到对方外表容貌与身材所吸引。这种形式的爱情重视恋爱过程中的强烈感受，情绪也容易随着感情变化而强烈起伏，由于情感强烈，也就容易发展出激情的肉体关系。然而，在一段强烈的肉欲激情之后，当激情消退，也容易因此出现爱恋的感觉减退，较无法长期维持爱情关系 \n")
    detailinfo.push("游戏型:游戏式的爱情不存在彼此对未来的承诺，常常属于短暂的爱情关系，游戏式爱情的人视爱情为满足自我成就的一种刺激游戏，常同时游走于不同的恋人之间，且不认为这有什么不好。或许这种爱情的人在转换不同伴侣的过程中，也会失去体会圆满爱情的机会\n")
    detailinfo.push("同伴型:友谊式爱情较缺乏激情的成分，而以情感亲密为发展恋情的重点。这类的爱情常由平淡的友情开始，在经过长期相处交往中彼此逐渐了解，并彼此相互帮忙呵护，才逐渐由友情不知不觉地转化为爱情，他们很难明确说出自己是从何时才开始喜欢对方，也相信只有深入了解对方才能长长久久相互扶持走一辈子的路。\n")
    detailinfo.push("现实型:现实形爱情.此类型的爱情较缺乏感情因素，常以现实条件考量彼此在一起的合适性。例如在认识对方时会先探听对方的家世是否清白，经济能力是否可以持家，对方的身高与年纪是否合适，有没有自己的房子或贷款，有没有稳定的工作，学历是否与自己相当等等。他们决不会盲目的被爱情冲昏头，相信爱情与面包还是面包比较重要。\n")
    detailinfo.push("占有型:占有式的爱情相当在乎自己在对方心目中的地位，希望对方能够一心一意关心自己而不能疏忽自己的感受。这类爱情的人在恋爱时眼中也只有对方，而忽略身旁其它重要的事务，也因此容易造成对方的压力。由于强烈的独占感，使这类爱情的人遭遇背叛或分手时，容易出现无法忍受的痛苦，因而可能以自我伤害或伤害对方来发泄或威胁对方不能离开自己。\n")
    detailinfo.push("奉献性:奉献式爱情的人会无私无悔地将所有心力放在供给对方快乐，他们从不在意自己是否幸福快乐，对方能够幸福快乐对自己来说就是最大的满足。在这种爱情关系下，这种爱情类型者容易失去自我，且处在一种双方不平等的交往关系中，即使遭遇分手，也只会自责自己为对方做的还不够。\n")

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
    console.log("swithchbar",this.state.ret)
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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['LASlocation'], "霍兰德职业性格测试结果",this)}}                
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
              title={RouteConfig["LASModule"].titlename}
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
    var sqr = 0

    return (
      <View style={styles.container}>
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='LASlocation'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["LASModule"].titlename}</Text>
      <FlatList

            data={this.state.LAS}
            extraData={this.state}
            keyExtractor={this.keyExtractor}
						renderItem={({ item }) => (
              <View id={item.id}>
              <Text style={styles.list}></Text>
              <Text style={styles.list}>第{item.index+1}题:{item.q}</Text>
              <View style = {styles.dateContainer}>
              <CheckBox containerStyle={styles.CheckBox} title = {item.a} checked={this.state.checked[Number(item.key+1)]==item.ret_a}  onPress={()=>this.updateIndex(Number(item.key+1),item.ret_a)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.b} checked={this.state.checked[Number(item.key+1)]==item.ret_b}  onPress={()=>this.updateIndex(Number(item.key+1),item.ret_b)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.c} checked={this.state.checked[Number(item.key+1)]==item.ret_c}  onPress={()=>this.updateIndex(Number(item.key+1),item.ret_c)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.d} checked={this.state.checked[Number(item.key+1)]==item.ret_d}  onPress={()=>this.updateIndex(Number(item.key+1),item.ret_d)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.e} checked={this.state.checked[Number(item.key+1)]==item.ret_e}  onPress={()=>this.updateIndex(Number(item.key+1),item.ret_e)}/>

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

module.exports=LASModule;  