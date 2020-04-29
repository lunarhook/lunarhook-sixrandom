
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import ScreenConfig from '../../../config/ScreenConfig';
import {StyleConfig,FontStyleConfig} from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
var MHRSPDate=Array()
MHRSPDate[1]="不能正确认识字母或拼读音节"
MHRSPDate[2]="不能正确辨认汉字"
MHRSPDate[3]="不懂得数的大小和序列关系"
MHRSPDate[4]="计算困难"
MHRSPDate[5]="绘画时定位不准，涂色不合规范"
MHRSPDate[6]="图画作品中有前后.左右位置颠倒的现象"
MHRSPDate[7]="一提起学习即心烦意乱"
MHRSPDate[8]="课堂讨论或与家长谈论学习问题时不感兴趣"
MHRSPDate[9]="不能按时交作业或作业质量差"
MHRSPDate[10]="考试不及格"
MHRSPDate[11]="遇到一点小事也担忧"
MHRSPDate[12]="心神不定，坐立不安"
MHRSPDate[13]="食欲不振，心慌气促"
MHRSPDate[14]="头痛.失眠.汗多.尿频"
MHRSPDate[15]="害怕上学，多方逃避"
MHRSPDate[16]="不敢独自出家门"
MHRSPDate[17]="一人独处时恐慌害怕"
MHRSPDate[18]="无缘无故地闷闷不乐"
MHRSPDate[19]="精力下降，活动减少"
MHRSPDate[20]="受到重大刺激不激动.不流泪"
MHRSPDate[21]="心胸狭窄，猜疑"
MHRSPDate[22]="依赖他人"
MHRSPDate[23]="嫉妒他人"
MHRSPDate[24]="胆怯，害羞"
MHRSPDate[25]="自卑，自责"
MHRSPDate[26]="遇事犹豫不决"
MHRSPDate[27]="固执，任性"
MHRSPDate[28]="容易发火"
MHRSPDate[29]="孤僻，不合群"
MHRSPDate[30]="与人对立"
MHRSPDate[31]="交新朋友困难"
MHRSPDate[32]="在集体场合适应困难"
MHRSPDate[33]="自我中心，不遵守集体规则"
MHRSPDate[34]="不能融洽地与同学相处"
MHRSPDate[35]="与教师或家长发生冲突"
MHRSPDate[36]="被别人误解后耿耿于怀"
MHRSPDate[37]="不能和常人一样地与异性交往"
MHRSPDate[38]="受到挫折后反应过分强烈或压抑"
MHRSPDate[39]="容易闯祸"
MHRSPDate[40]="面对新环境（迁居.转学等）适应困难"
MHRSPDate[41]="骂人"
MHRSPDate[42]="搞恶作剧"
MHRSPDate[43]="起哄，无理取闹"
MHRSPDate[44]="打架斗殴"
MHRSPDate[45]="故意破坏"
MHRSPDate[46]="考试作弊"
MHRSPDate[47]="说谎"
MHRSPDate[48]="偷盗"
MHRSPDate[49]="逃学"
MHRSPDate[50]="离家出走"
MHRSPDate[51]="习惯性眨眼"
MHRSPDate[52]="习惯性皱眉或皱额"
MHRSPDate[53]="习惯性努嘴或嗅鼻"
MHRSPDate[54]="习惯性点头或摇头"
MHRSPDate[55]="习惯性吞咽或打呃"
MHRSPDate[56]="习惯性咳嗽"
MHRSPDate[57]="习惯性耸肩"
MHRSPDate[58]="吸吮手指.嘴嚼衣服或其他物品"
MHRSPDate[59]="咬指甲"
MHRSPDate[60]="吸烟或饮酒"
MHRSPDate[61]="反复数课本或其他图书上人物的数目"
MHRSPDate[62]="反复检查作业是否作对了"
MHRSPDate[63]="睡觉前反复检查个人的衣服鞋袜是否放整齐了"
MHRSPDate[64]="一天洗手十几次，每次持续十几分钟"
MHRSPDate[65]="注意力不集中，做事有头无尾"
MHRSPDate[66]="上课时小动作多，干扰他人"
MHRSPDate[67]="不合场合，特别好动"
MHRSPDate[68]="做作业时边做边玩"
MHRSPDate[69]="好冲动，行动鲁莽"
MHRSPDate[70]="不知危险，好伤人或自伤"
MHRSPDate[71]="尿床"
MHRSPDate[72]="口吃"
MHRSPDate[73]="好沉默不语，甚至长时间一言不发"
MHRSPDate[74]="入睡困难"
MHRSPDate[75]="睡觉不安稳，好讲梦话"
MHRSPDate[76]="睡觉时好磨牙"
MHRSPDate[77]="睡觉中突然哭喊，惊叫"
MHRSPDate[78]="睡觉中突然起床活动，醒后对此无记忆"
MHRSPDate[79]="厌食，偏食或拒食"
MHRSPDate[80]="身体无病却反复呕吐"
var MHRSP=Array();
for(i=1;i<81;i++)
{
  MHRSP[i] = {}
}



for(i=1;i<81;i++)
{
  MHRSP[i].q = MHRSPDate[i]
  MHRSP[i].key = i
  MHRSP[i].sel = ""
  MHRSP[i].a = "经常"
  MHRSP[i].b = "偶尔"
  MHRSP[i].c = "没有"
  MHRSP[i].ret_a = 2
  MHRSP[i].ret_b = 1
  MHRSP[i].ret_c = 0
}
var retnumber = new Array()
retnumber["学习障碍"] = [1,2,3,4,5,6,7,8,9,10] //6
retnumber["情绪障碍"] = [11,12,13,14,15,16,17,18,19,20] //9
retnumber["性格缺陷"] =[21,22,23,24,25,26,27,28,29,30] //11
retnumber["社会适应障碍"] =[31,32,33,34,35,36,37,38,39,40] //6
retnumber["品德缺陷"] =[41,42,43,44,45,46,47,48,49,50] //7
retnumber["不良习惯"] =[51,52,53,54,55,56,57,58,59,60] //9
retnumber["行为障碍"] =[61,62,63,64,65,66,67,68,69,70] //12
retnumber["特种障碍"] =[71,72,73,74,75,76,77,78,79,80] //6



for(var i in retnumber){
  var retindex = retnumber[i]
  
  for(var x in retindex)
  {
    var indexnumber = Number(retindex[x])
    MHRSP[indexnumber].type = i
  }
}



class MHRSPModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      MHRSP:[],
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var MHRSPrandom = new Array();
    var runtimeMHRSP = MHRSP.concat()
    while(runtimeMHRSP.length>0)
    {
      var p = parseInt(Math.random()*runtimeMHRSP.length)
      if(undefined!=runtimeMHRSP[p])
      {MHRSPrandom.push(runtimeMHRSP[p]);}
      runtimeMHRSP.splice(p,1)
    }
    //console.log(MHRSPrandom)
    var checked = new Array();
    for(i=0;i<MHRSPrandom.length;i++)
    {
      //checked[0]=undefined
checked[i]=""
      MHRSPrandom[i].index=i
      MHRSPrandom[i].key=i
      MHRSPrandom[i].sel=""
    }
    //console.log(MHRSPrandom)
    this.setState ({
      checked:checked,
      MHRSP:MHRSPrandom,
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
      closetest:false,
    })
    console.log("clear",MHRSPrandom)

  }
  check(){
    //if(__DEV__)
//    {return true}
    for(i=0;i<this.state.MHRSP.length;i++)
    {
      if(undefined != this.state.MHRSP[i] && this.state.checked[i]==="")
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
      
    title: RouteConfig["MHRSPModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.MHRSP[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<MHRSP.length;i++)
      {
        //console.log(MHRSP[i].sel)
      }
    }

  }

  result()
  {
    if(false==this.check())
    {
      return
    }
    var testMHRSP = this.state.MHRSP
    var ret = new Array();

    ret["学习障碍"]=ret["情绪障碍"]=ret["性格缺陷"]=ret["社会适应障碍"]=ret["品德缺陷"]=ret["不良习惯"]=ret["行为障碍"]=ret["特种障碍"]=0

    var total = 0
    var bigtotal = 0 
    //console.log(testMHRSP)
    for(i=0;i<testMHRSP.length;i++)
    {
      var _p = testMHRSP[i].sel;
      var _t = testMHRSP[i].type
      
      if(''!=_p)
      {
        //console.log(testMHRSP[i].sel, testMHRSP[i].type)
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

    extrainfo.push( "学习障碍:" + Math.floor(ret["学习障碍"]  ) ) 
    extrainfo.push( "情绪障碍:" + Math.floor(ret["情绪障碍"]  ) ) 
    extrainfo.push(  "性格缺陷:" + Math.floor(ret["性格缺陷"]  ) ) 
    extrainfo.push(  "社会适应障碍:" + Math.floor(ret["社会适应障碍"] ) ) 
    extrainfo.push(  "品德缺陷:" + Math.floor(ret["品德缺陷"]  ) ) 
    extrainfo.push(  "不良习惯:" + Math.floor(ret["不良习惯"]  ) ) 
    extrainfo.push(  "行为障碍:" + Math.floor(ret["行为障碍"]  ) ) 
    extrainfo.push(  "特种障碍:" + Math.floor(ret["特种障碍"] ) ) 
    //console.log(ret,total)
    var detailinfo = new Array
    detailinfo.push("若一个量表的合计分数达到10分或10分以上，一般可以认为存在该方面的心理问题\n ")
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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['MHRSPlocation'], "霍兰德职业性格测试结果",this)}}                
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
              title={RouteConfig["MHRSPModule"].titlename}
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
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='MHRSPlocation'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["MHRSPModule"].titlename}</Text>
      <FlatList

            data={this.state.MHRSP}
            extraData={this.state}
            keyExtractor={this.keyExtractor}
						renderItem={({ item }) => (
              <View id={item.id}>
              <Text style={styles.list}></Text>
              <Text style={styles.list}>第{item.index+1}题:{item.q}</Text>
              <View style = {styles.dateContainer}>
              <CheckBox containerStyle={styles.CheckBox} title = {item.a} checked={this.state.checked[Number(item.key)]===item.ret_a}  onPress={()=>this.updateIndex(Number(item.key),item.ret_a)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.b} checked={this.state.checked[Number(item.key)]===item.ret_b}  onPress={()=>this.updateIndex(Number(item.key),item.ret_b)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.c} checked={this.state.checked[Number(item.key)]===item.ret_c}  onPress={()=>this.updateIndex(Number(item.key),item.ret_c)}/>
              
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

module.exports=MHRSPModule;  