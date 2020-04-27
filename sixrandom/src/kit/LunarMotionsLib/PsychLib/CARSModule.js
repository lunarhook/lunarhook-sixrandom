
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import ScreenConfig from '../../../config/ScreenConfig';
import StyleConfig from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'

var CARS=Array();
CARS[1]={
  "key":"1",
  "q":"人际关系",
  "a":"与年龄相当；与年龄相符的害羞、自卫及表示不同意。",
  "b":"轻度异常：缺乏一些眼光接触，不愿意，回避，过分害羞，对检查者反应有轻度缺陷。",
  "c":"中度异常：回避人，要使劲打扰他才能得到反应。",
  "d":"严重异常：强烈地回避，儿童对检查者很少反应，只有检查者强烈地干扰，才能产生反应。",
  "ret_a":"1",
  "ret_b":"2",
  "ret_c":"3",
  "ret_d":"4",
  "sel":"",
}
CARS[2]={
  "key":"2",
  "q":"模仿(词和动作)",
  "a":"与年龄相当：与年龄相符的模仿。",
  "b":"轻度异常：大部分时间都模仿，有时激动，有时延缓。",
  "c":"中度异常：在检查者极大的要求下有时模仿。",
  "d":"重度异常：很少用语言或运动模仿他人。",
  "ret_a":"1",
  "ret_b":"2",
  "ret_c":"3",
  "ret_d":"4",
  "sel":"",
}
CARS[3]={
  "key":"3",
  "q":"情感反应",
  "a":"与年龄相当：与年龄、情境相适应的情感反应--愉快不愉快，以及兴趣，通过面部表情姿势的变化来表达。",
  "b":"轻度异常：对不同的情感刺激有些缺乏相应的反应，情感可能受限或过份。",
  "c":"中度异常：不适当的情感的示意，反应相当受限或过份，或往往与刺激无关。",
  "d":"严重异常：极刻板的情感反应，对检查者坚持改变的情境很少产生适当的反应。",
  "ret_a":"1",
  "ret_b":"2",
  "ret_c":"3",
  "ret_d":"4",
  "sel":"",
}
CARS[4]={
  "key":"4",
  "q":"躯体运用能力",
  "a":"与年龄相当：与年龄相适应的利用和意识。",
  "b":"轻度异常：躯体运用方面有点特殊--某些刻板运动，笨拙，缺乏协调性。",
  "c":"中度异常：有中度特殊的手指或身体姿势功能失调的征象，摇动旋转，手指摆动，脚尖走。",
  "d":"重度异常：如上述所描述的严重而广泛地发生。",
  "ret_a":"1",
  "ret_b":"2",
  "ret_c":"3",
  "ret_d":"4",
  "sel":"",
}
CARS[5]={
  "key":"5",
  "q":"与非生命物体的关系 ",
  "a":"与年龄相当：适合年龄的兴趣运用和探索。",
  "b":"轻度异常：轻度的对东西缺乏或不适当地使用物体，象婴儿一样咬东西，猛敲东西，或者迷恋于物体发出的吱吱叫声或不停地开灯、关灯。",
  "c":"中度异常：对多数物体缺乏兴趣或表现有些特别，如重复转动某件物体，反复用手指尖捏起东西，旋转轮子或对某部分着迷。",
  "d":"严重异常：严重的对物体的不适当的兴趣，使用和探究，如上边发生的情况频繁的发生，很难使儿童分心。",
  "ret_a":"1",
  "ret_b":"2",
  "ret_c":"3",
  "ret_d":"4",
  "sel":"",
}
CARS[6]={
  "key":"6",
  "q":"对环境变化的适应",
  "a":"与年龄相当：对改变产生与年龄相适应的反应。",
  "b":"轻度异常：对环境改变产生某些反应，倾向维持某一物体活动或坚持相同的反应形式。",
  "c":"中度异常：对环境改变出现烦躁、沮丧的征象，当干扰他时很难被吸引过来。",
  "d":"严重异常：对改变产生严重的反应，假如坚持把环境的变化强加给他，儿童可能逃跑。",
  "ret_a":"1",
  "ret_b":"2",
  "ret_c":"3",
  "ret_d":"4",
  "sel":"",
}
CARS[7]={
  "key":"7",
  "q":"视觉反应",
  "a":"与年龄相当：适合年龄的视觉反应，与其他感觉系统是整合方式。",
  "b":"轻度异常：有时必须提醒儿童去注意物体，有时全神贯注于'镜象'，有的回避眼光接触，有的凝视空间，有的着迷于灯光。",
  "c":"中度异常：经常要提醒他们正在干什么，喜欢观看光亮的物体，即使强迫他，也只有很少的眼光接触，盯着看人，或凝视空间。",
  "d":"重度异常：对物体和人的广泛严重的视觉回避，着迷于使用'余光'",
  "ret_a":"1",
  "ret_b":"2",
  "ret_c":"3",
  "ret_d":"4",
  "sel":"",
}
CARS[8]={
  "key":"8",
  "q":"听觉反应",
  "a":"与年龄相当：适合年龄的听觉反应。",
  "b":"轻度异常：对听觉刺激或某些特殊声音缺乏一些反应，反应可能延迟，有时必须重复声音刺激，有时对大的声音敏感，或对此声音分心。",
  "c":"轻度异常：对听觉刺激或某些特殊声音缺乏一些反应，反应可能延迟，有时必须重复声音刺激，有时对大的声音敏感，或对此声音分心。",
  "d":"重度异常：对声音全面回避，对声音类型不加注意或极度敏感。",
  "ret_a":"1",
  "ret_b":"2",
  "ret_c":"3",
  "ret_d":"4",
  "sel":"",
}
CARS[9]={
  "key":"9",
  "q":"近处感觉反应 ",
  "a":"与年龄相当：对疼痛产生适当强度的反应，正常触觉和嗅觉。",
  "b":"轻度异常：对疼痛或轻度触碰，气味、味道等有点缺乏适当的反应，有时出现一些婴儿吸吮物体的表现。",
  "c":"中度异常：对疼痛或意外伤害缺乏反应，比较集中于触觉、嗅觉、味觉。",
  "d":"严重异常：过度的集中于触觉的探究感觉而不是功能的作用(吸吮、舔或磨擦)，完全忽视疼痛或过分地作出反应。",
  "ret_a":"1",
  "ret_b":"2",
  "ret_c":"3",
  "ret_d":"4",
  "sel":"",
}
CARS[10]={
  "key":"10",
  "q":"焦虑反应",
  "a":"与年龄相当：对情境产生与年龄相适应的反应，并且反应无延长。",
  "b":"轻度异常：轻度焦虑反应。",
  "c":"中度异常：中度焦虑反应。",
  "d":"严重异常：严重的焦虑反应，可能儿童在会见的一段时间内不能坐下，或很害怕，或退缩等。",
  "ret_a":"1",
  "ret_b":"2",
  "ret_c":"3",
  "ret_d":"4",
  "sel":"",
}
CARS[11]={
  "key":"11",
  "q":"语言交流",
  "a":"与年龄相当：适合年龄的语言。",
  "b":"轻度异常：语言迟钝，多数语言有意义，但有一点模仿语言。",
  "c":"中度异常：缺乏语言或有意义的语言与不适当的语言相混淆(模仿言语或莫名其妙的话)。",
  "d":"严重异常： 严重的不正常言语，实质上缺乏可理解的语言或运用特殊的离奇的语言。",
  "ret_a":"1",
  "ret_b":"2",
  "ret_c":"3",
  "ret_d":"4",
  "sel":"",
}
CARS[12]={
  "key":"12",
  "q":"非语言交流",
  "a":"与年龄相当：与年龄相符的非语言性交流。",
  "b":"轻度异常：非语言交流迟钝，交往仅为简单的或含糊的反应，如指出或去取他想要的东西。",
  "c":"中度异常：缺乏非语言交往，儿童不会利用或对非语言的交往作出反应。",
  "d":"严重异常：特别古怪的和不可理解的非语言的交往。",
  "ret_a":"1",
  "ret_b":"2",
  "ret_c":"3",
  "ret_d":"4",
  "sel":"",
}
CARS[13]={
  "key":"13",
  "q":"活动很大",
  "a":"与年龄相当：正常活动水平--不多动亦不少动。",
  "b":"轻度异常：轻度不安静或有轻度活动缓慢，但一般可控制。",
  "c":"中度异常：活动相当多，并且控制其活动量有困难，或者相当不活动或运动缓慢，检查者很频繁地控制或以极大努力才能得到反应。",
  "d":"严重异常：极不正常的活动水平，要么是不停，要么是冷淡的，很难得到儿童对任何事件的反应，差不多不断地需要大人控制。",
  "ret_a":"1",
  "ret_b":"2",
  "ret_c":"3",
  "ret_d":"4",
  "sel":"",
}
CARS[14]={
  "key":"14",
  "q":"智力功能",
  "a":"与年龄相当：正常智力功能--无迟钝的证据。",
  "b":"轻度异常：轻度智力低下--技能低下表现在各个领域。",
  "c":"中度异常：中度智力低下--某些技能明显迟钝，其他的接近年龄水平。",
  "d":"严重异常：智力功能严重障碍--某些技能表现迟钝，另外一些在年龄水平以上或不寻常。",
  "ret_a":"1",
  "ret_b":"2",
  "ret_c":"3",
  "ret_d":"4",
  "sel":"",
}
CARS[15]={
  "key":"15",
  "q":"总的印象",
  "a":"与年龄相当：不是孤独症。",
  "b":"轻度异常：轻微的或轻度孤独症。",
  "c":"中度异常：孤独症的中度征象。",
  "d":"严重异常：非常多的孤独症征象。",
  "ret_a":"1",
  "ret_b":"2",
  "ret_c":"3",
  "ret_d":"4",
  "sel":"",
}





class CARSModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      CARS:[],
      ret:"",
      percent:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var CARSrandom = new Array();
    var runtimeCARS = CARS.concat()
    while(runtimeCARS.length>0)
    {
      var p = parseInt(Math.random()*runtimeCARS.length)
      if(undefined!=runtimeCARS[p])
      {CARSrandom.push(runtimeCARS[p]);}
      runtimeCARS.splice(p,1)
    }
    //console.log(CARSrandom)
    var checked = new Array();
    for(i=0;i<CARSrandom.length;i++)
    {
      checked[0]=undefined
checked[i]=""
      CARSrandom[i].index=i
      CARSrandom[i].key=i
      CARSrandom[i].sel=""
    }
    //console.log(CARSrandom)
    this.setState ({
      checked:checked,
      CARS:CARSrandom,
      ret:"",
      percent:"",
      detailinfo:"",
      closetest:false,
    })

  }
  check(){
    //if(__DEV__)
//    {return true}
    for(i=0;i<CARS.length;i++)
    {
      if(undefined != CARS[i] && this.state.checked[i]==="")
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
      
    title: RouteConfig["CARSModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.CARS[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<CARS.length;i++)
      {
        //console.log(CARS[i].sel)
      }
    }

  }
  result()
  {
    if(false==this.check())
    {
      return
    }
    var testCARS = this.state.CARS

    var total = 0
    //console.log(testCARS)
    for(i=0;i<testCARS.length;i++)
    {
      var _p = testCARS[i].sel;
      
      if(''!=_p)
      {
        //console.log(testCARS[i].sel, testCARS[i].type)
        total = total + Number(_p); 

      }
      
    }
    
    //console.log(ret,total)
    var detailinfo = new Array
    detailinfo.push("儿童孤独症评定量表（childhood autism rating scale 简称CARS量表）供专业人员评定用\n")
    detailinfo.push("当总分大于30分可考虑为孤独症，30~36分为轻——中度孤独症，大于36分并且5项以上达3分或大于3分时为重度孤独症。\n")
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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['CARSlocation'], "创伤后应激障碍测试结果",this)}}                
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
              title={RouteConfig["CARSModule"].titlename}
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
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='CARSlocation'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["CARSModule"].titlename}</Text>
      <FlatList

            data={this.state.CARS}
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

module.exports=CARSModule;  