
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import ScreenConfig from '../../../config/ScreenConfig';
import StyleConfig from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'

var SCL90=Array();
SCL90[1]={
  "key":"1",
  "q":"头痛",
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
SCL90[2]={
  "key":"2",
  "q":"神经过敏，心中不踏实",
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
SCL90[3]={
  "key":"3",
  "q":"头脑中有不必要的想法或字句盘旋",
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
SCL90[4]={
  "key":"4",
  "q":"头昏或昏倒",
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
SCL90[5]={
  "key":"5",
  "q":"对异性的兴趣减退",
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
SCL90[6]={
  "key":"6",
  "q":"对旁人责备求全",
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
SCL90[7]={
  "key":"7",
  "q":"感到别人能控制您的思想",
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
SCL90[8]={
  "key":"8",
  "q":"责怪别人制造麻烦",
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
SCL90[9]={
  "key":"9",
  "q":"忘记性大",
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
SCL90[10]={
  "key":"10",
  "q":"担心自己的衣饰整齐及仪态的端",
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
SCL90[11]={
  "key":"11",
  "q":"容易烦恼和激动",
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
SCL90[12]={
  "key":"12",
  "q":"胸痛",
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
SCL90[13]={
  "key":"13",
  "q":"害怕空旷的场所或街道",
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
SCL90[14]={
  "key":"14",
  "q":"感到自己的精力下降，活动减慢",
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
SCL90[15]={
  "key":"15",
  "q":"想结束自己的生命",
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
SCL90[16]={
  "key":"16",
  "q":"听到旁人听不到的声音",
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
SCL90[17]={
  "key":"17",
  "q":"发抖",
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
SCL90[18]={
  "key":"18",
  "q":"感到大多数人都不可信任",
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
SCL90[19]={
  "key":"19",
  "q":"胃口不好",
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
SCL90[20]={
  "key":"20",
  "q":"容易哭泣",
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
SCL90[21]={
  "key":"21",
  "q":"同异性相处时感到害羞不自在",
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
SCL90[22]={
  "key":"22",
  "q":"感到受骗、中了圈套或有人想抓住您",
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
SCL90[23]={
  "key":"23",
  "q":"无缘无故地突然感到害怕",
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
SCL90[24]={
  "key":"24",
  "q":"自己不能控制地大发脾气",
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
SCL90[25]={
  "key":"25",
  "q":"怕单独出门",
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
SCL90[26]={
  "key":"26",
  "q":"经常责怪自己",
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
SCL90[27]={
  "key":"27",
  "q":"腰痛",
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
SCL90[28]={
  "key":"28",
  "q":"感到难以完成任务",
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
SCL90[29]={
  "key":"29",
  "q":"感到孤独",
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
SCL90[30]={
  "key":"30",
  "q":"感到苦闷",
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
SCL90[31]={
  "key":"31",
  "q":"过分担忧",
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
SCL90[32]={
  "key":"32",
  "q":"对事物不感兴趣",
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
SCL90[33]={
  "key":"33",
  "q":"感到害怕",
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
SCL90[34]={
  "key":"34",
  "q":"您的感情容易受到伤害",
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
SCL90[35]={
  "key":"35",
  "q":"旁人能知道您的私下想法",
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
SCL90[36]={
  "key":"36",
  "q":"感到别人不理解您、不同情您",
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
SCL90[37]={
  "key":"37",
  "q":"感到人们对您不友好、不喜欢您",
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
SCL90[38]={
  "key":"38",
  "q":"做事必须做得很慢以保证做得正确",
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
SCL90[39]={
  "key":"39",
  "q":"心跳得很厉害",
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
SCL90[40]={
  "key":"40",
  "q":"恶心或胃部不舒服",
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
SCL90[41]={
  "key":"41",
  "q":"感到比不上他人",
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
SCL90[42]={
  "key":"42",
  "q":"肌肉酸痛",
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
SCL90[43]={
  "key":"43",
  "q":"感到有人在监视您、谈论您",
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
SCL90[44]={
  "key":"44",
  "q":"难以入睡",
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
SCL90[45]={
  "key":"45",
  "q":"做事必须反复检查",
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
SCL90[46]={
  "key":"46",
  "q":"难以作出决定",
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
SCL90[47]={
  "key":"47",
  "q":"怕乘电车、公共汽车、地铁或火车",
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
SCL90[48]={
  "key":"48",
  "q":"呼吸有困难",
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
SCL90[49]={
  "key":"49",
  "q":"一阵阵发冷或发热",
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
SCL90[50]={
  "key":"50",
  "q":"因为感到害怕而避开某些东西、场合或活动",
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
SCL90[51]={
  "key":"51",
  "q":"脑子变空了",
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
SCL90[52]={
  "key":"52",
  "q":"身体发麻或刺痛",
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
SCL90[53]={
  "key":"53",
  "q":"喉咙有梗塞感",
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
SCL90[54]={
  "key":"54",
  "q":"感到没有前途没有希望",
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
SCL90[55]={
  "key":"55",
  "q":"不能集中注意",
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
SCL90[56]={
  "key":"56",
  "q":"感到身体的某一部分软弱无力",
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
SCL90[57]={
  "key":"57",
  "q":"感到紧张或容易紧张",
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
SCL90[58]={
  "key":"58",
  "q":"感到手或脚发重",
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
SCL90[59]={
  "key":"59",
  "q":"想到死亡的事",
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
SCL90[60]={
  "key":"60",
  "q":"吃得太多",
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
SCL90[61]={
  "key":"61",
  "q":"当别人看着您或谈论您时感到不自在",
}
SCL90[62]={
  "key":"62",
  "q":"有一些不属于您自己的想法",
}
SCL90[63]={
  "key":"63",
  "q":"有想打人或伤害他人的冲动",
}
SCL90[64]={
  "key":"64",
  "q":"醒得太早",
}
SCL90[65]={
  "key":"65",
  "q":"必须反复洗手、点数目或触摸某些东西",
}
SCL90[66]={
  "key":"66",
  "q":"睡得不稳不深",
}
SCL90[67]={
  "key":"67",
  "q":"有想摔坏或破坏东西的冲动",
}
SCL90[68]={
  "key":"68",
  "q":"有一些别人没有的想法或念头",
}
SCL90[69]={
  "key":"69",
  "q":"感到对别人神经过敏",
}
SCL90[70]={
  "key":"70",
  "q":"在商店或电影院等人多的地方感到不自在",
}
SCL90[71]={
  "key":"71",
  "q":"感到任何事情都很困难",
}
SCL90[72]={
  "key":"72",
  "q":"一阵阵恐惧或惊恐",
}
SCL90[73]={
  "key":"73",
  "q":"感到在公共场合吃东西很不舒服",
}
SCL90[74]={
  "key":"74",
  "q":"常与人争论",
}
SCL90[75]={
  "key":"75",
  "q":"独自一人时神经很紧张",
}
SCL90[76]={
  "key":"76",
  "q":"别人对您的成绩没有作出恰当的评价",
}
SCL90[77]={
  "key":"77",
  "q":"即使和别人在一起也感到孤单",
}
SCL90[78]={
  "key":"78",
  "q":"感到坐立不安、心神不定",
}
SCL90[79]={
  "key":"79",
  "q":"感到自己没有什么价值",
}
SCL90[80]={
  "key":"80",
  "q":"感到熟悉的东西变成陌生或不像是真的",
}
SCL90[81]={
  "key":"81",
  "q":"大叫或摔东西",
}
SCL90[82]={
  "key":"82",
  "q":"害怕会在公共场合昏倒",
}
SCL90[83]={
  "key":"83",
  "q":"感到别人想占您的便宜",
}
SCL90[84]={
  "key":"84",
  "q":"为一些有关“性”的想法而很苦恼",
}
SCL90[85]={
  "key":"85",
  "q":"您认为应该因为自己的过错而受到惩罚",
}
SCL90[86]={
  "key":"86",
  "q":"感到要赶快把事情做完",
}
SCL90[87]={
  "key":"87",
  "q":"感到自己的身体有严重问题",
}
SCL90[88]={
  "key":"88",
  "q":"从未感到和其他人很亲近",
}
SCL90[89]={
  "key":"89",
  "q":"感到自己有罪",
}
SCL90[90]={
  "key":"90",
  "q":"感到自己的脑子有毛病",
}
for(i=1;i<91;i++)
{
  SCL90[i].sel = ""
  SCL90[i].a = "没有"
  SCL90[i].b = "较轻"
  SCL90[i].c = "中度"
  SCL90[i].d = "重度"
  SCL90[i].e = "严重"
  SCL90[i].ret_a = "1"
  SCL90[i].ret_b = "2"
  SCL90[i].ret_c = "3"
  SCL90[i].ret_d = "4"
  SCL90[i].ret_e = "5"
}
var retnumber = new Array()
retnumber["躯体化"] = [1,4,12,27,40,42,48,49,52,53,56,58]
retnumber["强迫症状"] = [3,9,10,28,38,45,46,51,55,65]
retnumber["人际关系敏感"] = [6,21,34,36,37,41,61,69,73]
retnumber["抑郁"] = [5,14,15,20,22,26,29,30,31,32,54,71,79]
retnumber["焦虑"] = [2,17,23,33,39,57,72,78,80,86]
retnumber["敌对"] = [11,24,63,67,74,81]
retnumber["恐怖"] = [13,25,47,50,70,75,82]
retnumber["偏执"] = [8,18,43,68,76,83]
retnumber["精神病性"] = [7,16,35,62,77,84,85,87,88,90]
retnumber["睡眠及饮食"] = [19,44,59,60,64,66,89]
for(var i in retnumber){
  var retindex = retnumber[i]
  
  for(var x in retindex)
  {
    var indexnumber = Number(retindex[x])
    SCL90[indexnumber].type = i
  }
}



class SCL90Module extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      SCL90:[],
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var SCL90random = new Array();
    var runtimeSCL90 = SCL90.concat()
    while(runtimeSCL90.length>0)
    {
      var p = parseInt(Math.random()*runtimeSCL90.length)
      if(undefined!=runtimeSCL90[p])
      {SCL90random.push(runtimeSCL90[p]);}
      runtimeSCL90.splice(p,1)
    }
    //console.log(SCL90random)
    var checked = new Array();
    for(i=0;i<SCL90random.length;i++)
    {
      checked[0]=undefined
checked[i]=""
      SCL90random[i].index=i
      SCL90random[i].key=i
      SCL90random[i].sel=""
    }
    //console.log(SCL90random)
    this.setState ({
      checked:checked,
      SCL90:SCL90random,
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
    for(i=0;i<SCL90.length;i++)
    {
      if(undefined != SCL90[i] && this.state.checked[i]==="")
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
      
    title: RouteConfig["SCL90Module"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.SCL90[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<SCL90.length;i++)
      {
        //console.log(SCL90[i].sel)
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
    var testSCL90 = this.state.SCL90
    var ret = new Array();
    ret["躯体化"]=ret["强迫症状"]=ret["人际关系敏感"]=ret["抑郁"]=ret["焦虑"]=ret["敌对"]=ret["恐怖"]=ret["偏执"]=ret["精神病性"]=ret["睡眠及饮食"]=0

    var total = 0
    var bigtotal = 0 
    //console.log(testSCL90)
    for(i=0;i<testSCL90.length;i++)
    {
      var _p = testSCL90[i].sel;
      var _t = testSCL90[i].type
      
      if(''!=_p)
      {
        //console.log(testSCL90[i].sel, testSCL90[i].type)
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
    extrainfo.push( "各项T值分布情况及分子常模，阳性筛查只能说明可能存在问题，但不能证明存在问题，主要作为了解依据")
    extrainfo.push( "躯体化:" + Math.floor(ret["躯体化"] / 12 * 100) / 100 + " M±SD : 1.37±0.48") 
    extrainfo.push( "强迫症状:" + Math.floor(ret["强迫症状"] / 10 * 100) / 100  + " M±SD : 1.62±0.58") 
    extrainfo.push(  "人际关系敏感:" + Math.floor(ret["躯体化"] / 9 * 100) / 100  + " M±SD : 1.65±0.61") 
    extrainfo.push(  "抑郁:" + Math.floor(ret["抑郁"] / 13 * 100) / 100  + " M±SD : 1.50±0.59") 
    extrainfo.push(  "焦虑:" + Math.floor(ret["焦虑"] / 10 * 100) / 100  + " M±SD : 1.39±0.43") 
    extrainfo.push(  "敌对:" + Math.floor(ret["敌对"] / 6 * 100) / 100  + " M±SD : 1.46±0.55") 
    extrainfo.push(  "恐怖:" + Math.floor(ret["恐怖"] / 7 * 100) / 100  + " M±SD : 1.23±0.41") 
    extrainfo.push(  "偏执:" + Math.floor(ret["偏执"] / 6 * 100) / 100  + " M±SD : 1.43±0.57") 
    extrainfo.push(  "精神病性:" + Math.floor(ret["精神病性"] / 10 * 100) / 100  + " M±SD : 1.29±0.42") 
    extrainfo.push(  "睡眠及饮食:" + Math.floor(ret["睡眠及饮食"] / 7 * 100) / 100  + " M±SD : N/A") 
    
    //console.log(ret,total)
    var detailinfo = new Array
    detailinfo.push("如果阳性项目超过52项目（国际标准为43项）或者总分超过中国常模160分或者任意一项因子超过2分，则需要进一步筛查\n")
    detailinfo.push("躯体化,该分量表的得分在12-60分之间。得分在36分以上，表明个体在身体上有较明显的不适感，并常伴有头痛、肌肉酸痛等症状。得分在24分以下，躯体症状表现不明显。总的说来，得分越高，躯体的不适感越强；得分越低，症状体验越不明显。\n")
    detailinfo.push("强迫症状,该分量表的得分在10-50分之间。得分在30分以上，强迫症状较明显。得分在20分以下，强迫症状不明显。总的说来，得分越高，表明个体越无法摆脱一些无意义的行为、思想和冲动，并可能表现出一些认知障碍的行为征兆。得分越低，表明个体在此种症状上表现越不明显，没有出现强迫行为。\n")
    detailinfo.push("人际关系敏感,该分量表的得分在9-45分之间。得分在27分以上，表明个体人际关系较为敏感，人际交往中自卑感较强，并伴有行为症状（如坐立不安，退缩等）。得分在18分以下，表明个体在人际关系上较为正常。总的说来，得分越高，个体在人际交往中表现的问题就越多，自卑，自我中心越突出，并且已表现出消极的期待。得分越低，个体在人际关系上越能应付自如，人际交流自信、胸有成竹，并抱有积极的期待。\n")
    detailinfo.push("抑郁,该分量表的得分在13-65分之间。得分在39分以上，表明个体的抑郁程度较强，生活缺乏足够的兴趣，缺乏运动活力，极端情况下，可能会有想死亡的思想和自杀的观念。得分在26分以下，表明个体抑郁程度较弱，生活态度乐观积极，充满活力，心境愉快。\n")
    detailinfo.push("焦虑,该分量表的得分在10-50分之间。得分在30分以上，表明个体较易焦虑，易表现出烦躁、不安静和神经过敏，极端时可能导致惊恐发作。得分在20分以下，表明个体不易焦虑，易表现出安定的状态。总的说来，得分越高，焦虑表现越明显。\n")
    detailinfo.push("敌对,主要从三方面来反映敌对的表现：思想、感情及行为。其项目包括厌烦的感觉，摔物，争论直到不可控制的脾气暴发等各方面。该分量表的得分在6-30分之间。得分在18分以上，表明个体易表现出敌对的思想、情感和行为。得分在12分以下表明个体容易表现出友好的思想、情感和行为。\n")
    detailinfo.push("恐怖,该分量表的得分在7-35分之间。得分在21分以上，表明个体恐怖症状较为明显，常表现出社交、广场和人群恐惧，得分在14分以下，表明个体的恐怖症状不明显。\n")
    detailinfo.push("偏执,该分量表的得分在6-30分之间。得分在18分以上，表明个体的偏执症状明显，较易猜疑和敌对，得分在12分以下，表明个体的偏执症状不明显。\n")
    detailinfo.push("精神病性,该分量表的得分在10-50分之间。得分在30分以上，表明个体的精神病性症状较为明显，得分在20分以下，表明个体的精神病性症状不明显。\n")
    this.setState({
      ret:"总分:"+total + " 总均分:" + Math.floor(total / 90 * 100) / 100  + " 阳性项目：" + bigtotal,
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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['SCL90location'], "霍兰德职业性格测试结果",this)}}                
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
              title={RouteConfig["SCL90Module"].titlename}
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
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='SCL90location'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["SCL90Module"].titlename}</Text>
      <FlatList

            data={this.state.SCL90}
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
        <Text style={styles.list}>{this.state.percent}</Text>
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

module.exports=SCL90Module;  