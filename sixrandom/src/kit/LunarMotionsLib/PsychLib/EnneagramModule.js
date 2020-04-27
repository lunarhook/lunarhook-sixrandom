

import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import ScreenConfig from '../../../config/ScreenConfig';
import StyleConfig from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
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
var Enneagram=Array();
Enneagram[0]={
  "key":"0",
  "q":"你倾向于",
  "a":"A 我浪漫并富于幻想。",
  "b":"B 我很实际并实事求是。  ",
  "c":"",
  "d":"",
  "ret_a":"4",
  "ret_b":"6",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[1]={
  "key":"1",
  "q":"你倾向于",
  "a":"A 我倾向于接受冲突。",
  "b":"B 我倾向于避免冲突",
  "c":"",
  "d":"",
  "ret_a":"8",
  "ret_b":"9",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[2]={
  "key":"2",
  "q":"你倾向于",
  "a":"A 我一般是老练的、有魅力的以及有上进心的",
  "b":"B 我一般是直率的、刻板的以及空想的。 ",
  "c":"",
  "d":"",
  "ret_a":"3",
  "ret_b":"4",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[3]={
  "key":"3",
  "q":"你倾向于",
  "a":"A 我倾向于集中于某事物并紧张",
  "b":"B 我倾向于自然的并喜欢开玩笑",
  "c":"",
  "d":"",
  "ret_a":"5",
  "ret_b":"7",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[4]={
  "key":"4",
  "q":"你倾向于",
  "a":"A 我是待人友好的并愿意结交新的朋友。",
  "b":"B 我是独处的人，不太愿意与人交往。",
  "c":"",
  "d":"",
  "ret_a":"2",
  "ret_b":"4",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[5]={
  "key":"5",
  "q":"你倾向于",
  "a":"A 我很难放松并停止思考潜在的问题。",
  "b":"B 潜在的问题不会影响我的工作。",
  "c":"",
  "d":"",
  "ret_a":"6",
  "ret_b":"9",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[6]={
  "key":"6",
  "q":"你倾向于",
  "a":"A 我是一个很好的“聪明”的生存者。",
  "b":"B 我是一个很好的“高尚”的理想主义者。 ",
  "c":"",
  "d":"",
  "ret_a":"8",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[7]={
  "key":"7",
  "q":"你倾向于",
  "a":"A 我需要给别人爱。 ",
  "b":"B 我愿意与别人保持一定的距离。",
  "c":"",
  "d":"",
  "ret_a":"4",
  "ret_b":"8",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[8]={
  "key":"8",
  "q":"你倾向于",
  "a":"A 当给我一项新任务时，我通常问自己它是否对我有用。",
  "b":"B 当给我一项新任务时，我通常问自己它是否有趣。",
  "c":"",
  "d":"",
  "ret_a":"3",
  "ret_b":"7",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[9]={
  "key":"9",
  "q":"你倾向于",
  "a":"A 我倾向于关注我自己",
  "b":"B 我倾向于关注他人",
  "c":"",
  "d":"",
  "ret_a":"4",
  "ret_b":"9",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}

Enneagram[10]={
  "key":"10",
  "q":"你倾向于",
  "a":"A 别人依赖于我的见识与知识",
  "b":"B 别人依赖于我的力量与决策",
  "c":"",
  "d":"",
  "ret_a":"5",
  "ret_b":"8",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[11]={
  "key":"11",
  "q":"你倾向于",
  "a":"A 我给人的印象是十分不自信。",
  "b":"B 我给人的印象是十分自信。",
  "c":"",
  "d":"",
  "ret_a":"6",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[12]={
  "key":"12",
  "q":"你倾向于",
  "a":"A 我更加注重关系。 ",
  "b":"B 我更加注重目的。",
  "c":"",
  "d":"",
  "ret_a":"2",
  "ret_b":"3",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[13]={
  "key":"13",
  "q":"你倾向于",
  "a":"A 不考虑其它选择而做某一确定的事对我来说是很困难的。",
  "b":"B 放松更具灵活性对我来说是很困难的。",
  "c":"",
  "d":"",
  "ret_a":"5",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[14]={
  "key":"14",
  "q":"你倾向于",
  "a":"A 我倾向于犹豫与拖延。",
  "b":"B 我倾向于大胆与果断。 ",
  "c":"",
  "d":"",
  "ret_a":"6",
  "ret_b":"8",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[15]={
  "key":"15",
  "q":"你倾向于",
  "a":"A 我不愿意别人给我带来麻烦。",
  "b":"B 我希望别人依赖我，让我帮忙解决麻烦。",
  "c":"",
  "d":"",
  "ret_a":"9",
  "ret_b":"2",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[16]={
  "key":"16",
  "q":"你倾向于",
  "a":"A 通常我会在我做事情之前需要克服我的感情。",
  "b":"B 通常我会为了完成工作将感情置于一边。",
  "c":"",
  "d":"",
  "ret_a":"4",
  "ret_b":"3",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[17]={
  "key":"17",
  "q":"你倾向于",
  "a":"A 我不能大胆地表白我自己。",
  "b":"B 我能大胆地说出别人想说但不敢说的话。",
  "c":"",
  "d":"",
  "ret_a":"4",
  "ret_b":"7",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[18]={
  "key":"18",
  "q":"你倾向于",
  "a":"A 一般来说，我是敢于冒险。",
  "b":"B 一般来说，我是讲求方法并且很谨慎。",
  "c":"",
  "d":"",
  "ret_a":"7",
  "ret_b":"6",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[19]={
  "key":"19",
  "q":"你倾向于",
  "a":"A 我倾向于成为帮助、给予型的人，喜欢与他人在一起。",
  "b":"B 我倾向于成为严肃、缄默的人，喜欢讨论问题。",
  "c":"",
  "d":"",
  "ret_a":"2",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[20]={
  "key":"20",
  "q":"你倾向于",
  "a":"A 我常常感到自己需要成为顶梁柱。",
  "b":"B 我常常感到自己需要做得十全十美。",
  "c":"",
  "d":"",
  "ret_a":"8",
  "ret_b":"3",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}

Enneagram[21]={
  "key":"21",
  "q":"你倾向于",
  "a":"A 我主要感兴趣于问难题并保持独立性。",
  "b":"B 我主要感兴趣于保持心理的稳定与平静。  ",
  "c":"",
  "d":"",
  "ret_a":"5",
  "ret_b":"9",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[22]={
  "key":"22",
  "q":"你倾向于",
  "a":"A 我太顽固并持有怀疑的态度。 ",
  "b":"B 我太软心肠并多愁善感。",
  "c":"",
  "d":"",
  "ret_a":"6",
  "ret_b":"2",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[23]={
  "key":"23",
  "q":"你倾向于",
  "a":"A 我常常担心如果我放松警惕，别人就会欺骗我。",
  "b":"B 我常常担心我不能得到较好的东西。",
  "c":"",
  "d":"",
  "ret_a":"8",
  "ret_b":"7",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[24]={
  "key":"24",
  "q":"你倾向于",
  "a":"A 我习惯于表现得很冷淡而使别人生气。",
  "b":"B 我习惯于指使别人做事而使他们生气。",
  "c":"",
  "d":"",
  "ret_a":"4",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[25]={
  "key":"25",
  "q":"你倾向于",
  "a":"A 如果有太多的刺激和鼓舞，我会感到忧虑。",
  "b":"B 如果没有太多的刺激和鼓舞，我会感到忧虑。",
  "c":"",
  "d":"",
  "ret_a":"9",
  "ret_b":"7",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[26]={
  "key":"26",
  "q":"你倾向于",
  "a":"A 我不依靠别人并独立做事。",
  "b":"B 我要依靠我的朋友，并且他们知道他们可以依靠我。",
  "c":"",
  "d":"",
  "ret_a":"3",
  "ret_b":"6",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[27]={
  "key":"27",
  "q":"你倾向于",
  "a":"A 我倾向于情绪化并热衷于自己的想法。  ",
  "b":"B 我倾向于独立与专心。  ",
  "c":"",
  "d":"",
  "ret_a":"4",
  "ret_b":"5",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[28]={
  "key":"28",
  "q":"你倾向于",
  "a":"A 我喜欢向别人提出挑战，并且“使他们振奋起来”。",
  "b":"B 我喜欢安慰他人使他们冷静下来。 ",
  "c":"",
  "d":"",
  "ret_a":"8",
  "ret_b":"2",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[29]={
  "key":"29",
  "q":"你倾向于",
  "a":"A 我总的来说是个开朗的并喜欢交际的人。",
  "b":"A 我总的来说是个认真的并很能自律的人。",
  "c":"",
  "d":"",
  "ret_a":"7",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[30]={
  "key":"30",
  "q":"你倾向于",
  "a":"A 我希望能迎合别人－当我与别人距离很远，我感到不舒服。",
  "b":"B 我希望与众不同－当我不能看到别人与我的区别，我感到不舒服。",
  "c":"",
  "d":"",
  "ret_a":"9",
  "ret_b":"3",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}

Enneagram[31]={
  "key":"31",
  "q":"你倾向于",
  "a":"A 对我来说，追求个人的兴趣比舒适与安全更重要",
  "b":"B 对我来说，追求舒适与安全比个人的兴趣更重要。",
  "c":"",
  "d":"",
  "ret_a":"5",
  "ret_b":"6",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[32]={
  "key":"32",
  "q":"你倾向于",
  "a":"A 当与他人有冲突时，我很少会改变原先的态度。",
  "b":"B 当与他人有冲突时，我倾向于退缩。",
  "c":"",
  "d":"",
  "ret_a":"8",
  "ret_b":"4",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[33]={
  "key":"33",
  "q":"你倾向于",
  "a":"A 我很容易屈服并受他人摆布。",
  "b":"B 我不对别人作出让步，并对他们下达命令。 ",
  "c":"",
  "d":"",
  "ret_a":"9",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[34]={
  "key":"34",
  "q":"你倾向于",
  "a":"A 我很赏识自己的高昂的精神状态与深沉。 ",
  "b":"B 我很赏识自己深层的关心与热情。",
  "c":"",
  "d":"",
  "ret_a":"7",
  "ret_b":"8",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[35]={
  "key":"35",
  "q":"你倾向于",
  "a":"A 我并不在乎要给别人留下好的印象 ",
  "b":"B 我很想给别人留下好的印象 ",
  "c":"",
  "d":"",
  "ret_a":"5",
  "ret_b":"3",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[36]={
  "key":"36",
  "q":"你倾向于",
  "a":"A 我依赖我的想象与瞬间的灵感 ",
  "b":"B 我依赖我的毅力与常有的感觉",
  "c":"",
  "d":"",
  "ret_a":"4",
  "ret_b":"6",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[37]={
  "key":"37",
  "q":"你倾向于",
  "a":"A 基本上来说，我是很随和的、很可爱的",
  "b":"B 基本上来说，我是精力旺盛的、过分自信的",
  "c":"",
  "d":"",
  "ret_a":"9",
  "ret_b":"8",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[38]={
  "key":"38",
  "q":"你倾向于",
  "a":"A 我努力工作以求得到别人的接受与喜欢 ",
  "b":"B 得到别人的接受与喜欢对我来说并不重要   ",
  "c":"",
  "d":"",
  "ret_a":"3",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[39]={
  "key":"39",
  "q":"你倾向于",
  "a":"A 当别人给我压力时我变得更加退缩 ",
  "b":"B 当别人给我压力时我回变得更加自信",
  "c":"",
  "d":"",
  "ret_a":"5",
  "ret_b":"7",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}

Enneagram[40]={
  "key":"40",
  "q":"你倾向于",
  "a":"A 人们对我感兴趣是因为我很开朗、有吸引力、有趣 ",
  "b":"B 人们对我感兴趣是因为我很安静、不同寻常、深沉",
  "c":"",
  "d":"",
  "ret_a":"2",
  "ret_b":"4",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[41]={
  "key":"41",
  "q":"你倾向于",
  "a":"A 协调与认可对我很重要  ",
  "b":"B 职责与责任对我很重要   ",
  "c":"",
  "d":"",
  "ret_a":"9",
  "ret_b":"6",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[42]={
  "key":"42",
  "q":"你倾向于",
  "a":"A 我制定出重要的计划并作出承诺，以此来鼓励人们",
  "b":"B 我会指出不按照我的建议做所产生的后果，以此来鼓励人们 ",
  "c":"",
  "d":"",
  "ret_a":"8",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[43]={
  "key":"43",
  "q":"你倾向于",
  "a":"A 我很少表露出情绪 ",
  "b":"B 我经常表露出情绪",
  "c":"",
  "d":"",
  "ret_a":"5",
  "ret_b":"2",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[44]={
  "key":"44",
  "q":"你倾向于",
  "a":"A 我擅长于处理琐屑的事  ",
  "b":"B 我不擅长于处理琐屑的事",
  "c":"",
  "d":"",
  "ret_a":"3",
  "ret_b":"7",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[45]={
  "key":"45",
  "q":"你倾向于",
  "a":"A 我常常强调自己与绝大多数人的共同之处，尤其是与我的家庭共同。",
  "b":"B 我常常强调自己与绝大多数人的不同之处，尤其是与不同我的家庭。",
  "c":"",
  "d":"",
  "ret_a":"2",
  "ret_b":"4",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[46]={
  "key":"46",
  "q":"你倾向于",
  "a":"A 当场面变得热闹起来时，我倾向于站在一旁。",
  "b":"B 当场面变得热闹起来时，我倾向于加入其中。 ",
  "c":"",
  "d":"",
  "ret_a":"5",
  "ret_b":"7",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[47]={
  "key":"47",
  "q":"你倾向于",
  "a":"A 即使朋友不对，我也会支持他们。",
  "b":"B 我不想为了友情对正确的事情作妥协。",
  "c":"",
  "d":"",
  "ret_a":"6",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[48]={
  "key":"48",
  "q":"你倾向于",
  "a":"A 我是一个善意的支持者。",
  "b":"B 我是一个积极的老手。",
  "c":"",
  "d":"",
  "ret_a":"2",
  "ret_b":"3",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[49]={
  "key":"49",
  "q":"你倾向于",
  "a":"A 当遇到困难时我倾向于夸大我的问题。",
  "b":"B 当遇到困难时我倾向于转移注意力。",
  "c":"",
  "d":"",
  "ret_a":"4",
  "ret_b":"7",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}

Enneagram[50]={
  "key":"50",
  "q":"你倾向于",
  "a":"A 总的来说，我对情况持怀疑的态度。",
  "b":"B 总的来说，我很确信知道情况应该如何。 ",
  "c":"",
  "d":"",
  "ret_a":"5",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[51]={
  "key":"51",
  "q":"你倾向于",
  "a":"A 我的悲观、抱怨会给别人带来麻烦。 ",
  "b":"B 我的老板式的、控制的方式会给别人带来麻烦。",
  "c":"",
  "d":"",
  "ret_a":"6",
  "ret_b":"8",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[52]={
  "key":"52",
  "q":"你倾向于",
  "a":"A 我倾向于按我的感觉办事并听之任之 ",
  "b":"B 我倾向于不按照我的感觉办事以免产生更多的问题",
  "c":"",
  "d":"",
  "ret_a":"2",
  "ret_b":"9",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[53]={
  "key":"53",
  "q":"你倾向于",
  "a":"A 通常我成为注意的焦点时，会很不习惯",
  "b":"B 通常我成为注意的焦点时，会很自然",
  "c":"",
  "d":"",
  "ret_a":"4",
  "ret_b":"3",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[54]={
  "key":"54",
  "q":"你倾向于",
  "a":"A 我做事情凭一时冲动，只是在问题出现时才临时准备",
  "b":"B 我做事情很谨慎，努力为意料之外的事情做准备",
  "c":"",
  "d":"",
  "ret_a":"7",
  "ret_b":"6",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[55]={
  "key":"55",
  "q":"你倾向于",
  "a":"A 当别人不是很欣赏我为他们所做的事情时我会很生气",
  "b":"B 当别人不听我说时我会很生气 ",
  "c":"",
  "d":"",
  "ret_a":"2",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[56]={
  "key":"56",
  "q":"你倾向于",
  "a":"A 独立、自立更生对我很重要  ",
  "b":"B 有价值、得到别人的称赞对我很重要 ",
  "c":"",
  "d":"",
  "ret_a":"8",
  "ret_b":"3",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[57]={
  "key":"57",
  "q":"你倾向于",
  "a":"A 当与朋友争论时我倾向于强烈地坚持自己的观点 ",
  "b":"B 当与朋友争论时我倾向于顺其自然以免伤了和气",
  "c":"",
  "d":"",
  "ret_a":"5",
  "ret_b":"9",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[58]={
  "key":"58",
  "q":"你倾向于",
  "a":"A 我常常占有所爱的人——我不能放任他们   ",
  "b":"B 我常常“考察”所爱的人，想确定他们是否爱我",
  "c":"",
  "d":"",
  "ret_a":"4",
  "ret_b":"6",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[59]={
  "key":"59",
  "q":"你倾向于",
  "a":"A 提出新观点并同时振奋人心，这是我的优势之一 ",
  "b":"B 组织资源并促使某些事情的发生是我的优势之一   ",
  "c":"",
  "d":"",
  "ret_a":"7",
  "ret_b":"8",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}

Enneagram[60]={
  "key":"60",
  "q":"你倾向于",
  "a":"A 我要在别人的驱策下才会做事，不能依赖自己",
  "b":"B 我过于情绪化，不能自律   ",
  "c":"",
  "d":"",
  "ret_a":"1",
  "ret_b":"4",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[61]={
  "key":"61",
  "q":"你倾向于",
  "a":"A 我试图使生活高节奏、紧张并充满兴奋的感觉 ",
  "b":"B 我试图使生活有规律、稳定、宁静",
  "c":"",
  "d":"",
  "ret_a":"7",
  "ret_b":"9",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[62]={
  "key":"62",
  "q":"你倾向于",
  "a":"A 尽管我受到挫折，但我仍相信自己的能力 ",
  "b":"B 尽管我已取得成功，我仍怀疑自己的能力",
  "c":"",
  "d":"",
  "ret_a":"3",
  "ret_b":"6",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[63]={
  "key":"63",
  "q":"你倾向于",
  "a":"A 一般我倾向于减少自己的情感并不加以注意 ",
  "b":"B 一般我倾向于详细研究自己的情感并保持此情感很久。",
  "c":"",
  "d":"",
  "ret_a":"5",
  "ret_b":"4",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[64]={
  "key":"64",
  "q":"你倾向于",
  "a":"A 我对许多人加以注意并培养他们",
  "b":"B 我指导许多人并鼓励他们 ",
  "c":"",
  "d":"",
  "ret_a":"2",
  "ret_b":"8",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[65]={
  "key":"65",
  "q":"你倾向于",
  "a":"A 我对自己要求有点严格 ",
  "b":"B 我对自己有点宽容   ",
  "c":"",
  "d":"",
  "ret_a":"1",
  "ret_b":"7",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[66]={
  "key":"66",
  "q":"你倾向于",
  "a":"A 我花大量的时间反省——做完事情对我来说是很重要的 ",
  "b":"B 我花大量的时间反省——理解自己的感受对我来说是很重要的   ",
  "c":"",
  "d":"",
  "ret_a":"8",
  "ret_b":"4",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[67]={
  "key":"67",
  "q":"你倾向于",
  "a":"A 我倾向于独断，并追求卓越",
  "b":"B 我谦虚，喜欢按自己的节奏做事 ",
  "c":"",
  "d":"",
  "ret_a":"3",
  "ret_b":"9",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[68]={
  "key":"68",
  "q":"你倾向于",
  "a":"A 我为自己的清晰性与目标性感到自豪",
  "b":"B 我为自己的可靠性与诚实而感到自豪 ",
  "c":"",
  "d":"",
  "ret_a":"8",
  "ret_b":"6",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[69]={
  "key":"69",
  "q":"你倾向于",
  "a":"A 总的来说我认为自己是一个灿烂的随和的人 ",
  "b":"B 总的来说我是一个严肃的、有品位的人",
  "c":"",
  "d":"",
  "ret_a":"9",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}

Enneagram[70]={
  "key":"70",
  "q":"你倾向于",
  "a":"A 我头脑灵活，精力充沛  ",
  "b":"B 我有一颗赤热的心，具有奉献精神",
  "c":"",
  "d":"",
  "ret_a":"7",
  "ret_b":"2",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[71]={
  "key":"71",
  "q":"你倾向于",
  "a":"A 我所做的事情要有极大的可能性得到奖励与赏识",
  "b":"B 如果所做的事是我所感兴趣的，我愿意放弃自己的奖励与赏识",
  "c":"",
  "d":"",
  "ret_a":"3",
  "ret_b":"5",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[72]={
  "key":"72",
  "q":"你倾向于",
  "a":"A 我常常认真地履行我的社会义务",
  "b":"B 我认为履行社会义务并不重要 ",
  "c":"",
  "d":"",
  "ret_a":"6",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[73]={
  "key":"73",
  "q":"你倾向于",
  "a":"A 在绝大多数情况下，我愿意做领导",
  "b":"B 在绝大多数情况下，我愿意让其他人做领导 ",
  "c":"",
  "d":"",
  "ret_a":"2",
  "ret_b":"9",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[74]={
  "key":"74",
  "q":"你倾向于",
  "a":"A 多年以来，我的价值观与生活方式变化了好几次 ",
  "b":"B 多年以来，我的价值观与生活方式基本没有变化",
  "c":"",
  "d":"",
  "ret_a":"1",
  "ret_b":"6",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[75]={
  "key":"75",
  "q":"你倾向于",
  "a":"A 一般我缺乏自律能力",
  "b":"B 一般我与别人的联系很少",
  "c":"",
  "d":"",
  "ret_a":"7",
  "ret_b":"5",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[76]={
  "key":"76",
  "q":"你倾向于",
  "a":"A 我倾向于拒绝给予爱，希望别人进入我的世界 ",
  "b":"B 我倾向于过于直率地给别人爱，希望自己进入到别人的世界 ",
  "c":"",
  "d":"",
  "ret_a":"4",
  "ret_b":"2",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[77]={
  "key":"77",
  "q":"你倾向于",
  "a":"A 我倾向于认为任何事情都会变得最好   ",
  "b":"B 我倾向于作最坏的打算   ",
  "c":"",
  "d":"",
  "ret_a":"9",
  "ret_b":"6",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[78]={
  "key":"78",
  "q":"你倾向于",
  "a":"A 人们相信我是因为我很自信并且尽全力做的最好   ",
  "b":"B 人们相信我是因为我很公正会正确地做事   ",
  "c":"",
  "d":"",
  "ret_a":"2",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[79]={
  "key":"79",
  "q":"你倾向于",
  "a":"A 我常常忙于自己的事情而忽略了与他人的交往 ",
  "b":"B 我常常忙于与他人交往而忽略了自己的事情   ",
  "c":"",
  "d":"",
  "ret_a":"5",
  "ret_b":"2",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}

Enneagram[80]={
  "key":"80",
  "q":"你倾向于",
  "a":"A 当第一次遇到某人时，通常我会闲聊并使人觉得有趣",
  "b":"B 当第一次遇到某人时，通常我会镇定自若并沉默寡言",
  "c":"",
  "d":"",
  "ret_a":"7",
  "ret_b":"3",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[81]={
  "key":"81",
  "q":"你倾向于",
  "a":"A 总而言之，我是很乐观的",
  "b":"B 总而言之，我是很悲观的",
  "c":"",
  "d":"",
  "ret_a":"9",
  "ret_b":"4",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[82]={
  "key":"82",
  "q":"你倾向于",
  "a":"A 我常常被紧张、不安全与怀疑而困扰",
  "b":"B 我常常被生气、完美主义与不耐烦而困扰",
  "c":"",
  "d":"",
  "ret_a":"6",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[83]={
  "key":"83",
  "q":"你倾向于",
  "a":"A 我更喜欢呆在自己的小世界里 ",
  "b":"B 我更喜欢让全世界的人知道我的所在   ",
  "c":"",
  "d":"",
  "ret_a":"5",
  "ret_b":"8",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[84]={
  "key":"84",
  "q":"你倾向于",
  "a":"A 我意识到我是太有人情味与待人太亲密 ",
  "b":"B 我意识到我是太酷过于冷漠",
  "c":"",
  "d":"",
  "ret_a":"2",
  "ret_b":"3",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[85]={
  "key":"85",
  "q":"你倾向于",
  "a":"A 我失败是因为我不能抓住机会",
  "b":"B 我失败是因为我追求太多的可能性",
  "c":"",
  "d":"",
  "ret_a":"4",
  "ret_b":"7",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[86]={
  "key":"86",
  "q":"你倾向于",
  "a":"A 我会立即采取行动 ",
  "b":"B 我要过很长的时间后才会采取行动 ",
  "c":"",
  "d":"",
  "ret_a":"7",
  "ret_b":"5",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[87]={
  "key":"87",
  "q":"你倾向于",
  "a":"A 通常我很难作出决定 ",
  "b":"B 我很少会感到难作出决定",
  "c":"",
  "d":"",
  "ret_a":"6",
  "ret_b":"8",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[88]={
  "key":"88",
  "q":"你倾向于",
  "a":"A 我倾向于给人留下态度强硬的印象",
  "b":"B 我并不倾向于过多地坚持自己的意见",
  "c":"",
  "d":"",
  "ret_a":"2",
  "ret_b":"9",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[89]={
  "key":"89",
  "q":"你倾向于",
  "a":"A 我情绪多变 ",
  "b":"B 我情绪稳定  ",
  "c":"",
  "d":"",
  "ret_a":"3",
  "ret_b":"4",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}

Enneagram[90]={
  "key":"90",
  "q":"你倾向于",
  "a":"A 当不知道要干什么事情时，我会尝试不同的事情以确定哪一种最适合我去做",
  "b":"B 当不知道要干什么事情时，我常常会向别人寻求建议   ",
  "c":"",
  "d":"",
  "ret_a":"7",
  "ret_b":"6",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[91]={
  "key":"91",
  "q":"你倾向于",
  "a":"A 我担心，别人搞活动时会忘记我",
  "b":"B 我担心，参加别人活动会影响我做自己的事情 ",
  "c":"",
  "d":"",
  "ret_a":"2",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[92]={
  "key":"92",
  "q":"你倾向于",
  "a":"A 当我生气时，一般我会责备别人 ",
  "b":"B 当我生气时，一般我会变得很冷淡",
  "c":"",
  "d":"",
  "ret_a":"8",
  "ret_b":"3",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[93]={
  "key":"93",
  "q":"你倾向于",
  "a":"A 我很难入睡",
  "b":"B 我很快就能入睡",
  "c":"",
  "d":"",
  "ret_a":"5",
  "ret_b":"9",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[94]={
  "key":"94",
  "q":"你倾向于",
  "a":"A 我常常努力地思考如何与别人产生更为亲密的关系 ",
  "b":"B 我常常努力地思考别人想从我这儿得到什么 ",
  "c":"",
  "d":"",
  "ret_a":"2",
  "ret_b":"6",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[95]={
  "key":"95",
  "q":"你倾向于",
  "a":"A 通常我是易兴奋的、善于快速地说话以回避问题并且机智的人 ",
  "b":"B 通常我是慎重的、有话直说的并且深思熟虑的人 ",
  "c":"",
  "d":"",
  "ret_a":"7",
  "ret_b":"8",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[96]={
  "key":"96",
  "q":"你倾向于",
  "a":"A 当看到别人犯错误时，我常常不说出口 ",
  "b":"B 当看到别人犯错误时，我常常会帮助他们认识到所犯的错误   ",
  "c":"",
  "d":"",
  "ret_a":"4",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[97]={
  "key":"97",
  "q":"你倾向于",
  "a":"A 在生活中的绝大多数时间里，我是情感激烈的人，会产生许多易变的情感 ",
  "b":"B 在生活中的绝大多数时间里，我是很稳定的人，我会“心如止水” ",
  "c":"",
  "d":"",
  "ret_a":"7",
  "ret_b":"9",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[98]={
  "key":"98",
  "q":"你倾向于",
  "a":"A 当我不喜欢某些人时，我会以这种或那种方式让他们知道我的情感 ",
  "b":"B 当我不喜欢某些人时，我会掩藏自己的情感而努力地保持热情 ",
  "c":"",
  "d":"",
  "ret_a":"6",
  "ret_b":"3",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[99]={
  "key":"99",
  "q":"你倾向于",
  "a":"A 我与别人交往有困难是因为我不太在乎社会习俗 ",
  "b":"B 我与别人交往有困难是因为我很敏感并总是从自己的角度考虑事情",
  "c":"",
  "d":"",
  "ret_a":"5",
  "ret_b":"4",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[100]={
  "key":"100",
  "q":"你倾向于",
  "a":"A 我的方法是直接帮助别人",
  "b":"B 我的方法是告诉别人如何自助",
  "c":"",
  "d":"",
  "ret_a":"2",
  "ret_b":"8",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[101]={
  "key":"101",
  "q":"你倾向于",
  "a":"A 我常常感到骄傲因为我对别人的生活中起着重要的作用   ",
  "b":"B 我常常感到骄傲因为我对新的经历会很感兴趣并且乐于接受   ",
  "c":"",
  "d":"",
  "ret_a":"2",
  "ret_b":"7",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[102]={
  "key":"102",
  "q":"你倾向于",
  "a":"A 总的来说，我喜欢“释放”并突破所受的限制",
  "b":"B 总的来说，我不喜欢过多地失去自我控制  ",
  "c":"",
  "d":"",
  "ret_a":"7",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[103]={
  "key":"103",
  "q":"你倾向于",
  "a":"A 我过度地关注于要比别人做得好",
  "b":"B 我过度地关注于把别人的事做好就行 ",
  "c":"",
  "d":"",
  "ret_a":"1",
  "ret_b":"9",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[104]={
  "key":"104",
  "q":"你倾向于",
  "a":"A 我的想法总是很玄想的——包含着想象与好奇",
  "b":"B 我的想法总是很实际的——只是试图保持事情的发展状况 ",
  "c":"",
  "d":"",
  "ret_a":"5",
  "ret_b":"6",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[105]={
  "key":"105",
  "q":"你倾向于",
  "a":"A 我的主要优势之一就是我能够讲述内心的感受",
  "b":"B 我的主要优势之一就是我能够控制场面",
  "c":"",
  "d":"",
  "ret_a":"4",
  "ret_b":"8",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[106]={
  "key":"106",
  "q":"你倾向于",
  "a":"A 我努力争取做好事情而不管这样会使别人不开心 ",
  "b":"B 我不喜欢有压力的感觉，所以也不喜欢压制别人",
  "c":"",
  "d":"",
  "ret_a":"1",
  "ret_b":"9",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[107]={
  "key":"107",
  "q":"你倾向于",
  "a":"A 我认为我给别人留下的印象是与众不同的甚至很古怪",
  "b":"B 我认为我给别人留下的印象是好样的甚至很令人钦佩",
  "c":"",
  "d":"",
  "ret_a":"4",
  "ret_b":"3",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[108]={
  "key":"108",
  "q":"你倾向于",
  "a":"A 一般我做我想做的事 ",
  "b":"B 一般我做我必须去做的事",
  "c":"",
  "d":"",
  "ret_a":"4",
  "ret_b":"6",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[109]={
  "key":"109",
  "q":"你倾向于",
  "a":"A 我很喜欢处于高度的压力之下甚至是困难的情景中",
  "b":"B 我不喜欢处于高度的压力之下甚至是困难的情景中",
  "c":"",
  "d":"",
  "ret_a":"8",
  "ret_b":"9",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[110]={
  "key":"110",
  "q":"你倾向于",
  "a":"A 我为自己的灵活能力感到骄傲——我知道合适的或重要的情况是变化的 ",
  "b":"B 我为自己的立场感到骄傲——我有坚定的信念   ",
  "c":"",
  "d":"",
  "ret_a":"3",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[111]={
  "key":"111",
  "q":"你倾向于",
  "a":"A 我的风格倾向于节约而朴实   ",
  "b":"B 我的风格倾向于过度并过量地做某些事情   ",
  "c":"",
  "d":"",
  "ret_a":"5",
  "ret_b":"7",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[112]={
  "key":"112",
  "q":"你倾向于",
  "a":"A 我的健康与幸福受到伤害因为我有强烈的愿望去帮助别人",
  "b":"B 我的人际关系受到损害因为我只关注与自己的需要",
  "c":"",
  "d":"",
  "ret_a":"2",
  "ret_b":"4",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[113]={
  "key":"113",
  "q":"你倾向于",
  "a":"A 总的来说，我过于谨慎过于戒备",
  "b":"B 总的来说，我太坦诚太天真 ",
  "c":"",
  "d":"",
  "ret_a":"6",
  "ret_b":"9",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[114]={
  "key":"114",
  "q":"你倾向于",
  "a":"A 有时我因过于好斗而令人厌恶 ",
  "b":"B 有时我因太紧张而令人厌恶",
  "c":"",
  "d":"",
  "ret_a":"8",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[115]={
  "key":"115",
  "q":"你倾向于",
  "a":"A 关心别人的需要并提供服务对我来说是很重要的   ",
  "b":"B 寻找看待并做好事情的其他方法对我来说是很重要的",
  "c":"",
  "d":"",
  "ret_a":"2",
  "ret_b":"5",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[116]={
  "key":"116",
  "q":"你倾向于",
  "a":"A 我喜欢探索各种行动的途径，想看看最终的结果如何",
  "b":"B 我全身心地持之以恒地追求我的目标",
  "c":"",
  "d":"",
  "ret_a":"7",
  "ret_b":"3",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[117]={
  "key":"117",
  "q":"你倾向于",
  "a":"A 我经常使自己冷静与安逸",
  "b":"B 我经常会激起强烈与紧张的情绪   ",
  "c":"",
  "d":"",
  "ret_a":"9",
  "ret_b":"4",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[118]={
  "key":"118",
  "q":"你倾向于",
  "a":"A 我不太注重实际的结果，而注重自己的兴趣 ",
  "b":"B 我很实际并希望我的工作有具体的结果   ",
  "c":"",
  "d":"",
  "ret_a":"5",
  "ret_b":"8",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[119]={
  "key":"119",
  "q":"你倾向于",
  "a":"A 我有强烈的归属需要",
  "b":"B 我有强烈的平衡需要",
  "c":"",
  "d":"",
  "ret_a":"6",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[120]={
  "key":"120",
  "q":"你倾向于",
  "a":"A 过去我可能过于要求朋友间的亲密",
  "b":"B 过去我可能过于要求朋友间的疏远   ",
  "c":"",
  "d":"",
  "ret_a":"2",
  "ret_b":"3",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[121]={
  "key":"121",
  "q":"你倾向于",
  "a":"A 我倾向于回忆过去的事情 ",
  "b":"B 我倾向于预期未来所要做的事情",
  "c":"",
  "d":"",
  "ret_a":"1",
  "ret_b":"7",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[122]={
  "key":"122",
  "q":"你倾向于",
  "a":"A 我倾向于将人看作是很莽撞的，和有需求的",
  "b":"B 我倾向于将人看作是很麻烦的、苛刻的 ",
  "c":"",
  "d":"",
  "ret_a":"1",
  "ret_b":"5",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[123]={
  "key":"123",
  "q":"你倾向于",
  "a":"A 总的来说，我不太自信 ",
  "b":"B 总的来说，我仅相信自己",
  "c":"",
  "d":"",
  "ret_a":"6",
  "ret_b":"8",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[124]={
  "key":"124",
  "q":"你倾向于",
  "a":"A 我可能太被动，不积极参与  ",
  "b":"B 我可能控制过多",
  "c":"",
  "d":"",
  "ret_a":"9",
  "ret_b":"2",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[125]={
  "key":"125",
  "q":"你倾向于",
  "a":"A 我很少会怀疑自己",
  "b":"B 我经常因为怀疑自己而停下来",
  "c":"",
  "d":"",
  "ret_a":"3",
  "ret_b":"4",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[126]={
  "key":"126",
  "q":"你倾向于",
  "a":"A 我一般会选我所喜欢的东西：会对我所不喜欢的东西而感到失望  ",
  "b":"B 如果让我在熟悉的东西与新的东西之间作出选择，我会选新的东西， ",
  "c":"",
  "d":"",
  "ret_a":"6",
  "ret_b":"7",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[127]={
  "key":"127",
  "q":"你倾向于",
  "a":"A 我给别人大量的身体接触以使他们相信我对他们的爱。   ",
  "b":"B 我认为真正的爱是不需要身体的接触。",
  "c":"",
  "d":"",
  "ret_a":"2",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[128]={
  "key":"128",
  "q":"你倾向于",
  "a":"A 当我需要责备别人时，我是很严厉很直截了当的  ",
  "b":"B 当我需要责备别人时，我常常是旁敲侧击的 ",
  "c":"",
  "d":"",
  "ret_a":"8",
  "ret_b":"3",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[129]={
  "key":"129",
  "q":"你倾向于",
  "a":"A 我对别人认为很困扰甚至很可怕的学科却很感兴趣 ",
  "b":"B 我不喜欢去研究令人困扰的、可怕的学科",
  "c":"",
  "d":"",
  "ret_a":"5",
  "ret_b":"9",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[130]={
  "key":"130",
  "q":"你倾向于",
  "a":"A 我因防碍、干扰别人，而受到指责",
  "b":"B 我因过于逃避、沉默寡言而受到别人的指责 ",
  "c":"",
  "d":"",
  "ret_a":"2",
  "ret_b":"6",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[131]={
  "key":"131",
  "q":"你倾向于",
  "a":"A 我担心自己缺乏自律不能履行职责",
  "b":"B 我担心没有办法履行我的职责",
  "c":"",
  "d":"",
  "ret_a":"7",
  "ret_b":"8",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[132]={
  "key":"132",
  "q":"你倾向于",
  "a":"A 总的来说我是一个很凭直觉办事并且极度个人主义的人",
  "b":"B 总的来说我是一个很有组织的并且负责任的人 ",
  "c":"",
  "d":"",
  "ret_a":"4",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[133]={
  "key":"133",
  "q":"你倾向于",
  "a":"A 克服惰性是我的主要问题之一 ",
  "b":"B 不能缓慢下来是我的主要问题之一   ",
  "c":"",
  "d":"",
  "ret_a":"9",
  "ret_b":"7",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[134]={
  "key":"134",
  "q":"你倾向于",
  "a":"A 当我觉得不安全时，我会自卫并变得好争论   ",
  "b":"B 当我觉得不安全时，我会变得傲慢，表示对此的轻视",
  "c":"",
  "d":"",
  "ret_a":"3",
  "ret_b":"6",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[135]={
  "key":"135",
  "q":"你倾向于",
  "a":"A 我会表白真情，乐意与别人共享我的情感  ",
  "b":"B 我是思想开明的，乐意尝试新的方法",
  "c":"",
  "d":"",
  "ret_a":"4",
  "ret_b":"5",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[136]={
  "key":"136",
  "q":"你倾向于",
  "a":"A 在别人面前我会表现得比实际的我更为强硬些 ",
  "b":"B 在别人面前我会表现得比实际的我更为在意些",
  "c":"",
  "d":"",
  "ret_a":"8",
  "ret_b":"2",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[137]={
  "key":"137",
  "q":"你倾向于",
  "a":"A 通常我是按我的良心与理性去做事情",
  "b":"B 通常我是按我的感觉与冲动去做事情",
  "c":"",
  "d":"",
  "ret_a":"1",
  "ret_b":"7",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[138]={
  "key":"138",
  "q":"你倾向于",
  "a":"A 严峻的逆境使我变得坚强  ",
  "b":"B 严峻的逆境使我变得气馁与听天由命",
  "c":"",
  "d":"",
  "ret_a":"3",
  "ret_b":"9",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[139]={
  "key":"139",
  "q":"你倾向于",
  "a":"A 我确信有某种“安全网”以依靠 ",
  "b":"B 我常常要选择居于边缘而无所依靠",
  "c":"",
  "d":"",
  "ret_a":"6",
  "ret_b":"5",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[140]={
  "key":"140",
  "q":"你倾向于",
  "a":"A 我不能应对自己的情感与忧虑，所以我不能为别人而表现得很坚强 ",
  "b":"B 我要为了别人而表现得很坚强所以没有时间顾及自己的情感与忧虑 ",
  "c":"",
  "d":"",
  "ret_a":"4",
  "ret_b":"8",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[141]={
  "key":"141",
  "q":"你倾向于",
  "a":"A 我常常觉得奇怪，生活中美好的事情很多为什么人们只看到消极的一面 ",
  "b":"B 我常常觉得奇怪，生活中很糟糕为什么人还这么开心",
  "c":"",
  "d":"",
  "ret_a":"9",
  "ret_b":"1",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[142]={
  "key":"142",
  "q":"你倾向于",
  "a":"A 我努力使自己不被看作为自私的人",
  "b":"B 我努力使自己不被看作为令人讨厌的人   ",
  "c":"",
  "d":"",
  "ret_a":"2",
  "ret_b":"7",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
Enneagram[143]={
  "key":"143",
  "q":"你倾向于",
  "a":"A 当我担心会辜负人们对我的期望时，我会避免产生亲密的关系",
  "b":"B 当我担心被别人的需要与要求压垮时，我会避免产生亲密的关系",
  "c":"",
  "d":"",
  "ret_a":"3",
  "ret_b":"5",
  "ret_c":"",
  "ret_d":"",
  "sel":"",
}
/*
Enneagram[144]={
  "key":"144",
  "q":"你倾向于",
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

Enneagram[145]={
  "key":"145",
  "q":"你倾向于",
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
Enneagram[146]={
  "key":"146",
  "q":"你倾向于",
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
*/



Enneagramresulttable = new Array();
Enneagramresulttable["1"]="完美型(Reformer/Perfectionist) 追求不断进步。你是典型的完美主义者，显浅易明。正因为你事事追求完美，你很少讲出称赞的说话，很多时只有批评，无论是对自己，或是对身边的人也是！又因为你对自己的超超高标准，你给自己很大压力，会很难放松自己去尽情的玩、开心的笑！"
Enneagramresulttable["2"]="全爱型、助人型(Helper) 追求服待。你很喜欢帮人，而且主动，慷慨大方！虽然你对别人的需要很敏锐，但却很多时忽略了自己的需要。在你来说，满足别人的需要比满足自己的需要更重要，所以你很少向人提出请求。这样说来，你的自我并不强，很多时要主动帮助别人去肯定自己。"
Enneagramresulttable["3"]="成就型(Reformer/Perfectionist) 追求成果。你很害怕亲密关系，不是说你们会没有朋友，只是当关系进深的时候，你可能会因怕真面目被看见而避开、逃掉。所以，亲密/好朋友关系对第三型说并不容易建立，因为他们害怕被人看见自己的真面目，也因此很难开放自己与人坦诚交往。第三型的你好胜心颇强，通常认为自己不能在朋友面前「认衰」，所以会表现得「很棒很棒」的，但世界上没有一个人是十全十美的完人啊！当能容许自己以真面目视人，你的生活将很快乐！ "
Enneagramresulttable["4"]="艺术型，自我型(Reformer/Perfectionist) 追求独特。情绪化,追求浪漫,惧怕被人拒绝,觉得别人不明白自己, 烈占有欲,我行我素生活风格：爱讲不开心的事，易忧郁、妒忌，生活追寻感觉好；很珍惜自己的爱和情感，所以想好好地滋养它们，并用最美、最特殊的方式来表达。他们想创造出独一无二、与众不同的形象和作品，所以不停地自我察觉、自我反省，以及自我探索。"
Enneagramresulttable["5"]="智慧型，思想型(Reformer/Perfectionist) 追求知识。理智型(Thinker)你是个很冷静的人，总想跟身边的人和事保持一段距离，也不会让情绪。很多时，你都会先做旁观者，后才可投入参与。另外，你也需要充分的私人空间和高度的私隐，否则你会觉得很焦虑，不安定！你也很有机会成为专家，例如电脑啦，漫画啦，时装啦，因为你对知识是非常热爱的！"
Enneagramresulttable["6"]="忠诚型(Reformer/Perfectionist) 追求忠心。忠诚型(Loyalist)你会是一个很好员工，因为你很忠心尽责。安全感对你都很重要，因为当遇到新的人和事，都会令你产生恐惧、不安的感觉。基于这种恐惧不安，凡事你都会作最坏打算，换句话说，你为人都比较悲观，也较易去逃避了事。"
Enneagramresulttable["7"]="活跃型，开朗型(Reformer/Perfectionist) 追求快乐。活跃型(Adventurer)活跃型的你，就是如此这般：乐观、精力充沛、迷人、好动、贪新鲜、五时花六时变……「最紧要玩得开心」就是你的生活哲学！你们很需要生活有新鲜感，所以很不喜欢被束缚、被控制。你的活力是玩的活力，又跟第三型的成就型又有所不同，相信你们是活动搅手，玩极唔厌！"
Enneagramresulttable["8"]="领袖型，能力型(Reformer/Perfectionist) 追求权力。你通常身兼领袖身份，可以有权力全权安排，也可指挥他人。由于你们的动力较强，有时会予人侵略之感，而这个也是你本身的动力源头，你很有争胜及控制的欲望，但却要小心运用，不要用之伤害别人！此外，你专向难度及规范挑战，就是「明知山有虎，偏向虎山行」的任性。所以很可能，妈妈叫你不要做的东西，你偏不听；老师要你学的，你偏扮傻……你会是这样子吗？要是真的话，会是于你有益吗？ "
Enneagramresulttable["9"]="和平型，和谐型(Peacemaker) 追求和平。和平型(Peacemaker)在很多情况，你们都是和平使者，善解人意，随和。你们很容易了解别人，却不是太清楚自己想要什么，会显得优柔寡断。相对地说，你们的主见会比较少，宁愿配合其他人的安排，做一个很好的支持者，所以你是心较被动的。"


const limitquestEnneagram = 72
class EnneagramModule extends React.Component {
   constructor(props) {
    super(props);
    
    this.randominit();
  }

  randominit()
  {
    this.state= {
      checked:[],
      Enneagram:[],
      ret:"",
      percent:"",
      closetest:false,
      pie:"",
    }
  }
  clear(){
    var ret = new Array();
    ret["1"]=ret["2"]=ret["3"]=ret["4"]=ret["5"]=ret["6"]=ret["7"]=ret["8"]=ret["9"]=0
    var runtimeEnneagram = Enneagram.concat()
    //console.log(runtimeEnneagram.length)
    while(runtimeEnneagram.length>limitquestEnneagram)
    {
      var p = Math.random()*runtimeEnneagram.length
      runtimeEnneagram.splice(p,1)
    }
    var checked = new Array();
    for(i=0;i<runtimeEnneagram.length;i++)
    {
      checked[0]=undefined
checked[i]=""
      runtimeEnneagram[i].index=i
      runtimeEnneagram[i].key=i
    }
    //console.log(runtimeEnneagram.length)
    this.setState( {
      checked:checked,
      Enneagram:runtimeEnneagram,
      ret:"",
      percent:"",
      closetest:false,
      pie:"",
    })
  }

  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
      
    title:RouteConfig["EnneagramModule"].titlename
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.Enneagram[Number(key)].sel=sel
        
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<Enneagram.length;i++)
      {
        //console.log(Enneagram[i].sel)
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
    for(i=0;i<limitquestEnneagram;i++)
    {
      if(undefined != this.state.Enneagram[i] && this.state.checked[i]==="")
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
    var testEnneagram = this.state.Enneagram
    var ret = new Array();
    ret["1"]=ret["2"]=ret["3"]=ret["4"]=ret["5"]=ret["6"]=ret["7"]=ret["8"]=ret["9"]=0
    for(i=0;i<testEnneagram.length;i++)
    {
      var _p = testEnneagram[i].sel;
      ret[_p] = ret[_p] + 1; 
    }
    //.log(ret);
    var max = "1"
    var sed = "2"
    if(ret["1"]<=ret["2"])
    {
      max = "2"
      sed = "1"
    }
    else
    {
      max = "1"
      sed = "2"
    }
    Object.keys(ret).forEach(function(key){

      if(ret[key]>ret[sed] && key!=max)
      {
        
        if(ret[key]>ret[max])
        {
          sed = max
          max = key
        }
        else
        {
          sed = key
        }
      }
      console.log(max,sed)
     
    });
    var retArray = new Array()
    retArray.push("您的主要性格如下")
    retArray.push("主要类型:"+String(max)+"号类型  "+Enneagramresulttable[max])
    retArray.push("辅助类型:"+String(sed)+"号类型  "+Enneagramresulttable[sed])

    this.setState({
      ret:retArray,
      percent:"1:"+ret["1"]+" 2:"+ret["2"]+" 3:"+ret["3"]+" 4:"+ret["4"]+" 5:"+ret["5"]+" 6:"+ret["6"]+" 7:"+ret["7"]+" 8:"+ret["8"]+" 9:"+ret["9"],
      closetest:true,
      pie:ret,
    })
  }
  keyExtractor = (item, index) => index.toString();
  
  createpie()
  {
    if (this.state.ret != "") {
      var ret = this.state.pie
      console.log(ret)
      return (
        <View style={[{ textAlign: 'center', alignItems: 'center' }]}>
          <Svg width={300} height={300} >
            <VictoryPie
              colorScale={["#ED065C", "#ED5306","#ED069F", "#D0ED06", "#EDC806",  "#06ED97",  "#06EDE8","#0674ED","#1D4C7F"]}
              data={[
                { x: 1, y: ret["1"] + 1, label: '1' },
                { x: 2, y: ret["2"] + 1, label: '2' },
                { x: 3, y: ret["3"] + 1, label: '3' },
                { x: 4, y: ret["4"] + 1, label: '4' },
                { x: 5, y: ret["5"] + 1, label: '5' },
                { x: 6, y: ret["6"] + 1, label: '6' },
                { x: 7, y: ret["7"] + 1, label: '7' },
                { x: 8, y: ret["8"] + 1, label: '8' },
                { x: 9, y: ret["9"] + 1, label: '9' },
              ]}
              standalone={false}
              width={300} height={300}
            /></Svg></View>
      )
    }
  }

  componentDidMount()
  {
    const action = this.props.navigation.getParam('action', 'action');
    if(action=='new')
    {
      //this.props.navigation.setParams({action:''});
      //this.randominit()
      //console.log('refresh',action)
    }
    this.clear()
  }
  switchbar()
  {
    const { navigate } = this.props.navigation;
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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['location'], "九型人格测试结果",this)}}
                                   
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
              title={RouteConfig["EnneagramModule"].titlename}
              renderIcon={() => RouteConfig["PsychTestPage"].icon} 
              onPress={()=>this.result()}  
              titleStyle={StyleConfig.menufont}>  
          </TabNavigator.Item>  
      </TabNavigator>   
      )
    }
  }

  render()
  {
    const { navigate } = this.props.navigation;
    var sqr = 0
    return (
      <View style={styles.container}>
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='location' >
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
    <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["EnneagramModule"].titlename}</Text>
      <FlatList
            data={this.state.Enneagram}
            extraData={this.state}
            keyExtractor={this.keyExtractor}
						renderItem={({ item }) => (
              <View>
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
        <Text style={styles.list}></Text>
        <Text style={styles.list}></Text>
        <Text style={styles.list}></Text>
        {this.createpie()}
        <Text style={styles.list}></Text>
        <FlatList
            data={this.state.ret}
            extraData={this.state}
            keyExtractor={this.keyExtractor}
						renderItem={({ item }) => (
              <View style={styles.list}>
              <Text style={styles.rowhigth}>{item}</Text>   
              <Text style={styles.rowhigth}></Text> 
              </View>
            )}
        />
        <Text style={styles.list}></Text>
            {
             (WechatShare.shareimg(this.state.shareimg))
            }
        <Text style={styles.list}></Text> 
        <Text style={styles.list}></Text>
        <Text style={styles.list}></Text> 
        <Text style={styles.list}></Text>
        <Text style={styles.list}></Text> 
        <Text style={styles.list}></Text>
        <Text style={styles.list}></Text>
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
  rowhigth:{
    lineHeight:25,
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

module.exports=EnneagramModule;  