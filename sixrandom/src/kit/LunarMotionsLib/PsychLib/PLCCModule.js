
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import ScreenConfig from '../../../config/ScreenConfig';
import {StyleConfig,FontStyleConfig} from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'

var PLCC=Array();
PLCC[1]={
  "key":"1",
  "q":"过去的一段压力性时间的经历引起的反复发生令人不安的记忆、想法或形象？",
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
PLCC[2]={
  "key":"2",
  "q":"过去的一段压力性事件的经历引起的反复发生令人不安的梦境? ",
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
PLCC[3]={
  "key":"3",
  "q":"过去的一段压力性事件的经历仿佛突然间又发生了、又感觉到了(好像您再次体验)?",
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
PLCC[4]={
  "key":"4",
  "q":"当有些事情让您想起过去的一段压力性事件的经历时，你会非常局促不安？",
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
PLCC[5]={
  "key":"5",
  "q":"当有些事清让您想起过去的一段压力性事件的经历时，有身体反应(比如心悸、呼吸困难、出汗)? ",
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
PLCC[6]={
  "key":"6",
  "q":"避免想起或谈论过去的那段压力性事件经历或避免产生与之相关的感觉? ",
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
PLCC[7]={
  "key":"7",
  "q":"避免那些能使您想起那段压力性事件经历的活动和局面?",
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
PLCC[8]={
  "key":"8",
  "q":"记不起压力性经历的重要内容?",
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
PLCC[9]={
  "key":"9",
  "q":"对您过去喜欢的活动失去兴趣? ",
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
PLCC[10]={
  "key":"10",
  "q":"感觉与其他人疏远或脱离?",
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
PLCC[11]={
  "key":"11",
  "q":"感觉到感情麻木或不能对与您亲近的人有爱的感觉?",
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
PLCC[12]={
  "key":"12",
  "q":"感觉好像您的将来由于某种原因将被突然中断?",
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
PLCC[13]={
  "key":"13",
  "q":"入睡困难或易醒?",
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
PLCC[14]={
  "key":"14",
  "q":"易怒或怒气爆发?",
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
PLCC[15]={
  "key":"15",
  "q":"注意力很难集中?",
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
PLCC[16]={
  "key":"16",
  "q":"处于过度机警或警戒状态?",
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
PLCC[17]={
  "key":"17",
  "q":"感觉神经质或易受惊?",
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
for(i=1;i<18;i++)
{
  PLCC[i].sel = ""
  PLCC[i].a = "一点也不"
  PLCC[i].b = "有一点"
  PLCC[i].c = "中度的"
  PLCC[i].d = "相当程度的"
  PLCC[i].e = "极度的"
  PLCC[i].ret_a = "1"
  PLCC[i].ret_b = "2"
  PLCC[i].ret_c = "3"
  PLCC[i].ret_d = "4"
  PLCC[i].ret_e = "5"
}




class PLCCModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      PLCC:[],
      ret:"",
      percent:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var PLCCrandom = new Array();
    var runtimePLCC = PLCC.concat()
    while(runtimePLCC.length>0)
    {
      var p = parseInt(Math.random()*runtimePLCC.length)
      if(undefined!=runtimePLCC[p])
      {PLCCrandom.push(runtimePLCC[p]);}
      runtimePLCC.splice(p,1)
    }
    //console.log(PLCCrandom)
    var checked = new Array();
    for(i=0;i<PLCCrandom.length;i++)
    {
      //checked[0]=undefined
checked[i]=""
      PLCCrandom[i].index=i
      PLCCrandom[i].key=i
      PLCCrandom[i].sel=""
    }
    //console.log(PLCCrandom)
    this.setState ({
      checked:checked,
      PLCC:PLCCrandom,
      ret:"",
      percent:"",
      detailinfo:"",
      closetest:false,
    })

  }
  check(){
    //if(__DEV__)
//    {return true}
    for(i=0;i<this.state.PLCC.length;i++)
    {
      if(undefined != this.state.PLCC[i] && this.state.checked[i]==="")
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
      
    title: RouteConfig["PLCCModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.PLCC[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<PLCC.length;i++)
      {
        //console.log(PLCC[i].sel)
      }
    }

  }
  result()
  {
    if(false==this.check())
    {
      return
    }
    var testPLCC = this.state.PLCC

    var total = 0
    //console.log(testPLCC)
    for(i=0;i<testPLCC.length;i++)
    {
      var _p = testPLCC[i].sel;
      
      if(''!=_p)
      {
        //console.log(testPLCC[i].sel, testPLCC[i].type)
        total = total + Number(_p); 

      }
      
    }
    
    //console.log(ret,total)
    var detailinfo = new Array
    detailinfo.push("PTSD参考范围在38-47分\n")
    detailinfo.push("17-37分:无明显症状\n")
    detailinfo.push("38-49分:有一定的程序的PTSD症状\n")
    detailinfo.push("50-85分：有明显的PTSD症状，可以诊断为PTSD\n")
    detailinfo.push("\n")
    this.setState({
      ret:"总分:"+total,
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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['PLCClocation'], "创伤后应激障碍测试结果",this)}}                
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
              title={RouteConfig["PLCCModule"].titlename}
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
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='PLCClocation'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["PLCCModule"].titlename}</Text>
      <FlatList

            data={this.state.PLCC}
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

module.exports=PLCCModule;  