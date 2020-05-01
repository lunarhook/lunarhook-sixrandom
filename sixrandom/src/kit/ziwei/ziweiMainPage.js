

import React, {Component} from 'react';
import {StyleSheet,View, Text,Dimensions,TouchableOpacity,FlatList,ScrollView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import Storage from 'react-native-storage';

import { captureRef } from "react-native-view-shot";
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import StorageModule from '../../config/StorageModule'
import ScreenConfig from '../../config/ScreenConfig';
import {StyleConfig,FontStyleConfig} from '../../config/StyleConfig';
import WechatShare from '../../config/WechatShare'
import ziweiModule from './ziweiModule'
import RouteConfig from '../../config/RouteConfig';
const {width, height} = Dimensions.get('window');  

var jump = false
let curyear = 0
let ziweiMainPagethis
class ziweiMainPage extends React.Component {
  constructor(props) {

  super(props);

		this.state = {
      sanchuanarray:"",
      Gstr:"",
    };
    ziweiMainPagethis = this
    };

  componentDidMount() {
    
		this.timer = setTimeout(
			() => {
        this.refreshlist()
        
			},
			200
    );
     
  }

  componentWillUnmount() {
		// 如果存在this.timer，则使用clearTimeout清空。
		// 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
		this.timer && clearInterval(this.timer);
	}

  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    //headerRight:(<Button title="返回" />),
    return{
      
    title: RouteConfig["ziweiMainPage"].name,
    }
    
  };

 
  

  refreshlist()
  {
      const { navigate } = this.props.navigation;
      
      var parameter = this.props.navigation.state.params

      console.log("refreshlist",parameter)
      if(undefined!=parameter)
      {
        var info = null;
        
        var ret;
        var args = {};
            var match = null;
            var search = decodeURIComponent(parameter.substring(1));
            var reg = /(?:([^&]+)=([^&]+))/g;
            while((match = reg.exec(search))!==null){
                args[match[1]] = match[2];
            }
        info = args
        //var Gstr = SixCourseModule.qiKe(info.SixCourseDate);
        //this.build(Gstr);
        var Gstr = this.calc_qimen(info.Date)
        console.log(Gstr)
        this.build(Gstr)
        this.setState({  
                Date:info.qimenDate,
                tip:info.tip,
                Gstr:Gstr
              }); 
      }
      else
      {
        StorageModule.load({
            key:"lastqimen",
        }).then(ret => {
              var Gstr = this.calc_qimen(ret.Date)
              this.setState({  
                Date:ret.qimenDateDate,
                tip:ret.tip,
                Gstr:Gstr
               }); 
            }).catch(err => {
            if(false==jump)
            {
               this.begin('qimenNewPage')
               jump = true
            }
        })
      }
    }

  replaceAt(str,index, character) 
  {
    console.log("replaceAt",str,index,character)
    if (undefined==str) str=""
      return str.substr(0, index) + character + str.substr(index+character.length);
  };
     
  
  
  
  build(Gstr)
  {
     var sanchuanarray = new Array();
     
     for(var i=0;i<5;i++)
     { 
        for (var n=0;n<5;n++)
        {
          sanchuanarray[i*5+n] = Gstr.ot[i*5+n]
        }
     }
     console.log(sanchuanarray)
     this.setState({sanchuanarray:sanchuanarray})
  }

  keyExtractor=(item, index) => index.toString()



  renderItem(item) {
    return (
  
        <Text>{item.item}</Text>
  
    );
  }

  renderGridItem(dataItem){
    console.log(dataItem)
    let content = (
      <View style={styles.container}>
            <View style={styles.grid}>
            <Text style={[fontSize=11]}>{dataItem.line1}{dataItem.kong}</Text>
            <Text style={[fontSize=11]}>{dataItem.line2}</Text>
            <Text style={[fontSize=11]}>{dataItem.line3}</Text>
            
            </View>
            <View style={styles.gridfix}>
            <Text style={styles.gridfix}>{dataItem.tian}</Text>
            <Text style={styles.gridfix}>{dataItem.di}</Text>
            <Text style={styles.gridfix}>{dataItem.shen}</Text>
            </View>
            </View>
    )
    return content;
  }
  
  render(){
      const { navigate } = this.props.navigation;
      
      
      
      
        return(
        <View style={styles.container} >
          <ScrollView ref="location" style={{backgroundColor:'#ffffff'}}>
          <View style={styles.container} >
          <WingBlank size="lg">
          <WhiteSpace size="xl" />
          <FlatList  
              data={this.state.Gstr.outx}
              extraData={this.state}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              />

          <Grid
          data={this.state.sanchuanarray}
          columnNum={5}
          hasLine={true}
          renderItem={dataItem => this.renderGridItem(dataItem)}
          //isCarousel
          //onClick={()}
        />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
            {
             (WechatShare.shareimg(this.state.shareimg))
            }
            
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
        </WingBlank>
        </View>
              </ScrollView>  
              
              {WechatShare.shareRetBar(WechatShare,this,"奇门详情")}
                          </View>
                         
    )
    }
   

   
  };


    




var styles = StyleSheet.create ({
  container: {
    flex:1,
    backgroundColor:'#ffffff'
  },
  gridfix:
  {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems:'flex-end',
    textAlignVertical:"bottom",
  },

 rowhigth:{
    lineHeight:25,
  },
  grid:{
    flex: 1,
    fontSize:FontStyleConfig.getFontApplySize()+12,
    height:100,
    justifyContent: 'flex-start',
    alignItems:'flex-start',
    textAlignVertical:"top",
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
    flex:1,
    justifyContent:'center', 
    flexWrap:'wrap',
    alignItems:'stretch',
    flexDirection: 'row',
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

  flatText: {
    justifyContent: 'space-around', //虽然样式中设置了 justifyContent: 'center'，但无效  
    flexDirection: 'row',
    alignItems:'stretch',
    marginLeft: 5, 
    marginRight: 5, 
  },
  flatTextfone:{
    justifyContent: 'space-around', //虽然样式中设置了 justifyContent: 'center'，但无效  
    flexDirection: 'row',
    alignItems:'stretch',
    //paddingLeft:5
  },
});
module.exports=ziweiMainPage;  