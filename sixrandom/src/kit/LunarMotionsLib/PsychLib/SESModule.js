
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import ScreenConfig from '../../../config/ScreenConfig';
import StyleConfig from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
var SES=Array();
SES[1]={
  "key":"1",
  "q":"我认为自己是个有价值的人，至少与别人不相上下",
  "sel": "",
  "a" : "非常同意",
  "b": "同意",
  "c" : "不同意",
  "d": "非常不同意",
  "ret_a" : "4",
  "ret_b" : "3",
  "ret_c" : "2",
  "ret_d" : "1",
}
SES[2]={
  "key":"2",
  "q":"我觉得我有许多优点",
  "sel": "",
  "a" : "非常同意",
  "b": "同意",
  "c" : "不同意",
  "d": "非常不同意",
  "ret_a" : "4",
  "ret_b" : "3",
  "ret_c" : "2",
  "ret_d" : "1",
}
SES[3]={
  "key":"3",
  "q":"总的来说，我倾向于认为自己是一个失败者",
  "sel": "",
  "a" : "非常同意",
  "b": "同意",
  "c" : "不同意",
  "d": "非常不同意",
  "ret_a" : "1",
  "ret_b" : "2",
  "ret_c" : "3",
  "ret_d" : "4",
}
SES[4]={
  "key":"4",
  "q":"我做事可以做得和大多数人一样好",
  "sel": "",
  "a" : "非常同意",
  "b": "同意",
  "c" : "不同意",
  "d": "非常不同意",
  "ret_a" : "4",
  "ret_b" : "3",
  "ret_c" : "2",
  "ret_d" : "1",
}
SES[5]={
  "key":"5",
  "q":"我觉得自己没有什么值得自豪的地方",
  "sel": "",
  "a" : "非常同意",
  "b": "同意",
  "c" : "不同意",
  "d": "非常不同意",
  "ret_a" : "1",
  "ret_b" : "2",
  "ret_c" : "3",
  "ret_d" : "4",
}
SES[6]={
  "key":"6",
  "q":"我对自己持有一种肯定的态度",
  "sel": "",
  "a" : "非常同意",
  "b": "同意",
  "c" : "不同意",
  "d": "非常不同意",
  "ret_a" : "4",
  "ret_b" : "3",
  "ret_c" : "2",
  "ret_d" : "1",
}
SES[7]={
  "key":"7",
  "q":"整体而言，我对自己觉得很满意",
  "sel": "",
  "a" : "非常同意",
  "b": "同意",
  "c" : "不同意",
  "d": "非常不同意",
  "ret_a" : "4",
  "ret_b" : "3",
  "ret_c" : "2",
  "ret_d" : "1",
}
SES[8]={
  "key":"8",
  "q":"我要是能更看得起自己就好了",
  "sel": "",
  "a" : "非常同意",
  "b": "同意",
  "c" : "不同意",
  "d": "非常不同意",
  "ret_a" : "1",
  "ret_b" : "2",
  "ret_c" : "3",
  "ret_d" : "4",
}
SES[9]={
  "key":"9",
  "q":"有时我的确感到自己很没用",
  "sel": "",
  "a" : "非常同意",
  "b": "同意",
  "c" : "不同意",
  "d": "非常不同意",
  "ret_a" : "1",
  "ret_b" : "2",
  "ret_c" : "3",
  "ret_d" : "4",
}
SES[10]={
  "key":"10",
  "q":"有时我觉得自己一无十处",
  "sel": "",
  "a" : "非常同意",
  "b": "同意",
  "c" : "不同意",
  "d": "非常不同意",
  "ret_a" : "1",
  "ret_b" : "2",
  "ret_c" : "3",
  "ret_d" : "4",
}





class SESModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      SES:[],
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var SESrandom = new Array();
    var runtimeSES = SES.concat()
    while(runtimeSES.length>0)
    {
      var p = parseInt(Math.random()*runtimeSES.length)
      if(undefined!=runtimeSES[p])
      {SESrandom.push(runtimeSES[p]);}
      runtimeSES.splice(p,1)
    }
    //console.log(SESrandom)
    var checked = new Array();
    for(i=0;i<SESrandom.length;i++)
    {
      checked[0]=undefined
checked[i]=""
      SESrandom[i].index=i
      SESrandom[i].key=i
      SESrandom[i].sel=""
    }
    //console.log(SESrandom)
    this.setState ({
      checked:checked,
      SES:SESrandom,
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
    for(i=0;i<SES.length;i++)
    {
      if(undefined != SES[i] && this.state.checked[i]==="")
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
      
    title: RouteConfig["SESModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.SES[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<SES.length;i++)
      {
        //console.log(SES[i].sel)
      }
    }

  }

  result()
  {
    if(false==this.check())
    {
      return
    }
    var testSES = this.state.SES

    var total = 0
    //console.log(testSES)
    for(i=0;i<testSES.length;i++)
    {
      var _p = testSES[i].sel;
      
      if(''!=_p)
      {
        //console.log(testSES[i].sel, testSES[i].type)
        total = total + Number(_p); 
      }
      
    }
    
    //console.log(ret,total)
    var extrainfo = new Array
    extrainfo.push("自尊量表(self-esteem scale，SES)由Rosenberg于1965年编制，最初用以评定青少年关于自我价值和自我接纳的总体感受，目前是我国心理学界使用最多的自尊测量工具。\n")
    extrainfo.push("量表分四级评分，“非常同意”计4分，“同意”计3分，“不同意”计2分，“非常不同意”计1分，1、2、4、6、7正向记分，3、5、8、9、10反向记分，总分范围是10-40分，分值越高，自尊程度越高。\n")
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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['SESlocation'], "罗森伯格的自尊量表（SES）",this)}}                
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
              title={ RouteConfig["SESModule"].titlename}
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
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='SESlocation'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{ RouteConfig["SESModule"].titlename}</Text>
      <FlatList

            data={this.state.SES}
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

module.exports=SESModule;  