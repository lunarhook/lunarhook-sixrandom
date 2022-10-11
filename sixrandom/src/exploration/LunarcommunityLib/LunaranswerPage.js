
import React, {Component} from 'react';
import {StyleSheet,View,Button, TouchableOpacity,Dimensions, Text,TouchableWithoutFeedback,ScrollView,dismissKeyboard} from 'react-native';
import TabNavigator from '@lunarhook/react-native-tab-navigator';  
import { TextareaItem ,Picker,List,Switch,WhiteSpace} from '@ant-design/react-native';
import RouteConfig from '../../config/RouteConfig';
import ScreenConfig from '../../config/ScreenConfig';
import StyleConfig from '../../config/StyleConfig';

const labeltype = 
[ 
  { value: '心理咨询',label: '心理咨询',children: 
    [ 
        { value: '心理咨询', label: '心理咨询', children: [
          { value: '沟通', label: '沟通', children: []},

        ] },
        { value: '心理咨询', label: '心理咨询', children: [
          { value: '复合', label: '复合', children: []},
        ] },
    ] 
  },
  { value: '情感咨询',label: '情感咨询',children: 
    [ 
        { value: '婚姻关系', label: '婚姻关系', children: [
          { value: '沟通', label: '沟通', children: []},
          { value: '诚信', label: '诚信', children: []},
          { value: '出轨', label: '出轨', children: []},
          { value: '伤害', label: '伤害', children: []},
          { value: '伤害', label: '冷暴力', children: []},
          { value: '离婚', label: '离婚', children: []},
        ] },
        { value: '恋爱关系', label: '恋爱关系', children: [
          { value: '复合', label: '复合', children: []},
          { value: '爱情', label: '爱情', children: []},
          { value: '婚姻', label: '婚姻', children: []},
          { value: '分手', label: '分手', children: []},
          { value: '其他', label: '其他', children: []},
        ] },
    ] 
  },
  { value: '教育留学',label: '教育留学',children: 
    [ 
        { value: '子女教育', label: '子女教育', children: [
          { value: '高考', label: '高考', children: []},
          { value: '语文', label: '语文', children: []},
          { value: '英语', label: '英语', children: []},
          { value: '兴趣班', label: '兴趣班', children: []},
          { value: '启蒙教育', label: '启蒙教育', children: []},
          { value: '小学教育', label: '小学教育', children: []},
          { value: '中学教育', label: '中学教育', children: []},
          { value: '其他教育', label: '其他教育', children: []},
        ] },
        { value: '子女关系', label: '子女情感', children: [
          { value: '情感沟通', label: '情感沟通', children: []},
          { value: '情商', label: '情商', children: []},
          { value: '性格', label: '性格', children: []},
        ] },
    ] 
  },
  { value: '医美健康',label: '医美健康',children:
    [ 
        { value: '医美', label: '医美', children: [
          { value: '美容', label: '美容', children: []},
          { value: '美妆', label: '美妆', children: []},
        ] },
        { value: '健康', label: '健康', children: [
          { value: '健身', label: '健身', children: []},
          { value: '减脂', label: '减脂', children: []},
        ] }
    ] 
  },
] 

const CustomChildren = (props: any) => (
  <TouchableOpacity onPress={props.onClick}>
    <View
      style={{ height: 36, paddingLeft: 15, flexDirection: 'row', alignItems: 'center' }}
    >
      <Text style={{ flex: 1 }}>{props.children}</Text>
      <Text style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</Text>
    </View>
  </TouchableOpacity>
);
class LunaranswerPageFake extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
      
    title: RouteConfig["LunaranswerPageFake"].name,
    }
  };

}
class LunaranswerPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      value: [],
      pickerValue: [],
      dataage: [],
      valueage:[],
      switchstate:true,
      selectedValue: '匿名公开',
    };
  }
  onClick = () => {
    console.log(labeltype)
    // console.log('start loading data');
    setTimeout(() => {
      this.setState({
        
        data: labeltype,
      });
    }, 500);
  }
  onage = () => {
    console.log(labeltype)
    // console.log('start loading data');
    setTimeout(() => {
      this.setState({
        
        dataage: agetype,
      });
    }, 500);
  }
  onChange = (value: any) => {
    // console.log(value);
    this.setState({ value:value });
  }

  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
    title: RouteConfig["LunaranswerPage"].name,
    }
  };

  render()
  {
    const { navigate } = this.props.navigation;
    return (
      <TouchableWithoutFeedback onPress={()=>{ dismissKeyboard()}}>
      <View style={styles.container}>
      <ScrollView>
        <TextareaItem 
        rows={10} 
        placeholder="提出您的咨询问题" 
        count={2000} 
        onBlur={()=>{dismissKeyboard()}}
        />
        <List>
        <WhiteSpace size="xl" />
        <Picker
            data={this.state.data}
            cols={3}
            value={this.state.value}
            onChange={this.onChange}
          >
            <List.Item arrow="horizontal" last onClick={this.onClick}>
              咨询分类
            </List.Item>
          </Picker>
          <WhiteSpace size="xl" />
          <List.Item
            extra={
              <Switch
                checked={this.state.switchstate}
                onChange={(value) =>this.setState({switchstate: value,selectedValue:false==value?"匿名隐私":"匿名公开"})}
              />
            }
          >{this.state.selectedValue}
          </List.Item>
          
          </List>
        </ScrollView>
        <TabNavigator  tabBarStyle={[{height:ScreenConfig.getTabBarHeight()}]}>
            <TabNavigator.Item
                        title={RouteConfig["Lunarsubmit"].name} 
                        renderIcon={() => RouteConfig["Lunarsubmit"].icon}
                          
                        titleStyle={StyleConfig.menufont}>  
            </TabNavigator.Item>  
            <TabNavigator.Item
                        title={RouteConfig["LunarConsultantListPage"].name} 
                        renderIcon={() => RouteConfig["LunarConsultantListPage"].icon}
                        //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                        onPress={() => navigate(RouteConfig["LunarConsultantListPage"].route) }  
                        titleStyle={StyleConfig.menufont}>  
            </TabNavigator.Item> 

          </TabNavigator >
        </View>
        </TouchableWithoutFeedback>
					)
  }

}

var styles = StyleSheet.create ({
  container: {
    flex:1,
  },
  index:
  {
    lineHeight:24,
    textAlign:'center', 
    fontSize:15,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
    alignItems: 'center',
  },
  list:{
    height:45,
    marginLeft: 10,
    paddingLeft:10,
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
  },
    vb_text: {  
    color: '#333333',  
    fontFamily: 'Times',  
    margin: 10,  
    fontSize: 12,         
    textAlign: 'auto',  
    lineHeight: 22,     //行高  
    fontStyle: 'italic',    //设置文字：normal：正常体；italic：斜体  
    fontWeight: 'bold', //设置粗体字，'normal' /*default*/, 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'  
    textDecorationLine: 'underline line-through',//下划线和删除线的样式：['none' /*default*/, 'underline', 'line-through', 'underline line-through'  
  },
});
export{LunaranswerPage,LunaranswerPageFake};  