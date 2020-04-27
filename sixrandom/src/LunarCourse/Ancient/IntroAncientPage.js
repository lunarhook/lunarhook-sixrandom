
import React, {Component} from 'react';
import {StyleSheet,View, Text,ScrollView,TouchableOpacity,RefreshControl,FlatList,Dimensions} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { Grid ,Accordion,WhiteSpace} from '@ant-design/react-native';
import RouteConfig from '../../config/RouteConfig'
import ScreenConfig from '../../config/ScreenConfig';
import StyleConfig from '../../config/StyleConfig';

var IntroThree = new Array()
IntroThree[0] = new Array()
IntroThree[0].push("")
IntroThree[0].push("《小学》导读：\n\t")
IntroThree[0].push("什么是《小学》？\n\n\t答：小学，又称中国传统语文学，包括分析字形的文字学，研究字音的音韵学，解释字义的训诂学，围绕阐释和解读先秦典籍来展开研究，因此又被称为经学的附庸。。\n\t")
IntroThree[0].push("《小学》在讲什么（一）？\n\n\t答：古代把研究文字训诂音韵方面的学问叫小学。每个文字具有三个部分：1.字形；2.字义；3.字音。在汉代，分别不很显著。宋末王应麟《玉海》已分成三种：体制.训诂.音韵。清代的《四库全书》，把小学书分为：训诂.字书.韵书三类。\n\t")
IntroThree[0].push("《小学》在讲什么（二）？\n\n\t答：读书必先识字，掌握字形、字音、字义，学会使用，西汉时称“文字学”为“小学”，唐宋以后又称“小学”为字学，“小学”之名即由此而得。\n\t")
IntroThree[0].push("为什么要学《小学》？\n\n\t答：掌握语言文字的技术，为学习说文解字打好基础，以及音韵学基础。\n\t现代社会，对语言文字使用过于简化和随意，在语言的沟通中往往夹带各种含义，部分语言的使用方式对人会有一些伤害或者歧视性的影响，掌握好语言文字的基础对后面的深度沟通，建立良好的社交关系有很大的帮助。\n\t后面我们还会在信息能量学种提出新的观点，正确的使用文字的音韵和表达出的思维对人的感受情绪都有影响\n\t")
IntroThree[0].push("什么是《说文》？\n\n\t答：《说文解字》，简称《说文》。作者为许慎。是中国第一部系统地分析汉字字形和考究字源的字书，也是世界上很早的字典之一。编著时首次对“六书”做出了具体的解释。\n\t")
IntroThree[0].push("什么是《尔雅》？\n\n\t答：《尔雅》成书于战国或两汉之间，上限不会早于战国，因为书中所用的资料，有的来自《楚辞》、《列子》、《庄子》、《吕氏春秋》等书，而这些书是战国后的作品。书中谈到的一些动物，如狻猊（suān ní，即龙九子之一，形如狮子），据研究，不是战国以前所能见到的。也有认为《尔雅》成书的下限不会晚于西汉，因为在汉文帝时已经设置了《尔雅》博士，到汉武帝时已经出现了犍为文学的《尔雅注》。\n\t")


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
      
      title: RouteConfig["IntroAncientPage"].titlename,
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
            renderItem={(data) => (<View><Text style={{fontSize:15,paddingLeft:15,paddingRight:15}}>{data.item}</Text><WhiteSpace size="xl" /></View>)}
            ></FlatList >

        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />

        <Text></Text>


          <TabNavigator tabBarStyle={{height:ScreenConfig.getTabBarHeight(), backgroundColor: '#ffffff',}}>
          <TabNavigator.Item
                        title={RouteConfig["ShuoWenBookPage"].name} 
                        renderIcon={() => RouteConfig["ShuoWenBookPage"].icon}
                        //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                        onPress={() => {navigate(RouteConfig["LunarCoursePage"].route),navigate(RouteConfig["ShuoWenBookPage"].route) }}  
                        titleStyle={StyleConfig.menufont}>  
            </TabNavigator.Item>  
            <TabNavigator.Item
                        title={RouteConfig["ErYaBookPage"].name} 
                        renderIcon={() => RouteConfig["ErYaBookPage"].icon}
                        //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                        onPress={() => {navigate(RouteConfig["LunarCoursePage"].route),navigate(RouteConfig["ErYaBookPage"].route) }}  
                        titleStyle={StyleConfig.menufont}>  
            </TabNavigator.Item>  
            <TabNavigator.Item
                        title={RouteConfig["ShengYunBookPage"].name} 
                        renderIcon={() => RouteConfig["ShengYunBookPage"].icon}
                        //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                        onPress={() => {navigate(RouteConfig["LunarCoursePage"].route),navigate(RouteConfig["ShengYunBookPage"].route) }}  
                        titleStyle={StyleConfig.menufont}>  
            </TabNavigator.Item>  
          </TabNavigator >
              </View>  
              )
    }
  };
module.exports=IntroAncientPage;  