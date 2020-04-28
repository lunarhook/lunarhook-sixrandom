


import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TouchableHighlight, ScrollView, Text, FlatList ,Animated} from 'react-native';
import RouteConfig from './../../config/RouteConfig'
import IconConfig from './../../config/IconConfig'
import ScreenConfig from './../../config/ScreenConfig'
import {StyleConfig,FontStyleConfig} from './../../config/StyleConfig';
import TabNavigator from 'react-native-tab-navigator';  
import { Card, Button, Modal, WingBlank, WhiteSpace, List, SwipeAction, Icon } from '@ant-design/react-native';
const { width, height } = Dimensions.get('window');
import NameToolsModule from './NameToolsModule'


class NamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      searchText:"",
    };
  };

  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;

    return {
      title: RouteConfig["NamePage"].titlename,
    }
  };

  rowTranslateAnimatedValues = {};
  animationIsRunning=false
  componentDidMount() {
    this.buildname()
  }
  componentWillUnmount() {
  }

  


  buildname()
  {
    const n = 6;
    const html = [];
    for (let i = 0; i < n; i++) {
      const nameObj = NameToolsModule.genName();
      if(null!=nameObj)
      {html.push( JSON.stringify(nameObj))}
      
    }
    this.setState({dataSource:html})
  }
  renderItem = ({item}) => 
  {

    item = JSON.parse(item)
    const elements=[];
  
    try{item.fx.forEach(element=>{
      obj = JSON.parse(element)
      elements.push(<Text style={{ marginLeft: 16, }}>{obj.text + " " + obj.feature+ "属性,笔画:" + obj.step+",五行补"+obj.feature}</Text>)
    })}catch(e)
    {
      elements.pop()
      console.log(e)
    }

          return(<View>
            <Card>
                  <Card.Header
                    title={item.name  + " " +item.py}
                    
                  />
                  <Card.Body>
                    <View >
                    {elements}
                    <Text></Text>
                    <Text style={{ marginLeft: 16 }}>{"《"+item.title+"》"}</Text>
                    <Text></Text>
                      <Text style={{ marginLeft: 16 }}>{item.sentence}</Text>

                    </View>
                  </Card.Body>
                  <Card.Footer
                    content={"繁体: "+item.tname}
                    extra={item.book+(item.author!=null?"·"+item.author:"")}            />
                </Card><Text></Text>
      
            </View>)
  }
  render() {
    /*
    this.animationIsRunning=false
    this.rowTranslateAnimatedValues = {};
    rowlist = this.state.dataSource
    rowlist.forEach((element, i) => {
        this.rowTranslateAnimatedValues[`${element.id}`] = new Animated.Value(1);
    });
    */
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>
        <WingBlank>
        <FlatList
          //1数据的获取和渲染
          data={this.state.dataSource}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}/>  
    <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />

        <WhiteSpace size="xl" />
        </WingBlank>
        </ScrollView>
        <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight() , backgroundColor: '#ffffff',}}>
          <TabNavigator.Item
            title={RouteConfig["RefreshImage"].name}
            renderIcon={() => RouteConfig["RefreshImage"].icon}
            //renderSelectedIcon={() => IconConfig.IconDvinationSel}
            onPress={() => this.buildname()}
            titleStyle={StyleConfig.menufont}>
          </TabNavigator.Item>
        </TabNavigator >
    </View>)}

}

var styles = StyleSheet.create ({
  container: {
    flex:1,
    backgroundColor: 'white',
  },
  list:{
    height:45,
    //borderWidth:1,
    marginLeft: 10,
    paddingLeft:10,
    //borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    //textAlign:'center', 
    //textDecorationLine:'underline'
  },
    
  delete:{
    color:"#d8fffa",
    marginLeft:30,
    alignItems:'flex-start',//水平靠右
},
rowFront: {
  alignItems: 'center',
  backgroundColor: 'white',
  borderBottomColor: 'black',
  borderBottomWidth: 0,
  justifyContent: 'center',
  height: 120,
},
rowBack: {
  alignItems: 'center',
  //backgroundColor: '#DDD',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingLeft: 15,
},
backRightBtn: {
  alignItems: 'center',
  bottom: 0,
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  width: 75
},
backLeftBtnLeft: {
  //backgroundColor: 'blue',
  left:0 
},
backRightBtnLeft: {
  //backgroundColor: 'blue',
  right: 75
},
backRightBtnRight: {
  //backgroundColor: 'red',
  right: 0
},
controls: {
  alignItems: 'center',
  marginBottom: 30
},
switchContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  marginBottom: 5

}
});

module.exports = NamePage;  