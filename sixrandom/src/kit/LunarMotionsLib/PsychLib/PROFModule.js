
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import ScreenConfig from '../../../config/ScreenConfig';
import {StyleConfig,FontStyleConfig} from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
var PROFDate=Array()
PROFDate[1]="向往田园生活"
PROFDate[2]="熟悉人体各器官的机能"
PROFDate[3]="喜欢记录比赛得分"
PROFDate[4]="认为中药很神奇"
PROFDate[5]="希望到银行工作"
PROFDate[6]="知道主要国家的宗教派别"
PROFDate[7]="喜欢利用逻辑原理解决问题"
PROFDate[8]="有较强策划能力"
PROFDate[9]="懂得照顾他人"
PROFDate[10]="有某种艺术特长"
PROFDate[11]="对股票感兴趣"
PROFDate[12]="熟悉中国革命史"
PROFDate[13]="能说出日常农作物的上市季节"
PROFDate[14]="对经商感兴趣"
PROFDate[15]="热衷收藏用旧的东西"
PROFDate[16]="不反感对活动物的解剖"
PROFDate[17]="更喜欢数理化方面的知识"
PROFDate[18]="很受同学、朋友的信赖"
PROFDate[19]="了解税务方面的知识"
PROFDate[20]="渴望当医务工作者"
PROFDate[21]="喜欢制作图书卡片"
PROFDate[22]="对教育现状有自己的认识"
PROFDate[23]="观察事物很细心"
PROFDate[24]="对侦破题材的节目很感兴趣"
PROFDate[25]="擅长推理和分析"
PROFDate[26]="特别注重日常礼仪"
PROFDate[27]="关心国家经济发展这方面的信息"
PROFDate[28]="有语言天赋"
PROFDate[29]="能坚持记日记"
PROFDate[30]="什么事都想自己尝试一下"
PROFDate[31]="自己的东西总收拾得井井有条"
PROFDate[32]="喜欢收看历史节目"
PROFDate[33]="常阅读自然科学家的故事"
PROFDate[34]="关注日常的商业信息"
PROFDate[35]="对农林业很感兴趣"
PROFDate[36]="喜欢做智力测试题"
PROFDate[37]="希望受人瞩目"
PROFDate[38]="喜欢阅读企业家的自传v"
PROFDate[39]="曾通读文学全集"
PROFDate[40]="想当一名建筑师"
PROFDate[41]="关注民族宗教问题"
PROFDate[42]="有社会公德心"
PROFDate[43]="了解国家制度和国家机构的设置"
PROFDate[44]="常制作学习卡片"
PROFDate[45]="常参加各种集会"
PROFDate[46]="对保险业感兴趣"
PROFDate[47]="常进行归纳推理"
PROFDate[48]="自行研究拆装过钟表、相机、锁等东西"
PROFDate[49]="喜爱观察害虫与杂草"
PROFDate[50]="热心设计庭院"
PROFDate[51]="喜欢逗幼儿玩"
PROFDate[52]="对宗教的内容感兴趣"
PROFDate[53]="东西坏了更愿意尝试自己维修v"
PROFDate[54]="乐意制作生活日历"
PROFDate[55]="喜欢参观博物馆"
PROFDate[56]="喜欢集邮或类似的活动"
PROFDate[57]="喜欢搭乘远洋渔轮"
PROFDate[58]="有很丰富的军事知识并想成为这方面的专家"
PROFDate[59]="喜欢在实验室工作"
PROFDate[60]="喜欢饲养宠物并很了解它们的习性"
PROFDate[61]="擅长与人交流"
PROFDate[62]="想成为一名工程师"
PROFDate[63]="对现代化农业建设感兴趣"
PROFDate[64]="对计算机很感兴趣"
PROFDate[65]="了解中国古代佛道儒三家的基本情况"
PROFDate[66]="很喜欢看电影"
PROFDate[67]="喜欢跳集体舞"
PROFDate[68]="不畏惧学习新的东西"
PROFDate[69]="常自愿参观科学博物馆"
PROFDate[70]="崇拜世界知名公司的领导者"
PROFDate[71]="注意“历史上的今天”这样的信息"
PROFDate[72]="时常独处思考问题"
PROFDate[73]="经常组织各种活动"
PROFDate[74]="能自己培育花草"
PROFDate[75]="了解对外经济政策"
PROFDate[76]="心算能力强"
PROFDate[77]="有剪报的习惯"
PROFDate[78]="喜欢解难题"
PROFDate[79]="擅长写作"
PROFDate[80]="乐意辅导小孩功课"
PROFDate[81]="很喜欢看《经济半小时》"
PROFDate[82]="喜欢到名胜古迹旅游"
PROFDate[83]="有一定的书法功底"
PROFDate[84]="常关注考古信息"
PROFDate[85]="常看法律普及读物"
PROFDate[86]="崇拜律师"
PROFDate[87]="对病情的变化很敏感"
PROFDate[88]="了解不少医学知识"
PROFDate[89]="想成为一名公安干警"
PROFDate[90]="能辨别果蔬的好坏"
PROFDate[91]="常整理书架与影集"
PROFDate[92]="很有爱心"
PROFDate[93]="了解文明发展史"
PROFDate[94]="小时候很喜欢扮医生给人治病"
PROFDate[95]="对经济类的信息很关注"
PROFDate[96]="渴望从事法律方面的工作"
PROFDate[97]="爱思考问题"
PROFDate[98]="在体育方面有特长"
PROFDate[99]="能胜任班干部的工作"
PROFDate[100]="爱阅读历史书籍"
PROFDate[101]="了解各哲学流派的差异"
PROFDate[102]="认真读过哲学方面的资料 "
PROFDate[103]="善于处理和别人的关系"
PROFDate[104]="日常小病懂得如何用药"
PROFDate[105]="会制作同学会名簿"
PROFDate[106]="爱教孩子唱歌跳舞"
PROFDate[107]="能想到用法律来保护自己的合法权益"
PROFDate[108]="动手能力比较强"
PROFDate[109]="擅长表演"
PROFDate[110]="常留意健康类节目"
var PROF=Array();
for(i=1;i<111;i++)
{
  PROF[i] = {}
}



for(i=1;i<111;i++)
{
  PROF[i].q = PROFDate[i]
  PROF[i].key = i
  PROF[i].sel = ""
  PROF[i].a = "是"
  PROF[i].b = "否"
  PROF[i].ret_a = 1
  PROF[i].ret_b = 0

}
var retnumber = new Array()
retnumber["哲学倾向"] = [6,7,26,41,47,52,65,97,101,102] //6
retnumber["经济学倾向"] = [5,11,14,19,27,34,46,75,81,95] //9
retnumber["法学倾向"] =[12,24,42,43,85,86,89,96,103,107] //11
retnumber["教育学倾向"] =[22,44,51,61,67,80,92,98,105,106] //6
retnumber["文学倾向"] =[10,21,28,29,37,39,66,77,79,109] //7
retnumber["历史学倾向"] =[15,32,55,56,71,82,83,84,93,100] //9
retnumber["理学倾向"] =[17,23,25,33,36,59,69,72,76,78] //12
retnumber["工学倾向"] =[30,35,40,48,53,58,62,64,68,108] //6
retnumber["农学倾向"] =[1,13,49,50,57,60,63,74,90,91] //7
retnumber["医学倾向"] =[2,4,9,16,20,88,87,94,104,110] //9
retnumber["管理学倾向"] =[3,8,18,31,38,45,54,70,73,99] //12

for(var i in retnumber){
  var retindex = retnumber[i]
  
  for(var x in retindex)
  {
    var indexnumber = Number(retindex[x])
    PROF[indexnumber].type = i
  }
}



class PROFModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      PROF:[],
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var PROFrandom = new Array();
    var runtimePROF = PROF.concat()
    while(runtimePROF.length>0)
    {
      var p = parseInt(Math.random()*runtimePROF.length)
      if(undefined!=runtimePROF[p])
      {PROFrandom.push(runtimePROF[p]);}
      runtimePROF.splice(p,1)
    }
    //console.log(PROFrandom)
    var checked = new Array();
    for(i=0;i<PROFrandom.length;i++)
    {
      //checked[0]=undefined
checked[i]=""
      PROFrandom[i].index=i
      PROFrandom[i].key=i
      PROFrandom[i].sel=""
    }
    //console.log(PROFrandom)
    this.setState ({
      checked:checked,
      PROF:PROFrandom,
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
      closetest:false,
    })
    console.log("clear",PROFrandom)

  }
  check(){
    //if(__DEV__)
//    {return true}
    for(i=0;i<this.state.PROF.length;i++)
    {
      if(undefined != this.state.PROF[i] && this.state.checked[i]==="")
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
      
    title: RouteConfig["PROFModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.PROF[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<PROF.length;i++)
      {
        //console.log(PROF[i].sel)
      }
    }

  }

  result()
  {
    if(false==this.check())
    {
      return
    }
    var testPROF = this.state.PROF
    var ret = new Array();

    ret["哲学倾向"]=ret["经济学倾向"]=ret["法学倾向"]=ret["教育学倾向"]=ret["文学倾向"]=ret["历史学倾向"]=ret["理学倾向"]=ret["工学倾向"]=ret["农学倾向"]=ret["医学倾向"]=ret["管理学倾向"]=0

    var total = 0
    var bigtotal = 0 
    //console.log(testPROF)
    for(i=0;i<testPROF.length;i++)
    {
      var _p = testPROF[i].sel;
      var _t = testPROF[i].type
      
      if(''!=_p)
      {
        //console.log(testPROF[i].sel, testPROF[i].type)
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
    extrainfo.push( "哲学倾向:" + Math.floor(ret["哲学倾向"] /110  * 100)/100 ) 
    extrainfo.push( "经济学倾向:" + Math.floor(ret["经济学倾向"] / 110  * 100)/100 ) 
    extrainfo.push(  "法学倾向:" + Math.floor(ret["法学倾向"] / 110  * 100)/100 ) 
    extrainfo.push(  "教育学倾向:" + Math.floor(ret["教育学倾向"] /110  * 100)/100) 
    extrainfo.push(  "文学倾向:" + Math.floor(ret["文学倾向"] / 110  * 100)/100 ) 
    extrainfo.push(  "历史学倾向:" + Math.floor(ret["历史学倾向"] / 110 * 100)/100 ) 
    extrainfo.push(  "理学倾向:" + Math.floor(ret["理学倾向"] / 110  * 100)/100 ) 
    extrainfo.push(  "工学倾向:" + Math.floor(ret["工学倾向"] /110  * 100)/100 ) 
    extrainfo.push(  "农学倾向:" + Math.floor(ret["农学倾向"] /110   * 100)/100 ) 
    extrainfo.push(  "医学倾向:" + Math.floor(ret["医学倾向"] / 110  * 100)/100 ) 
    extrainfo.push(  "管理学倾向:" + Math.floor(ret["管理学倾向"] / 110   * 100)/100 ) 
    //console.log(ret,total)
    var detailinfo = new Array
    detailinfo.push("由于自身个性的特点，如果具有不止一个专业倾向性，属于正常现象\n ")


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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['PROFlocation'], "霍兰德职业性格测试结果",this)}}                
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
              title={RouteConfig["PROFModule"].titlename}
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
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='PROFlocation'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["PROFModule"].titlename}</Text>
      <FlatList

            data={this.state.PROF}
            extraData={this.state}
            keyExtractor={this.keyExtractor}
						renderItem={({ item }) => (
              <View id={item.id}>
              <Text style={styles.list}></Text>
              <Text style={styles.list}>第{item.index+1}题:{item.q}</Text>
              <View style = {styles.dateContainer}>
              <CheckBox containerStyle={styles.CheckBox} title = {item.a} checked={this.state.checked[Number(item.key)]===item.ret_a}  onPress={()=>this.updateIndex(Number(item.key),item.ret_a)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.b} checked={this.state.checked[Number(item.key)]===item.ret_b}  onPress={()=>this.updateIndex(Number(item.key),item.ret_b)}/>
              
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

module.exports=PROFModule;  