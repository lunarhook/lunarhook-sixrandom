

import React, {Component} from 'react';
import {StyleSheet,View, Text,ScrollView,Dimensions,RefreshControl,FlatList,Platform} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import Storage from 'react-native-storage';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Button,Icon } from 'react-native-elements'
import ScreenConfig from '../../config/ScreenConfig';
import RouteConfig from '../../config/RouteConfig';
import {StyleConfig,FontStyleConfig} from '../../config/StyleConfig'

const {width, height} = Dimensions.get('window');  

let mainpage_controllor;


class ThreechangesPage extends React.Component {
  constructor(props) {

  super(props);
      this.state = {

      };

    };
  
  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    
    return{
      
      title: '乾坤三式',//RouteConfig["DvinationPage"].name
    }
  };
  renderItem(item) {
    return (
      <View style={styles.lists}>
        <Text style={styles.rowhigth}>{item.item}</Text>
      </View>
    );
  }
  renderItemTimeLucky(item) {
    return (
      <View style={styles.columelist}>
        <Text >{item.item}</Text>
      </View>
    );
  }
 
  
keyExtractor = (item,index) => index.toString()
  
  render(){
    var info= new Array()
    info.push("太乙神数")
    info.push("太乙：又称太乙神数，简称太乙，为三式之首，乃统十二运卦象之术，是我国古代推演国家重大政治事件、天灾人祸、气数命运以及历史发展变化规律的数术学。")
    info.push("太乙重九星又称天象学。")
    info.push("")
    info.push("奇门遁甲")
    info.push("奇门：全称“奇门遁甲”，简称“奇门”或“遁甲”。它是利用时空因素，依靠选择时间和方向等来判断吉凶的数术。奇门是“奇”与“门”的合称。奇：天上日、月、星为三奇（乙、丙、丁）门：八卦分为八遁门（开、休、生、伤、杜、景、死、惊八门），故名曰“奇门”。“遁”者隐也；六甲隐于六戊之下，即：甲子戊、甲戌己、甲申庚、甲午辛、甲辰壬、甲寅癸。")
    info.push("奇门重八卦为天干学，广泛运用于军事、地理等诸多领域。")
    info.push("")
    info.push("六壬")
    info.push("六壬：河图中五行以水、火、木、金、土为序，天一生水，故水为五行之首，“壬”阳水也；六十花甲有六壬（壬子、壬戌、壬申、壬午、壬辰、壬寅）；六壬为地支学，壬寄宫于亥，而亥属乾卦，八卦以乾为天为首，故以此得名“六壬”。")
    info.push("“六壬”是易学领域最高层次的人事预测学，历来被奉为皇家绝学，其以精深严密系统准确客观的人事预测最为精妙。")
    const { navigate } = this.props.navigation;
      
        return(
    <View style={styles.container}>
      <ScrollView>

        <FlatList  
              data={info}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              />

      </ScrollView>
      <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight() , backgroundColor: '#ffffff',}}>  
        <TabNavigator.Item
              title={RouteConfig["taiyiNewPage"].name} 
              renderIcon={() => RouteConfig["taiyiNewPage"].icon}
              //renderSelectedIcon={() => IconConfig.IconDvinationSel}
              onPress={() => navigate(RouteConfig["taiyiNewPage"].route) }  
              titleStyle={StyleConfig.menufont}>   
          </TabNavigator.Item>  
          <TabNavigator.Item 
                        title={RouteConfig["qimenNewPage"].name} 
                        renderIcon={() => RouteConfig["qimenNewPage"].icon}
                        //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                        onPress={() => navigate(RouteConfig["qimenNewPage"].route) }  
                        titleStyle={StyleConfig.menufont}>    
          </TabNavigator.Item>
          <TabNavigator.Item 
                        title={RouteConfig["SixCourseNewPage"].name} 
                        renderIcon={() => RouteConfig["SixCourseNewPage"].icon}
                        //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                        onPress={() => navigate(RouteConfig["SixCourseNewPage"].route) }  
                        titleStyle={StyleConfig.menufont}>    
          </TabNavigator.Item>    
      </TabNavigator >
      
    </View>  
    )
  }

};
var styles = StyleSheet.create ({
  container: {
    backgroundColor: 'white',
    flex:1,
  },
  calendar: {
    flex:1,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'white',
    height:2000,
  },

  rowhigth:{
    lineHeight:25,
  },  
  columehigth:{
    //marginLeft:12,
    //marginTop:15 ,
    //textAlign:'left',
    //alignItems:'stretch',
    //justifyContent: 'space-between',
    width:20,
  },
  columelist:{
    //paddingLeft:12,
    //paddingRight:12,
    //marginLeft:0,
    justifyContent: 'space-between', //虽然样式中设置了 justifyContent: 'center'，但无效 
    flexWrap:'wrap',
    alignItems: 'flex-start',
  },
  list:{
    height:30,
    paddingLeft:15,
    paddingRight:15,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    flexWrap:'wrap',
    alignItems: 'flex-start',
  },
  lists:{
    paddingLeft:15,
    paddingRight:15,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    flexWrap:'wrap',
    alignItems: 'flex-start',
  },
  button:{
    height: 50,
    backgroundColor:'transparent',
   justifyContent:'center',
   borderRadius: 4,
  },
  dateContainer: {
    justifyContent:'space-between',
    flexDirection: 'row',
  },
});
module.exports=ThreechangesPage;  