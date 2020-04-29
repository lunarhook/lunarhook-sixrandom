
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import ScreenConfig from '../../../config/ScreenConfig';
import {StyleConfig,FontStyleConfig} from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
var FESDate=Array()
FESDate[1]="我们家庭成员都总是互相给予最大的帮助和支持"
FESDate[2]="家庭成员总是把自己的感情藏在心里不向其他家庭成员透露"
FESDate[3]="家中经常吵架"
FESDate[4]="在家中我们很少自己单独活动"
FESDate[5]="家庭成员无论做什么事都是尽力而为的"
FESDate[6]="我们家经常谈论政治和社会问题"
FESDate[7]="大多数周末和晚上家庭成员都是在家中渡过，而不外出参加社交或娱乐活动"
FESDate[8]="我们都认为不管有多大的困难，子女应该首先满足老人的各种需求"
FESDate[9]="家中较大的活动都是经过仔细安排的"
FESDate[10]="家里人很少强求其他家庭成员遵守家规"
FESDate[11]="在家里我们感到很无聊"
FESDate[12]="在家里我们想说什么就可以说什么"
FESDate[13]="家庭成员彼此之间很少公开发怒"
FESDate[14]="我们都非常鼓励家里人具有独立精神"
FESDate[15]="为了有好的前途，家庭成员都花了几乎所有的精力"
FESDate[16]="我们很少外出听讲座、看戏或去博物馆以及看展览"
FESDate[17]="家庭成员常外出到朋友家去玩并在一起吃饭"
FESDate[18]="家庭成员都认为做事应顺应社会风气"
FESDate[19]="一般来说，我们大家都注意把家收拾得井井有条"
FESDate[20]="家中很少有固定的生活规律和家规"
FESDate[21]="家庭成员愿意花很大的精力做家里的事"
FESDate[22]="在家中诉苦很容易使家人厌烦"
FESDate[23]="有时家庭成员发怒时摔东西"
FESDate[24]="家庭成员都独立思考问题"
FESDate[25]="家庭成员都认为使生活水平提高比其他任何事情都重要"
FESDate[26]="我们都认为学会新的知识比其它任何事都重要"
FESDate[27]="家中没人参加各种体育活动"
FESDate[28]="家庭成员在生活上经常帮助周围的老年人和残疾人"
FESDate[29]="在我们家，当需要用某些东西时却常常找不到"
FESDate[30]="在我们家吃饭和睡觉的时间都是一成不变的"
FESDate[31]="在我们家，有一种和谐一致的气氛"
FESDate[32]="家中每个人都可以诉说自己的困难和烦恼"
FESDate[33]="家庭成员之间极少发脾气"
FESDate[34]="我们家的每个人出入是完全自由的"
FESDate[35]="我们都相信在任何情况下竞争是好事"
FESDate[36]="我们对文化活动不那么感兴趣"
FESDate[37]="我们常看电影或体育比赛，外出郊游等"
FESDate[38]="我们认为行贿是一种可以接受的现象"
FESDate[39]="在我们家很重视做事要准时"
FESDate[40]="我们家做任何事都有固定的方式"
FESDate[41]="家里有事时，很少有人自愿去做"
FESDate[42]="家庭成员经常公开地表达相互之间的感情"
FESDate[43]="家庭成员之间常互相责备和批评"
FESDate[44]="家庭成员做事时很少考虑家里其他人的意见"
FESDate[45]="我们总是不断反省自己，强迫自己尽力把事情做得一次比一次好"
FESDate[46]="我们很少讨论有关科技知识方面的问题"
FESDate[47]="我们家每个人都对1～2项娱乐活动特别感兴趣"
FESDate[48]="我们认为无论怎么样，晚辈都应该接受长辈的劝导"
FESDate[49]="我们家的人常常改变他们的计划"
FESDate[50]="我们家非常强调要遵守固定的生活规律和家规"
FESDate[51]="家庭成员都总是衷心的互相支持"
FESDate[52]="如果在家里说出对家事的不满，会有人觉得不舒服"
FESDate[53]="家庭成员有时互相打架"
FESDate[54]="家庭成员都依赖家人的帮助去解决他们遇到的困难"
FESDate[55]="家庭成员不太关心职务升迁、学习成绩等问题"
FESDate[56]="家中有人玩乐器"
FESDate[57]="家庭成员除工作学习外，不常进行娱乐活动"
FESDate[58]="家庭成员都自愿去做公共环境卫生"
FESDate[59]="家庭成员认真地保持自己房间的整洁"
FESDate[60]="家庭成员夜间可以随意外出，不必事先与家人商量"
FESDate[61]="我们家的集体精神很少"
FESDate[62]="我们家可以公开地谈论家里的经济问题"
FESDate[63]="家庭成员的意见产生分歧时，我们一直都回避它以保持和气"
FESDate[64]="家庭成员希望家里人独立解决问题"
FESDate[65]="我们家的人对获得成就并不那么积极"
FESDate[66]="家庭成员常去图书馆"
FESDate[67]="家庭成员有时按个人爱好或兴趣参加娱乐性学习"
FESDate[68]="家庭成员都认为要死守道德教条去办事"
FESDate[69]="在我们家，每个人的分工是明确的"
FESDate[70]="在我们家，没有严格的规则来约束我们"
FESDate[71]="家庭成员彼此之间都一直合得来"
FESDate[72]="家庭成员之间讲话时都很注意避免伤害对方的感情"
FESDate[73]="家庭成员常彼此想胜过对方"
FESDate[74]="如果家庭成员经常独自活动，会伤家里其他人的感情"
FESDate[75]="先工作后享受是我们家的老习惯"
FESDate[76]="在我们家看电视比读书更重要"
FESDate[77]="家庭成员常在业余时间参加家庭以外的社交活动"
FESDate[78]="我们认为无论怎么样，离婚是不道德的"
FESDate[79]="我们家花钱没有计划"
FESDate[80]="我们家的生活规律或家规是不能改变的"
FESDate[81]="家庭的每个成员都一直得到充分的关心"
FESDate[82]="我们家经常自发地讨论家人很敏感的问题"
FESDate[83]="家人有矛盾时，有时会大声争吵"
FESDate[84]="在我们家确实鼓励成员都自由活动"
FESDate[85]="家庭成员常常与别人比较，看谁的工作学习好"
FESDate[86]="家庭成员很喜欢音乐、艺术和文学"
FESDate[87]="我们娱乐活动的主要方式是看电视、听广播而不是外出活动"
FESDate[88]="我们认为提高家里的生活水平比严守道德标准还要重要"
FESDate[89]="我们家饭后必须立即有人去洗碗"
FESDate[90]="在家里违反家规者会受到严厉的批评"
var FES=Array();
var FES=Array();
for(i=1;i<91;i++)
{
  FES[i] = {}
}
/*
FES[1]={
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
FES[2]={
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
FES[3]={
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
FES[4]={
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
FES[5]={
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
FES[6]={
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
FES[7]={
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
FES[8]={
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
FES[9]={
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
FES[10]={
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
FES[11]={
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
FES[12]={
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
FES[13]={
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
FES[14]={
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
FES[15]={
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
FES[16]={
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
FES[17]={
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
FES[18]={
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
FES[19]={
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
FES[20]={
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
FES[21]={
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
FES[22]={
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
FES[23]={
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
FES[24]={
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
FES[25]={
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
FES[26]={
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
FES[27]={
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
FES[28]={
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
FES[29]={
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
FES[30]={
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
FES[31]={
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
FES[32]={
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
FES[33]={
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
FES[34]={
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
FES[35]={
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
FES[36]={
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
FES[37]={
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
FES[38]={
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
FES[39]={
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
FES[40]={
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
FES[41]={
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
FES[42]={
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
 */
var invertdate = [ 
                  1,21,31,51,71,81,
                  12,32,42,62,82,
                  3,23,43,53,73,83,
                  14,24,34,44,64,74,84,
                  5,15,25,35,45,75,85,
                  6,26,56,66,86,
                  17,37,47,67,77,
                  8,28,48,58,68,78,
                  9,19,39,59,69,89,
                  30,40,50,80,90
                  ]

for(i=1;i<91;i++)
{
  FES[i].q = FESDate[i]
  FES[i].key = i
  FES[i].sel = ""
  FES[i].a = "是"
  FES[i].b = "否"
  FES[i].ret_a = 1
  FES[i].ret_b = 2
  if(true==invertdate.includes(i))
  {
    FES[i].ret_a = 2-1
    FES[i].ret_b = 2-2
  }
}
var retnumber = new Array()
retnumber["亲密度"] = [1,11,21,31,41,51,61,71,81]
retnumber["情感表达"] = [2,12,22,32,42,52,62,72,82]
retnumber["矛盾性"] =[3,13,23,33,43,53,63,73,83]
retnumber["独立性"] =[4,14,24,34,44,54,64,74,84]
retnumber["成功性"] =[5,15,25,35,45,55,65,75,85]
retnumber["文化性"] =[6,16,26,36,46,56,66,76,86]
retnumber["娱乐性"] =[7,17,27,37,47,57,67,77,87]
retnumber["道德宗教观"] =[8,18,28,38,48,58,68,78,88]
retnumber["组织性"] =[9,19,29,39,49,59,69,79,89]
retnumber["控制性"] =[10,90,20,30,40,50,60,70,80]
for(var i in retnumber){
  var retindex = retnumber[i]
  
  for(var x in retindex)
  {
    var indexnumber = Number(retindex[x])
    FES[indexnumber].type = i
  }
}



class FESModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      FES:[],
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var FESrandom = new Array();
    var runtimeFES = FES.concat()
    while(runtimeFES.length>0)
    {
      var p = parseInt(Math.random()*runtimeFES.length)
      if(undefined!=runtimeFES[p])
      {FESrandom.push(runtimeFES[p]);}
      runtimeFES.splice(p,1)
    }
    //console.log(FESrandom)
    var checked = new Array();
    for(i=0;i<FESrandom.length;i++)
    {
      //checked[0]=undefined
checked[i]=""
      FESrandom[i].index=i
      FESrandom[i].key=i
      FESrandom[i].sel=""
    }
    //console.log(FESrandom)
    this.setState ({
      checked:checked,
      FES:FESrandom,
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
      closetest:false,
    })
    console.log("clear",FESrandom)

  }
  check(){
    //if(__DEV__)
//    {return true}
    for(i=0;i<this.state.FES.length;i++)
    {
      if(undefined != this.state.FES[i] && this.state.checked[i]==="")
      {
              Alert.alert("","请检查题目："+(i+1), [
          {text: '确定'}
        ])
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
      
    title: RouteConfig["FESModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.FES[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<FES.length;i++)
      {
        //console.log(FES[i].sel)
      }
    }

  }

  result()
  {
    if(false==this.check())
    {
      return
    }
    var testFES = this.state.FES
    var ret = new Array();

    ret["亲密度"]=ret["情感表达"]=ret["矛盾性"]=ret["独立性"]=ret["成功性"]=ret["文化性"]=ret["娱乐性"]=ret["道德宗教观"]=ret["组织性"]=ret["控制性"]=0

    var total = 0
    var bigtotal = 0 
    //console.log(testFES)
    for(i=0;i<testFES.length;i++)
    {
      var _p = testFES[i].sel;
      var _t = testFES[i].type
      
      if(''!=_p)
      {
        //console.log(testFES[i].sel, testFES[i].type)
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
    extrainfo.push( "亲密度:" + Math.floor(ret["亲密度"] ) ) 
    extrainfo.push( "情感表达:" + Math.floor(ret["情感表达"]) ) 
    extrainfo.push(  "矛盾性:" + Math.floor(ret["矛盾性"]) ) 
    extrainfo.push(  "独立性:" + Math.floor(ret["独立性"]) ) 
    extrainfo.push(  "成功性:" + Math.floor(ret["成功性"]) ) 
    extrainfo.push(  "文化性:" + Math.floor(ret["文化性"] ) ) 
    extrainfo.push(  "娱乐性:" + Math.floor(ret["娱乐性"] ) ) 
    extrainfo.push(  "道德宗教观:" + Math.floor(ret["道德宗教观"] ) ) 
    extrainfo.push(  "组织性:" + Math.floor(ret["组织性"] ) ) 
    extrainfo.push(  "控制性:" + Math.floor(ret["控制性"] ) ) 
    //console.log(ret,total)
    var detailinfo = new Array
    detailinfo.push("各项评分中等标准如下，过高过低分别未9分或者0分\n ")
    detailinfo.push("亲密度：6-8分\n ")
    detailinfo.push("情感表达：5-7分\n ")
    detailinfo.push("矛盾性：2-5分\n ")
    detailinfo.push("独立性：4-7分\n ")
    detailinfo.push("成功性：6-8分\n ")
    detailinfo.push("文化性：4-7分\n ")
    detailinfo.push("娱乐性：4-6分\n ")
    detailinfo.push("道德宗教观：4-7分\n ")
    detailinfo.push("组织性：6-8分\n ")
    detailinfo.push("控制性：4-5分\n ")

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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['FESlocation'], "霍兰德职业性格测试结果",this)}}                
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
              title={RouteConfig["FESModule"].titlename}
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
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='FESlocation'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["FESModule"].titlename}</Text>
      <FlatList

            data={this.state.FES}
            extraData={this.state}
            keyExtractor={this.keyExtractor}
						renderItem={({ item }) => (
              <View id={item.id}>
              <Text style={styles.list}></Text>
              <Text style={styles.list}>第{item.index+1}题:{item.q}</Text>
              <View style = {styles.dateContainer}>
              <CheckBox containerStyle={styles.CheckBox} title = {item.a} checked={this.state.checked[Number(item.key)]===item.ret_a}  onPress={()=>this.updateIndex(Number(item.key),item.ret_a)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.b} checked={this.state.checked[Number(item.key)]===item.ret_b}  onPress={()=>this.updateIndex(Number(item.key),item.ret_b)}/>
              
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

module.exports=FESModule;  