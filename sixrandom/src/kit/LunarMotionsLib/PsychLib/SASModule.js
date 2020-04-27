
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import ScreenConfig from '../../../config/ScreenConfig';
import StyleConfig from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
var SAS=Array();
SAS[1]={
  "key":"1",
  "q":"我觉得比平常容易紧张或着急",
  "sel": "",
  "a" : "很少",
  "b": "有时",
  "c" : "经常",
  "d": "持续",
  "ret_a" : "1",
  "ret_b" : "2",
  "ret_c" : "3",
  "ret_d" : "4",
}
SAS[2]={
  "key":"2",
  "q":"我无缘无故地感到害怕",
  "sel": "",
  "a" : "很少",
  "b": "有时",
  "c" : "经常",
  "d": "持续",
  "ret_a" : "1",
  "ret_b" : "2",
  "ret_c" : "3",
  "ret_d" : "4",
}
SAS[3]={
  "key":"3",
  "q":"我容易心里烦乱或感到惊慌",
  "sel": "",
  "a" : "很少",
  "b": "有时",
  "c" : "经常",
  "d": "持续",
  "ret_a" : "1",
  "ret_b" : "2",
  "ret_c" : "3",
  "ret_d" : "4",
}
SAS[4]={
  "key":"4",
  "q":"我觉得我可能将要发疯",
  "sel": "",
  "a" : "很少",
  "b": "有时",
  "c" : "经常",
  "d": "持续",
  "ret_a" : "1",
  "ret_b" : "2",
  "ret_c" : "3",
  "ret_d" : "4",
}
SAS[5]={
  "key":"5",
  "q":"我觉得一切都好，也不会发生什么不幸",
  "sel": "",
  "a" : "很少",
  "b": "有时",
  "c" : "经常",
  "d": "持续",
  "ret_a" : "4",
  "ret_b" : "3",
  "ret_c" : "2",
  "ret_d" : "1",
}
SAS[6]={
  "key":"6",
  "q":"我爱手脚发抖打颤",
  "sel": "",
  "a" : "很少",
  "b": "有时",
  "c" : "经常",
  "d": "持续",
  "ret_a" : "1",
  "ret_b" : "2",
  "ret_c" : "3",
  "ret_d" : "4",
}
SAS[7]={
  "key":"7",
  "q":"我因为头痛、颈痛和背痛而苦恼",
  "sel": "",
  "a" : "很少",
  "b": "有时",
  "c" : "经常",
  "d": "持续",
  "ret_a" : "1",
  "ret_b" : "2",
  "ret_c" : "3",
  "ret_d" : "4",
}
SAS[8]={
  "key":"8",
  "q":"我感觉容易衰弱和疲乏",
  "sel": "",
  "a" : "很少",
  "b": "有时",
  "c" : "经常",
  "d": "持续",
  "ret_a" : "1",
  "ret_b" : "2",
  "ret_c" : "3",
  "ret_d" : "4",
}
SAS[9]={
  "key":"9",
  "q":"我得心平气和，并且容易安静坐着",
  "sel": "",
  "a" : "很少",
  "b": "有时",
  "c" : "经常",
  "d": "持续",
  "ret_a" : "4",
  "ret_b" : "3",
  "ret_c" : "2",
  "ret_d" : "1",
}
SAS[10]={
  "key":"10",
  "q":"我觉得心跳的很快",
  "sel": "",
  "a" : "很少",
  "b": "有时",
  "c" : "经常",
  "d": "持续",
  "ret_a" : "1",
  "ret_b" : "2",
  "ret_c" : "3",
  "ret_d" : "4",
}
SAS[11]={
  "key":"11",
  "q":"我因为一阵阵头晕而苦恼",
  "sel": "",
  "a" : "很少",
  "b": "有时",
  "c" : "经常",
  "d": "持续",
  "ret_a" : "1",
  "ret_b" : "2",
  "ret_c" : "3",
  "ret_d" : "4",
}
SAS[12]={
  "key":"12",
  "q":"我有晕倒发作，或觉得要晕倒似的",
  "sel": "",
  "a" : "很少",
  "b": "有时",
  "c" : "经常",
  "d": "持续",
  "ret_a" : "1",
  "ret_b" : "2",
  "ret_c" : "3",
  "ret_d" : "4",
}
SAS[13]={
  "key":"13",
  "q":"我吸气呼气都感到很容易",
  "sel": "",
  "a" : "很少",
  "b": "有时",
  "c" : "经常",
  "d": "持续",
  "ret_a" : "4",
  "ret_b" : "3",
  "ret_c" : "2",
  "ret_d" : "1",
}
SAS[14]={
  "key":"14",
  "q":"我的手脚麻木和刺痛",
  "sel": "",
  "a" : "很少",
  "b": "有时",
  "c" : "经常",
  "d": "持续",
  "ret_a" : "1",
  "ret_b" : "2",
  "ret_c" : "3",
  "ret_d" : "4",
}
SAS[15]={
  "key":"15",
  "q":"我因为胃痛和消化不良而苦恼",
  "sel": "",
  "a" : "很少",
  "b": "有时",
  "c" : "经常",
  "d": "持续",
  "ret_a" : "1",
  "ret_b" : "2",
  "ret_c" : "3",
  "ret_d" : "4",
}
SAS[16]={
  "key":"16",
  "q":"我常常要小便",
  "sel": "",
  "a" : "很少",
  "b": "有时",
  "c" : "经常",
  "d": "持续",
  "ret_a" : "1",
  "ret_b" : "2",
  "ret_c" : "3",
  "ret_d" : "4",
}
SAS[17]={
  "key":"17",
  "q":"我的手脚常常是干燥温暖的",
  "sel": "",
  "a" : "很少",
  "b": "有时",
  "c" : "经常",
  "d": "持续",
  "ret_a" : "4",
  "ret_b" : "3",
  "ret_c" : "2",
  "ret_d" : "1",
}
SAS[18]={
  "key":"18",
  "q":"我脸红发热 ",
  "sel": "",
  "a" : "很少",
  "b": "有时",
  "c" : "经常",
  "d": "持续",
  "ret_a" : "1",
  "ret_b" : "2",
  "ret_c" : "3",
  "ret_d" : "4",
}
SAS[19]={
  "key":"19",
  "q":"我容易入睡而且一夜睡得很好",
  "sel": "",
  "a" : "很少",
  "b": "有时",
  "c" : "经常",
  "d": "持续",
  "ret_a" : "4",
  "ret_b" : "3",
  "ret_c" : "2",
  "ret_d" : "1",

}
SAS[20]={
  "key":"20",
  "q":"我做恶梦",
  "sel": "",
  "a" : "很少",
  "b": "有时",
  "c" : "经常",
  "d": "持续",
  "ret_a" : "1",
  "ret_b" : "2",
  "ret_c" : "3",
  "ret_d" : "4",
}



class SASModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      SAS:[],
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var SASrandom = new Array();
    var runtimeSAS = SAS.concat()
    while(runtimeSAS.length>0)
    {
      var p = parseInt(Math.random()*runtimeSAS.length)
      if(undefined!=runtimeSAS[p])
      {SASrandom.push(runtimeSAS[p]);}
      runtimeSAS.splice(p,1)
    }
    //console.log(SASrandom)
    var checked = new Array();
    for(i=0;i<SASrandom.length;i++)
    {
      checked[0]=undefined
checked[i]=""
      SASrandom[i].index=i
      SASrandom[i].key=i
      SASrandom[i].sel=""
    }
    //console.log(SASrandom)
    this.setState ({
      checked:checked,
      SAS:SASrandom,
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
    for(i=0;i<SAS.length;i++)
    {
      if(undefined != SAS[i] && this.state.checked[i]==="")
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
      
    title: RouteConfig["SASModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.SAS[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<SAS.length;i++)
      {
        //console.log(SAS[i].sel)
      }
    }

  }

  result()
  {
    if(false==this.check())
    {
      return
    }
    var testSAS = this.state.SAS

    var total = 0
    //console.log(testSAS)
    for(i=0;i<testSAS.length;i++)
    {
      var _p = testSAS[i].sel;
      
      if(''!=_p)
      {
        //console.log(testSAS[i].sel, testSAS[i].type)
        total = total + Number(_p); 
      }
      
    }
    
    //console.log(ret,total)
    var extrainfo = new Array
    extrainfo.push("推荐已经确定有抑郁症状的成年人测评，非抑郁症者并不需要测试，中国常模：抑郁评定的领临界值为T=50，分值越高，抑郁倾向越明显。\n")
    extrainfo.push("SAS采用4级评分，主要评定项目为所定义的症状出现的频度，其标准为：“1”表示没有或很少有时间有；“2”是小部分时间有；“3”是相当多时间有；“4”是绝大部分或全部时间都有。评定时间为过去一周内，把个题的得分相加为粗分，粗分乘以1.25，四舍五入取整数即得到标准分。抑郁评定的领临界值为T=50，分值越高，抑郁倾向越明显。\n")
    extrainfo.push("评定的时间范围，应强调是“现在或过去一周”。\n")
    extrainfo.push("SAS应在开始治疗前由自评者评定一次，然后至少应在治疗后(或研究结束时)再让 他自评一次，以便通过SAS总分变化来分析自评者症状的变化情况。如在治疗期间或研究期间评定，其间隔可由研究者自行安排。\n")
    this.setState({
      ret:"总分:"+Math.round(total*1.25),
      //percent:retpercent,
      extrainfo:extrainfo,
      closetest:true,
      //detailinfo:detailinfo,
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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['SASlocation'], "霍兰德职业性格测试结果",this)}}                
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
              title={RouteConfig["SASModule"].titlename}
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
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='SASlocation'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["SASModule"].titlename}</Text>
      <FlatList

            data={this.state.SAS}
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

module.exports=SASModule;  