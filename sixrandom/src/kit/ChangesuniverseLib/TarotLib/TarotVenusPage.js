

import React, {Component} from 'react';
import {StyleSheet,View,TouchableHighlight,ImageBackground, Text,ScrollView,FlatList} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { StackNavigator } from 'react-navigation';
import { ListItem ,Card,Icon} from 'react-native-elements';
import { Button} from 'react-native-elements';
import { captureRef } from "react-native-view-shot";
import RouteConfig from '../../../config/RouteConfig'
import ScreenConfig from '../../../config/ScreenConfig';
import {StyleConfig,FontStyleConfig} from '../../../config/StyleConfig';
import TarotModule from './TarotModule'
import WechatShare from '../../../config/WechatShare'

let TarotVenusPagethis = ""
class TarotVenusPage extends React.Component {
  constructor(props) {
    super(props);
    var ret = new Array()
    var card = require('../../../../img/venus.png');
    ret[0]=ret[1]=ret[2]=ret[3]=ret[4]=ret[5]=ret[6]=ret[7]={name:"未知",align:"正位",img:card};
    this.state = {
      ret:ret,
      pick : 0
    }
    TarotVenusPagethis = this;
  }

  UNSAFE_componentWillMount() {
    this.init();
  }
  init()
  {
    var ret = new Array()
    var card = require('../../../../img/venus.png');
    ret[0]=ret[1]=ret[2]=ret[3]=ret[4]=ret[5]=ret[6]=ret[7]={name:"未知",align:"正位",img:card};
    
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
      
    title: RouteConfig["TarotVenusPage"].name,
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
    var ret = TarotModule.Venus();
    this.props.navigation.setParams({ TarotState: 'on' })
    var tip = new Array()
    tip[0] = { name: "过去", align: "" };
    tip[1] = { name: "现在", align: "" };
    tip[2] = { name: "将来", align: "" };
    this.setState({ret:ret,tip:tip,pick:1})
  }
  keyExtractor = (item,index) => index.toString()

  renderItem(item) {
    var it = item.item
    var tran = [{scale:1}]
    var postion = ""
    if (undefined == TarotVenusPagethis.state.pick  || 1 == TarotVenusPagethis.state.pick ) {
      postion = item.item.align
    }
    if(item.item.align=="逆位")
    {
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
        <Text></Text>
        </View>
    );
  }
  renderItemtip(item) {
    var it = item.item
    if("未知"!=it.name)
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

    return(  
        
      <View style={styles.list}>
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
      </View>
    )
    
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
                                  onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['location'], "塔罗牌爱情维纳斯",this)}}
                                   
                                  titleStyle={StyleConfig.menufont}>  
                              </TabNavigator.Item>  
                              </TabNavigator>  
        )
    }
  }

  render()
  {
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
     
      <ScrollView ref="location">
      <ImageBackground source={require('../../../../img/tarotbg.jpg')} style={{width: '100%',backgroundColor: "transparent",resizeMode:"repeat"}}>
      
      <View style={styles.container} >
      
      <Text></Text>
            <FlatList  
              data={this.state.ret}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              numColumns ={4}
              columnWrapperStyle={{justifyContent: 'space-around',alignItems:'stretch'}}

              />
              <FlatList
              data={this.state.ret}
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
  subtitleView:{
    flexDirection:'row',
    paddingLeft:10,
    //paddingTop:5
  },
  Tarotcard:{
    width: 70, 
    height: 125,
    opacity:30,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
    alignItems: 'center',
  },
  indexcard:
  {
    //color:'snow',
    lineHeight:30,
    textAlign:'center', 
    fontSize:FontStyleConfig.getFontApplySize()+12,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
    alignItems: 'center',
    fontWeight: 'bold', 
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
module.exports=TarotVenusPage;  