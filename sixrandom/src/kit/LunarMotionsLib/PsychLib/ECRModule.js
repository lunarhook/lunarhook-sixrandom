
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import ScreenConfig from '../../../config/ScreenConfig';
import {StyleConfig,FontStyleConfig} from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
var ECRDate=Array();
ECRDate[1]="总的来说,我不喜欢让恋人知道自己内心深处的感觉；"
ECRDate[2]="我担心我会被抛弃；"
ECRDate[3]="我觉得跟恋人亲近是一件惬意的事情；(R) "
ECRDate[4]="我很担心我的恋爱关系；"
ECRDate[5]="当恋人开始要跟我亲近时,我发现我自己在退缩；"
ECRDate[6]="我担心恋人不会象我关心他(/她)那样地关心我；"
ECRDate[7]="当恋人希望跟我非常亲近时,我会觉得不自在；"
ECRDate[8]="我有点担心会失去恋人；"
ECRDate[9]="我觉得对恋人开诚布公,不是一件很舒服的事情；"
ECRDate[10]="我常常希望恋人对我的感情和我对恋人的感情一样强烈；"
ECRDate[11]="我想与恋人亲近,但我又总是会退缩不前；"
ECRDate[12]="我常常想与恋人形影不离,但有时这样会把恋人吓跑；"
ECRDate[13]="当恋人跟我过分亲密的时候,我会感到内心紧张；"
ECRDate[14]="我担心一个人独处；"
ECRDate[15]="我愿意把我内心的想法和感觉告诉恋人,我觉得这是一件自在的事情；(R)"
ECRDate[16]="我想跟恋人非常亲密的愿望,有时会把恋人吓跑；"
ECRDate[17]="我试图避免与恋人变得太亲近；"
ECRDate[18]="我需要我的恋人一再地保证他/她是爱我的；"
ECRDate[19]="我觉得我比较容易与恋人亲近；(R)"
ECRDate[20]="我觉得自己在要求恋人把更多的感觉,以及对恋爱关系的投入程度表现出来；"
ECRDate[21]="我发现让我依赖恋人,是一件困难的事情；"
ECRDate[22]="我并不是常常担心被恋人抛弃；(R)"
ECRDate[23]="我倾向于不跟恋人过分亲密；"
ECRDate[24]="如果我无法得到恋人的注意和关心,我会心烦意乱或者生气；"
ECRDate[25]="我跟恋人什么事情都讲；(R)"
ECRDate[26]="我发现恋人并不愿意象我所想的那样跟我亲近；"
ECRDate[27]="我经常与恋人讨论我所遇到的问题以及我关心的事情；(R)"
ECRDate[28]="如果我还没有恋人的话,我会感到有点焦虑和不安；"
ECRDate[29]="我觉得依赖恋人是很自在的事情；(R)"
ECRDate[30]="如果恋人不能象我所希望的那样在我身边时,我会感到灰心丧气；"
ECRDate[31]="我并不在意从恋人那里寻找安慰,听取劝告,得到帮助；(R)"
ECRDate[32]="如果在我需要的时候,恋人却不在我身边,我会感到沮丧；"
ECRDate[33]="在需要的时候,我向恋人求助,是很有用的；(R)"
ECRDate[34]="当恋人不赞同我时,我觉得确实是我不好；"
ECRDate[35]="我会在很多事情上向恋人求助,包括寻求安慰和得到承诺；(R)"
ECRDate[36]="当恋人不花时间和我在一起时,我会感到怨恨；"
var ECR=Array();
for(i=1;i<37;i++)
{
  ECR[i]={}
}

var invertdate = [3,15,19,22,25,27,29,31,33,35]


for(i=1;i<37;i++)
{
  //console.log(ECRDate[i])
  ECR[i].q = ECRDate[i]
  ECR[i].sel = ""
  ECR[i].a = "非常认可"
  ECR[i].b = "认可"
  ECR[i].c = "中立"
  ECR[i].d = "否认"
  ECR[i].e = "完全否认"
  ECR[i].ret_a = "7"
  ECR[i].ret_b = "5.5"
  ECR[i].ret_c = "4"
  ECR[i].ret_d = "2.5"
  ECR[i].ret_e = "1"
  if(true==invertdate.includes(i))
  {
    ECR[i].ret_a = "1"
    ECR[i].ret_b = "2.5"
    ECR[i].ret_c = "4"
    ECR[i].ret_d = "5.5"
    ECR[i].ret_e = "7"
  }
}
var retnumber = new Array()
retnumber["回避亲近维度"] = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35]
retnumber["焦虑安全维度"] = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36]
for(var i in retnumber){
  var retindex = retnumber[i]
  
  for(var x in retindex)
  {
    var indexnumber = Number(retindex[x])
    ECR[indexnumber].type = i
  }
}



class ECRModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      ECR:[],
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var ECRrandom = new Array();
    var runtimeECR = ECR.concat()
    while(runtimeECR.length>0)
    {
      var p = parseInt(Math.random()*runtimeECR.length)
      if(undefined!=runtimeECR[p])
      {ECRrandom.push(runtimeECR[p]);}
      runtimeECR.splice(p,1)
    }
    //console.log(ECRrandom)
    var checked = new Array();
    for(i=0;i<ECRrandom.length;i++)
    {
      //checked[0]=undefined
checked[i]=""
      ECRrandom[i].index=i
      ECRrandom[i].key=i
      ECRrandom[i].sel=""
    }
    //console.log(ECRrandom)
    this.setState ({
      checked:checked,
      ECR:ECRrandom,
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
    for(i=0;i<this.state.ECR.length;i++)
    {
      if(undefined != this.state.ECR[i] && this.state.checked[i]==="")
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
      
    title: RouteConfig["ECRModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.ECR[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<ECR.length;i++)
      {
        //console.log(ECR[i].sel)
      }
    }

  }
  checkrender_C(item)
  {
    if(""!=item.ret_c)
    {return(
      <CheckBox containerStyle={styles.CheckBox} title = {"C"} checked={this.state.checked[Number(item.key)]==item.ret_c}  onPress={()=>this.updateIndex(item.key,item.ret_c)}/>
    )}
    return null
  }
  checkrender_D(item)
  {
    if(""!=item.ret_d)
    {return(
      <CheckBox containerStyle={styles.CheckBox} title = {"D"} checked={this.state.checked[Number(item.key)]==item.ret_d}  onPress={()=>this.updateIndex(item.key,item.ret_d)}/>
    )}
    return null
  }
  result()
  {
    if(false==this.check())
    {
      return
    }
    var testECR = this.state.ECR
    var ret = new Array();
    ret["焦虑安全维度"]=ret["回避亲近维度"]=0

    var total = 0
    var bigtotal = 0 
    //console.log(testECR)
    for(i=0;i<testECR.length;i++)
    {
      var _p = testECR[i].sel;
      var _t = testECR[i].type
      
      if(''!=_p)
      {
        //console.log(testECR[i].sel, testECR[i].type)
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
    var A = Math.floor(ret["焦虑安全维度"])
    var B = Math.floor(ret["回避亲近维度"])
    var AA= Math.floor(A/18)
    var BB= Math.floor(B/18)
    var M1 = Math.floor(AA * 3.2893296+ BB * 5.4725318 - 11.5307833 )
    var M2 = Math.floor(AA * 7.2371075+ BB * 8.1776448 - 32.3553266)
    var M3 = Math.floor(AA * 3.9246754+ BB * 9.7102446 - 28.4573220)
    var M4 = Math.floor(AA*7.3654621+ BB * 4.9392039 - 22.2281088 )
    var extrainfo = new Array
    extrainfo.push( "焦虑安全维度:" + A  )
    extrainfo.push( "回避亲近维度:" + B  )
    extrainfo.push( "依恋回避:" + AA )
    extrainfo.push( "依恋焦虑:" + BB )
    extrainfo.push( "M1 安全性:" +  M1)
    extrainfo.push( "M2 恐惧性:" + M2)
    extrainfo.push( "M3 专注性:" +  M3)
    extrainfo.push( "M4 冷漠性:" +  M4)
    //console.log(ret,total)
    var detailinfo = new Array
    detailinfo.push("那个得分高极为哪个型，比如M1大于其他三个，则为安全型；M2大于另外三个则为恐惧性\n")
    
    this.setState({
      ret:"总分:"+total,
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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['ECRlocation'], "霍兰德职业性格测试结果",this)}}                
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
              title={RouteConfig["ECRModule"].titlename}
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
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='ECRlocation'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["ECRModule"].titlename}</Text>
      <FlatList

            data={this.state.ECR}
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

module.exports=ECRModule;  