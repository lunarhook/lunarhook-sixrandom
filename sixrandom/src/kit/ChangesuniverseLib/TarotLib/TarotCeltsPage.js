

import React, {Component} from 'react';
import {StyleSheet,View,TouchableHighlight,ImageBackground, Text,Image,ScrollView,FlatList} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { StackNavigator } from 'react-navigation';
import { ListItem ,Card,Icon} from 'react-native-elements';
import { Button} from 'react-native-elements';
import { captureRef } from "react-native-view-shot";
import RouteConfig from '../../../config/RouteConfig'
import ScreenConfig from '../../../config/ScreenConfig';
import StyleConfig from '../../../config/StyleConfig';
import TarotModule from './TarotModule'
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import WechatShare from '../../../config/WechatShare'

let TarotCeltsPage_controllor;

class TarotCeltsPage extends React.Component {
   constructor(props) {
    super(props);
		var ret = new Array()
    for(var i=0;i<30;i++)
    {
      ret[i] = {name:"",align:""};
    }
    var       card = require('../../../../img/celts.png');
    ret[2]=ret[7]=ret[10]=ret[11]=ret[12]=ret[13]=ret[14]=ret[17]=ret[22]=ret[27]={name:"未知",align:"正位",img:card};
    this.state = {
      ret:ret,
      pick : 0
    }
    TarotCeltsPage_controllor = this;
  }

  UNSAFE_componentWillMount() {
    this.init();
  }
  init()
  {
    var ret = new Array()
    for(var i=0;i<30;i++)
    {
      ret[i] = {name:"",align:""};
    }
    var       card = require('../../../../img/celts.png');
    ret[2]=ret[7]=ret[10]=ret[11]=ret[12]=ret[13]=ret[14]=ret[17]=ret[22]=ret[27]={name:"未知",align:"正位",img:card};
    
    this.setState({
      ret:ret,
      pick : 0
    })
  }

  clear()
  {
    this.init();
    this.props.navigation.setParams({ TarotState: 'off' })
  }

  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{   
    title: RouteConfig["TarotCeltsPage"].name,
    }
  };

  TarotButtonShow()
  {
    if(this.state.pick==0)
    {
      return(
        <View>
        <Button title="开牌" onPress={()=>this.result()}/>
        <Text style={styles.list}></Text>
        <Text style={styles.list}></Text>
        </View>
      )
    }
    else
    { 
      return(
      <View>
      
      </View>
      )
    }
  }

  result()
  {
    var ret = TarotModule.Celts();
    var Celts  = new Array();
    for(var i=0;i<30;i++)
    {
      Celts[i] = {name:"",align:""};
    }
    Celts[2]=ret[0]
    Celts[7]=ret[1]
    Celts[10]=ret[2]
    Celts[11]=ret[3]
    Celts[12]=ret[4]
    Celts[13]=ret[5]
    Celts[14]=ret[6]
    Celts[17]=ret[7]
    Celts[22]=ret[8]
    Celts[27]=ret[9]
    this.props.navigation.setParams({ TarotState: 'on' })
    this.setState({ret:Celts,pick:1})
  }
  keyExtractor = (item,index) => index.toString()

  renderItem(item) {
    var it = item.item
    var tran = [{scale:1}]
    var postion=""
    if (undefined == TarotCeltsPage_controllor.state.pick  || 1 == TarotCeltsPage_controllor.state.pick ) {
      postion = item.item.align
    }
    if (item.item.align == "逆位") {
      tran = [{scale:-1}]
    }

    return (
        <View >
         <ImageBackground
            style={styles.Tarotcard}
            source={it.img}
            imageStyle={{ borderRadius: 10 ,transform: tran}}
          >
            <Text></Text>
            <Text></Text>
            <Text></Text> 
            <Text></Text>

        
        </ImageBackground>
        <TouchableHighlight>
          <View style={styles.indexcard}>
        <Text >{it.name}</Text>
        <Text >{postion}</Text>
        </View>
        </TouchableHighlight>
        <Text></Text>
        </View>)
  }

  switchbar()
  {
    const { navigate } = this.props.navigation;


    if(this.state.pick==0)
    
    {
      return(
<TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight() , backgroundColor: '#ffffff',}}>
          <TabNavigator.Item
                                  title={RouteConfig["BeginImage"].name}
                                  renderIcon={() => RouteConfig["BeginImage"].icon}
                                  onPress={()=>this.result()}
                                  titleStyle={StyleConfig.menufont}>  
                              </TabNavigator.Item>  
                              </TabNavigator>  

      )
    }
    else if('on'==this.props.navigation.getParam( 'TarotState', 'off' ) && this.state.pick != 0)
    {
        return(
          <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight() , backgroundColor: '#ffffff',}}>
                    <TabNavigator.Item
                                  title={RouteConfig["RefreshImage"].name}
                                  renderIcon={() => RouteConfig["RefreshImage"].icon}
                                  onPress={()=> this.clear()} 
                                  titleStyle={StyleConfig.menufont}>  
                              </TabNavigator.Item>  
          <TabNavigator.Item
                                  title={RouteConfig["ScreenImage"].name}
                                  renderIcon={() => RouteConfig["ScreenImage"].icon}
                                  onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['location'], "塔罗牌凯尔特十字",this)}}
                                  titleStyle={StyleConfig.menufont}>  
                              </TabNavigator.Item>  
                              </TabNavigator>  
        )
    }
  }

  renderItemtip(item) {
    var it = item.item
    if("未知"!=it.name && ""!=it.name)
    {
      return (
        
        <View style={styles.list}>
          <WhiteSpace size="xl" />
          <Text >{it.name}:{it.key}</Text>
            <Text></Text>
            <Text >{it.name}{it.align}:{"正位"==it.align?it.position:it.negative}</Text>
        </View>
      );
    }
    
  }

  render()
  {
    const { navigate } = this.props.navigation;
    return (
    <View style={[styles.container,{height:ScreenConfig.__screenH()}]}>
      
      <ScrollView ref="location" >
      <ImageBackground source={require('../../../../img/tarotbg.jpg')} style={{width: '100%',backgroundColor: "transparent",resizeMode:"repeat"}}>
     
       <View style={styles.container} >
       <WhiteSpace size="xl" />
            <FlatList  
              data={this.state.ret}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              numColumns ={5}
              columnWrapperStyle={{justifyContent: 'space-around',alignItems:'stretch'}}

              />
                 <FlatList
              data={this.state.ret}
              extraData={this.state}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItemtip}
            />
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
            </ImageBackground>
            </ScrollView>
            
             {this.switchbar()}
                          
    </View>
					)
  }
}
var styles = StyleSheet.create ({
  container: {
    flex:1,
  },
  indexcard:
  {

    lineHeight:30,
    textAlign:'center', 
    fontSize:9,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
    alignItems: 'center',
    fontWeight: 'bold', 
  },
  Tarotcard:{
    width: 50, 
    height: 90,
    opacity:60,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
    alignItems: 'center',
  },
  subtitleView:{
    flexDirection:'row',
    paddingLeft:10,
    //paddingTop:5
  },
  ratingText:{
    paddingLeft:10,
    color:'blue'
  },


  list:{
    color: '#000000',
    marginLeft: 10,
    paddingLeft: 20,
    marginRight: 10,
    paddingRight: 20,
  },
});
module.exports=TarotCeltsPage;  