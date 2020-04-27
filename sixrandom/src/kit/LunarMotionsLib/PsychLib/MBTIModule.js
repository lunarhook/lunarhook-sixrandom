

import React, {Component} from 'react';
import {StyleSheet,View,PixelRatio,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import ScreenConfig from '../../../config/ScreenConfig';
import WechatShare from '../../../config/WechatShare'
import StyleConfig from '../../../config/StyleConfig';
import {VictoryPie,VictoryLegend,} from 'victory-native';

import Svg,{
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

const dp2px = dp=>PixelRatio.getPixelSizeForLayoutSize(dp);
const px2dp = px=>PixelRatio.roundToNearestPixel(px);
var MBTIs=Array();
MBTIs[0]={
  "key":"0",
  "q":"当你要外出一整天，你会",
  "a":"A 计划你要做什么和在什么时候做",
  "b":"B 说去就去",
  "c":"",
  "d":"",
  "ret_a":"j",
  "ret_b":"p",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[1]={
  "key":"1",
  "q":"你认为自己是一个",
  "a":"A 较为有条理的人",
  "b":"B 较为随兴所至的人",
  "c":"",
  "d":"",
  "ret_a":"j",
  "ret_b":"p",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[2]={
  "key":"2",
  "q":"假如你是一位老师，你会选教",
  "a":"A 以事实为主的课程",
  "b":"B 涉及理论的课程",
  "c":"",
  "d":"",
  "ret_a":"s",
  "ret_b":"n",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[3]={
  "key":"3",
  "q":"你通常",
  "a":"A 与人容易混熟",
  "b":"B 比较沉静或矜持",
  "c":"",
  "d":"",
  "ret_a":"e",
  "ret_b":"i",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[4]={
  "key":"4",
  "q":"一般来说，你和哪些人比较合得来？",
  "a":"A 现实的人",
  "b":"B 富于想象力的人",
  "c":"",
  "d":"",
  "ret_a":"s",
  "ret_b":"n",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[5]={
  "key":"5",
  "q":"你是否经常让",
  "a":"A 你的情感支配你的理智",
  "b":"B 你的理智主宰你的情感",
  "c":"",
  "d":"",
  "ret_a":"f",
  "ret_b":"t",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[6]={
  "key":"6",
  "q":"处理许多事情上，你会喜欢",
  "a":"A 凭兴所至行事",
  "b":"B 按照计划行事",
  "c":"",
  "d":"",
  "ret_a":"p",
  "ret_b":"j",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[7]={
  "key":"7",
  "q":"你是否",
  "a":"A 容易让人了解",
  "b":"B 难于让人了解",
  "c":"",
  "d":"",
  "ret_a":"e",
  "ret_b":"i",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[8]={
  "key":"8",
  "q":"你认为别人一般",
  "a":"A 要花很长时间才认识你",
  "b":"B 用很短的时间便认识你",
  "c":"",
  "d":"",
  "ret_a":"i",
  "ret_b":"e",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[9]={
  "key":"9",
  "q":"按照程序表做事",
  "a":"A 合你心意",
  "b":"B 令你感到束缚",
  "c":"",
  "d":"",
  "ret_a":"j",
  "ret_b":"p",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[10]={
  "key":"10",
  "q":"当你有一份特别的任务，你会喜欢",
  "a":"A 开始前小心组织计划",
  "b":"B 边做边找须做什么",
  "c":"",
  "d":"",
  "ret_a":"j",
  "ret_b":"p",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[11]={
  "key":"11",
  "q":"在大多数情况下，你会选择",
  "a":"A 顺其自然",
  "b":"B 按程序表做事",
  "c":"",
  "d":"",
  "ret_a":"p",
  "ret_b":"j",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[12]={
  "key":"12",
  "q":"大多数人会说你是一个",
  "a":"A 重视自我隐私的人",
  "b":"B 非常坦率开放的人",
  "c":"",
  "d":"",
  "ret_a":"i",
  "ret_b":"e",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[13]={
  "key":"13",
  "q":"你宁愿被人认为是一个",
  "a":"A 实事求是的人",
  "b":"B 机灵的人",
  "c":"",
  "d":"",
  "ret_a":"s",
  "ret_b":"n",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[14]={
  "key":"14",
  "q":"在一大群人当中，通常是",
  "a":"A 你介绍大家认识",
  "b":"B 别人介绍你",
  "c":"",
  "d":"",
  "ret_a":"e",
  "ret_b":"i",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[15]={
  "key":"15",
  "q":"你会跟哪些人做朋友？",
  "a":"A 常提出新注意的",
  "b":"B 脚踏实地的",
  "c":"",
  "d":"",
  "ret_a":"n",
  "ret_b":"s",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[16]={
  "key":"16",
  "q":"你倾向",
  "a":"A 重视感情多于逻辑",
  "b":"B 重视逻辑多于感情",
  "c":"",
  "d":"",
  "ret_a":"f",
  "ret_b":"t",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[17]={
  "key":"17",
  "q":"你比较喜欢",
  "a":"A 坐观事情发展才作计划",
  "b":"B 很早就作计划",
  "c":"",
  "d":"",
  "ret_a":"p",
  "ret_b":"j",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[18]={
  "key":"18",
  "q":"你喜欢花很多的时间",
  "a":"A 一个人独处",
  "b":"B 合别人在一起",
  "c":"",
  "d":"",
  "ret_a":"i",
  "ret_b":"e",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[19]={
  "key":"19",
  "q":"与很多人一起会",
  "a":"A 令你活力培增",
  "b":"B 常常令你心力憔悴",
  "c":"",
  "d":"",
  "ret_a":"e",
  "ret_b":"i",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[20]={
  "key":"20",
  "q":"你比较喜欢",
  "a":"A 很早便把约会、社交聚集等事情安排妥当",
  "b":"B 无拘无束，看当时有什么好玩就做什么",
  "c":"",
  "d":"",
  "ret_a":"j",
  "ret_b":"p",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[21]={
  "key":"21",
  "q":"计划一个旅程时，你较喜欢",
  "a":"A 大部分的时间都是跟当天的感觉行事",
  "b":"B 事先知道大部分的日子会做什么",
  "c":"",
  "d":"",
  "ret_a":"p",
  "ret_b":"j",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[22]={
  "key":"22",
  "q":"在社交聚会中，你",
  "a":"A 有时感到郁闷",
  "b":"B 常常乐在其中",
  "c":"",
  "d":"",
  "ret_a":"i",
  "ret_b":"e",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[23]={
  "key":"23",
  "q":"你通常",
  "a":"A 和别人容易混熟",
  "b":"B 趋向自处一隅",
  "c":"",
  "d":"",
  "ret_a":"e",
  "ret_b":"i",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[24]={
  "key":"24",
  "q":"哪些人会更吸引你？",
  "a":"A 一个思想敏捷及非常聪颖的人",
  "b":"B 实事求是，具丰富常识的人",
  "c":"",
  "d":"",
  "ret_a":"n",
  "ret_b":"s",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[25]={
  "key":"25",
  "q":"在日常工作中，你会",
  "a":"A 颇为喜欢处理迫使你分秒必争的突发",
  "b":"B 通常预先计划，以免要在压力下工作",
  "c":"",
  "d":"",
  "ret_a":"j",
  "ret_b":"p",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[26]={
  "key":"26",
  "q":"你认为别人一般",
  "a":"A 要花很长时间才认识你",
  "b":"B 用很短的时间便认识你",
  "c":"",
  "d":"",
  "ret_a":"i",
  "ret_b":"e",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[27]={
  "key":"27",
  "q":"那个更符合心意",
  "a":"A 注重隐私",
  "b":"B 坦率开放",
  "c":"",
  "d":"",
  "ret_a":"i",
  "ret_b":"e",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[28]={
  "key":"28",
  "q":"那个更符合心意",
  "a":"A 预先安排的",
  "b":"B 无计划的",
  "c":"",
  "d":"",
  "ret_a":"j",
  "ret_b":"p",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[29]={
  "key":"29",
  "q":"那个更符合心意",
  "a":"A 抽象",
  "b":"A 具体",
  "c":"",
  "d":"",
  "ret_a":"n",
  "ret_b":"s",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[30]={
  "key":"30",
  "q":"你比较喜欢",
  "a":"A 思考",
  "b":"B 感受",
  "c":"",
  "d":"",
  "ret_a":"t",
  "ret_b":"f",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[31]={
  "key":"31",
  "q":"你比较喜欢",
  "a":"A 事实",
  "b":"B 意念",
  "c":"",
  "d":"",
  "ret_a":"s",
  "ret_b":"n",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[32]={
  "key":"32",
  "q":"你比较喜欢",
  "a":"A 冲动",
  "b":"B 决定",
  "c":"",
  "d":"",
  "ret_a":"p",
  "ret_b":"j",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[33]={
  "key":"33",
  "q":"你比较喜欢",
  "a":"A 冲动",
  "b":"B 决定",
  "c":"",
  "d":"",
  "ret_a":"p",
  "ret_b":"j",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[34]={
  "key":"34",
  "q":"你比较喜欢",
  "a":"A 热衷",
  "b":"B 文静",
  "c":"",
  "d":"",
  "ret_a":"e",
  "ret_b":"i",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[35]={
  "key":"35",
  "q":"你比较喜欢",
  "a":"A 文静",
  "b":"B 外向",
  "c":"",
  "d":"",
  "ret_a":"i",
  "ret_b":"e",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[36]={
  "key":"36",
  "q":"你比较喜欢",
  "a":"A 有系统",
  "b":"B 随意",
  "c":"",
  "d":"",
  "ret_a":"j",
  "ret_b":"p",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[37]={
  "key":"37",
  "q":"你比较喜欢",
  "a":"A 理论",
  "b":"B 肯定",
  "c":"",
  "d":"",
  "ret_a":"i",
  "ret_b":"e",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[38]={
  "key":"38",
  "q":"你比较喜欢",
  "a":"A 敏感",
  "b":"B 公正",
  "c":"",
  "d":"",
  "ret_a":"f",
  "ret_b":"t",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[39]={
  "key":"39",
  "q":"你比较喜欢",
  "a":"A 令人信服",
  "b":"B 感人的",
  "c":"",
  "d":"",
  "ret_a":"t",
  "ret_b":"f",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[40]={
  "key":"40",
  "q":"你比较喜欢",
  "a":"A 声明",
  "b":"B 概念",
  "c":"",
  "d":"",
  "ret_a":"s",
  "ret_b":"n",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[41]={
  "key":"41",
  "q":"你比较喜欢",
  "a":"A 不受约束",
  "b":"B 预先安排",
  "c":"",
  "d":"",
  "ret_a":"p",
  "ret_b":"j",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[42]={
  "key":"42",
  "q":"你比较喜欢",
  "a":"A 矜持",
  "b":"B 健谈",
  "c":"",
  "d":"",
  "ret_a":"i",
  "ret_b":"e",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[43]={
  "key":"43",
  "q":"你比较喜欢",
  "a":"A 有条不紊",
  "b":"B 不拘小节",
  "c":"",
  "d":"",
  "ret_a":"j",
  "ret_b":"p",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[44]={
  "key":"44",
  "q":"你比较喜欢",
  "a":"A 意念",
  "b":"B 实况",
  "c":"",
  "d":"",
  "ret_a":"n",
  "ret_b":"s",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[45]={
  "key":"45",
  "q":"你比较喜欢",
  "a":"A 同情怜悯",
  "b":"B 远见",
  "c":"",
  "d":"",
  "ret_a":"f",
  "ret_b":"t",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[46]={
  "key":"46",
  "q":"你比较喜欢",
  "a":"A 利益",
  "b":"B 祝福",
  "c":"",
  "d":"",
  "ret_a":"t",
  "ret_b":"f",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[47]={
  "key":"47",
  "q":"你比较喜欢",
  "a":"A 务实的",
  "b":"B 理论的",
  "c":"",
  "d":"",
  "ret_a":"s",
  "ret_b":"n",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[48]={
  "key":"48",
  "q":"你比较喜欢",
  "a":"A 朋友不多",
  "b":"B 朋友众多",
  "c":"",
  "d":"",
  "ret_a":"i",
  "ret_b":"e",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[49]={
  "key":"49",
  "q":"你比较喜欢",
  "a":"A 有系统",
  "b":"B 即兴",
  "c":"",
  "d":"",
  "ret_a":"j",
  "ret_b":"p",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[50]={
  "key":"50",
  "q":"你比较喜欢",
  "a":"A 富想象的",
  "b":"B 以事论事",
  "c":"",
  "d":"",
  "ret_a":"n",
  "ret_b":"s",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[51]={
  "key":"51",
  "q":"你比较喜欢",
  "a":"A 亲切的",
  "b":"B 客观的",
  "c":"",
  "d":"",
  "ret_a":"f",
  "ret_b":"t",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[52]={
  "key":"52",
  "q":"你比较喜欢",
  "a":"A 客观的",
  "b":"B 热情的",
  "c":"",
  "d":"",
  "ret_a":"t",
  "ret_b":"f",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[53]={
  "key":"53",
  "q":"你比较喜欢",
  "a":"A 建造",
  "b":"B 发明",
  "c":"",
  "d":"",
  "ret_a":"s",
  "ret_b":"n",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[54]={
  "key":"54",
  "q":"你比较喜欢",
  "a":"A 理论",
  "b":"B 事实",
  "c":"",
  "d":"",
  "ret_a":"n",
  "ret_b":"s",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[55]={
  "key":"55",
  "q":"你比较喜欢",
  "a":"A 文静",
  "b":"B 爱合群",
  "c":"",
  "d":"",
  "ret_a":"i",
  "ret_b":"e",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[56]={
  "key":"56",
  "q":"你比较喜欢",
  "a":"A 富同情",
  "b":"B 合逻辑",
  "c":"",
  "d":"",
  "ret_a":"f",
  "ret_b":"t",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[57]={
  "key":"57",
  "q":"你比较喜欢",
  "a":"A 具分析力",
  "b":"B 多愁善感",
  "c":"",
  "d":"",
  "ret_a":"t",
  "ret_b":"f",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[58]={
  "key":"58",
  "q":"你比较喜欢",
  "a":"A 合情合理",
  "b":"B 令人着迷",
  "c":"",
  "d":"",
  "ret_a":"s",
  "ret_b":"n",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[59]={
  "key":"59",
  "q":"当你要在一个星期内完成一个大项目，你在开始的时候会",
  "a":"A 把要做的不同工作依次列出",
  "b":"B 马上动工",
  "c":"",
  "d":"",
  "ret_a":"j",
  "ret_b":"p",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[60]={
  "key":"60",
  "q":"在社交场合中，你经常会感到",
  "a":"A 与某些人很难打开话匣儿和保持对话，或是",
  "b":"B 与多数人都能从容地长谈",
  "c":"",
  "d":"",
  "ret_a":"i",
  "ret_b":"e",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[61]={
  "key":"61",
  "q":"要做许多人也做的事，你比较喜欢",
  "a":"A 按照一般认可的方法去做",
  "b":"B 构想一个自己的想法",
  "c":"",
  "d":"",
  "ret_a":"s",
  "ret_b":"n",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[62]={
  "key":"62",
  "q":"你刚认识的朋友能否说出你的兴趣？",
  "a":"A 讲授概念和原则的",
  "b":"B 要待他们真正了解你之后才可以",
  "c":"",
  "d":"",
  "ret_a":"e",
  "ret_b":"i",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[63]={
  "key":"63",
  "q":"你通常较喜欢的科目是",
  "a":"A 讲授概念和原则的",
  "b":"B 讲授事实和数据的",
  "c":"",
  "d":"",
  "ret_a":"n",
  "ret_b":"s",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[64]={
  "key":"64",
  "q":"哪个是较高的赞誉，或称许为？",
  "a":"A 一贯感性的人",
  "b":"B 一贯理性的人",
  "c":"",
  "d":"",
  "ret_a":"f",
  "ret_b":"t",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[65]={
  "key":"65",
  "q":"你认为按照程序表做事",
  "a":"A 有时是需要的，但一般来说你不大喜欢这样做，或是",
  "b":"B 大多数情况下是有帮助而且是你喜欢做的",
  "c":"",
  "d":"",
  "ret_a":"p",
  "ret_b":"j",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[66]={
  "key":"66",
  "q":"和一群人在一起，你通常会选",
  "a":"A 跟你很熟悉的个别人谈话",
  "b":"B 参与大伙的谈话",
  "c":"",
  "d":"",
  "ret_a":"i",
  "ret_b":"e",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[67]={
  "key":"67",
  "q":"在社交聚会上，你会",
  "a":"A 是说话很多的一个",
  "b":"B 让别人多说话",
  "c":"",
  "d":"",
  "ret_a":"e",
  "ret_b":"i",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[68]={
  "key":"68",
  "q":"把周末期间要完成的事列成清单，这个主意会",
  "a":"A 合你意",
  "b":"B 使你提不起劲",
  "c":"",
  "d":"",
  "ret_a":"j",
  "ret_b":"p",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[69]={
  "key":"69",
  "q":"哪个是较高的赞誉，或称许为",
  "a":"A 能干的",
  "b":"B 富有同情心",
  "c":"",
  "d":"",
  "ret_a":"t",
  "ret_b":"f",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[70]={
  "key":"70",
  "q":"你通常喜欢",
  "a":"A 事先安排你的社交约会",
  "b":"B 随兴之所至做事",
  "c":"",
  "d":"",
  "ret_a":"j",
  "ret_b":"p",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[71]={
  "key":"71",
  "q":"总的说来，要做一个大型作业时，你会选",
  "a":"A 边做边想该做什么",
  "b":"B 首先把工作按步细分",
  "c":"",
  "d":"",
  "ret_a":"p",
  "ret_b":"j",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[72]={
  "key":"72",
  "q":"你能否滔滔不绝地与人聊天",
  "a":"A 只限于跟你有共同兴趣的人",
  "b":"B 几乎跟任何人都可以",
  "c":"",
  "d":"",
  "ret_a":"i",
  "ret_b":"e",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[73]={
  "key":"73",
  "q":"你会",
  "a":"A 跟随一些证明有效的方法，或是",
  "b":"B 分析还有什么毛病，及针对尚未解决的难题",
  "c":"",
  "d":"",
  "ret_a":"s",
  "ret_b":"n",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[74]={
  "key":"74",
  "q":"为乐趣而阅读时，你会",
  "a":"A 喜欢奇特或创新的表达方式",
  "b":"B 喜欢作者直话直说",
  "c":"",
  "d":"",
  "ret_a":"n",
  "ret_b":"s",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[75]={
  "key":"75",
  "q":"你宁愿替哪一类上司（或者老师）工作？",
  "a":"A 天性淳良，但常常前后不一的",
  "b":"B 言词尖锐但永远合乎逻辑的",
  "c":"",
  "d":"",
  "ret_a":"f",
  "ret_b":"t",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[76]={
  "key":"76",
  "q":"你做事多数是",
  "a":"A 按当天心情去做",
  "b":"B 照拟好的程序表去做",
  "c":"",
  "d":"",
  "ret_a":"p",
  "ret_b":"j",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[77]={
  "key":"77",
  "q":"你是否",
  "a":"A 可以和任何人按需求从容地交谈，或是",
  "b":"B 只是对某些人或在某种情况下才可以畅所欲言",
  "c":"",
  "d":"",
  "ret_a":"e",
  "ret_b":"i",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[78]={
  "key":"78",
  "q":"要作决定时，你认为比较重要的是",
  "a":"A 据事实衡量",
  "b":"B 考虑他人的感受和意见",
  "c":"",
  "d":"",
  "ret_a":"t",
  "ret_b":"f",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[79]={
  "key":"79",
  "q":"那个更和你心意",
  "a":"A 想象的",
  "b":"B 真实的",
  "c":"",
  "d":"",
  "ret_a":"n",
  "ret_b":"s",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[80]={
  "key":"80",
  "q":"那个更和你心意",
  "a":"A 仁慈慷慨的",
  "b":"B 意志坚定的",
  "c":"",
  "d":"",
  "ret_a":"f",
  "ret_b":"t",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[81]={
  "key":"81",
  "q":"那个更和你心意",
  "a":"A 公正的",
  "b":"B 有关怀心",
  "c":"",
  "d":"",
  "ret_a":"t",
  "ret_b":"f",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[82]={
  "key":"82",
  "q":"那个更和你心意",
  "a":"A 制作",
  "b":"B 设计",
  "c":"",
  "d":"",
  "ret_a":"s",
  "ret_b":"n",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[83]={
  "key":"83",
  "q":"那个更和你心意",
  "a":"A 可能性",
  "b":"B 必然性",
  "c":"",
  "d":"",
  "ret_a":"n",
  "ret_b":"s",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[84]={
  "key":"84",
  "q":"那个更和你心意",
  "a":"A 温柔",
  "b":"B 力量",
  "c":"",
  "d":"",
  "ret_a":"f",
  "ret_b":"t",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[85]={
  "key":"85",
  "q":"那个更和你心意",
  "a":"A 实际",
  "b":"B 多愁善感",
  "c":"",
  "d":"",
  "ret_a":"t",
  "ret_b":"f",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[86]={
  "key":"86",
  "q":"那个更和你心意",
  "a":"A 制造",
  "b":"B 创造",
  "c":"",
  "d":"",
  "ret_a":"s",
  "ret_b":"n",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[87]={
  "key":"87",
  "q":"那个更和你心意",
  "a":"A 新颖的",
  "b":"B 已知的",
  "c":"",
  "d":"",
  "ret_a":"n",
  "ret_b":"s",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[88]={
  "key":"88",
  "q":"那个更和你心意",
  "a":"A 同情",
  "b":"B 分析",
  "c":"",
  "d":"",
  "ret_a":"f",
  "ret_b":"t",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[89]={
  "key":"89",
  "q":"那个更和你心意",
  "a":"A 坚持己见",
  "b":"B 温柔有爱心",
  "c":"",
  "d":"",
  "ret_a":"t",
  "ret_b":"f",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[90]={
  "key":"90",
  "q":"那个更和你心意",
  "a":"A 具体的",
  "b":"B 抽象的",
  "c":"",
  "d":"",
  "ret_a":"s",
  "ret_b":"n",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[91]={
  "key":"91",
  "q":"那个更和你心意",
  "a":"A 全身心投入",
  "b":"B 有决心的",
  "c":"",
  "d":"",
  "ret_a":"f",
  "ret_b":"t",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
MBTIs[92]={
  "key":"92",
  "q":"那个更和你心意",
  "a":"A 能干的",
  "b":"B 仁慈的",
  "c":"",
  "d":"",
  "ret_a":"t",
  "ret_b":"f",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}

MBTIresultinfo=
[
"MBTI主要指标解释","",
"态度倾向　(我们与世界相互作用方式):","外向Extraversion(E) 内向Introversion(I)","",
"接受信息　(我们获取信息的主要方式):","感觉Sensing(S) 直觉iNtuition(N)","",
"处理信息　(我们的决策方式):","思考Thinking(T) 情感Feeling(F)","",
"行动方式　(我们的做事方式):","判断Judging(J) 知觉Perceiving(P)","","",
"E 外向 关注自己如何影响外部环境:将心理能量和注意力聚集于外部世界和与他人的交往上。例如：聚会、讨论、聊天","",
"I 内向 关注外部环境的变化对自己的影响：将心理能量和注意力聚集于内部世界，注重自己的内心体验。例如：独立思考，看书，避免成为注意的中心，听的比说的多","",
"S 感觉 关注由感觉器官获取的具体信息：看到的、听到的、闻到的、尝到的、触摸到的事物.例如：关注细节、喜欢描述、喜欢使用和琢磨已知的技能","",
"N 直觉 关注事物的整体和发展变化趋势：灵感、预测、暗示，重视推理 例如：重视想象力和独创力，喜欢学习新技能，但容易厌倦、喜欢使用比喻，跳跃性地展现事实","",
"T 思考 重视事物之间的逻辑关系，喜欢通过客观分析作决定评价。例如：理智、客观、公正、认为圆通比坦率更重要","",
"F 情感 以自己和他人的感受为重，将价值观作为判定标准例如：有同情心、善良、和睦、善解人意，考虑行为对他人情感的影响，认为圆通和坦率同样重要","",
"J 判断 喜欢做计划和决定，愿意进行管理和控制，希望生活井然有序,例如：重视结果(重点在于完成任务)、按部就班、有条理、尊重时间期限、喜欢做决定","",
"P 知觉 灵活、试图去理解、适应环境、倾向于留有余地，喜欢宽松自由的生活方式 例如：重视过程、随信息的变化不断调整目标，喜欢有多种选择","",
]
MBTIresulttable = new Array();
MBTIresulttable["ESTJ"]="大男人型：外向的、感受的、理性的、果断者，爱情是建立在坚固的家庭价值、传统和忠贞上的。"
MBTIresulttable["ESTP"]="挑战者型：外向的、感受的、理性的、观察者，爱情应该是经常充满刺激及能激发人的。"
MBTIresulttable["ESFJ"]="主人型：外向的、感受的、感觉的、果断者，爱情建立在服务他人之上。"
MBTIresulttable["ESFP"]="表演型：外向的、感受的、感觉的、观察者，爱情是享受和陶醉在此刻的狂热中。"
MBTIresulttable["ENFP"]="记者型：外向的、直觉的、感觉的、观察者，爱情是神秘的、有启发的和有趣味的。"
MBTIresulttable["ENFJ"]="教育家：外向的、直觉的、感觉的、果断者，爱情是被你所爱的人占满。"
MBTIresulttable["ENTP"]="发明家：外向的、直觉的、理性的、观察者，首先我在脑海中发明爱情。"
MBTIresulttable["ENTJ"]="将军型：外向的、直觉的、理性的、观察者，爱情可以因力量、影响和成就而加强。"
MBTIresulttable["ISTJ"]="公务员：内向的、感受的、理性的、果断者，爱情是建立在义务和责任上的。"
MBTIresulttable["ISTP"]="冒险家：内向的、感受的、理性的、观察者，爱情是一连串的动作。"
MBTIresulttable["ISFJ"]="照顾者：内向的、感受的、感觉的、果断者，爱情是一个值得为它牺牲的目标。"
MBTIresulttable["ISFP"]="艺术家：内向的、感受的、感觉的、观察者，爱情是温柔的、自然的和奉献的。"
MBTIresulttable["INTJ"]="专家型：内向的、直觉的、理性的、果断者，爱情可以被分析并改进得更完美。"
MBTIresulttable["INTP"]="学者型：内向的、直觉的、理性的、观察者，爱情不过是另一个灵光乍现。"
MBTIresulttable["INFJ"]="作家型：内向的、直觉的、感觉的、果断者，爱情在我的脑中、心上和灵魂里。”"
MBTIresulttable["INFP"]="哲学家：内向的、直觉的、感觉的、观察者，爱情是最完美的所在、安静、平和与善良。"

resulttabledetail = new Array();
resulttabledetail["ESTJ"]=[
  "理智、善分析、果断、意志坚定，以系统化的方式组织具体事实。喜欢事先组织细节和操作程序与他人一起完成任务","",
  "ESTJ喜欢根据相关的事实和细节进行逻辑分析，从而控制情境，为达到理想结果，会考虑更广阔的前景以及对人们和自己的影响","", 
  "","",
  ]
resulttabledetail["ESTP"]=[
  "行为定向型，讲究实效、足智多谋、注重现实，以最有效的途径解决问题。喜欢事件即时发生，然后在复杂的情境中找到解决问题的方法。","",
  "ESTP喜欢现实、具体地评估环境，然后用逻辑分析以后采取的步骤，为获得理想结果，会考虑对人们的影响，寻找其它可选择的可能性","", 
  "","",
  ]
resulttabledetail["ESFJ"]=[
  "乐于助人，机智，富有同情心，注重秩序，把与他人相处和谐看得很重要，喜欢组织人们和制定计划完成眼前的任务。","",
  "ESFJ喜欢考虑准则以及对人们的影响，也关注相关的事实和有用的细节，为获取理想结果，需识别其它人际关系，然后理智、冷静地分析。","", 
  "","",
  ]
resulttabledetail["ESFP"]=[
  "友好、开朗，爱开玩笑，活泼，天性喜欢与他人相处。喜欢与其他活泼、快节奏的人一起工作，同时也会根据判断做出不同选择。","",
  "ESFP喜欢对情境进行现实和具体的评估，尤其是对于人更是如此，为获得最佳结果，需增强客观性，从长远的眼光看待不同事物。","", 
  "","",
  ]
resulttabledetail["ENFP"]=[
  "热情，富有洞察力和创新性，多才多艺，不知疲倦地寻求新的希望和前景。喜欢在团队中工作，致力于从事能给人们带来更好的改变的事情。","",
  "ENFP喜欢根据自己的价值观和准则探索创造性发展的各种可能性和前景，为获得最佳结果，冷静理智分析，考虑相关的事实资料和各种细节","", 
  "","",
  ]
resulttabledetail["ENFJ"]=[
  "关注人际关系，理解、宽容和赞赏他人，是良好沟通的促进者。喜欢与他人一起工作，致力于完成与人们的发展有关的各种任务。","",
  "ENFJ先判断发展计划是否考虑能取得的绩效和对人们的影响，为获得最佳结果注意更多事实资料，然后进行理智、冷静地分析。","", 
  "","",
  ]
resulttabledetail["ENTP"]=[
  "富于创新，具有战略眼光，多才多艺，分析型思维，具有创业能力。喜欢与他人一起从事需要非凡智慧的创始性活动。","",
  "ENTP喜欢探索未来的前景和发展模式，理智地分析每一个正向和反向的结果,为获得最理想结果，关注人们的需要和相关的事实和细节。","", 
  "","",
  ]
resulttabledetail["ENTJ"]=[
  "坦诚、果断，有天生的领导能力。能很快看到公司/组织程序和政策中的不合理性和低效能性，发展并实施有效和全面的系统来解决问题。善于做长期的计划和目标的设定。通常见多识广，博览群书，喜欢拓广自己的知识面 并将此分享给他人。在陈述自己的想法时非常强而有力。  ","",
  "ENTJ型的人是伟大的领导者和决策人。他们能轻易地看出事物具有的可能性，很高兴指导别人，使他们的想象成为现实。他们是头脑灵活的思想家和伟大的长远规划者。因为ENTJ型的人很有条理和分析能力，所以他们通常 对要求推理和才智的任何事情都很擅长。为了在完成工作中称职，他们通常会很自然地看出所处情况中可能存在的缺陷，并且立刻知道如何改进。他们力求精通整个体系，而不是简单地把它们做为现存的接受而已。 ENTJ型 的人乐于完成一些需要解决的复杂问题，他们大胆地力求掌握使他们感兴趣的任何事情。 ENTJ型的人把事实看得高于一切，只有通过逻辑的推理才会确信。 ENTJ型的人渴望不断增加自己的知识基础，他们系统地计划和研 究新情况。他们乐于钻研复杂的理论性问题，力求精通任何他们认为有趣的事物。他们对于行为的未来结果更感兴趣，而不是事物现存的状况。 ENTJ型的人是热心而真诚的天生的领导者，他们往往能够控制他们所处的任何环境。因为他们具有预见能力，并且向别人传播他们的观点，所以他们是出色的群众组织者。他们往往按照一套相当严格的规律生活，并且希望别人也是如此。因此他们往往具有挑战性，同样艰难地推动自我和他人前进。。","", 
  "您适合的领域有：工商业、政界、金融和投资领域、管理咨询、培训、专业性领域","",
  ]
resulttabledetail["ISTJ"]=[
  "详尽、精确、系统、勤劳，关注细节。致力于改善组织程序与过程，无论组织处在发展的顺境还是逆境，都对组织保持忠诚。","",
  "ISTJ喜欢完全依据事实在逻辑框架里进行分析,为获得理想结果，需考虑对人们的影响，然后寻找更多的可能性和其它含义。","", 
  "您适合的领域有：领域特征不明显，较相关的如：医护领域、消费类商业、服务业领域","",
  ]
resulttabledetail["ISTP"]=[
  "注重实用性，尊重事实，寻求有利方法，具有现实性，只信服被论证的结果。喜欢独立工作，依靠逻辑和足智多谋解决即时出现的组织问题。","",
  "ISTP喜欢依据具体事实以自身具有的内部逻辑构建问题和解决问题,为获得理想结果，需要考虑其它可能性和对人们的影响","", 
  "","",
  ]
resulttabledetail["ISFJ"]=[
"沉静，友善，有责任感和谨慎。能坚定不移地承担责任。做事贯彻始终、不辞劳苦和准确无误。忠诚，替人着想，细心；往往记着他所重视的人的种种微小事情，关心别人的感受。努力创造一个有秩序、和谐的工作和家居环境。","",
"ISFJ型的人忠诚、有奉献精神和同情心，理解别人的感受。他们意志清醒而有责任心，乐于为人所需。 ISFJ型的人十分务实，他们喜欢平和谦逊的人。他们喜欢利用大量的事实情况，对于细节则有很强的记力。他们耐心地 对待任务的整个阶段，喜欢事情能够清晰明确。 ISFJ型的人具有强烈的职业道德，所以他们如果知道自己的行为真正有用时，会对需要完成之事承担责任。他们准确系统地完成任务。他们具有传统的价值观，十分保守。他 们利用符合实际的判断标准做决定，通过出色的注重实际的态度增加了稳定性。 ISFJ型的人平和谦虚、勤奋严肃。他们温和、圆通，支持朋友和同伴。他们乐于协助别人，喜欢实际可行地帮助他人。他们利用个人热情与人 交往，在困难中与他人和睦相处。ISFJ型的人不喜欢表达个人情感，但实际上对于大多数的情况和事件都具有强烈的个人反应。他们关心、保护朋友，愿意为朋友献身，他们有为他人服务的意识，愿意完成他们的责任和义务。","", 
"您适合的领域有：领域特征不明显，较相关的如：医护领域、消费类商业、服务业领域","",
]
resulttabledetail["ISFP"]=[
  "温和、体贴、灵活、具有开放性。富有同情心，尤其对那些需要帮助的人。喜欢在合作和充满和谐气氛的环境中工作，但常常是在完成他们自己任务的时候。","",
  "ISFP喜欢从实用的角度考虑对自己和他人真正重要的事物，为获得理想结果，需考虑其他人际关系和其它可能性，然后更客观地决定事情。 ","", 
  "","",
  ]
resulttabledetail["INTJ"]=[
  "在实现自己的想法和达成自己的目标时有创新的想法和非凡的动力。能很快洞察到外界事物间的规律并形成长期的远景计划。一旦决定做一件事就会开始规划并直到完成为止。多疑、独立，对于自己和他人能力和表现的要 求都非常高。","",
  "INTJ型的人是完美主义者。他们强烈地要求个人自由和能力，同时在他们独创的思想中，不可动摇的信仰促使他们达到目标。 INTJ型的人思维严谨、有逻辑性、足智多谋，他们能够看到新计划实行后的结果。他们对自己和 别人都很苛求，往往几乎同样强硬地逼迫别人和自己。他们并不十分受冷漠与批评的干扰，作为所有性格类型中最独立的，INTJ型的人更喜欢以自己的方式行事。面对相反意见，他们通常持怀疑态度，十分坚定和坚决。权 威本身不能强制地们，只有他们认为这些规则对自己的更重要的目标有用时，才会去遵守。 INTJ型的人是天生的谋略家，具有独特的思想、伟大的远见和梦想。他们天生精于理论，对于复杂而综合的概念运转灵活。他们是优秀的战略思想家，通常能清楚地看到任何局势的利处和缺陷。对于感兴趣的问题，他们是出色的、具有远见和见解的组织者。如果是他们自己形成的看法和计划，他们会投入不可思议的注意力、能量和积极性。领先到达或超过自己的高标准的决心和坚忍不拔，使他们获得许多成就。","", 
  "","",
  ]
resulttabledetail["INTP"]=[
  "讲究合理性，喜欢理论和抽象的事物，好奇心重，更喜欢构建思想，不太关注环境和人。喜欢单独工作，强调对自己的观点和方法拥有最大的自主权。","",
  "INTP在寻求各种可能的选择时，喜欢以自身内部的逻辑建构问题和解决问题，为获取最佳结果，需要同时关注现实状况和他人的需求","", 
  "","",
  ]
resulttabledetail["INFJ"]=[
  "相信自己的眼光，具有同情心和洞察力，温和地运用影响力。喜欢独立工作或与那些热衷于关注人们的成长与发展问题的小群体共同工作。","",
  "INFJ喜欢识别自己内在观点的可能性，尤其是与人和社会准则有关的问题，为成功实现目标，对定向未来的远见卓识的客观性和现实的细枝末节的问题同样重视。","", 
  "","",
  ]
resulttabledetail["INFP"]=[
  "理想主义者，忠于自己的价值观及自己所重视的人。外在的生活与内在的价值观配合，有好奇心，很快看到事情的可能与否，能够加速对理念的实践。试图了解别人、协助别人发展潜能。适应力强，有弹性；如果和他们的 价值观没有抵触，往往能包容他人。","",
  "INFP把内在的和谐视为高于其他一切。他们敏感、理想化、忠诚，对于个人价值具有一种强烈的荣誉感。他们个人信仰坚定，有为自认为有价值的事业献身的精神。 INFP型的人对于已知事物之外的可能性很感兴趣，精力集 中于他们的梦想和想象。他们思维开阔、有好奇心和洞察力，常常具有出色的长远眼光。在日常事务中，他们通常灵活多变、具有忍耐力和适应性，但是他们非常坚定地对待内心的忠诚，为自己设定了事实上几乎是不可能 的标准。 INFP型的人具有许多使他们忙碌的理想和忠诚。他们十分坚定地完成自己所选择的事情，他们往往承担得太多，但不管怎样总要完成每件事。虽然对外部世界他们显得冷淡缄默，但INFP型的人很关心内在。他们富 有同情心、理解力，对于别人的情感很敏感。除了他们的价值观受到威胁外，他们总是避免冲突，没有兴趣强迫或支配别人。INFP型的人常常喜欢通过书写而不是口头来表达自己的感情。当INFP型的人劝说别人相信他们的 想法的重要性时，可能是最有说服力的。 INFP很少显露强烈的感情，常常显得沉默而冷静。然而，一旦他们与你认识了，就会变得热情友好，但往往会避免浮浅的交往。他们珍视那些花费时间去思考目标与价值的人。","", 
  "您适合的领域有：创作性、艺术类 教育、研究、咨询类等","",
  ]
const  limitquestMBTI=36
class MBTIModule extends React.Component {
   constructor(props) {
    super(props);
    
    this.randominit()
  }

  randominit()
  {
    this.state = {
      checked:[],
      MBTIs:[],
      ret:"",
      percent:"",
      extrainfo:"",
      retdetail:"",
      closetest:false,
      pie:"",
    }
  }
  clearcheck(runtimeMBTIs,index)
  {
    var type = runtimeMBTIs[index].ret_a;
    if("t"==type || "f" == type)
    {
      type = "tf"
    }
    if("p"==type || "j" == type)
    {
      type = "pj"
    }
    if("e"==type || "i" == type)
    {
      type = "ei"
    }
    if("s"==type || "n" == type)
    {
      type = "sn"
    }
    var count = 0
    for(i=0;i<runtimeMBTIs.length;i++)
    {
      if(type.indexOf(runtimeMBTIs[i].ret_a)!=-1)
      {
        count++
      }
    }
    if(count<10)
    {
      return false
    }
    return true
  }
  clear()
  {
    var ret = new Array();
    ret["e"]=ret["i"]=ret["n"]=ret["s"]=ret["t"]=ret["f"]=ret["j"]=ret["p"]=ret[""]=0
    var runtimeMBTIs = MBTIs.concat()
    var checked = new Array();
    while(runtimeMBTIs.length>limitquestMBTI)
    {
      var p = Math.floor(Math.random()*runtimeMBTIs.length)
      if(this.clearcheck(runtimeMBTIs,p))
      {      
        runtimeMBTIs.splice(p,1)
      }
    }
    var checked = new Array();
    for(i=0;i<runtimeMBTIs.length;i++)
    {
      checked[0]=undefined
checked[i]=""
      runtimeMBTIs[i].index=i
      runtimeMBTIs[i].key=i
    }
    this.setState( {
      checked:checked,
      MBTIs:runtimeMBTIs,
      ret:"",
      percent:"",
      extrainfo:"",
      retdetail:"",
      closetest:false,
      pie:"",
    })
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
    //this.props.navigation.setParams({fresh:this.randominit})
  }
  

  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
      
    title:RouteConfig["MBTIModule"].titlename
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.MBTIs[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<MBTIs.length;i++)
      {
        //console.log(MBTIs[i].sel)
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
  check(){
    //if(__DEV__)
    //{return true}
    for(i=0;i<limitquestMBTI;i++)
    {
      if(undefined != this.state.MBTIs[i] && this.state.checked[i]==="")
      {
        alert("请检查题目："+(i))
        return false;
      }
    }
  }
  result()
  {
    if(false==this.check())
    {
      return
    }
    var testMBTIs = this.state.MBTIs
    var ret = new Array();
    ret["e"]=ret["i"]=ret["n"]=ret["s"]=ret["t"]=ret["f"]=ret["j"]=ret["p"]=ret[""]=0
    for(i=0;i<testMBTIs.length;i++)
    {
      var _p = testMBTIs[i].sel;
      ret[_p] = ret[_p] + 1; 
    }
    //console.log(ret);
    var person_ret=""
    if(ret["e"]>=ret["i"])
    {
      person_ret="E"
    }
    else{
      person_ret="I"
    }

    if(ret["n"]>=ret["s"])
    {
      person_ret=person_ret+"N"
    }
    else{
      person_ret=person_ret+"S"
    }

    if(ret["t"]>=ret["f"])
    {
      person_ret=person_ret+"T"
    }
    else{
      person_ret=person_ret+"F"
    }

    if(ret["j"]>=ret["p"])
    {
      person_ret=person_ret+"J"
    }
    else{
      person_ret=person_ret+"P"
    }

    //console.log(resulttable,person_ret)
    this.setState({
      ret:"您是:"+person_ret+" "+MBTIresulttable[person_ret],
      percent:"E:"+ret["e"]+" I:"+ret["i"]+" S:"+ret["s"]+" N:"+ret["n"]+" T:"+ret["t"]+" F:"+ret["f"]+" J:"+ret["j"]+" P:"+ret["p"],
      extrainfo:MBTIresultinfo,
      retdetail:resulttabledetail[person_ret],
      closetest:true,
      pie:ret,
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
              onPress={()=>WechatShare.snapshot(this.refs["MBTIlocation"],"MBTI测试结果")}  
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['MBTIlocation'], "MBTI测试结果",this)}}
                                  
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
              title={RouteConfig["MBTIModule"].titlename}
              renderIcon={() => RouteConfig["PsychTestPage"].icon} 
              onPress={()=>this.result()}  
              titleStyle={StyleConfig.menufont}>  
          </TabNavigator.Item>  
      </TabNavigator>   
      )
    }
  }

  createpie()
  {
    if (this.state.ret != "") {
      var ret = this.state.pie
      console.log(ret)
      return (
        <View style={[{ textAlign: 'center', alignItems: 'center' }]}>
          <Svg width={300} height={300} >
            <VictoryPie
              colorScale={["#ED065C", "#EDC806","#ED069F",  "#D0ED06", "#ED5306", "#06ED97","#C606ED",  "#06EDE8"]}
              data={[
                { x: 1, y: ret["e"] + 1, label: 'E' },
                { x: 2, y: ret["i"] + 1, label: 'I' },
                { x: 3, y: ret["n"] + 1, label: 'N' },
                { x: 4, y: ret["s"] + 1, label: 'S' },
                { x: 5, y: ret["f"] + 1, label: 'F' },
                { x: 6, y: ret["t"] + 1, label: 'T' },
                { x: 7, y: ret["j"] + 1, label: 'J' },
                { x: 8, y: ret["p"] + 1, label: 'P' },
              ]}
              standalone={false}
              width={300} height={300}
            /></Svg></View>
      )
    }
  }


  keyExtractor = (item, index) => index.toString();
  render()
  {
    var sqr = 0

    return (
      <View style={styles.container}>
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='MBTIlocation'>
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["MBTIModule"].titlename}</Text>
      <FlatList

            data={this.state.MBTIs}
            extraData={this.state}
            keyExtractor={this.keyExtractor}
						renderItem={({ item }) => (
              <View id={item.id}>
              <Text style={styles.list}></Text>
              <Text style={styles.list}>第{item.index+1}题：{item.q}</Text>
              <Text style={styles.list}>{item.a}</Text>
              <Text style={styles.list}>{item.b}</Text>
              <View style = {styles.dateContainer}>
              <CheckBox containerStyle={styles.CheckBox} title = {"A"} checked={this.state.checked[Number(item.key+1)]==item.ret_a}  onPress={()=>this.updateIndex(Number(item.key+1),item.ret_a)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {"B"} checked={this.state.checked[Number(item.key+1)]==item.ret_b}  onPress={()=>this.updateIndex(Number(item.key+1),item.ret_b)}/>
              {this.checkrender_C(item)}
              {this.checkrender_D(item)}         
              </View>
              <Text></Text>
              </View>
            )}
        />
        
        
        <View>
        <Text style={styles.list}></Text>
        {this.createpie()}
        <Text style={styles.list}></Text>
        <Text style={styles.list}>{this.state.ret}</Text>
        <Text style={styles.list}></Text>
        <Text style={styles.list}></Text>
        
        <FlatList  
              data={this.state.retdetail}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              />
        <Text style={styles.list}></Text>
        <Text style={styles.list}></Text>
        <FlatList  
              data={this.state.extrainfo}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              />
              <Text style={styles.list}></Text>
        <Text style={styles.list}></Text>
        <Text style={styles.list}></Text>
        <Text style={styles.list}></Text>
        <Text style={styles.list}></Text>
        <Text style={styles.list}></Text>
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
  CheckBox:{
    borderColor:'#ffffff',
    backgroundColor:'#ffffff'
  },
  dateContainer: {
    justifyContent:'space-around',
    flexDirection: 'row',
    
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

module.exports=MBTIModule;  