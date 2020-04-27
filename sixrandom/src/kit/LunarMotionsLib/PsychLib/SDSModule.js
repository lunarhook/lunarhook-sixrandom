
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import ScreenConfig from '../../../config/ScreenConfig';
import StyleConfig from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
var SDS=Array();
SDS[1]={
  "key":"1",
  "q":"我感到情绪沮丧，郁闷",
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
SDS[2]={
  "key":"2",
  "q":"我感到早晨心情最好",
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
SDS[3]={
  "key":"3",
  "q":"我要哭或想哭",
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
SDS[4]={
  "key":"4",
  "q":"我夜间睡眠不好",
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
SDS[5]={
  "key":"5",
  "q":"我吃饭象平时一样多",
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
SDS[6]={
  "key":"6",
  "q":"我的性功能正常",
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
SDS[7]={
  "key":"7",
  "q":"我感到体重减轻",
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
SDS[8]={
  "key":"8",
  "q":"我为便秘烦恼",
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
SDS[9]={
  "key":"9",
  "q":"我的心跳比平时快",
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
SDS[10]={
  "key":"10",
  "q":"我无故感到疲劳",
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
SDS[11]={
  "key":"11",
  "q":"我的头脑象往常一样清楚",
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
SDS[12]={
  "key":"12",
  "q":"我做事情象平时一样不感到困难",
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
SDS[13]={
  "key":"13",
  "q":"我坐卧不安, 难以保持平静",
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
SDS[14]={
  "key":"14",
  "q":"我对未来感到有希望",
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
SDS[15]={
  "key":"15",
  "q":"我比平时更容易激怒",
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
SDS[16]={
  "key":"16",
  "q":"我觉得决定什么事很容易",
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
SDS[17]={
  "key":"17",
  "q":"我感到自己是有用的和不可缺少的人",
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
SDS[18]={
  "key":"18",
  "q":"我的生活很有意义",
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
SDS[19]={
  "key":"19",
  "q":"假若我死了别人会过得更好",
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
SDS[20]={
  "key":"20",
  "q":"我仍旧喜爱自己平时喜爱的东西",
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



class SDSModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      SDS:[],
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var SDSrandom = new Array();
    var runtimeSDS = SDS.concat()
    while(runtimeSDS.length>0)
    {
      var p = parseInt(Math.random()*runtimeSDS.length)
      if(undefined!=runtimeSDS[p])
      {SDSrandom.push(runtimeSDS[p]);}
      runtimeSDS.splice(p,1)
    }
    //console.log(SDSrandom)
    var checked = new Array();
    for(i=0;i<SDSrandom.length;i++)
    {
      checked[0]=undefined
checked[i]=""
      SDSrandom[i].index=i
      SDSrandom[i].key=i
      SDSrandom[i].sel=""
    }
    //console.log(SDSrandom)
    this.setState ({
      checked:checked,
      SDS:SDSrandom,
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
    for(i=0;i<SDS.length;i++)
    {
      if(undefined != SDS[i] && this.state.checked[i]==="")
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
      
    title: RouteConfig["SDSModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.SDS[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<SDS.length;i++)
      {
        //console.log(SDS[i].sel)
      }
    }

  }

  result()
  {
    if(false==this.check())
    {
      return
    }
    var testSDS = this.state.SDS

    var total = 0
    //console.log(testSDS)
    for(i=0;i<testSDS.length;i++)
    {
      var _p = testSDS[i].sel;
      
      if(''!=_p)
      {
        //console.log(testSDS[i].sel, testSDS[i].type)
        total = total + Number(_p); 
      }
      
    }
    
    //console.log(ret,total)
    var extrainfo = new Array
    extrainfo.push("推荐已经确定有抑郁症状的成年人测评，非抑郁症者并不需要测试，中国常模：分界值为53分，53-62为轻度抑郁， 63-72为中度抑郁，72分以上为重度抑郁。\n")
    extrainfo.push("评定时间范围，强调评定的时间范围为过去一周。\n")
    extrainfo.push("如用以评估疗效，应在开始治疗或研究前让自评者评定一次，然后至少应在治疗后或研究结束时再让他自评一次，以便通过SDS总分变化来分析该自评者的症状变化情况。在治疗或研究期间评定，其时间间隔可由研究者自行安排。\n")
    this.setState({
      ret:"总分:"+total,
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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['SDSlocation'], "霍兰德职业性格测试结果",this)}}                
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
              title={RouteConfig["SDSModule"].titlename}
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
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='SDSlocation'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["SDSModule"].titlename}</Text>
      <FlatList

            data={this.state.SDS}
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

module.exports=SDSModule;  