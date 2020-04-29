
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import ScreenConfig from '../../../config/ScreenConfig';
import {StyleConfig,FontStyleConfig} from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
var PDPDate=Array()
PDPDate[1]="你做事是一个值得信赖的人吗？"
PDPDate[2]="你个性温和吗？"
PDPDate[3]="你有活力吗？"
PDPDate[4]="你善解人意吗？ "
PDPDate[5]="你独立吗？"
PDPDate[6]="你受人爱戴吗？"
PDPDate[7]="做事认真且正直吗？"
PDPDate[8]="你富有同情心吗？"
PDPDate[9]="你有说服力吗？"
PDPDate[10]="你大胆吗？"
PDPDate[11]="你精确吗？"
PDPDate[12]="你适应能力强吗？"
PDPDate[13]="你组织能力好吗？"
PDPDate[14]="你是否积极主动？"
PDPDate[15]="你害羞吗？"
PDPDate[16]="你强势吗？"
PDPDate[17]="你镇定吗？"
PDPDate[18]="你勇于学习吗？ "
PDPDate[19]="你反应快吗？"
PDPDate[20]="你外向吗？"
PDPDate[21]="你注意细节吗？"
PDPDate[22]="你爱说话吗？"
PDPDate[23]="你的协调能力好吗？"
PDPDate[24]="你勤劳吗？"
PDPDate[25]="你慷慨吗？"
PDPDate[26]="你小心翼翼吗？"
PDPDate[27]="你令人愉快吗？"
PDPDate[28]="你传统吗？"
PDPDate[29]="你亲切吗？"
PDPDate[30]="你工作足够有效率吗？"
var PDP=Array();
for(i=1;i<31;i++)
{
  PDP[i] = {}
}

for(i=1;i<31;i++)
{
  PDP[i].q = PDPDate[i]
  PDP[i].key = i
  PDP[i].sel = ""
  PDP[i].a = "非常同意"
  PDP[i].b = "比较同意"
  PDP[i].c = "同意"
  PDP[i].d = "不同意"
  PDP[i].e = "完全不同意"
  PDP[i].ret_a = 5
  PDP[i].ret_b = 4
  PDP[i].ret_c = 3
  PDP[i].ret_d = 2
  PDP[i].ret_e = 1

}
var retnumber = new Array()
retnumber["老虎"] = [5,10,14,18,24,30]
retnumber["孔雀"] = [3,6,13,20,22,29]
retnumber["考拉"] =[2,8,15,17,25,28]
retnumber["猫头鹰"] =[1,7,11,16,21,26]
retnumber["变色龙"] =[4,9,12,19,23,27]
for(var i in retnumber){
  var retindex = retnumber[i]
  
  for(var x in retindex)
  {
    var indexnumber = Number(retindex[x])
    PDP[indexnumber].type = i
  }
}



class PDPModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      PDP:[],
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var PDPrandom = new Array();
    var runtimePDP = PDP.concat()
    while(runtimePDP.length>0)
    {
      var p = parseInt(Math.random()*runtimePDP.length)
      if(undefined!=runtimePDP[p])
      {PDPrandom.push(runtimePDP[p]);}
      runtimePDP.splice(p,1)
    }
    //console.log(PDPrandom)
    var checked = new Array();
    for(i=0;i<PDPrandom.length;i++)
    {
      //checked[0]=undefined
checked[i]=""
      PDPrandom[i].index=i
      PDPrandom[i].key=i
      PDPrandom[i].sel=""
    }
    //console.log(PDPrandom)
    this.setState ({
      checked:checked,
      PDP:PDPrandom,
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
      closetest:false,
    })
    console.log("clear",PDPrandom)

  }
  check(){
    //if(__DEV__)
//    {return true}
    for(i=0;i<this.state.PDP.length;i++)
    {
      if(undefined != this.state.PDP[i] && this.state.checked[i]==="")
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
      
    title: RouteConfig["PDPModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.PDP[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<PDP.length;i++)
      {
        //console.log(PDP[i].sel)
      }
    }

  }

  result()
  {
    if(false==this.check())
    {
      return
    }
    var testPDP = this.state.PDP
    var ret = new Array();
    ret["老虎"]=ret["孔雀"]=ret["考拉"]=ret["猫头鹰"]=ret["变色龙"]=0

    var total = 0
    var bigtotal = 0 
    //console.log(testPDP)
    for(i=0;i<testPDP.length;i++)
    {
      var _p = testPDP[i].sel;
      var _t = testPDP[i].type
      
      if(''!=_p)
      {
        //console.log(testPDP[i].sel, testPDP[i].type)
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
    extrainfo.push( "老虎:" + Math.floor(ret["老虎"] ) ) 
    extrainfo.push( "孔雀:" + Math.floor(ret["孔雀"]) ) 
    extrainfo.push(  "考拉:" + Math.floor(ret["考拉"]) ) 
    extrainfo.push(  "猫头鹰:" + Math.floor(ret["猫头鹰"]) ) 
    extrainfo.push(  "变色龙:" + Math.floor(ret["变色龙"]) ) 
    //console.log(ret,total)
    var detailinfo = new Array
    detailinfo.push("假若你有某一项分远远高于其它四项，你就是典型的这种属性，假若你有某两项分大大超过其它三项，你是这两种动物的综合；假若你各项分数都比较接近，恭喜你，你是一个面面俱到近似完美性格的人。\n ")
    detailinfo.push("老虎型 (支配型Dominance) 老虎一般企图心强烈，喜欢冒险，个性积极，竞争力强，凡事喜欢掌控全局发号施令，不喜欢维持现状，但行动力强，目标一经确立便会全力以赴。它的缺点是在 决策上较易流于专断，不易妥协，故较容易与人发生争执摩擦。如果下属中有“老虎”要给予他更多的责任，他会觉得自己有价值，布置工作时注意结果导向，如果 上司是老虎则要在他面前展示自信果断的一面，同时避免在公众场合与他唱反调。中外名人中毛泽东、朱熔基以及前英国首相撒切尔夫人为较典型的老虎型，德国为老虎型人数最多的国家。前美国GE总裁韦尔奇 (Jack Welch)也属于这一类型。个性特点：有自信，够权威，决断力高，竞争性强，胸怀大志，喜欢评估。\n ")
    detailinfo.push("孔雀型(表达型Extroversion) 孔雀热情洋溢，好交朋友，口才流畅，重视形象，擅于人际关系的建立，富同情心，最适合人际导向的工作。缺点是容易过于乐观，往往无法估计细节，在执行力 度上需要高专业的技术精英来配合。对孔雀要以鼓励为主给他表现机会保持他的工作激情，但也要注意他的情绪化和防止细节失误。孙中山、克林顿、里根、戈尔巴 乔夫都是这一类型的人，美国是孔雀型人最多的国家。个性特点：很热心，够乐观，口才流畅，好交朋友，风度翩翩，诚恳热心。热情洋溢、好交朋友、口才流畅、个性乐观、表现欲强。\n ")
    detailinfo.push("考拉型 (耐心型Pace/Patience) 考拉属于行事稳健，不会夸张强调平实的人，性情平和对人不喜欢制造麻烦，不兴风作浪，温和善良，在别人眼中常让人误以为是懒散不积极，但只要决心投入， 绝对是“路遥知马力”的最佳典型。对考拉要多给予关注和温柔想方设法挖掘他们内在的潜力。印度的甘地、蒋经国、宋庆龄都是此类型的人，一般而言，宗教信仰 者都是“考拉”，而中国正是考拉型最多的摇篮。个性特点：很稳定，够敦厚，温和规律，不好冲突。行事稳健、强调平实，有过人的耐力，温和善良。\n ")
    detailinfo.push("猫头鹰型 (精确型 ，Precision)猫头鹰传统而保守，分析力强，精确度高是最佳的品质保证者，喜欢把细节条例化，个性拘谨含蓄，谨守分寸忠于职责，但会让人觉得“吹毛求疵”。“猫头鹰” 清晰分析道理说服别人很有一套，处事客观合理，只是有时会钻在牛角尖里拔不出来。古代断案如神的包拯（包青天）正是此种类型的典范。日本是这个类型人数较多的国家。个性特点：很传统，注重细节，条理分明，责任感强，重视纪律。保守、分析力强，精准度高，喜欢把细节条例化，个性拘谨含蓄。\n ")
    detailinfo.push("变色龙型 (整合型，Conformity) 变色龙中庸而不极端，凡事不执着，韧性极强，擅于沟通是天生的谈判家，他们能充分融入各种新环境新文化且适应性良好，在他人眼中会觉得他们“没有个性 ”，故“没有原则就是最高原则”，他们懂得凡事看情况看场合。前总理周恩来、美国前国务卿基辛格、诸葛亮都是这种类型。香港和台湾是变色龙较多的地区。 工作风格的优点：善于在工作中调整自己的角色去适应环境，具有很好的沟通能力。\n ")
    detailinfo.push("变色龙型的领导人既没有凸出的个性，对事也没有什么强烈的个人意识型态，事事求中立并倾向站在 没有立场的位置，故在冲突的环境中，是个能游走折中的高手。由于他们能密切地融合于各种环境中，他们可以为企业进行对内对外的各种交涉，只要任务确实和目标清楚，他们都能恰如其分地完成其任务。\n ")

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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['PDPlocation'], "霍兰德职业性格测试结果",this)}}                
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
              title={RouteConfig["PDPModule"].titlename}
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
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='PDPlocation'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["PDPModule"].titlename}</Text>
      <FlatList

            data={this.state.PDP}
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
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    flexWrap:'wrap',
    alignItems: 'flex-start',
  },

})

module.exports=PDPModule;  