
import React, {Component} from 'react';
import {StyleSheet,View,Button, TouchableOpacity,Dimensions, Text,TouchableWithoutFeedback,ScrollView,dismissKeyboard } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { TextareaItem ,Picker,List,InputItem,WhiteSpace} from '@ant-design/react-native';
import RouteConfig from '../../config/RouteConfig';
import ScreenConfig from '../../config/ScreenConfig';
import StyleConfig from '../../config/StyleConfig';
import NetModule from '../../net/NetModule'
import {NetApi} from '../../net/NetApi'

const agetype = [
  { value: '幼年', label: '幼年', children: []},
  { value: '少年', label: '少年', children: []},
  { value: '青年', label: '青年', children: []},
  { value: '中年', label: '中年', children: []},
  { value: '壮年', label: '壮年', children: []},
  { value: '老年', label: '老年', children: []},
]

const labeltype = 
[ 
  { value: '两性关系',label: '两性关系',children: 
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
  { value: '子女关系',label: '子女关系',children: 
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
  { value: '家庭关系',label: '家庭关系',children: 
      [ 
          { value: '父母关系', label: '父母关系', children: [] },
          { value: '兄弟关系', label: '兄弟关系', children: [] },
          { value: '姐妹关系', label: '姐妹关系', children: [] },
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

class ExplorationAskPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      value: [],
      pickerValue: [],
      dataage: [],
      valueage:[],
      content:""
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
    this.setState({ content:value });
  }
  onageChange = (value: any) => {
    // console.log(value);
    this.setState({ valueage:value });
  }

  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
      
    title: RouteConfig["ExplorationAskPage"].name,
    }
  };

  NewQuora() 
  {
    console.log("NewQuora",this.state.content,this.state.title)
    if(""==this.state.content || undefined==this.state.content)
    {
      alert("需要内容")
    }
    if(""==this.state.title || undefined==this.state.title)
    {
      alert("标题不能为空")
    }
    var data={"QuoraTitle":this.state.title,"QuoraContent":this.state.content}
    NetModule.fetchRequest(NetApi["NewQuora"].url,NetApi["NewQuora"].method,data).then(T=>
      {
        console.log(T)
          //this.setState({  tips:T.data ,Token: info.Token})
      })
  }

  render()
  {
    const { navigate } = this.props.navigation;
    return (
      <TouchableWithoutFeedback onPress={()=>{ dismissKeyboard()}}>
      <View style={styles.container}>
      <ScrollView>
      <InputItem
            defaultValue={this.state.title}
            clear
            placeholder="自动获取光标"
            autoFocus={
              /* TODO: https://github.com/facebook/jest/issues/3707  */ typeof jest ===
              'undefined'
            }
            onChange={(value: any) => {
              this.setState({
                title: value,
              });
            }}
          >
            标题
          </InputItem>
        <TextareaItem 
        rows={10} 
        placeholder="提出你的话题" 
        count={2000}
        onBlur={()=>{dismissKeyboard()}} 
        onChange={(value: any) => {
          // console.log(value);
          this.setState({ content:value });
        }}/>
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
        
          <Picker
            data={agetype}
            cols={1}
            value={this.state.valueage}
            onChange={this.onageChange}
          >
            <List.Item arrow="horizontal" last onClick={this.onage}>
              年龄分类
            </List.Item>
          </Picker>
          <WhiteSpace size="xl" />

          
          </List>
        </ScrollView>
        <TabNavigator  tabBarStyle={[{height:ScreenConfig.getTabBarHeight()}]}>
            <TabNavigator.Item
                        title={RouteConfig["submit"].name} 
                        renderIcon={() => RouteConfig["submit"].icon}
                        onPress={() => this.NewQuora() }  
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
module.exports=ExplorationAskPage;  