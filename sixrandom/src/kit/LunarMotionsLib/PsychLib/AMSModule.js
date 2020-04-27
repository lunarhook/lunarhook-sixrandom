
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import ScreenConfig from '../../../config/ScreenConfig';
import StyleConfig from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
var AMSDate=Array()
AMSDate[1]="我喜欢在我没有把握解决的问题上坚持不懈地努力。"
AMSDate[2]="我喜欢新奇的、有困难的任务，甚至不惜冒风险。"
AMSDate[3]="给我的任务即使有充裕的时间，我也喜欢立即开始工作。"
AMSDate[4]="面临我没有把握克服的难题时，我会非常兴奋、快乐。"
AMSDate[5]="我会被那些能了解自己有多大才智的工作所吸引。"
AMSDate[6]="我会被有困难的任务所吸引。"
AMSDate[7]="面对能测量我能力的机会，我感到一种鞭策和挑战。"
AMSDate[8]="我在完成有困难的任务时，感到快乐。"
AMSDate[9]="对于困难的活动，即使没有什么意义，我也很容易卷进去。"
AMSDate[10]="能够测量我能力的机会，对我是有吸引力的。"
AMSDate[11]="我希望把有困难的工作分配给我。"
AMSDate[12]="我喜欢尽了最大努力才能完成的工作。"
AMSDate[13]="如果有些事不能立刻理解，我会很快对它产生兴趣。"
AMSDate[14]="对于那些我不能确定是否能成功的工作，我会被吸引。"
AMSDate[15]="对我来说，重要的是有困难的事情，即使无人知道也无关紧要。"
AMSDate[16]="我讨厌在完全不能确定会不会失败的情境中工作。"
AMSDate[17]="在结果不明的情况下，我担心失败。"
AMSDate[18]="在完成我认为是困难的任务时，我担心失败，即使别人不知道也一样。"
AMSDate[19]="一想到要去做那些新奇的、有困难的工作，我就感到不安。"
AMSDate[20]="我不喜欢那种测量我能力的场面。"
AMSDate[21]="我对那些没有把握胜任的工作感到忧虑。"
AMSDate[22]="我不喜欢做我不知道能否完成的事，即使别人不知道也一样。"
AMSDate[23]="在那些测量我能力的情境中，我感到不安。"
AMSDate[24]="当接到需要有特定的机会才能解决的问题时，我会害怕失败。"
AMSDate[25]="那些看起来相当困难的事，我做的时候很担心。"
AMSDate[26]="我不喜欢在不熟悉的环境中工作，即使无人知道也一样。"
AMSDate[27]="如果有困难的工作要做，我希望不要分配给我。"
AMSDate[28]="我不喜欢做那些要发挥我能力的工作。"
AMSDate[29]="我不喜欢做那些我不知道能否胜任的事。"
AMSDate[30]="当我碰到我不能立即弄懂的问题时，我会焦虑不安。"
var AMS=Array();
for(i=1;i<31;i++)
{
  AMS[i] = {}
}
/*
AMS[1]={
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
AMS[2]={
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
AMS[3]={
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
AMS[4]={
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
AMS[5]={
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
AMS[6]={
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
AMS[7]={
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
AMS[8]={
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
AMS[9]={
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
AMS[10]={
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
*/

for(i=1;i<31;i++)
{
  AMS[i].q = AMSDate[i]
  AMS[i].key = i
  AMS[i].sel = ""
  AMS[i].a = "符合"
  AMS[i].b = "比较符合"
  AMS[i].c = "不太符合"
  AMS[i].d = "不符合"
  AMS[i].ret_a = 4
  AMS[i].ret_b = 3
  AMS[i].ret_c = 2
  AMS[i].ret_d = 1
  }

  var retnumber = new Array()
  retnumber["成功动机"] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  retnumber["害怕失败"] = [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
  for(var i in retnumber){
    var retindex = retnumber[i]
    
    for(var x in retindex)
    {
      var indexnumber = Number(retindex[x])
      AMS[indexnumber].type = i
    }
  }



class AMSModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      AMS:[],
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var AMSrandom = new Array();
    var runtimeAMS = AMS.concat()
    while(runtimeAMS.length>0)
    {
      var p = parseInt(Math.random()*runtimeAMS.length)
      if(undefined!=runtimeAMS[p])
      {AMSrandom.push(runtimeAMS[p]);}
      runtimeAMS.splice(p,1)
    }
    //console.log(AMSrandom)
    var checked = new Array();
    for(i=0;i<AMSrandom.length;i++)
    {
      checked[0]=undefined
checked[i]=""
      AMSrandom[i].index=i
      AMSrandom[i].key=i
      AMSrandom[i].sel=""
    }
    //console.log(AMSrandom)
    this.setState ({
      checked:checked,
      AMS:AMSrandom,
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
    for(i=0;i<AMS.length;i++)
    {
      if(undefined != AMS[i] &&  this.state.checked[i]==="")
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
      
    title: RouteConfig["AMSModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.AMS[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<AMS.length;i++)
      {
        //console.log(AMS[i].sel)
      }
    }

  }

  result()
  {
    if(false==this.check())
    {
      return
    }
    var testAMS = this.state.AMS
    var ret = new Array();

    ret["成功动机"]=ret["害怕失败"]=0

    var total = 0
    var bigtotal = 0 
    //console.log(testAMS)
    for(i=0;i<testAMS.length;i++)
    {
      var _p = testAMS[i].sel;
      var _t = testAMS[i].type
      
      if(''!=_p)
      {
        //console.log(testAMS[i].sel, testAMS[i].type)
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
 
    extrainfo.push("量表共30个项目，分两部分，每部分15个项目，分别测定趋向成功和避免失败的动机。\n")
    extrainfo.push("得分越高，成就动机越强。同时根据阿特金森的理论得到合成动机得分（Ma=Ms－Maf）。量表的分半信度为0.77(p<0.01)，效度为0.58(P<0.01)。\n")
    extrainfo.push("MS-MAF＞0时，成就动机强，分值越高，成就动机越高。 \n")
    extrainfo.push("MS-MAF=0时，成就动机中等，追求成功和害怕失败相当。 \n")
    extrainfo.push("成功动机分量:" + Math.floor(ret["成功动机"] ) ) 
    extrainfo.push("害怕失败分量:" + Math.floor(ret["害怕失败"]) ) 
    total = Math.floor(ret["成功动机"])-Math.floor(ret["害怕失败"])
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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['AMSlocation'], "罗森伯格的自尊量表（AMS）",this)}}                
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
              title={ RouteConfig["AMSModule"].titlename}
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
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='AMSlocation'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{ RouteConfig["AMSModule"].titlename}</Text>
      <FlatList

            data={this.state.AMS}
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

module.exports=AMSModule;  