
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import ScreenConfig from '../../../config/ScreenConfig';
import {StyleConfig,FontStyleConfig} from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
var BFDate = Array()
BFDate[1]="我不是一个充满烦恼的人。"
BFDate[2]="我真的喜欢大部份我遇见的人。"
BFDate[3]="我不喜欢浪费时间去做白日梦。"
BFDate[4]="我会怀疑及讽刺别人的企图。"
BFDate[5]="在工作上，我是有效率又能胜任的。"
BFDate[6]="我很少感到恐惧及焦虑。"
BFDate[7]="我很喜欢与别人交谈。"
BFDate[8]="大自然和艺术的规律形态使我感到极为奥妙。"
BFDate[9]="我相信如果你允许别人占你的便宜，很多人都会这样做。"
BFDate[10]="我会保持我的物件整齐和清洁。"
BFDate[11]="我经常感到紧张及心神不定。"
BFDate[12]="我喜欢很多人在我周围。"
BFDate[13]="我对诗词只有少许感觉甚至无动於衷。"
BFDate[14]="如果需要，我会去操纵别人而达到我所想要的。"
BFDate[15]="我不是一个做事有条不紊的人。"
BFDate[16]="别人对待我的方式常使我感到愤怒。"
BFDate[17]="当我阅读一首诗或欣赏一件艺术品时，我有时会感到兴奋或惊喜。"
BFDate[18]="我一向喜欢单独工作。"
BFDate[19]="有些人觉得我自私又自我中心。"
BFDate[20]="我好像总是不能把事情安排得井井有条。"
BFDate[21]="我很少感到寂寞或忧郁。"
BFDate[22]="我宁愿我行我素也不愿成为别人的领袖。"
BFDate[23]="我很少注意自己在不同环境下的情绪或感觉。"
BFDate[24]="有些人觉得我冷漠又爱算计。"
BFDate[25]="我会尽心尽力完成一切分派给我的工作。"
BFDate[26]="有时我感到自已完全一文不值。"
BFDate[27]="我常常感到精力旺盛。"
BFDate[28]="当我找到了做事情的正确方法后，我会坚持采用这个方法。"
BFDate[29]="我通常会尽力体贴及顾虑周到。"
BFDate[30]="我有时不能做到我应有的可靠或可信。"
BFDate[31]="我很少感到忧郁或沮丧。"
BFDate[32]="我生活的节奏很快。"
BFDate[33]="我经常会去尝试新的及外国的食物。"
BFDate[34]="大部份认识我的人都喜欢我。"
BFDate[35]="当我做了承诺，通常我能贯彻到底。"
BFDate[36]="很多时候，当事情不对劲时，我会感到挫败及想放弃。"
BFDate[37]="我是一个十分活跃的人。"
BFDate[38]="我喜欢思考及把玩理论或抽象的观念。"
BFDate[39]="我宁愿与人合作，而不愿与人竞争。"
BFDate[40]="我有一套明确的目标，并能有条不紊地朝著它而工作。"
BFDate[41]="有时我会羞愧得想躲起来。"
BFDate[42]="我喜欢身历其境，置身於事件之中。"
BFDate[43]="我没有兴趣思索宇宙的规律或人类的情况。"
BFDate[44]="如果我不喜欢某一个人，我会让他知道。"
BFDate[45]="我努力完成我的目标。"
BFDate[46]="我经常感到自己不如别人。"
BFDate[47]="我并不是一个乐观主义者。"
BFDate[48]="我对思考性的事物充满好奇。"
BFDate[49]="我时常和家人及同事起争执。"
BFDate[50]="我凡事必追求卓越。"
BFDate[51]="我经常感到无助，并希望有人能解决我的问题。"
BFDate[52]="我是一个快乐、高兴的人。"
BFDate[53]="我相信让学生听富争论性的演讲只会混淆及误导他们的思想。"
BFDate[54]="我对自已有很高的评价。"
BFDate[55]="我颇能按造自已的步伐，把事情准时办妥。"
BFDate[56]="当我处于极大压力下，有时候我会感到好像精神崩溃似的。"
BFDate[57]="我很容易笑。"
BFDate[58]="我认为在道德问题上做决定时，我们应遵从宗教权威。"
BFDate[59]="在态度上，我是顽固不妥协的。"
BFDate[60]="我要花很多时间才能安顿下来工作。"
var BIGFIVE=Array();
for(i=1;i<61;i++)
{
  BIGFIVE[i]={}
}

var invertdate = [1,6,21,31,18,22,47,3,13,28,43,53,58,4,9,14,19,24,44,49,54,20,30,60]

for(i=1;i<61;i++)
{
  BIGFIVE[i].sel = ""
  BIGFIVE[i].q = BFDate[i]
  BIGFIVE[i].a = "否认"
  BIGFIVE[i].b = "不符合"
  BIGFIVE[i].c = "可能"
  BIGFIVE[i].d = "同意"
  BIGFIVE[i].e = "非常同意"
  BIGFIVE[i].ret_a = "1"
  BIGFIVE[i].ret_b = "2"
  BIGFIVE[i].ret_c = "3"
  BIGFIVE[i].ret_d = "4"
  BIGFIVE[i].ret_e = "5"
  if(true==invertdate.includes(i))
  {
    BIGFIVE[i].ret_a = "5"
    BIGFIVE[i].ret_b = "4"
    BIGFIVE[i].ret_c = "3"
    BIGFIVE[i].ret_d = "2"
    BIGFIVE[i].ret_e = "1"
  }
}

var retnumber = new Array()
retnumber["神经质"] = [1,6,11,16,21,26,31,36,41,46,51,56]
retnumber["外倾性"] = [2,7,12,18,22,27,32,37,42,47,52,57]
retnumber["开放性"] = [3,8,13,17,23,28,33,38,43,48,53,58]
retnumber["宜人性"] = [4,9,14,19,24,29,34,39,44,49,54,59]
retnumber["责任心"] = [5,10,15,20,25,30,35,40,45,50,55,60]

for(var i in retnumber){
  var retindex = retnumber[i]
  for(var x in retindex)
  {
    var indexnumber = Number(retindex[x])
    BIGFIVE[indexnumber].type = i
  }
}




class BIGFIVEModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      BIGFIVE:[],
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var BIGFIVErandom = new Array();
    var runtimeBIGFIVE = BIGFIVE.concat()
    while(runtimeBIGFIVE.length>0)
    {
      var p = parseInt(Math.random()*runtimeBIGFIVE.length)
      if(undefined!=runtimeBIGFIVE[p])
      {BIGFIVErandom.push(runtimeBIGFIVE[p]);}
      runtimeBIGFIVE.splice(p,1)
    }
    //console.log(BIGFIVErandom)
    var checked = new Array();
    for(i=0;i<BIGFIVErandom.length;i++)
    {
      //checked[0]=undefined
checked[i]=""
      BIGFIVErandom[i].index=i
      BIGFIVErandom[i].key=i
      BIGFIVErandom[i].sel=""
    }
    //console.log(BIGFIVErandom)
    this.setState ({
      checked:checked,
      BIGFIVE:BIGFIVErandom,
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
    for(i=0;i<this.state.BIGFIVE.length;i++)
    {
      if(undefined != this.state.BIGFIVE[i] && this.state.checked[i]==="")
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
      
    title: RouteConfig["BIGFIVEModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.BIGFIVE[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<BIGFIVE.length;i++)
      {
        //console.log(BIGFIVE[i].sel)
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
    var testBIGFIVE = this.state.BIGFIVE
    var ret = new Array();
    ret["神经质"]=ret["外倾性"]=ret["开放性"]=ret["宜人性"]=ret["责任心"]=0
    var total = 0
    var bigtotal = 0 
    //console.log(testBIGFIVE)
    for(i=0;i<testBIGFIVE.length;i++)
    {
      var _p = testBIGFIVE[i].sel;
      var _t = testBIGFIVE[i].type
      
      if(''!=_p)
      {
        //console.log(testBIGFIVE[i].sel, testBIGFIVE[i].type)
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
    extrainfo.push( "神经质:" +ret["神经质"]   + "20分以下为典型低分，38分以上为典型高分。") 
    extrainfo.push( "外倾性:" +ret["外倾性"]   + "26分以下为典型低分，42分以上为典型高分。") 
    extrainfo.push(  "开放性:" + ret["开放性"]    + "32分以下为典型低分，47分以上为典型高分。") 
    extrainfo.push(  "宜人性:" + ret["宜人性"]    + "30分以下为典型低分，48分以上为典型高分。") 
    extrainfo.push(  "责任心:" +ret["责任心"]    + "36分以下为典型低分，44分以上为典型高分。") 

    
    //console.log(ret,total)
    var detailinfo = new Array
    detailinfo.push("神经质：指个休体验消极情绪的倾向。神经质维度得分高的人更容易体验到诸如愤怒、焦虑、抑郁等消极的情绪。他们对外界刺激反应比一般人强烈，对情绪的调节能力比较差，经常处于一种不良的情绪状态下。并且这些人思维、决策、以及有效应对外部压力的能力比较差。相反，神经质维度得分低的人较少烦恼，较少情绪化，比较平静，但这并不表明他们经常会有积极的情绪体验，积极情绪体验的频繁程度是外向性的主要内容。\n")
    detailinfo.push("外倾性：指个体对外部世界的积极投入程度。外向者乐于和人相处，充满活力，常常怀有积极的情绪体验。内向者往往安静，抑制，谨慎，对外部世界不太感兴趣。内向者喜欢独处，内向者的独立和谨慎有时会被错认为不友好或傲慢。\n")
    detailinfo.push("开放性：指个体想像力以及好奇心程度。开放性得分高的人富有想象力和创造力，好奇，欣赏艺术，对美的事物比较敏感。开放性的人偏爱抽象思维，兴趣广泛。封闭性的人讲求实际，偏爱常规，比较传统和保守。开放性的人适合教授等职业，封闭性的人适合警察、销售、服务性职业等。\n")
    detailinfo.push("宜人性：反应个体在合作与社会和谐性方面的差异。宜人的个体重视和他人的和谐相处，因此他们体贴友好，大方乐于助人，愿意谦让。不宜人的个体更加关注自己的利益，他们一般不关心他人，有时候怀疑他人的动机。不宜人的个体非常理性，很适合科学、工程、军事等此类要求客观决策的情境。\n")
    detailinfo.push("责任心 ：指个体在目标导向行为上的组织、坚持和动机。这个子维度把可靠的、讲究的、有能力的个体和懒散的、行为不规范的个体作比较。同时反映个体自我控制的程度以及延迟需求满足的能力。正面表现为行为规范，可靠，有能力，有责任心，他们似乎总是能把事情做好，处处让人感到满意。负面表现为行为不规范，粗心，做事效率低，不可靠。\n")
    
    this.setState({
      ret:"总分:"+total,
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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['BIGFIVElocation'], "霍兰德职业性格测试结果",this)}}                
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
              title={RouteConfig["BIGFIVEModule"].titlename}
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
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='BIGFIVElocation'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["BIGFIVEModule"].titlename}</Text>
      <FlatList

            data={this.state.BIGFIVE}
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
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    flexWrap:'wrap',
    alignItems: 'flex-start',
  },

})

module.exports=BIGFIVEModule;  