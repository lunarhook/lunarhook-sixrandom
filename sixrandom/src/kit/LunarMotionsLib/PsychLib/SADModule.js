
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import ScreenConfig from '../../../config/ScreenConfig';
import StyleConfig from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'

var SADDate=Array()
SADDate[1]="即使在不熟悉的社交场合里我仍然感到轻松。"
SADDate[2]="我尽量避免迫使我参加交际应酬的情形。"
SADDate[3]="我同陌生人在一起时很容易放松。"
SADDate[4]="我并不特别想去回避人们。"
SADDate[5]="我通常发现社交场合令人心烦意乱。"
SADDate[6]="在社交场合我通常感觉平静及舒适。"
SADDate[7]="在同异性交谈时，我通常感觉放松。"
SADDate[8]="我尽量避免与人家讲话，除非特别熟。"
SADDate[9]="如果有同新人相会的机会，我会抓住的。"
SADDate[10]="在非正式的聚会上如有异性参加，我通常觉得焦虑和紧张。"
SADDate[11]="我通常与人们在一起时感到焦虑，除非与他们特别熟。"
SADDate[12]="我与一群人在一起时通常感到放松。"
SADDate[13]="我经常想离开人群。"
SADDate[14]="在置身于不认识的人群中时，我通常感到不自在。"
SADDate[15]="在初次遇见某些人时，我通常是放松的。"
SADDate[16]="被介绍给别人使得我感到紧张和焦虑。"
SADDate[17]="尽管满房间都是生人，我可能还是会进去的。"
SADDate[18]="我会避免走上前去加入到一大群人中间。"
SADDate[19]="当上司想同我谈话时，我很高兴与他谈话。"
SADDate[20]="当与一群人在一起时，我通常感觉忐忑不安。"
SADDate[21]="我喜欢躲开人群。"
SADDate[22]="在晚上或社交聚会上与人们交谈对我不成问题。"
SADDate[23]="在一大群人中间，我极少能感到自在。"
SADDate[24]="我经常想出一些借口以回避社交活动。"
SADDate[25]="我有时充当为人们相互介绍的角色。"
SADDate[26]="我尽量避开正式的社交场合。"
SADDate[27]="我通常参加我所能参加的各种社会交往。不管是什么社交活动，我一般是能去就去。"
SADDate[28]="我发现同他人在一起时放松很容易。"
var SAD=Array();
for(i=1;i<29;i++)
{
  SAD[i] = {}
}
/*
SAD[1]={
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
SAD[2]={
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
SAD[3]={
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
SAD[4]={
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
SAD[5]={
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
SAD[6]={
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
SAD[7]={
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
SAD[8]={
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
SAD[9]={
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
SAD[10]={
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
SAD[11]={
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
SAD[12]={
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
SAD[13]={
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
SAD[14]={
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
SAD[15]={
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
SAD[16]={
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
SAD[17]={
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
SAD[18]={
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
SAD[19]={
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
SAD[20]={
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
*/
var invertdate = [ 
  1,3,4,6,7,9,12,15,17,19,22,25,27,28
  ]
for(i=1;i<29;i++)
{
  SAD[i].q = SADDate[i]
  SAD[i].key = i
  SAD[i].sel = ""
  SAD[i].a = "是"
  SAD[i].b = "否"
  SAD[i].ret_a = 1
  SAD[i].ret_b = 0
    if(true==invertdate.includes(i))
    {
      SAD[i].ret_a = 0
      SAD[i].ret_b = 1
    }
  }

var retnumber = new Array()
retnumber["回避"] = [2,4,8,9,13,17,18,19,21,22,24,25,26,27]
retnumber["焦虑"] = [1,3,5,6,7,10,11,12,14,15,16,20,23,28]
for(var i in retnumber){
  var retindex = retnumber[i]
  
  for(var x in retindex)
  {
    var indexnumber = Number(retindex[x])
    SAD[indexnumber].type = i
  }
}


class SADModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      SAD:[],
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var SADrandom = new Array();
    var runtimeSAD = SAD.concat()
    while(runtimeSAD.length>0)
    {
      var p = parseInt(Math.random()*runtimeSAD.length)
      if(undefined!=runtimeSAD[p])
      {SADrandom.push(runtimeSAD[p]);}
      runtimeSAD.splice(p,1)
    }
    //console.log(SADrandom)
    var checked = new Array();
    for(i=0;i<SADrandom.length;i++)
    {
      checked[0]=undefined
checked[i]=""
      SADrandom[i].index=i
      SADrandom[i].key=i
      SADrandom[i].sel=""
    }
    //console.log(SADrandom)
    this.setState ({
      checked:checked,
      SAD:SADrandom,
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
    for(i=0;i<=SAD.length;i++)
    {
      if(SAD[i]!=undefined && this.state.checked[i]==="" )
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
      
    title: RouteConfig["SADModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.SAD[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<SAD.length;i++)
      {
        //console.log(SAD[i].sel)
      }
    }

  }

  result()
  {
    if(false==this.check())
    {
      return
    }
    var testSAD = this.state.SAD
    var ret = new Array();

    ret["回避"]=ret["焦虑"]=0

    var total = 0
    var bigtotal = 0 
    //console.log(testSAD)
    for(i=0;i<testSAD.length;i++)
    {
      var _p = testSAD[i].sel;
      var _t = testSAD[i].type
      
      if(''!=_p)
      {
        //console.log(testSAD[i].sel, testSAD[i].type)
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
    
    //console.log(ret,total)
    var extrainfo = new Array
    extrainfo.push("回避分量:" + Math.floor(ret["回避"] ) ) 
    extrainfo.push("焦虑分量:" + Math.floor(ret["焦虑"]) ) 
    var detailinfo = new Array
    detailinfo.push("社交回避及苦恼分别指回避社会交往的倾向及身临其境时的苦恼感受。回避是一种行为表现，苦恼为情感反应。\n")
    detailinfo.push("社交回避及苦恼量表（Social Avoidance and Distress Scale ，SAD）含有28个条目，其中14条用于评价社交回避，14条用于评定社交苦恼。最初的评分采用“是一否”的方式，但许多研究人没采用了5级评分制。“是一否”评分制得分范围从0（最低的回避及苦恼程度）到28（最高的一级）。\n")
    detailinfo.push("在建立该表时，作者十分注重社交回避及苦恼的概念。他们把社交回避与不能参与社交加以区分。指出社交回避的反面不是社交参与而是“不回避”，此外，他们谨慎地只将主观的苦恼及行为上的回避等包括在内，而将诸如焦虑生理指数及受损的行为表现等内容排除在外，在最初的量表条目选择时，考虑了社交愿望及赞同的频率，并且进行了广泛的预测。\n")
    detailinfo.push("当采用“是一否“评分制时，大学生的均值勤为9.1，其标准差（SD）为8.0（Watson及Friend,1969）。但分布相当偏倚。故而许多研究人员采用5级分制来取代“是一否”分制。在样本原形中，男性的得分显著高于女性。\n")
    detailinfo.push("回避分量表的分数为： 常模+标准差=4.14+2.62\n")
    detailinfo.push("焦虑分量表的分数为： 常模+标准差=3.92+3.1\n")
    detailinfo.push("常模+标准差=8.03+4.64 ,相对来说适合做快速检测使用\n")

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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['SADlocation'], "霍兰德职业性格测试结果",this)}}                
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
              title={RouteConfig["SADModule"].titlename}
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
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='SADlocation'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["SADModule"].titlename}</Text>
      <FlatList

            data={this.state.SAD}
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

module.exports=SADModule;  