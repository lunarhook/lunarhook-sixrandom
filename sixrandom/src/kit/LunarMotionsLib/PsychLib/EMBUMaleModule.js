
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import ScreenConfig from '../../../config/ScreenConfig';
import {StyleConfig,FontStyleConfig} from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
var EMBUMaleDate=Array()
EMBUMaleDate[1]="我觉得我父母干涉我做的任何一件事。"
EMBUMaleDate[2]="我能通过父母的言谈、表情感受他（她）很喜欢我。"
EMBUMaleDate[3]="与我的兄弟姐妹相比，父母更宠爱我。"
EMBUMaleDate[4]="我能感受到父母对我的喜爱。"
EMBUMaleDate[5]="即使是很小的过错，父母也惩罚我。"
EMBUMaleDate[6]="父母总试图潜移默化的影响我，使我成为出类拔萃的人。"
EMBUMaleDate[7]="我觉得父母允许我在某些方面有独到之处。"
EMBUMaleDate[8]="父母能让我得到其他兄弟姐妹得不到的东西。"
EMBUMaleDate[9]="父母对我的惩罚是公平的。"
EMBUMaleDate[10]="我觉得父母对我很严厉。"
EMBUMaleDate[11]="父母总是左右我该穿什么衣服活该打扮成什么样子。"
EMBUMaleDate[12]="父母不允许我做一些其他孩子可以做的事情，因为他们害怕我会出事。"
EMBUMaleDate[13]="在我小时候，父母曾经当着别人的面打我或训我。"
EMBUMaleDate[14]="父母总是很关心我晚上干什么。"
EMBUMaleDate[15]="当遇到不顺心的事时，我能感到父母在尽量鼓励我，使我得到一些发展。"
EMBUMaleDate[16]="父母总是过分担心我的健康。"
EMBUMaleDate[17]="父母对我惩罚往往超过我应受的程度。"
EMBUMaleDate[18]="如果我在家里不听吩咐，父母就会恼火。"
EMBUMaleDate[19]="如果我做错了什么事，父母总是以一种伤心的样子使我有一种犯罪感或负疚感。"
EMBUMaleDate[20]="我觉得父母难以接近。"
EMBUMaleDate[21]="父母曾在别人面前唠叨一些我说过的话或作过的事，这时我感到很难堪。"
EMBUMaleDate[22]="我觉得父母更喜欢我，而不是我的兄弟姐妹。"
EMBUMaleDate[23]="在满足我需要的东西，父母是很小气的。"
EMBUMaleDate[24]="父母常常很在乎我取得分数。"
EMBUMaleDate[25]="如果我面临一项困难的任务，我能感到来自父母的支持。"
EMBUMaleDate[26]="我在家里往往被当作“替罪羊”或“害群之马”。"
EMBUMaleDate[27]="父母总是挑剔我所喜欢的朋友。"
EMBUMaleDate[28]="父母总是以为它们的不快是由我引起的"
EMBUMaleDate[29]="父母总试图鼓励我，使我成为佼佼者。"
EMBUMaleDate[30]="父母总向我表示他们是爱我的。"
EMBUMaleDate[31]="父母对我很信任且允许我独自完成某些事。"
EMBUMaleDate[32]="我觉父母很尊重我的观点。"
EMBUMaleDate[33]="我觉得父母很愿意跟我在一起。"
EMBUMaleDate[34]="我觉得父母对我很小气、很吝啬。"
EMBUMaleDate[35]="父母总是向我说类似这样的话“如果你这样做我会很伤心”。"
EMBUMaleDate[36]="父母要求我回到家里必须得向他们说明我在做的事情。"
EMBUMaleDate[37]="我觉得父母在尽量使我的青春更有意义和丰富多彩。（如给我买很多的书，安排我去夏令营或参加俱乐部）"
EMBUMaleDate[38]="父母经常向我表述类似这样的话“这就是我们为你整日操劳而得到的报答吗？”"
EMBUMaleDate[39]="父母常以不能娇惯我为借口不满足我的要求。"
EMBUMaleDate[40]="如果不按父母所期望的去做，就会使我良心上感到不安。"
EMBUMaleDate[41]="我觉得父母对我的学习成绩，体育活动或类似的事情有较高的要求。"
EMBUMaleDate[42]="当我感到伤心的时候可以从父母那儿得到安慰。"
EMBUMaleDate[43]="父母曾无缘无故的惩罚我。"
EMBUMaleDate[44]="父母允许我做一些我的朋友们做的事情。"
EMBUMaleDate[45]="父母经常对我说他们不喜欢我在家的表现。"
EMBUMaleDate[46]="每当我吃饭时，父母就劝我或强迫我再多吃一些。"
EMBUMaleDate[47]="父母经常当着别人的面批评我既懒惰，又无用。"
EMBUMaleDate[48]="父母常常关注我交什么样的朋友。"
EMBUMaleDate[49]="如果发什么事情，我常常是兄弟姐妹中唯一受责备的一个。"
EMBUMaleDate[50]="父母能让我顺其自然的发展。"
EMBUMaleDate[51]="父母经常对我粗俗无礼。"
EMBUMaleDate[52]="有时甚至为一点儿鸡毛蒜皮的小事，父母也会严厉的惩罚我。"
EMBUMaleDate[53]="父母曾无缘无故的打我。"
EMBUMaleDate[54]="父母通常会参与我的业余爱好活动。"
EMBUMaleDate[55]="我经常挨父母的打。"
EMBUMaleDate[56]="父母常常允许我到我喜欢去的地方，而他们又不会过分担心。"
EMBUMaleDate[57]="父母对我该做什么、不该做什么都有严格的限制而决不让步。"
EMBUMaleDate[58]="父母以一种使我难堪的方式对待我。"
EMBUMaleDate[59]="我觉得父母对我可能出事的担心是夸大的、过分的。"
EMBUMaleDate[60]="我觉得与父母之间存在一种温暖、体贴和亲热的感觉。"
EMBUMaleDate[61]="父母能容忍我与他们有不同的见解。"
EMBUMaleDate[62]="父母常常在我不知道原因的情况下对我大发脾气。"
EMBUMaleDate[63]="当我做的事情取得成功时，我觉得父母为我很自豪。"
EMBUMaleDate[64]="与我的兄弟姐妹相比，父母常常偏爱我。"
EMBUMaleDate[65]="有时即使错误在我，父母也把责任归咎于兄弟姐妹。"
EMBUMaleDate[66]="父母经常拥抱我。"
var EMBUMale=Array();
for(i=1;i<67;i++)
{
  EMBUMale[i] = {}
}
var invertdate = [ 20,50,56]

for(i=1;i<67;i++)
{
  EMBUMale[i].q = EMBUMaleDate[i]
  EMBUMale[i].key = i
  EMBUMale[i].sel = ""
  EMBUMale[i].a = "从不"
  EMBUMale[i].b = "偶尔"
  EMBUMale[i].c = "经常"
  EMBUMale[i].d = "总是"
  EMBUMale[i].ret_a =1
  EMBUMale[i].ret_b = 2
  EMBUMale[i].ret_c = 3
  EMBUMale[i].ret_d = 4
  if(true==invertdate.includes(i))
  {
    EMBUMale[i].ret_a = 4
    EMBUMale[i].ret_b = 3
    EMBUMale[i].ret_c = 2
    EMBUMale[i].ret_d = 1
  }

}
var retnumber = new Array()
retnumber["情感温暖理解"] = [2,4,6,7,9,15,20,25,29,30,31,32,33,37,42,44,60,61,66]
retnumber["惩罚严厉"] = [5,13,17,18,43,49,51,52,53,55,58,62]
retnumber["过分干涉"] =[1,10,11,14,27,36,48,50,56,57]
retnumber["偏爱被试"] =[3,8,22,64,65]
retnumber["拒绝否认"] =[21,23,28,34,35,45]
retnumber["过度保护"] =[12,16,39,40,46,59]
retnumber["其他"] = [19,24,26,38,41,47,54,63]
for(var i in retnumber){
  var retindex = retnumber[i]
  
  for(var x in retindex)
  {
    var indexnumber = Number(retindex[x])
    EMBUMale[indexnumber].type = i
  }
}



class EMBUMaleModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      EMBUMale:[],
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var EMBUMalerandom = new Array();
    var runtimeEMBUMale = EMBUMale.concat()
    while(runtimeEMBUMale.length>0)
    {
      var p = parseInt(Math.random()*runtimeEMBUMale.length)
      if(undefined!=runtimeEMBUMale[p])
      {EMBUMalerandom.push(runtimeEMBUMale[p]);}
      runtimeEMBUMale.splice(p,1)
    }
    //console.log(EMBUMalerandom)
    var checked = new Array();
    for(i=0;i<EMBUMalerandom.length;i++)
    {
      //checked[0]=undefined
checked[i]=""
      EMBUMalerandom[i].index=i
      EMBUMalerandom[i].key=i
      EMBUMalerandom[i].sel=""
    }
    //console.log(EMBUMalerandom)
    this.setState ({
      checked:checked,
      EMBUMale:EMBUMalerandom,
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
      closetest:false,
    })
    console.log("clear",EMBUMalerandom)

  }
  check(){
    //if(__DEV__)
//    {return true}
    for(i=0;i<this.state.EMBUMale.length;i++)
    {
      if(undefined != this.state.EMBUMale[i] && this.state.checked[i]==="")
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
      
    title: RouteConfig["EMBUMaleModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.EMBUMale[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<EMBUMale.length;i++)
      {
        //console.log(EMBUMale[i].sel)
      }
    }

  }

  result()
  {
    if(false==this.check())
    {
      return
    }
    var testEMBUMale = this.state.EMBUMale
    var ret = new Array();

    ret["情感温暖理解"]=ret["惩罚严厉"]=ret["过分干涉"]=ret["偏爱被试"]=ret["拒绝否认"]=ret["其他"]=ret["过度保护"]=0

    var total = 0
    var bigtotal = 0 
    //console.log(testEMBUMale)
    for(i=0;i<testEMBUMale.length;i++)
    {
      var _p = testEMBUMale[i].sel;
      var _t = testEMBUMale[i].type
      
      if(''!=_p)
      {
        //console.log(testEMBUMale[i].sel, testEMBUMale[i].type)
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
    ret["情感温暖理解"]=ret["惩罚严厉"]=ret["过分干涉"]=ret["偏爱被试"]=ret["拒绝否认"]=ret["其他"]=ret["过度保护"]=0
    extrainfo.push( "情感温暖理解:" + Math.floor(ret["情感温暖理解"] ) ) 
    extrainfo.push( "惩罚严厉:" + Math.floor(ret["惩罚严厉"]) ) 
    extrainfo.push(  "过分干涉:" + Math.floor(ret["过分干涉"]) ) 
    extrainfo.push(  "偏爱被试:" + Math.floor(ret["偏爱被试"]) ) 
    extrainfo.push(  "拒绝否认:" + Math.floor(ret["拒绝否认"]) ) 
    extrainfo.push(  "过度保护:" + Math.floor(ret["过度保护"]) ) 
    extrainfo.push(  "其他:" + Math.floor(ret["其他"]) ) 
    //console.log(ret,total)
    var detailinfo = new Array
    detailinfo.push("情感温暖、理解	平均数51.54	标准差8.89\n ")
    detailinfo.push("惩罚、严厉	平均数15.84	标准差3.66\n ")
    detailinfo.push("过分干涉	平均数20.92	标准差8.89\n ")
    detailinfo.push("偏爱被试	平均数9.82	标准差3.83\n ")
    detailinfo.push("拒绝否认 平均数8.27	标准差2.40\n ")
    detailinfo.push("过度保护	平均数12.43	标准差3.12\n ")

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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['EMBUMalelocation'], "霍兰德职业性格测试结果",this)}}                
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
              title={RouteConfig["EMBUMaleModule"].titlename}
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
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='EMBUMalelocation'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["EMBUMaleModule"].titlename}</Text>
      <FlatList

            data={this.state.EMBUMale}
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
              <CheckBox containerStyle={styles.CheckBox} title = {item.e} checked={this.state.checked[Number(item.key)]===item.ret_e}  onPress={()=>this.updateIndex(Number(item.key),item.ret_e)}/>

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
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center',但无效 
    flexWrap:'wrap',
    alignItems: 'flex-start',
  },

})

module.exports=EMBUMaleModule;  