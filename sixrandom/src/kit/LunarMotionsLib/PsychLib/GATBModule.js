
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import ScreenConfig from '../../../config/ScreenConfig';
import StyleConfig from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
var GATBDate=Array()
GATBDate[1]="善于表达自己的观点"
GATBDate[2]="阅读速度快，并能抓住中心内容"
GATBDate[3]="清楚地向别人解释难懂的概念"
GATBDate[4]="对文章中的字、词、段落和篇章的理解、分析和综合的能力"
GATBDate[5]="掌词汇量的程度"
GATBDate[6]="语文成绩"

GATBDate[7]="作出精确的测量（如测长、宽、高等）"
GATBDate[8]="解算术应用题"
GATBDate[9]="笔算能力"
GATBDate[10]="心算能力"
GATBDate[11]="使用工具（如计算器）的计算能力"
GATBDate[12]="中学时你的数学成绩"

GATBDate[13]="美术素描画的水平"
GATBDate[14]="画三维度的立体图形"
GATBDate[15]="看几何图形的立体感"
GATBDate[16]="想象盒子展开后平面形状"
GATBDate[17]="玩拼板（图）游戏"

GATBDate[18]="发现相似图形中的细微差异"
GATBDate[19]="识别物体的差异"
GATBDate[20]="注意到多数人所忽视的物体的细节部分"
GATBDate[21]="检查物体的细节"
GATBDate[22]="观察图案是否正确"
GATBDate[23]="学习时善于找出数学作业的细小错误"

GATBDate[24]="快而正确地抄写资料?(诸如姓名、日期、电话号码等)"
GATBDate[25]="阅读中发现错别字"
GATBDate[26]="发现计算错误"
GATBDate[27]="在图书馆很快地查找编码卡片"
GATBDate[28]="发现图表中的细小错误"
GATBDate[29]="自我控制能加力（如较长时间地进行抄写资料工作）"

GATBDate[30]="劳动技术中做操纵机器一类活动"
GATBDate[31]="玩电子游戏工瞄准打靶"
GATBDate[32]="在体操、广播操一类活动中身体的灵活性"
GATBDate[33]="打球的姿势的水平度"
GATBDate[34]="打字比赛或算盘比赛"
GATBDate[35]="闭眼单脚站立的平衡能力"

GATBDate[36]="灵巧地使用手工工具（如榔头、锤子）忍"
GATBDate[37]="灵巧地使很小的工具（如镊子、缝衣针等"
GATBDate[38]="弹乐器时手指的灵活度"
GATBDate[39]="动手做一件小手工品 "
GATBDate[40]="很快地削水果（如苹果、梨子）"
GATBDate[41]="修理、装配、拆卸、纺织、缝补等一类活动 "

GATBDate[42]="善于在陌生的场合发表自己的意见"
GATBDate[43]="善于在新场合结交新朋友"
GATBDate[44]="口头表达力"
GATBDate[45]="善于与人友好交往，并协同工作 "
GATBDate[46]="善于帮助别人"
GATBDate[47]="擅长做别人的思想工作"

GATBDate[48]="善于单位或班级的集体活动"
GATBDate[49]="在集体活动或学习中，时常关心他人的情况"
GATBDate[50]="在日常是能经常动脑筋，想出别人想不一样的好点子"
GATBDate[51]="冷静果断处理突然发生的事情"
GATBDate[52]="在你曾做过的组织工作中，你认为自己的能力属于哪一水平"
GATBDate[53]="善于解决同事或同学之间的矛盾"

var GATB=Array();
for(i=1;i<54;i++)
{
  GATB[i] = {}
}

for(i=1;i<54;i++)
{
  GATB[i].q = GATBDate[i]
  GATB[i].key = i
  GATB[i].sel = ""
  GATB[i].a = "强"
  GATB[i].b = "较强"
  GATB[i].c = "一般"
  GATB[i].d = "较弱"
  GATB[i].e = "弱"
  GATB[i].ret_a = 1
  GATB[i].ret_b = 2
  GATB[i].ret_c = 3
  GATB[i].ret_d = 4
  GATB[i].ret_e = 5
}
var retnumber = new Array()
retnumber["言语能力"] = [1,2,3,4,5,6] //6
retnumber["数理能力"] = [7,8,9,10,11,12] //9
retnumber["空间判断能力"] =[13,14,15,16,17] //11
retnumber["察觉细节能力"] =[18,19,20,21,22,23] //6
retnumber["书写能力"] =[24,25,26,27,28,29] //7
retnumber["运动协调能力"] =[30,31,32,33,34,35] //9
retnumber["动手能力"] =[36,37,38,39,40,41] //12
retnumber["社会交往能力"] =[42,43,44,45,46,47] //12
retnumber["组织管理能力"] =[48,49,50,51,52,53] //12
for(var i in retnumber){
  var retindex = retnumber[i]
  
  for(var x in retindex)
  {
    var indexnumber = Number(retindex[x])
    GATB[indexnumber].type = i
  }
}



class GATBModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      GATB:[],
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var GATBrandom = new Array();
    var runtimeGATB = GATB.concat()
    while(runtimeGATB.length>0)
    {
      var p = parseInt(Math.random()*runtimeGATB.length)
      if(undefined!=runtimeGATB[p])
      {GATBrandom.push(runtimeGATB[p]);}
      runtimeGATB.splice(p,1)
    }
    //console.log(GATBrandom)
    var checked = new Array();
    for(i=0;i<GATBrandom.length;i++)
    {
      checked[0]=undefined
checked[i]=""
      GATBrandom[i].index=i
      GATBrandom[i].key=i
      GATBrandom[i].sel=""
    }
    //console.log(GATBrandom)
    this.setState ({
      checked:checked,
      GATB:GATBrandom,
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
      closetest:false,
    })
    console.log("clear",GATBrandom)

  }
  check(){
    //if(__DEV__)
//    {return true}
    for(i=0;i<GATB.length;i++)
    {
      if(undefined != DISC[i] && this.state.checked[i]==="")
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
      
    title: RouteConfig["GATBModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.GATB[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<GATB.length;i++)
      {
        //console.log(GATB[i].sel)
      }
    }

  }

  result()
  {
    if(false==this.check())
    {
      return
    }
    var testGATB = this.state.GATB
    var ret = new Array();

    ret["言语能力"]=ret["数理能力"]=ret["空间判断能力"]=ret["察觉细节能力"]=ret["书写能力"]=ret["运动协调能力"]=ret["动手能力"]=ret["社会交往能力"]=ret["组织管理能力"]=0
    var total = 0
    var bigtotal = 0 
    //console.log(testGATB)
    for(i=0;i<testGATB.length;i++)
    {
      var _p = testGATB[i].sel;
      var _t = testGATB[i].type
      
      if(''!=_p)
      {
        //console.log(testGATB[i].sel, testGATB[i].type)
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
    extrainfo.push( "所有分量得分都在1-5之间，“1”为强；“2”为较强；“3”为一般；“4”为较弱；“5”为弱。评定等级可有有小数点，如：等级2.2,表示此种能力水平稍低于较强水平,高于一般水平") 
    extrainfo.push( "言语能力:" + Math.floor(ret["言语能力"] /retnumber["言语能力"].length  * 100)/100) 
    extrainfo.push( "数理能力:" + Math.floor(ret["数理能力"] / retnumber["数理能力"].length * 100)/100) 
    extrainfo.push(  "空间判断能力:" + Math.floor(ret["空间判断能力"] / retnumber["空间判断能力"].length * 100)/100 ) 
    extrainfo.push(  "察觉细节能力:" + Math.floor(ret["察觉细节能力"] / retnumber["察觉细节能力"].length * 100)/100 ) 
    extrainfo.push(  "书写能力:" + Math.floor(ret["书写能力"] / retnumber["书写能力"].length * 100)/100 ) 
    extrainfo.push(  "运动协调能力:" + Math.floor(ret["运动协调能力"] / retnumber["运动协调能力"].length * 100)/100  ) 
    extrainfo.push(  "动手能力:" + Math.floor(ret["动手能力"] / retnumber["动手能力"].length * 100)/100 ) 
    extrainfo.push(  "社会交往能力:" + Math.floor(ret["社会交往能力"] / retnumber["社会交往能力"].length  * 100)/100 ) 
    extrainfo.push(  "组织管理能力:" + Math.floor(ret["组织管理能力"] / retnumber["组织管理能力"].length  * 100)/100 ) 
    //console.log(ret,total)
    var detailinfo = new Array
    detailinfo.push("言语能力:指对词及其含义的理解和使用能力,对词、句子、段落篇章的理解能力，以及善于清楚正确地表达自己的观念和向别人介绍信息的能力。\n ")
    detailinfo.push("数理能力：指迅速而准确地运算以及在准确的同时，能推理、解决应用问题的能力。\n ")
    detailinfo.push("空间判断能力：指对立体图形以及平面图形与立体图形之间关系的理解能力，包括能看懂几何图形，对立体图形的三个面的理解力，识别物体在空间运动中的联系，解决几何问题。\n ")
    detailinfo.push("察觉细节能力：指对物体或图形的有关细节具有正确的知觉能力，对于图形的明暗、线的宽度和长度作出区别和比较，看出其细微的差异。\n")
    detailinfo.push("书写能力：对词、印刷物、帐目、表格等材料的细微部分具有正确知觉的能力 ，善于发现错字和正确地校对数字的能力。\n ")
    detailinfo.push("运动协调：指眼、手、脚、身体迅速准确随活动的作出精确的动作和运动反应，手能跟随眼所看到的东西迅速行动，进行正确控制的能力。\n ")
    detailinfo.push("动手能力 ：指手、手指、手腕能迅速而准确地活动和操作小的物体，在拿取、放置、换、翻转物体时手能作出精巧运动和腕的自由运动能力。\n ")
    detailinfo.push("社会交往能力：指善于人与人之间的相互交往，相互联系，相互帮助，相互影响。从而协同工作或建立良好的人际关系。\n ")
    detailinfo.push("组织管理能力：指擅长组织上和安排各种活动，以用协调参加活动中人的人际关系的能力。\n ")

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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['GATBlocation'], "霍兰德职业性格测试结果",this)}}                
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
              title={RouteConfig["GATBModule"].titlename}
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
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='GATBlocation'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["GATBModule"].titlename}</Text>
      <FlatList

            data={this.state.GATB}
            extraData={this.state}
            keyExtractor={this.keyExtractor}
						renderItem={({ item }) => (
              <View id={item.id}>
              <Text style={styles.list}></Text>
              <Text style={styles.list}>第{item.index+1}题:{item.q}</Text>
              <View style = {styles.dateContainer}>
              <CheckBox containerStyle={styles.CheckBox} title = {item.a} checked={this.state.checked[Number(item.key+1)]===item.ret_a}  onPress={()=>this.updateIndex(Number(item.key+1),item.ret_a)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.b} checked={this.state.checked[Number(item.key+1)]===item.ret_b}  onPress={()=>this.updateIndex(Number(item.key+1),item.ret_b)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.c} checked={this.state.checked[Number(item.key+1)]===item.ret_c}  onPress={()=>this.updateIndex(Number(item.key+1),item.ret_c)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.d} checked={this.state.checked[Number(item.key+1)]===item.ret_d}  onPress={()=>this.updateIndex(Number(item.key+1),item.ret_d)}/>
              
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

module.exports=GATBModule;  