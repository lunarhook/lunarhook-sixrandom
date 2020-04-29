
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import ScreenConfig from '../../../config/ScreenConfig';
import {StyleConfig,FontStyleConfig} from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
var PANASDate=Array();
PANASDate[1]="感兴趣的"
PANASDate[2]="心烦的"
PANASDate[3]="精神活力高的"
PANASDate[4]="心神不宁的"
PANASDate[5]="劲头足的"
PANASDate[6]="内疚的"
PANASDate[7]="恐惧的"
PANASDate[8]="敌意的"
PANASDate[9]="热情的"
PANASDate[10]="自豪的"
PANASDate[11]="易怒的"
PANASDate[12]="警觉性高的"
PANASDate[13]="害羞的；"
PANASDate[14]="备受鼓舞的"
PANASDate[15]="紧张的"
PANASDate[16]="意志坚定的"
PANASDate[17]="注意力集中的"
PANASDate[18]="坐立不安的"
PANASDate[19]="有活力的"
PANASDate[20]="害怕的"

var PANAS=Array();
for(i=1;i<21;i++)
{
  PANAS[i]={}
}
for(i=1;i<21;i++)
{
  //console.log(PANASDate[i])
  PANAS[i].q = PANASDate[i]
  PANAS[i].sel = ""
  PANAS[i].a = "几乎没有"
  PANAS[i].b = "比较少"
  PANAS[i].c = "中等"
  PANAS[i].d = "较多"
  PANAS[i].e = "非常多"
  PANAS[i].ret_a = "1"
  PANAS[i].ret_b = "2"
  PANAS[i].ret_c = "3"
  PANAS[i].ret_d = "4"
  PANAS[i].ret_e = "5"
}
var retnumber = new Array()
retnumber["正向情绪"] = [1,3,5,9,10,12,14,16,17,19]
retnumber["负向情绪"] = [2,4,6,7,8,11,13,15,18,20]
for(var i in retnumber){
  var retindex = retnumber[i]
  
  for(var x in retindex)
  {
    var indexnumber = Number(retindex[x])
    PANAS[indexnumber].type = i
  }
}



class PANASModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      PANAS:[],
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var PANASrandom = new Array();
    var runtimePANAS = PANAS.concat()
    while(runtimePANAS.length>0)
    {
      var p = parseInt(Math.random()*runtimePANAS.length)
      if(undefined!=runtimePANAS[p])
      {PANASrandom.push(runtimePANAS[p]);}
      runtimePANAS.splice(p,1)
    }
    //console.log(PANASrandom)
    var checked = new Array();
    for(i=0;i<PANASrandom.length;i++)
    {
      //checked[0]=undefined
checked[i]=""
      PANASrandom[i].index=i
      PANASrandom[i].key=i
      PANASrandom[i].sel=""
    }
    //console.log(PANASrandom)
    this.setState ({
      checked:checked,
      PANAS:PANASrandom,
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
    for(i=0;i<this.state.PANAS.length;i++)
    {
      if(undefined != this.state.PANAS[i] && this.state.checked[i]==="")
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
      
    title: RouteConfig["PANASModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.PANAS[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<PANAS.length;i++)
      {
        //console.log(PANAS[i].sel)
      }
    }

  }
  result()
  {
    if(false==this.check())
    {
      return
    }
    var testPANAS = this.state.PANAS
    var ret = new Array();
    ret["正向情绪"]=ret["负向情绪"]=0

    var total = 0
    var bigtotal = 0 
    //console.log(testPANAS)
    for(i=0;i<testPANAS.length;i++)
    {
      var _p = testPANAS[i].sel;
      var _t = testPANAS[i].type
      
      if(''!=_p)
      {
        //console.log(testPANAS[i].sel, testPANAS[i].type)
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
    extrainfo.push( "正向情绪维度:" +Math.floor(ret["正向情绪"]) )
    extrainfo.push( "负向情绪维度:" +Math.floor(ret["负向情绪"]) )
    //console.log(ret,total)
    var detailinfo = new Array
    detailinfo.push("正向情绪维度数值越大，情绪越积极\n")
    detailinfo.push("负向情绪维度数值越大，情绪越消极\n")
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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['PANASlocation'], "霍兰德职业性格测试结果",this)}}                
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
              title={RouteConfig["PANASModule"].titlename}
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
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='PANASlocation'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["PANASModule"].titlename}</Text>
      <FlatList

            data={this.state.PANAS}
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

module.exports=PANASModule;  