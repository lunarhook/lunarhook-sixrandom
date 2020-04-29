
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import ScreenConfig from '../../../config/ScreenConfig';
import {StyleConfig,FontStyleConfig} from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
var OlsonDate=Array();
OlsonDate[1]="夫妻双方都喜欢同一类的社会活动。"
OlsonDate[2]="向配偶表达我真实的感受是非常容易的。"
OlsonDate[3]="对我所受到的有关宗教信仰的教育,我很难全盘接受,。"
OlsonDate[4]="为了尽早结束争吵,我常立即让步。"
OlsonDate[5]="在我们家里,父亲与孩子呆在一起所花的时间不够。"
OlsonDate[6]="当夫妻之间出现矛盾时,我的配偶长沉默不语。"
OlsonDate[7]="亲友中的一些人使我们的婚姻变得紧张。"
OlsonDate[8]="我的配偶过于挑剔和经常持否定的观点。"
OlsonDate[9]="我完全满意配偶对我的感情。"
OlsonDate[10]="我和配偶就如何采取最佳方法解决矛盾常常意见不一。"
OlsonDate[11]="我认为夫妻双方对信仰应有相同的理解。"
OlsonDate[12]="我认为女性主要应待在家里。"
OlsonDate[13]="有时,我对配偶的脾气很在意。"
OlsonDate[14]="我不喜欢配偶的性格和个人习惯。"
OlsonDate[15]="为了使性关系保持乐趣,我们尝试找一些新的办法。"
OlsonDate[16]="有时,我们希望配偶别乱花钱。"
OlsonDate[17]="我的配偶似乎缺少时间与精力与我一起娱乐。"
OlsonDate[18]="我宁愿做别的任何事情,也不愿独自呆一个晚上。"
OlsonDate[19]="我非常满意夫妻双方在婚姻中承担的责任。"
OlsonDate[20]="我和配偶对怎样花钱总是意见一致。"
OlsonDate[21]="我很满意我们对抚养子女的责任分工。"
OlsonDate[22]="共同的信仰有助于我们的关系发展。"
OlsonDate[23]="如果夫妻双方都有工作,丈夫应该与妻子承担同样多的家务劳动。"
OlsonDate[24]="有时,我对配偶显得不愉快和孤独感到担心。"
OlsonDate[25]="我们担心配偶可能在性方面对我不感兴趣。"
OlsonDate[26]="我们很难在经济安排上作为出决定。"
OlsonDate[27]="我们为亲友花费的时间很恰当。"
OlsonDate[28]="对配偶兴趣和爱好过少,我很在意。"
OlsonDate[29]="除非经济上需要,我的妻子不应外出工作。"
OlsonDate[30]="我配偶抽烟和/或饮酒成问题。"
OlsonDate[31]="与配偶参加社交活动,我很少感到压力。"
OlsonDate[32]="我不满意夫妻间的交流,我配偶并不理解我。"
OlsonDate[33]="对于我们家怎样和在何处度假,我总是觉得满意。"
OlsonDate[34]="我们夫妻间完全相互理解。"
OlsonDate[35]="在管教子女方面,夫妻意见一致。"
OlsonDate[36]="我非常满意我们作决定和解决冲突的方式。"
OlsonDate[37]="有时,我的配偶不依赖我,不总是人云亦云。"
OlsonDate[38]="对于家庭应储蓄多少钱的决定,我感到满意。"
OlsonDate[39]="当讨论某一问题时,我们通常感到配偶是理解我的。"
OlsonDate[40]="我的配偶有时发表一些贬低我的意见。"
OlsonDate[41]="与配偶谈论性问题,对我来说是很容易和轻松的。"
OlsonDate[42]="我的配偶对我的每一次情绪变化都能完全理解并有相同的感受。"
OlsonDate[43]="在我们的婚姻中,妻子也更加顺从丈夫的愿望。"
OlsonDate[44]="当我们与别人共处时,有时我为配偶的行为感到不安。"
OlsonDate[45]="我们都知道我们所欠的债务,而且它不成问题。"
OlsonDate[46]="我的信仰是影响我们婚姻的一个重要部分。"
OlsonDate[47]="有时,我担心配偶会有寻求婚外性关系的想法。"
OlsonDate[48]="我认为配偶与他/她的家里过于密切或受其影响太大。"
OlsonDate[49]="子女似乎是我们婚姻中矛盾的一个主要来源。"
OlsonDate[50]="我们对所需子女的数量意见一致。"
OlsonDate[51]="我们按我们的经济实力有规律地花钱。"
OlsonDate[52]="我不满意我们的经济地位和决定经济事务的方法。"
OlsonDate[53]="我非常满意我们的业余活动和夫妻一起度过的时间。"
OlsonDate[54]="有时,我不敢找配偶要我需要的东西。"
OlsonDate[55]="即使妻子在外工作,也应该负担管理家务的责任。"
OlsonDate[56]="夫妻双方在与信仰有关的活动中意见不一。"
OlsonDate[57]="与我的或配偶家的亲戚在一起,我会感到不愉快。"
OlsonDate[58]="当我遇到困难时,我总是告诉配偶。"
OlsonDate[59]="我的配偶对子女的关注超过对我们的婚姻,这使我不舒服。"
OlsonDate[60]="我觉得我们的假期和旅游过得很好。"
OlsonDate[61]="我们家丈夫是一家之主。"
OlsonDate[62]="对我来说,我们的性关系是满意与完美的。"
OlsonDate[63]="有时,我的配偶太固执。"
OlsonDate[64]="我们的婚姻是非常成功的。"
OlsonDate[65]="与配偶一起祈祷,对我很重要。"
OlsonDate[66]="我希望配偶更愿意与我分享他/她的感受。"
OlsonDate[67]="有了孩子,使我们的婚姻关系更密切。"
OlsonDate[68]="我的配偶喜欢我所有的朋友。"
OlsonDate[69]="我不愿意对配偶表现出温柔,因为它经常被误认为是一种性的表示。"
OlsonDate[70]="我觉得我们的婚姻关系缺少某些东西。"
OlsonDate[71]="有时在一些不重要的问题上我们常产生严重的争执。"
OlsonDate[72]="我感到夫妻双方没有花费足够的时间一起度过业余空暇。"
OlsonDate[73]="有时,我很难相信配偶告诉我的每一件事。"
OlsonDate[74]="我尽量避免与配偶发生冲突。"
OlsonDate[75]="对于我们来说,丈夫的职业较妻子的职业更重要。"
OlsonDate[76]="我觉得我们的婚姻受到地域传统文化影响。"
OlsonDate[77]="我们的经济已变得紧张,如赊帐过多。"
OlsonDate[78]="配偶经常拖拖拉拉,使我很烦恼。"
OlsonDate[79]="有时,我觉得夫妻之间的争执没完没了,从来得不到解决。"
OlsonDate[80]="如果家里有很小的子女,妻子不应外出工作。"
OlsonDate[81]="我经常不把我的感受告诉配偶,因为他/她应该体会得到。"
OlsonDate[82]="对于我们夫妻之间怎样表达情感与性有关的事,我很满意。"
OlsonDate[83]="当夫妻见出现意见不一时,我们开诚布公地交流感受和决定怎样来解决它。"
OlsonDate[84]="除非与配偶在一起,否则我很少开玩笑。"
OlsonDate[85]="我们很注重决定怎样把钱花在最重要事情上。"
OlsonDate[86]="有时我的配偶与朋友在一起时间太多。"
OlsonDate[87]="我和配偶在对子女进行传统文化教育方面有不同的意见。"
OlsonDate[88]="对于承担做父母的责任分工上,我不满意。"
OlsonDate[89]="爱配偶,使我更深刻体会到：生活是充满爱的。"
OlsonDate[90]="我觉得双方的父母过高地期望得到我们的关心与帮助。"
OlsonDate[91]="我们非常满意夫妻之间相互谈话的方式。"
OlsonDate[92]="我觉得我们的父母给我们的婚姻造成问题。"
OlsonDate[93]="我很烦恼,没有配偶的允许我不能花钱。"
OlsonDate[94]="自从有了孩子,夫妻间很少有时间单独在一起。"
OlsonDate[95]="对于配偶的喜怒无常,有时我感到束手无策。"
OlsonDate[96]="我经常感到配偶没有认真对待我们的分歧。"
OlsonDate[97]="在我们家里,丈夫在大多数重要的事情上应有最后的决定权。"
OlsonDate[98]="因为担心配偶发脾气,所以我不总是把心理的一些烦恼告诉他/她。"
OlsonDate[99]="我们不满意我们与双方父母、朋友的关系。"
OlsonDate[100]="我和配偶对我所受的传统文化方面的教育意见不一。"
OlsonDate[101]="我从不后悔与我父母的关系,哪怕是一瞬间。"
OlsonDate[102]="应该为子女做多少事,是我们发生冲突的一个原因。"
OlsonDate[103]="我确实很高兴与配偶所有的朋友来往。"
OlsonDate[104]="因为我们的传统文化观念,我和配偶觉得很亲密。"
OlsonDate[105]="妻子在重要问题上应该相信与接受丈夫的判断。"
OlsonDate[106]="有时,我很在意配偶的性兴趣与我的不一致。"
OlsonDate[107]="我很满意关于家庭计划和生育子女数的决定。"
OlsonDate[108]="我不在意配偶与异性朋友在一起。"
OlsonDate[109]="我说话时,配偶总是认真听着。"
OlsonDate[110]="我很在意谁管钱。"
OlsonDate[111]="配偶应用不公平方式同意或拒绝性生活,使我很烦恼。"
OlsonDate[112]="当我们争吵时,我通常不去想这是我的过错。"
OlsonDate[113]="对于我们的传统文化观念与价值观,我觉得很好。"
OlsonDate[114]="我和对偶在一起和分开度过的业余时间分配很公平。"
OlsonDate[115]="有时,我认为配偶过于盛气凌人。"
OlsonDate[116]="我认为任何生活在一起的配偶都没有我们夫妻和睦。"
OlsonDate[117]="有时我觉得对配偶感觉不到爱和感情。"
OlsonDate[118]="有时,配偶做一些使我不愉快的事。"
OlsonDate[119]="如果配偶有何过错,我也没意识到。"
OlsonDate[120]="即使世界上每一个异性都想嫁给我,我也不能作出比现在婚姻更好的选择。"
OlsonDate[121]="我们夫妻比世界上任何人都相互适应得好。"
OlsonDate[122]="关于配偶的每一件新鲜事儿都能使我高兴。"
OlsonDate[123]="我们的关系比它应有的状况更好。"
OlsonDate[124]="当我和配偶在一起时,我觉得任何人都不可能比我们幸福。"


var Olson=Array();
for(i=1;i<125;i++)
{
  Olson[i]={}
}
Olson[1]={
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
Olson[2]={
  "key":"2",
  "q":"神经过敏,心中不踏实",
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
Olson[3]={
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
Olson[4]={
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
Olson[5]={
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
Olson[6]={
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
Olson[7]={
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
Olson[8]={
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
Olson[9]={
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
Olson[10]={
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
Olson[11]={
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
Olson[12]={
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
Olson[13]={
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
Olson[14]={
  "key":"14",
  "q":"感到自己的精力下降,活动减慢",
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
Olson[15]={
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
Olson[16]={
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
Olson[17]={
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
Olson[18]={
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
Olson[19]={
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
Olson[20]={
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
Olson[21]={
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
Olson[22]={
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
Olson[23]={
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
Olson[24]={
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
Olson[25]={
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
Olson[26]={
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
Olson[27]={
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
Olson[28]={
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
Olson[29]={
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
Olson[30]={
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
Olson[31]={
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
Olson[32]={
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
Olson[33]={
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
Olson[34]={
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
Olson[35]={
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
Olson[36]={
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
Olson[37]={
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
Olson[38]={
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
Olson[39]={
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
Olson[40]={
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
Olson[41]={
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
Olson[42]={
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
Olson[43]={
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
Olson[44]={
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
Olson[45]={
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
Olson[46]={
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
Olson[47]={
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
Olson[48]={
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
Olson[49]={
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
Olson[50]={
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
Olson[51]={
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
Olson[52]={
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
Olson[53]={
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
Olson[54]={
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
Olson[55]={
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
Olson[56]={
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
Olson[57]={
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
Olson[58]={
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
Olson[59]={
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
Olson[60]={
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
Olson[61]={
  "key":"61",
  "q":"当别人看着您或谈论您时感到不自在",
}
Olson[62]={
  "key":"62",
  "q":"有一些不属于您自己的想法",
}
Olson[63]={
  "key":"63",
  "q":"有想打人或伤害他人的冲动",
}
Olson[64]={
  "key":"64",
  "q":"醒得太早",
}
Olson[65]={
  "key":"65",
  "q":"必须反复洗手、点数目或触摸某些东西",
}
Olson[66]={
  "key":"66",
  "q":"睡得不稳不深",
}
Olson[67]={
  "key":"67",
  "q":"有想摔坏或破坏东西的冲动",
}
Olson[68]={
  "key":"68",
  "q":"有一些别人没有的想法或念头",
}
Olson[69]={
  "key":"69",
  "q":"感到对别人神经过敏",
}
Olson[70]={
  "key":"70",
  "q":"在商店或电影院等人多的地方感到不自在",
}
Olson[71]={
  "key":"71",
  "q":"感到任何事情都很困难",
}
Olson[72]={
  "key":"72",
  "q":"一阵阵恐惧或惊恐",
}
Olson[73]={
  "key":"73",
  "q":"感到在公共场合吃东西很不舒服",
}
Olson[74]={
  "key":"74",
  "q":"常与人争论",
}
Olson[75]={
  "key":"75",
  "q":"独自一人时神经很紧张",
}
Olson[76]={
  "key":"76",
  "q":"别人对您的成绩没有作出恰当的评价",
}
Olson[77]={
  "key":"77",
  "q":"即使和别人在一起也感到孤单",
}
Olson[78]={
  "key":"78",
  "q":"感到坐立不安、心神不定",
}
Olson[79]={
  "key":"79",
  "q":"感到自己没有什么价值",
}
Olson[80]={
  "key":"80",
  "q":"感到熟悉的东西变成陌生或不像是真的",
}
Olson[81]={
  "key":"81",
  "q":"大叫或摔东西",
}
Olson[82]={
  "key":"82",
  "q":"害怕会在公共场合昏倒",
}
Olson[83]={
  "key":"83",
  "q":"感到别人想占您的便宜",
}
Olson[84]={
  "key":"84",
  "q":"为一些有关“性”的想法而很苦恼",
}
Olson[85]={
  "key":"85",
  "q":"您认为应该因为自己的过错而受到惩罚",
}
Olson[86]={
  "key":"86",
  "q":"感到要赶快把事情做完",
}
Olson[87]={
  "key":"87",
  "q":"感到自己的身体有严重问题",
}
Olson[88]={
  "key":"88",
  "q":"从未感到和其他人很亲近",
}
Olson[89]={
  "key":"89",
  "q":"感到自己有罪",
}
Olson[90]={
  "key":"90",
  "q":"感到自己的脑子有毛病",
}

var invertdate = [3,4,5,6,7,8,10,12,13,14,16,17,18,24,25,26,28,29,30,37,40,43,44,47,48,49,52,53,54,55,56,57,59,61,63,64,66,69,70,71,72,73,74,75,77,78,79,81,84,85,86,87,88,90,92,93,94,95,96,97,98,99,100,101,105,106,110,111,112,115,117,118,123]


for(i=1;i<125;i++)
{
  //console.log(OlsonDate[i])
  Olson[i].q = OlsonDate[i]
  Olson[i].sel = ""
  Olson[i].a = "确实"
  Olson[i].b = "可能"
  Olson[i].c = "未关注"
  Olson[i].d = "不太会"
  Olson[i].e = "否认"
  Olson[i].ret_a = "5"
  Olson[i].ret_b = "4"
  Olson[i].ret_c = "3"
  Olson[i].ret_d = "2"
  Olson[i].ret_e = "1"
  if(true==invertdate.includes(i))
  {
    Olson[i].ret_a = "1"
    Olson[i].ret_b = "2"
    Olson[i].ret_c = "3"
    Olson[i].ret_d = "4"
    Olson[i].ret_e = "5"
  }
}
var retnumber = new Array()
retnumber["过分理想化"] = [34,42,64,70,101,116,117,118,119,120,121,122,123,124]
retnumber["婚姻满意度"] = [14,19,32,36,52,53,82,88,99,113]
retnumber["性格相容性"] = [8,13,24,30,37,44,63,78,95,115]
retnumber["夫妻交流"] = [2,6,40,54,66,73,81,91,98,109]
retnumber["冲突解决方式"] = [4,10,39,58,71,74,79,83,96,112]
retnumber["经济安排"] = [16,20,26,38,45,51,77,85,93,110]
retnumber["业务活动"] = [1,17,18,28,31,33,60,72,84,114]
retnumber["性生活"] = [9,15,25,41,47,62,69,106,107,111]
retnumber["子女和婚姻"] = [5,21,35,49,50,59,67,87,94,102]
retnumber["亲友关系"] = [7,27,48,57,68,86,90,92,103,108]
retnumber["角色平等性"] = [12,23,29,43,55,61,75,80,97,105]
retnumber["信仰一致性"] = [3,11,22,46,56,65,76,89,100,104]
for(var i in retnumber){
  var retindex = retnumber[i]
  
  for(var x in retindex)
  {
    var indexnumber = Number(retindex[x])
    Olson[indexnumber].type = i
  }
}



class OlsonModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      Olson:[],
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var Olsonrandom = new Array();
    var runtimeOlson = Olson.concat()
    while(runtimeOlson.length>0)
    {
      var p = parseInt(Math.random()*runtimeOlson.length)
      if(undefined!=runtimeOlson[p])
      {Olsonrandom.push(runtimeOlson[p]);}
      runtimeOlson.splice(p,1)
    }
    //console.log(Olsonrandom)
    var checked = new Array();
    for(i=0;i<Olsonrandom.length;i++)
    {
      //checked[0]=undefined
checked[i]=""
      Olsonrandom[i].index=i
      Olsonrandom[i].key=i
      Olsonrandom[i].sel=""
    }
    //console.log(Olsonrandom)
    this.setState ({
      checked:checked,
      Olson:Olsonrandom,
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
    for(i=0;i<this.state.Olson.length;i++)
    {
      if(undefined != this.state.Olson[i] && this.state.checked[i]==="")
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
      
    title: RouteConfig["OlsonModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.Olson[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<Olson.length;i++)
      {
        //console.log(Olson[i].sel)
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
    var testOlson = this.state.Olson
    var ret = new Array();
    ret["过分理想化"]=ret["婚姻满意度"]=ret["性格相容性"]=ret["夫妻交流"]=ret["冲突解决方式"]=ret["经济安排"]=ret["业务活动"]=ret["性生活"]=ret["子女和婚姻"]=ret["亲友关系"]=ret["角色平等性"]=ret["信仰一致性"]=0

    var total = 0
    var bigtotal = 0 
    //console.log(testOlson)
    for(i=0;i<testOlson.length;i++)
    {
      var _p = testOlson[i].sel;
      var _t = testOlson[i].type
      
      if(''!=_p)
      {
        //console.log(testOlson[i].sel, testOlson[i].type)
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
    extrainfo.push( "各项T值分布情况及分子常模,阳性筛查只能说明可能存在问题,但不能证明存在问题,主要作为了解依据")
    extrainfo.push( "过分理想化:" + Math.floor(ret["过分理想化"] / 14 * 100) / 100 +"男：40.23±5.78 16-68 女：41.36±5.68 17－69") 
    extrainfo.push( "婚姻满意度:" + Math.floor(ret["婚姻满意度"] / 10 * 100) / 100 +"男：37.31±6.45 13-50 女：37.40±7.03 10－50" ) 
    extrainfo.push(  "性格相容性:" + Math.floor(ret["性格相容性"] /10 * 100) / 100 +"男：34.58±5.96 16-49 女：34.58±6.35 16－49" ) 
    extrainfo.push(  "夫妻交流:" + Math.floor(ret["夫妻交流"] /10 * 100) / 100  +"男：34.90±6.05 15－50 女：34.10±6.94 14－50") 
    extrainfo.push(  "冲突解决方式:" + Math.floor(ret["冲突解决方式"] / 10 * 100) / 100  +"男：34.05±5.84 11－50 女：33.85±6.43 13－50") 
    extrainfo.push(  "经济安排:" + Math.floor(ret["经济安排"] / 10 * 100) / 100  +"男：37.16±6.33 14－50 女：37.65±6.78 12－50") 
    extrainfo.push(  "业务活动:" + Math.floor(ret["业务活动"] / 10 * 100) / 100  +"男：33.99±3.90 22－46 女：34.81±4.38 21－47") 
    extrainfo.push(  "性生活:" + Math.floor(ret["性生活"] / 10 * 100) / 100  +"男：37.09±6.62 16－50 女：37.60±6.90 14－50") 
    extrainfo.push(  "子女和婚姻:" + Math.floor(ret["子女和婚姻"] / 10 * 100) / 100  +"男：38.35±5.58 20－50 女：38.25±5.72 19－50") 
    extrainfo.push(  "亲友关系:" + Math.floor(ret["亲友关系"] / 10 * 100) / 100  +"男：37.52±5.63 17－50 女：38.55±5.90 15－50") 
    extrainfo.push(  "角色平等性:" + Math.floor(ret["角色平等性"] / 10 * 100) / 100  +"男：28.86±5.45 13－48 女：28.06±5.80 13－47" )
    extrainfo.push(  "信仰一致性:" + Math.floor(ret["信仰一致性"] / 10 * 100) / 100  +"男：39.04±6.58 13－50 女：40.04±6.26 18－50") 
    //console.log(ret,total)
    var detailinfo = new Array
    detailinfo.push("过分理想化：共14条。测定受试者对婚姻的评价是否过于理想化。评分高,表明受试对婚姻的评价感情色彩浓,多见于婚前的情侣。评分低,表明受试对婚姻的评价比较现实,多见于寻求婚姻咨询的配偶中。\n")
    detailinfo.push("婚姻满意度：共10条。该因子通过测定婚姻10个方面的满意度,得出总的满意度。评分高表明婚姻关系大多数方面是和谐与满意的；评分低反映婚姻不满意。\n")
    detailinfo.push("性格相容性：共10条。该因子测定受试者对配偶行为方式的满意程度。主要是性质,但也包括吸烟、饮酒等。评分高表明满意配偶的行为方式；评分低表明不满意,并难以容忍。\n")
    detailinfo.push("夫妻交流的方式：共10条。该因子测定受试者对夫妻间交流的感受、性念与态度。主要包括对配偶发出与接受信息的方式的评价；对夫妻间相互分享情感与信息程度如何的主观感受；以及对夫妻间交流是否恰当的评价。评分高,表明受试对夫妻交流方式与交流量感到满意；评分低表明交流有缺陷,需改善交流技巧。\n")
    detailinfo.push("解决冲突的方式：共10条。测定受试者对夫妻中存在的冲突与解除冲突的感受、信念及态度。主要包括夫妻对识别与解决冲突是否坦诚相见,对其解决方式是否感到满意。评分高表明对解决冲突的方式满意,大多数冲突能够解决。评分低表明冲突往往不能解决,对解决方式也不满意。\n")
    detailinfo.push("经济安排：共10条。测定受试者对夫妻管理经济方法的态度。主要包括受试经济开销的习惯与观念,对家庭经济安排的看法,夫妻间经济安排的决定方式以及受试对家庭经济状况的评价。评分高表明受试对经济安排满意,对经济的开销抱实际的态度。评分低表明夫妻间在经济安排上有矛盾。\n")
    detailinfo.push("业余活动：共10条。测定受试业余活动的安排与满意度。主要包括业余活动的种类,是集体性的还是个人的,是主动参与还是被动参与,是夫妻共同参加的还是单独活动。以及受试对业余活动的看法,是应该夫妻共同活动后还是应保持相对的个人自由。评分高反映业余活动是和谐、灵活、夫妻有共感。评分低反映夫妻业余活动有矛盾。\n")
    detailinfo.push("性生活：共10条。测定受试者对夫妻感情与性关系的关注度和感受。主要包括夫妻情感表达、性问题交流的程度；对性行为与性交的态度以及是否生育子女等,评分高表示受试对夫妻情感表达满意,对性角色的状况满意。评分低表示不满意。\n")
    detailinfo.push("子女和婚姻：共10条。测定受试对是否生育子女以及子女数的态度。条目主要包括受试对夫妻双方担任父母角色的满意度,对生育子女的看法,对管教子女的意见是否统一,对之女的期望是否一致等。评分高表示对上述内容意见统一,满意。评分低表示不满意和由某一方面的矛盾。\n")
    detailinfo.push("与亲友关系：共10条。测定受试者对夫妻双方与亲友关系的感受。主要包括与双方亲友一起度过的时间,对与亲友一起活动的评价,是否与亲友存在潜在的冲突以及亲友对该婚姻的态度等。评分高表示夫妻双方与亲友关系和谐,评分低表示与亲友间存在潜在的冲突。\n")
    detailinfo.push("角色平等性：共10条。测定受试对婚姻关系中承担的各种角色的评价。包括家庭角色、性角色、父母角色以及职业角色等。评分高表示受试主张男女平等,希望夫妻角色公平分配。评分低表示受试主张传统的夫妻角色与责任分配。请注意：评分高低不表明对夫妻角色分配的满意度。如：OLSON研究发现,评分低的女性婚姻满意度高于评分高的女性。但如果夫妻双方评分均高,提示夫妻和谐度高。\n")
    detailinfo.push("信仰一致性：共10条。测定受试者有关婚姻的宗教信念及对夫妻双方宗教信念的评价。评分高,表明受试更倾向于保持传统的婚姻宗教信念；评分低,表明受试倾向于不受传统观念的束缚。双方评分一致,表明夫妻双方信仰一致,均高分提示双方均看重传统的婚姻观念。夫妻一方评分高,一方评分低,低者更可能是冲突的来源。\n")
    
    
    this.setState({
      ret:"总分:"+total + " 总均分:" + Math.floor(total / 124 * 100) / 100 ,
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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['Olsonlocation'], "霍兰德职业性格测试结果",this)}}                
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
              title={RouteConfig["OlsonModule"].titlename}
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
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='Olsonlocation'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["OlsonModule"].titlename}</Text>
      <FlatList

            data={this.state.Olson}
            extraData={this.state}
            keyExtractor={this.keyExtractor}
						renderItem={({ item }) => (
              <View id={item.id}>
              <Text style={styles.list}></Text>
              <Text style={styles.list}>第{item.index+1}题:{item.q}</Text>
              <View style = {styles.dateContainer}>
              <CheckBox containerStyle={styles.CheckBox} title = {item.a} checked={this.state.checked[Number(item.key)]==item.ret_a}  onPress={()=>this.updateIndex(Number(item.key),item.ret_a)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.b} checked={this.state.checked[Number(item.key)]==item.ret_b}  onPress={()=>this.updateIndex(Number(item.key),item.ret_b)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.c} checked={this.state.checked[Number(item.key)]==item.ret_c}  onPress={()=>this.updateIndex(Number(item.key),item.ret_c)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.d} checked={this.state.checked[Number(item.key)]==item.ret_d}  onPress={()=>this.updateIndex(Number(item.key),item.ret_d)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.e} checked={this.state.checked[Number(item.key)]==item.ret_e}  onPress={()=>this.updateIndex(Number(item.key),item.ret_e)}/>

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
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center',但无效 
    flexWrap:'wrap',
    alignItems: 'flex-start',
  },

})

module.exports=OlsonModule;  