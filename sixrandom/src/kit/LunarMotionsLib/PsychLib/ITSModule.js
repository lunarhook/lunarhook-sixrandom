
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import ScreenConfig from '../../../config/ScreenConfig';
import StyleConfig from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
var ITSDate=Array()
ITSDate[1]="在我们的社会里虚伪的现象越来越多了。 "
ITSDate[2]="与陌生人打交道时，你最好小心，除非他们拿出可以证明其值得信任的依据。 "
ITSDate[3]="除非我们吸引更多的人进政界，这个国家的前途十分黯淡。 "
ITSDate[4]="阻止多数人触犯法律的是恐惧、社会廉耻或惩罚而不是良心。 "
ITSDate[5]="考试时老师不到监考可能会导致更多的人作弊。 "
ITSDate[6]="通常父母在遵守诺言方面是可以信赖的。"
ITSDate[7]="联合国永远也不会成为维持世界和平的有效力量。 "
ITSDate[8]="法院是我们都能受到公正对待的场所。 "
ITSDate[9]="如果得知公众听到和看到的新闻有多少已被扭曲，多数人会感到震惊的。 "
ITSDate[10]="不管人们怎样表白，最好还是认为多数人主要关心其自身幸福。 "
ITSDate[11]="尽管在报纸、收音机和电视中均可看到新闻，但我们很难得到关于公共事件的客观报道。 "
ITSDate[12]="未来似乎很有希望。 "
ITSDate[13]="如果真正了解到国际上正在发生的政治事件，那么公众有理由比现在更加担心。 "
ITSDate[14]="多数获选官员在竞选中的承诺是诚恳的。 "
ITSDate[15]="许多重大的全国性体育比赛均受到某种形式的操纵和利用。 "
ITSDate[16]="多数专家有关其知识局限性的表白是可信的。 "
ITSDate[17]="多数父母关于实施惩罚的威胁是可信的。 "
ITSDate[18]="多数人如果说出自己的打算就一定会去实现。 "
ITSDate[19]="在这个竞争的年代里，如果不保持警惕别人就可能占你的便宜。 "
ITSDate[20]="多数理想主义者是诚恳的并按照他们自己所宣扬的信条行事。 "
ITSDate[21]="多数推销人员在描述他们的产品时是诚实的。 "
ITSDate[22]="多数学生即使在有把握不会被发现时也不作弊 "
ITSDate[23]="多数维修人员即使认为你不懂其专业知识也不会多收费。 "
ITSDate[24]="对保险公司的控告有相当一部分是假的。 "
ITSDate[25]="多数人诚实地回答民意测验的问题。"
var ITS=Array();
for(i=1;i<26;i++)
{
  ITS[i] = {}
}

var invertdate = [1,2,3,4,5,7,9,10,11,13,15,19,24]

for(i=1;i<26;i++)
{
  ITS[i].q = ITSDate[i]
  ITS[i].key = i
  ITS[i].sel = ""
  ITS[i].a = "非常同意"
  ITS[i].b = "比较同意"
  ITS[i].c = "中立"
  ITS[i].d = "比较不同意"
  ITS[i].e = "非常不同意"
  ITS[i].ret_a = 1
  ITS[i].ret_b = 2
  ITS[i].ret_c = 3
  ITS[i].ret_d = 4
  ITS[i].ret_e = 5
  if(true==invertdate.includes(i))
  {
    ITS[i].ret_a = 5
    ITS[i].ret_b = 4
    ITS[i].ret_c = 3
    ITS[i].ret_d = 2
    ITS[i].ret_e = 1
  }
}
/*
var retnumber = new Array()
retnumber["亲密度"] = [1,11,21,31,41,51,61,71,81]
retnumber["情感表达"] = [2,12,22,32,42,52,62,72,82]
retnumber["矛盾性"] =[3,13,23,33,43,53,63,73,83]
retnumber["独立性"] =[4,14,24,34,44,54,64,74,84]
retnumber["成功性"] =[5,15,25,35,45,55,65,75,85]
retnumber["文化性"] =[6,16,26,36,46,56,66,76,86]
retnumber["娱乐性"] =[7,17,27,37,47,57,67,77,87]
retnumber["道德宗教观"] =[8,18,28,38,48,58,68,78,88]
retnumber["组织性"] =[9,19,29,39,49,59,69,79,89]
retnumber["控制性"] =[10,90,20,30,40,50,60,70,80]
for(var i in retnumber){
  var retindex = retnumber[i]
  
  for(var x in retindex)
  {
    var indexnumber = Number(retindex[x])
    ITS[indexnumber].type = i
  }
}
*/



class ITSModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      ITS:[],
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var ITSrandom = new Array();
    var runtimeITS = ITS.concat()
    while(runtimeITS.length>0)
    {
      var p = parseInt(Math.random()*runtimeITS.length)
      if(undefined!=runtimeITS[p])
      {ITSrandom.push(runtimeITS[p]);}
      runtimeITS.splice(p,1)
    }
    //console.log(ITSrandom)
    var checked = new Array();
    for(i=0;i<ITSrandom.length;i++)
    {
      checked[0]=undefined
checked[i]=""
      ITSrandom[i].index=i
      ITSrandom[i].key=i
      ITSrandom[i].sel=""
    }
    //console.log(ITSrandom)
    this.setState ({
      checked:checked,
      ITS:ITSrandom,
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
      closetest:false,
    })
    console.log("clear",ITSrandom)

  }
  check(){
    //if(__DEV__)
//    {return true}
    for(i=0;i<ITS.length;i++)
    {
      if(undefined != ITS[i] && this.state.checked[i]==="")
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
      
    title: RouteConfig["ITSModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.ITS[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<ITS.length;i++)
      {
        //console.log(ITS[i].sel)
      }
    }

  }

  result()
  {
    if(false==this.check())
    {
      return
    }
    var testITS = this.state.ITS
    /*
    var ret = new Array();

    ret["亲密度"]=ret["情感表达"]=ret["矛盾性"]=ret["独立性"]=ret["成功性"]=ret["文化性"]=ret["娱乐性"]=ret["道德宗教观"]=ret["组织性"]=ret["控制性"]=0
    */
    var total = 0
    var bigtotal = 0 
    //console.log(testITS)
    for(i=0;i<testITS.length;i++)
    {
      var _p = testITS[i].sel;
      var _t = testITS[i].type
      
      if(''!=_p)
      {
        //console.log(testITS[i].sel, testITS[i].type)
        total = total + Number(_p); 
        //ret[_t] =Number(ret[_t])+ Number(_p)
        if (Number(_p)>1)
        {
          bigtotal = bigtotal +1
        }
      }
      
    }
    var retpercent = ""
    //for(var n in ret)
    //{
    //  retpercent = retpercent + n + ":" +  ret[n] + " \n"
    //}
    var extrainfo = new Array
    extrainfo.push( "得分越高，人际信任度越高；得分越低，人际信任度越低。" ) 
    //console.log(ret,total)
    var detailinfo = new Array
    detailinfo.push("总分越高人际信任度越高\n ")
    detailinfo.push("量表总分从25分（信赖程度最低）至125分（信赖度最高），中间值为75分")

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
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['ITSlocation'],RouteConfig["ITSModule"].titlename,this)}}                
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
              title={RouteConfig["ITSModule"].titlename}
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
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='ITSlocation'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["ITSModule"].titlename}</Text>
      <FlatList

            data={this.state.ITS}
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

module.exports=ITSModule;  