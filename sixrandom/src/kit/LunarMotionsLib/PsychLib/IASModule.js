
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import ScreenConfig from '../../../config/ScreenConfig';
import StyleConfig from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
var IASDate = Array()
IASDate[1]="即使正非正式的聚会上，我也常感到紧张。 "
IASDate[2]="与一群不认识的人在一起时，我通常感到不自在。 "
IASDate[3]="在与一位异性交谈时我通常感到轻松。"
IASDate[4]="在必须同老师或上司谈话时，我感到紧张。 "
IASDate[5]="聚会常会使我感到焦虑及不自在。"
IASDate[6]="与大多数人相比，我在社会交往中可能较少羞怯。"
IASDate[7]="在与我不太熟悉的同性谈话时，我常常感到紧张。"
IASDate[8]="在求职面试时我会紧张的。"
IASDate[9]="我希望自己在社交场合中信心更足一些。"
IASDate[10]="在社交场合中，我很少感到焦虑。"
IASDate[11]="一般而言，我是一个害羞的人。"
IASDate[12]="在与一位迷人的异性交谈时我经常感到紧张。 "
IASDate[13]="给不太熟的人打电话时我通常觉得紧张。"
IASDate[14]="我在与权威人士谈话时感到紧张。 "
IASDate[15]="即使处于一群和我相当不同的人群之中，通常我仍感到放松。 "

var IAS=Array();
for(i=1;i<26;i++)
{
  IAS[i] = {}
}
var invertdate = [3,6,10,15]

for(i=1;i<26;i++)
{
  IAS[i].q = IASDate[i]
  IAS[i].key = i
  IAS[i].sel = ""
  IAS[i].a = "完全不符"
  IAS[i].b = "不相符"
  IAS[i].c = "相似"
  IAS[i].d = "相符"
  IAS[i].e = "非常相符"
  IAS[i].ret_a = 1
  IAS[i].ret_b = 2
  IAS[i].ret_c = 3
  IAS[i].ret_d = 4
  IAS[i].ret_e = 5
  if(true==invertdate.includes(i))
  {
    IAS[i].ret_a = 5
    IAS[i].ret_b = 4
    IAS[i].ret_c = 3
    IAS[i].ret_d = 2
    IAS[i].ret_e = 1
  }
}


class IASModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      IAS:[],
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var IASrandom = new Array();
    var runtimeIAS = IAS.concat()
    while(runtimeIAS.length>0)
    {
      var p = parseInt(Math.random()*runtimeIAS.length)
      if(undefined!=runtimeIAS[p])
      {IASrandom.push(runtimeIAS[p]);}
      runtimeIAS.splice(p,1)
    }
    //console.log(IASrandom)
    var checked = new Array();
    for(i=0;i<IASrandom.length;i++)
    {
      checked[0]=undefined
checked[i]=""
      IASrandom[i].index=i
      IASrandom[i].key=i
      IASrandom[i].sel=""
    }
    //console.log(IASrandom)
    this.setState ({
      checked:checked,
      IAS:IASrandom,
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
    for(i=0;i<IAS.length;i++)
    {
      if(undefined != IAS[i] && this.state.checked[i]==="")
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
      
    title: RouteConfig["IASModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.IAS[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<IAS.length;i++)
      {
        //console.log(IAS[i].sel)
      }
    }

  }

  result()
  {
    if(false==this.check())
    {
      return
    }
    var testIAS = this.state.IAS

    var total = 0
    //console.log(testIAS)
    for(i=0;i<testIAS.length;i++)
    {
      var _p = testIAS[i].sel;
      
      if(''!=_p)
      {
        //console.log(testIAS[i].sel, testIAS[i].type)
        total = total + Number(_p); 
      }
      
    }
    
    //console.log(ret,total)
    var extrainfo = new Array
    extrainfo.push("本量表是Leary于1983年建立的，主要用于测量个体关于社交情境中主观焦虑体验的倾向。\n")
    extrainfo.push("总评分范围从15（表示社交焦虑程度最低）到75（表示社交焦虑程度最高）。\n")
    extrainfo.push("美国青年人的均值为38.9。本量表对于区分主观上的焦虑和外表上的行为表现是有帮助的，对于评估那些害怕人际交往同学的焦虑程度是实用的一种工具。\n")
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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['IASlocation'], "霍兰德职业性格测试结果",this)}}                
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
              title={RouteConfig["IASModule"].titlename}
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
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='IASlocation'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["IASModule"].titlename}</Text>
      <FlatList

            data={this.state.IAS}
            extraData={this.state}
            keyExtractor={this.keyExtractor}
						renderItem={({ item }) => (
              <View id={item.id}>
              <Text style={styles.list}></Text>
              <Text style={styles.list}>第{item.index+1}题:{item.q}</Text>
              <View style = {styles.dateContainer}>
              <CheckBox containerStyle={styles.CheckBox} title = {item.a} checked={this.state.checked[Number(item.key+1)]===item.ret_a}  onPress={()=>this.updateIndex(Number(item.key+1),item.ret_a)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.b} checked={this.state.checked[Number(item.key+1)]===item.ret_b}  onPress={()=>this.updateIndex(Number(item.key+1),item.ret_b)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.c} checked={this.state.checked[Number(item.key+1)]===item.ret_c}  onPress={()=>this.updateIndex(Number(item.key+1),item.ret_c)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.d} checked={this.state.checked[Number(item.key+1)]===item.ret_d}  onPress={()=>this.updateIndex(Number(item.key+1),item.ret_d)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.e} checked={this.state.checked[Number(item.key+1)]===item.ret_e}  onPress={()=>this.updateIndex(Number(item.key+1),item.ret_e)}/>
              
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

module.exports=IASModule;  