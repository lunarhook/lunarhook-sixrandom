

import React, {Component} from 'react';
import {StyleSheet,View, Text,TextInput,FlatList,ScrollView,Image,Dimensions} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import Storage from 'react-native-storage';

import { ListItem ,Card,Button} from 'react-native-elements';
import { captureRef } from "react-native-view-shot";
import Icon from 'react-native-vector-icons/Ionicons';
import { InputItem,WhiteSpace, List ,Switch } from '@ant-design/react-native';

import ScreenConfig from '../../../config/ScreenConfig';
import StyleConfig from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
const {width, height} = Dimensions.get('window');  

var jump = false
let curyear = 0

var numlucky = new Array()
numlucky["13"]=numlucky["31"]="天医（元吉）++++"
numlucky["68"]=numlucky["86"]="天医（大吉）+++"
numlucky["49"]=numlucky["94"]="天医（吉）++"
numlucky["27"]=numlucky["72"]="天医（小吉）+"

numlucky["14"]=numlucky["41"]="生气（元吉）++++"
numlucky["67"]=numlucky["76"]="生气（大吉）+++"
numlucky["93"]=numlucky["39"]="生气（吉）++"
numlucky["82"]=numlucky["28"]="生气（小吉）+"

numlucky["19"]=numlucky["91"]="延年（大吉）++++"
numlucky["78"]=numlucky["87"]="延年（吉）+++"
numlucky["43"]=numlucky["34"]="延年（小吉）++"
numlucky["62"]=numlucky["26"]="延年（无悔）+"

numlucky["11"]=numlucky["22"]="伏位（大吉）++++"
numlucky["88"]=numlucky["99"]="伏位（吉）+++"
numlucky["77"]=numlucky["66"]="伏位（小吉）++"
numlucky["33"]=numlucky["44"]="伏位（无悔）+"

numlucky["12"]=numlucky["21"]="绝命（凶）++++"
numlucky["69"]=numlucky["96"]="绝命（凶）+++"
numlucky["84"]=numlucky["48"]="绝命（咎）++"
numlucky["37"]=numlucky["73"]="绝命（厉）+"

numlucky["17"]=numlucky["71"]="祸害（凶）++++"
numlucky["89"]=numlucky["98"]="祸害（咎）+++"
numlucky["64"]=numlucky["46"]="祸害（厉）++"
numlucky["23"]=numlucky["32"]="祸害（吝）+"

numlucky["18"]=numlucky["81"]="五鬼（凶）++++"
numlucky["79"]=numlucky["97"]="五鬼（咎）+++"
numlucky["36"]=numlucky["63"]="五鬼（咎）++"
numlucky["24"]=numlucky["42"]="五鬼（厉）+"

numlucky["16"]=numlucky["61"]="六煞（咎）++++"
numlucky["74"]=numlucky["47"]="六煞（厉）+++"
numlucky["38"]=numlucky["83"]="六煞（吝）++"
numlucky["92"]=numlucky["29"]="六煞（悔）+"

var luckyinfo = new Array()
luckyinfo["天医"]="天医吉代表钱财，婚姻，业绩"
luckyinfo["生气"]="生气吉代表贵人，亲朋，同事"
luckyinfo["延年"]="延年吉代表事业，专业，能力"
luckyinfo["伏位"]="伏位吉代表延续，积蓄，被动"
luckyinfo["绝命"]="绝命凶代表投资，开支，破财"
luckyinfo["祸害"]="祸害凶代表口舌，小人，伤灾"
luckyinfo["五鬼"]="五鬼凶代表变动，异地，血光"
luckyinfo["六煞"]="六煞凶代表桃花，忧郁，时尚"

var spnumlucky = new Array()
spnumlucky["19"]=spnumlucky["91"]="延年有碍，易女强人"
spnumlucky["43"]=spnumlucky["34"]="延年有碍，若女性格"

class NumberMainPage extends React.Component {
  constructor(props) {

  super(props);
		this.state = {
      switchstate:true,
      selectedValue: '男',
      number:"",
      info:"",
      extra:"",
      spextra:"",
    };
    };

  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
      
    title: '数字八星',
    }
  };

 clear(val)
 {
    this.props.navigation.setParams({ numberstat: 'off' })
    this.setState({number:"",info:"",extra:"",spextra:"",switchstate:"男"==val?true:false,selectedValue: val})
 }
  

  updatenumber(number)
  {
    console.log("number1",number)
    number=number.replace(/[^0-9]/g,"");

    var nums = new Array()
    nums = number.split("")
    var numbershort = new Array()
    numbershort=number.replace(/[0,5]/g,"");

    var any = new Array();
    var step = 0
    for (var key=0;key<nums.length;key++){    
      any[key]=""            
      if(nums[key]=="0" || nums[key]=="5" ){
        step++
        if(nums[key]==0)
        {
          any[key-step]=any[key-step]+"（减弱）"
        }
        else
        {
          any[key-step]=any[key-step]+"（增强）"
        }
      }
    }    

    for (var key=0;key<nums.length;key++){                
        if(nums[key]=="0" || nums[key]=="5" ){
            var index = nums.splice(key,1);
            key-=1;
        }
    }    
    var info = new Array()  
    var extra = new Array()
    var spextra = new Array()
    for (var key=1;key<nums.length;key++){                

          var index = nums[key-1] + nums[key]
          index = numlucky[index]
          var exp = index.substring(0,2)
          //console.log(exp)
          extra[exp]=luckyinfo[exp]
          info.push(index+(any[key-1]!=""?any[key-1]:""))
      }
      var extralist = new Array()
      for(variable  in extra){   //variable  为 index
        if(-1==extralist.indexOf(luckyinfo[variable]))
        {
          extralist.push(luckyinfo[variable])
        }
      }
      //增加男女阴阳判定
      if("女"==this.state.selectedValue)
      {
          if(-1!=numbershort.indexOf("19") || -1!=numbershort.indexOf("91"))
          {
            spextra.push(spnumlucky["19"]);
          } 
      }
      else if("男"==this.state.selectedValue)
      {
        if(-1!=numbershort.indexOf("43") || -1!=numbershort.indexOf("34"))
        {

          spextra.push(spnumlucky["34"]);
        } 
      }
     
      if(''==number || "请输入数字"==number)
      {
        number = "请输入数字"
      }
      console.log("number",number)
      this.setState({number:number,info:info,extra:extralist,spextra:spextra})
      this.props.navigation.setParams({ numberstat: 'on' })
      return number;
  }      

  keyExtractor = (item,index) => index.toString()

  renderItem(item) {
    return (

        <Text key={item.item} style={[{paddingLeft:60}]}>{item.item}</Text>

    );
  }
  switchbar()
  {
    if('on'==this.props.navigation.getParam( 'numberstat', 'off' ))
    {
        return(
          <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight() , backgroundColor: '#ffffff',}}>
          <TabNavigator.Item
                title={RouteConfig["RefreshImage"].name}
                renderIcon={() => RouteConfig["RefreshImage"].icon}
                onPress={()=>this.clear("男")}  
                titleStyle={StyleConfig.menufont}>  
            </TabNavigator.Item>  
          <TabNavigator.Item
                title={RouteConfig["ScreenImage"].name}
                renderIcon={() => RouteConfig["ScreenImage"].icon}
                onPress={()=>{this.setState({shareimg:true}),WechatShare.snapshot(this.refs['location'],"八星起运",this)} } 

                titleStyle={StyleConfig.menufont}>  
            </TabNavigator.Item>  
        </TabNavigator>  
        )
    }
  }
  render(){

      
      
      
        return(
        <View style={styles.container} >
          <ScrollView ref="location" style={{backgroundColor:'#ffffff'}}>
          <View style={styles.container} >
          <View> 
          <List style={styles.inputpicker}>
          <Text style={styles.textbutton}>请输入电话或者数字</Text>
          <WhiteSpace size="xl" />
          <List.Item
            extra={
              <Switch
                checked={this.state.switchstate}
                onChange={(value) =>this.clear(false==value?"女":"男")}
              />
            }
          >{this.state.selectedValue}
          </List.Item>
          
          <WhiteSpace size="xl" />
             <InputItem
            clear
            type="number"
            value={this.state.number}
            onChange={(value: any) => {
              this.setState({number:this.updatenumber(value)})
            }}
            extra="输入数字"
          >
          数字:
          </InputItem>
            </List>
            </View>
            <Text></Text>
            <FlatList  
              data={this.state.info}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              //numColumns ={8}
              //horizontal={true}
              //showsHorizontalScrollIndicator={false}
              />
              <Text></Text>
            <FlatList  
              data={this.state.extra}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              //numColumns ={8}
              //horizontal={true}
              //showsHorizontalScrollIndicator={false}
              />
                            <Text></Text>
                            <FlatList  
              data={this.state.spextra}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              //numColumns ={8}
              //horizontal={true}
              //showsHorizontalScrollIndicator={false}
              />
              <Text></Text>
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
          </ScrollView>
          {this.switchbar()}
                         
                          </View>
                         
    )
  }
  };


    




var styles = StyleSheet.create ({
  container: {
    flex:1,
    backgroundColor:'#ffffff'
  },
  inputname: {
    //justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    alignItems:'center',
    justifyContent: 'space-between', //虽然样式中设置了 justifyContent: 'center'，但无效  
    //justifyContent:'space-between',
    flexDirection: 'row',
    marginLeft: 30, 
    marginRight: 30, 
    marginTop: 30,
  },
  textbutton:{
    textAlign:'center', 
  },

 rowhigth:{
    lineHeight:25,
  },
  input:{
    width:300,
    height:35,
    borderWidth:1,
    borderColor: '#ccc',
    borderRadius: 0,
    alignItems:'center',
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
  },
  list:{
    height:30,
    marginLeft: 1,
    paddingLeft:1,
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    flexWrap:'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  textbutton:{
    textAlign:'center', 
    marginTop: 30,
  },
   button:{
    height: 50,
    backgroundColor:'transparent',
   justifyContent:'center',
   borderRadius: 4,
    },
  tabBarStyle:{
    flex: 1,
    height:40,
    flex:1
  },
  EightstyleSectionline: {
    justifyContent: 'space-around', //虽然样式中设置了 justifyContent: 'center'，但无效  
    flexDirection: 'row',
    marginLeft: 30, 
    marginRight: 30, 
    marginTop: 30,
  },
  EightstyleCoreline: {
    justifyContent: 'space-around', //虽然样式中设置了 justifyContent: 'center'，但无效  
    flexDirection: 'row',
    marginLeft: 30, 
    marginRight: 30, 
  },
  Eightstylebetweenline: {
    justifyContent:'center',
    flexDirection: 'column',
    //flexwrap:'nowrap',
    paddingLeft:15
  },
  flatText: {
    justifyContent: 'space-around', //虽然样式中设置了 justifyContent: 'center'，但无效  
    flexDirection: 'row',
    marginLeft: 30, 
    marginRight: 30, 
  },
  flatTextfone:{
    justifyContent: 'space-around', //虽然样式中设置了 justifyContent: 'center'，但无效  
    paddingLeft:15
  },
  buttonstyle:{
    justifyContent: 'space-between', //虽然样式中设置了 justifyContent: 'center'，但无效  
    alignItems:'baseline',
  },
  inputpicker: {

    marginLeft: 15, 
    marginRight: 15, 
    marginTop: 50,
  },
});
module.exports=NumberMainPage;  