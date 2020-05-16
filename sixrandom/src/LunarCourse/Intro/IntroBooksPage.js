
import React, {Component} from 'react';
import {StyleSheet,View, Text,ScrollView,TouchableOpacity,RefreshControl,FlatList,Dimensions} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { Grid ,Accordion,WhiteSpace} from '@ant-design/react-native';
import RouteConfig from '../../config/RouteConfig'
import ScreenConfig from '../../config/ScreenConfig';
import {StyleConfig,FontStyleConfig} from '../../config/StyleConfig';

var IntroThree = new Array()
IntroThree[0] = new Array()
IntroThree[0].push("")
IntroThree[0].push("无邪书院是什么？\n\n\t答：名称取决于孔子对诗经的评价：思无邪，语出《论语·为政第二》\n\t子曰：“《诗》三百，一言以蔽之，曰‘思无邪’\n\t孔子说：“《诗经》中三百多首诗，用一句话来概括，就是思想纯正。\n\t因此我们使用它来做思想功能的名字，也作为乾坤爻教学模块的基础")
IntroThree[0].push("书院有什么？\n\n\t答：书院包括一些教学用的必备书籍和训练模块，入选的教学用书主要以语录体为主，训练提问和回答的基本技巧\n\t")
IntroThree[0].push("都有什么书，为什么选这些书？\n\n\t答：书籍包括国学经典，工具类的小学，蒙学共计六本，三字经，百家姓，千字文，说文，尔雅，声律启蒙，因为这些都是文字学的基础，先秦期间只有文，而后开始有文字，对文和字开始有不同的注释和使用方法，这些是书院进一步用书的基础，下面还有三玄，四书，五经，医术一部，法家两部，策论四部，兵家一部")
IntroThree[0].push("为什么其他的医术，策论没有入选\n\n\t答：我们收录的的原则就是书的内容主要是细想为主，而非运用，主要考察思考辩论能力\n\t")
IntroThree[0].push("兵家，法家就入选这么几部，有区别么？\n\n\t答：首先需要了解入选理由是思想，此外兵家，法家都只有元亨利贞中的利字符合，因此只入选以思想辩论为核心的书\n\t")
IntroThree[0].push("佛家，道家，还有如同《增广贤文》《琼林幼学》为何不入选\n\n\t答：道家有三部，都融入策论部，存在调整可能，佛家并非以思维为主干核心，因此只有部分内容分散在一些成语及公案故事中。《增广贤文》带有一定的逻辑性，我们会进一步考察。《琼林幼学》的内容在三玄，四书，五经中抽挑出来，如果有针对幼儿启蒙的课程，我们会再考虑\n\t")
IntroThree[0].push("为什么入选药学，而且只引入《黄帝内经》\n\n\t答：《黄帝内经》虽然是医药学经典，但是它更多的是阐述思想，其次像《本草纲目》《论伤寒》并未入选，因为作为专业医术需要学习很多基础，此外对思想思考上帮助很少\n\t")
class IntroAncientPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        date:"",
      };
    };
  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;

    return{
      
      title: RouteConfig["IntroBooksPage"].titlename,
    }
  };

  //keyExtractor = (item,index) => item.id

  
  render(){
      const { navigate } = this.props.navigation;
      
      return(
          <View style={StyleConfig.container}>
          

          <FlatList 
            useFlatList={true}
            //1数据的获取和渲染
            data={IntroThree[0]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(data) => (<View><Text style={{fontSize:FontStyleConfig.getFontApplySize()+15,paddingLeft:15,paddingRight:15}}>{data.item}</Text><WhiteSpace size="xl" /></View>)}
            ></FlatList >

        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />

        <Text></Text>


          <TabNavigator tabBarStyle={{height:ScreenConfig.getTabBarHeight(), backgroundColor: '#ffffff',}}>
          <TabNavigator.Item
                        title={RouteConfig["IntroAncientPage"].name} 
                        renderIcon={() => RouteConfig["IntroAncientPage"].icon}
                        //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                        onPress={() => {navigate(RouteConfig["LunarCoursePage"].route),navigate(RouteConfig["IntroAncientPage"].route) }}  
                        titleStyle={StyleConfig.menufont}>  
            </TabNavigator.Item>  
            <TabNavigator.Item
                        title={RouteConfig["IntroThreePage"].name} 
                        renderIcon={() => RouteConfig["IntroThreePage"].icon}
                        //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                        onPress={() => {navigate(RouteConfig["LunarCoursePage"].route),navigate(RouteConfig["IntroThreePage"].route) }}  
                        titleStyle={StyleConfig.menufont}>  
            </TabNavigator.Item>  
            <TabNavigator.Item
                        title={RouteConfig["LunarCourseAnswerPage"].name} 
                        renderIcon={() => RouteConfig["LunarCourseAnswerPage"].icon}
                        //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                        onPress={() => {navigate(RouteConfig["LunarCoursePage"].route),navigate(RouteConfig["LunarCourseAnswerPage"].route) }}  
                        titleStyle={StyleConfig.menufont}>  
            </TabNavigator.Item>  
          </TabNavigator >
              </View>  
              )
    }
  };
module.exports=IntroAncientPage;  