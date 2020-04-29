
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import ScreenConfig from '../../../config/ScreenConfig';
import {StyleConfig,FontStyleConfig} from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
var FADDate=Array()
FADDate[1]="由于我们彼此误解，难于安排一些家庭活动"
FADDate[2]="我们在住处附近解决大多数日常问题                   "
FADDate[3]="当家中有人烦恼时，其他人知道他为什么烦恼"
FADDate[4]="当你要求某人去做某事时，你必须检查他们是否做了"
FADDate[5]="如果某人遇到麻烦时，其他人会过分关注"
FADDate[6]="发生危机时，我们能相互支持"
FADDate[7]="当发生出乎预料的意外时，我们手足无措"
FADDate[8]="我们家时常把我们所需要的东西用光了"
FADDate[9]="我们相互都不愿流露自己的感情"
FADDate[10]="我们肯定家庭成员都尽到了各自的家庭职责"
FADDate[11]="我们不能相互谈论我们的忧愁"
FADDate[12]="我们常根据我们对问题的决定去行动"
FADDate[13]="你的事只有对别人也重要时，他们才会感兴趣"
FADDate[14]="从那些人正在谈的话中，你不明白其中一个人是怎么想的"
FADDate[15]="家务事没有由家庭成员充分分担"
FADDate[16]="每个人是什么样的，都能被别人认可"
FADDate[17]="你不按规矩办事，却很易逃脱处分"
FADDate[18]="大家都把事情摆在桌面上说，而不用暗示的方法"
FADDate[19]="我们中有些人缺乏感情"
FADDate[20]="在遇到突发事件时，我们知道怎么处理"
FADDate[21]="我们避免谈及我们害怕和关注的事"
FADDate[22]="我们难得相互说出温存的感受"
FADDate[23]="我们遇到经济困难"
FADDate[24]="在我们家试图解决一个问题之后，我们通常要讨论这个问题是否已解决"
FADDate[25]="我们太以自我为中心了"
FADDate[26]="我们能相互表达出自己的感受"
FADDate[27]="我们对梳妆服饰习惯无明确要求"
FADDate[28]="我们彼此间不表示爱意"
FADDate[29]="我们对人说话都直说，而不转弯抹角"
FADDate[30]="我们每个人都有特定的任务和职责"
FADDate[31]="家庭的情绪氛围很不好"
FADDate[32]="我们有惩罚人的原则"
FADDate[33]="只有当某事使我们都感兴趣时，我们才一起参加"
FADDate[34]="没有时间去做自己感兴趣的事"
FADDate[35]="我们常不把自己的想法说出来"
FADDate[36]="我们感到我们能被别人容忍"
FADDate[37]="只有当某件事对个人有利时我们相互才感兴趣"
FADDate[38]="我们能解决大多数情绪上的烦恼"
FADDate[39]="在我们家，亲密和温存居次要地位"
FADDate[40]="我们讨论谁做家务"
FADDate[41]="在我们家对事情作出决定是困难的"
FADDate[42]="我们家的人只有在对自己有利时，才彼此关照"
FADDate[43]="我们相互间都很坦率"
FADDate[44]="我们不遵从任何规则和标准"
FADDate[45]="如果要人去做某件事，他们常需别人提醒"
FADDate[46]="我们能够对如何解决问题作出决定"
FADDate[47]="如果原则被打破，我们不知道将会发生什么事"
FADDate[48]="在我们家任何事都行得通"
FADDate[49]="我们将温存表达出来"
FADDate[50]="我们镇静地面对涉及感情的问题"
FADDate[51]="我们不能和睦相处"
FADDate[52]="我们一生了气，就互不讲话"
FADDate[53]="一般来说，我们对分配给自己的家务活都感到不满意"
FADDate[54]="尽管我们用意良好，但还是过多地干预了彼此的生活"
FADDate[55]="我们有应付危险情况的原则"
FADDate[56]="我们相互信赖"
FADDate[57]="我们当众哭出来"
FADDate[58]="我们没有合适的交通工具"
FADDate[59]="当我们不喜欢有的人的所作所为时，我们就会给他指出来"
FADDate[60]="我们想尽各种办法来解决问题"
var FAD=Array();
for(i=1;i<61;i++)
{
  FAD[i] = {}
}

var invertdate = [ 
                  1,4,5,7,8,9,
                  11,13,14,15,17,19,21,22,23,25,27,28,31,33,34,35,
                  37,39,41,42,44,45,47,48,51,52,53,54,58
                  ]

for(i=1;i<61;i++)
{
  FAD[i].q = FADDate[i]
  FAD[i].key = i
  FAD[i].sel = ""
  FAD[i].a = "很像我家"
  FAD[i].b = "像我家"
  FAD[i].c = "不像我家"
  FAD[i].d = "完全不像我家"
  FAD[i].ret_a = 1
  FAD[i].ret_b = 2
  FAD[i].ret_c = 3
  FAD[i].ret_d = 4
  if(true==invertdate.includes(i))
  {
    FAD[i].ret_a = 4
    FAD[i].ret_b = 3
    FAD[i].ret_c = 2
    FAD[i].ret_d = 1
  }
}
var retnumber = new Array()
retnumber["问题解决"] = [2,12,24,38,50,60] //6
retnumber["沟通"] = [3,14,18,22,29,35,43,52,59] //9
retnumber["角色"] =[4,8,10,15,23,30,34,40,45,53,58] //11
retnumber["情感反应"] =[9,19,28,39,49,57] //6
retnumber["情感介入"] =[5,13,25,33,37,42,54] //7
retnumber["行为控制"] =[7,17,20,27,32,44,47,48,55] //9
retnumber["总的功能"] =[1,6,11, 16, 21, 26, 31, 36, 41, 46, 51, 56] //12

for(var i in retnumber){
  var retindex = retnumber[i]
  
  for(var x in retindex)
  {
    var indexnumber = Number(retindex[x])
    FAD[indexnumber].type = i
  }
}



class FADModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      FAD:[],
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var FADrandom = new Array();
    var runtimeFAD = FAD.concat()
    while(runtimeFAD.length>0)
    {
      var p = parseInt(Math.random()*runtimeFAD.length)
      if(undefined!=runtimeFAD[p])
      {FADrandom.push(runtimeFAD[p]);}
      runtimeFAD.splice(p,1)
    }
    //console.log(FADrandom)
    var checked = new Array();
    for(i=0;i<FADrandom.length;i++)
    {
      //checked[0]=undefined
checked[i]=""
      FADrandom[i].index=i
      FADrandom[i].key=i
      FADrandom[i].sel=""
    }
    //console.log(FADrandom)
    this.setState ({
      checked:checked,
      FAD:FADrandom,
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
      closetest:false,
    })
    console.log("clear",FADrandom)

  }
  check(){
    //if(__DEV__)
//    {return true}
    for(i=0;i<this.state.FAD.length;i++)
    {
      if(undefined != this.state.FAD[i] && this.state.checked[i]==="")
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
      
    title: RouteConfig["FADModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.FAD[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<FAD.length;i++)
      {
        //console.log(FAD[i].sel)
      }
    }

  }

  result()
  {
    if(false==this.check())
    {
      return
    }
    var testFAD = this.state.FAD
    var ret = new Array();

    ret["问题解决"]=ret["沟通"]=ret["角色"]=ret["情感反应"]=ret["情感介入"]=ret["行为控制"]=ret["总的功能"]=0

    var total = 0
    var bigtotal = 0 
    //console.log(testFAD)
    for(i=0;i<testFAD.length;i++)
    {
      var _p = testFAD[i].sel;
      var _t = testFAD[i].type
      
      if(''!=_p)
      {
        //console.log(testFAD[i].sel, testFAD[i].type)
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
    extrainfo.push( "所有分量得分都在1-4之间，所有分量得分越低越健康，每项需要完成70%的题目，否则无效") 
    extrainfo.push( "问题解决:" + Math.floor(ret["问题解决"] /retnumber["问题解决"].length  * 100)/100 + " PS信度系数0.66") 
    extrainfo.push( "沟通:" + Math.floor(ret["沟通"] / retnumber["沟通"].length * 100)/100 + " CM信度系数0.72") 
    extrainfo.push(  "角色:" + Math.floor(ret["角色"] / retnumber["角色"].length * 100)/100 + " RL信度系数0.57") 
    extrainfo.push(  "情感反应:" + Math.floor(ret["情感反应"] / retnumber["情感反应"].length * 100)/100 + " AR信度系数0.76") 
    extrainfo.push(  "情感介入:" + Math.floor(ret["情感介入"] / retnumber["情感介入"].length * 100)/100 + " AI信度系数0.67") 
    extrainfo.push(  "行为控制:" + Math.floor(ret["行为控制"] / retnumber["行为控制"].length * 100)/100 + " BC信度系数0.73") 
    extrainfo.push(  "总的功能:" + Math.floor(ret["总的功能"] / retnumber["总的功能"].length  * 100)/100 + " GF信度系数0.71") 

    //console.log(ret,total)
    var detailinfo = new Array
    detailinfo.push("问题解决(Problem sloving，PS)：指在维持有效的家庭功能水平时，这个家庭解决问题(指威胁到家庭完整和功能容量的问题)的能力\n ")
    detailinfo.push("沟通(Communication，CM)：家庭成员的信息交流。重点在言语信息的内容是否清楚，信息传递是否直接。\n ")
    detailinfo.push("角色(Roles，RL )：这里指家庭是否建立了完成一系列家庭功能的行为模式，如提供生活来源，营养和支持，支持个人发展，管理家庭，提供成人性的满足。此外，还包括任务分工是否明确和公平及家庭成员是否认真地完成了任务，\n ")
    detailinfo.push("情感反应(Affective Responsiveness，AR)：评定家庭成员对刺激的情感反应的程度")
    detailinfo.push("情感介入(Affective Involvement，AI)：评定家庭成员相互之间对对方的活动和一些事情关心和重视的程度，\n ")
    detailinfo.push("行为控制(Behavior Control，BC)：评定一个家庭的行为方式。在不同的情形下有不同的行为控制模式\n ")
    detailinfo.push("总的功能(General Functioning，GF)：从总体上评定家庭的功能\n ")


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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['FADlocation'], "霍兰德职业性格测试结果",this)}}                
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
              title={RouteConfig["FADModule"].titlename}
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
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='FADlocation'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["FADModule"].titlename}</Text>
      <FlatList

            data={this.state.FAD}
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
              <CheckBox containerStyle={styles.CheckBox} title = {item.d} checked={this.state.checked[Number(item.key)]===item.ret_d}  onPress={()=>this.updateIndex(Number(item.key),item.ret_d)}/>
              
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

module.exports=FADModule;  