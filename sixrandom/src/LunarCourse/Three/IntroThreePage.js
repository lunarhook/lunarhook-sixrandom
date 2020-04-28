
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
IntroThree[0].push("《三玄》导读：\n\t")
IntroThree[0].push("什么是《三玄》？\n\n\t答：魏晋玄学家对《老子》、《庄子》和《周易》三书的合称。道教亦沿用之。\n\t")
IntroThree[0].push("《三玄》在讲什么（一）？\n\n\t答：到了魏晋南北朝时，思想家们从《庄子》、《周易》、《老子》中汲取营养，开创了玄学一派。\n\t汉代的象数之学，到了魏晋的时候，发生了很大的变化。在方法上，就提出得意要忘象、得意要忘言，因为如果你停留在象和言上就不可能把握它的意，要得意就不能仅仅停留在语言和卦象上。这就形成了中国文化一个非常重要的转折，由强调象转而强调意，玄学也就随之产生了。\n\t")
IntroThree[0].push("《三玄》在讲什么（二）？\n\n\t答：我们再来谈《周易》，玄学家抛弃了汉代的象数易学，重视发掘《周易》蕴涵的深刻道理，提倡义理的易学。\n\t玄学家认为易这个词，其实包含了三层意义：不易、变易、简易。不易是什么呢？不易是指一个根本的秩序和原则，所以《系辞》里面一开始就讲，天地上下确定了，那么这个世界也就确定了，这就是一种不易。\n\t《周易》又讲了许多阴阳、刚柔等变化的过程，这就是变易。万物的变化虽然繁复，但天地却从不去干涉它，一切顺自然而发展，这就是简易\n\t")
IntroThree[0].push("《三玄》在讲什么（三）？\n\n\t答：另外，《周易》还包含了一种生生不息的品德。比如其中“天行健，君子以自强不息，地势坤，君子以厚德载物”的精神就对中国人影响很大。自强不息、厚德载物也都成了中国人追求的一种理想品格。\n\t《周易》里面还有许多重要的思想，比如它特别强调一个时的概念。我们看到很多彖辞、象辞都在赞叹这个时，“时之义大矣”！强调与时偕行，也就是说时间变化了，我们也要跟着变化。它还强调一个中，中正平和，这跟后来《中庸》的思想也可以联系在一起。\n\t")
IntroThree[0].push("《三玄》在讲什么（四）？\n\n\t答：《周易》是中国许多根本思想的源泉，历代对《周易》的注释数不胜数，思想家们都通过对《周易》的注释来发挥自己的见解。\n\t")
IntroThree[0].push("《三玄》在讲什么（五）？\n\n\t答：三玄里面的核心，就是老子的《道德经》了。《道德经》的核心就是自然无为，自然是强调尊重事物的本性，无为是强调不要以人的意志去干扰事物发展的方向，应该因势利导地去做。所以无为不等于无所作为，而是要积极地引导，是无为而无不为。。\n\t")



class IntroThreePage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        date:"",
        datahistory:[],
        activeSections: [0, 1,2,3,4],
      };
      this.onChange = (activeSections: number[]) => {
        
        var re = this.state.activeSections
        
        if(activeSections.length>1)
        {
          this.setState({activeSections:activeSections})
        }
        else
        {
          re.push(activeSections[0])
          this.setState({activeSections:re})
        }
        
        
      };
    };
  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;

    return{
      
      title: RouteConfig["IntroThreePage"].titlename,
    }
  };

  keyExtractor = (item,index) => item.id

  
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
                        title={RouteConfig["UniversBookPage"].name} 
                        renderIcon={() => RouteConfig["UniversBookPage"].icon}
                        //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                        onPress={() => {navigate(RouteConfig["LunarCoursePage"].route),navigate(RouteConfig["UniversBookPage"].route) }}  
                        titleStyle={StyleConfig.menufont}>  
            </TabNavigator.Item>  
            <TabNavigator.Item
                        title={RouteConfig["OldBookPage"].name} 
                        renderIcon={() => RouteConfig["OldBookPage"].icon}
                        //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                        onPress={() => {navigate(RouteConfig["LunarCoursePage"].route),navigate(RouteConfig["OldBookPage"].route) }}  
                        titleStyle={StyleConfig.menufont}>  
            </TabNavigator.Item>  
            <TabNavigator.Item
                        title={RouteConfig["ZhuangBookPage"].name} 
                        renderIcon={() => RouteConfig["ZhuangBookPage"].icon}
                        //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                        onPress={() => {navigate(RouteConfig["LunarCoursePage"].route),navigate(RouteConfig["ZhuangBookPage"].route) }}  
                        titleStyle={StyleConfig.menufont}>  
            </TabNavigator.Item>  
          </TabNavigator >
              </View>  
              )
    }
  };
var styles = StyleSheet.create ({

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
module.exports=IntroThreePage;  