

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
var DISC=Array();

DISC[1]={
  "key":"1",
  "q":"你倾向",
  "a":"对新事物下决心做好。",
  "b":"轻松自如融入环境。 ",
  "c":"表情多动多手势。",
  "d":"准确知道所有细节之间的逻辑关系。",
  "ret_a":"D",
  "ret_b":"S",
  "ret_c":"I",
  "ret_d":"C",
  "sel":"",
}
DISC[2]={
  "key":"2",
  "q":"你倾向",
  "a":"完成一件事后才接手新事。",
  "b":"充满乐趣与幽默感。",
  "c":"用逻辑与事实服人。",
  "d":"在任何冲突中不受干扰，保持冷静 。",
  "ret_a":"C",
  "ret_b":"I",
  "ret_c":"D",
  "ret_d":"S",
  "sel":"",
}
DISC[3]={
  "key":"3",
  "q":"你倾向",
  "a":"接受他人的观点，不坚持己见。",
  "b":"为他人利益愿意放弃个人意见。",
  "c":"认为与人相处好玩，无所谓挑战或商计。",
  "d":"决心用自己的方式做事。",
  "ret_a":"S",
  "ret_b":"C",
  "ret_c":"I",
  "ret_d":"D",
  "sel":"",
}
DISC[4]={
  "key":"4",
  "q":"你倾向",
  "a":"关心别人的感觉与需要。",
  "b":"他人利益愿意放弃个人意见。",
  "c":"认为与人相处好玩，无所谓挑战或商计。",
  "d":"决心用自己的方式做事。",
  "ret_a":"C",
  "ret_b":"S",
  "ret_c":"D",
  "ret_d":"I",
  "sel":"",
}
DISC[5]={
  "key":"5",
  "q":"你倾向",
  "a":"给旁人清新振奋的刺激。",
  "b":"对人诚实尊重。",
  "c":"自我约束情绪与热忱。",
  "d":"对任何情况都能很快做出有效的反映。",
  "ret_a":"I",
  "ret_b":"S",
  "ret_c":"C",
  "ret_d":"D",
  "sel":"",
}
DISC[6]={
  "key":"6",
  "q":"你倾向",
  "a":"容易接受任何情况和环境。",
  "b":"对周围的人事十分在乎",
  "c":"独立性强，机智，凭自己的能力判断",
  "d":"充满动力与兴奋",
  "ret_a":"S",
  "ret_b":"C",
  "ret_c":"D",
  "ret_d":"I",
  "sel":"",
}
DISC[7]={
  "key":"7",
  "q":"你倾向",
  "a":"事前做详尽计划，依计划进行工作",
  "b":"不因延误而懊恼，冷静且容忍度大",
  "c":"相信自己有转危为安的能力",
  "d":"运用性格魅力或鼓励推动别人参与",
  "ret_a":"C",
  "ret_b":"S",
  "ret_c":"D",
  "ret_d":"I",
  "sel":"",
}
DISC[8]={
  "key":"8",
  "q":"你倾向",
  "a":"自信，极少犹豫",
  "b":"不喜欢预先计划，或受计划牵制",
  "c":"生活与处事均依时间表，不喜欢干扰",
  "d":"安静，不易开启话匣子的人",
  "ret_a":"D",
  "ret_b":"I",
  "ret_c":"C",
  "ret_d":"S",
  "sel":"",
}
DISC[9]={
  "key":"9",
  "q":"你倾向",
  "a":"有系统、有条理安排事情",
  "b":"愿改变，很快与人协调配合 ",
  "c":"毫不保留，坦率发言",
  "d":"自信任何事都会好转",
  "ret_a":"C",
  "ret_b":"S",
  "ret_c":"D",
  "ret_d":"I",
  "sel":"",
}
DISC[10]={
  "key":"10",
  "q":"你倾向",
  "a":"不主动交谈，经常是被动的回答者",
  "b":"保持可靠、忠心、稳定",
  "c":"时时表露幽默感，任何事都能讲成惊天动地的故事",
  "d":"发号施令者，别人不敢造次反抗",
  "ret_a":"C",
  "ret_b":"S",
  "ret_c":"I",
  "ret_d":"D",
  "sel":"",
}
DISC[11]={
  "key":"11",
  "q":"你倾向",
  "a":"敢于冒险，下决心做好",
  "b":"带给别人欢乐，令人喜欢，容易相处",
  "c":"待人得体有耐心",
  "d":"做事秩序井然，记忆清新",
  "ret_a":"D",
  "ret_b":"I",
  "ret_c":"S",
  "ret_d":"C",
  "sel":"",
}
DISC[12]={
  "key":"12",
  "q":"你倾向",
  "a":"始终精神愉快，并把快乐推广到周围 ",
  "b":"情绪稳定，反应永远能让人预料到",
  "c":"对学术、艺术特别爱好",
  "d":"自我肯定个人能力与成功",
  "ret_a":"I",
  "ret_b":"S",
  "ret_c":"C",
  "ret_d":"D",
  "sel":"",
}
DISC[13]={
  "key":"13",
  "q":"你倾向",
  "a":"以自己完善的标准来设想衡量事情 ",
  "b":"自给自足，自我支持，无需他人帮忙",
  "c":"从不说或做引起他人不满与反对的事",
  "d":"游戏般地鼓励别人参与",
  "ret_a":"C",
  "ret_b":"D",
  "ret_c":"S",
  "ret_d":"I",
  "sel":"",
}
DISC[14]={
  "key":"14",
  "q":"你倾向",
  "a":"忘情地表达出自己的情感、喜好，与人娱乐时不由自主地接触别人",
  "b":"有很快做出判断与结论的能力",
  "c":"直接的幽默近乎讽刺",
  "d":"认真、深刻，不喜欢肤浅的谈话或喜好",
  "ret_a":"I",
  "ret_b":"D",
  "ret_c":"S",
  "ret_d":"C",
  "sel":"",
}
DISC[15]={
  "key":"15",
  "q":"你倾向",
  "a":"避免冲突，经常居中调和不同的意思",
  "b":"爱好且认同音乐的艺术性，不单是表演",
  "c":"闲不住，努力推动工作，别人跟随的领导",
  "d":"喜好周旋于宴会中，结交朋友",
  "ret_a":"S",
  "ret_b":"C",
  "ret_c":"D",
  "ret_d":"I",
  "sel":"",
}
DISC[16]={
  "key":"16",
  "q":"你倾向",
  "a":"善解人意，能记住特别的日子，不吝于帮助别人",
  "b":"不达目的誓不罢休",
  "c":"不断愉快地说话、谈笑，娱乐周围的人",
  "d":"易接受别人的想法和方法，不愿与人相左 ",
  "ret_a":"C",
  "ret_b":"D",
  "ret_c":"I",
  "ret_d":"S",
  "sel":"",
}
DISC[17]={
  "key":"17",
  "q":"你倾向",
  "a":"愿意听别人想说的",
  "b":"对理想、工作、朋友都有不可言喻的忠实",
  "c":"天生的带领者，不相信别人的能力如自己",
  "d":"充满生机，精力充沛",
  "ret_a":"S",
  "ret_b":"C",
  "ret_c":"D",
  "ret_d":"I",
  "sel":"",
}
DISC[18]={
  "key":"18",
  "q":"你倾向",
  "a":"满足自己拥有的，甚少羡慕人",
  "b":"要求领导地位及别人跟随",
  "c":"用图表数字来组织生活，解决问题",
  "d":"讨人喜欢，令人羡慕，人们注意的中心",
  "ret_a":"S",
  "ret_b":"D",
  "ret_c":"C",
  "ret_d":"I",
  "sel":"",
}
DISC[19]={
  "key":"19",
  "q":"你倾向",
  "a":"对己对人高标准，一切事情有秩序",
  "b":"易相处，易说话，易让人接近",
  "c":"不停地工作，不愿休息",
  "d":"聚会时的灵魂人物，受欢迎的宾客",
  "ret_a":"C",
  "ret_b":"S",
  "ret_c":"D",
  "ret_d":"I",
  "sel":"",
}
DISC[20]={
  "key":"20",
  "q":"你倾向",
  "a":"充满活力和生气的性格",
  "b":"大无畏，不怕冒险",
  "c":"时时保持自己举止合乎认同的道德规范",
  "d":"稳定，走中间路线",
  "ret_a":"I",
  "ret_b":"D",
  "ret_c":"S",
  "ret_d":"C",
  "sel":"",
}
DISC[21]={
  "key":"21",
  "q":"你倾向",
  "a":"面上极少流露表情或情绪",
  "b":"躲避别人的注意力",
  "c":"好表现，华而不实，声音大",
  "d":"命令支配，有时略傲慢",
  "ret_a":"S",
  "ret_b":"C",
  "ret_c":"I",
  "ret_d":"D",
  "sel":"",
}
DISC[22]={
  "key":"22",
  "q":"你倾向",
  "a":"生活任性无秩序",
  "b":"不易理解别人的问题与麻烦",
  "c":"不易兴奋，经常感到好事难成",
  "d":"不易宽恕或忘记别人对自己的伤害，易嫉妒",
  "ret_a":"I",
  "ret_b":"D",
  "ret_c":"S",
  "ret_d":"C",
  "sel":"",
}
DISC[23]={
  "key":"23",
  "q":"你倾向",
  "a":"抗拒或犹豫接受别人的方法，固执己见",
  "b":"不愿意参予，尤其当事物复杂时",
  "c":"把实际或想象的别人的冒犯，经常放在心中",
  "d":"反复讲同一件事或故事，忘记自己已重复多次，总是不断找话题说话",
  "ret_a":"D",
  "ret_b":"S",
  "ret_c":"C",
  "ret_d":"I",
  "sel":"",
}
DISC[24]={
  "key":"24",
  "q":"你倾向",
  "a":"经常感到强烈的担心、焦虑、悲戚",
  "b":"坚持做琐碎事情，要求注意细节",
  "c":"由于缺乏自我约束，不愿记无趣的事",
  "d":"直言不讳，不介意把自己的看法直说 ",
  "ret_a":"S",
  "ret_b":"C",
  "ret_c":"I",
  "ret_d":"D",
  "sel":"",
}
DISC[25]={
  "key":"25",
  "q":"你倾向",
  "a":"滔滔不绝的发言者，不是好听众，不留意别人也在讲话",
  "b":"难以忍受等待别人",
  "c":"很难下定决心",
  "d":"感到担心且无信心",
  "ret_a":"I",
  "ret_b":"D",
  "ret_c":"S",
  "ret_d":"C",
  "sel":"",
}
DISC[26]={
  "key":"26",
  "q":"你倾向",
  "a":"很难用语言或肢体当众表达感情",
  "b":"无兴趣且不愿介入团体活动或别人生活",
  "c":"由于强烈要求完美，而拒人千里之外",
  "d":"时而兴奋，时而低落，承诺总难兑现",
  "ret_a":"D",
  "ret_b":"S",
  "ret_c":"C",
  "ret_d":"I",
  "sel":"",
}
DISC[27]={
  "key":"27",
  "q":"你倾向",
  "a":"犹豫不决——迟迟才有行动，不易参与",
  "b":"标准太高，很难满意",
  "c":"不依照方法做事",
  "d":"坚持依自己的意见行事",
  "ret_a":"S",
  "ret_b":"C",
  "ret_c":"I",
  "ret_d":"D",
  "sel":"",
}
DISC[28]={
  "key":"28",
  "q":"你倾向",
  "a":"尽管期待好结果，但往往先看到事物的不利之处",
  "b":"自我评价高，认为自己是最好的人选",
  "c":"容许别人（包括孩子）做他喜欢做的事，为的是讨好别人，让人喜欢自己",
  "d":"中间性格，无高低情绪，很少表露感情",
  "ret_a":"C",
  "ret_b":"D",
  "ret_c":"I",
  "ret_d":"S",
  "sel":"",
}
DISC[29]={
  "key":"29",
  "q":"你倾向",
  "a":"不喜欢目标，也无意订目标",
  "b":"容易感到被人疏离，经常无安全感或担心别人不喜欢与自己相处",
  "c":"易与人争吵，永远觉得自己是正确的",
  "d":"有小孩般的情绪，易激动，事后马上又忘了",
  "ret_a":"S",
  "ret_b":"C",
  "ret_c":"D",
  "ret_d":"I",
  "sel":"",
}
DISC[30]={
  "key":"30",
  "q":"你倾向",
  "a":"不关心，得过且过，以不变应万变",
  "b":"充满自信，坚忍不拔，但常不适当",
  "c":"往往看到事物的反面，而少有积极的态度",
  "d":"孩子般的单纯，不喜欢去理解生命意义",
  "ret_a":"S",
  "ret_b":"D",
  "ret_c":"C",
  "ret_d":"I",
  "sel":"",
}
DISC[31]={
  "key":"31",
  "q":"你倾向",
  "a":"感到需要大量时间独处",
  "b":"为回报或成就感，不断工作，耻于休息",
  "c":"需要旁人认同、赞赏，如同演艺家，需要观众的掌声、笑声与接受",
  "d":"时时感到不确定、焦虑、心烦",
  "ret_a":"C",
  "ret_b":"D",
  "ret_c":"I",
  "ret_d":"S",
  "sel":"",
}
DISC[32]={
  "key":"32",
  "q":"你倾向",
  "a":"遇到困难退缩",
  "b":"被人误解时感到冒犯",
  "c":"常用冒犯或未斟酌的方式表达自己",
  "d":"难以自控，滔滔不绝，不是好听众",
  "ret_a":"S",
  "ret_b":"C",
  "ret_c":"D",
  "ret_d":"I",
  "sel":"",
}
DISC[33]={
  "key":"33",
  "q":"你倾向",
  "a":"事事不确定，又对事缺乏信心",
  "b":"冲动地控制事情或别人，指挥他人",
  "c":"很多时候情绪低落",
  "d":"缺乏组织生活秩序的能力",
  "ret_a":"S",
  "ret_b":"D",
  "ret_c":"C",
  "ret_d":"I",
  "sel":"",
}
DISC[34]={
  "key":"34",
  "q":"你倾向",
  "a":"思想兴趣放在内心，活在自己的世界里",
  "b":"对多数事情均漠不关心",
  "c":"不接受他人的态度、观点、做事方法",
  "d":"善变，互相矛盾，情绪与行动不合逻辑",
  "ret_a":"C",
  "ret_b":"S",
  "ret_c":"D",
  "ret_d":"I",
  "sel":"",
}
DISC[35]={
  "key":"35",
  "q":"你倾向",
  "a":"生活无秩序，经常找不到东西",
  "b":"情绪不易高涨，不被欣赏时很容易低落",
  "c":"低声说话，不在乎说不清楚",
  "d":"精明处事，影响事物，使自己得利",
  "ret_a":"I",
  "ret_b":"C",
  "ret_c":"S",
  "ret_d":"D",
  "sel":"",
}
DISC[36]={
  "key":"36",
  "q":"你倾向",
  "a":"行动思想均比较慢，通常是懒于行动",
  "b":"不容易相信别人，寻究语言背后的真正动机",
  "c":"决心依自己的意愿行事，不易被说服",
  "d":"要吸引人，要做注意力的集中点 ",
  "ret_a":"S",
  "ret_b":"C",
  "ret_c":"D",
  "ret_d":"I",
  "sel":"",
}
DISC[37]={
  "key":"37",
  "q":"你倾向",
  "a":"说话声与笑声总是令全场震惊",
  "b":"毫不犹豫地表示自己的正确或控制能力",
  "c":"总是先估量每件事要耗费多少精力",
  "d":"需大量时间独处，喜避开人群",
  "ret_a":"I",
  "ret_b":"D",
  "ret_c":"S",
  "ret_d":"C",
  "sel":"",
}
DISC[38]={
  "key":"38",
  "q":"你倾向",
  "a":"当别人不能合乎自己的要求，如动作不够快，易感到不耐烦而发怒",
  "b":"凡事起步慢，需要推动力 ",
  "c":"凡事情怀疑，不相信别人",
  "d":"无法专心或集中注意力",
  "ret_a":"D",
  "ret_b":"S",
  "ret_c":"C",
  "ret_d":"I",
  "sel":"",
}
DISC[39]={
  "key":"39",
  "q":"你倾向",
  "a":"不甘愿的、挣扎、不愿参与或投入",
  "b":"情感不定，记恨并力惩冒犯自己的人",
  "c":"因无耐性，不经思考，草率行动",
  "d":"喜新厌旧，不喜欢长期做相同的事",
  "ret_a":"S",
  "ret_b":"C",
  "ret_c":"I",
  "ret_d":"D",
  "sel":"",
}
DISC[40]={
  "key":"40",
  "q":"你倾向",
  "a":"为避免矛盾，宁愿放弃自己的立场",
  "b":"不断地衡量和下判断，经常考虑提出相反的意见",
  "c":"精明，总是有办法达到目的",
  "d":"像孩子般注意力短暂，需要各种变化，怕无聊",
  "ret_a":"S",
  "ret_b":"C",
  "ret_c":"D",
  "ret_d":"I",
  "sel":"",
}

class DISCModule extends React.Component {
   constructor(props) {
    super(props);
    
    this.randominit()
  }

  randominit()
  {
    this.state = {
      checked:[],
      DISC:[],
      ret:"",
      extrainfo:"",
      retdetail:"",
      closetest:false,
      pie:"",
    }
  }
  
  clear()
  {
    var DISCrandom = new Array();
    var ret = new Array();
    ret["D"]=ret["I"]=ret["S"]=ret["C"]=0
    var runtimeDISC = DISC.concat()
    var checked = new Array();
    while(runtimeDISC.length>0)
    {
      var p = parseInt(Math.random()*runtimeDISC.length)
      if(undefined!=runtimeDISC[p])
      {DISCrandom.push(runtimeDISC[p]);}
      runtimeDISC.splice(p,1)
    }
    var checked = new Array();
    for(i=0;i<DISCrandom.length;i++)
    {
      checked[0]=undefined
checked[i]=""
      DISCrandom[i].index=i
      DISCrandom[i].key=i
    }
    this.setState( {
      checked:checked,
      DISC:DISCrandom,
      ret:"",
      extrainfo:"",
      retdetail:"",
      closetest:false,
      pie:""
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
      
    title:RouteConfig["DISCModule"].titlename
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.DISC[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<DISC.length;i++)
      {
        //console.log(DISC[i].sel)
      }
    }
  }

  check(){
    //if(__DEV__)
//    {return true}
    for(i=0;i<DISC.length;i++)
    {
      if(undefined != DISC[i] && this.state.checked[i]==="")
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
    var testDISC = this.state.DISC
    var ret = new Array();
    ret["D"]=ret["I"]=ret["S"]=ret["C"]=0
    for(i=0;i<testDISC.length;i++)
    {
      var _p = testDISC[i].sel;
      ret[_p] = ret[_p] + 1; 
    }
    //console.log(ret);
    var extrainfo = new Array
    extrainfo.push( "D型人(支配型，Dominance)性格分析和职业建议:1. 人际和行为风格：大胆、进取、创新、好胜、果敢、独立、敏捷、直接、强硬、主动、爱冒险的、有竞争力的。D型人适合从事的职业：政治人物、民意代表、律师、高阶主管、老板 、个人工作室、有权有实的领导人、业务代表、业务主管、创业家、职业军人、传销商。D型人的职业特质：兴趣与挑战" )
    extrainfo.push( "I型人(安定型，Steadiness)性格分析和职业建议:1. 人际和行为风格：热情、自信、乐观、活跃、善于表达、说服力强、令人愉快、乐于助人、受欢迎的、好交际的、可信赖的。 I型人适合从事的职业：教育训练、演艺人员、传播、设计师、广告创意、媒体AE、业务员、客户服务、节目制作、公共关系、娱乐事业、行销企划、柜台接待、旅游事业。I 型人的职业特质：探索与活跃"  )
    extrainfo.push( "S型人(安定型，Steadiness)性格分析和职业建议:1. 人际和行为风格：友善、亲切、可靠、耐心、忠实、从容、合群、稳定、善于倾听、善解人意。2. S型人适合从事的职业：老师、辅导员、社工、柜台接待、特别助理、顾问、行政人员、秘书、总务、幼教人员、公务人员、非营利事业组织人员。S型人的职业特质：稳定与执行")
    extrainfo.push( "C型人(分析型，Compliance)性格分析和职业建议:1. 人际和行为风格：自律、准确、谨慎、保守、严谨、高标准、善于分析、逻辑性强、完美主义。C型的人适合从事的职业：深入研究、继续深造、念硕士班、博士班、艺术家、作家、导演、程式设计师、投资理财人员、管理顾问、编辑、经营企划专员、土地开发、法务、稽核、成本控制、会计、精算师、银行办事员、证券分析师、科技公司的品管、制程、开发、研究人员、制造业里面对机器、零件、生产流程的工程人员。C型人的职业特质：完美与缜密" )
    //console.log(ret,total)
    var detailinfo = new Array
    detailinfo.push("每个人都是DISC四种人格特质的综合，其中1-2种特质比较突出，对性格起到主导作用。没有单一特质的人，少数人的四种特质均衡，即变色龙。相同分数选前者，若所有分数都界于11~29之间，则为变色龙。\n")
    //console.log(resulttable,person_ret)
    var person_ret=""
    if(ret["D"]>=ret["I"])
    {
      person_ret="D型支配型人"
      if(ret["S"]>=ret["C"])
      {
        if(ret["S"]>ret["D"])
        {
          person_ret="S型安定型人"
        }
      }
      else{
        if(ret["C"]>ret["D"])
        {
          person_ret="C型分析型人"
        }
      }
    }
    else{
      person_ret="I型安定型人"
      if(ret["S"]>=ret["C"])
      {
        if(ret["S"]>ret["I"])
        {
          person_ret="S型安定型人"
        }
      }
      else{
        if(ret["C"]>ret["I"])
        {
          person_ret="C型分析型人"
        }
      }
    }



    var person_ret
    this.setState({
      ret:"您是："+person_ret+" D:"+ret["D"]+" I:"+ret["I"]+" S:"+ret["S"]+" C:"+ret["C"],
      extrainfo:extrainfo,
      detailinfo:detailinfo,
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
              onPress={()=>WechatShare.snapshot(this.refs["DISClocation"],"DISC测试结果")}  
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['DISClocation'], "DISC测试结果",this)}}
                                  
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
              title={RouteConfig["DISCModule"].titlename}
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
              colorScale={["#ED065C", "#EDC806","#ED069F",  "#D0ED06"]}
              data={[
                { x: 1, y: ret["D"] + 1, label: 'D' },
                { x: 2, y: ret["I"] + 1, label: 'I' },
                { x: 3, y: ret["S"] + 1, label: 'S' },
                { x: 4, y: ret["C"] + 1, label: 'C' },
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
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='DISClocation'>
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["DISCModule"].titlename}</Text>
      <FlatList

            data={this.state.DISC}
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
              </View>
              <Text></Text>
              </View>
            )}
        />
        
        
        <View>
        <Text style={styles.list}></Text>
        <Text style={styles.list}>{this.state.ret}</Text>
        <Text style={styles.list}></Text>
        {this.createpie()}
        <Text style={styles.list}></Text>
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
    justifyContent:'flex-start',
    flexWrap:'wrap',
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

module.exports=DISCModule;  