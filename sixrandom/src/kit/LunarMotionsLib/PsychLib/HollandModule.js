

import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import ScreenConfig from '../../../config/ScreenConfig';
import {StyleConfig,FontStyleConfig} from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
var Hollands=Array();
Hollands[1]={
  "key":"1",
  "q":"我喜欢把一件事情做完后再做另一件事",
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
Hollands[2]={
  "key":"2",
  "q":"在工作中我喜欢独自筹划，不愿受别人干涉",
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
Hollands[3]={
  "key":"3",
  "q":"在集体讨论中，我往往保持沉默",
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
Hollands[4]={
  "key":"4",
  "q":"我喜欢做戏剧、音乐、歌舞、新闻采访等方面的工作",
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
Hollands[5]={
  "key":"5",
  "q":"每次写信我都一挥而就，不再重复",
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
Hollands[6]={
  "key":"6",
  "q":"我经常不停地思考某一问题，直到想出正确的答案",
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
Hollands[7]={
  "key":"7",
  "q":"对别人借我的和我借别人的东西，我都能记得很清楚",
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
Hollands[8]={
  "key":"8",
  "q":"我喜欢抽象思维的工作，不喜欢动手的工作",
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
Hollands[9]={
  "key":"9",
  "q":"我喜欢成为人们注意的焦点",
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
Hollands[10]={
  "key":"10",
  "q":"我喜欢不时地夸耀一下自己取得的好成就",
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
Hollands[11]={
  "key":"11",
  "q":"我曾经渴望有机会参加探险",
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
Hollands[12]={
  "key":"12",
  "q":"当我一个独处时，会感到更愉快",
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
Hollands[13]={
  "key":"13",
  "q":"我喜欢在做事情前，对此事情做出细致的安排",
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
Hollands[14]={
  "key":"14",
  "q":"我讨厌修理自行车、电器一类的工作",
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
Hollands[15]={
  "key":"15",
  "q":"我喜欢参加各种各样的聚会",
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
Hollands[16]={
  "key":"16",
  "q":"我愿意从事虽然工资少、但是比较稳定的职业",
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
Hollands[17]={
  "key":"17",
  "q":"音乐能使我陶醉",
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
Hollands[18]={
  "key":"18",
  "q":"我办事很少思前想后",
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
Hollands[19]={
  "key":"19",
  "q":"我喜欢经常请示上级",
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
Hollands[20]={
  "key":"20",
  "q":"我喜欢需要运用智力的游戏",
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
Hollands[21]={
  "key":"21",
  "q":"我很难做那种需要持续集中注意力的工作",
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
Hollands[22]={
  "key":"22",
  "q":"我喜欢亲自动手制作一些东西，从中得到乐趣",
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
Hollands[23]={
  "key":"23",
  "q":"我的动手能力很差",
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
Hollands[24]={
  "key":"24",
  "q":"和不熟悉的人交谈对我来说毫不困难",
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
Hollands[25]={
  "key":"25",
  "q":"和别人谈判时，我总是很容易放弃自己的观点",
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
Hollands[26]={
  "key":"26",
  "q":"我很容易结识同性别朋友",
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
Hollands[27]={
  "key":"27",
  "q":"对于社会问题，我通常持中庸的态度",
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
Hollands[28]={
  "key":"28",
  "q":"当我开始做一件事情后，即使碰到再多的困难，我也要执著地干下去",
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
Hollands[29]={
  "key":"29",
  "q":"我是一个沉静而不易动感情的人",
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
Hollands[30]={
  "key":"30",
  "q":"当我工作时，我喜欢避免干扰",
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
Hollands[31]={
  "key":"31",
  "q":"我的理想是当一名科学家",
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
Hollands[32]={
  "key":"32",
  "q":"与言情小说相比，我更喜欢推理小说",
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
Hollands[33]={
  "key":"33",
  "q":"有些人太霸道，有时明明知道他们是对的，也要和他们对着干",
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
Hollands[34]={
  "key":"34",
  "q":"我爱幻想",
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
Hollands[35]={
  "key":"35",
  "q":"我总是主动地向别人提出自己的建议",
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
Hollands[36]={
  "key":"36",
  "q":"我喜欢使用榔头一类的工具",
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
Hollands[37]={
  "key":"37",
  "q":"我乐于解除别人的痛苦",
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
Hollands[38]={
  "key":"38",
  "q":"我更喜欢自己下了赌注的比赛或游戏",
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
Hollands[39]={
  "key":"39",
  "q":"我喜欢按部就班地完成要做的工作",
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
Hollands[40]={
  "key":"40",
  "q":"我希望能经常换不同的工作来做",
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
Hollands[41]={
  "key":"41",
  "q":"我总留有充裕的时间去赴约会",
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
Hollands[42]={
  "key":"42",
  "q":"我喜欢阅读自然科学方面的书籍和杂志",
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
Hollands[43]={
  "key":"43",
  "q":"如果掌握一门手艺并能以此为生，我会感到非常满意",
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
Hollands[44]={
  "key":"44",
  "q":"我曾渴望当一名汽车司机",
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
Hollands[45]={
  "key":"45",
  "q":"听别人谈“家中被盗”一类的事，很难引起我的同情",
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
Hollands[46]={
  "key":"46",
  "q":"如果待遇相同，我宁愿当商品推销员，而不愿当图书管理员",
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
Hollands[47]={
  "key":"47",
  "q":"我讨厌跟各类机械打交道",
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
Hollands[48]={
  "key":"48",
  "q":"我小时候经常把玩具拆开，把里面看个究竟",
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
Hollands[49]={
  "key":"49",
  "q":"当接受新任务后，我喜欢以自己的独特方法去完成它",
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
Hollands[50]={
  "key":"50",
  "q":"我有文艺方面的天赋",
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
Hollands[51]={
  "key":"51",
  "q":"我喜欢把一切安排得整整齐齐、井井有条",
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
Hollands[52]={
  "key":"52",
  "q":"我喜欢作一名教师",
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
Hollands[53]={
  "key":"53",
  "q":"和一群人在一起的时候，我总想不出恰当的话来说",
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
Hollands[54]={
  "key":"54",
  "q":"看情感影片时，我常禁不住眼圈红润",
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
Hollands[55]={
  "key":"55",
  "q":"我讨厌学数学",
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
Hollands[56]={
  "key":"56",
  "q":"在实验室里独自做实验会令我寂寞难耐",
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
Hollands[57]={
  "key":"57",
  "q":"对于急躁、爱发脾气的人，我仍能以礼相待",
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
Hollands[58]={
  "key":"58",
  "q":"遇到难解答的问题时，我常常放弃",
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
Hollands[59]={
  "key":"59",
  "q":"大家公认我是一名勤劳踏实的、愿为大家服务的人",
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
Hollands[60]={
  "key":"60",
  "q":"我喜欢在人事部门工作",
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

Hollandresultinfo=
[
"Holland主要指标解释","",
"R 现实型 工人，工程师，技术人员","",
"I 研究型 科研人员，专家","",
"S 社会型 教师，牧师，辅导教员","",
"A 艺术型 诗人，艺术家","",
"E 企业家 推销员，政治家，企业家","",
"C 传统型 出纳，会计，秘书","",
]
Hollandresulttable = new Array();
Hollandresulttable["R"]="R 现实，具有顺从、坦率、谦虚、自然、坚毅、实际、有礼、害羞、稳健、节俭的特征，表现为\r1、喜爱实用性的职业或情境，以从事所喜好的活动，避免社会性的职业或情境\r2、用具体实际的能力解决工作及其他方面的问题，较缺乏人际关系方面的能力。\r3、重视具体的事物，如金钱，权力、地位等。\r"
Hollandresulttable["I"]="I 研究，具有分析、谨慎、批评、好奇、独立、聪明、内向、条理、谦逊、精确、理发、保守的特征，表现为\r1、喜爱研究性的职业或情境，避免企业性的职业或情境\r2、用研究的能力解决工作及其他方面的问题，即自觉、好学、自信，重视科学，但缺乏领导方面的才能。\r"
Hollandresulttable["A"]="S 社会，具有复杂、想象、冲动、独立、直觉、无秩序、情绪化、理想化、不顺从、有创意、富有表情、不重实际的特征，表现为\r1、喜爱艺术性的职业或情境，避免传统性的职业或情境\r2、富有表达能力和直觉、独立、具创意、不顺从（包括表演、写作、语言），并重视审美的领域。\r"
Hollandresulttable["S"]="A 艺术，具有合作、友善、慷慨、助人、仁慈、负责、圆滑、善社交、善解人意、说服他人、理想主义等特征，表现为\r1、喜爱社会型的职业或情境，避免实用性的职业或情境，并以社交方面的能力解决工作及其他方面的问题，但缺乏机械能力与科学能力\r2、喜欢帮助别人、了解别人，有教导别人的能力，且重视社会与伦理的活动与问题。\r"
Hollandresulttable["E"]="E 企业，具有冒险、野心、独断、冲动、乐观、自信、追求享受、精力充沛、善于社交、获取注意、知名度等特征，表现为\r1、喜欢企业性质的的职业或环境，避免研究性质的职业或情境，会以企业方面的能力解决工作或其他方面的问题能力\r2、有冲动、自信、善社交、知名度高、有领导与语言能力，缺乏科学能力，但重视政治与经济上的成就。\r"
Hollandresulttable["C"]="C 传统，具有顺从、谨慎、保守、自控、服从、规律、坚毅、实际稳重、有效率、但缺乏想象力等特征，表现为\r1、喜欢传统性质的的职业或环境，避免艺术性质的职业或情境，会以传统的能力解决工作或其他方面的问题\r2、喜欢顺从、规律、有文书与数字能力，并重视商业与经济上的成就。\r"

Hollandcareer = new Array()
Hollandcareer["RIA"]="牙科技术员、陶工、 建筑设计员、模型工、细木工、制作链条人员。"
Hollandcareer["RIS"]="厨师、林务员、跳水员、潜水员、染色员、电器修理、眼镜制作、电工、纺织机器装配工、服务员、装玻璃工人、发电厂工人、焊接工。"
Hollandcareer["RIE"]="建筑和桥梁工程、环境工程、航空工程、公路工程、电力工程、信号工程、电话工程、一般机械工程、自动工程、矿业工程、海洋工程、交通工程技术人员、制图员、家政经济人员、计量员、农民、农场工人、农业机械操作、清洁工、无线电修理、汽车修理、手表修理、管工、线路装配工、工具仓库管理员。 "
Hollandcareer["RIC"]="船上工作人员、接待员、杂志保管员、牙医助手、制帽工、磨坊工、石匠、机器制造、机车(火车头)制造、农业机器装配、汽车装配工、缝纫机装配工、钟表装配和检验、电动器具装配、鞋匠、锁匠、货物检验员、电梯机修工、装配工、托儿所所长、钢琴调音员、印刷工、建筑 钢铁工作、卡车司机。"
Hollandcareer["RAI"]="手工雕刻、玻璃雕刻、制作模型人员、家具木工、制作皮革品、手工绣花、手工钩针纺织、排字工作、印刷工作、图画雕刻、装订工。"
Hollandcareer["RSE"]="消防员、交通巡警、警察、门卫、理发师、房间清洁工、屠夫、锻工、开凿工人、管道安装工、出租汽车驾驶员、货物搬运工、送报员、勘探员、 娱乐场所的服务员、起卸机操作工、灭害虫者、电梯操作工、厨房助手。"
Hollandcareer["RSI"]="纺织工、编织工、农业学校教师、某些职业课程教师(诸如艺术、商业、技术、工艺课程)、雨衣上胶工。"
Hollandcareer["REC"]="抄水表员、保姆、实验室动物饲养员、动物管理员。 "
Hollandcareer["REI"]="轮船船长、航海领航员、大副、试管实验员。"
Hollandcareer["RES"]="旅馆服务员、家畜饲养员、渔民、渔网修补工、水手长、收割机操作工、搬运行李工人、公园服务员、救 生员、登山导游、火车工程技术员、建筑工作、铺轨工人。"
Hollandcareer["RCI"]="测量员、勘测员、仪表操作者、农业工程技术、化学工程技师、民用工程技师、石油工程技师、资料室管理员、探矿工、煅烧工、烧窖工、矿工、炮手、保养工、磨床工、取样工、样品检验员、纺纱工、漂洗工、电焊工、锯木工、刨床工、制帽工、手工缝纫工、油漆工、 染色工、按摩工、木匠、农民建筑工作、电影放映员、勘测员助手。"
Hollandcareer["RCS"]="公共汽车驾驶员、一等水手、游泳池服务员、裁缝、建筑工作、石匠、烟囱修建工、混凝土工、电话修理工、爆炸手、 邮递员、矿工、裱糊工人、纺纱工。"
Hollandcareer["RCE"]="打井工、吊车驾驶员、农场工人、邮件分类员、铲车司机、拖拉机司机。"
Hollandcareer["IAS"]="普通经济学家、农场经济学家、财政经济学家、国际贸易经济学家、实验心理学家、工程心理学家、心理学家、哲学家、内科医生、数学家。"
Hollandcareer["IAR"]="人类学家、天文学家、化学家、物理学家、医学病理、动物标本剥制者、化石修复者、艺术品管理者。"
Hollandcareer["ISE"]="营养学家、饮食顾问、火灾检查员、邮政服务检查员。"
Hollandcareer["ISC"]="侦察员、电视播音室修理员、电视修理服务员、验尸室人员、编目录者、医学实验定技师、调查研究者。"
Hollandcareer["ISR"]="水生生物学者，昆虫学者、微生物学家、配镜师、矫正视力者、细菌学家、牙科医生、骨科医生。"
Hollandcareer["ISA"]="实验心理学家、普通心理学家、发展心理学家、教育心理学家、社会心理学家、临床心理学家、目标学家、皮肤病学家、精神病学家、妇产科医师、眼科医生、五官科医生、医学实验室技术专家、民航医务人员、护士。"
Hollandcareer["IES"]="细菌学家、生理学家、化学专家、地质专家、地理物理学专家、纺织技术专家、医院药剂师、工业药剂师、药房营业员。"
Hollandcareer["IEC"]="档案保管员、保险统计员。"
Hollandcareer["ICR"]="质量检验技术员、地质学技师、工程师、法官、图书馆技术辅导员、计算机操作员、医院听诊员、家禽检查员。"
Hollandcareer["IRA"]="地理学家、地质学家、声学物理学家、矿物学家、古生物学家、石油学家、地震学家、声学物理学家、气象学家、原子和分子物理学家、电学和磁学物理学家、设计审核员、人口统计学家、数学统计学家、外科医生、城市规划家、气象员。"
Hollandcareer["IRS"]="流体物理学家、物理海洋学家、等离子体物理学家、农业科学家、动物学家、食品科学家、园艺学家、植物学家、细菌学家、解剖学家、动物病理学家、作物病理学家、药物学家、生物化学家、生物物理学家、细胞生物学家、临床化学家、遗传学家、分子生物学家、质量控制工程师、地理学家、兽医、放射性治疗技师。"
Hollandcareer["IRE"]="化验员、化学工程师、纺织工程师、食品技师、渔业技术专家、材料和测试工程师、   电气工程师、土木工程师、航空工程师、行政官员、冶金专家、原子核工程师、陶瓷工程师、地质工程师、电力工程量、口腔科医生、牙科医生。"
Hollandcareer["IRC"]="飞机领航员、飞行员、物理实验室技师、文献检查员、农业技术专家、生物技师、动植物技术专家、油管检查员、工商业规划者、矿藏安全检查员、纺织品检验员、照相机修理者、工程技术员、编计算程序者、工具设计者、仪器维修工。"
Hollandcareer["CRI"]="簿记员、会计、记时员、铸造机操作工、打字员、按键操作工、复印机操作工。"
Hollandcareer["CRS"]="仓库保管员、档案管理员、缝纫工、讲述员、收款人。"
Hollandcareer["CRE"]="标价员、实验室工作者、广告管理员、自动打字机操作员、电动机装配工、缝纫机操作工。"
Hollandcareer["CIS"]="记账员、顾客服务员、报刊发行员、土地测量员、保险公司职员、会计师、估价员、邮政检查员、外贸检查员。"
Hollandcareer["CIE"]="打字员、统计员、支票记录员、订货员、校对员、办公室工作人员。"
Hollandcareer["CIR"]="校对员、工程职员、海底电报员、检修计划员、发扳员。"
Hollandcareer["CSE"]="接待员、通讯员、电话接线员、卖票员、旅馆服务员、私人职员、商学教师、旅游办事员。"
Hollandcareer["CSR"]="运货代理商、铁路职员、交通检查员、办公室通信员、薄记员、出纳员、银行财务职员。"
Hollandcareer["CSA"]="秘书、图书管理员、办公室办事员。"
Hollandcareer["CER"]="邮递员、数据处理员、办公室办事员。"
Hollandcareer["CEI"]="推销员、经济分析家。"
Hollandcareer["CES"]="银行会计、记账员、法人秘书、速记员、法院报告人。"
Hollandcareer["ECI"]="银行行长、审计员、信用管理员、地产管理员、商业管理员。"
Hollandcareer["ECS"]="信用办事员、保险人员、各类进货员、海关服务经理、售货员，购买员、会计。"
Hollandcareer["ERI"]="建筑物管理员、工业工程师、护士长、农场管理员、农业经营管理人员。"
Hollandcareer["ERS"]="仓库管理员、房屋管理员、货栈监督管理员。"
Hollandcareer["ERC"]="邮政局长、渔船船长、机械操作领班、木工领班、瓦工领班、驾驶员领班。"
Hollandcareer["EIR"]="科学、技术和有关周期出版物的管理员。"
Hollandcareer["EIC"]="专利代理人、鉴定人、运输服务检查员、安全检查员、废品收购人员。"
Hollandcareer["EIS"]="警官、侦察员、交通检验员、安全咨询员、合同管理者、商人。"
Hollandcareer["EAS"]="法官、律师、公证人。"
Hollandcareer["EAR"]="展览室管理员、舞台管理员、播音员、训兽员。"
Hollandcareer["ESC"]="理发师、裁判员、政府行政管理员、财政管理员、工程管理员、售货员、职业病防治、商业经理、办公室主任、人事负责人、调度员。"
Hollandcareer["ESR"]="家具售货员、书店售货员、公共汽车的驾驶员、日用品售货员、护士长、自然科学和工程的行政领导。"
Hollandcareer["ESI"]="博物馆管理员、图书馆管理员、古迹管理员、饮食业经理、地区安全服务管理员、技术服务咨询者、超级市场管理员、零售商品店店员、批发商、出租汽车服务站调度。"
Hollandcareer["ESA"]="博物馆馆长、报刊管理员、音乐器材售货员、广告商售画营业员、导游、（轮船或班机上的）事务长、飞机上的服务员、船员、法官、律师。"
Hollandcareer["ASE"]="戏剧导演、舞蹈教师、广告撰稿人，报刊、专栏作者、记者、演员、英语翻译。"
Hollandcareer["ASI"]="音乐教师、乐器教师、美术教师、管弦乐指挥，合唱队指挥、歌星、演奏家、哲学家、作家、广告经理、时装模特。"
Hollandcareer["AER"]="新闻摄影师、电视摄影师、艺术指导、录音指导、丑角演员、魔术师、木偶戏演员、骑士、跳水员。"
Hollandcareer["AEI"]="音乐指挥、舞台指导、电影导演。"
Hollandcareer["AES"]="流行歌手、舞蹈演员、电影导演、广播节目主持人、舞蹈教师、口技表演者、喜剧演员、模特。"
Hollandcareer["AIS"]="画家、剧作家、编辑、评论家、时装艺术大师、新闻摄影师、男演员、文学作者。"
Hollandcareer["AIE"]="花匠、皮衣设计师、工业产品设计师、剪影艺术家、复制雕刻品大师。"
Hollandcareer["AIR"]="建筑师、画家、摄影师、绘图员、雕刻家、环境美化工、包装设计师、绣花工、陶器设计师、漫画工。"
Hollandcareer["SEC"]="社会活动家、退伍军人服务官员、工商会事务代表、教育咨询者、宿舍管理员、旅馆经理、饮食服务管理员。"
Hollandcareer["SER"]="体育教练、游泳指导。"
Hollandcareer["SEI"]="大学校长、学院院长、医院行政管理员、历史学家、家政经济学家、职业学校教师、资料员。"
Hollandcareer["SEA"]="娱乐活动管理员、国外服务办事员、社会服务助理、一般咨询者、宗教教育工作者。"
Hollandcareer["SCE"]="部长助理、福利机构职员、生产协调人、环境卫生管理人员、戏院经理、餐馆经理、售票员。"
Hollandcareer["SRI"]="外科医师助手、医院服务员。"
Hollandcareer["SRE"]="体育教师、职业病治疗者、体育教练、专业运动员、房管员、儿童家庭教师、警察、引座员、传达员、保姆。"
Hollandcareer["SRC"]="护理员、护理助理、医院勤杂工、理发师、学校儿童服务人员。"
Hollandcareer["SIA"]="社会学家、心理咨询者、学校心理学家、政治科学家、大学或学院的系主任、大学或学院的教育学教师、大学农业教师、大学法律教师、大学工程和建筑课程的教师、大学数学、医学、物理教师大学社会科学、生命科学教师、 研究生助教、成人教育教师。"
Hollandcareer["SIE"]="营养学家、饮食学家、海关检查员、安全检查员、税务稽查员、校长。"
Hollandcareer["SIC"]="描图员、兽医助手、诊所助理、体检检查员、娱乐指导者、监督缓刑犯的工作者、咨询人员、社会科学教师。"
Hollandcareer["SIR"]="理疗员、救护队工作人员、手足病医生、职业病治疗助手。"


class HollandModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      Hollands:[],
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var ret = new Array();
    ret["c"]=ret["r"]=ret["i"]=ret["e"]=ret["s"]=ret["a"]=ret[""]=0
    var hollandrandom = new Array();
    var runtimeHollands = Hollands.concat()
    while(runtimeHollands.length>0)
    {
      var p = parseInt(Math.random()*runtimeHollands.length)
      if(undefined!=runtimeHollands[p])
      {hollandrandom.push(runtimeHollands[p]);}
      runtimeHollands.splice(p,1)
    }
    //console.log(hollandrandom)
    var checked = new Array();
    for(i=0;i<hollandrandom.length;i++)
    {
      //checked[0]=undefined
checked[i]=""
      hollandrandom[i].index=i
      hollandrandom[i].key=i
    }
    //console.log(hollandrandom)
    this.setState ({
      checked:checked,
      Hollands:hollandrandom,
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
      closetest:false,
    })

  }
  check(){
    //if(__DEV__)
    //{return true}
    for(i=0;i<this.state.Hollands.length;i++)
    {
      if(undefined != this.state.Hollands[i] && this.state.checked[i]==="")
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
      
    title: RouteConfig["HollandModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.Hollands[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<Hollands.length;i++)
      {
        //console.log(Hollands[i].sel)
      }
    }

  }
  checkrender_C(item)
  {
    if(""!=item.ret_c)
    {return(
      <CheckBox containerStyle={styles.CheckBox} title = {"C"} checked={this.state.checked[Number(item.key)]==item.ret_c}  onPress={()=>this.updateIndex(item.key,item.ret_c)}/>
    )}
    return null
  }
  checkrender_D(item)
  {
    if(""!=item.ret_d)
    {return(
      <CheckBox containerStyle={styles.CheckBox} title = {"D"} checked={this.state.checked[Number(item.key)]==item.ret_d}  onPress={()=>this.updateIndex(item.key,item.ret_d)}/>
    )}
    return null
  }
  result()
  {
    if(false==this.check())
    {
      return
    }
    var testHollands = this.state.Hollands
    var ret = new Array();
    ret["r"]=ret["i"]=ret["a"]=ret["s"]=ret["e"]=ret["c"]=0
    for(i=0;i<testHollands.length;i++)
    {
      var _p = testHollands[i].sel;
      if(''!=_p)
      {ret[_p] = ret[_p] + 1; }
      
    }
    var lit1 = "";
    var detailinfo = new Array()
    for(var x=0;x<3;x++)
    {
      var max = 0
      var maxlit = ""
      for(var j in ret) {
        if(ret[j]>=max)
        {
          max = ret[j]
          maxlit = j
        }
      }
      detailinfo.push(Hollandresulttable[maxlit.toUpperCase()])
      delete ret[maxlit]
      lit1 = lit1+maxlit;
    }
  
  

    console.log(lit1)
   

    //console.log(Hollandresulttable,person_ret)
    this.setState({
      ret:"您是:"+lit1.toUpperCase()+"类型为主\r"+"职业偏向:"+Hollandcareer[lit1.toUpperCase()],
      percent:"R:"+ret["r"]+" I:"+ret["i"]+" S:"+ret["s"]+" C:"+ret["c"]+" A:"+ret["a"]+" E:"+ret["e"],
      extrainfo:Hollandresultinfo,
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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['Hollandlocation'], "霍兰德职业性格测试结果",this)}}                
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
              title={RouteConfig["HollandModule"].titlename}
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
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='Hollandlocation'>
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["HollandModule"].titlename}</Text>
      <FlatList

            data={this.state.Hollands}
            extraData={this.state}
            keyExtractor={this.keyExtractor}
						renderItem={({ item }) => (
              <View id={item.id}>
              <Text style={styles.list}></Text>
              <Text style={styles.list}>第{item.index+1}题:{item.q}</Text>
              <Text style={styles.list}>{item.a}</Text>
              <Text style={styles.list}>{item.b}</Text>
              <View style = {styles.dateContainer}>
              <CheckBox containerStyle={styles.CheckBox} title = {"A"} checked={this.state.checked[Number(item.key)]==item.ret_a}  onPress={()=>this.updateIndex(Number(item.key),item.ret_a)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {"B"} checked={this.state.checked[Number(item.key)]==item.ret_b}  onPress={()=>this.updateIndex(Number(item.key),item.ret_b)}/>
              {this.checkrender_C(item)}
              {this.checkrender_D(item)}         
              </View>
              <Text></Text>
              </View>
            )}
        />
        
        
        <View>
        <Text style={styles.list}></Text>
        <Text style={styles.list}>{this.state.ret}</Text>
        <Text style={styles.list}></Text>
        {/*}
        <Text style={styles.list}></Text>
        <Text style={styles.list}></Text>
        <Text style={styles.list}>{this.state.percent}</Text>
        <Text style={styles.list}></Text>
        {*/}
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

module.exports=HollandModule;  