
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import ScreenConfig from '../../../config/ScreenConfig';
import StyleConfig from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
var MHTDate=Array()
MHTDate[1]="你夜里睡觉时，是否总想着明天的功课？"
MHTDate[2]="老师在向全班提问时，你是否会觉得是在提问自己而感到不安？"
MHTDate[3]="你是否一听说“要考试”心理就紧张。"
MHTDate[4]="你考试成绩不好时，心理是否感到不快。"
MHTDate[5]="你学习成绩不好时，是否总是提心吊胆。"
MHTDate[6]="考试时，当你想不起来原先掌握的知识时，你是否会感到焦虑？"
MHTDate[7]="你考试后，在没有知道成绩之前，是否总是放心不下。"
MHTDate[8]="你是否一遇到考试，就担心会考坏。"
MHTDate[9]="你是否希望考试能顺利通过。"
MHTDate[10]="你在没有完成任务之前，是否总担心完不成任务？"
MHTDate[11]="你当着大家的面朗读课文时，是否总是怕读错？"
MHTDate[12]="你是否认为学校里得到的学习成绩总是不大可靠的？"
MHTDate[13]="你是否认为你比别人更担心学习？"
MHTDate[14]="你是否做过考试考坏了的梦？"
MHTDate[15]="你是否做过学习成绩不好时，受到爸爸妈妈或老师训斥的梦？"
MHTDate[16]="你是否常常觉得有同学在背后说你坏话？"
MHTDate[17]="你受到父母评判后，是否总是想不开，放在心上？"
MHTDate[18]="你在游戏或与别人的竞争中输给对方，是否就不想再干了？"
MHTDate[19]="人家在背后议论你，你是否感到讨厌？"
MHTDate[20]="你在大家面前或被老师提问时，是否会脸红？"
MHTDate[21]=" 你是否很担心叫你担任班干部？"
MHTDate[22]="你是否总是觉得好像有人在注意你？"
MHTDate[23]="在工作或学习时，如果有人注意你，你心里是否紧张？"
MHTDate[24]="你受到评判时，心里是否总是不愉快？"
MHTDate[25]="你受到老师评判时，心里是否总是不安？"
MHTDate[26]="同学们在笑时，你是否也不会笑？"
MHTDate[27]="你是否觉得到同学家里玩不如在自己家里玩？"
MHTDate[28]="你和大家在一起时，是否也觉得自己是孤单的一个人？"
MHTDate[29]="你是否觉得和同学一起玩，不如自己一个人玩？"
MHTDate[30]="同学们在交谈时，你是否不想加入？"
MHTDate[31]="你和大家在一起时，是否觉得自己是多余 的人？"
MHTDate[32]="你是否讨厌参加运动会和文艺演出会？"
MHTDate[33]="你的朋友是否很少？"
MHTDate[34]="你是否不喜欢同别人谈话？"
MHTDate[35]="在人多的地方，你是否觉得很怕？"
MHTDate[36]="你在排球.篮球.足球.拔河.广播操等体育比赛输了时，是否一直认为自己不好？"
MHTDate[37]="你受到批评后，是否总是认为自己不好？"
MHTDate[38]="别人笑你的时候，你是否会认为是自己不用功的缘故？"
MHTDate[39]="你学习成绩不好时，是否总是认为是自己不用功的缘故？"
MHTDate[40]="你失败的时候，是否总是认为是自己的责任？"
MHTDate[41]="大家受到责备时，你是否认为主要是自己的过错？"
MHTDate[42]="你在乒乓球.羽毛球.篮球.足球.拔河.广播操等体育比赛时，是否一出错就特别留神？"
MHTDate[43]="碰到为难的事情时，你是否认为自己难以应付？"
MHTDate[44]="你是否有时会后悔，那件事不做就好？"
MHTDate[45]="你和同学吵架以后，是否总是认为是自己的错？"
MHTDate[46]="你心里是否总想为班级做点好事？"
MHTDate[47]="你学习的时候，思想是否经常开小差？"
MHTDate[48]="你把东西借给别人时，是否担心别人会把东西弄坏？"
MHTDate[49]="碰到不顺利的事情时，你心里是否很烦躁？"
MHTDate[50]="你是否非常担心家里有人生病或死去？"
MHTDate[51]="你休息时对光线否特别敏感？"
MHTDate[52]="你对收音机和汽车的声音是否特别敏感？"
MHTDate[53]="你心里是否总觉得好像有什么事没有做好？"
MHTDate[54]="你是否担心会发生什么意外的事？"
MHTDate[55]="你在决定要做什么事时，是否总是犹豫不决？"
MHTDate[56]="你手上是否经常出汗？"
MHTDate[57]="你害羞时是否会脸红？"
MHTDate[58]="你是否经常头痛？"
MHTDate[59]="你被老师提问时，心里是否总是很紧张？"
MHTDate[60]="你没有参加运动，心脏是否经常噗通噗通地跳？"
MHTDate[61]=" 你是否很容易疲劳？"
MHTDate[62]="你是否很不愿吃药？"
MHTDate[63]="夜里你是否很难入梦？"
MHTDate[64]="你是否觉得身体好像有什么毛病？"
MHTDate[65]="你是否经常认为自己的身型和面孔比别人难看？"
MHTDate[66]="你是否经常觉得肠胃不好？"
MHTDate[67]="你是否经常咬指甲？"
MHTDate[68]="你是否舔手指头？"
MHTDate[69]="你是否经常感到呼吸困难？"
MHTDate[70]="你去厕所的次数是否比别人多？"
MHTDate[71]="你是否很害怕到高的地方去？"
MHTDate[72]="你是否害怕很多东西？"
MHTDate[73]="你是否经常做噩梦？"
MHTDate[74]="你胆子是否很小？"
MHTDate[75]="夜里，你是否很怕一个人在房间里睡觉？"
MHTDate[76]="你乘车穿过隧道或高桥时，是否很怕？"
MHTDate[77]="你是否喜欢夜里开着灯睡觉？"
MHTDate[78]="你听到打雷声是否非常害怕？"
MHTDate[79]="你是否非常害怕黑暗？"
MHTDate[80]="你是否经常感到后面有人跟着你？"
MHTDate[81]="你是否经常生气？"
MHTDate[82]="你是否不想得到好的成绩？"
MHTDate[83]="你是否会突然想哭？"
MHTDate[84]="你以前是否说过谎话？"
MHTDate[85]="你有时是否觉得，还是死了好？"
MHTDate[86]="你是否一次也没有失约过？"
MHTDate[87]="你是否经常想大声喊叫？"
MHTDate[88]="你是否不愿说出别人不让说的事？"
MHTDate[89]="你有时是否想过自己一个人到遥远的地方去？"
MHTDate[90]="你是否总是很有礼貌？"
MHTDate[91]="你被人说了坏话，是否想立即采取抱负行动？"
MHTDate[92]="老师或父母说的话，你是否都照办？"
MHTDate[93]="你心里不开心，是否会乱丢.乱砸东西？"
MHTDate[94]="你是否发过怒？"
MHTDate[95]="你想要的东西，是否就要一定那到手？"
MHTDate[96]="你不喜欢的课，老师提前下课，你是否感到特别高兴？"
MHTDate[97]="你是否经常想从高的地方跳下来？"
MHTDate[98]="你是否无论对谁都很亲？"
MHTDate[99]="你是否会经常急躁得坐立不安？"
MHTDate[100]="对不认识的人，你是否会都喜欢？"
var MHT=Array();
for(i=1;i<101;i++)
{
  MHT[i] = {}
}



for(i=1;i<101;i++)
{
  MHT[i].q = MHTDate[i]
  MHT[i].key = i
  MHT[i].sel = ""
  MHT[i].a = "是"
  MHT[i].b = "否"
  MHT[i].ret_a = 1
  MHT[i].ret_b = 0

}
var retnumber = new Array()
retnumber["效度量"] = [82,84,86,88,90,92,94,96,98,100] //6
retnumber["学习焦虑"] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] //9
retnumber["对人焦虑"] =[16,17,18,19,20,21,22,23,24,25] //11
retnumber["孤独倾向"] =[26,27,28,29,30,31,32,33,34,35] //6
retnumber["自责倾向"] =[36,37,38,39,40,41,42,43,44,45] //7
retnumber["过敏倾向"] =[46,47,48,49,50,51,52,53,54,55] //9
retnumber["身体症状"] =[56,57,58,59,60,61,62,63,64,65,66,67,68,69,70] //12
retnumber["恐怖倾向"] =[71,72,73,74,75,76,77,78,79,80] //6
retnumber["冲动倾向"] =[81,83,85,87,89,91,93,95,97,99] //7


for(var i in retnumber){
  var retindex = retnumber[i]
  
  for(var x in retindex)
  {
    var indexnumber = Number(retindex[x])
    MHT[indexnumber].type = i
  }
}



class MHTModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      MHT:[],
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var MHTrandom = new Array();
    var runtimeMHT = MHT.concat()
    while(runtimeMHT.length>0)
    {
      var p = parseInt(Math.random()*runtimeMHT.length)
      if(undefined!=runtimeMHT[p])
      {MHTrandom.push(runtimeMHT[p]);}
      runtimeMHT.splice(p,1)
    }
    //console.log(MHTrandom)
    var checked = new Array();
    for(i=0;i<MHTrandom.length;i++)
    {
      checked[0]=undefined
checked[i]=""
      MHTrandom[i].index=i
      MHTrandom[i].key=i
      MHTrandom[i].sel=""
    }
    //console.log(MHTrandom)
    this.setState ({
      checked:checked,
      MHT:MHTrandom,
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
      closetest:false,
    })
    console.log("clear",MHTrandom)

  }
  check(){
    //if(__DEV__)
//    {return true}
    for(i=0;i<MHT.length;i++)
    {
      if(undefined != MHT[i] && this.state.checked[i]==="")
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
      
    title: RouteConfig["MHTModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.MHT[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<MHT.length;i++)
      {
        //console.log(MHT[i].sel)
      }
    }

  }

  result()
  {
    if(false==this.check())
    {
      return
    }
    var testMHT = this.state.MHT
    var ret = new Array();

    ret["效度量"]=ret["学习焦虑"]=ret["对人焦虑"]=ret["自责倾向"]=ret["孤独倾向"]=ret["过敏倾向"]=ret["恐怖倾向"]=ret["冲动倾向"]=ret["身体症状"]=0

    var total = 0
    var bigtotal = 0 
    //console.log(testMHT)
    for(i=0;i<testMHT.length;i++)
    {
      var _p = testMHT[i].sel;
      var _t = testMHT[i].type
      
      if(''!=_p)
      {
        //console.log(testMHT[i].sel, testMHT[i].type)
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

    extrainfo.push( ret["效度量"]>6?"该问卷疑惑性高，不能体现最终结果":"该问卷可信度较高") 
    extrainfo.push( "学习焦虑:" + Math.floor(ret["哲学倾向"]  ) ) 
    extrainfo.push( "对人焦虑:" + Math.floor(ret["经济学倾向"]  ) ) 
    extrainfo.push(  "自责倾向:" + Math.floor(ret["法学倾向"]  ) ) 
    extrainfo.push(  "孤独倾向:" + Math.floor(ret["教育学倾向"] ) ) 
    extrainfo.push(  "过敏倾向:" + Math.floor(ret["文学倾向"]  ) ) 
    extrainfo.push(  "恐怖倾向:" + Math.floor(ret["历史学倾向"]  ) ) 
    extrainfo.push(  "冲动倾向:" + Math.floor(ret["理学倾向"]  ) ) 
    extrainfo.push(  "身体症状:" + Math.floor(ret["工学倾向"] ) ) 
    //console.log(ret,total)
    var detailinfo = new Array
    detailinfo.push("学习焦虑：8分以上说明被测试者可能对考试怀有恐惧心理，无法安心学习，十分关心考试分数。这类人必须接受为他制订的有针对性的特别指导计划。3分以下说明被测试者可能学习焦虑地，学习不会受到困扰，能正确对待考试成绩。\n ")
    detailinfo.push("对人焦虑：8分以上说明被测试者可能过分注重自己的形象，害怕与人交往，退缩。这类人必须接受为他制订的有针对性的特别指导计划。3分以下说明被测试者可能热情，大方，容易结交朋友。\n ")
    detailinfo.push("孤独倾向：8分以上说明被测试者可能孤独.抑郁，不善于与人交往，自我封闭。这类人必须接受为他制订的有针对性的特别指导计划。3分以下说明被测试者可能爱好社交，喜欢寻求刺激，喜欢与他人在一起。\n ")
    detailinfo.push("自责倾向：8分以上说明被测试者可能自卑，常怀疑自己的能力，常将失败.过失归咎于自己。这类人必须接受为他制订的有针对性的特别指导计划。3分以下说明被测试者可能自信，能正确看待失败。\n ")
    detailinfo.push("过敏倾向：8分以上说明被测试者可能过于敏感，容易为一些小事而烦恼。这类人必须接受为他制订的有针对性的特别指导计划。3分以下说明被测试者可能敏感性较低，能较好地处理日常事物。\n ")
    detailinfo.push("身体症状：8分以上说明被测试者可能在极度焦虑的时候，会出现呕吐失眠.小便失禁等明显症状。这类人必须接受为他制订的有针对性的特别指导计划。3分以下说明被测试者可能基本没有身体异常表现。\n ")
    detailinfo.push("恐怖倾向：8分以上说明被测试者可能对某些日常事物，如黑暗等，有较严重的恐怖感。这类人必须接受为他制订的有针对性的特别指导计划。3分以下说明被测试者可能基本没有恐怖感。\n ")
    detailinfo.push("冲动倾向：8分以上说明被测试者可能十分冲动，自制力较差。这类人必须接受为他制订的有针对性的特别指导计划。3分以下说明被测试者可能基本没有冲动。\n ")

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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['MHTlocation'], "霍兰德职业性格测试结果",this)}}                
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
              title={RouteConfig["MHTModule"].titlename}
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
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='MHTlocation'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["MHTModule"].titlename}</Text>
      <FlatList

            data={this.state.MHT}
            extraData={this.state}
            keyExtractor={this.keyExtractor}
						renderItem={({ item }) => (
              <View id={item.id}>
              <Text style={styles.list}></Text>
              <Text style={styles.list}>第{item.index+1}题:{item.q}</Text>
              <View style = {styles.dateContainer}>
              <CheckBox containerStyle={styles.CheckBox} title = {item.a} checked={this.state.checked[Number(item.key+1)]===item.ret_a}  onPress={()=>this.updateIndex(Number(item.key+1),item.ret_a)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.b} checked={this.state.checked[Number(item.key+1)]===item.ret_b}  onPress={()=>this.updateIndex(Number(item.key+1),item.ret_b)}/>
              
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

module.exports=MHTModule;  